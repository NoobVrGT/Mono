/* Scramjet configuration for Mono's proxy engine. */
(function () {
  var here = self.location.pathname;
  var base = /\/proxy\/sw\.js$/.test(here) ? here.replace(/proxy\/sw\.js$/, '') : here.replace(/[^/]*$/, '');

  function encode(str) {
    return encodeURIComponent(
      String(str).split('').map(function (c, i) {
        return i % 2 ? String.fromCharCode(c.charCodeAt(0) ^ 3) : c;
      }).join('')
    );
  }

  function decode(str) {
    var parts = String(str).split('?');
    var head = decodeURIComponent(parts[0]).split('').map(function (c, i) {
      return i % 2 ? String.fromCharCode(c.charCodeAt(0) ^ 3) : c;
    }).join('');
    return head + (parts.length > 1 ? '?' + parts.slice(1).join('?') : '');
  }

  self.__scramjet$config = {
    prefix: base + 'proxy/go/',
    files: {
      wasm: base + 'proxy/scramjet/wasm.wasm',
      all: base + 'proxy/scramjet/all.js',
      sync: base + 'proxy/scramjet/sync.js'
    },
    siteFlags: {},
    flags: {
      captureErrors: false,
      cleanErrors: true,
      naiiveRewriter: false,
      rewriterLogs: false,
      scramitize: false,
      serviceworkers: false,
      sourcemaps: false,
      strictRewrites: false,
      syncxhr: false
    },
    codec: { encode: encode, decode: decode }
  };
})();
