// src/registry.ts
var ModuleRegistry = class {
  modules = /* @__PURE__ */ new Map();
  moduleConfigs = /* @__PURE__ */ new Map();
  enabledModules = [];
  registerModule(module, config) {
    if (this.modules.has(module.id)) {
      console.warn(`[Enigma] Module ${module.id} already registered, overwriting`);
    }
    this.modules.set(module.id, module);
    if (config) {
      this.moduleConfigs.set(module.id, config);
    }
    if (module.enabled !== false) {
      this.enableModule(module.id);
    }
    console.debug(`[Enigma] Registered module: ${module.name} (${module.id})`);
  }
  unregisterModule(id) {
    if (!this.modules.has(id)) {
      return false;
    }
    this.modules.delete(id);
    this.moduleConfigs.delete(id);
    this.disableModule(id);
    console.debug(`[Enigma] Unregistered module: ${id}`);
    return true;
  }
  enableModule(id) {
    if (!this.modules.has(id)) {
      console.warn(`[Enigma] Cannot enable module ${id}: not found`);
      return false;
    }
    if (!this.enabledModules.includes(id)) {
      this.enabledModules.push(id);
      console.debug(`[Enigma] Enabled module: ${id}`);
    }
    return true;
  }
  disableModule(id) {
    const index = this.enabledModules.indexOf(id);
    if (index === -1) {
      return false;
    }
    this.enabledModules.splice(index, 1);
    console.debug(`[Enigma] Disabled module: ${id}`);
    return true;
  }
  getModule(id) {
    return this.modules.get(id);
  }
  getModuleConfig(id) {
    return this.moduleConfigs.get(id);
  }
  getEnabledModules() {
    return this.enabledModules.map((id) => this.modules.get(id)).filter((m) => m !== void 0).sort((a, b) => (b.priority || 0) - (a.priority || 0));
  }
  getAllModules() {
    return Array.from(this.modules.values());
  }
  isModuleEnabled(id) {
    return this.enabledModules.includes(id);
  }
  async initializeModules(innerTransport) {
    const modules = this.getEnabledModules();
    console.debug(`[Enigma] Initializing ${modules.length} enabled modules`);
    for (const module of modules) {
      try {
        if (module.hooks.onModuleInit) {
          await module.hooks.onModuleInit();
        }
        if (module.hooks.onTransportInit) {
          await module.hooks.onTransportInit(innerTransport);
        }
        console.debug(`[Enigma] Initialized module: ${module.name}`);
      } catch (error) {
        console.error(`[Enigma] Failed to initialize module ${module.name}:`, error);
        throw error;
      }
    }
  }
  async executeRequestChain(ctx) {
    const modules = this.getEnabledModules().filter((m) => m.hooks.onBeforeRequest);
    if (modules.length === 0) {
      return ctx;
    }
    let currentContext = { ...ctx };
    let index = 0;
    const next = async (modifications) => {
      if (modifications) {
        currentContext = { ...currentContext, ...modifications };
      }
      if (index >= modules.length) {
        return currentContext;
      }
      const module = modules[index++];
      const result = await module.hooks.onBeforeRequest(currentContext, next);
      if (result) {
        currentContext = result;
      }
      return currentContext;
    };
    return await next();
  }
  async executeResponseChain(ctx) {
    const modules = this.getEnabledModules().filter((m) => m.hooks.onAfterResponse);
    if (modules.length === 0) {
      return ctx;
    }
    let currentContext = { ...ctx };
    let index = 0;
    const next = async (modifications) => {
      if (modifications) {
        currentContext = { ...currentContext, ...modifications };
      }
      if (index >= modules.length) {
        return currentContext;
      }
      const module = modules[index++];
      const result = await module.hooks.onAfterResponse(currentContext, next);
      if (result) {
        currentContext = result;
      }
      return currentContext;
    };
    return await next();
  }
  executeWebSocketConnect(ctx, handlers, baseConnect) {
    const modules = this.getEnabledModules().filter((m) => m.hooks.onWebSocketConnect);
    if (modules.length === 0) {
      return baseConnect();
    }
    let currentContext = { ...ctx };
    let index = 0;
    const next = (modifications) => {
      if (modifications) {
        currentContext = { ...currentContext, ...modifications };
      }
      if (index >= modules.length) {
        return baseConnect();
      }
      const module = modules[index++];
      const result = module.hooks.onWebSocketConnect(currentContext, handlers, next);
      return result || next();
    };
    return next();
  }
  async executeWebSocketMessageChain(data, direction, url) {
    const modules = this.getEnabledModules().filter((m) => m.hooks.onWebSocketMessage);
    if (modules.length === 0) {
      return data;
    }
    let currentData = data;
    for (const module of modules) {
      try {
        const result = await module.hooks.onWebSocketMessage(currentData, direction, url);
        if (result !== void 0) {
          currentData = result;
        }
      } catch (error) {
        console.error(`[Enigma] Error in module ${module.name} WebSocket message handler:`, error);
      }
    }
    return currentData;
  }
  async collectMeta() {
    const modules = this.getEnabledModules().filter((m) => m.hooks.provideMeta);
    const meta = {};
    for (const module of modules) {
      try {
        const moduleMeta = await module.hooks.provideMeta();
        meta[module.id] = moduleMeta;
      } catch (error) {
        console.error(`[Enigma] Error collecting meta from module ${module.name}:`, error);
      }
    }
    return meta;
  }
};

// src/index.ts
var EnigmaTransport = class {
  ready = false;
  inner;
  registry;
  options;
  constructor(options) {
    this.options = options;
    this.registry = new ModuleRegistry();
  }
  async loadModules() {
    if (!this.options.modules) return;
    for (const moduleEntry of this.options.modules) {
      try {
        let module;
        if (typeof moduleEntry === "string") {
          const mod = await import(moduleEntry);
          const ModuleFactory = mod.default;
          const config2 = this.options.moduleConfigs?.find(
            (c) => mod.MODULE_ID ? c.id === mod.MODULE_ID : false
          );
          module = typeof ModuleFactory === "function" ? ModuleFactory(config2?.config) : ModuleFactory;
        } else if (typeof moduleEntry === "object" && "path" in moduleEntry) {
          const mod = await import(moduleEntry.path);
          const ModuleFactory = mod.default;
          module = typeof ModuleFactory === "function" ? ModuleFactory(moduleEntry.options) : ModuleFactory;
        } else {
          module = moduleEntry;
        }
        const config = this.options.moduleConfigs?.find((c) => c.id === module.id);
        this.registry.registerModule(module, config?.config);
        if (config && config.enabled !== void 0) {
          if (config.enabled) {
            this.registry.enableModule(module.id);
          } else {
            this.registry.disableModule(module.id);
          }
        }
      } catch (err) {
        console.error("[Enigma] Failed to load module:", moduleEntry, err);
      }
    }
  }
  get moduleRegistry() {
    return this.registry;
  }
  async init() {
    const { base: transportPath, modules, moduleConfigs, ...innerOptions } = this.options;
    console.debug("[Enigma] Initializing transport wrapper");
    try {
      await this.loadModules();
      const mod = await import(transportPath);
      const TransportClass = mod.default;
      this.inner = new TransportClass(innerOptions);
      if (typeof this.inner.init === "function") {
        await this.inner.init();
      }
      await this.registry.initializeModules(this.inner);
      this.ready = true;
      console.debug("[Enigma] Transport ready with", this.registry.getEnabledModules().length, "enabled modules");
    } catch (err) {
      console.error("[Enigma] Failed to initialize transport:", err);
      throw err;
    }
  }
  async meta() {
    const innerMeta = await this.inner.meta?.() || {};
    const moduleMeta = await this.registry.collectMeta();
    return {
      ...innerMeta,
      enigma: {
        version: "1.0.0",
        modules: moduleMeta
      }
    };
  }
  async request(remote, method, body, headers, signal) {
    const requestContext = {
      remote,
      method,
      body,
      headers,
      signal
    };
    const modifiedRequest = await this.registry.executeRequestChain(requestContext);
    const response = await this.inner.request(
      modifiedRequest.remote,
      modifiedRequest.method,
      modifiedRequest.body,
      modifiedRequest.headers,
      modifiedRequest.signal
    );
    const responseContext = {
      remote: modifiedRequest.remote,
      body: response.body,
      headers: response.headers,
      status: response.status,
      statusText: response.statusText
    };
    const modifiedResponse = await this.registry.executeResponseChain(responseContext);
    return {
      body: modifiedResponse.body,
      headers: modifiedResponse.headers,
      status: modifiedResponse.status,
      statusText: modifiedResponse.statusText
    };
  }
  connect(url, protocols, requestHeaders, onopen, onmessage, onclose, onerror) {
    const wsContext = {
      url,
      protocols,
      requestHeaders
    };
    const wsHandlers = {
      onopen,
      onmessage: async (data) => {
        const modifiedData = await this.registry.executeWebSocketMessageChain(data, "receive", url);
        onmessage(modifiedData);
      },
      onclose,
      onerror
    };
    const baseConnect = () => {
      const [baseSend, baseClose] = this.inner.connect(
        wsContext.url,
        wsContext.protocols,
        wsContext.requestHeaders,
        wsHandlers.onopen,
        wsHandlers.onmessage,
        wsHandlers.onclose,
        wsHandlers.onerror
      );
      return { send: baseSend, close: baseClose };
    };
    const controls = this.registry.executeWebSocketConnect(wsContext, wsHandlers, baseConnect);
    const wrappedSend = async (data) => {
      const modifiedData = await this.registry.executeWebSocketMessageChain(data, "send", url);
      controls.send(modifiedData);
    };
    return [wrappedSend, controls.close];
  }
};
export {
  ModuleRegistry,
  EnigmaTransport as default
};
