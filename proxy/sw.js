/* Service worker for Mono's proxy engine: Scramjet routing over a bare-mux
   transport (libcurl) that talks to a wisp server. */
const base = new URL('./', self.location.href).pathname;

importScripts(base + 'scramjet/config.js');
importScripts(base + 'baremux/index.js');
importScripts(base + 'scramjet/all.js');

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const engine = new ScramjetServiceWorker();
let cfgLoaded = null;

function loadConfig() {
  if (!cfgLoaded) cfgLoaded = engine.loadConfig().catch(function () {});
  return cfgLoaded;
}

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith((async function () {
    await loadConfig();
    try {
      if (engine.route(event)) return await engine.fetch(event);
    } catch (err) {
      console.warn('[mono proxy] scramjet fetch failed', err);
    }
    return fetch(event.request);
  })());
});
