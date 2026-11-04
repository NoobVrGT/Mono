(function(g,f){if(typeof exports=="object"&&typeof module<"u"){module.exports=f(require)}else if("function"==typeof define && define.amd){define("TransportTemplate",["fs","path","ws"],function(_d_0,_d_1,_d_2){var d={"fs": _d_0,"path": _d_1,"ws": _d_2},r=function(m){if(m in d) return d[m];if(typeof require=="function") return require(m);throw new Error("Cannot find module '"+m+"'")};return f(r)})}else {var gN={"fs":"fs","path":"path","ws":"ws"},gReq=function(r){var mod = r in gN ? g[gN[r]] : g[r]; return mod };g["TransportTemplate"]=f(gReq)}}(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : this,function(require){var exports={};var __exports=exports;var module={exports};
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ModuleRegistry: () => ModuleRegistry,
  default: () => EnigmaTransport
});
module.exports = __toCommonJS(index_exports);

// src/registry.ts
var ModuleRegistry = class {
  modules = /* @__PURE__ */ new Map();
  moduleConfigs = /* @__PURE__ */ new Map();
  enabledModules = [];
  registerModule(module2, config) {
    if (this.modules.has(module2.id)) {
      console.warn(`[Enigma] Module ${module2.id} already registered, overwriting`);
    }
    this.modules.set(module2.id, module2);
    if (config) {
      this.moduleConfigs.set(module2.id, config);
    }
    if (module2.enabled !== false) {
      this.enableModule(module2.id);
    }
    console.debug(`[Enigma] Registered module: ${module2.name} (${module2.id})`);
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
    for (const module2 of modules) {
      try {
        if (module2.hooks.onModuleInit) {
          await module2.hooks.onModuleInit();
        }
        if (module2.hooks.onTransportInit) {
          await module2.hooks.onTransportInit(innerTransport);
        }
        console.debug(`[Enigma] Initialized module: ${module2.name}`);
      } catch (error) {
        console.error(`[Enigma] Failed to initialize module ${module2.name}:`, error);
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
      const module2 = modules[index++];
      const result = await module2.hooks.onBeforeRequest(currentContext, next);
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
      const module2 = modules[index++];
      const result = await module2.hooks.onAfterResponse(currentContext, next);
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
      const module2 = modules[index++];
      const result = module2.hooks.onWebSocketConnect(currentContext, handlers, next);
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
    for (const module2 of modules) {
      try {
        const result = await module2.hooks.onWebSocketMessage(currentData, direction, url);
        if (result !== void 0) {
          currentData = result;
        }
      } catch (error) {
        console.error(`[Enigma] Error in module ${module2.name} WebSocket message handler:`, error);
      }
    }
    return currentData;
  }
  async collectMeta() {
    const modules = this.getEnabledModules().filter((m) => m.hooks.provideMeta);
    const meta = {};
    for (const module2 of modules) {
      try {
        const moduleMeta = await module2.hooks.provideMeta();
        meta[module2.id] = moduleMeta;
      } catch (error) {
        console.error(`[Enigma] Error collecting meta from module ${module2.name}:`, error);
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
        let module2;
        if (typeof moduleEntry === "string") {
          const mod = await import(moduleEntry);
          const ModuleFactory = mod.default;
          const config2 = this.options.moduleConfigs?.find(
            (c) => mod.MODULE_ID ? c.id === mod.MODULE_ID : false
          );
          module2 = typeof ModuleFactory === "function" ? ModuleFactory(config2?.config) : ModuleFactory;
        } else if (typeof moduleEntry === "object" && "path" in moduleEntry) {
          const mod = await import(moduleEntry.path);
          const ModuleFactory = mod.default;
          module2 = typeof ModuleFactory === "function" ? ModuleFactory(moduleEntry.options) : ModuleFactory;
        } else {
          module2 = moduleEntry;
        }
        const config = this.options.moduleConfigs?.find((c) => c.id === module2.id);
        this.registry.registerModule(module2, config?.config);
        if (config && config.enabled !== void 0) {
          if (config.enabled) {
            this.registry.enableModule(module2.id);
          } else {
            this.registry.disableModule(module2.id);
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

if(__exports != exports)module.exports = exports;return module.exports}));
