function ZE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wf = { exports: {} }, Ve = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sy;
function HE() {
  if (Sy) return Ve;
  Sy = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
  function x(w) {
    return w === null || typeof w != "object" ? null : (w = y && w[y] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _ = Object.assign, D = {};
  function $(w, Q, se) {
    this.props = w, this.context = Q, this.refs = D, this.updater = se || E;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(w, Q) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, Q, "setState");
  }, $.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function X() {
  }
  X.prototype = $.prototype;
  function R(w, Q, se) {
    this.props = w, this.context = Q, this.refs = D, this.updater = se || E;
  }
  var Z = R.prototype = new X();
  Z.constructor = R, _(Z, $.prototype), Z.isPureReactComponent = !0;
  var W = Array.isArray, Y = { H: null, A: null, T: null, S: null, V: null }, O = Object.prototype.hasOwnProperty;
  function J(w, Q, se, ie, fe, Te) {
    return se = Te.ref, {
      $$typeof: e,
      type: w,
      key: Q,
      ref: se !== void 0 ? se : null,
      props: Te
    };
  }
  function H(w, Q) {
    return J(
      w.type,
      Q,
      void 0,
      void 0,
      void 0,
      w.props
    );
  }
  function ce(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }
  function me(w) {
    var Q = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(se) {
      return Q[se];
    });
  }
  var G = /\/+/g;
  function q(w, Q) {
    return typeof w == "object" && w !== null && w.key != null ? me("" + w.key) : Q.toString(36);
  }
  function ae() {
  }
  function U(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(ae, ae) : (w.status = "pending", w.then(
          function(Q) {
            w.status === "pending" && (w.status = "fulfilled", w.value = Q);
          },
          function(Q) {
            w.status === "pending" && (w.status = "rejected", w.reason = Q);
          }
        )), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function ne(w, Q, se, ie, fe) {
    var Te = typeof w;
    (Te === "undefined" || Te === "boolean") && (w = null);
    var Se = !1;
    if (w === null) Se = !0;
    else
      switch (Te) {
        case "bigint":
        case "string":
        case "number":
          Se = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case e:
            case n:
              Se = !0;
              break;
            case g:
              return Se = w._init, ne(
                Se(w._payload),
                Q,
                se,
                ie,
                fe
              );
          }
      }
    if (Se)
      return fe = fe(w), Se = ie === "" ? "." + q(w, 0) : ie, W(fe) ? (se = "", Se != null && (se = Se.replace(G, "$&/") + "/"), ne(fe, Q, se, "", function(mt) {
        return mt;
      })) : fe != null && (ce(fe) && (fe = H(
        fe,
        se + (fe.key == null || w && w.key === fe.key ? "" : ("" + fe.key).replace(
          G,
          "$&/"
        ) + "/") + Se
      )), Q.push(fe)), 1;
    Se = 0;
    var Me = ie === "" ? "." : ie + ":";
    if (W(w))
      for (var Be = 0; Be < w.length; Be++)
        ie = w[Be], Te = Me + q(ie, Be), Se += ne(
          ie,
          Q,
          se,
          Te,
          fe
        );
    else if (Be = x(w), typeof Be == "function")
      for (w = Be.call(w), Be = 0; !(ie = w.next()).done; )
        ie = ie.value, Te = Me + q(ie, Be++), Se += ne(
          ie,
          Q,
          se,
          Te,
          fe
        );
    else if (Te === "object") {
      if (typeof w.then == "function")
        return ne(
          U(w),
          Q,
          se,
          ie,
          fe
        );
      throw Q = String(w), Error(
        "Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Se;
  }
  function S(w, Q, se) {
    if (w == null) return w;
    var ie = [], fe = 0;
    return ne(w, ie, "", "", function(Te) {
      return Q.call(se, Te, fe++);
    }), ie;
  }
  function j(w) {
    if (w._status === -1) {
      var Q = w._result;
      Q = Q(), Q.then(
        function(se) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = se);
        },
        function(se) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = se);
        }
      ), w._status === -1 && (w._status = 0, w._result = Q);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var z = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(Q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  };
  function le() {
  }
  return Ve.Children = {
    map: S,
    forEach: function(w, Q, se) {
      S(
        w,
        function() {
          Q.apply(this, arguments);
        },
        se
      );
    },
    count: function(w) {
      var Q = 0;
      return S(w, function() {
        Q++;
      }), Q;
    },
    toArray: function(w) {
      return S(w, function(Q) {
        return Q;
      }) || [];
    },
    only: function(w) {
      if (!ce(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  }, Ve.Component = $, Ve.Fragment = r, Ve.Profiler = l, Ve.PureComponent = R, Ve.StrictMode = s, Ve.Suspense = m, Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, Ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return Y.H.useMemoCache(w);
    }
  }, Ve.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, Ve.cloneElement = function(w, Q, se) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var ie = _({}, w.props), fe = w.key, Te = void 0;
    if (Q != null)
      for (Se in Q.ref !== void 0 && (Te = void 0), Q.key !== void 0 && (fe = "" + Q.key), Q)
        !O.call(Q, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && Q.ref === void 0 || (ie[Se] = Q[Se]);
    var Se = arguments.length - 2;
    if (Se === 1) ie.children = se;
    else if (1 < Se) {
      for (var Me = Array(Se), Be = 0; Be < Se; Be++)
        Me[Be] = arguments[Be + 2];
      ie.children = Me;
    }
    return J(w.type, fe, void 0, void 0, Te, ie);
  }, Ve.createContext = function(w) {
    return w = {
      $$typeof: f,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: c,
      _context: w
    }, w;
  }, Ve.createElement = function(w, Q, se) {
    var ie, fe = {}, Te = null;
    if (Q != null)
      for (ie in Q.key !== void 0 && (Te = "" + Q.key), Q)
        O.call(Q, ie) && ie !== "key" && ie !== "__self" && ie !== "__source" && (fe[ie] = Q[ie]);
    var Se = arguments.length - 2;
    if (Se === 1) fe.children = se;
    else if (1 < Se) {
      for (var Me = Array(Se), Be = 0; Be < Se; Be++)
        Me[Be] = arguments[Be + 2];
      fe.children = Me;
    }
    if (w && w.defaultProps)
      for (ie in Se = w.defaultProps, Se)
        fe[ie] === void 0 && (fe[ie] = Se[ie]);
    return J(w, Te, void 0, void 0, null, fe);
  }, Ve.createRef = function() {
    return { current: null };
  }, Ve.forwardRef = function(w) {
    return { $$typeof: h, render: w };
  }, Ve.isValidElement = ce, Ve.lazy = function(w) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: w },
      _init: j
    };
  }, Ve.memo = function(w, Q) {
    return {
      $$typeof: p,
      type: w,
      compare: Q === void 0 ? null : Q
    };
  }, Ve.startTransition = function(w) {
    var Q = Y.T, se = {};
    Y.T = se;
    try {
      var ie = w(), fe = Y.S;
      fe !== null && fe(se, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && ie.then(le, z);
    } catch (Te) {
      z(Te);
    } finally {
      Y.T = Q;
    }
  }, Ve.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, Ve.use = function(w) {
    return Y.H.use(w);
  }, Ve.useActionState = function(w, Q, se) {
    return Y.H.useActionState(w, Q, se);
  }, Ve.useCallback = function(w, Q) {
    return Y.H.useCallback(w, Q);
  }, Ve.useContext = function(w) {
    return Y.H.useContext(w);
  }, Ve.useDebugValue = function() {
  }, Ve.useDeferredValue = function(w, Q) {
    return Y.H.useDeferredValue(w, Q);
  }, Ve.useEffect = function(w, Q, se) {
    var ie = Y.H;
    if (typeof se == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ie.useEffect(w, Q);
  }, Ve.useId = function() {
    return Y.H.useId();
  }, Ve.useImperativeHandle = function(w, Q, se) {
    return Y.H.useImperativeHandle(w, Q, se);
  }, Ve.useInsertionEffect = function(w, Q) {
    return Y.H.useInsertionEffect(w, Q);
  }, Ve.useLayoutEffect = function(w, Q) {
    return Y.H.useLayoutEffect(w, Q);
  }, Ve.useMemo = function(w, Q) {
    return Y.H.useMemo(w, Q);
  }, Ve.useOptimistic = function(w, Q) {
    return Y.H.useOptimistic(w, Q);
  }, Ve.useReducer = function(w, Q, se) {
    return Y.H.useReducer(w, Q, se);
  }, Ve.useRef = function(w) {
    return Y.H.useRef(w);
  }, Ve.useState = function(w) {
    return Y.H.useState(w);
  }, Ve.useSyncExternalStore = function(w, Q, se) {
    return Y.H.useSyncExternalStore(
      w,
      Q,
      se
    );
  }, Ve.useTransition = function() {
    return Y.H.useTransition();
  }, Ve.version = "19.1.0", Ve;
}
var wy;
function Cu() {
  return wy || (wy = 1, Wf.exports = /* @__PURE__ */ HE()), Wf.exports;
}
var C = /* @__PURE__ */ Cu();
const Re = /* @__PURE__ */ ZE(C);
var ed = { exports: {} }, Ks = {}, td = { exports: {} }, nd = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ty;
function GE() {
  return Ty || (Ty = 1, function(e) {
    function n(S, j) {
      var z = S.length;
      S.push(j);
      e: for (; 0 < z; ) {
        var le = z - 1 >>> 1, w = S[le];
        if (0 < l(w, j))
          S[le] = j, S[z] = w, z = le;
        else break e;
      }
    }
    function r(S) {
      return S.length === 0 ? null : S[0];
    }
    function s(S) {
      if (S.length === 0) return null;
      var j = S[0], z = S.pop();
      if (z !== j) {
        S[0] = z;
        e: for (var le = 0, w = S.length, Q = w >>> 1; le < Q; ) {
          var se = 2 * (le + 1) - 1, ie = S[se], fe = se + 1, Te = S[fe];
          if (0 > l(ie, z))
            fe < w && 0 > l(Te, ie) ? (S[le] = Te, S[fe] = z, le = fe) : (S[le] = ie, S[se] = z, le = se);
          else if (fe < w && 0 > l(Te, z))
            S[le] = Te, S[fe] = z, le = fe;
          else break e;
        }
      }
      return j;
    }
    function l(S, j) {
      var z = S.sortIndex - j.sortIndex;
      return z !== 0 ? z : S.id - j.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      e.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, h = f.now();
      e.unstable_now = function() {
        return f.now() - h;
      };
    }
    var m = [], p = [], g = 1, y = null, x = 3, E = !1, _ = !1, D = !1, $ = !1, X = typeof setTimeout == "function" ? setTimeout : null, R = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function W(S) {
      for (var j = r(p); j !== null; ) {
        if (j.callback === null) s(p);
        else if (j.startTime <= S)
          s(p), j.sortIndex = j.expirationTime, n(m, j);
        else break;
        j = r(p);
      }
    }
    function Y(S) {
      if (D = !1, W(S), !_)
        if (r(m) !== null)
          _ = !0, O || (O = !0, q());
        else {
          var j = r(p);
          j !== null && ne(Y, j.startTime - S);
        }
    }
    var O = !1, J = -1, H = 5, ce = -1;
    function me() {
      return $ ? !0 : !(e.unstable_now() - ce < H);
    }
    function G() {
      if ($ = !1, O) {
        var S = e.unstable_now();
        ce = S;
        var j = !0;
        try {
          e: {
            _ = !1, D && (D = !1, R(J), J = -1), E = !0;
            var z = x;
            try {
              t: {
                for (W(S), y = r(m); y !== null && !(y.expirationTime > S && me()); ) {
                  var le = y.callback;
                  if (typeof le == "function") {
                    y.callback = null, x = y.priorityLevel;
                    var w = le(
                      y.expirationTime <= S
                    );
                    if (S = e.unstable_now(), typeof w == "function") {
                      y.callback = w, W(S), j = !0;
                      break t;
                    }
                    y === r(m) && s(m), W(S);
                  } else s(m);
                  y = r(m);
                }
                if (y !== null) j = !0;
                else {
                  var Q = r(p);
                  Q !== null && ne(
                    Y,
                    Q.startTime - S
                  ), j = !1;
                }
              }
              break e;
            } finally {
              y = null, x = z, E = !1;
            }
            j = void 0;
          }
        } finally {
          j ? q() : O = !1;
        }
      }
    }
    var q;
    if (typeof Z == "function")
      q = function() {
        Z(G);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), U = ae.port2;
      ae.port1.onmessage = G, q = function() {
        U.postMessage(null);
      };
    } else
      q = function() {
        X(G, 0);
      };
    function ne(S, j) {
      J = X(function() {
        S(e.unstable_now());
      }, j);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, e.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < S ? Math.floor(1e3 / S) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, e.unstable_next = function(S) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = x;
      }
      var z = x;
      x = j;
      try {
        return S();
      } finally {
        x = z;
      }
    }, e.unstable_requestPaint = function() {
      $ = !0;
    }, e.unstable_runWithPriority = function(S, j) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var z = x;
      x = S;
      try {
        return j();
      } finally {
        x = z;
      }
    }, e.unstable_scheduleCallback = function(S, j, z) {
      var le = e.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? le + z : le) : z = le, S) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return w = z + w, S = {
        id: g++,
        callback: j,
        priorityLevel: S,
        startTime: z,
        expirationTime: w,
        sortIndex: -1
      }, z > le ? (S.sortIndex = z, n(p, S), r(m) === null && S === r(p) && (D ? (R(J), J = -1) : D = !0, ne(Y, z - le))) : (S.sortIndex = w, n(m, S), _ || E || (_ = !0, O || (O = !0, q()))), S;
    }, e.unstable_shouldYield = me, e.unstable_wrapCallback = function(S) {
      var j = x;
      return function() {
        var z = x;
        x = j;
        try {
          return S.apply(this, arguments);
        } finally {
          x = z;
        }
      };
    };
  }(nd)), nd;
}
var Ey;
function qE() {
  return Ey || (Ey = 1, td.exports = /* @__PURE__ */ GE()), td.exports;
}
var ad = { exports: {} }, Bt = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ay;
function YE() {
  if (Ay) return Bt;
  Ay = 1;
  var e = /* @__PURE__ */ Cu();
  function n(m) {
    var p = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + m + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var s = {
    d: {
      f: r,
      r: function() {
        throw Error(n(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, l = Symbol.for("react.portal");
  function c(m, p, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: y == null ? null : "" + y,
      children: m,
      containerInfo: p,
      implementation: g
    };
  }
  var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, p) {
    if (m === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Bt.createPortal = function(m, p) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(n(299));
    return c(m, p, null, g);
  }, Bt.flushSync = function(m) {
    var p = f.T, g = s.p;
    try {
      if (f.T = null, s.p = 2, m) return m();
    } finally {
      f.T = p, s.p = g, s.d.f();
    }
  }, Bt.preconnect = function(m, p) {
    typeof m == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(m, p));
  }, Bt.prefetchDNS = function(m) {
    typeof m == "string" && s.d.D(m);
  }, Bt.preinit = function(m, p) {
    if (typeof m == "string" && p && typeof p.as == "string") {
      var g = p.as, y = h(g, p.crossOrigin), x = typeof p.integrity == "string" ? p.integrity : void 0, E = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      g === "style" ? s.d.S(
        m,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: y,
          integrity: x,
          fetchPriority: E
        }
      ) : g === "script" && s.d.X(m, {
        crossOrigin: y,
        integrity: x,
        fetchPriority: E,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Bt.preinitModule = function(m, p) {
    if (typeof m == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var g = h(
            p.as,
            p.crossOrigin
          );
          s.d.M(m, {
            crossOrigin: g,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && s.d.M(m);
  }, Bt.preload = function(m, p) {
    if (typeof m == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var g = p.as, y = h(g, p.crossOrigin);
      s.d.L(m, g, {
        crossOrigin: y,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Bt.preloadModule = function(m, p) {
    if (typeof m == "string")
      if (p) {
        var g = h(p.as, p.crossOrigin);
        s.d.m(m, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: g,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else s.d.m(m);
  }, Bt.requestFormReset = function(m) {
    s.d.r(m);
  }, Bt.unstable_batchedUpdates = function(m, p) {
    return m(p);
  }, Bt.useFormState = function(m, p, g) {
    return f.H.useFormState(m, p, g);
  }, Bt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Bt.version = "19.1.0", Bt;
}
var _y;
function FE() {
  if (_y) return ad.exports;
  _y = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), ad.exports = /* @__PURE__ */ YE(), ad.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Cy;
function XE() {
  if (Cy) return Ks;
  Cy = 1;
  var e = /* @__PURE__ */ qE(), n = /* @__PURE__ */ Cu(), r = /* @__PURE__ */ FE();
  function s(t) {
    var a = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        a += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + t + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function c(t) {
    var a = t, i = t;
    if (t.alternate) for (; a.return; ) a = a.return;
    else {
      t = a;
      do
        a = t, (a.flags & 4098) !== 0 && (i = a.return), t = a.return;
      while (t);
    }
    return a.tag === 3 ? i : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var a = t.memoizedState;
      if (a === null && (t = t.alternate, t !== null && (a = t.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (c(t) !== t)
      throw Error(s(188));
  }
  function m(t) {
    var a = t.alternate;
    if (!a) {
      if (a = c(t), a === null) throw Error(s(188));
      return a !== t ? null : t;
    }
    for (var i = t, o = a; ; ) {
      var u = i.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (o = u.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === i) return h(u), t;
          if (d === o) return h(u), a;
          d = d.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== o.return) i = u, o = d;
      else {
        for (var v = !1, b = u.child; b; ) {
          if (b === i) {
            v = !0, i = u, o = d;
            break;
          }
          if (b === o) {
            v = !0, o = u, i = d;
            break;
          }
          b = b.sibling;
        }
        if (!v) {
          for (b = d.child; b; ) {
            if (b === i) {
              v = !0, i = d, o = u;
              break;
            }
            if (b === o) {
              v = !0, o = d, i = u;
              break;
            }
            b = b.sibling;
          }
          if (!v) throw Error(s(189));
        }
      }
      if (i.alternate !== o) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? t : a;
  }
  function p(t) {
    var a = t.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return t;
    for (t = t.child; t !== null; ) {
      if (a = p(t), a !== null) return a;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign, y = Symbol.for("react.element"), x = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), X = Symbol.for("react.provider"), R = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), me = Symbol.for("react.memo_cache_sentinel"), G = Symbol.iterator;
  function q(t) {
    return t === null || typeof t != "object" ? null : (t = G && t[G] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ae = Symbol.for("react.client.reference");
  function U(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ae ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case _:
        return "Fragment";
      case $:
        return "Profiler";
      case D:
        return "StrictMode";
      case Y:
        return "Suspense";
      case O:
        return "SuspenseList";
      case ce:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case E:
          return "Portal";
        case Z:
          return (t.displayName || "Context") + ".Provider";
        case R:
          return (t._context.displayName || "Context") + ".Consumer";
        case W:
          var a = t.render;
          return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case J:
          return a = t.displayName || null, a !== null ? a : U(t.type) || "Memo";
        case H:
          a = t._payload, t = t._init;
          try {
            return U(t(a));
          } catch {
          }
      }
    return null;
  }
  var ne = Array.isArray, S = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, le = [], w = -1;
  function Q(t) {
    return { current: t };
  }
  function se(t) {
    0 > w || (t.current = le[w], le[w] = null, w--);
  }
  function ie(t, a) {
    w++, le[w] = t.current, t.current = a;
  }
  var fe = Q(null), Te = Q(null), Se = Q(null), Me = Q(null);
  function Be(t, a) {
    switch (ie(Se, a), ie(Te, t), ie(fe, null), a.nodeType) {
      case 9:
      case 11:
        t = (t = a.documentElement) && (t = t.namespaceURI) ? Kv(t) : 0;
        break;
      default:
        if (t = a.tagName, a = a.namespaceURI)
          a = Kv(a), t = Qv(a, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    se(fe), ie(fe, t);
  }
  function mt() {
    se(fe), se(Te), se(Se);
  }
  function Zt(t) {
    t.memoizedState !== null && ie(Me, t);
    var a = fe.current, i = Qv(a, t.type);
    a !== i && (ie(Te, t), ie(fe, i));
  }
  function At(t) {
    Te.current === t && (se(fe), se(Te)), Me.current === t && (se(Me), Gs._currentValue = z);
  }
  var _t = Object.prototype.hasOwnProperty, Ht = e.unstable_scheduleCallback, Nn = e.unstable_cancelCallback, Lr = e.unstable_shouldYield, Ji = e.unstable_requestPaint, Kt = e.unstable_now, In = e.unstable_getCurrentPriorityLevel, Sa = e.unstable_ImmediatePriority, A = e.unstable_UserBlockingPriority, N = e.unstable_NormalPriority, K = e.unstable_LowPriority, de = e.unstable_IdlePriority, ue = e.log, oe = e.unstable_setDisableYieldValue, pe = null, ze = null;
  function $e(t) {
    if (typeof ue == "function" && oe(t), ze && typeof ze.setStrictMode == "function")
      try {
        ze.setStrictMode(pe, t);
      } catch {
      }
  }
  var Fe = Math.clz32 ? Math.clz32 : Wi, wa = Math.log, mn = Math.LN2;
  function Wi(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (wa(t) / mn | 0) | 0;
  }
  var Ln = 256, Ct = 4194304;
  function Jn(t) {
    var a = t & 42;
    if (a !== 0) return a;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function nr(t, a, i) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var u = 0, d = t.suspendedLanes, v = t.pingedLanes;
    t = t.warmLanes;
    var b = o & 134217727;
    return b !== 0 ? (o = b & ~d, o !== 0 ? u = Jn(o) : (v &= b, v !== 0 ? u = Jn(v) : i || (i = b & ~t, i !== 0 && (u = Jn(i))))) : (b = o & ~d, b !== 0 ? u = Jn(b) : v !== 0 ? u = Jn(v) : i || (i = o & ~t, i !== 0 && (u = Jn(i)))), u === 0 ? 0 : a !== 0 && a !== u && (a & d) === 0 && (d = u & -u, i = a & -a, d >= i || d === 32 && (i & 4194048) !== 0) ? a : u;
  }
  function ar(t, a) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & a) === 0;
  }
  function Vo(t, a) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Vm() {
    var t = Ln;
    return Ln <<= 1, (Ln & 4194048) === 0 && (Ln = 256), t;
  }
  function Om() {
    var t = Ct;
    return Ct <<= 1, (Ct & 62914560) === 0 && (Ct = 4194304), t;
  }
  function Pu(t) {
    for (var a = [], i = 0; 31 > i; i++) a.push(t);
    return a;
  }
  function es(t, a) {
    t.pendingLanes |= a, a !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function zw(t, a, i, o, u, d) {
    var v = t.pendingLanes;
    t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= i, t.entangledLanes &= i, t.errorRecoveryDisabledLanes &= i, t.shellSuspendCounter = 0;
    var b = t.entanglements, T = t.expirationTimes, L = t.hiddenUpdates;
    for (i = v & ~i; 0 < i; ) {
      var I = 31 - Fe(i), te = 1 << I;
      b[I] = 0, T[I] = -1;
      var B = L[I];
      if (B !== null)
        for (L[I] = null, I = 0; I < B.length; I++) {
          var P = B[I];
          P !== null && (P.lane &= -536870913);
        }
      i &= ~te;
    }
    o !== 0 && km(t, o, 0), d !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(v & ~a));
  }
  function km(t, a, i) {
    t.pendingLanes |= a, t.suspendedLanes &= ~a;
    var o = 31 - Fe(a);
    t.entangledLanes |= a, t.entanglements[o] = t.entanglements[o] | 1073741824 | i & 4194090;
  }
  function $m(t, a) {
    var i = t.entangledLanes |= a;
    for (t = t.entanglements; i; ) {
      var o = 31 - Fe(i), u = 1 << o;
      u & a | t[o] & a && (t[o] |= a), i &= ~u;
    }
  }
  function Zu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Hu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function jm() {
    var t = j.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : py(t.type));
  }
  function Rw(t, a) {
    var i = j.p;
    try {
      return j.p = t, a();
    } finally {
      j.p = i;
    }
  }
  var Ta = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + Ta, Qt = "__reactProps$" + Ta, Ur = "__reactContainer$" + Ta, Gu = "__reactEvents$" + Ta, Vw = "__reactListeners$" + Ta, Ow = "__reactHandles$" + Ta, Nm = "__reactResources$" + Ta, ts = "__reactMarker$" + Ta;
  function qu(t) {
    delete t[Lt], delete t[Qt], delete t[Gu], delete t[Vw], delete t[Ow];
  }
  function Br(t) {
    var a = t[Lt];
    if (a) return a;
    for (var i = t.parentNode; i; ) {
      if (a = i[Ur] || i[Lt]) {
        if (i = a.alternate, a.child !== null || i !== null && i.child !== null)
          for (t = ey(t); t !== null; ) {
            if (i = t[Lt]) return i;
            t = ey(t);
          }
        return a;
      }
      t = i, i = t.parentNode;
    }
    return null;
  }
  function Pr(t) {
    if (t = t[Lt] || t[Ur]) {
      var a = t.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return t;
    }
    return null;
  }
  function ns(t) {
    var a = t.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Zr(t) {
    var a = t[Nm];
    return a || (a = t[Nm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function Mt(t) {
    t[ts] = !0;
  }
  var Lm = /* @__PURE__ */ new Set(), Um = {};
  function rr(t, a) {
    Hr(t, a), Hr(t + "Capture", a);
  }
  function Hr(t, a) {
    for (Um[t] = a, t = 0; t < a.length; t++)
      Lm.add(a[t]);
  }
  var kw = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Bm = {}, Pm = {};
  function $w(t) {
    return _t.call(Pm, t) ? !0 : _t.call(Bm, t) ? !1 : kw.test(t) ? Pm[t] = !0 : (Bm[t] = !0, !1);
  }
  function Oo(t, a, i) {
    if ($w(a))
      if (i === null) t.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(a);
            return;
          case "boolean":
            var o = a.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(a);
              return;
            }
        }
        t.setAttribute(a, "" + i);
      }
  }
  function ko(t, a, i) {
    if (i === null) t.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttribute(a, "" + i);
    }
  }
  function Wn(t, a, i, o) {
    if (o === null) t.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttributeNS(a, i, "" + o);
    }
  }
  var Yu, Zm;
  function Gr(t) {
    if (Yu === void 0)
      try {
        throw Error();
      } catch (i) {
        var a = i.stack.trim().match(/\n( *(at )?)/);
        Yu = a && a[1] || "", Zm = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Yu + t + Zm;
  }
  var Fu = !1;
  function Xu(t, a) {
    if (!t || Fu) return "";
    Fu = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var te = function() {
                throw Error();
              };
              if (Object.defineProperty(te.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(te, []);
                } catch (P) {
                  var B = P;
                }
                Reflect.construct(t, [], te);
              } else {
                try {
                  te.call();
                } catch (P) {
                  B = P;
                }
                t.call(te.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (P) {
                B = P;
              }
              (te = t()) && typeof te.catch == "function" && te.catch(function() {
              });
            }
          } catch (P) {
            if (P && B && typeof P.stack == "string")
              return [P.stack, B.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = o.DetermineComponentFrameRoot(), v = d[0], b = d[1];
      if (v && b) {
        var T = v.split(`
`), L = b.split(`
`);
        for (u = o = 0; o < T.length && !T[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; u < L.length && !L[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (o === T.length || u === L.length)
          for (o = T.length - 1, u = L.length - 1; 1 <= o && 0 <= u && T[o] !== L[u]; )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (T[o] !== L[u]) {
            if (o !== 1 || u !== 1)
              do
                if (o--, u--, 0 > u || T[o] !== L[u]) {
                  var I = `
` + T[o].replace(" at new ", " at ");
                  return t.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", t.displayName)), I;
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      Fu = !1, Error.prepareStackTrace = i;
    }
    return (i = t ? t.displayName || t.name : "") ? Gr(i) : "";
  }
  function jw(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Gr(t.type);
      case 16:
        return Gr("Lazy");
      case 13:
        return Gr("Suspense");
      case 19:
        return Gr("SuspenseList");
      case 0:
      case 15:
        return Xu(t.type, !1);
      case 11:
        return Xu(t.type.render, !1);
      case 1:
        return Xu(t.type, !0);
      case 31:
        return Gr("Activity");
      default:
        return "";
    }
  }
  function Hm(t) {
    try {
      var a = "";
      do
        a += jw(t), t = t.return;
      while (t);
      return a;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function pn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Gm(t) {
    var a = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function Nw(t) {
    var a = Gm(t) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      a
    ), o = "" + t[a];
    if (!t.hasOwnProperty(a) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var u = i.get, d = i.set;
      return Object.defineProperty(t, a, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(v) {
          o = "" + v, d.call(this, v);
        }
      }), Object.defineProperty(t, a, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(v) {
          o = "" + v;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[a];
        }
      };
    }
  }
  function $o(t) {
    t._valueTracker || (t._valueTracker = Nw(t));
  }
  function qm(t) {
    if (!t) return !1;
    var a = t._valueTracker;
    if (!a) return !0;
    var i = a.getValue(), o = "";
    return t && (o = Gm(t) ? t.checked ? "true" : "false" : t.value), t = o, t !== i ? (a.setValue(t), !0) : !1;
  }
  function jo(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Lw = /[\n"\\]/g;
  function gn(t) {
    return t.replace(
      Lw,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ku(t, a, i, o, u, d, v, b) {
    t.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"), a != null ? v === "number" ? (a === 0 && t.value === "" || t.value != a) && (t.value = "" + pn(a)) : t.value !== "" + pn(a) && (t.value = "" + pn(a)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"), a != null ? Qu(t, v, pn(a)) : i != null ? Qu(t, v, pn(i)) : o != null && t.removeAttribute("value"), u == null && d != null && (t.defaultChecked = !!d), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + pn(b) : t.removeAttribute("name");
  }
  function Ym(t, a, i, o, u, d, v, b) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.type = d), a != null || i != null) {
      if (!(d !== "submit" && d !== "reset" || a != null))
        return;
      i = i != null ? "" + pn(i) : "", a = a != null ? "" + pn(a) : i, b || a === t.value || (t.value = a), t.defaultValue = a;
    }
    o = o ?? u, o = typeof o != "function" && typeof o != "symbol" && !!o, t.checked = b ? t.checked : !!o, t.defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v);
  }
  function Qu(t, a, i) {
    a === "number" && jo(t.ownerDocument) === t || t.defaultValue === "" + i || (t.defaultValue = "" + i);
  }
  function qr(t, a, i, o) {
    if (t = t.options, a) {
      a = {};
      for (var u = 0; u < i.length; u++)
        a["$" + i[u]] = !0;
      for (i = 0; i < t.length; i++)
        u = a.hasOwnProperty("$" + t[i].value), t[i].selected !== u && (t[i].selected = u), u && o && (t[i].defaultSelected = !0);
    } else {
      for (i = "" + pn(i), a = null, u = 0; u < t.length; u++) {
        if (t[u].value === i) {
          t[u].selected = !0, o && (t[u].defaultSelected = !0);
          return;
        }
        a !== null || t[u].disabled || (a = t[u]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Fm(t, a, i) {
    if (a != null && (a = "" + pn(a), a !== t.value && (t.value = a), i == null)) {
      t.defaultValue !== a && (t.defaultValue = a);
      return;
    }
    t.defaultValue = i != null ? "" + pn(i) : "";
  }
  function Xm(t, a, i, o) {
    if (a == null) {
      if (o != null) {
        if (i != null) throw Error(s(92));
        if (ne(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), a = i;
    }
    i = pn(a), t.defaultValue = i, o = t.textContent, o === i && o !== "" && o !== null && (t.value = o);
  }
  function Yr(t, a) {
    if (a) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = a;
        return;
      }
    }
    t.textContent = a;
  }
  var Uw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Km(t, a, i) {
    var o = a.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "" : o ? t.setProperty(a, i) : typeof i != "number" || i === 0 || Uw.has(a) ? a === "float" ? t.cssFloat = i : t[a] = ("" + i).trim() : t[a] = i + "px";
  }
  function Qm(t, a, i) {
    if (a != null && typeof a != "object")
      throw Error(s(62));
    if (t = t.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || a != null && a.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o, "") : o === "float" ? t.cssFloat = "" : t[o] = "");
      for (var u in a)
        o = a[u], a.hasOwnProperty(u) && i[u] !== o && Km(t, u, o);
    } else
      for (var d in a)
        a.hasOwnProperty(d) && Km(t, d, a[d]);
  }
  function Iu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bw = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Pw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function No(t) {
    return Pw.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Ju = null;
  function Wu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Fr = null, Xr = null;
  function Im(t) {
    var a = Pr(t);
    if (a && (t = a.stateNode)) {
      var i = t[Qt] || null;
      e: switch (t = a.stateNode, a.type) {
        case "input":
          if (Ku(
            t,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), a = i.name, i.type === "radio" && a != null) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + gn(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < i.length; a++) {
              var o = i[a];
              if (o !== t && o.form === t.form) {
                var u = o[Qt] || null;
                if (!u) throw Error(s(90));
                Ku(
                  o,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (a = 0; a < i.length; a++)
              o = i[a], o.form === t.form && qm(o);
          }
          break e;
        case "textarea":
          Fm(t, i.value, i.defaultValue);
          break e;
        case "select":
          a = i.value, a != null && qr(t, !!i.multiple, a, !1);
      }
    }
  }
  var ec = !1;
  function Jm(t, a, i) {
    if (ec) return t(a, i);
    ec = !0;
    try {
      var o = t(a);
      return o;
    } finally {
      if (ec = !1, (Fr !== null || Xr !== null) && (wl(), Fr && (a = Fr, t = Xr, Xr = Fr = null, Im(a), t)))
        for (a = 0; a < t.length; a++) Im(t[a]);
    }
  }
  function as(t, a) {
    var i = t.stateNode;
    if (i === null) return null;
    var o = i[Qt] || null;
    if (o === null) return null;
    i = o[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (t = t.type, o = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !o;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (i && typeof i != "function")
      throw Error(
        s(231, a, typeof i)
      );
    return i;
  }
  var ea = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tc = !1;
  if (ea)
    try {
      var rs = {};
      Object.defineProperty(rs, "passive", {
        get: function() {
          tc = !0;
        }
      }), window.addEventListener("test", rs, rs), window.removeEventListener("test", rs, rs);
    } catch {
      tc = !1;
    }
  var Ea = null, nc = null, Lo = null;
  function Wm() {
    if (Lo) return Lo;
    var t, a = nc, i = a.length, o, u = "value" in Ea ? Ea.value : Ea.textContent, d = u.length;
    for (t = 0; t < i && a[t] === u[t]; t++) ;
    var v = i - t;
    for (o = 1; o <= v && a[i - o] === u[d - o]; o++) ;
    return Lo = u.slice(t, 1 < o ? 1 - o : void 0);
  }
  function Uo(t) {
    var a = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Bo() {
    return !0;
  }
  function ep() {
    return !1;
  }
  function It(t) {
    function a(i, o, u, d, v) {
      this._reactName = i, this._targetInst = u, this.type = o, this.nativeEvent = d, this.target = v, this.currentTarget = null;
      for (var b in t)
        t.hasOwnProperty(b) && (i = t[b], this[b] = i ? i(d) : d[b]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Bo : ep, this.isPropagationStopped = ep, this;
    }
    return g(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Bo);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Bo);
      },
      persist: function() {
      },
      isPersistent: Bo
    }), a;
  }
  var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Po = It(ir), is = g({}, ir, { view: 0, detail: 0 }), Zw = It(is), ac, rc, ss, Zo = g({}, is, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ss && (ss && t.type === "mousemove" ? (ac = t.screenX - ss.screenX, rc = t.screenY - ss.screenY) : rc = ac = 0, ss = t), ac);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : rc;
    }
  }), tp = It(Zo), Hw = g({}, Zo, { dataTransfer: 0 }), Gw = It(Hw), qw = g({}, is, { relatedTarget: 0 }), ic = It(qw), Yw = g({}, ir, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fw = It(Yw), Xw = g({}, ir, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Kw = It(Xw), Qw = g({}, ir, { data: 0 }), np = It(Qw), Iw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ww = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eT(t) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(t) : (t = Ww[t]) ? !!a[t] : !1;
  }
  function sc() {
    return eT;
  }
  var tT = g({}, is, {
    key: function(t) {
      if (t.key) {
        var a = Iw[t.key] || t.key;
        if (a !== "Unidentified") return a;
      }
      return t.type === "keypress" ? (t = Uo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Jw[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sc,
    charCode: function(t) {
      return t.type === "keypress" ? Uo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Uo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), nT = It(tT), aT = g({}, Zo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ap = It(aT), rT = g({}, is, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sc
  }), iT = It(rT), sT = g({}, ir, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), oT = It(sT), lT = g({}, Zo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), uT = It(lT), cT = g({}, ir, {
    newState: 0,
    oldState: 0
  }), fT = It(cT), dT = [9, 13, 27, 32], oc = ea && "CompositionEvent" in window, os = null;
  ea && "documentMode" in document && (os = document.documentMode);
  var hT = ea && "TextEvent" in window && !os, rp = ea && (!oc || os && 8 < os && 11 >= os), ip = " ", sp = !1;
  function op(t, a) {
    switch (t) {
      case "keyup":
        return dT.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lp(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Kr = !1;
  function mT(t, a) {
    switch (t) {
      case "compositionend":
        return lp(a);
      case "keypress":
        return a.which !== 32 ? null : (sp = !0, ip);
      case "textInput":
        return t = a.data, t === ip && sp ? null : t;
      default:
        return null;
    }
  }
  function pT(t, a) {
    if (Kr)
      return t === "compositionend" || !oc && op(t, a) ? (t = Wm(), Lo = nc = Ea = null, Kr = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return rp && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var gT = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function up(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a === "input" ? !!gT[t.type] : a === "textarea";
  }
  function cp(t, a, i, o) {
    Fr ? Xr ? Xr.push(o) : Xr = [o] : Fr = o, a = Ml(a, "onChange"), 0 < a.length && (i = new Po(
      "onChange",
      "change",
      null,
      i,
      o
    ), t.push({ event: i, listeners: a }));
  }
  var ls = null, us = null;
  function vT(t) {
    Gv(t, 0);
  }
  function Ho(t) {
    var a = ns(t);
    if (qm(a)) return t;
  }
  function fp(t, a) {
    if (t === "change") return a;
  }
  var dp = !1;
  if (ea) {
    var lc;
    if (ea) {
      var uc = "oninput" in document;
      if (!uc) {
        var hp = document.createElement("div");
        hp.setAttribute("oninput", "return;"), uc = typeof hp.oninput == "function";
      }
      lc = uc;
    } else lc = !1;
    dp = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function mp() {
    ls && (ls.detachEvent("onpropertychange", pp), us = ls = null);
  }
  function pp(t) {
    if (t.propertyName === "value" && Ho(us)) {
      var a = [];
      cp(
        a,
        us,
        t,
        Wu(t)
      ), Jm(vT, a);
    }
  }
  function yT(t, a, i) {
    t === "focusin" ? (mp(), ls = a, us = i, ls.attachEvent("onpropertychange", pp)) : t === "focusout" && mp();
  }
  function bT(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ho(us);
  }
  function xT(t, a) {
    if (t === "click") return Ho(a);
  }
  function ST(t, a) {
    if (t === "input" || t === "change")
      return Ho(a);
  }
  function wT(t, a) {
    return t === a && (t !== 0 || 1 / t === 1 / a) || t !== t && a !== a;
  }
  var rn = typeof Object.is == "function" ? Object.is : wT;
  function cs(t, a) {
    if (rn(t, a)) return !0;
    if (typeof t != "object" || t === null || typeof a != "object" || a === null)
      return !1;
    var i = Object.keys(t), o = Object.keys(a);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var u = i[o];
      if (!_t.call(a, u) || !rn(t[u], a[u]))
        return !1;
    }
    return !0;
  }
  function gp(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function vp(t, a) {
    var i = gp(t);
    t = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = t + i.textContent.length, t <= a && o >= a)
          return { node: i, offset: a - t };
        t = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = gp(i);
    }
  }
  function yp(t, a) {
    return t && a ? t === a ? !0 : t && t.nodeType === 3 ? !1 : a && a.nodeType === 3 ? yp(t, a.parentNode) : "contains" in t ? t.contains(a) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function bp(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var a = jo(t.document); a instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof a.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) t = a.contentWindow;
      else break;
      a = jo(t.document);
    }
    return a;
  }
  function cc(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a && (a === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || a === "textarea" || t.contentEditable === "true");
  }
  var TT = ea && "documentMode" in document && 11 >= document.documentMode, Qr = null, fc = null, fs = null, dc = !1;
  function xp(t, a, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    dc || Qr == null || Qr !== jo(o) || (o = Qr, "selectionStart" in o && cc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), fs && cs(fs, o) || (fs = o, o = Ml(fc, "onSelect"), 0 < o.length && (a = new Po(
      "onSelect",
      "select",
      null,
      a,
      i
    ), t.push({ event: a, listeners: o }), a.target = Qr)));
  }
  function sr(t, a) {
    var i = {};
    return i[t.toLowerCase()] = a.toLowerCase(), i["Webkit" + t] = "webkit" + a, i["Moz" + t] = "moz" + a, i;
  }
  var Ir = {
    animationend: sr("Animation", "AnimationEnd"),
    animationiteration: sr("Animation", "AnimationIteration"),
    animationstart: sr("Animation", "AnimationStart"),
    transitionrun: sr("Transition", "TransitionRun"),
    transitionstart: sr("Transition", "TransitionStart"),
    transitioncancel: sr("Transition", "TransitionCancel"),
    transitionend: sr("Transition", "TransitionEnd")
  }, hc = {}, Sp = {};
  ea && (Sp = document.createElement("div").style, "AnimationEvent" in window || (delete Ir.animationend.animation, delete Ir.animationiteration.animation, delete Ir.animationstart.animation), "TransitionEvent" in window || delete Ir.transitionend.transition);
  function or(t) {
    if (hc[t]) return hc[t];
    if (!Ir[t]) return t;
    var a = Ir[t], i;
    for (i in a)
      if (a.hasOwnProperty(i) && i in Sp)
        return hc[t] = a[i];
    return t;
  }
  var wp = or("animationend"), Tp = or("animationiteration"), Ep = or("animationstart"), ET = or("transitionrun"), AT = or("transitionstart"), _T = or("transitioncancel"), Ap = or("transitionend"), _p = /* @__PURE__ */ new Map(), mc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mc.push("scrollEnd");
  function Rn(t, a) {
    _p.set(t, a), rr(a, [t]);
  }
  var Cp = /* @__PURE__ */ new WeakMap();
  function vn(t, a) {
    if (typeof t == "object" && t !== null) {
      var i = Cp.get(t);
      return i !== void 0 ? i : (a = {
        value: t,
        source: a,
        stack: Hm(a)
      }, Cp.set(t, a), a);
    }
    return {
      value: t,
      source: a,
      stack: Hm(a)
    };
  }
  var yn = [], Jr = 0, pc = 0;
  function Go() {
    for (var t = Jr, a = pc = Jr = 0; a < t; ) {
      var i = yn[a];
      yn[a++] = null;
      var o = yn[a];
      yn[a++] = null;
      var u = yn[a];
      yn[a++] = null;
      var d = yn[a];
      if (yn[a++] = null, o !== null && u !== null) {
        var v = o.pending;
        v === null ? u.next = u : (u.next = v.next, v.next = u), o.pending = u;
      }
      d !== 0 && Mp(i, u, d);
    }
  }
  function qo(t, a, i, o) {
    yn[Jr++] = t, yn[Jr++] = a, yn[Jr++] = i, yn[Jr++] = o, pc |= o, t.lanes |= o, t = t.alternate, t !== null && (t.lanes |= o);
  }
  function gc(t, a, i, o) {
    return qo(t, a, i, o), Yo(t);
  }
  function Wr(t, a) {
    return qo(t, null, null, a), Yo(t);
  }
  function Mp(t, a, i) {
    t.lanes |= i;
    var o = t.alternate;
    o !== null && (o.lanes |= i);
    for (var u = !1, d = t.return; d !== null; )
      d.childLanes |= i, o = d.alternate, o !== null && (o.childLanes |= i), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (u = !0)), t = d, d = d.return;
    return t.tag === 3 ? (d = t.stateNode, u && a !== null && (u = 31 - Fe(i), t = d.hiddenUpdates, o = t[u], o === null ? t[u] = [a] : o.push(a), a.lane = i | 536870912), d) : null;
  }
  function Yo(t) {
    if (50 < js)
      throw js = 0, Tf = null, Error(s(185));
    for (var a = t.return; a !== null; )
      t = a, a = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ei = {};
  function CT(t, a, i, o) {
    this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function sn(t, a, i, o) {
    return new CT(t, a, i, o);
  }
  function vc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ta(t, a) {
    var i = t.alternate;
    return i === null ? (i = sn(
      t.tag,
      a,
      t.key,
      t.mode
    ), i.elementType = t.elementType, i.type = t.type, i.stateNode = t.stateNode, i.alternate = t, t.alternate = i) : (i.pendingProps = a, i.type = t.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = t.flags & 65011712, i.childLanes = t.childLanes, i.lanes = t.lanes, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, a = t.dependencies, i.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, i.sibling = t.sibling, i.index = t.index, i.ref = t.ref, i.refCleanup = t.refCleanup, i;
  }
  function Dp(t, a) {
    t.flags &= 65011714;
    var i = t.alternate;
    return i === null ? (t.childLanes = 0, t.lanes = a, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = i.childLanes, t.lanes = i.lanes, t.child = i.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = i.memoizedProps, t.memoizedState = i.memoizedState, t.updateQueue = i.updateQueue, t.type = i.type, a = i.dependencies, t.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), t;
  }
  function Fo(t, a, i, o, u, d) {
    var v = 0;
    if (o = t, typeof t == "function") vc(t) && (v = 1);
    else if (typeof t == "string")
      v = DE(
        t,
        i,
        fe.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      e: switch (t) {
        case ce:
          return t = sn(31, i, a, u), t.elementType = ce, t.lanes = d, t;
        case _:
          return lr(i.children, u, d, a);
        case D:
          v = 8, u |= 24;
          break;
        case $:
          return t = sn(12, i, a, u | 2), t.elementType = $, t.lanes = d, t;
        case Y:
          return t = sn(13, i, a, u), t.elementType = Y, t.lanes = d, t;
        case O:
          return t = sn(19, i, a, u), t.elementType = O, t.lanes = d, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case X:
              case Z:
                v = 10;
                break e;
              case R:
                v = 9;
                break e;
              case W:
                v = 11;
                break e;
              case J:
                v = 14;
                break e;
              case H:
                v = 16, o = null;
                break e;
            }
          v = 29, i = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), o = null;
      }
    return a = sn(v, i, a, u), a.elementType = t, a.type = o, a.lanes = d, a;
  }
  function lr(t, a, i, o) {
    return t = sn(7, t, o, a), t.lanes = i, t;
  }
  function yc(t, a, i) {
    return t = sn(6, t, null, a), t.lanes = i, t;
  }
  function bc(t, a, i) {
    return a = sn(
      4,
      t.children !== null ? t.children : [],
      t.key,
      a
    ), a.lanes = i, a.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, a;
  }
  var ti = [], ni = 0, Xo = null, Ko = 0, bn = [], xn = 0, ur = null, na = 1, aa = "";
  function cr(t, a) {
    ti[ni++] = Ko, ti[ni++] = Xo, Xo = t, Ko = a;
  }
  function zp(t, a, i) {
    bn[xn++] = na, bn[xn++] = aa, bn[xn++] = ur, ur = t;
    var o = na;
    t = aa;
    var u = 32 - Fe(o) - 1;
    o &= ~(1 << u), i += 1;
    var d = 32 - Fe(a) + u;
    if (30 < d) {
      var v = u - u % 5;
      d = (o & (1 << v) - 1).toString(32), o >>= v, u -= v, na = 1 << 32 - Fe(a) + u | i << u | o, aa = d + t;
    } else
      na = 1 << d | i << u | o, aa = t;
  }
  function xc(t) {
    t.return !== null && (cr(t, 1), zp(t, 1, 0));
  }
  function Sc(t) {
    for (; t === Xo; )
      Xo = ti[--ni], ti[ni] = null, Ko = ti[--ni], ti[ni] = null;
    for (; t === ur; )
      ur = bn[--xn], bn[xn] = null, aa = bn[--xn], bn[xn] = null, na = bn[--xn], bn[xn] = null;
  }
  var Gt = null, st = null, He = !1, fr = null, Un = !1, wc = Error(s(519));
  function dr(t) {
    var a = Error(s(418, ""));
    throw ms(vn(a, t)), wc;
  }
  function Rp(t) {
    var a = t.stateNode, i = t.type, o = t.memoizedProps;
    switch (a[Lt] = t, a[Qt] = o, i) {
      case "dialog":
        Le("cancel", a), Le("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        Le("load", a);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ls.length; i++)
          Le(Ls[i], a);
        break;
      case "source":
        Le("error", a);
        break;
      case "img":
      case "image":
      case "link":
        Le("error", a), Le("load", a);
        break;
      case "details":
        Le("toggle", a);
        break;
      case "input":
        Le("invalid", a), Ym(
          a,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), $o(a);
        break;
      case "select":
        Le("invalid", a);
        break;
      case "textarea":
        Le("invalid", a), Xm(a, o.value, o.defaultValue, o.children), $o(a);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || a.textContent === "" + i || o.suppressHydrationWarning === !0 || Xv(a.textContent, i) ? (o.popover != null && (Le("beforetoggle", a), Le("toggle", a)), o.onScroll != null && Le("scroll", a), o.onScrollEnd != null && Le("scrollend", a), o.onClick != null && (a.onclick = Dl), a = !0) : a = !1, a || dr(t);
  }
  function Vp(t) {
    for (Gt = t.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 13:
          Un = !1;
          return;
        case 27:
        case 3:
          Un = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function ds(t) {
    if (t !== Gt) return !1;
    if (!He) return Vp(t), He = !0, !1;
    var a = t.tag, i;
    if ((i = a !== 3 && a !== 27) && ((i = a === 5) && (i = t.type, i = !(i !== "form" && i !== "button") || Uf(t.type, t.memoizedProps)), i = !i), i && st && dr(t), Vp(t), a === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      e: {
        for (t = t.nextSibling, a = 0; t; ) {
          if (t.nodeType === 8)
            if (i = t.data, i === "/$") {
              if (a === 0) {
                st = On(t.nextSibling);
                break e;
              }
              a--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || a++;
          t = t.nextSibling;
        }
        st = null;
      }
    } else
      a === 27 ? (a = st, Ba(t.type) ? (t = Hf, Hf = null, st = t) : st = a) : st = Gt ? On(t.stateNode.nextSibling) : null;
    return !0;
  }
  function hs() {
    st = Gt = null, He = !1;
  }
  function Op() {
    var t = fr;
    return t !== null && (en === null ? en = t : en.push.apply(
      en,
      t
    ), fr = null), t;
  }
  function ms(t) {
    fr === null ? fr = [t] : fr.push(t);
  }
  var Tc = Q(null), hr = null, ra = null;
  function Aa(t, a, i) {
    ie(Tc, a._currentValue), a._currentValue = i;
  }
  function ia(t) {
    t._currentValue = Tc.current, se(Tc);
  }
  function Ec(t, a, i) {
    for (; t !== null; ) {
      var o = t.alternate;
      if ((t.childLanes & a) !== a ? (t.childLanes |= a, o !== null && (o.childLanes |= a)) : o !== null && (o.childLanes & a) !== a && (o.childLanes |= a), t === i) break;
      t = t.return;
    }
  }
  function Ac(t, a, i, o) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var v = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var b = d;
          d = u;
          for (var T = 0; T < a.length; T++)
            if (b.context === a[T]) {
              d.lanes |= i, b = d.alternate, b !== null && (b.lanes |= i), Ec(
                d.return,
                i,
                t
              ), o || (v = null);
              break e;
            }
          d = b.next;
        }
      } else if (u.tag === 18) {
        if (v = u.return, v === null) throw Error(s(341));
        v.lanes |= i, d = v.alternate, d !== null && (d.lanes |= i), Ec(v, i, t), v = null;
      } else v = u.child;
      if (v !== null) v.return = u;
      else
        for (v = u; v !== null; ) {
          if (v === t) {
            v = null;
            break;
          }
          if (u = v.sibling, u !== null) {
            u.return = v.return, v = u;
            break;
          }
          v = v.return;
        }
      u = v;
    }
  }
  function ps(t, a, i, o) {
    t = null;
    for (var u = a, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var v = u.alternate;
        if (v === null) throw Error(s(387));
        if (v = v.memoizedProps, v !== null) {
          var b = u.type;
          rn(u.pendingProps.value, v.value) || (t !== null ? t.push(b) : t = [b]);
        }
      } else if (u === Me.current) {
        if (v = u.alternate, v === null) throw Error(s(387));
        v.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Gs) : t = [Gs]);
      }
      u = u.return;
    }
    t !== null && Ac(
      a,
      t,
      i,
      o
    ), a.flags |= 262144;
  }
  function Qo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!rn(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function mr(t) {
    hr = t, ra = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Ut(t) {
    return kp(hr, t);
  }
  function Io(t, a) {
    return hr === null && mr(t), kp(t, a);
  }
  function kp(t, a) {
    var i = a._currentValue;
    if (a = { context: a, memoizedValue: i, next: null }, ra === null) {
      if (t === null) throw Error(s(308));
      ra = a, t.dependencies = { lanes: 0, firstContext: a }, t.flags |= 524288;
    } else ra = ra.next = a;
    return i;
  }
  var MT = typeof AbortController < "u" ? AbortController : function() {
    var t = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        t.push(o);
      }
    };
    this.abort = function() {
      a.aborted = !0, t.forEach(function(i) {
        return i();
      });
    };
  }, DT = e.unstable_scheduleCallback, zT = e.unstable_NormalPriority, xt = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _c() {
    return {
      controller: new MT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function gs(t) {
    t.refCount--, t.refCount === 0 && DT(zT, function() {
      t.controller.abort();
    });
  }
  var vs = null, Cc = 0, ai = 0, ri = null;
  function RT(t, a) {
    if (vs === null) {
      var i = vs = [];
      Cc = 0, ai = zf(), ri = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Cc++, a.then($p, $p), a;
  }
  function $p() {
    if (--Cc === 0 && vs !== null) {
      ri !== null && (ri.status = "fulfilled");
      var t = vs;
      vs = null, ai = 0, ri = null;
      for (var a = 0; a < t.length; a++) (0, t[a])();
    }
  }
  function VT(t, a) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        i.push(u);
      }
    };
    return t.then(
      function() {
        o.status = "fulfilled", o.value = a;
        for (var u = 0; u < i.length; u++) (0, i[u])(a);
      },
      function(u) {
        for (o.status = "rejected", o.reason = u, u = 0; u < i.length; u++)
          (0, i[u])(void 0);
      }
    ), o;
  }
  var jp = S.S;
  S.S = function(t, a) {
    typeof a == "object" && a !== null && typeof a.then == "function" && RT(t, a), jp !== null && jp(t, a);
  };
  var pr = Q(null);
  function Mc() {
    var t = pr.current;
    return t !== null ? t : Je.pooledCache;
  }
  function Jo(t, a) {
    a === null ? ie(pr, pr.current) : ie(pr, a.pool);
  }
  function Np() {
    var t = Mc();
    return t === null ? null : { parent: xt._currentValue, pool: t };
  }
  var ys = Error(s(460)), Lp = Error(s(474)), Wo = Error(s(542)), Dc = { then: function() {
  } };
  function Up(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function el() {
  }
  function Bp(t, a, i) {
    switch (i = t[i], i === void 0 ? t.push(a) : i !== a && (a.then(el, el), a = i), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw t = a.reason, Zp(t), t;
      default:
        if (typeof a.status == "string") a.then(el, el);
        else {
          if (t = Je, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = a, t.status = "pending", t.then(
            function(o) {
              if (a.status === "pending") {
                var u = a;
                u.status = "fulfilled", u.value = o;
              }
            },
            function(o) {
              if (a.status === "pending") {
                var u = a;
                u.status = "rejected", u.reason = o;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw t = a.reason, Zp(t), t;
        }
        throw bs = a, ys;
    }
  }
  var bs = null;
  function Pp() {
    if (bs === null) throw Error(s(459));
    var t = bs;
    return bs = null, t;
  }
  function Zp(t) {
    if (t === ys || t === Wo)
      throw Error(s(483));
  }
  var _a = !1;
  function zc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Rc(t, a) {
    t = t.updateQueue, a.updateQueue === t && (a.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ca(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ma(t, a, i) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ge & 2) !== 0) {
      var u = o.pending;
      return u === null ? a.next = a : (a.next = u.next, u.next = a), o.pending = a, a = Yo(t), Mp(t, null, i), a;
    }
    return qo(t, o, a, i), Yo(t);
  }
  function xs(t, a, i) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (i & 4194048) !== 0)) {
      var o = a.lanes;
      o &= t.pendingLanes, i |= o, a.lanes = i, $m(t, i);
    }
  }
  function Vc(t, a) {
    var i = t.updateQueue, o = t.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var u = null, d = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var v = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          d === null ? u = d = v : d = d.next = v, i = i.next;
        } while (i !== null);
        d === null ? u = d = a : d = d.next = a;
      } else u = d = a;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks
      }, t.updateQueue = i;
      return;
    }
    t = i.lastBaseUpdate, t === null ? i.firstBaseUpdate = a : t.next = a, i.lastBaseUpdate = a;
  }
  var Oc = !1;
  function Ss() {
    if (Oc) {
      var t = ri;
      if (t !== null) throw t;
    }
  }
  function ws(t, a, i, o) {
    Oc = !1;
    var u = t.updateQueue;
    _a = !1;
    var d = u.firstBaseUpdate, v = u.lastBaseUpdate, b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var T = b, L = T.next;
      T.next = null, v === null ? d = L : v.next = L, v = T;
      var I = t.alternate;
      I !== null && (I = I.updateQueue, b = I.lastBaseUpdate, b !== v && (b === null ? I.firstBaseUpdate = L : b.next = L, I.lastBaseUpdate = T));
    }
    if (d !== null) {
      var te = u.baseState;
      v = 0, I = L = T = null, b = d;
      do {
        var B = b.lane & -536870913, P = B !== b.lane;
        if (P ? (Pe & B) === B : (o & B) === B) {
          B !== 0 && B === ai && (Oc = !0), I !== null && (I = I.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var _e = t, Ee = b;
            B = a;
            var Qe = i;
            switch (Ee.tag) {
              case 1:
                if (_e = Ee.payload, typeof _e == "function") {
                  te = _e.call(Qe, te, B);
                  break e;
                }
                te = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = Ee.payload, B = typeof _e == "function" ? _e.call(Qe, te, B) : _e, B == null) break e;
                te = g({}, te, B);
                break e;
              case 2:
                _a = !0;
            }
          }
          B = b.callback, B !== null && (t.flags |= 64, P && (t.flags |= 8192), P = u.callbacks, P === null ? u.callbacks = [B] : P.push(B));
        } else
          P = {
            lane: B,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, I === null ? (L = I = P, T = te) : I = I.next = P, v |= B;
        if (b = b.next, b === null) {
          if (b = u.shared.pending, b === null)
            break;
          P = b, b = P.next, P.next = null, u.lastBaseUpdate = P, u.shared.pending = null;
        }
      } while (!0);
      I === null && (T = te), u.baseState = T, u.firstBaseUpdate = L, u.lastBaseUpdate = I, d === null && (u.shared.lanes = 0), ja |= v, t.lanes = v, t.memoizedState = te;
    }
  }
  function Hp(t, a) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(a);
  }
  function Gp(t, a) {
    var i = t.callbacks;
    if (i !== null)
      for (t.callbacks = null, t = 0; t < i.length; t++)
        Hp(i[t], a);
  }
  var ii = Q(null), tl = Q(0);
  function qp(t, a) {
    t = da, ie(tl, t), ie(ii, a), da = t | a.baseLanes;
  }
  function kc() {
    ie(tl, da), ie(ii, ii.current);
  }
  function $c() {
    da = tl.current, se(ii), se(tl);
  }
  var Da = 0, Oe = null, Xe = null, pt = null, nl = !1, si = !1, gr = !1, al = 0, Ts = 0, oi = null, OT = 0;
  function ut() {
    throw Error(s(321));
  }
  function jc(t, a) {
    if (a === null) return !1;
    for (var i = 0; i < a.length && i < t.length; i++)
      if (!rn(t[i], a[i])) return !1;
    return !0;
  }
  function Nc(t, a, i, o, u, d) {
    return Da = d, Oe = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, S.H = t === null || t.memoizedState === null ? Mg : Dg, gr = !1, d = i(o, u), gr = !1, si && (d = Fp(
      a,
      i,
      o,
      u
    )), Yp(t), d;
  }
  function Yp(t) {
    S.H = ul;
    var a = Xe !== null && Xe.next !== null;
    if (Da = 0, pt = Xe = Oe = null, nl = !1, Ts = 0, oi = null, a) throw Error(s(300));
    t === null || Dt || (t = t.dependencies, t !== null && Qo(t) && (Dt = !0));
  }
  function Fp(t, a, i, o) {
    Oe = t;
    var u = 0;
    do {
      if (si && (oi = null), Ts = 0, si = !1, 25 <= u) throw Error(s(301));
      if (u += 1, pt = Xe = null, t.updateQueue != null) {
        var d = t.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      S.H = BT, d = a(i, o);
    } while (si);
    return d;
  }
  function kT() {
    var t = S.H, a = t.useState()[0];
    return a = typeof a.then == "function" ? Es(a) : a, t = t.useState()[0], (Xe !== null ? Xe.memoizedState : null) !== t && (Oe.flags |= 1024), a;
  }
  function Lc() {
    var t = al !== 0;
    return al = 0, t;
  }
  function Uc(t, a, i) {
    a.updateQueue = t.updateQueue, a.flags &= -2053, t.lanes &= ~i;
  }
  function Bc(t) {
    if (nl) {
      for (t = t.memoizedState; t !== null; ) {
        var a = t.queue;
        a !== null && (a.pending = null), t = t.next;
      }
      nl = !1;
    }
    Da = 0, pt = Xe = Oe = null, si = !1, Ts = al = 0, oi = null;
  }
  function Jt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pt === null ? Oe.memoizedState = pt = t : pt = pt.next = t, pt;
  }
  function gt() {
    if (Xe === null) {
      var t = Oe.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Xe.next;
    var a = pt === null ? Oe.memoizedState : pt.next;
    if (a !== null)
      pt = a, Xe = t;
    else {
      if (t === null)
        throw Oe.alternate === null ? Error(s(467)) : Error(s(310));
      Xe = t, t = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null
      }, pt === null ? Oe.memoizedState = pt = t : pt = pt.next = t;
    }
    return pt;
  }
  function Pc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Es(t) {
    var a = Ts;
    return Ts += 1, oi === null && (oi = []), t = Bp(oi, t, a), a = Oe, (pt === null ? a.memoizedState : pt.next) === null && (a = a.alternate, S.H = a === null || a.memoizedState === null ? Mg : Dg), t;
  }
  function rl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Es(t);
      if (t.$$typeof === Z) return Ut(t);
    }
    throw Error(s(438, String(t)));
  }
  function Zc(t) {
    var a = null, i = Oe.updateQueue;
    if (i !== null && (a = i.memoCache), a == null) {
      var o = Oe.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (a = {
        data: o.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), i === null && (i = Pc(), Oe.updateQueue = i), i.memoCache = a, i = a.data[a.index], i === void 0)
      for (i = a.data[a.index] = Array(t), o = 0; o < t; o++)
        i[o] = me;
    return a.index++, i;
  }
  function sa(t, a) {
    return typeof a == "function" ? a(t) : a;
  }
  function il(t) {
    var a = gt();
    return Hc(a, Xe, t);
  }
  function Hc(t, a, i) {
    var o = t.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = i;
    var u = t.baseQueue, d = o.pending;
    if (d !== null) {
      if (u !== null) {
        var v = u.next;
        u.next = d.next, d.next = v;
      }
      a.baseQueue = u = d, o.pending = null;
    }
    if (d = t.baseState, u === null) t.memoizedState = d;
    else {
      a = u.next;
      var b = v = null, T = null, L = a, I = !1;
      do {
        var te = L.lane & -536870913;
        if (te !== L.lane ? (Pe & te) === te : (Da & te) === te) {
          var B = L.revertLane;
          if (B === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }), te === ai && (I = !0);
          else if ((Da & B) === B) {
            L = L.next, B === ai && (I = !0);
            continue;
          } else
            te = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }, T === null ? (b = T = te, v = d) : T = T.next = te, Oe.lanes |= B, ja |= B;
          te = L.action, gr && i(d, te), d = L.hasEagerState ? L.eagerState : i(d, te);
        } else
          B = {
            lane: te,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          }, T === null ? (b = T = B, v = d) : T = T.next = B, Oe.lanes |= te, ja |= te;
        L = L.next;
      } while (L !== null && L !== a);
      if (T === null ? v = d : T.next = b, !rn(d, t.memoizedState) && (Dt = !0, I && (i = ri, i !== null)))
        throw i;
      t.memoizedState = d, t.baseState = v, t.baseQueue = T, o.lastRenderedState = d;
    }
    return u === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function Gc(t) {
    var a = gt(), i = a.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = t;
    var o = i.dispatch, u = i.pending, d = a.memoizedState;
    if (u !== null) {
      i.pending = null;
      var v = u = u.next;
      do
        d = t(d, v.action), v = v.next;
      while (v !== u);
      rn(d, a.memoizedState) || (Dt = !0), a.memoizedState = d, a.baseQueue === null && (a.baseState = d), i.lastRenderedState = d;
    }
    return [d, o];
  }
  function Xp(t, a, i) {
    var o = Oe, u = gt(), d = He;
    if (d) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = a();
    var v = !rn(
      (Xe || u).memoizedState,
      i
    );
    v && (u.memoizedState = i, Dt = !0), u = u.queue;
    var b = Ip.bind(null, o, u, t);
    if (As(2048, 8, b, [t]), u.getSnapshot !== a || v || pt !== null && pt.memoizedState.tag & 1) {
      if (o.flags |= 2048, li(
        9,
        sl(),
        Qp.bind(
          null,
          o,
          u,
          i,
          a
        ),
        null
      ), Je === null) throw Error(s(349));
      d || (Da & 124) !== 0 || Kp(o, a, i);
    }
    return i;
  }
  function Kp(t, a, i) {
    t.flags |= 16384, t = { getSnapshot: a, value: i }, a = Oe.updateQueue, a === null ? (a = Pc(), Oe.updateQueue = a, a.stores = [t]) : (i = a.stores, i === null ? a.stores = [t] : i.push(t));
  }
  function Qp(t, a, i, o) {
    a.value = i, a.getSnapshot = o, Jp(a) && Wp(t);
  }
  function Ip(t, a, i) {
    return i(function() {
      Jp(a) && Wp(t);
    });
  }
  function Jp(t) {
    var a = t.getSnapshot;
    t = t.value;
    try {
      var i = a();
      return !rn(t, i);
    } catch {
      return !0;
    }
  }
  function Wp(t) {
    var a = Wr(t, 2);
    a !== null && fn(a, t, 2);
  }
  function qc(t) {
    var a = Jt();
    if (typeof t == "function") {
      var i = t;
      if (t = i(), gr) {
        $e(!0);
        try {
          i();
        } finally {
          $e(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = t, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sa,
      lastRenderedState: t
    }, a;
  }
  function eg(t, a, i, o) {
    return t.baseState = i, Hc(
      t,
      Xe,
      typeof o == "function" ? o : sa
    );
  }
  function $T(t, a, i, o, u) {
    if (ll(t)) throw Error(s(485));
    if (t = a.action, t !== null) {
      var d = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          d.listeners.push(v);
        }
      };
      S.T !== null ? i(!0) : d.isTransition = !1, o(d), i = a.pending, i === null ? (d.next = a.pending = d, tg(a, d)) : (d.next = i.next, a.pending = i.next = d);
    }
  }
  function tg(t, a) {
    var i = a.action, o = a.payload, u = t.state;
    if (a.isTransition) {
      var d = S.T, v = {};
      S.T = v;
      try {
        var b = i(u, o), T = S.S;
        T !== null && T(v, b), ng(t, a, b);
      } catch (L) {
        Yc(t, a, L);
      } finally {
        S.T = d;
      }
    } else
      try {
        d = i(u, o), ng(t, a, d);
      } catch (L) {
        Yc(t, a, L);
      }
  }
  function ng(t, a, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        ag(t, a, o);
      },
      function(o) {
        return Yc(t, a, o);
      }
    ) : ag(t, a, i);
  }
  function ag(t, a, i) {
    a.status = "fulfilled", a.value = i, rg(a), t.state = i, a = t.pending, a !== null && (i = a.next, i === a ? t.pending = null : (i = i.next, a.next = i, tg(t, i)));
  }
  function Yc(t, a, i) {
    var o = t.pending;
    if (t.pending = null, o !== null) {
      o = o.next;
      do
        a.status = "rejected", a.reason = i, rg(a), a = a.next;
      while (a !== o);
    }
    t.action = null;
  }
  function rg(t) {
    t = t.listeners;
    for (var a = 0; a < t.length; a++) (0, t[a])();
  }
  function ig(t, a) {
    return a;
  }
  function sg(t, a) {
    if (He) {
      var i = Je.formState;
      if (i !== null) {
        e: {
          var o = Oe;
          if (He) {
            if (st) {
              t: {
                for (var u = st, d = Un; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (u = On(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                d = u.data, u = d === "F!" || d === "F" ? u : null;
              }
              if (u) {
                st = On(
                  u.nextSibling
                ), o = u.data === "F!";
                break e;
              }
            }
            dr(o);
          }
          o = !1;
        }
        o && (a = i[0]);
      }
    }
    return i = Jt(), i.memoizedState = i.baseState = a, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ig,
      lastRenderedState: a
    }, i.queue = o, i = Ag.bind(
      null,
      Oe,
      o
    ), o.dispatch = i, o = qc(!1), d = Ic.bind(
      null,
      Oe,
      !1,
      o.queue
    ), o = Jt(), u = {
      state: a,
      dispatch: null,
      action: t,
      pending: null
    }, o.queue = u, i = $T.bind(
      null,
      Oe,
      u,
      d,
      i
    ), u.dispatch = i, o.memoizedState = t, [a, i, !1];
  }
  function og(t) {
    var a = gt();
    return lg(a, Xe, t);
  }
  function lg(t, a, i) {
    if (a = Hc(
      t,
      a,
      ig
    )[0], t = il(sa)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var o = Es(a);
      } catch (v) {
        throw v === ys ? Wo : v;
      }
    else o = a;
    a = gt();
    var u = a.queue, d = u.dispatch;
    return i !== a.memoizedState && (Oe.flags |= 2048, li(
      9,
      sl(),
      jT.bind(null, u, i),
      null
    )), [o, d, t];
  }
  function jT(t, a) {
    t.action = a;
  }
  function ug(t) {
    var a = gt(), i = Xe;
    if (i !== null)
      return lg(a, i, t);
    gt(), a = a.memoizedState, i = gt();
    var o = i.queue.dispatch;
    return i.memoizedState = t, [a, o, !1];
  }
  function li(t, a, i, o) {
    return t = { tag: t, create: i, deps: o, inst: a, next: null }, a = Oe.updateQueue, a === null && (a = Pc(), Oe.updateQueue = a), i = a.lastEffect, i === null ? a.lastEffect = t.next = t : (o = i.next, i.next = t, t.next = o, a.lastEffect = t), t;
  }
  function sl() {
    return { destroy: void 0, resource: void 0 };
  }
  function cg() {
    return gt().memoizedState;
  }
  function ol(t, a, i, o) {
    var u = Jt();
    o = o === void 0 ? null : o, Oe.flags |= t, u.memoizedState = li(
      1 | a,
      sl(),
      i,
      o
    );
  }
  function As(t, a, i, o) {
    var u = gt();
    o = o === void 0 ? null : o;
    var d = u.memoizedState.inst;
    Xe !== null && o !== null && jc(o, Xe.memoizedState.deps) ? u.memoizedState = li(a, d, i, o) : (Oe.flags |= t, u.memoizedState = li(
      1 | a,
      d,
      i,
      o
    ));
  }
  function fg(t, a) {
    ol(8390656, 8, t, a);
  }
  function dg(t, a) {
    As(2048, 8, t, a);
  }
  function hg(t, a) {
    return As(4, 2, t, a);
  }
  function mg(t, a) {
    return As(4, 4, t, a);
  }
  function pg(t, a) {
    if (typeof a == "function") {
      t = t();
      var i = a(t);
      return function() {
        typeof i == "function" ? i() : a(null);
      };
    }
    if (a != null)
      return t = t(), a.current = t, function() {
        a.current = null;
      };
  }
  function gg(t, a, i) {
    i = i != null ? i.concat([t]) : null, As(4, 4, pg.bind(null, a, t), i);
  }
  function Fc() {
  }
  function vg(t, a) {
    var i = gt();
    a = a === void 0 ? null : a;
    var o = i.memoizedState;
    return a !== null && jc(a, o[1]) ? o[0] : (i.memoizedState = [t, a], t);
  }
  function yg(t, a) {
    var i = gt();
    a = a === void 0 ? null : a;
    var o = i.memoizedState;
    if (a !== null && jc(a, o[1]))
      return o[0];
    if (o = t(), gr) {
      $e(!0);
      try {
        t();
      } finally {
        $e(!1);
      }
    }
    return i.memoizedState = [o, a], o;
  }
  function Xc(t, a, i) {
    return i === void 0 || (Da & 1073741824) !== 0 ? t.memoizedState = a : (t.memoizedState = i, t = Sv(), Oe.lanes |= t, ja |= t, i);
  }
  function bg(t, a, i, o) {
    return rn(i, a) ? i : ii.current !== null ? (t = Xc(t, i, o), rn(t, a) || (Dt = !0), t) : (Da & 42) === 0 ? (Dt = !0, t.memoizedState = i) : (t = Sv(), Oe.lanes |= t, ja |= t, a);
  }
  function xg(t, a, i, o, u) {
    var d = j.p;
    j.p = d !== 0 && 8 > d ? d : 8;
    var v = S.T, b = {};
    S.T = b, Ic(t, !1, a, i);
    try {
      var T = u(), L = S.S;
      if (L !== null && L(b, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var I = VT(
          T,
          o
        );
        _s(
          t,
          a,
          I,
          cn()
        );
      } else
        _s(
          t,
          a,
          o,
          cn()
        );
    } catch (te) {
      _s(
        t,
        a,
        { then: function() {
        }, status: "rejected", reason: te },
        cn()
      );
    } finally {
      j.p = d, S.T = v;
    }
  }
  function NT() {
  }
  function Kc(t, a, i, o) {
    if (t.tag !== 5) throw Error(s(476));
    var u = Sg(t).queue;
    xg(
      t,
      u,
      a,
      z,
      i === null ? NT : function() {
        return wg(t), i(o);
      }
    );
  }
  function Sg(t) {
    var a = t.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: z,
      baseState: z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sa,
        lastRenderedState: z
      },
      next: null
    };
    var i = {};
    return a.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sa,
        lastRenderedState: i
      },
      next: null
    }, t.memoizedState = a, t = t.alternate, t !== null && (t.memoizedState = a), a;
  }
  function wg(t) {
    var a = Sg(t).next.queue;
    _s(t, a, {}, cn());
  }
  function Qc() {
    return Ut(Gs);
  }
  function Tg() {
    return gt().memoizedState;
  }
  function Eg() {
    return gt().memoizedState;
  }
  function LT(t) {
    for (var a = t.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var i = cn();
          t = Ca(i);
          var o = Ma(a, t, i);
          o !== null && (fn(o, a, i), xs(o, a, i)), a = { cache: _c() }, t.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function UT(t, a, i) {
    var o = cn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ll(t) ? _g(a, i) : (i = gc(t, a, i, o), i !== null && (fn(i, t, o), Cg(i, a, o)));
  }
  function Ag(t, a, i) {
    var o = cn();
    _s(t, a, i, o);
  }
  function _s(t, a, i, o) {
    var u = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ll(t)) _g(a, u);
    else {
      var d = t.alternate;
      if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = a.lastRenderedReducer, d !== null))
        try {
          var v = a.lastRenderedState, b = d(v, i);
          if (u.hasEagerState = !0, u.eagerState = b, rn(b, v))
            return qo(t, a, u, 0), Je === null && Go(), !1;
        } catch {
        } finally {
        }
      if (i = gc(t, a, u, o), i !== null)
        return fn(i, t, o), Cg(i, a, o), !0;
    }
    return !1;
  }
  function Ic(t, a, i, o) {
    if (o = {
      lane: 2,
      revertLane: zf(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ll(t)) {
      if (a) throw Error(s(479));
    } else
      a = gc(
        t,
        i,
        o,
        2
      ), a !== null && fn(a, t, 2);
  }
  function ll(t) {
    var a = t.alternate;
    return t === Oe || a !== null && a === Oe;
  }
  function _g(t, a) {
    si = nl = !0;
    var i = t.pending;
    i === null ? a.next = a : (a.next = i.next, i.next = a), t.pending = a;
  }
  function Cg(t, a, i) {
    if ((i & 4194048) !== 0) {
      var o = a.lanes;
      o &= t.pendingLanes, i |= o, a.lanes = i, $m(t, i);
    }
  }
  var ul = {
    readContext: Ut,
    use: rl,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useLayoutEffect: ut,
    useInsertionEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useSyncExternalStore: ut,
    useId: ut,
    useHostTransitionStatus: ut,
    useFormState: ut,
    useActionState: ut,
    useOptimistic: ut,
    useMemoCache: ut,
    useCacheRefresh: ut
  }, Mg = {
    readContext: Ut,
    use: rl,
    useCallback: function(t, a) {
      return Jt().memoizedState = [
        t,
        a === void 0 ? null : a
      ], t;
    },
    useContext: Ut,
    useEffect: fg,
    useImperativeHandle: function(t, a, i) {
      i = i != null ? i.concat([t]) : null, ol(
        4194308,
        4,
        pg.bind(null, a, t),
        i
      );
    },
    useLayoutEffect: function(t, a) {
      return ol(4194308, 4, t, a);
    },
    useInsertionEffect: function(t, a) {
      ol(4, 2, t, a);
    },
    useMemo: function(t, a) {
      var i = Jt();
      a = a === void 0 ? null : a;
      var o = t();
      if (gr) {
        $e(!0);
        try {
          t();
        } finally {
          $e(!1);
        }
      }
      return i.memoizedState = [o, a], o;
    },
    useReducer: function(t, a, i) {
      var o = Jt();
      if (i !== void 0) {
        var u = i(a);
        if (gr) {
          $e(!0);
          try {
            i(a);
          } finally {
            $e(!1);
          }
        }
      } else u = a;
      return o.memoizedState = o.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, o.queue = t, t = t.dispatch = UT.bind(
        null,
        Oe,
        t
      ), [o.memoizedState, t];
    },
    useRef: function(t) {
      var a = Jt();
      return t = { current: t }, a.memoizedState = t;
    },
    useState: function(t) {
      t = qc(t);
      var a = t.queue, i = Ag.bind(null, Oe, a);
      return a.dispatch = i, [t.memoizedState, i];
    },
    useDebugValue: Fc,
    useDeferredValue: function(t, a) {
      var i = Jt();
      return Xc(i, t, a);
    },
    useTransition: function() {
      var t = qc(!1);
      return t = xg.bind(
        null,
        Oe,
        t.queue,
        !0,
        !1
      ), Jt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, a, i) {
      var o = Oe, u = Jt();
      if (He) {
        if (i === void 0)
          throw Error(s(407));
        i = i();
      } else {
        if (i = a(), Je === null)
          throw Error(s(349));
        (Pe & 124) !== 0 || Kp(o, a, i);
      }
      u.memoizedState = i;
      var d = { value: i, getSnapshot: a };
      return u.queue = d, fg(Ip.bind(null, o, d, t), [
        t
      ]), o.flags |= 2048, li(
        9,
        sl(),
        Qp.bind(
          null,
          o,
          d,
          i,
          a
        ),
        null
      ), i;
    },
    useId: function() {
      var t = Jt(), a = Je.identifierPrefix;
      if (He) {
        var i = aa, o = na;
        i = (o & ~(1 << 32 - Fe(o) - 1)).toString(32) + i, a = "«" + a + "R" + i, i = al++, 0 < i && (a += "H" + i.toString(32)), a += "»";
      } else
        i = OT++, a = "«" + a + "r" + i.toString(32) + "»";
      return t.memoizedState = a;
    },
    useHostTransitionStatus: Qc,
    useFormState: sg,
    useActionState: sg,
    useOptimistic: function(t) {
      var a = Jt();
      a.memoizedState = a.baseState = t;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = i, a = Ic.bind(
        null,
        Oe,
        !0,
        i
      ), i.dispatch = a, [t, a];
    },
    useMemoCache: Zc,
    useCacheRefresh: function() {
      return Jt().memoizedState = LT.bind(
        null,
        Oe
      );
    }
  }, Dg = {
    readContext: Ut,
    use: rl,
    useCallback: vg,
    useContext: Ut,
    useEffect: dg,
    useImperativeHandle: gg,
    useInsertionEffect: hg,
    useLayoutEffect: mg,
    useMemo: yg,
    useReducer: il,
    useRef: cg,
    useState: function() {
      return il(sa);
    },
    useDebugValue: Fc,
    useDeferredValue: function(t, a) {
      var i = gt();
      return bg(
        i,
        Xe.memoizedState,
        t,
        a
      );
    },
    useTransition: function() {
      var t = il(sa)[0], a = gt().memoizedState;
      return [
        typeof t == "boolean" ? t : Es(t),
        a
      ];
    },
    useSyncExternalStore: Xp,
    useId: Tg,
    useHostTransitionStatus: Qc,
    useFormState: og,
    useActionState: og,
    useOptimistic: function(t, a) {
      var i = gt();
      return eg(i, Xe, t, a);
    },
    useMemoCache: Zc,
    useCacheRefresh: Eg
  }, BT = {
    readContext: Ut,
    use: rl,
    useCallback: vg,
    useContext: Ut,
    useEffect: dg,
    useImperativeHandle: gg,
    useInsertionEffect: hg,
    useLayoutEffect: mg,
    useMemo: yg,
    useReducer: Gc,
    useRef: cg,
    useState: function() {
      return Gc(sa);
    },
    useDebugValue: Fc,
    useDeferredValue: function(t, a) {
      var i = gt();
      return Xe === null ? Xc(i, t, a) : bg(
        i,
        Xe.memoizedState,
        t,
        a
      );
    },
    useTransition: function() {
      var t = Gc(sa)[0], a = gt().memoizedState;
      return [
        typeof t == "boolean" ? t : Es(t),
        a
      ];
    },
    useSyncExternalStore: Xp,
    useId: Tg,
    useHostTransitionStatus: Qc,
    useFormState: ug,
    useActionState: ug,
    useOptimistic: function(t, a) {
      var i = gt();
      return Xe !== null ? eg(i, Xe, t, a) : (i.baseState = t, [t, i.queue.dispatch]);
    },
    useMemoCache: Zc,
    useCacheRefresh: Eg
  }, ui = null, Cs = 0;
  function cl(t) {
    var a = Cs;
    return Cs += 1, ui === null && (ui = []), Bp(ui, t, a);
  }
  function Ms(t, a) {
    a = a.props.ref, t.ref = a !== void 0 ? a : null;
  }
  function fl(t, a) {
    throw a.$$typeof === y ? Error(s(525)) : (t = Object.prototype.toString.call(a), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : t
      )
    ));
  }
  function zg(t) {
    var a = t._init;
    return a(t._payload);
  }
  function Rg(t) {
    function a(V, M) {
      if (t) {
        var k = V.deletions;
        k === null ? (V.deletions = [M], V.flags |= 16) : k.push(M);
      }
    }
    function i(V, M) {
      if (!t) return null;
      for (; M !== null; )
        a(V, M), M = M.sibling;
      return null;
    }
    function o(V) {
      for (var M = /* @__PURE__ */ new Map(); V !== null; )
        V.key !== null ? M.set(V.key, V) : M.set(V.index, V), V = V.sibling;
      return M;
    }
    function u(V, M) {
      return V = ta(V, M), V.index = 0, V.sibling = null, V;
    }
    function d(V, M, k) {
      return V.index = k, t ? (k = V.alternate, k !== null ? (k = k.index, k < M ? (V.flags |= 67108866, M) : k) : (V.flags |= 67108866, M)) : (V.flags |= 1048576, M);
    }
    function v(V) {
      return t && V.alternate === null && (V.flags |= 67108866), V;
    }
    function b(V, M, k, ee) {
      return M === null || M.tag !== 6 ? (M = yc(k, V.mode, ee), M.return = V, M) : (M = u(M, k), M.return = V, M);
    }
    function T(V, M, k, ee) {
      var ge = k.type;
      return ge === _ ? I(
        V,
        M,
        k.props.children,
        ee,
        k.key
      ) : M !== null && (M.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === H && zg(ge) === M.type) ? (M = u(M, k.props), Ms(M, k), M.return = V, M) : (M = Fo(
        k.type,
        k.key,
        k.props,
        null,
        V.mode,
        ee
      ), Ms(M, k), M.return = V, M);
    }
    function L(V, M, k, ee) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== k.containerInfo || M.stateNode.implementation !== k.implementation ? (M = bc(k, V.mode, ee), M.return = V, M) : (M = u(M, k.children || []), M.return = V, M);
    }
    function I(V, M, k, ee, ge) {
      return M === null || M.tag !== 7 ? (M = lr(
        k,
        V.mode,
        ee,
        ge
      ), M.return = V, M) : (M = u(M, k), M.return = V, M);
    }
    function te(V, M, k) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = yc(
          "" + M,
          V.mode,
          k
        ), M.return = V, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case x:
            return k = Fo(
              M.type,
              M.key,
              M.props,
              null,
              V.mode,
              k
            ), Ms(k, M), k.return = V, k;
          case E:
            return M = bc(
              M,
              V.mode,
              k
            ), M.return = V, M;
          case H:
            var ee = M._init;
            return M = ee(M._payload), te(V, M, k);
        }
        if (ne(M) || q(M))
          return M = lr(
            M,
            V.mode,
            k,
            null
          ), M.return = V, M;
        if (typeof M.then == "function")
          return te(V, cl(M), k);
        if (M.$$typeof === Z)
          return te(
            V,
            Io(V, M),
            k
          );
        fl(V, M);
      }
      return null;
    }
    function B(V, M, k, ee) {
      var ge = M !== null ? M.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return ge !== null ? null : b(V, M, "" + k, ee);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case x:
            return k.key === ge ? T(V, M, k, ee) : null;
          case E:
            return k.key === ge ? L(V, M, k, ee) : null;
          case H:
            return ge = k._init, k = ge(k._payload), B(V, M, k, ee);
        }
        if (ne(k) || q(k))
          return ge !== null ? null : I(V, M, k, ee, null);
        if (typeof k.then == "function")
          return B(
            V,
            M,
            cl(k),
            ee
          );
        if (k.$$typeof === Z)
          return B(
            V,
            M,
            Io(V, k),
            ee
          );
        fl(V, k);
      }
      return null;
    }
    function P(V, M, k, ee, ge) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number" || typeof ee == "bigint")
        return V = V.get(k) || null, b(M, V, "" + ee, ge);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case x:
            return V = V.get(
              ee.key === null ? k : ee.key
            ) || null, T(M, V, ee, ge);
          case E:
            return V = V.get(
              ee.key === null ? k : ee.key
            ) || null, L(M, V, ee, ge);
          case H:
            var je = ee._init;
            return ee = je(ee._payload), P(
              V,
              M,
              k,
              ee,
              ge
            );
        }
        if (ne(ee) || q(ee))
          return V = V.get(k) || null, I(M, V, ee, ge, null);
        if (typeof ee.then == "function")
          return P(
            V,
            M,
            k,
            cl(ee),
            ge
          );
        if (ee.$$typeof === Z)
          return P(
            V,
            M,
            k,
            Io(M, ee),
            ge
          );
        fl(M, ee);
      }
      return null;
    }
    function _e(V, M, k, ee) {
      for (var ge = null, je = null, we = M, Ae = M = 0, Rt = null; we !== null && Ae < k.length; Ae++) {
        we.index > Ae ? (Rt = we, we = null) : Rt = we.sibling;
        var Ze = B(
          V,
          we,
          k[Ae],
          ee
        );
        if (Ze === null) {
          we === null && (we = Rt);
          break;
        }
        t && we && Ze.alternate === null && a(V, we), M = d(Ze, M, Ae), je === null ? ge = Ze : je.sibling = Ze, je = Ze, we = Rt;
      }
      if (Ae === k.length)
        return i(V, we), He && cr(V, Ae), ge;
      if (we === null) {
        for (; Ae < k.length; Ae++)
          we = te(V, k[Ae], ee), we !== null && (M = d(
            we,
            M,
            Ae
          ), je === null ? ge = we : je.sibling = we, je = we);
        return He && cr(V, Ae), ge;
      }
      for (we = o(we); Ae < k.length; Ae++)
        Rt = P(
          we,
          V,
          Ae,
          k[Ae],
          ee
        ), Rt !== null && (t && Rt.alternate !== null && we.delete(
          Rt.key === null ? Ae : Rt.key
        ), M = d(
          Rt,
          M,
          Ae
        ), je === null ? ge = Rt : je.sibling = Rt, je = Rt);
      return t && we.forEach(function(qa) {
        return a(V, qa);
      }), He && cr(V, Ae), ge;
    }
    function Ee(V, M, k, ee) {
      if (k == null) throw Error(s(151));
      for (var ge = null, je = null, we = M, Ae = M = 0, Rt = null, Ze = k.next(); we !== null && !Ze.done; Ae++, Ze = k.next()) {
        we.index > Ae ? (Rt = we, we = null) : Rt = we.sibling;
        var qa = B(V, we, Ze.value, ee);
        if (qa === null) {
          we === null && (we = Rt);
          break;
        }
        t && we && qa.alternate === null && a(V, we), M = d(qa, M, Ae), je === null ? ge = qa : je.sibling = qa, je = qa, we = Rt;
      }
      if (Ze.done)
        return i(V, we), He && cr(V, Ae), ge;
      if (we === null) {
        for (; !Ze.done; Ae++, Ze = k.next())
          Ze = te(V, Ze.value, ee), Ze !== null && (M = d(Ze, M, Ae), je === null ? ge = Ze : je.sibling = Ze, je = Ze);
        return He && cr(V, Ae), ge;
      }
      for (we = o(we); !Ze.done; Ae++, Ze = k.next())
        Ze = P(we, V, Ae, Ze.value, ee), Ze !== null && (t && Ze.alternate !== null && we.delete(Ze.key === null ? Ae : Ze.key), M = d(Ze, M, Ae), je === null ? ge = Ze : je.sibling = Ze, je = Ze);
      return t && we.forEach(function(PE) {
        return a(V, PE);
      }), He && cr(V, Ae), ge;
    }
    function Qe(V, M, k, ee) {
      if (typeof k == "object" && k !== null && k.type === _ && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case x:
            e: {
              for (var ge = k.key; M !== null; ) {
                if (M.key === ge) {
                  if (ge = k.type, ge === _) {
                    if (M.tag === 7) {
                      i(
                        V,
                        M.sibling
                      ), ee = u(
                        M,
                        k.props.children
                      ), ee.return = V, V = ee;
                      break e;
                    }
                  } else if (M.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === H && zg(ge) === M.type) {
                    i(
                      V,
                      M.sibling
                    ), ee = u(M, k.props), Ms(ee, k), ee.return = V, V = ee;
                    break e;
                  }
                  i(V, M);
                  break;
                } else a(V, M);
                M = M.sibling;
              }
              k.type === _ ? (ee = lr(
                k.props.children,
                V.mode,
                ee,
                k.key
              ), ee.return = V, V = ee) : (ee = Fo(
                k.type,
                k.key,
                k.props,
                null,
                V.mode,
                ee
              ), Ms(ee, k), ee.return = V, V = ee);
            }
            return v(V);
          case E:
            e: {
              for (ge = k.key; M !== null; ) {
                if (M.key === ge)
                  if (M.tag === 4 && M.stateNode.containerInfo === k.containerInfo && M.stateNode.implementation === k.implementation) {
                    i(
                      V,
                      M.sibling
                    ), ee = u(M, k.children || []), ee.return = V, V = ee;
                    break e;
                  } else {
                    i(V, M);
                    break;
                  }
                else a(V, M);
                M = M.sibling;
              }
              ee = bc(k, V.mode, ee), ee.return = V, V = ee;
            }
            return v(V);
          case H:
            return ge = k._init, k = ge(k._payload), Qe(
              V,
              M,
              k,
              ee
            );
        }
        if (ne(k))
          return _e(
            V,
            M,
            k,
            ee
          );
        if (q(k)) {
          if (ge = q(k), typeof ge != "function") throw Error(s(150));
          return k = ge.call(k), Ee(
            V,
            M,
            k,
            ee
          );
        }
        if (typeof k.then == "function")
          return Qe(
            V,
            M,
            cl(k),
            ee
          );
        if (k.$$typeof === Z)
          return Qe(
            V,
            M,
            Io(V, k),
            ee
          );
        fl(V, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, M !== null && M.tag === 6 ? (i(V, M.sibling), ee = u(M, k), ee.return = V, V = ee) : (i(V, M), ee = yc(k, V.mode, ee), ee.return = V, V = ee), v(V)) : i(V, M);
    }
    return function(V, M, k, ee) {
      try {
        Cs = 0;
        var ge = Qe(
          V,
          M,
          k,
          ee
        );
        return ui = null, ge;
      } catch (we) {
        if (we === ys || we === Wo) throw we;
        var je = sn(29, we, null, V.mode);
        return je.lanes = ee, je.return = V, je;
      } finally {
      }
    };
  }
  var ci = Rg(!0), Vg = Rg(!1), Sn = Q(null), Bn = null;
  function za(t) {
    var a = t.alternate;
    ie(St, St.current & 1), ie(Sn, t), Bn === null && (a === null || ii.current !== null || a.memoizedState !== null) && (Bn = t);
  }
  function Og(t) {
    if (t.tag === 22) {
      if (ie(St, St.current), ie(Sn, t), Bn === null) {
        var a = t.alternate;
        a !== null && a.memoizedState !== null && (Bn = t);
      }
    } else Ra();
  }
  function Ra() {
    ie(St, St.current), ie(Sn, Sn.current);
  }
  function oa(t) {
    se(Sn), Bn === t && (Bn = null), se(St);
  }
  var St = Q(0);
  function dl(t) {
    for (var a = t; a !== null; ) {
      if (a.tag === 13) {
        var i = a.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Zf(i)))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === t) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === t) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  function Jc(t, a, i, o) {
    a = t.memoizedState, i = i(o, a), i = i == null ? a : g({}, a, i), t.memoizedState = i, t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var Wc = {
    enqueueSetState: function(t, a, i) {
      t = t._reactInternals;
      var o = cn(), u = Ca(o);
      u.payload = a, i != null && (u.callback = i), a = Ma(t, u, o), a !== null && (fn(a, t, o), xs(a, t, o));
    },
    enqueueReplaceState: function(t, a, i) {
      t = t._reactInternals;
      var o = cn(), u = Ca(o);
      u.tag = 1, u.payload = a, i != null && (u.callback = i), a = Ma(t, u, o), a !== null && (fn(a, t, o), xs(a, t, o));
    },
    enqueueForceUpdate: function(t, a) {
      t = t._reactInternals;
      var i = cn(), o = Ca(i);
      o.tag = 2, a != null && (o.callback = a), a = Ma(t, o, i), a !== null && (fn(a, t, i), xs(a, t, i));
    }
  };
  function kg(t, a, i, o, u, d, v) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, d, v) : a.prototype && a.prototype.isPureReactComponent ? !cs(i, o) || !cs(u, d) : !0;
  }
  function $g(t, a, i, o) {
    t = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(i, o), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(i, o), a.state !== t && Wc.enqueueReplaceState(a, a.state, null);
  }
  function vr(t, a) {
    var i = a;
    if ("ref" in a) {
      i = {};
      for (var o in a)
        o !== "ref" && (i[o] = a[o]);
    }
    if (t = t.defaultProps) {
      i === a && (i = g({}, i));
      for (var u in t)
        i[u] === void 0 && (i[u] = t[u]);
    }
    return i;
  }
  var hl = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function jg(t) {
    hl(t);
  }
  function Ng(t) {
    console.error(t);
  }
  function Lg(t) {
    hl(t);
  }
  function ml(t, a) {
    try {
      var i = t.onUncaughtError;
      i(a.value, { componentStack: a.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Ug(t, a, i) {
    try {
      var o = t.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function ef(t, a, i) {
    return i = Ca(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      ml(t, a);
    }, i;
  }
  function Bg(t) {
    return t = Ca(t), t.tag = 3, t;
  }
  function Pg(t, a, i, o) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = o.value;
      t.payload = function() {
        return u(d);
      }, t.callback = function() {
        Ug(a, i, o);
      };
    }
    var v = i.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() {
      Ug(a, i, o), typeof u != "function" && (Na === null ? Na = /* @__PURE__ */ new Set([this]) : Na.add(this));
      var b = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function PT(t, a, i, o, u) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (a = i.alternate, a !== null && ps(
        a,
        i,
        u,
        !0
      ), i = Sn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Bn === null ? Af() : i.alternate === null && ot === 0 && (ot = 3), i.flags &= -257, i.flags |= 65536, i.lanes = u, o === Dc ? i.flags |= 16384 : (a = i.updateQueue, a === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : a.add(o), Cf(t, o, u)), !1;
          case 22:
            return i.flags |= 65536, o === Dc ? i.flags |= 16384 : (a = i.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = a) : (i = a.retryQueue, i === null ? a.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Cf(t, o, u)), !1;
        }
        throw Error(s(435, i.tag));
      }
      return Cf(t, o, u), Af(), !1;
    }
    if (He)
      return a = Sn.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = u, o !== wc && (t = Error(s(422), { cause: o }), ms(vn(t, i)))) : (o !== wc && (a = Error(s(423), {
        cause: o
      }), ms(
        vn(a, i)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, o = vn(o, i), u = ef(
        t.stateNode,
        o,
        u
      ), Vc(t, u), ot !== 4 && (ot = 2)), !1;
    var d = Error(s(520), { cause: o });
    if (d = vn(d, i), $s === null ? $s = [d] : $s.push(d), ot !== 4 && (ot = 2), a === null) return !0;
    o = vn(o, i), i = a;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, t = u & -u, i.lanes |= t, t = ef(i.stateNode, o, t), Vc(i, t), !1;
        case 1:
          if (a = i.type, d = i.stateNode, (i.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Na === null || !Na.has(d))))
            return i.flags |= 65536, u &= -u, i.lanes |= u, u = Bg(u), Pg(
              u,
              t,
              i,
              o
            ), Vc(i, u), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Zg = Error(s(461)), Dt = !1;
  function kt(t, a, i, o) {
    a.child = t === null ? Vg(a, null, i, o) : ci(
      a,
      t.child,
      i,
      o
    );
  }
  function Hg(t, a, i, o, u) {
    i = i.render;
    var d = a.ref;
    if ("ref" in o) {
      var v = {};
      for (var b in o)
        b !== "ref" && (v[b] = o[b]);
    } else v = o;
    return mr(a), o = Nc(
      t,
      a,
      i,
      v,
      d,
      u
    ), b = Lc(), t !== null && !Dt ? (Uc(t, a, u), la(t, a, u)) : (He && b && xc(a), a.flags |= 1, kt(t, a, o, u), a.child);
  }
  function Gg(t, a, i, o, u) {
    if (t === null) {
      var d = i.type;
      return typeof d == "function" && !vc(d) && d.defaultProps === void 0 && i.compare === null ? (a.tag = 15, a.type = d, qg(
        t,
        a,
        d,
        o,
        u
      )) : (t = Fo(
        i.type,
        null,
        o,
        a,
        a.mode,
        u
      ), t.ref = a.ref, t.return = a, a.child = t);
    }
    if (d = t.child, !uf(t, u)) {
      var v = d.memoizedProps;
      if (i = i.compare, i = i !== null ? i : cs, i(v, o) && t.ref === a.ref)
        return la(t, a, u);
    }
    return a.flags |= 1, t = ta(d, o), t.ref = a.ref, t.return = a, a.child = t;
  }
  function qg(t, a, i, o, u) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (cs(d, o) && t.ref === a.ref)
        if (Dt = !1, a.pendingProps = o = d, uf(t, u))
          (t.flags & 131072) !== 0 && (Dt = !0);
        else
          return a.lanes = t.lanes, la(t, a, u);
    }
    return tf(
      t,
      a,
      i,
      o,
      u
    );
  }
  function Yg(t, a, i) {
    var o = a.pendingProps, u = o.children, d = t !== null ? t.memoizedState : null;
    if (o.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (o = d !== null ? d.baseLanes | i : i, t !== null) {
          for (u = a.child = t.child, d = 0; u !== null; )
            d = d | u.lanes | u.childLanes, u = u.sibling;
          a.childLanes = d & ~o;
        } else a.childLanes = 0, a.child = null;
        return Fg(
          t,
          a,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Jo(
          a,
          d !== null ? d.cachePool : null
        ), d !== null ? qp(a, d) : kc(), Og(a);
      else
        return a.lanes = a.childLanes = 536870912, Fg(
          t,
          a,
          d !== null ? d.baseLanes | i : i,
          i
        );
    } else
      d !== null ? (Jo(a, d.cachePool), qp(a, d), Ra(), a.memoizedState = null) : (t !== null && Jo(a, null), kc(), Ra());
    return kt(t, a, u, i), a.child;
  }
  function Fg(t, a, i, o) {
    var u = Mc();
    return u = u === null ? null : { parent: xt._currentValue, pool: u }, a.memoizedState = {
      baseLanes: i,
      cachePool: u
    }, t !== null && Jo(a, null), kc(), Og(a), t !== null && ps(t, a, o, !0), null;
  }
  function pl(t, a) {
    var i = a.ref;
    if (i === null)
      t !== null && t.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(s(284));
      (t === null || t.ref !== i) && (a.flags |= 4194816);
    }
  }
  function tf(t, a, i, o, u) {
    return mr(a), i = Nc(
      t,
      a,
      i,
      o,
      void 0,
      u
    ), o = Lc(), t !== null && !Dt ? (Uc(t, a, u), la(t, a, u)) : (He && o && xc(a), a.flags |= 1, kt(t, a, i, u), a.child);
  }
  function Xg(t, a, i, o, u, d) {
    return mr(a), a.updateQueue = null, i = Fp(
      a,
      o,
      i,
      u
    ), Yp(t), o = Lc(), t !== null && !Dt ? (Uc(t, a, d), la(t, a, d)) : (He && o && xc(a), a.flags |= 1, kt(t, a, i, d), a.child);
  }
  function Kg(t, a, i, o, u) {
    if (mr(a), a.stateNode === null) {
      var d = ei, v = i.contextType;
      typeof v == "object" && v !== null && (d = Ut(v)), d = new i(o, d), a.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Wc, a.stateNode = d, d._reactInternals = a, d = a.stateNode, d.props = o, d.state = a.memoizedState, d.refs = {}, zc(a), v = i.contextType, d.context = typeof v == "object" && v !== null ? Ut(v) : ei, d.state = a.memoizedState, v = i.getDerivedStateFromProps, typeof v == "function" && (Jc(
        a,
        i,
        v,
        o
      ), d.state = a.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (v = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), v !== d.state && Wc.enqueueReplaceState(d, d.state, null), ws(a, o, d, u), Ss(), d.state = a.memoizedState), typeof d.componentDidMount == "function" && (a.flags |= 4194308), o = !0;
    } else if (t === null) {
      d = a.stateNode;
      var b = a.memoizedProps, T = vr(i, b);
      d.props = T;
      var L = d.context, I = i.contextType;
      v = ei, typeof I == "object" && I !== null && (v = Ut(I));
      var te = i.getDerivedStateFromProps;
      I = typeof te == "function" || typeof d.getSnapshotBeforeUpdate == "function", b = a.pendingProps !== b, I || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b || L !== v) && $g(
        a,
        d,
        o,
        v
      ), _a = !1;
      var B = a.memoizedState;
      d.state = B, ws(a, o, d, u), Ss(), L = a.memoizedState, b || B !== L || _a ? (typeof te == "function" && (Jc(
        a,
        i,
        te,
        o
      ), L = a.memoizedState), (T = _a || kg(
        a,
        i,
        T,
        o,
        B,
        L,
        v
      )) ? (I || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = o, a.memoizedState = L), d.props = o, d.state = L, d.context = v, o = T) : (typeof d.componentDidMount == "function" && (a.flags |= 4194308), o = !1);
    } else {
      d = a.stateNode, Rc(t, a), v = a.memoizedProps, I = vr(i, v), d.props = I, te = a.pendingProps, B = d.context, L = i.contextType, T = ei, typeof L == "object" && L !== null && (T = Ut(L)), b = i.getDerivedStateFromProps, (L = typeof b == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== te || B !== T) && $g(
        a,
        d,
        o,
        T
      ), _a = !1, B = a.memoizedState, d.state = B, ws(a, o, d, u), Ss();
      var P = a.memoizedState;
      v !== te || B !== P || _a || t !== null && t.dependencies !== null && Qo(t.dependencies) ? (typeof b == "function" && (Jc(
        a,
        i,
        b,
        o
      ), P = a.memoizedState), (I = _a || kg(
        a,
        i,
        I,
        o,
        B,
        P,
        T
      ) || t !== null && t.dependencies !== null && Qo(t.dependencies)) ? (L || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, P, T), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        o,
        P,
        T
      )), typeof d.componentDidUpdate == "function" && (a.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === t.memoizedProps && B === t.memoizedState || (a.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && B === t.memoizedState || (a.flags |= 1024), a.memoizedProps = o, a.memoizedState = P), d.props = o, d.state = P, d.context = T, o = I) : (typeof d.componentDidUpdate != "function" || v === t.memoizedProps && B === t.memoizedState || (a.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && B === t.memoizedState || (a.flags |= 1024), o = !1);
    }
    return d = o, pl(t, a), o = (a.flags & 128) !== 0, d || o ? (d = a.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : d.render(), a.flags |= 1, t !== null && o ? (a.child = ci(
      a,
      t.child,
      null,
      u
    ), a.child = ci(
      a,
      null,
      i,
      u
    )) : kt(t, a, i, u), a.memoizedState = d.state, t = a.child) : t = la(
      t,
      a,
      u
    ), t;
  }
  function Qg(t, a, i, o) {
    return hs(), a.flags |= 256, kt(t, a, i, o), a.child;
  }
  var nf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function af(t) {
    return { baseLanes: t, cachePool: Np() };
  }
  function rf(t, a, i) {
    return t = t !== null ? t.childLanes & ~i : 0, a && (t |= wn), t;
  }
  function Ig(t, a, i) {
    var o = a.pendingProps, u = !1, d = (a.flags & 128) !== 0, v;
    if ((v = d) || (v = t !== null && t.memoizedState === null ? !1 : (St.current & 2) !== 0), v && (u = !0, a.flags &= -129), v = (a.flags & 32) !== 0, a.flags &= -33, t === null) {
      if (He) {
        if (u ? za(a) : Ra(), He) {
          var b = st, T;
          if (T = b) {
            e: {
              for (T = b, b = Un; T.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (T = On(
                  T.nextSibling
                ), T === null) {
                  b = null;
                  break e;
                }
              }
              b = T;
            }
            b !== null ? (a.memoizedState = {
              dehydrated: b,
              treeContext: ur !== null ? { id: na, overflow: aa } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, T = sn(
              18,
              null,
              null,
              0
            ), T.stateNode = b, T.return = a, a.child = T, Gt = a, st = null, T = !0) : T = !1;
          }
          T || dr(a);
        }
        if (b = a.memoizedState, b !== null && (b = b.dehydrated, b !== null))
          return Zf(b) ? a.lanes = 32 : a.lanes = 536870912, null;
        oa(a);
      }
      return b = o.children, o = o.fallback, u ? (Ra(), u = a.mode, b = gl(
        { mode: "hidden", children: b },
        u
      ), o = lr(
        o,
        u,
        i,
        null
      ), b.return = a, o.return = a, b.sibling = o, a.child = b, u = a.child, u.memoizedState = af(i), u.childLanes = rf(
        t,
        v,
        i
      ), a.memoizedState = nf, o) : (za(a), sf(a, b));
    }
    if (T = t.memoizedState, T !== null && (b = T.dehydrated, b !== null)) {
      if (d)
        a.flags & 256 ? (za(a), a.flags &= -257, a = of(
          t,
          a,
          i
        )) : a.memoizedState !== null ? (Ra(), a.child = t.child, a.flags |= 128, a = null) : (Ra(), u = o.fallback, b = a.mode, o = gl(
          { mode: "visible", children: o.children },
          b
        ), u = lr(
          u,
          b,
          i,
          null
        ), u.flags |= 2, o.return = a, u.return = a, o.sibling = u, a.child = o, ci(
          a,
          t.child,
          null,
          i
        ), o = a.child, o.memoizedState = af(i), o.childLanes = rf(
          t,
          v,
          i
        ), a.memoizedState = nf, a = u);
      else if (za(a), Zf(b)) {
        if (v = b.nextSibling && b.nextSibling.dataset, v) var L = v.dgst;
        v = L, o = Error(s(419)), o.stack = "", o.digest = v, ms({ value: o, source: null, stack: null }), a = of(
          t,
          a,
          i
        );
      } else if (Dt || ps(t, a, i, !1), v = (i & t.childLanes) !== 0, Dt || v) {
        if (v = Je, v !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Zu(o), o = (o & (v.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== T.retryLane))
          throw T.retryLane = o, Wr(t, o), fn(v, t, o), Zg;
        b.data === "$?" || Af(), a = of(
          t,
          a,
          i
        );
      } else
        b.data === "$?" ? (a.flags |= 192, a.child = t.child, a = null) : (t = T.treeContext, st = On(
          b.nextSibling
        ), Gt = a, He = !0, fr = null, Un = !1, t !== null && (bn[xn++] = na, bn[xn++] = aa, bn[xn++] = ur, na = t.id, aa = t.overflow, ur = a), a = sf(
          a,
          o.children
        ), a.flags |= 4096);
      return a;
    }
    return u ? (Ra(), u = o.fallback, b = a.mode, T = t.child, L = T.sibling, o = ta(T, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = T.subtreeFlags & 65011712, L !== null ? u = ta(L, u) : (u = lr(
      u,
      b,
      i,
      null
    ), u.flags |= 2), u.return = a, o.return = a, o.sibling = u, a.child = o, o = u, u = a.child, b = t.child.memoizedState, b === null ? b = af(i) : (T = b.cachePool, T !== null ? (L = xt._currentValue, T = T.parent !== L ? { parent: L, pool: L } : T) : T = Np(), b = {
      baseLanes: b.baseLanes | i,
      cachePool: T
    }), u.memoizedState = b, u.childLanes = rf(
      t,
      v,
      i
    ), a.memoizedState = nf, o) : (za(a), i = t.child, t = i.sibling, i = ta(i, {
      mode: "visible",
      children: o.children
    }), i.return = a, i.sibling = null, t !== null && (v = a.deletions, v === null ? (a.deletions = [t], a.flags |= 16) : v.push(t)), a.child = i, a.memoizedState = null, i);
  }
  function sf(t, a) {
    return a = gl(
      { mode: "visible", children: a },
      t.mode
    ), a.return = t, t.child = a;
  }
  function gl(t, a) {
    return t = sn(22, t, null, a), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function of(t, a, i) {
    return ci(a, t.child, null, i), t = sf(
      a,
      a.pendingProps.children
    ), t.flags |= 2, a.memoizedState = null, t;
  }
  function Jg(t, a, i) {
    t.lanes |= a;
    var o = t.alternate;
    o !== null && (o.lanes |= a), Ec(t.return, a, i);
  }
  function lf(t, a, i, o, u) {
    var d = t.memoizedState;
    d === null ? t.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: u
    } : (d.isBackwards = a, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = i, d.tailMode = u);
  }
  function Wg(t, a, i) {
    var o = a.pendingProps, u = o.revealOrder, d = o.tail;
    if (kt(t, a, o.children, i), o = St.current, (o & 2) !== 0)
      o = o & 1 | 2, a.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        e: for (t = a.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Jg(t, i, a);
          else if (t.tag === 19)
            Jg(t, i, a);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === a) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === a)
              break e;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      o &= 1;
    }
    switch (ie(St, o), u) {
      case "forwards":
        for (i = a.child, u = null; i !== null; )
          t = i.alternate, t !== null && dl(t) === null && (u = i), i = i.sibling;
        i = u, i === null ? (u = a.child, a.child = null) : (u = i.sibling, i.sibling = null), lf(
          a,
          !1,
          u,
          i,
          d
        );
        break;
      case "backwards":
        for (i = null, u = a.child, a.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && dl(t) === null) {
            a.child = u;
            break;
          }
          t = u.sibling, u.sibling = i, i = u, u = t;
        }
        lf(
          a,
          !0,
          i,
          null,
          d
        );
        break;
      case "together":
        lf(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function la(t, a, i) {
    if (t !== null && (a.dependencies = t.dependencies), ja |= a.lanes, (i & a.childLanes) === 0)
      if (t !== null) {
        if (ps(
          t,
          a,
          i,
          !1
        ), (i & a.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && a.child !== t.child)
      throw Error(s(153));
    if (a.child !== null) {
      for (t = a.child, i = ta(t, t.pendingProps), a.child = i, i.return = a; t.sibling !== null; )
        t = t.sibling, i = i.sibling = ta(t, t.pendingProps), i.return = a;
      i.sibling = null;
    }
    return a.child;
  }
  function uf(t, a) {
    return (t.lanes & a) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Qo(t)));
  }
  function ZT(t, a, i) {
    switch (a.tag) {
      case 3:
        Be(a, a.stateNode.containerInfo), Aa(a, xt, t.memoizedState.cache), hs();
        break;
      case 27:
      case 5:
        Zt(a);
        break;
      case 4:
        Be(a, a.stateNode.containerInfo);
        break;
      case 10:
        Aa(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 13:
        var o = a.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (za(a), a.flags |= 128, null) : (i & a.child.childLanes) !== 0 ? Ig(t, a, i) : (za(a), t = la(
            t,
            a,
            i
          ), t !== null ? t.sibling : null);
        za(a);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (o = (i & a.childLanes) !== 0, o || (ps(
          t,
          a,
          i,
          !1
        ), o = (i & a.childLanes) !== 0), u) {
          if (o)
            return Wg(
              t,
              a,
              i
            );
          a.flags |= 128;
        }
        if (u = a.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), ie(St, St.current), o) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, Yg(t, a, i);
      case 24:
        Aa(a, xt, t.memoizedState.cache);
    }
    return la(t, a, i);
  }
  function ev(t, a, i) {
    if (t !== null)
      if (t.memoizedProps !== a.pendingProps)
        Dt = !0;
      else {
        if (!uf(t, i) && (a.flags & 128) === 0)
          return Dt = !1, ZT(
            t,
            a,
            i
          );
        Dt = (t.flags & 131072) !== 0;
      }
    else
      Dt = !1, He && (a.flags & 1048576) !== 0 && zp(a, Ko, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        e: {
          t = a.pendingProps;
          var o = a.elementType, u = o._init;
          if (o = u(o._payload), a.type = o, typeof o == "function")
            vc(o) ? (t = vr(o, t), a.tag = 1, a = Kg(
              null,
              a,
              o,
              t,
              i
            )) : (a.tag = 0, a = tf(
              null,
              a,
              o,
              t,
              i
            ));
          else {
            if (o != null) {
              if (u = o.$$typeof, u === W) {
                a.tag = 11, a = Hg(
                  null,
                  a,
                  o,
                  t,
                  i
                );
                break e;
              } else if (u === J) {
                a.tag = 14, a = Gg(
                  null,
                  a,
                  o,
                  t,
                  i
                );
                break e;
              }
            }
            throw a = U(o) || o, Error(s(306, a, ""));
          }
        }
        return a;
      case 0:
        return tf(
          t,
          a,
          a.type,
          a.pendingProps,
          i
        );
      case 1:
        return o = a.type, u = vr(
          o,
          a.pendingProps
        ), Kg(
          t,
          a,
          o,
          u,
          i
        );
      case 3:
        e: {
          if (Be(
            a,
            a.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          o = a.pendingProps;
          var d = a.memoizedState;
          u = d.element, Rc(t, a), ws(a, o, null, i);
          var v = a.memoizedState;
          if (o = v.cache, Aa(a, xt, o), o !== d.cache && Ac(
            a,
            [xt],
            i,
            !0
          ), Ss(), o = v.element, d.isDehydrated)
            if (d = {
              element: o,
              isDehydrated: !1,
              cache: v.cache
            }, a.updateQueue.baseState = d, a.memoizedState = d, a.flags & 256) {
              a = Qg(
                t,
                a,
                o,
                i
              );
              break e;
            } else if (o !== u) {
              u = vn(
                Error(s(424)),
                a
              ), ms(u), a = Qg(
                t,
                a,
                o,
                i
              );
              break e;
            } else {
              switch (t = a.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (st = On(t.firstChild), Gt = a, He = !0, fr = null, Un = !0, i = Vg(
                a,
                null,
                o,
                i
              ), a.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (hs(), o === u) {
              a = la(
                t,
                a,
                i
              );
              break e;
            }
            kt(
              t,
              a,
              o,
              i
            );
          }
          a = a.child;
        }
        return a;
      case 26:
        return pl(t, a), t === null ? (i = ry(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = i : He || (i = a.type, t = a.pendingProps, o = zl(
          Se.current
        ).createElement(i), o[Lt] = a, o[Qt] = t, jt(o, i, t), Mt(o), a.stateNode = o) : a.memoizedState = ry(
          a.type,
          t.memoizedProps,
          a.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Zt(a), t === null && He && (o = a.stateNode = ty(
          a.type,
          a.pendingProps,
          Se.current
        ), Gt = a, Un = !0, u = st, Ba(a.type) ? (Hf = u, st = On(
          o.firstChild
        )) : st = u), kt(
          t,
          a,
          a.pendingProps.children,
          i
        ), pl(t, a), t === null && (a.flags |= 4194304), a.child;
      case 5:
        return t === null && He && ((u = o = st) && (o = gE(
          o,
          a.type,
          a.pendingProps,
          Un
        ), o !== null ? (a.stateNode = o, Gt = a, st = On(
          o.firstChild
        ), Un = !1, u = !0) : u = !1), u || dr(a)), Zt(a), u = a.type, d = a.pendingProps, v = t !== null ? t.memoizedProps : null, o = d.children, Uf(u, d) ? o = null : v !== null && Uf(u, v) && (a.flags |= 32), a.memoizedState !== null && (u = Nc(
          t,
          a,
          kT,
          null,
          null,
          i
        ), Gs._currentValue = u), pl(t, a), kt(t, a, o, i), a.child;
      case 6:
        return t === null && He && ((t = i = st) && (i = vE(
          i,
          a.pendingProps,
          Un
        ), i !== null ? (a.stateNode = i, Gt = a, st = null, t = !0) : t = !1), t || dr(a)), null;
      case 13:
        return Ig(t, a, i);
      case 4:
        return Be(
          a,
          a.stateNode.containerInfo
        ), o = a.pendingProps, t === null ? a.child = ci(
          a,
          null,
          o,
          i
        ) : kt(
          t,
          a,
          o,
          i
        ), a.child;
      case 11:
        return Hg(
          t,
          a,
          a.type,
          a.pendingProps,
          i
        );
      case 7:
        return kt(
          t,
          a,
          a.pendingProps,
          i
        ), a.child;
      case 8:
        return kt(
          t,
          a,
          a.pendingProps.children,
          i
        ), a.child;
      case 12:
        return kt(
          t,
          a,
          a.pendingProps.children,
          i
        ), a.child;
      case 10:
        return o = a.pendingProps, Aa(a, a.type, o.value), kt(
          t,
          a,
          o.children,
          i
        ), a.child;
      case 9:
        return u = a.type._context, o = a.pendingProps.children, mr(a), u = Ut(u), o = o(u), a.flags |= 1, kt(t, a, o, i), a.child;
      case 14:
        return Gg(
          t,
          a,
          a.type,
          a.pendingProps,
          i
        );
      case 15:
        return qg(
          t,
          a,
          a.type,
          a.pendingProps,
          i
        );
      case 19:
        return Wg(t, a, i);
      case 31:
        return o = a.pendingProps, i = a.mode, o = {
          mode: o.mode,
          children: o.children
        }, t === null ? (i = gl(
          o,
          i
        ), i.ref = a.ref, a.child = i, i.return = a, a = i) : (i = ta(t.child, o), i.ref = a.ref, a.child = i, i.return = a, a = i), a;
      case 22:
        return Yg(t, a, i);
      case 24:
        return mr(a), o = Ut(xt), t === null ? (u = Mc(), u === null && (u = Je, d = _c(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= i), u = d), a.memoizedState = {
          parent: o,
          cache: u
        }, zc(a), Aa(a, xt, u)) : ((t.lanes & i) !== 0 && (Rc(t, a), ws(a, null, null, i), Ss()), u = t.memoizedState, d = a.memoizedState, u.parent !== o ? (u = { parent: o, cache: o }, a.memoizedState = u, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = u), Aa(a, xt, o)) : (o = d.cache, Aa(a, xt, o), o !== u.cache && Ac(
          a,
          [xt],
          i,
          !0
        ))), kt(
          t,
          a,
          a.pendingProps.children,
          i
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(s(156, a.tag));
  }
  function ua(t) {
    t.flags |= 4;
  }
  function tv(t, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !uy(a)) {
      if (a = Sn.current, a !== null && ((Pe & 4194048) === Pe ? Bn !== null : (Pe & 62914560) !== Pe && (Pe & 536870912) === 0 || a !== Bn))
        throw bs = Dc, Lp;
      t.flags |= 8192;
    }
  }
  function vl(t, a) {
    a !== null && (t.flags |= 4), t.flags & 16384 && (a = t.tag !== 22 ? Om() : 536870912, t.lanes |= a, mi |= a);
  }
  function Ds(t, a) {
    if (!He)
      switch (t.tailMode) {
        case "hidden":
          a = t.tail;
          for (var i = null; a !== null; )
            a.alternate !== null && (i = a), a = a.sibling;
          i === null ? t.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = t.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? a || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null;
      }
  }
  function at(t) {
    var a = t.alternate !== null && t.alternate.child === t.child, i = 0, o = 0;
    if (a)
      for (var u = t.child; u !== null; )
        i |= u.lanes | u.childLanes, o |= u.subtreeFlags & 65011712, o |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        i |= u.lanes | u.childLanes, o |= u.subtreeFlags, o |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= o, t.childLanes = i, a;
  }
  function HT(t, a, i) {
    var o = a.pendingProps;
    switch (Sc(a), a.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return at(a), null;
      case 1:
        return at(a), null;
      case 3:
        return i = a.stateNode, o = null, t !== null && (o = t.memoizedState.cache), a.memoizedState.cache !== o && (a.flags |= 2048), ia(xt), mt(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (ds(a) ? ua(a) : t === null || t.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, Op())), at(a), null;
      case 26:
        return i = a.memoizedState, t === null ? (ua(a), i !== null ? (at(a), tv(a, i)) : (at(a), a.flags &= -16777217)) : i ? i !== t.memoizedState ? (ua(a), at(a), tv(a, i)) : (at(a), a.flags &= -16777217) : (t.memoizedProps !== o && ua(a), at(a), a.flags &= -16777217), null;
      case 27:
        At(a), i = Se.current;
        var u = a.type;
        if (t !== null && a.stateNode != null)
          t.memoizedProps !== o && ua(a);
        else {
          if (!o) {
            if (a.stateNode === null)
              throw Error(s(166));
            return at(a), null;
          }
          t = fe.current, ds(a) ? Rp(a) : (t = ty(u, o, i), a.stateNode = t, ua(a));
        }
        return at(a), null;
      case 5:
        if (At(a), i = a.type, t !== null && a.stateNode != null)
          t.memoizedProps !== o && ua(a);
        else {
          if (!o) {
            if (a.stateNode === null)
              throw Error(s(166));
            return at(a), null;
          }
          if (t = fe.current, ds(a))
            Rp(a);
          else {
            switch (u = zl(
              Se.current
            ), t) {
              case 1:
                t = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                t = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    t = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof o.is == "string" ? u.createElement("select", { is: o.is }) : u.createElement("select"), o.multiple ? t.multiple = !0 : o.size && (t.size = o.size);
                    break;
                  default:
                    t = typeof o.is == "string" ? u.createElement(i, { is: o.is }) : u.createElement(i);
                }
            }
            t[Lt] = a, t[Qt] = o;
            e: for (u = a.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === a) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === a)
                  break e;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            a.stateNode = t;
            e: switch (jt(t, i, o), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!o.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && ua(a);
          }
        }
        return at(a), a.flags &= -16777217, null;
      case 6:
        if (t && a.stateNode != null)
          t.memoizedProps !== o && ua(a);
        else {
          if (typeof o != "string" && a.stateNode === null)
            throw Error(s(166));
          if (t = Se.current, ds(a)) {
            if (t = a.stateNode, i = a.memoizedProps, o = null, u = Gt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            t[Lt] = a, t = !!(t.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Xv(t.nodeValue, i)), t || dr(a);
          } else
            t = zl(t).createTextNode(
              o
            ), t[Lt] = a, a.stateNode = t;
        }
        return at(a), null;
      case 13:
        if (o = a.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ds(a), o !== null && o.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(s(318));
              if (u = a.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[Lt] = a;
            } else
              hs(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            at(a), u = !1;
          } else
            u = Op(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return a.flags & 256 ? (oa(a), a) : (oa(a), null);
        }
        if (oa(a), (a.flags & 128) !== 0)
          return a.lanes = i, a;
        if (i = o !== null, t = t !== null && t.memoizedState !== null, i) {
          o = a.child, u = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (u = o.alternate.memoizedState.cachePool.pool);
          var d = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (d = o.memoizedState.cachePool.pool), d !== u && (o.flags |= 2048);
        }
        return i !== t && i && (a.child.flags |= 8192), vl(a, a.updateQueue), at(a), null;
      case 4:
        return mt(), t === null && kf(a.stateNode.containerInfo), at(a), null;
      case 10:
        return ia(a.type), at(a), null;
      case 19:
        if (se(St), u = a.memoizedState, u === null) return at(a), null;
        if (o = (a.flags & 128) !== 0, d = u.rendering, d === null)
          if (o) Ds(u, !1);
          else {
            if (ot !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = a.child; t !== null; ) {
                if (d = dl(t), d !== null) {
                  for (a.flags |= 128, Ds(u, !1), t = d.updateQueue, a.updateQueue = t, vl(a, t), a.subtreeFlags = 0, t = i, i = a.child; i !== null; )
                    Dp(i, t), i = i.sibling;
                  return ie(
                    St,
                    St.current & 1 | 2
                  ), a.child;
                }
                t = t.sibling;
              }
            u.tail !== null && Kt() > xl && (a.flags |= 128, o = !0, Ds(u, !1), a.lanes = 4194304);
          }
        else {
          if (!o)
            if (t = dl(d), t !== null) {
              if (a.flags |= 128, o = !0, t = t.updateQueue, a.updateQueue = t, vl(a, t), Ds(u, !0), u.tail === null && u.tailMode === "hidden" && !d.alternate && !He)
                return at(a), null;
            } else
              2 * Kt() - u.renderingStartTime > xl && i !== 536870912 && (a.flags |= 128, o = !0, Ds(u, !1), a.lanes = 4194304);
          u.isBackwards ? (d.sibling = a.child, a.child = d) : (t = u.last, t !== null ? t.sibling = d : a.child = d, u.last = d);
        }
        return u.tail !== null ? (a = u.tail, u.rendering = a, u.tail = a.sibling, u.renderingStartTime = Kt(), a.sibling = null, t = St.current, ie(St, o ? t & 1 | 2 : t & 1), a) : (at(a), null);
      case 22:
      case 23:
        return oa(a), $c(), o = a.memoizedState !== null, t !== null ? t.memoizedState !== null !== o && (a.flags |= 8192) : o && (a.flags |= 8192), o ? (i & 536870912) !== 0 && (a.flags & 128) === 0 && (at(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : at(a), i = a.updateQueue, i !== null && vl(a, i.retryQueue), i = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), o = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== i && (a.flags |= 2048), t !== null && se(pr), null;
      case 24:
        return i = null, t !== null && (i = t.memoizedState.cache), a.memoizedState.cache !== i && (a.flags |= 2048), ia(xt), at(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, a.tag));
  }
  function GT(t, a) {
    switch (Sc(a), a.tag) {
      case 1:
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 3:
        return ia(xt), mt(), t = a.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (a.flags = t & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return At(a), null;
      case 13:
        if (oa(a), t = a.memoizedState, t !== null && t.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(s(340));
          hs();
        }
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 19:
        return se(St), null;
      case 4:
        return mt(), null;
      case 10:
        return ia(a.type), null;
      case 22:
      case 23:
        return oa(a), $c(), t !== null && se(pr), t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 24:
        return ia(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function nv(t, a) {
    switch (Sc(a), a.tag) {
      case 3:
        ia(xt), mt();
        break;
      case 26:
      case 27:
      case 5:
        At(a);
        break;
      case 4:
        mt();
        break;
      case 13:
        oa(a);
        break;
      case 19:
        se(St);
        break;
      case 10:
        ia(a.type);
        break;
      case 22:
      case 23:
        oa(a), $c(), t !== null && se(pr);
        break;
      case 24:
        ia(xt);
    }
  }
  function zs(t, a) {
    try {
      var i = a.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            o = void 0;
            var d = i.create, v = i.inst;
            o = d(), v.destroy = o;
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (b) {
      Ie(a, a.return, b);
    }
  }
  function Va(t, a, i) {
    try {
      var o = a.updateQueue, u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        o = d;
        do {
          if ((o.tag & t) === t) {
            var v = o.inst, b = v.destroy;
            if (b !== void 0) {
              v.destroy = void 0, u = a;
              var T = i, L = b;
              try {
                L();
              } catch (I) {
                Ie(
                  u,
                  T,
                  I
                );
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (I) {
      Ie(a, a.return, I);
    }
  }
  function av(t) {
    var a = t.updateQueue;
    if (a !== null) {
      var i = t.stateNode;
      try {
        Gp(a, i);
      } catch (o) {
        Ie(t, t.return, o);
      }
    }
  }
  function rv(t, a, i) {
    i.props = vr(
      t.type,
      t.memoizedProps
    ), i.state = t.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      Ie(t, a, o);
    }
  }
  function Rs(t, a) {
    try {
      var i = t.ref;
      if (i !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof i == "function" ? t.refCleanup = i(o) : i.current = o;
      }
    } catch (u) {
      Ie(t, a, u);
    }
  }
  function Pn(t, a) {
    var i = t.ref, o = t.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          Ie(t, a, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (u) {
          Ie(t, a, u);
        }
      else i.current = null;
  }
  function iv(t) {
    var a = t.type, i = t.memoizedProps, o = t.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (u) {
      Ie(t, t.return, u);
    }
  }
  function cf(t, a, i) {
    try {
      var o = t.stateNode;
      fE(o, t.type, i, a), o[Qt] = a;
    } catch (u) {
      Ie(t, t.return, u);
    }
  }
  function sv(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ba(t.type) || t.tag === 4;
  }
  function ff(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || sv(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ba(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function df(t, a, i) {
    var o = t.tag;
    if (o === 5 || o === 6)
      t = t.stateNode, a ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(t, a) : (a = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, a.appendChild(t), i = i._reactRootContainer, i != null || a.onclick !== null || (a.onclick = Dl));
    else if (o !== 4 && (o === 27 && Ba(t.type) && (i = t.stateNode, a = null), t = t.child, t !== null))
      for (df(t, a, i), t = t.sibling; t !== null; )
        df(t, a, i), t = t.sibling;
  }
  function yl(t, a, i) {
    var o = t.tag;
    if (o === 5 || o === 6)
      t = t.stateNode, a ? i.insertBefore(t, a) : i.appendChild(t);
    else if (o !== 4 && (o === 27 && Ba(t.type) && (i = t.stateNode), t = t.child, t !== null))
      for (yl(t, a, i), t = t.sibling; t !== null; )
        yl(t, a, i), t = t.sibling;
  }
  function ov(t) {
    var a = t.stateNode, i = t.memoizedProps;
    try {
      for (var o = t.type, u = a.attributes; u.length; )
        a.removeAttributeNode(u[0]);
      jt(a, o, i), a[Lt] = t, a[Qt] = i;
    } catch (d) {
      Ie(t, t.return, d);
    }
  }
  var ca = !1, ct = !1, hf = !1, lv = typeof WeakSet == "function" ? WeakSet : Set, zt = null;
  function qT(t, a) {
    if (t = t.containerInfo, Nf = jl, t = bp(t), cc(t)) {
      if ("selectionStart" in t)
        var i = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else {
        i = (i = t.ownerDocument) && i.defaultView || window;
        var o = i.getSelection && i.getSelection();
        if (o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var u = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          var v = 0, b = -1, T = -1, L = 0, I = 0, te = t, B = null;
          e: for (; ; ) {
            for (var P; te !== i || u !== 0 && te.nodeType !== 3 || (b = v + u), te !== d || o !== 0 && te.nodeType !== 3 || (T = v + o), te.nodeType === 3 && (v += te.nodeValue.length), (P = te.firstChild) !== null; )
              B = te, te = P;
            for (; ; ) {
              if (te === t) break e;
              if (B === i && ++L === u && (b = v), B === d && ++I === o && (T = v), (P = te.nextSibling) !== null) break;
              te = B, B = te.parentNode;
            }
            te = P;
          }
          i = b === -1 || T === -1 ? null : { start: b, end: T };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Lf = { focusedElem: t, selectionRange: i }, jl = !1, zt = a; zt !== null; )
      if (a = zt, t = a.child, (a.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = a, zt = t;
      else
        for (; zt !== null; ) {
          switch (a = zt, d = a.alternate, t = a.flags, a.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && d !== null) {
                t = void 0, i = a, u = d.memoizedProps, d = d.memoizedState, o = i.stateNode;
                try {
                  var _e = vr(
                    i.type,
                    u
                  );
                  t = o.getSnapshotBeforeUpdate(
                    _e,
                    d
                  ), o.__reactInternalSnapshotBeforeUpdate = t;
                } catch (Ee) {
                  Ie(
                    i,
                    i.return,
                    Ee
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = a.stateNode.containerInfo, i = t.nodeType, i === 9)
                  Pf(t);
                else if (i === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (t = a.sibling, t !== null) {
            t.return = a.return, zt = t;
            break;
          }
          zt = a.return;
        }
  }
  function uv(t, a, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Oa(t, i), o & 4 && zs(5, i);
        break;
      case 1:
        if (Oa(t, i), o & 4)
          if (t = i.stateNode, a === null)
            try {
              t.componentDidMount();
            } catch (v) {
              Ie(i, i.return, v);
            }
          else {
            var u = vr(
              i.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                a,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              Ie(
                i,
                i.return,
                v
              );
            }
          }
        o & 64 && av(i), o & 512 && Rs(i, i.return);
        break;
      case 3:
        if (Oa(t, i), o & 64 && (t = i.updateQueue, t !== null)) {
          if (a = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                a = i.child.stateNode;
                break;
              case 1:
                a = i.child.stateNode;
            }
          try {
            Gp(t, a);
          } catch (v) {
            Ie(i, i.return, v);
          }
        }
        break;
      case 27:
        a === null && o & 4 && ov(i);
      case 26:
      case 5:
        Oa(t, i), a === null && o & 4 && iv(i), o & 512 && Rs(i, i.return);
        break;
      case 12:
        Oa(t, i);
        break;
      case 13:
        Oa(t, i), o & 4 && dv(t, i), o & 64 && (t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null && (i = eE.bind(
          null,
          i
        ), yE(t, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || ca, !o) {
          a = a !== null && a.memoizedState !== null || ct, u = ca;
          var d = ct;
          ca = o, (ct = a) && !d ? ka(
            t,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Oa(t, i), ca = u, ct = d;
        }
        break;
      case 30:
        break;
      default:
        Oa(t, i);
    }
  }
  function cv(t) {
    var a = t.alternate;
    a !== null && (t.alternate = null, cv(a)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (a = t.stateNode, a !== null && qu(a)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var et = null, Wt = !1;
  function fa(t, a, i) {
    for (i = i.child; i !== null; )
      fv(t, a, i), i = i.sibling;
  }
  function fv(t, a, i) {
    if (ze && typeof ze.onCommitFiberUnmount == "function")
      try {
        ze.onCommitFiberUnmount(pe, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        ct || Pn(i, a), fa(
          t,
          a,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        ct || Pn(i, a);
        var o = et, u = Wt;
        Ba(i.type) && (et = i.stateNode, Wt = !1), fa(
          t,
          a,
          i
        ), Bs(i.stateNode), et = o, Wt = u;
        break;
      case 5:
        ct || Pn(i, a);
      case 6:
        if (o = et, u = Wt, et = null, fa(
          t,
          a,
          i
        ), et = o, Wt = u, et !== null)
          if (Wt)
            try {
              (et.nodeType === 9 ? et.body : et.nodeName === "HTML" ? et.ownerDocument.body : et).removeChild(i.stateNode);
            } catch (d) {
              Ie(
                i,
                a,
                d
              );
            }
          else
            try {
              et.removeChild(i.stateNode);
            } catch (d) {
              Ie(
                i,
                a,
                d
              );
            }
        break;
      case 18:
        et !== null && (Wt ? (t = et, Wv(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          i.stateNode
        ), Xs(t)) : Wv(et, i.stateNode));
        break;
      case 4:
        o = et, u = Wt, et = i.stateNode.containerInfo, Wt = !0, fa(
          t,
          a,
          i
        ), et = o, Wt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ct || Va(2, i, a), ct || Va(4, i, a), fa(
          t,
          a,
          i
        );
        break;
      case 1:
        ct || (Pn(i, a), o = i.stateNode, typeof o.componentWillUnmount == "function" && rv(
          i,
          a,
          o
        )), fa(
          t,
          a,
          i
        );
        break;
      case 21:
        fa(
          t,
          a,
          i
        );
        break;
      case 22:
        ct = (o = ct) || i.memoizedState !== null, fa(
          t,
          a,
          i
        ), ct = o;
        break;
      default:
        fa(
          t,
          a,
          i
        );
    }
  }
  function dv(t, a) {
    if (a.memoizedState === null && (t = a.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Xs(t);
      } catch (i) {
        Ie(a, a.return, i);
      }
  }
  function YT(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var a = t.stateNode;
        return a === null && (a = t.stateNode = new lv()), a;
      case 22:
        return t = t.stateNode, a = t._retryCache, a === null && (a = t._retryCache = new lv()), a;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function mf(t, a) {
    var i = YT(t);
    a.forEach(function(o) {
      var u = tE.bind(null, t, o);
      i.has(o) || (i.add(o), o.then(u, u));
    });
  }
  function on(t, a) {
    var i = a.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var u = i[o], d = t, v = a, b = v;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (Ba(b.type)) {
                et = b.stateNode, Wt = !1;
                break e;
              }
              break;
            case 5:
              et = b.stateNode, Wt = !1;
              break e;
            case 3:
            case 4:
              et = b.stateNode.containerInfo, Wt = !0;
              break e;
          }
          b = b.return;
        }
        if (et === null) throw Error(s(160));
        fv(d, v, u), et = null, Wt = !1, d = u.alternate, d !== null && (d.return = null), u.return = null;
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; )
        hv(a, t), a = a.sibling;
  }
  var Vn = null;
  function hv(t, a) {
    var i = t.alternate, o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        on(a, t), ln(t), o & 4 && (Va(3, t, t.return), zs(3, t), Va(5, t, t.return));
        break;
      case 1:
        on(a, t), ln(t), o & 512 && (ct || i === null || Pn(i, i.return)), o & 64 && ca && (t = t.updateQueue, t !== null && (o = t.callbacks, o !== null && (i = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var u = Vn;
        if (on(a, t), ln(t), o & 512 && (ct || i === null || Pn(i, i.return)), o & 4) {
          var d = i !== null ? i.memoizedState : null;
          if (o = t.memoizedState, i === null)
            if (o === null)
              if (t.stateNode === null) {
                e: {
                  o = t.type, i = t.memoizedProps, u = u.ownerDocument || u;
                  t: switch (o) {
                    case "title":
                      d = u.getElementsByTagName("title")[0], (!d || d[ts] || d[Lt] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = u.createElement(o), u.head.insertBefore(
                        d,
                        u.querySelector("head > title")
                      )), jt(d, o, i), d[Lt] = t, Mt(d), o = d;
                      break e;
                    case "link":
                      var v = oy(
                        "link",
                        "href",
                        u
                      ).get(o + (i.href || ""));
                      if (v) {
                        for (var b = 0; b < v.length; b++)
                          if (d = v[b], d.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && d.getAttribute("rel") === (i.rel == null ? null : i.rel) && d.getAttribute("title") === (i.title == null ? null : i.title) && d.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            v.splice(b, 1);
                            break t;
                          }
                      }
                      d = u.createElement(o), jt(d, o, i), u.head.appendChild(d);
                      break;
                    case "meta":
                      if (v = oy(
                        "meta",
                        "content",
                        u
                      ).get(o + (i.content || ""))) {
                        for (b = 0; b < v.length; b++)
                          if (d = v[b], d.getAttribute("content") === (i.content == null ? null : "" + i.content) && d.getAttribute("name") === (i.name == null ? null : i.name) && d.getAttribute("property") === (i.property == null ? null : i.property) && d.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && d.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            v.splice(b, 1);
                            break t;
                          }
                      }
                      d = u.createElement(o), jt(d, o, i), u.head.appendChild(d);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  d[Lt] = t, Mt(d), o = d;
                }
                t.stateNode = o;
              } else
                ly(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = sy(
                u,
                o,
                t.memoizedProps
              );
          else
            d !== o ? (d === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : d.count--, o === null ? ly(
              u,
              t.type,
              t.stateNode
            ) : sy(
              u,
              o,
              t.memoizedProps
            )) : o === null && t.stateNode !== null && cf(
              t,
              t.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        on(a, t), ln(t), o & 512 && (ct || i === null || Pn(i, i.return)), i !== null && o & 4 && cf(
          t,
          t.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (on(a, t), ln(t), o & 512 && (ct || i === null || Pn(i, i.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Yr(u, "");
          } catch (P) {
            Ie(t, t.return, P);
          }
        }
        o & 4 && t.stateNode != null && (u = t.memoizedProps, cf(
          t,
          u,
          i !== null ? i.memoizedProps : u
        )), o & 1024 && (hf = !0);
        break;
      case 6:
        if (on(a, t), ln(t), o & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          o = t.memoizedProps, i = t.stateNode;
          try {
            i.nodeValue = o;
          } catch (P) {
            Ie(t, t.return, P);
          }
        }
        break;
      case 3:
        if (Ol = null, u = Vn, Vn = Rl(a.containerInfo), on(a, t), Vn = u, ln(t), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Xs(a.containerInfo);
          } catch (P) {
            Ie(t, t.return, P);
          }
        hf && (hf = !1, mv(t));
        break;
      case 4:
        o = Vn, Vn = Rl(
          t.stateNode.containerInfo
        ), on(a, t), ln(t), Vn = o;
        break;
      case 12:
        on(a, t), ln(t);
        break;
      case 13:
        on(a, t), ln(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (xf = Kt()), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, mf(t, o)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var T = i !== null && i.memoizedState !== null, L = ca, I = ct;
        if (ca = L || u, ct = I || T, on(a, t), ct = I, ca = L, ln(t), o & 8192)
          e: for (a = t.stateNode, a._visibility = u ? a._visibility & -2 : a._visibility | 1, u && (i === null || T || ca || ct || yr(t)), i = null, a = t; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (i === null) {
                T = i = a;
                try {
                  if (d = T.stateNode, u)
                    v = d.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                  else {
                    b = T.stateNode;
                    var te = T.memoizedProps.style, B = te != null && te.hasOwnProperty("display") ? te.display : null;
                    b.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (P) {
                  Ie(T, T.return, P);
                }
              }
            } else if (a.tag === 6) {
              if (i === null) {
                T = a;
                try {
                  T.stateNode.nodeValue = u ? "" : T.memoizedProps;
                } catch (P) {
                  Ie(T, T.return, P);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === t) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === t) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === t) break e;
              i === a && (i = null), a = a.return;
            }
            i === a && (i = null), a.sibling.return = a.return, a = a.sibling;
          }
        o & 4 && (o = t.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, mf(t, i))));
        break;
      case 19:
        on(a, t), ln(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, mf(t, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        on(a, t), ln(t);
    }
  }
  function ln(t) {
    var a = t.flags;
    if (a & 2) {
      try {
        for (var i, o = t.return; o !== null; ) {
          if (sv(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(s(160));
        switch (i.tag) {
          case 27:
            var u = i.stateNode, d = ff(t);
            yl(t, d, u);
            break;
          case 5:
            var v = i.stateNode;
            i.flags & 32 && (Yr(v, ""), i.flags &= -33);
            var b = ff(t);
            yl(t, b, v);
            break;
          case 3:
          case 4:
            var T = i.stateNode.containerInfo, L = ff(t);
            df(
              t,
              L,
              T
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (I) {
        Ie(t, t.return, I);
      }
      t.flags &= -3;
    }
    a & 4096 && (t.flags &= -4097);
  }
  function mv(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var a = t;
        mv(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), t = t.sibling;
      }
  }
  function Oa(t, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        uv(t, a.alternate, a), a = a.sibling;
  }
  function yr(t) {
    for (t = t.child; t !== null; ) {
      var a = t;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Va(4, a, a.return), yr(a);
          break;
        case 1:
          Pn(a, a.return);
          var i = a.stateNode;
          typeof i.componentWillUnmount == "function" && rv(
            a,
            a.return,
            i
          ), yr(a);
          break;
        case 27:
          Bs(a.stateNode);
        case 26:
        case 5:
          Pn(a, a.return), yr(a);
          break;
        case 22:
          a.memoizedState === null && yr(a);
          break;
        case 30:
          yr(a);
          break;
        default:
          yr(a);
      }
      t = t.sibling;
    }
  }
  function ka(t, a, i) {
    for (i = i && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var o = a.alternate, u = t, d = a, v = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ka(
            u,
            d,
            i
          ), zs(4, d);
          break;
        case 1:
          if (ka(
            u,
            d,
            i
          ), o = d, u = o.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (L) {
              Ie(o, o.return, L);
            }
          if (o = d, u = o.updateQueue, u !== null) {
            var b = o.stateNode;
            try {
              var T = u.shared.hiddenCallbacks;
              if (T !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < T.length; u++)
                  Hp(T[u], b);
            } catch (L) {
              Ie(o, o.return, L);
            }
          }
          i && v & 64 && av(d), Rs(d, d.return);
          break;
        case 27:
          ov(d);
        case 26:
        case 5:
          ka(
            u,
            d,
            i
          ), i && o === null && v & 4 && iv(d), Rs(d, d.return);
          break;
        case 12:
          ka(
            u,
            d,
            i
          );
          break;
        case 13:
          ka(
            u,
            d,
            i
          ), i && v & 4 && dv(u, d);
          break;
        case 22:
          d.memoizedState === null && ka(
            u,
            d,
            i
          ), Rs(d, d.return);
          break;
        case 30:
          break;
        default:
          ka(
            u,
            d,
            i
          );
      }
      a = a.sibling;
    }
  }
  function pf(t, a) {
    var i = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), t = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (t = a.memoizedState.cachePool.pool), t !== i && (t != null && t.refCount++, i != null && gs(i));
  }
  function gf(t, a) {
    t = null, a.alternate !== null && (t = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== t && (a.refCount++, t != null && gs(t));
  }
  function Zn(t, a, i, o) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        pv(
          t,
          a,
          i,
          o
        ), a = a.sibling;
  }
  function pv(t, a, i, o) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Zn(
          t,
          a,
          i,
          o
        ), u & 2048 && zs(9, a);
        break;
      case 1:
        Zn(
          t,
          a,
          i,
          o
        );
        break;
      case 3:
        Zn(
          t,
          a,
          i,
          o
        ), u & 2048 && (t = null, a.alternate !== null && (t = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== t && (a.refCount++, t != null && gs(t)));
        break;
      case 12:
        if (u & 2048) {
          Zn(
            t,
            a,
            i,
            o
          ), t = a.stateNode;
          try {
            var d = a.memoizedProps, v = d.id, b = d.onPostCommit;
            typeof b == "function" && b(
              v,
              a.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Ie(a, a.return, T);
          }
        } else
          Zn(
            t,
            a,
            i,
            o
          );
        break;
      case 13:
        Zn(
          t,
          a,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        d = a.stateNode, v = a.alternate, a.memoizedState !== null ? d._visibility & 2 ? Zn(
          t,
          a,
          i,
          o
        ) : Vs(t, a) : d._visibility & 2 ? Zn(
          t,
          a,
          i,
          o
        ) : (d._visibility |= 2, fi(
          t,
          a,
          i,
          o,
          (a.subtreeFlags & 10256) !== 0
        )), u & 2048 && pf(v, a);
        break;
      case 24:
        Zn(
          t,
          a,
          i,
          o
        ), u & 2048 && gf(a.alternate, a);
        break;
      default:
        Zn(
          t,
          a,
          i,
          o
        );
    }
  }
  function fi(t, a, i, o, u) {
    for (u = u && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var d = t, v = a, b = i, T = o, L = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          fi(
            d,
            v,
            b,
            T,
            u
          ), zs(8, v);
          break;
        case 23:
          break;
        case 22:
          var I = v.stateNode;
          v.memoizedState !== null ? I._visibility & 2 ? fi(
            d,
            v,
            b,
            T,
            u
          ) : Vs(
            d,
            v
          ) : (I._visibility |= 2, fi(
            d,
            v,
            b,
            T,
            u
          )), u && L & 2048 && pf(
            v.alternate,
            v
          );
          break;
        case 24:
          fi(
            d,
            v,
            b,
            T,
            u
          ), u && L & 2048 && gf(v.alternate, v);
          break;
        default:
          fi(
            d,
            v,
            b,
            T,
            u
          );
      }
      a = a.sibling;
    }
  }
  function Vs(t, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var i = t, o = a, u = o.flags;
        switch (o.tag) {
          case 22:
            Vs(i, o), u & 2048 && pf(
              o.alternate,
              o
            );
            break;
          case 24:
            Vs(i, o), u & 2048 && gf(o.alternate, o);
            break;
          default:
            Vs(i, o);
        }
        a = a.sibling;
      }
  }
  var Os = 8192;
  function di(t) {
    if (t.subtreeFlags & Os)
      for (t = t.child; t !== null; )
        gv(t), t = t.sibling;
  }
  function gv(t) {
    switch (t.tag) {
      case 26:
        di(t), t.flags & Os && t.memoizedState !== null && RE(
          Vn,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        di(t);
        break;
      case 3:
      case 4:
        var a = Vn;
        Vn = Rl(t.stateNode.containerInfo), di(t), Vn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Os, Os = 16777216, di(t), Os = a) : di(t));
        break;
      default:
        di(t);
    }
  }
  function vv(t) {
    var a = t.alternate;
    if (a !== null && (t = a.child, t !== null)) {
      a.child = null;
      do
        a = t.sibling, t.sibling = null, t = a;
      while (t !== null);
    }
  }
  function ks(t) {
    var a = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = a[i];
          zt = o, bv(
            o,
            t
          );
        }
      vv(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        yv(t), t = t.sibling;
  }
  function yv(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ks(t), t.flags & 2048 && Va(9, t, t.return);
        break;
      case 3:
        ks(t);
        break;
      case 12:
        ks(t);
        break;
      case 22:
        var a = t.stateNode;
        t.memoizedState !== null && a._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (a._visibility &= -3, bl(t)) : ks(t);
        break;
      default:
        ks(t);
    }
  }
  function bl(t) {
    var a = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = a[i];
          zt = o, bv(
            o,
            t
          );
        }
      vv(t);
    }
    for (t = t.child; t !== null; ) {
      switch (a = t, a.tag) {
        case 0:
        case 11:
        case 15:
          Va(8, a, a.return), bl(a);
          break;
        case 22:
          i = a.stateNode, i._visibility & 2 && (i._visibility &= -3, bl(a));
          break;
        default:
          bl(a);
      }
      t = t.sibling;
    }
  }
  function bv(t, a) {
    for (; zt !== null; ) {
      var i = zt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Va(8, i, a);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          gs(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, zt = o;
      else
        e: for (i = t; zt !== null; ) {
          o = zt;
          var u = o.sibling, d = o.return;
          if (cv(o), o === i) {
            zt = null;
            break e;
          }
          if (u !== null) {
            u.return = d, zt = u;
            break e;
          }
          zt = d;
        }
    }
  }
  var FT = {
    getCacheForType: function(t) {
      var a = Ut(xt), i = a.data.get(t);
      return i === void 0 && (i = t(), a.data.set(t, i)), i;
    }
  }, XT = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Je = null, Ne = null, Pe = 0, qe = 0, un = null, $a = !1, hi = !1, vf = !1, da = 0, ot = 0, ja = 0, br = 0, yf = 0, wn = 0, mi = 0, $s = null, en = null, bf = !1, xf = 0, xl = 1 / 0, Sl = null, Na = null, $t = 0, La = null, pi = null, gi = 0, Sf = 0, wf = null, xv = null, js = 0, Tf = null;
  function cn() {
    if ((Ge & 2) !== 0 && Pe !== 0)
      return Pe & -Pe;
    if (S.T !== null) {
      var t = ai;
      return t !== 0 ? t : zf();
    }
    return jm();
  }
  function Sv() {
    wn === 0 && (wn = (Pe & 536870912) === 0 || He ? Vm() : 536870912);
    var t = Sn.current;
    return t !== null && (t.flags |= 32), wn;
  }
  function fn(t, a, i) {
    (t === Je && (qe === 2 || qe === 9) || t.cancelPendingCommit !== null) && (vi(t, 0), Ua(
      t,
      Pe,
      wn,
      !1
    )), es(t, i), ((Ge & 2) === 0 || t !== Je) && (t === Je && ((Ge & 2) === 0 && (br |= i), ot === 4 && Ua(
      t,
      Pe,
      wn,
      !1
    )), Hn(t));
  }
  function wv(t, a, i) {
    if ((Ge & 6) !== 0) throw Error(s(327));
    var o = !i && (a & 124) === 0 && (a & t.expiredLanes) === 0 || ar(t, a), u = o ? IT(t, a) : _f(t, a, !0), d = o;
    do {
      if (u === 0) {
        hi && !o && Ua(t, a, 0, !1);
        break;
      } else {
        if (i = t.current.alternate, d && !KT(i)) {
          u = _f(t, a, !1), d = !1;
          continue;
        }
        if (u === 2) {
          if (d = a, t.errorRecoveryDisabledLanes & d)
            var v = 0;
          else
            v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            a = v;
            e: {
              var b = t;
              u = $s;
              var T = b.current.memoizedState.isDehydrated;
              if (T && (vi(b, v).flags |= 256), v = _f(
                b,
                v,
                !1
              ), v !== 2) {
                if (vf && !T) {
                  b.errorRecoveryDisabledLanes |= d, br |= d, u = 4;
                  break e;
                }
                d = en, en = u, d !== null && (en === null ? en = d : en.push.apply(
                  en,
                  d
                ));
              }
              u = v;
            }
            if (d = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          vi(t, 0), Ua(t, a, 0, !0);
          break;
        }
        e: {
          switch (o = t, d = u, d) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              Ua(
                o,
                a,
                wn,
                !$a
              );
              break e;
            case 2:
              en = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((a & 62914560) === a && (u = xf + 300 - Kt(), 10 < u)) {
            if (Ua(
              o,
              a,
              wn,
              !$a
            ), nr(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Iv(
              Tv.bind(
                null,
                o,
                i,
                en,
                Sl,
                bf,
                a,
                wn,
                br,
                mi,
                $a,
                d,
                2,
                -0,
                0
              ),
              u
            );
            break e;
          }
          Tv(
            o,
            i,
            en,
            Sl,
            bf,
            a,
            wn,
            br,
            mi,
            $a,
            d,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Hn(t);
  }
  function Tv(t, a, i, o, u, d, v, b, T, L, I, te, B, P) {
    if (t.timeoutHandle = -1, te = a.subtreeFlags, (te & 8192 || (te & 16785408) === 16785408) && (Hs = { stylesheets: null, count: 0, unsuspend: zE }, gv(a), te = VE(), te !== null)) {
      t.cancelPendingCommit = te(
        zv.bind(
          null,
          t,
          a,
          d,
          i,
          o,
          u,
          v,
          b,
          T,
          I,
          1,
          B,
          P
        )
      ), Ua(t, d, v, !L);
      return;
    }
    zv(
      t,
      a,
      d,
      i,
      o,
      u,
      v,
      b,
      T
    );
  }
  function KT(t) {
    for (var a = t; ; ) {
      var i = a.tag;
      if ((i === 0 || i === 11 || i === 15) && a.flags & 16384 && (i = a.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var u = i[o], d = u.getSnapshot;
          u = u.value;
          try {
            if (!rn(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = a.child, a.subtreeFlags & 16384 && i !== null)
        i.return = a, a = i;
      else {
        if (a === t) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function Ua(t, a, i, o) {
    a &= ~yf, a &= ~br, t.suspendedLanes |= a, t.pingedLanes &= ~a, o && (t.warmLanes |= a), o = t.expirationTimes;
    for (var u = a; 0 < u; ) {
      var d = 31 - Fe(u), v = 1 << d;
      o[d] = -1, u &= ~v;
    }
    i !== 0 && km(t, i, a);
  }
  function wl() {
    return (Ge & 6) === 0 ? (Ns(0), !1) : !0;
  }
  function Ef() {
    if (Ne !== null) {
      if (qe === 0)
        var t = Ne.return;
      else
        t = Ne, ra = hr = null, Bc(t), ui = null, Cs = 0, t = Ne;
      for (; t !== null; )
        nv(t.alternate, t), t = t.return;
      Ne = null;
    }
  }
  function vi(t, a) {
    var i = t.timeoutHandle;
    i !== -1 && (t.timeoutHandle = -1, hE(i)), i = t.cancelPendingCommit, i !== null && (t.cancelPendingCommit = null, i()), Ef(), Je = t, Ne = i = ta(t.current, null), Pe = a, qe = 0, un = null, $a = !1, hi = ar(t, a), vf = !1, mi = wn = yf = br = ja = ot = 0, en = $s = null, bf = !1, (a & 8) !== 0 && (a |= a & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= a; 0 < o; ) {
        var u = 31 - Fe(o), d = 1 << u;
        a |= t[u], o &= ~d;
      }
    return da = a, Go(), i;
  }
  function Ev(t, a) {
    Oe = null, S.H = ul, a === ys || a === Wo ? (a = Pp(), qe = 3) : a === Lp ? (a = Pp(), qe = 4) : qe = a === Zg ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, un = a, Ne === null && (ot = 1, ml(
      t,
      vn(a, t.current)
    ));
  }
  function Av() {
    var t = S.H;
    return S.H = ul, t === null ? ul : t;
  }
  function _v() {
    var t = S.A;
    return S.A = FT, t;
  }
  function Af() {
    ot = 4, $a || (Pe & 4194048) !== Pe && Sn.current !== null || (hi = !0), (ja & 134217727) === 0 && (br & 134217727) === 0 || Je === null || Ua(
      Je,
      Pe,
      wn,
      !1
    );
  }
  function _f(t, a, i) {
    var o = Ge;
    Ge |= 2;
    var u = Av(), d = _v();
    (Je !== t || Pe !== a) && (Sl = null, vi(t, a)), a = !1;
    var v = ot;
    e: do
      try {
        if (qe !== 0 && Ne !== null) {
          var b = Ne, T = un;
          switch (qe) {
            case 8:
              Ef(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Sn.current === null && (a = !0);
              var L = qe;
              if (qe = 0, un = null, yi(t, b, T, L), i && hi) {
                v = 0;
                break e;
              }
              break;
            default:
              L = qe, qe = 0, un = null, yi(t, b, T, L);
          }
        }
        QT(), v = ot;
        break;
      } catch (I) {
        Ev(t, I);
      }
    while (!0);
    return a && t.shellSuspendCounter++, ra = hr = null, Ge = o, S.H = u, S.A = d, Ne === null && (Je = null, Pe = 0, Go()), v;
  }
  function QT() {
    for (; Ne !== null; ) Cv(Ne);
  }
  function IT(t, a) {
    var i = Ge;
    Ge |= 2;
    var o = Av(), u = _v();
    Je !== t || Pe !== a ? (Sl = null, xl = Kt() + 500, vi(t, a)) : hi = ar(
      t,
      a
    );
    e: do
      try {
        if (qe !== 0 && Ne !== null) {
          a = Ne;
          var d = un;
          t: switch (qe) {
            case 1:
              qe = 0, un = null, yi(t, a, d, 1);
              break;
            case 2:
            case 9:
              if (Up(d)) {
                qe = 0, un = null, Mv(a);
                break;
              }
              a = function() {
                qe !== 2 && qe !== 9 || Je !== t || (qe = 7), Hn(t);
              }, d.then(a, a);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              Up(d) ? (qe = 0, un = null, Mv(a)) : (qe = 0, un = null, yi(t, a, d, 7));
              break;
            case 5:
              var v = null;
              switch (Ne.tag) {
                case 26:
                  v = Ne.memoizedState;
                case 5:
                case 27:
                  var b = Ne;
                  if (!v || uy(v)) {
                    qe = 0, un = null;
                    var T = b.sibling;
                    if (T !== null) Ne = T;
                    else {
                      var L = b.return;
                      L !== null ? (Ne = L, Tl(L)) : Ne = null;
                    }
                    break t;
                  }
              }
              qe = 0, un = null, yi(t, a, d, 5);
              break;
            case 6:
              qe = 0, un = null, yi(t, a, d, 6);
              break;
            case 8:
              Ef(), ot = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        JT();
        break;
      } catch (I) {
        Ev(t, I);
      }
    while (!0);
    return ra = hr = null, S.H = o, S.A = u, Ge = i, Ne !== null ? 0 : (Je = null, Pe = 0, Go(), ot);
  }
  function JT() {
    for (; Ne !== null && !Lr(); )
      Cv(Ne);
  }
  function Cv(t) {
    var a = ev(t.alternate, t, da);
    t.memoizedProps = t.pendingProps, a === null ? Tl(t) : Ne = a;
  }
  function Mv(t) {
    var a = t, i = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Xg(
          i,
          a,
          a.pendingProps,
          a.type,
          void 0,
          Pe
        );
        break;
      case 11:
        a = Xg(
          i,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          Pe
        );
        break;
      case 5:
        Bc(a);
      default:
        nv(i, a), a = Ne = Dp(a, da), a = ev(i, a, da);
    }
    t.memoizedProps = t.pendingProps, a === null ? Tl(t) : Ne = a;
  }
  function yi(t, a, i, o) {
    ra = hr = null, Bc(a), ui = null, Cs = 0;
    var u = a.return;
    try {
      if (PT(
        t,
        u,
        a,
        i,
        Pe
      )) {
        ot = 1, ml(
          t,
          vn(i, t.current)
        ), Ne = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw Ne = u, d;
      ot = 1, ml(
        t,
        vn(i, t.current)
      ), Ne = null;
      return;
    }
    a.flags & 32768 ? (He || o === 1 ? t = !0 : hi || (Pe & 536870912) !== 0 ? t = !1 : ($a = t = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Sn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Dv(a, t)) : Tl(a);
  }
  function Tl(t) {
    var a = t;
    do {
      if ((a.flags & 32768) !== 0) {
        Dv(
          a,
          $a
        );
        return;
      }
      t = a.return;
      var i = HT(
        a.alternate,
        a,
        da
      );
      if (i !== null) {
        Ne = i;
        return;
      }
      if (a = a.sibling, a !== null) {
        Ne = a;
        return;
      }
      Ne = a = t;
    } while (a !== null);
    ot === 0 && (ot = 5);
  }
  function Dv(t, a) {
    do {
      var i = GT(t.alternate, t);
      if (i !== null) {
        i.flags &= 32767, Ne = i;
        return;
      }
      if (i = t.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !a && (t = t.sibling, t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = i;
    } while (t !== null);
    ot = 6, Ne = null;
  }
  function zv(t, a, i, o, u, d, v, b, T) {
    t.cancelPendingCommit = null;
    do
      El();
    while ($t !== 0);
    if ((Ge & 6) !== 0) throw Error(s(327));
    if (a !== null) {
      if (a === t.current) throw Error(s(177));
      if (d = a.lanes | a.childLanes, d |= pc, zw(
        t,
        i,
        d,
        v,
        b,
        T
      ), t === Je && (Ne = Je = null, Pe = 0), pi = a, La = t, gi = i, Sf = d, wf = u, xv = o, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, nE(N, function() {
        return $v(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), o = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || o) {
        o = S.T, S.T = null, u = j.p, j.p = 2, v = Ge, Ge |= 4;
        try {
          qT(t, a);
        } finally {
          Ge = v, j.p = u, S.T = o;
        }
      }
      $t = 1, Rv(), Vv(), Ov();
    }
  }
  function Rv() {
    if ($t === 1) {
      $t = 0;
      var t = La, a = pi, i = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || i) {
        i = S.T, S.T = null;
        var o = j.p;
        j.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          hv(a, t);
          var d = Lf, v = bp(t.containerInfo), b = d.focusedElem, T = d.selectionRange;
          if (v !== b && b && b.ownerDocument && yp(
            b.ownerDocument.documentElement,
            b
          )) {
            if (T !== null && cc(b)) {
              var L = T.start, I = T.end;
              if (I === void 0 && (I = L), "selectionStart" in b)
                b.selectionStart = L, b.selectionEnd = Math.min(
                  I,
                  b.value.length
                );
              else {
                var te = b.ownerDocument || document, B = te && te.defaultView || window;
                if (B.getSelection) {
                  var P = B.getSelection(), _e = b.textContent.length, Ee = Math.min(T.start, _e), Qe = T.end === void 0 ? Ee : Math.min(T.end, _e);
                  !P.extend && Ee > Qe && (v = Qe, Qe = Ee, Ee = v);
                  var V = vp(
                    b,
                    Ee
                  ), M = vp(
                    b,
                    Qe
                  );
                  if (V && M && (P.rangeCount !== 1 || P.anchorNode !== V.node || P.anchorOffset !== V.offset || P.focusNode !== M.node || P.focusOffset !== M.offset)) {
                    var k = te.createRange();
                    k.setStart(V.node, V.offset), P.removeAllRanges(), Ee > Qe ? (P.addRange(k), P.extend(M.node, M.offset)) : (k.setEnd(M.node, M.offset), P.addRange(k));
                  }
                }
              }
            }
            for (te = [], P = b; P = P.parentNode; )
              P.nodeType === 1 && te.push({
                element: P,
                left: P.scrollLeft,
                top: P.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < te.length; b++) {
              var ee = te[b];
              ee.element.scrollLeft = ee.left, ee.element.scrollTop = ee.top;
            }
          }
          jl = !!Nf, Lf = Nf = null;
        } finally {
          Ge = u, j.p = o, S.T = i;
        }
      }
      t.current = a, $t = 2;
    }
  }
  function Vv() {
    if ($t === 2) {
      $t = 0;
      var t = La, a = pi, i = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || i) {
        i = S.T, S.T = null;
        var o = j.p;
        j.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          uv(t, a.alternate, a);
        } finally {
          Ge = u, j.p = o, S.T = i;
        }
      }
      $t = 3;
    }
  }
  function Ov() {
    if ($t === 4 || $t === 3) {
      $t = 0, Ji();
      var t = La, a = pi, i = gi, o = xv;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? $t = 5 : ($t = 0, pi = La = null, kv(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Na = null), Hu(i), a = a.stateNode, ze && typeof ze.onCommitFiberRoot == "function")
        try {
          ze.onCommitFiberRoot(
            pe,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        a = S.T, u = j.p, j.p = 2, S.T = null;
        try {
          for (var d = t.onRecoverableError, v = 0; v < o.length; v++) {
            var b = o[v];
            d(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          S.T = a, j.p = u;
        }
      }
      (gi & 3) !== 0 && El(), Hn(t), u = t.pendingLanes, (i & 4194090) !== 0 && (u & 42) !== 0 ? t === Tf ? js++ : (js = 0, Tf = t) : js = 0, Ns(0);
    }
  }
  function kv(t, a) {
    (t.pooledCacheLanes &= a) === 0 && (a = t.pooledCache, a != null && (t.pooledCache = null, gs(a)));
  }
  function El(t) {
    return Rv(), Vv(), Ov(), $v();
  }
  function $v() {
    if ($t !== 5) return !1;
    var t = La, a = Sf;
    Sf = 0;
    var i = Hu(gi), o = S.T, u = j.p;
    try {
      j.p = 32 > i ? 32 : i, S.T = null, i = wf, wf = null;
      var d = La, v = gi;
      if ($t = 0, pi = La = null, gi = 0, (Ge & 6) !== 0) throw Error(s(331));
      var b = Ge;
      if (Ge |= 4, yv(d.current), pv(
        d,
        d.current,
        v,
        i
      ), Ge = b, Ns(0), ze && typeof ze.onPostCommitFiberRoot == "function")
        try {
          ze.onPostCommitFiberRoot(pe, d);
        } catch {
        }
      return !0;
    } finally {
      j.p = u, S.T = o, kv(t, a);
    }
  }
  function jv(t, a, i) {
    a = vn(i, a), a = ef(t.stateNode, a, 2), t = Ma(t, a, 2), t !== null && (es(t, 2), Hn(t));
  }
  function Ie(t, a, i) {
    if (t.tag === 3)
      jv(t, t, i);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          jv(
            a,
            t,
            i
          );
          break;
        } else if (a.tag === 1) {
          var o = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Na === null || !Na.has(o))) {
            t = vn(i, t), i = Bg(2), o = Ma(a, i, 2), o !== null && (Pg(
              i,
              o,
              a,
              t
            ), es(o, 2), Hn(o));
            break;
          }
        }
        a = a.return;
      }
  }
  function Cf(t, a, i) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new XT();
      var u = /* @__PURE__ */ new Set();
      o.set(a, u);
    } else
      u = o.get(a), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(a, u));
    u.has(i) || (vf = !0, u.add(i), t = WT.bind(null, t, a, i), a.then(t, t));
  }
  function WT(t, a, i) {
    var o = t.pingCache;
    o !== null && o.delete(a), t.pingedLanes |= t.suspendedLanes & i, t.warmLanes &= ~i, Je === t && (Pe & i) === i && (ot === 4 || ot === 3 && (Pe & 62914560) === Pe && 300 > Kt() - xf ? (Ge & 2) === 0 && vi(t, 0) : yf |= i, mi === Pe && (mi = 0)), Hn(t);
  }
  function Nv(t, a) {
    a === 0 && (a = Om()), t = Wr(t, a), t !== null && (es(t, a), Hn(t));
  }
  function eE(t) {
    var a = t.memoizedState, i = 0;
    a !== null && (i = a.retryLane), Nv(t, i);
  }
  function tE(t, a) {
    var i = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode, u = t.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(a), Nv(t, i);
  }
  function nE(t, a) {
    return Ht(t, a);
  }
  var Al = null, bi = null, Mf = !1, _l = !1, Df = !1, xr = 0;
  function Hn(t) {
    t !== bi && t.next === null && (bi === null ? Al = bi = t : bi = bi.next = t), _l = !0, Mf || (Mf = !0, rE());
  }
  function Ns(t, a) {
    if (!Df && _l) {
      Df = !0;
      do
        for (var i = !1, o = Al; o !== null; ) {
          if (t !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var v = o.suspendedLanes, b = o.pingedLanes;
              d = (1 << 31 - Fe(42 | t) + 1) - 1, d &= u & ~(v & ~b), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (i = !0, Pv(o, d));
          } else
            d = Pe, d = nr(
              o,
              o === Je ? d : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (d & 3) === 0 || ar(o, d) || (i = !0, Pv(o, d));
          o = o.next;
        }
      while (i);
      Df = !1;
    }
  }
  function aE() {
    Lv();
  }
  function Lv() {
    _l = Mf = !1;
    var t = 0;
    xr !== 0 && (dE() && (t = xr), xr = 0);
    for (var a = Kt(), i = null, o = Al; o !== null; ) {
      var u = o.next, d = Uv(o, a);
      d === 0 ? (o.next = null, i === null ? Al = u : i.next = u, u === null && (bi = i)) : (i = o, (t !== 0 || (d & 3) !== 0) && (_l = !0)), o = u;
    }
    Ns(t);
  }
  function Uv(t, a) {
    for (var i = t.suspendedLanes, o = t.pingedLanes, u = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d; ) {
      var v = 31 - Fe(d), b = 1 << v, T = u[v];
      T === -1 ? ((b & i) === 0 || (b & o) !== 0) && (u[v] = Vo(b, a)) : T <= a && (t.expiredLanes |= b), d &= ~b;
    }
    if (a = Je, i = Pe, i = nr(
      t,
      t === a ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), o = t.callbackNode, i === 0 || t === a && (qe === 2 || qe === 9) || t.cancelPendingCommit !== null)
      return o !== null && o !== null && Nn(o), t.callbackNode = null, t.callbackPriority = 0;
    if ((i & 3) === 0 || ar(t, i)) {
      if (a = i & -i, a === t.callbackPriority) return a;
      switch (o !== null && Nn(o), Hu(i)) {
        case 2:
        case 8:
          i = A;
          break;
        case 32:
          i = N;
          break;
        case 268435456:
          i = de;
          break;
        default:
          i = N;
      }
      return o = Bv.bind(null, t), i = Ht(i, o), t.callbackPriority = a, t.callbackNode = i, a;
    }
    return o !== null && o !== null && Nn(o), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Bv(t, a) {
    if ($t !== 0 && $t !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var i = t.callbackNode;
    if (El() && t.callbackNode !== i)
      return null;
    var o = Pe;
    return o = nr(
      t,
      t === Je ? o : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), o === 0 ? null : (wv(t, o, a), Uv(t, Kt()), t.callbackNode != null && t.callbackNode === i ? Bv.bind(null, t) : null);
  }
  function Pv(t, a) {
    if (El()) return null;
    wv(t, a, !0);
  }
  function rE() {
    mE(function() {
      (Ge & 6) !== 0 ? Ht(
        Sa,
        aE
      ) : Lv();
    });
  }
  function zf() {
    return xr === 0 && (xr = Vm()), xr;
  }
  function Zv(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : No("" + t);
  }
  function Hv(t, a) {
    var i = a.ownerDocument.createElement("input");
    return i.name = a.name, i.value = a.value, t.id && i.setAttribute("form", t.id), a.parentNode.insertBefore(i, a), t = new FormData(t), i.parentNode.removeChild(i), t;
  }
  function iE(t, a, i, o, u) {
    if (a === "submit" && i && i.stateNode === u) {
      var d = Zv(
        (u[Qt] || null).action
      ), v = o.submitter;
      v && (a = (a = v[Qt] || null) ? Zv(a.formAction) : v.getAttribute("formAction"), a !== null && (d = a, v = null));
      var b = new Po(
        "action",
        "action",
        null,
        o,
        u
      );
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (xr !== 0) {
                  var T = v ? Hv(u, v) : new FormData(u);
                  Kc(
                    i,
                    {
                      pending: !0,
                      data: T,
                      method: u.method,
                      action: d
                    },
                    null,
                    T
                  );
                }
              } else
                typeof d == "function" && (b.preventDefault(), T = v ? Hv(u, v) : new FormData(u), Kc(
                  i,
                  {
                    pending: !0,
                    data: T,
                    method: u.method,
                    action: d
                  },
                  d,
                  T
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Rf = 0; Rf < mc.length; Rf++) {
    var Vf = mc[Rf], sE = Vf.toLowerCase(), oE = Vf[0].toUpperCase() + Vf.slice(1);
    Rn(
      sE,
      "on" + oE
    );
  }
  Rn(wp, "onAnimationEnd"), Rn(Tp, "onAnimationIteration"), Rn(Ep, "onAnimationStart"), Rn("dblclick", "onDoubleClick"), Rn("focusin", "onFocus"), Rn("focusout", "onBlur"), Rn(ET, "onTransitionRun"), Rn(AT, "onTransitionStart"), Rn(_T, "onTransitionCancel"), Rn(Ap, "onTransitionEnd"), Hr("onMouseEnter", ["mouseout", "mouseover"]), Hr("onMouseLeave", ["mouseout", "mouseover"]), Hr("onPointerEnter", ["pointerout", "pointerover"]), Hr("onPointerLeave", ["pointerout", "pointerover"]), rr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), rr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), rr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), rr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), rr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), rr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), lE = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ls)
  );
  function Gv(t, a) {
    a = (a & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var o = t[i], u = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (a)
          for (var v = o.length - 1; 0 <= v; v--) {
            var b = o[v], T = b.instance, L = b.currentTarget;
            if (b = b.listener, T !== d && u.isPropagationStopped())
              break e;
            d = b, u.currentTarget = L;
            try {
              d(u);
            } catch (I) {
              hl(I);
            }
            u.currentTarget = null, d = T;
          }
        else
          for (v = 0; v < o.length; v++) {
            if (b = o[v], T = b.instance, L = b.currentTarget, b = b.listener, T !== d && u.isPropagationStopped())
              break e;
            d = b, u.currentTarget = L;
            try {
              d(u);
            } catch (I) {
              hl(I);
            }
            u.currentTarget = null, d = T;
          }
      }
    }
  }
  function Le(t, a) {
    var i = a[Gu];
    i === void 0 && (i = a[Gu] = /* @__PURE__ */ new Set());
    var o = t + "__bubble";
    i.has(o) || (qv(a, t, 2, !1), i.add(o));
  }
  function Of(t, a, i) {
    var o = 0;
    a && (o |= 4), qv(
      i,
      t,
      o,
      a
    );
  }
  var Cl = "_reactListening" + Math.random().toString(36).slice(2);
  function kf(t) {
    if (!t[Cl]) {
      t[Cl] = !0, Lm.forEach(function(i) {
        i !== "selectionchange" && (lE.has(i) || Of(i, !1, t), Of(i, !0, t));
      });
      var a = t.nodeType === 9 ? t : t.ownerDocument;
      a === null || a[Cl] || (a[Cl] = !0, Of("selectionchange", !1, a));
    }
  }
  function qv(t, a, i, o) {
    switch (py(a)) {
      case 2:
        var u = $E;
        break;
      case 8:
        u = jE;
        break;
      default:
        u = Xf;
    }
    i = u.bind(
      null,
      a,
      i,
      t
    ), u = void 0, !tc || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (u = !0), o ? u !== void 0 ? t.addEventListener(a, i, {
      capture: !0,
      passive: u
    }) : t.addEventListener(a, i, !0) : u !== void 0 ? t.addEventListener(a, i, {
      passive: u
    }) : t.addEventListener(a, i, !1);
  }
  function $f(t, a, i, o, u) {
    var d = o;
    if ((a & 1) === 0 && (a & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var v = o.tag;
        if (v === 3 || v === 4) {
          var b = o.stateNode.containerInfo;
          if (b === u) break;
          if (v === 4)
            for (v = o.return; v !== null; ) {
              var T = v.tag;
              if ((T === 3 || T === 4) && v.stateNode.containerInfo === u)
                return;
              v = v.return;
            }
          for (; b !== null; ) {
            if (v = Br(b), v === null) return;
            if (T = v.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              o = d = v;
              continue e;
            }
            b = b.parentNode;
          }
        }
        o = o.return;
      }
    Jm(function() {
      var L = d, I = Wu(i), te = [];
      e: {
        var B = _p.get(t);
        if (B !== void 0) {
          var P = Po, _e = t;
          switch (t) {
            case "keypress":
              if (Uo(i) === 0) break e;
            case "keydown":
            case "keyup":
              P = nT;
              break;
            case "focusin":
              _e = "focus", P = ic;
              break;
            case "focusout":
              _e = "blur", P = ic;
              break;
            case "beforeblur":
            case "afterblur":
              P = ic;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = tp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = Gw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = iT;
              break;
            case wp:
            case Tp:
            case Ep:
              P = Fw;
              break;
            case Ap:
              P = oT;
              break;
            case "scroll":
            case "scrollend":
              P = Zw;
              break;
            case "wheel":
              P = uT;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = Kw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = ap;
              break;
            case "toggle":
            case "beforetoggle":
              P = fT;
          }
          var Ee = (a & 4) !== 0, Qe = !Ee && (t === "scroll" || t === "scrollend"), V = Ee ? B !== null ? B + "Capture" : null : B;
          Ee = [];
          for (var M = L, k; M !== null; ) {
            var ee = M;
            if (k = ee.stateNode, ee = ee.tag, ee !== 5 && ee !== 26 && ee !== 27 || k === null || V === null || (ee = as(M, V), ee != null && Ee.push(
              Us(M, ee, k)
            )), Qe) break;
            M = M.return;
          }
          0 < Ee.length && (B = new P(
            B,
            _e,
            null,
            i,
            I
          ), te.push({ event: B, listeners: Ee }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (B = t === "mouseover" || t === "pointerover", P = t === "mouseout" || t === "pointerout", B && i !== Ju && (_e = i.relatedTarget || i.fromElement) && (Br(_e) || _e[Ur]))
            break e;
          if ((P || B) && (B = I.window === I ? I : (B = I.ownerDocument) ? B.defaultView || B.parentWindow : window, P ? (_e = i.relatedTarget || i.toElement, P = L, _e = _e ? Br(_e) : null, _e !== null && (Qe = c(_e), Ee = _e.tag, _e !== Qe || Ee !== 5 && Ee !== 27 && Ee !== 6) && (_e = null)) : (P = null, _e = L), P !== _e)) {
            if (Ee = tp, ee = "onMouseLeave", V = "onMouseEnter", M = "mouse", (t === "pointerout" || t === "pointerover") && (Ee = ap, ee = "onPointerLeave", V = "onPointerEnter", M = "pointer"), Qe = P == null ? B : ns(P), k = _e == null ? B : ns(_e), B = new Ee(
              ee,
              M + "leave",
              P,
              i,
              I
            ), B.target = Qe, B.relatedTarget = k, ee = null, Br(I) === L && (Ee = new Ee(
              V,
              M + "enter",
              _e,
              i,
              I
            ), Ee.target = k, Ee.relatedTarget = Qe, ee = Ee), Qe = ee, P && _e)
              t: {
                for (Ee = P, V = _e, M = 0, k = Ee; k; k = xi(k))
                  M++;
                for (k = 0, ee = V; ee; ee = xi(ee))
                  k++;
                for (; 0 < M - k; )
                  Ee = xi(Ee), M--;
                for (; 0 < k - M; )
                  V = xi(V), k--;
                for (; M--; ) {
                  if (Ee === V || V !== null && Ee === V.alternate)
                    break t;
                  Ee = xi(Ee), V = xi(V);
                }
                Ee = null;
              }
            else Ee = null;
            P !== null && Yv(
              te,
              B,
              P,
              Ee,
              !1
            ), _e !== null && Qe !== null && Yv(
              te,
              Qe,
              _e,
              Ee,
              !0
            );
          }
        }
        e: {
          if (B = L ? ns(L) : window, P = B.nodeName && B.nodeName.toLowerCase(), P === "select" || P === "input" && B.type === "file")
            var ge = fp;
          else if (up(B))
            if (dp)
              ge = ST;
            else {
              ge = bT;
              var je = yT;
            }
          else
            P = B.nodeName, !P || P.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? L && Iu(L.elementType) && (ge = fp) : ge = xT;
          if (ge && (ge = ge(t, L))) {
            cp(
              te,
              ge,
              i,
              I
            );
            break e;
          }
          je && je(t, B, L), t === "focusout" && L && B.type === "number" && L.memoizedProps.value != null && Qu(B, "number", B.value);
        }
        switch (je = L ? ns(L) : window, t) {
          case "focusin":
            (up(je) || je.contentEditable === "true") && (Qr = je, fc = L, fs = null);
            break;
          case "focusout":
            fs = fc = Qr = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dc = !1, xp(te, i, I);
            break;
          case "selectionchange":
            if (TT) break;
          case "keydown":
          case "keyup":
            xp(te, i, I);
        }
        var we;
        if (oc)
          e: {
            switch (t) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          Kr ? op(t, i) && (Ae = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (rp && i.locale !== "ko" && (Kr || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && Kr && (we = Wm()) : (Ea = I, nc = "value" in Ea ? Ea.value : Ea.textContent, Kr = !0)), je = Ml(L, Ae), 0 < je.length && (Ae = new np(
          Ae,
          t,
          null,
          i,
          I
        ), te.push({ event: Ae, listeners: je }), we ? Ae.data = we : (we = lp(i), we !== null && (Ae.data = we)))), (we = hT ? mT(t, i) : pT(t, i)) && (Ae = Ml(L, "onBeforeInput"), 0 < Ae.length && (je = new np(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          I
        ), te.push({
          event: je,
          listeners: Ae
        }), je.data = we)), iE(
          te,
          t,
          L,
          i,
          I
        );
      }
      Gv(te, a);
    });
  }
  function Us(t, a, i) {
    return {
      instance: t,
      listener: a,
      currentTarget: i
    };
  }
  function Ml(t, a) {
    for (var i = a + "Capture", o = []; t !== null; ) {
      var u = t, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = as(t, i), u != null && o.unshift(
        Us(t, u, d)
      ), u = as(t, a), u != null && o.push(
        Us(t, u, d)
      )), t.tag === 3) return o;
      t = t.return;
    }
    return [];
  }
  function xi(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Yv(t, a, i, o, u) {
    for (var d = a._reactName, v = []; i !== null && i !== o; ) {
      var b = i, T = b.alternate, L = b.stateNode;
      if (b = b.tag, T !== null && T === o) break;
      b !== 5 && b !== 26 && b !== 27 || L === null || (T = L, u ? (L = as(i, d), L != null && v.unshift(
        Us(i, L, T)
      )) : u || (L = as(i, d), L != null && v.push(
        Us(i, L, T)
      ))), i = i.return;
    }
    v.length !== 0 && t.push({ event: a, listeners: v });
  }
  var uE = /\r\n?/g, cE = /\u0000|\uFFFD/g;
  function Fv(t) {
    return (typeof t == "string" ? t : "" + t).replace(uE, `
`).replace(cE, "");
  }
  function Xv(t, a) {
    return a = Fv(a), Fv(t) === a;
  }
  function Dl() {
  }
  function Ke(t, a, i, o, u, d) {
    switch (i) {
      case "children":
        typeof o == "string" ? a === "body" || a === "textarea" && o === "" || Yr(t, o) : (typeof o == "number" || typeof o == "bigint") && a !== "body" && Yr(t, "" + o);
        break;
      case "className":
        ko(t, "class", o);
        break;
      case "tabIndex":
        ko(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ko(t, i, o);
        break;
      case "style":
        Qm(t, o, d);
        break;
      case "data":
        if (a !== "object") {
          ko(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (a !== "a" || i !== "href")) {
          t.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(i);
          break;
        }
        o = No("" + o), t.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (i === "formAction" ? (a !== "input" && Ke(t, a, "name", u.name, u, null), Ke(
            t,
            a,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Ke(
            t,
            a,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Ke(
            t,
            a,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Ke(t, a, "encType", u.encType, u, null), Ke(t, a, "method", u.method, u, null), Ke(t, a, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(i);
          break;
        }
        o = No("" + o), t.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (t.onclick = Dl);
        break;
      case "onScroll":
        o != null && Le("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Le("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (i = o.__html, i != null) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = i;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        i = No("" + o), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          i
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, "" + o) : t.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, "") : t.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? t.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, o) : t.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? t.setAttribute(i, o) : t.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(i) : t.setAttribute(i, o);
        break;
      case "popover":
        Le("beforetoggle", t), Le("toggle", t), Oo(t, "popover", o);
        break;
      case "xlinkActuate":
        Wn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        Wn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        Wn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        Wn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        Wn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        Wn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        Wn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        Wn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        Wn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        Oo(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = Bw.get(i) || i, Oo(t, i, o));
    }
  }
  function jf(t, a, i, o, u, d) {
    switch (i) {
      case "style":
        Qm(t, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (i = o.__html, i != null) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Yr(t, o) : (typeof o == "number" || typeof o == "bigint") && Yr(t, "" + o);
        break;
      case "onScroll":
        o != null && Le("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Le("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Dl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Um.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (u = i.endsWith("Capture"), a = i.slice(2, u ? i.length - 7 : void 0), d = t[Qt] || null, d = d != null ? d[i] : null, typeof d == "function" && t.removeEventListener(a, d, u), typeof o == "function")) {
              typeof d != "function" && d !== null && (i in t ? t[i] = null : t.hasAttribute(i) && t.removeAttribute(i)), t.addEventListener(a, o, u);
              break e;
            }
            i in t ? t[i] = o : o === !0 ? t.setAttribute(i, "") : Oo(t, i, o);
          }
    }
  }
  function jt(t, a, i) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Le("error", t), Le("load", t);
        var o = !1, u = !1, d;
        for (d in i)
          if (i.hasOwnProperty(d)) {
            var v = i[d];
            if (v != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, a));
                default:
                  Ke(t, a, d, v, i, null);
              }
          }
        u && Ke(t, a, "srcSet", i.srcSet, i, null), o && Ke(t, a, "src", i.src, i, null);
        return;
      case "input":
        Le("invalid", t);
        var b = d = v = u = null, T = null, L = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var I = i[o];
            if (I != null)
              switch (o) {
                case "name":
                  u = I;
                  break;
                case "type":
                  v = I;
                  break;
                case "checked":
                  T = I;
                  break;
                case "defaultChecked":
                  L = I;
                  break;
                case "value":
                  d = I;
                  break;
                case "defaultValue":
                  b = I;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (I != null)
                    throw Error(s(137, a));
                  break;
                default:
                  Ke(t, a, o, I, i, null);
              }
          }
        Ym(
          t,
          d,
          b,
          T,
          L,
          v,
          u,
          !1
        ), $o(t);
        return;
      case "select":
        Le("invalid", t), o = v = d = null;
        for (u in i)
          if (i.hasOwnProperty(u) && (b = i[u], b != null))
            switch (u) {
              case "value":
                d = b;
                break;
              case "defaultValue":
                v = b;
                break;
              case "multiple":
                o = b;
              default:
                Ke(t, a, u, b, i, null);
            }
        a = d, i = v, t.multiple = !!o, a != null ? qr(t, !!o, a, !1) : i != null && qr(t, !!o, i, !0);
        return;
      case "textarea":
        Le("invalid", t), d = u = o = null;
        for (v in i)
          if (i.hasOwnProperty(v) && (b = i[v], b != null))
            switch (v) {
              case "value":
                o = b;
                break;
              case "defaultValue":
                u = b;
                break;
              case "children":
                d = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(s(91));
                break;
              default:
                Ke(t, a, v, b, i, null);
            }
        Xm(t, o, u, d), $o(t);
        return;
      case "option":
        for (T in i)
          if (i.hasOwnProperty(T) && (o = i[T], o != null))
            switch (T) {
              case "selected":
                t.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ke(t, a, T, o, i, null);
            }
        return;
      case "dialog":
        Le("beforetoggle", t), Le("toggle", t), Le("cancel", t), Le("close", t);
        break;
      case "iframe":
      case "object":
        Le("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ls.length; o++)
          Le(Ls[o], t);
        break;
      case "image":
        Le("error", t), Le("load", t);
        break;
      case "details":
        Le("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Le("error", t), Le("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in i)
          if (i.hasOwnProperty(L) && (o = i[L], o != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, a));
              default:
                Ke(t, a, L, o, i, null);
            }
        return;
      default:
        if (Iu(a)) {
          for (I in i)
            i.hasOwnProperty(I) && (o = i[I], o !== void 0 && jf(
              t,
              a,
              I,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (b in i)
      i.hasOwnProperty(b) && (o = i[b], o != null && Ke(t, a, b, o, i, null));
  }
  function fE(t, a, i, o) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, d = null, v = null, b = null, T = null, L = null, I = null;
        for (P in i) {
          var te = i[P];
          if (i.hasOwnProperty(P) && te != null)
            switch (P) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = te;
              default:
                o.hasOwnProperty(P) || Ke(t, a, P, null, o, te);
            }
        }
        for (var B in o) {
          var P = o[B];
          if (te = i[B], o.hasOwnProperty(B) && (P != null || te != null))
            switch (B) {
              case "type":
                d = P;
                break;
              case "name":
                u = P;
                break;
              case "checked":
                L = P;
                break;
              case "defaultChecked":
                I = P;
                break;
              case "value":
                v = P;
                break;
              case "defaultValue":
                b = P;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null)
                  throw Error(s(137, a));
                break;
              default:
                P !== te && Ke(
                  t,
                  a,
                  B,
                  P,
                  o,
                  te
                );
            }
        }
        Ku(
          t,
          v,
          b,
          T,
          L,
          I,
          d,
          u
        );
        return;
      case "select":
        P = v = b = B = null;
        for (d in i)
          if (T = i[d], i.hasOwnProperty(d) && T != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                P = T;
              default:
                o.hasOwnProperty(d) || Ke(
                  t,
                  a,
                  d,
                  null,
                  o,
                  T
                );
            }
        for (u in o)
          if (d = o[u], T = i[u], o.hasOwnProperty(u) && (d != null || T != null))
            switch (u) {
              case "value":
                B = d;
                break;
              case "defaultValue":
                b = d;
                break;
              case "multiple":
                v = d;
              default:
                d !== T && Ke(
                  t,
                  a,
                  u,
                  d,
                  o,
                  T
                );
            }
        a = b, i = v, o = P, B != null ? qr(t, !!i, B, !1) : !!o != !!i && (a != null ? qr(t, !!i, a, !0) : qr(t, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        P = B = null;
        for (b in i)
          if (u = i[b], i.hasOwnProperty(b) && u != null && !o.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ke(t, a, b, null, o, u);
            }
        for (v in o)
          if (u = o[v], d = i[v], o.hasOwnProperty(v) && (u != null || d != null))
            switch (v) {
              case "value":
                B = u;
                break;
              case "defaultValue":
                P = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== d && Ke(t, a, v, u, o, d);
            }
        Fm(t, B, P);
        return;
      case "option":
        for (var _e in i)
          if (B = i[_e], i.hasOwnProperty(_e) && B != null && !o.hasOwnProperty(_e))
            switch (_e) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ke(
                  t,
                  a,
                  _e,
                  null,
                  o,
                  B
                );
            }
        for (T in o)
          if (B = o[T], P = i[T], o.hasOwnProperty(T) && B !== P && (B != null || P != null))
            switch (T) {
              case "selected":
                t.selected = B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                Ke(
                  t,
                  a,
                  T,
                  B,
                  o,
                  P
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ee in i)
          B = i[Ee], i.hasOwnProperty(Ee) && B != null && !o.hasOwnProperty(Ee) && Ke(t, a, Ee, null, o, B);
        for (L in o)
          if (B = o[L], P = i[L], o.hasOwnProperty(L) && B !== P && (B != null || P != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(s(137, a));
                break;
              default:
                Ke(
                  t,
                  a,
                  L,
                  B,
                  o,
                  P
                );
            }
        return;
      default:
        if (Iu(a)) {
          for (var Qe in i)
            B = i[Qe], i.hasOwnProperty(Qe) && B !== void 0 && !o.hasOwnProperty(Qe) && jf(
              t,
              a,
              Qe,
              void 0,
              o,
              B
            );
          for (I in o)
            B = o[I], P = i[I], !o.hasOwnProperty(I) || B === P || B === void 0 && P === void 0 || jf(
              t,
              a,
              I,
              B,
              o,
              P
            );
          return;
        }
    }
    for (var V in i)
      B = i[V], i.hasOwnProperty(V) && B != null && !o.hasOwnProperty(V) && Ke(t, a, V, null, o, B);
    for (te in o)
      B = o[te], P = i[te], !o.hasOwnProperty(te) || B === P || B == null && P == null || Ke(t, a, te, B, o, P);
  }
  var Nf = null, Lf = null;
  function zl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Kv(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Qv(t, a) {
    if (t === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && a === "foreignObject" ? 0 : t;
  }
  function Uf(t, a) {
    return t === "textarea" || t === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var Bf = null;
  function dE() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Bf ? !1 : (Bf = t, !0) : (Bf = null, !1);
  }
  var Iv = typeof setTimeout == "function" ? setTimeout : void 0, hE = typeof clearTimeout == "function" ? clearTimeout : void 0, Jv = typeof Promise == "function" ? Promise : void 0, mE = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jv < "u" ? function(t) {
    return Jv.resolve(null).then(t).catch(pE);
  } : Iv;
  function pE(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ba(t) {
    return t === "head";
  }
  function Wv(t, a) {
    var i = a, o = 0, u = 0;
    do {
      var d = i.nextSibling;
      if (t.removeChild(i), d && d.nodeType === 8)
        if (i = d.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var v = t.ownerDocument;
            if (i & 1 && Bs(v.documentElement), i & 2 && Bs(v.body), i & 4)
              for (i = v.head, Bs(i), v = i.firstChild; v; ) {
                var b = v.nextSibling, T = v.nodeName;
                v[ts] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && v.rel.toLowerCase() === "stylesheet" || i.removeChild(v), v = b;
              }
          }
          if (u === 0) {
            t.removeChild(d), Xs(a);
            return;
          }
          u--;
        } else
          i === "$" || i === "$?" || i === "$!" ? u++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = d;
    } while (i);
    Xs(a);
  }
  function Pf(t) {
    var a = t.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var i = a;
      switch (a = a.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pf(i), qu(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(i);
    }
  }
  function gE(t, a, i, o) {
    for (; t.nodeType === 1; ) {
      var u = i;
      if (t.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (o) {
        if (!t[ts])
          switch (a) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (d = t.getAttribute("rel"), d === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (d !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (d = t.getAttribute("src"), (d !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && d && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (a === "input" && t.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === d)
          return t;
      } else return t;
      if (t = On(t.nextSibling), t === null) break;
    }
    return null;
  }
  function vE(t, a, i) {
    if (a === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i || (t = On(t.nextSibling), t === null)) return null;
    return t;
  }
  function Zf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function yE(t, a) {
    var i = t.ownerDocument;
    if (t.data !== "$?" || i.readyState === "complete")
      a();
    else {
      var o = function() {
        a(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), t._reactRetry = o;
    }
  }
  function On(t) {
    for (; t != null; t = t.nextSibling) {
      var a = t.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = t.data, a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
          break;
        if (a === "/$") return null;
      }
    }
    return t;
  }
  var Hf = null;
  function ey(t) {
    t = t.previousSibling;
    for (var a = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (a === 0) return t;
          a--;
        } else i === "/$" && a++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ty(t, a, i) {
    switch (a = zl(i), t) {
      case "html":
        if (t = a.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = a.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = a.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Bs(t) {
    for (var a = t.attributes; a.length; )
      t.removeAttributeNode(a[0]);
    qu(t);
  }
  var Tn = /* @__PURE__ */ new Map(), ny = /* @__PURE__ */ new Set();
  function Rl(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ha = j.d;
  j.d = {
    f: bE,
    r: xE,
    D: SE,
    C: wE,
    L: TE,
    m: EE,
    X: _E,
    S: AE,
    M: CE
  };
  function bE() {
    var t = ha.f(), a = wl();
    return t || a;
  }
  function xE(t) {
    var a = Pr(t);
    a !== null && a.tag === 5 && a.type === "form" ? wg(a) : ha.r(t);
  }
  var Si = typeof document > "u" ? null : document;
  function ay(t, a, i) {
    var o = Si;
    if (o && typeof a == "string" && a) {
      var u = gn(a);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof i == "string" && (u += '[crossorigin="' + i + '"]'), ny.has(u) || (ny.add(u), t = { rel: t, crossOrigin: i, href: a }, o.querySelector(u) === null && (a = o.createElement("link"), jt(a, "link", t), Mt(a), o.head.appendChild(a)));
    }
  }
  function SE(t) {
    ha.D(t), ay("dns-prefetch", t, null);
  }
  function wE(t, a) {
    ha.C(t, a), ay("preconnect", t, a);
  }
  function TE(t, a, i) {
    ha.L(t, a, i);
    var o = Si;
    if (o && t && a) {
      var u = 'link[rel="preload"][as="' + gn(a) + '"]';
      a === "image" && i && i.imageSrcSet ? (u += '[imagesrcset="' + gn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (u += '[imagesizes="' + gn(
        i.imageSizes
      ) + '"]')) : u += '[href="' + gn(t) + '"]';
      var d = u;
      switch (a) {
        case "style":
          d = wi(t);
          break;
        case "script":
          d = Ti(t);
      }
      Tn.has(d) || (t = g(
        {
          rel: "preload",
          href: a === "image" && i && i.imageSrcSet ? void 0 : t,
          as: a
        },
        i
      ), Tn.set(d, t), o.querySelector(u) !== null || a === "style" && o.querySelector(Ps(d)) || a === "script" && o.querySelector(Zs(d)) || (a = o.createElement("link"), jt(a, "link", t), Mt(a), o.head.appendChild(a)));
    }
  }
  function EE(t, a) {
    ha.m(t, a);
    var i = Si;
    if (i && t) {
      var o = a && typeof a.as == "string" ? a.as : "script", u = 'link[rel="modulepreload"][as="' + gn(o) + '"][href="' + gn(t) + '"]', d = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Ti(t);
      }
      if (!Tn.has(d) && (t = g({ rel: "modulepreload", href: t }, a), Tn.set(d, t), i.querySelector(u) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Zs(d)))
              return;
        }
        o = i.createElement("link"), jt(o, "link", t), Mt(o), i.head.appendChild(o);
      }
    }
  }
  function AE(t, a, i) {
    ha.S(t, a, i);
    var o = Si;
    if (o && t) {
      var u = Zr(o).hoistableStyles, d = wi(t);
      a = a || "default";
      var v = u.get(d);
      if (!v) {
        var b = { loading: 0, preload: null };
        if (v = o.querySelector(
          Ps(d)
        ))
          b.loading = 5;
        else {
          t = g(
            { rel: "stylesheet", href: t, "data-precedence": a },
            i
          ), (i = Tn.get(d)) && Gf(t, i);
          var T = v = o.createElement("link");
          Mt(T), jt(T, "link", t), T._p = new Promise(function(L, I) {
            T.onload = L, T.onerror = I;
          }), T.addEventListener("load", function() {
            b.loading |= 1;
          }), T.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, Vl(v, a, o);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: b
        }, u.set(d, v);
      }
    }
  }
  function _E(t, a) {
    ha.X(t, a);
    var i = Si;
    if (i && t) {
      var o = Zr(i).hoistableScripts, u = Ti(t), d = o.get(u);
      d || (d = i.querySelector(Zs(u)), d || (t = g({ src: t, async: !0 }, a), (a = Tn.get(u)) && qf(t, a), d = i.createElement("script"), Mt(d), jt(d, "link", t), i.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, o.set(u, d));
    }
  }
  function CE(t, a) {
    ha.M(t, a);
    var i = Si;
    if (i && t) {
      var o = Zr(i).hoistableScripts, u = Ti(t), d = o.get(u);
      d || (d = i.querySelector(Zs(u)), d || (t = g({ src: t, async: !0, type: "module" }, a), (a = Tn.get(u)) && qf(t, a), d = i.createElement("script"), Mt(d), jt(d, "link", t), i.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, o.set(u, d));
    }
  }
  function ry(t, a, i, o) {
    var u = (u = Se.current) ? Rl(u) : null;
    if (!u) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (a = wi(i.href), i = Zr(
          u
        ).hoistableStyles, o = i.get(a), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(a, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          t = wi(i.href);
          var d = Zr(
            u
          ).hoistableStyles, v = d.get(t);
          if (v || (u = u.ownerDocument || u, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(t, v), (d = u.querySelector(
            Ps(t)
          )) && !d._p && (v.instance = d, v.state.loading = 5), Tn.has(t) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Tn.set(t, i), d || ME(
            u,
            t,
            i,
            v.state
          ))), a && o === null)
            throw Error(s(528, ""));
          return v;
        }
        if (a && o !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return a = i.async, i = i.src, typeof i == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = Ti(i), i = Zr(
          u
        ).hoistableScripts, o = i.get(a), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(a, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function wi(t) {
    return 'href="' + gn(t) + '"';
  }
  function Ps(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function iy(t) {
    return g({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ME(t, a, i, o) {
    t.querySelector('link[rel="preload"][as="style"][' + a + "]") ? o.loading = 1 : (a = t.createElement("link"), o.preload = a, a.addEventListener("load", function() {
      return o.loading |= 1;
    }), a.addEventListener("error", function() {
      return o.loading |= 2;
    }), jt(a, "link", i), Mt(a), t.head.appendChild(a));
  }
  function Ti(t) {
    return '[src="' + gn(t) + '"]';
  }
  function Zs(t) {
    return "script[async]" + t;
  }
  function sy(t, a, i) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var o = t.querySelector(
            'style[data-href~="' + gn(i.href) + '"]'
          );
          if (o)
            return a.instance = o, Mt(o), o;
          var u = g({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (t.ownerDocument || t).createElement(
            "style"
          ), Mt(o), jt(o, "style", u), Vl(o, i.precedence, t), a.instance = o;
        case "stylesheet":
          u = wi(i.href);
          var d = t.querySelector(
            Ps(u)
          );
          if (d)
            return a.state.loading |= 4, a.instance = d, Mt(d), d;
          o = iy(i), (u = Tn.get(u)) && Gf(o, u), d = (t.ownerDocument || t).createElement("link"), Mt(d);
          var v = d;
          return v._p = new Promise(function(b, T) {
            v.onload = b, v.onerror = T;
          }), jt(d, "link", o), a.state.loading |= 4, Vl(d, i.precedence, t), a.instance = d;
        case "script":
          return d = Ti(i.src), (u = t.querySelector(
            Zs(d)
          )) ? (a.instance = u, Mt(u), u) : (o = i, (u = Tn.get(d)) && (o = g({}, i), qf(o, u)), t = t.ownerDocument || t, u = t.createElement("script"), Mt(u), jt(u, "link", o), t.head.appendChild(u), a.instance = u);
        case "void":
          return null;
        default:
          throw Error(s(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (o = a.instance, a.state.loading |= 4, Vl(o, i.precedence, t));
    return a.instance;
  }
  function Vl(t, a, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = o.length ? o[o.length - 1] : null, d = u, v = 0; v < o.length; v++) {
      var b = o[v];
      if (b.dataset.precedence === a) d = b;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(t, d.nextSibling) : (a = i.nodeType === 9 ? i.head : i, a.insertBefore(t, a.firstChild));
  }
  function Gf(t, a) {
    t.crossOrigin == null && (t.crossOrigin = a.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = a.referrerPolicy), t.title == null && (t.title = a.title);
  }
  function qf(t, a) {
    t.crossOrigin == null && (t.crossOrigin = a.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = a.referrerPolicy), t.integrity == null && (t.integrity = a.integrity);
  }
  var Ol = null;
  function oy(t, a, i) {
    if (Ol === null) {
      var o = /* @__PURE__ */ new Map(), u = Ol = /* @__PURE__ */ new Map();
      u.set(i, o);
    } else
      u = Ol, o = u.get(i), o || (o = /* @__PURE__ */ new Map(), u.set(i, o));
    if (o.has(t)) return o;
    for (o.set(t, null), i = i.getElementsByTagName(t), u = 0; u < i.length; u++) {
      var d = i[u];
      if (!(d[ts] || d[Lt] || t === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = d.getAttribute(a) || "";
        v = t + v;
        var b = o.get(v);
        b ? b.push(d) : o.set(v, [d]);
      }
    }
    return o;
  }
  function ly(t, a, i) {
    t = t.ownerDocument || t, t.head.insertBefore(
      i,
      a === "title" ? t.querySelector("head > title") : null
    );
  }
  function DE(t, a, i) {
    if (i === 1 || a.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return t = a.disabled, typeof a.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function uy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Hs = null;
  function zE() {
  }
  function RE(t, a, i) {
    if (Hs === null) throw Error(s(475));
    var o = Hs;
    if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = wi(i.href), d = t.querySelector(
          Ps(u)
        );
        if (d) {
          t = d._p, t !== null && typeof t == "object" && typeof t.then == "function" && (o.count++, o = kl.bind(o), t.then(o, o)), a.state.loading |= 4, a.instance = d, Mt(d);
          return;
        }
        d = t.ownerDocument || t, i = iy(i), (u = Tn.get(u)) && Gf(i, u), d = d.createElement("link"), Mt(d);
        var v = d;
        v._p = new Promise(function(b, T) {
          v.onload = b, v.onerror = T;
        }), jt(d, "link", i), a.instance = d;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (o.count++, a = kl.bind(o), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  function VE() {
    if (Hs === null) throw Error(s(475));
    var t = Hs;
    return t.stylesheets && t.count === 0 && Yf(t, t.stylesheets), 0 < t.count ? function(a) {
      var i = setTimeout(function() {
        if (t.stylesheets && Yf(t, t.stylesheets), t.unsuspend) {
          var o = t.unsuspend;
          t.unsuspend = null, o();
        }
      }, 6e4);
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function kl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Yf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var $l = null;
  function Yf(t, a) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, $l = /* @__PURE__ */ new Map(), a.forEach(OE, t), $l = null, kl.call(t));
  }
  function OE(t, a) {
    if (!(a.state.loading & 4)) {
      var i = $l.get(t);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), $l.set(t, i);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var v = u[d];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (i.set(v.dataset.precedence, v), o = v);
        }
        o && i.set(null, o);
      }
      u = a.instance, v = u.getAttribute("data-precedence"), d = i.get(v) || o, d === o && i.set(null, u), i.set(v, u), this.count++, o = kl.bind(this), u.addEventListener("load", o), u.addEventListener("error", o), d ? d.parentNode.insertBefore(u, d.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), a.state.loading |= 4;
    }
  }
  var Gs = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: z,
    _currentValue2: z,
    _threadCount: 0
  };
  function kE(t, a, i, o, u, d, v, b) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.hiddenUpdates = Pu(null), this.identifierPrefix = o, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function cy(t, a, i, o, u, d, v, b, T, L, I, te) {
    return t = new kE(
      t,
      a,
      i,
      v,
      b,
      T,
      L,
      te
    ), a = 1, d === !0 && (a |= 24), d = sn(3, null, null, a), t.current = d, d.stateNode = t, a = _c(), a.refCount++, t.pooledCache = a, a.refCount++, d.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: a
    }, zc(d), t;
  }
  function fy(t) {
    return t ? (t = ei, t) : ei;
  }
  function dy(t, a, i, o, u, d) {
    u = fy(u), o.context === null ? o.context = u : o.pendingContext = u, o = Ca(a), o.payload = { element: i }, d = d === void 0 ? null : d, d !== null && (o.callback = d), i = Ma(t, o, a), i !== null && (fn(i, t, a), xs(i, t, a));
  }
  function hy(t, a) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < a ? i : a;
    }
  }
  function Ff(t, a) {
    hy(t, a), (t = t.alternate) && hy(t, a);
  }
  function my(t) {
    if (t.tag === 13) {
      var a = Wr(t, 67108864);
      a !== null && fn(a, t, 67108864), Ff(t, 67108864);
    }
  }
  var jl = !0;
  function $E(t, a, i, o) {
    var u = S.T;
    S.T = null;
    var d = j.p;
    try {
      j.p = 2, Xf(t, a, i, o);
    } finally {
      j.p = d, S.T = u;
    }
  }
  function jE(t, a, i, o) {
    var u = S.T;
    S.T = null;
    var d = j.p;
    try {
      j.p = 8, Xf(t, a, i, o);
    } finally {
      j.p = d, S.T = u;
    }
  }
  function Xf(t, a, i, o) {
    if (jl) {
      var u = Kf(o);
      if (u === null)
        $f(
          t,
          a,
          o,
          Nl,
          i
        ), gy(t, o);
      else if (LE(
        u,
        t,
        a,
        i,
        o
      ))
        o.stopPropagation();
      else if (gy(t, o), a & 4 && -1 < NE.indexOf(t)) {
        for (; u !== null; ) {
          var d = Pr(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var v = Jn(d.pendingLanes);
                  if (v !== 0) {
                    var b = d;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; v; ) {
                      var T = 1 << 31 - Fe(v);
                      b.entanglements[1] |= T, v &= ~T;
                    }
                    Hn(d), (Ge & 6) === 0 && (xl = Kt() + 500, Ns(0));
                  }
                }
                break;
              case 13:
                b = Wr(d, 2), b !== null && fn(b, d, 2), wl(), Ff(d, 2);
            }
          if (d = Kf(o), d === null && $f(
            t,
            a,
            o,
            Nl,
            i
          ), d === u) break;
          u = d;
        }
        u !== null && o.stopPropagation();
      } else
        $f(
          t,
          a,
          o,
          null,
          i
        );
    }
  }
  function Kf(t) {
    return t = Wu(t), Qf(t);
  }
  var Nl = null;
  function Qf(t) {
    if (Nl = null, t = Br(t), t !== null) {
      var a = c(t);
      if (a === null) t = null;
      else {
        var i = a.tag;
        if (i === 13) {
          if (t = f(a), t !== null) return t;
          t = null;
        } else if (i === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          t = null;
        } else a !== t && (t = null);
      }
    }
    return Nl = t, null;
  }
  function py(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (In()) {
          case Sa:
            return 2;
          case A:
            return 8;
          case N:
          case K:
            return 32;
          case de:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var If = !1, Pa = null, Za = null, Ha = null, qs = /* @__PURE__ */ new Map(), Ys = /* @__PURE__ */ new Map(), Ga = [], NE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function gy(t, a) {
    switch (t) {
      case "focusin":
      case "focusout":
        Pa = null;
        break;
      case "dragenter":
      case "dragleave":
        Za = null;
        break;
      case "mouseover":
      case "mouseout":
        Ha = null;
        break;
      case "pointerover":
      case "pointerout":
        qs.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ys.delete(a.pointerId);
    }
  }
  function Fs(t, a, i, o, u, d) {
    return t === null || t.nativeEvent !== d ? (t = {
      blockedOn: a,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: d,
      targetContainers: [u]
    }, a !== null && (a = Pr(a), a !== null && my(a)), t) : (t.eventSystemFlags |= o, a = t.targetContainers, u !== null && a.indexOf(u) === -1 && a.push(u), t);
  }
  function LE(t, a, i, o, u) {
    switch (a) {
      case "focusin":
        return Pa = Fs(
          Pa,
          t,
          a,
          i,
          o,
          u
        ), !0;
      case "dragenter":
        return Za = Fs(
          Za,
          t,
          a,
          i,
          o,
          u
        ), !0;
      case "mouseover":
        return Ha = Fs(
          Ha,
          t,
          a,
          i,
          o,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return qs.set(
          d,
          Fs(
            qs.get(d) || null,
            t,
            a,
            i,
            o,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, Ys.set(
          d,
          Fs(
            Ys.get(d) || null,
            t,
            a,
            i,
            o,
            u
          )
        ), !0;
    }
    return !1;
  }
  function vy(t) {
    var a = Br(t.target);
    if (a !== null) {
      var i = c(a);
      if (i !== null) {
        if (a = i.tag, a === 13) {
          if (a = f(i), a !== null) {
            t.blockedOn = a, Rw(t.priority, function() {
              if (i.tag === 13) {
                var o = cn();
                o = Zu(o);
                var u = Wr(i, o);
                u !== null && fn(u, i, o), Ff(i, o);
              }
            });
            return;
          }
        } else if (a === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ll(t) {
    if (t.blockedOn !== null) return !1;
    for (var a = t.targetContainers; 0 < a.length; ) {
      var i = Kf(t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Ju = o, i.target.dispatchEvent(o), Ju = null;
      } else
        return a = Pr(i), a !== null && my(a), t.blockedOn = i, !1;
      a.shift();
    }
    return !0;
  }
  function yy(t, a, i) {
    Ll(t) && i.delete(a);
  }
  function UE() {
    If = !1, Pa !== null && Ll(Pa) && (Pa = null), Za !== null && Ll(Za) && (Za = null), Ha !== null && Ll(Ha) && (Ha = null), qs.forEach(yy), Ys.forEach(yy);
  }
  function Ul(t, a) {
    t.blockedOn === a && (t.blockedOn = null, If || (If = !0, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      UE
    )));
  }
  var Bl = null;
  function by(t) {
    Bl !== t && (Bl = t, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      function() {
        Bl === t && (Bl = null);
        for (var a = 0; a < t.length; a += 3) {
          var i = t[a], o = t[a + 1], u = t[a + 2];
          if (typeof o != "function") {
            if (Qf(o || i) === null)
              continue;
            break;
          }
          var d = Pr(i);
          d !== null && (t.splice(a, 3), a -= 3, Kc(
            d,
            {
              pending: !0,
              data: u,
              method: i.method,
              action: o
            },
            o,
            u
          ));
        }
      }
    ));
  }
  function Xs(t) {
    function a(T) {
      return Ul(T, t);
    }
    Pa !== null && Ul(Pa, t), Za !== null && Ul(Za, t), Ha !== null && Ul(Ha, t), qs.forEach(a), Ys.forEach(a);
    for (var i = 0; i < Ga.length; i++) {
      var o = Ga[i];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < Ga.length && (i = Ga[0], i.blockedOn === null); )
      vy(i), i.blockedOn === null && Ga.shift();
    if (i = (t.ownerDocument || t).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var u = i[o], d = i[o + 1], v = u[Qt] || null;
        if (typeof d == "function")
          v || by(i);
        else if (v) {
          var b = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, v = d[Qt] || null)
              b = v.formAction;
            else if (Qf(u) !== null) continue;
          } else b = v.action;
          typeof b == "function" ? i[o + 1] = b : (i.splice(o, 3), o -= 3), by(i);
        }
      }
  }
  function Jf(t) {
    this._internalRoot = t;
  }
  Pl.prototype.render = Jf.prototype.render = function(t) {
    var a = this._internalRoot;
    if (a === null) throw Error(s(409));
    var i = a.current, o = cn();
    dy(i, o, t, a, null, null);
  }, Pl.prototype.unmount = Jf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var a = t.containerInfo;
      dy(t.current, 2, null, t, null, null), wl(), a[Ur] = null;
    }
  };
  function Pl(t) {
    this._internalRoot = t;
  }
  Pl.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var a = jm();
      t = { blockedOn: null, target: t, priority: a };
      for (var i = 0; i < Ga.length && a !== 0 && a < Ga[i].priority; i++) ;
      Ga.splice(i, 0, t), i === 0 && vy(t);
    }
  };
  var xy = n.version;
  if (xy !== "19.1.0")
    throw Error(
      s(
        527,
        xy,
        "19.1.0"
      )
    );
  j.findDOMNode = function(t) {
    var a = t._reactInternals;
    if (a === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = m(a), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var BE = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zl.isDisabled && Zl.supportsFiber)
      try {
        pe = Zl.inject(
          BE
        ), ze = Zl;
      } catch {
      }
  }
  return Ks.createRoot = function(t, a) {
    if (!l(t)) throw Error(s(299));
    var i = !1, o = "", u = jg, d = Ng, v = Lg, b = null;
    return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (v = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (b = a.unstable_transitionCallbacks)), a = cy(
      t,
      1,
      !1,
      null,
      null,
      i,
      o,
      u,
      d,
      v,
      b,
      null
    ), t[Ur] = a.current, kf(t), new Jf(a);
  }, Ks.hydrateRoot = function(t, a, i) {
    if (!l(t)) throw Error(s(299));
    var o = !1, u = "", d = jg, v = Ng, b = Lg, T = null, L = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (u = i.identifierPrefix), i.onUncaughtError !== void 0 && (d = i.onUncaughtError), i.onCaughtError !== void 0 && (v = i.onCaughtError), i.onRecoverableError !== void 0 && (b = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (T = i.unstable_transitionCallbacks), i.formState !== void 0 && (L = i.formState)), a = cy(
      t,
      1,
      !0,
      a,
      i ?? null,
      o,
      u,
      d,
      v,
      b,
      T,
      L
    ), a.context = fy(null), i = a.current, o = cn(), o = Zu(o), u = Ca(o), u.callback = null, Ma(i, u, o), i = o, a.current.lanes = i, es(a, i), Hn(a), t[Ur] = a.current, kf(t), new Pl(a);
  }, Ks.version = "19.1.0", Ks;
}
var My;
function KE() {
  if (My) return ed.exports;
  My = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), ed.exports = /* @__PURE__ */ XE(), ed.exports;
}
var QE = /* @__PURE__ */ KE(), rd = { exports: {} }, Qs = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Dy;
function IE() {
  if (Dy) return Qs;
  Dy = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(s, l, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      c = {};
      for (var h in l)
        h !== "key" && (c[h] = l[h]);
    } else c = l;
    return l = c.ref, {
      $$typeof: e,
      type: s,
      key: f,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return Qs.Fragment = n, Qs.jsx = r, Qs.jsxs = r, Qs;
}
var zy;
function JE() {
  return zy || (zy = 1, rd.exports = /* @__PURE__ */ IE()), rd.exports;
}
var F = /* @__PURE__ */ JE();
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const WE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), e2 = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, r, s) => s ? s.toUpperCase() : r.toLowerCase()
), Ry = (e) => {
  const n = e2(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, r1 = (...e) => e.filter((n, r, s) => !!n && n.trim() !== "" && s.indexOf(n) === r).join(" ").trim(), t2 = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var n2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const a2 = C.forwardRef(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: l = "",
    children: c,
    iconNode: f,
    ...h
  }, m) => C.createElement(
    "svg",
    {
      ref: m,
      ...n2,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: s ? Number(r) * 24 / Number(n) : r,
      className: r1("lucide", l),
      ...!c && !t2(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...f.map(([p, g]) => C.createElement(p, g)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const r2 = (e, n) => {
  const r = C.forwardRef(
    ({ className: s, ...l }, c) => C.createElement(a2, {
      ref: c,
      iconNode: n,
      className: r1(
        `lucide-${WE(Ry(e))}`,
        `lucide-${e}`,
        s
      ),
      ...l
    })
  );
  return r.displayName = Ry(e), r;
};
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const i2 = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], s2 = r2("arrow-up-from-line", i2);
function Ei({
  label: e,
  placeholder: n,
  type: r = "text",
  value: s,
  onChange: l,
  style: c,
  initialPreviewUrl: f,
  className: h = "",
  previewUsername: m,
  previewEmail: p
}) {
  const g = C.useId(), [y, x] = C.useState(
    f || null
  );
  C.useEffect(() => {
    x(f || null);
  }, [f]);
  const E = (_) => {
    const D = _.target.files?.[0];
    if (D && D.type.startsWith("image/")) {
      y && y.startsWith("blob:") && URL.revokeObjectURL(y);
      const $ = URL.createObjectURL(D);
      x($);
    }
    l && l(_);
  };
  return C.useEffect(() => () => {
    y && y.startsWith("blob:") && URL.revokeObjectURL(y);
  }, [y]), r === "file" ? /* @__PURE__ */ F.jsx("div", { style: c, className: `w-full ${h}`, children: /* @__PURE__ */ F.jsxs(
    "label",
    {
      htmlFor: g,
      className: "relative rounded-full flex cursor-pointer items-center gap-3 border border-input bg-transparent px-2 py-2 transition-colors hover:border-primary",
      children: [
        /* @__PURE__ */ F.jsx(
          "input",
          {
            id: g,
            type: "file",
            className: "sr-only",
            onChange: E,
            accept: "image/*"
          }
        ),
        y ? /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-3 w-full", children: [
          /* @__PURE__ */ F.jsx(
            "img",
            {
              src: y,
              alt: "Avatar Preview",
              className: "h-10 w-10 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ F.jsxs("div", { className: "flex flex-col text-sm", children: [
            /* @__PURE__ */ F.jsx("span", { className: "font-medium text-foreground w-0 text-left", children: m || "Username" }),
            /* @__PURE__ */ F.jsx("span", { className: "text-muted-foreground text-xs", children: p || "email@example.com" })
          ] })
        ] }) : /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
          /* @__PURE__ */ F.jsx(s2, { size: 16, className: "text-muted-foreground" }),
          /* @__PURE__ */ F.jsxs("div", { className: "flex flex-col text-sm text-muted-foreground", children: [
            /* @__PURE__ */ F.jsx("span", { className: "font-medium text-foreground w-0", children: e }),
            /* @__PURE__ */ F.jsx("span", { className: "text-xs", children: "Click to upload or drag image" })
          ] })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ F.jsxs(
    "div",
    {
      style: c,
      className: "group relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-ring after:transition-transform after:duration-300 after:ease-in-out focus-within:after:scale-x-100",
      children: [
        /* @__PURE__ */ F.jsx(
          "input",
          {
            type: r,
            id: g,
            value: s,
            onChange: l,
            className: "peer block w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-4 text-foreground placeholder:text-transparent focus:outline-none focus:ring-0 sm:text-sm disabled:pointer-events-none disabled:opacity-50 autofill:pb-2 autofill:pt-6 focus:pb-2 focus:pt-6 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6",
            placeholder: n
          }
        ),
        /* @__PURE__ */ F.jsx(
          "label",
          {
            htmlFor: g,
            className: "absolute top-0 start-0 h-full origin-[0_0] truncate border border-transparent px-0 py-4 text-muted-foreground transition-all duration-200 ease-in-out hover:cursor-text peer-disabled:pointer-events-none peer-disabled:opacity-50 sm:text-sm peer-focus:-translate-y-1.5 peer-focus:scale-[.85] peer-focus:text-primary peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:scale-[.85]",
            children: e
          }
        )
      ]
    }
  );
}
function i1(e = {}) {
  const {
    strict: n = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: s
  } = e, l = C.createContext(void 0);
  l.displayName = s;
  function c() {
    var f;
    const h = C.useContext(l);
    if (!h && n) {
      const m = new Error(r);
      throw m.name = "ContextError", (f = Error.captureStackTrace) == null || f.call(Error, m, c), m;
    }
    return h;
  }
  return [l.Provider, c, l];
}
function o2(e) {
  return typeof e == "function";
}
var ma = (e) => e ? "true" : void 0;
function s1(e) {
  var n, r, s = "";
  if (typeof e == "string" || typeof e == "number")
    s += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (r = s1(e[n])) && (s && (s += " "), s += r);
    else
      for (n in e)
        e[n] && (s && (s += " "), s += n);
  return s;
}
function su(...e) {
  for (var n = 0, r, s, l = ""; n < e.length; )
    (r = e[n++]) && (s = s1(r)) && (l && (l += " "), l += s);
  return l;
}
var l2 = (...e) => {
  let n = " ";
  for (const r of e)
    if (typeof r == "string" && r.length > 0) {
      n = r;
      break;
    }
  return n;
};
function Rd(...e) {
  return (...n) => {
    for (let r of e)
      typeof r == "function" && r(...n);
  };
}
var Vy = /* @__PURE__ */ new Map();
function u2(e, n) {
  if (e === n)
    return e;
  let r = Vy.get(e);
  if (r)
    return r.forEach((l) => l.current = n), n;
  let s = Vy.get(n);
  return s ? (s.forEach((l) => l.current = e), e) : n;
}
function Vd(...e) {
  let n = { ...e[0] };
  for (let r = 1; r < e.length; r++) {
    let s = e[r];
    for (let l in s) {
      let c = n[l], f = s[l];
      typeof c == "function" && typeof f == "function" && // This is a lot faster than a regex.
      l[0] === "o" && l[1] === "n" && l.charCodeAt(2) >= /* 'A' */
      65 && l.charCodeAt(2) <= /* 'Z' */
      90 ? n[l] = Rd(c, f) : (l === "className" || l === "UNSAFE_className") && typeof c == "string" && typeof f == "string" ? n[l] = su(c, f) : l === "id" && c && f ? n.id = u2(c, f) : n[l] = f !== void 0 ? f : c;
    }
  }
  return n;
}
function c2(...e) {
  return e.length === 1 && e[0] ? e[0] : (n) => {
    let r = !1;
    const s = e.map((l) => {
      const c = Oy(l, n);
      return r || (r = typeof c == "function"), c;
    });
    if (r)
      return () => {
        s.forEach((l, c) => {
          typeof l == "function" ? l?.() : Oy(e[c], null);
        });
      };
  };
}
function Oy(e, n) {
  if (typeof e == "function")
    return () => e(n);
  e != null && "current" in e && (e.current = n);
}
function f2(e, n) {
  if (e != null) {
    if (o2(e)) {
      e(n);
      return;
    }
    try {
      e.current = n;
    } catch {
      throw new Error(`Cannot assign value '${n}' to ref '${e}'`);
    }
  }
}
function d2(...e) {
  return (n) => {
    e.forEach((r) => f2(r, n));
  };
}
var [RV, h2] = i1({
  name: "ProviderContext",
  strict: !1
});
function m2(e, n) {
  if (n.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function p2(e, n, r) {
  m2(e, n), n.set(e, r);
}
const Mu = typeof document < "u" ? Re.useLayoutEffect : () => {
};
function Dn(e) {
  const n = C.useRef(null);
  return Mu(() => {
    n.current = e;
  }, [
    e
  ]), C.useCallback((...r) => {
    const s = n.current;
    return s?.(...r);
  }, []);
}
let Od = /* @__PURE__ */ new Map();
typeof FinalizationRegistry < "u" && new FinalizationRegistry((e) => {
  Od.delete(e);
});
function g2(e, n) {
  if (e === n) return e;
  let r = Od.get(e);
  if (r)
    return r.forEach((l) => l.current = n), n;
  let s = Od.get(n);
  return s ? (s.forEach((l) => l.current = e), e) : n;
}
function o1(...e) {
  return (...n) => {
    for (let r of e) typeof r == "function" && r(...n);
  };
}
const Ft = (e) => {
  var n;
  return (n = e?.ownerDocument) !== null && n !== void 0 ? n : document;
}, qn = (e) => e && "window" in e && e.window === e ? e : Ft(e).defaultView || window;
function v2(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function y2(e) {
  return v2(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let b2 = !1;
function Mh() {
  return b2;
}
function _n(e, n) {
  if (!Mh()) return n && e ? e.contains(n) : !1;
  if (!e || !n) return !1;
  let r = n;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : y2(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const mo = (e = document) => {
  var n;
  if (!Mh()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((n = r.shadowRoot) === null || n === void 0) && n.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function qt(e) {
  return Mh() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function l1(e) {
  var n, r, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (n = 0; n < l; n++) e[n] && (r = l1(e[n])) && (s && (s += " "), s += r);
  } else for (r in e) e[r] && (s && (s += " "), s += r);
  return s;
}
function Dh() {
  for (var e, n, r = 0, s = "", l = arguments.length; r < l; r++) (e = arguments[r]) && (n = l1(e)) && (s && (s += " "), s += n);
  return s;
}
function Qa(...e) {
  let n = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let s = e[r];
    for (let l in s) {
      let c = n[l], f = s[l];
      typeof c == "function" && typeof f == "function" && // This is a lot faster than a regex.
      l[0] === "o" && l[1] === "n" && l.charCodeAt(2) >= /* 'A' */
      65 && l.charCodeAt(2) <= /* 'Z' */
      90 ? n[l] = o1(c, f) : (l === "className" || l === "UNSAFE_className") && typeof c == "string" && typeof f == "string" ? n[l] = Dh(c, f) : l === "id" && c && f ? n.id = g2(c, f) : n[l] = f !== void 0 ? f : c;
    }
  }
  return n;
}
const x2 = /* @__PURE__ */ new Set([
  "id"
]), S2 = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), w2 = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), T2 = /^(data-.*)$/;
function E2(e, n = {}) {
  let { labelable: r, isLink: s, propNames: l } = n, c = {};
  for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (x2.has(f) || r && S2.has(f) || s && w2.has(f) || l?.has(f) || T2.test(f)) && (c[f] = e[f]);
  return c;
}
function Pi(e) {
  if (A2()) e.focus({
    preventScroll: !0
  });
  else {
    let n = _2(e);
    e.focus(), C2(n);
  }
}
let Hl = null;
function A2() {
  if (Hl == null) {
    Hl = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Hl = !0, !0;
        }
      });
    } catch {
    }
  }
  return Hl;
}
function _2(e) {
  let n = e.parentNode, r = [], s = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== s; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && r.push({
      element: n,
      scrollTop: n.scrollTop,
      scrollLeft: n.scrollLeft
    }), n = n.parentNode;
  return s instanceof HTMLElement && r.push({
    element: s,
    scrollTop: s.scrollTop,
    scrollLeft: s.scrollLeft
  }), r;
}
function C2(e) {
  for (let { element: n, scrollTop: r, scrollLeft: s } of e)
    n.scrollTop = r, n.scrollLeft = s;
}
function Du(e) {
  var n;
  return typeof window > "u" || window.navigator == null ? !1 : ((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function zh(e) {
  var n;
  return typeof window < "u" && window.navigator != null ? e.test(((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.platform) || window.navigator.platform) : !1;
}
function Wa(e) {
  let n = null;
  return () => (n == null && (n = e()), n);
}
const po = Wa(function() {
  return zh(/^Mac/i);
}), M2 = Wa(function() {
  return zh(/^iPhone/i);
}), u1 = Wa(function() {
  return zh(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  po() && navigator.maxTouchPoints > 1;
}), c1 = Wa(function() {
  return M2() || u1();
}), D2 = Wa(function() {
  return Du(/AppleWebKit/i) && !z2();
}), z2 = Wa(function() {
  return Du(/Chrome/i);
}), f1 = Wa(function() {
  return Du(/Android/i);
}), R2 = Wa(function() {
  return Du(/Firefox/i);
});
function go(e, n, r = !0) {
  var s, l;
  let { metaKey: c, ctrlKey: f, altKey: h, shiftKey: m } = n;
  R2() && (!((l = window.event) === null || l === void 0 || (s = l.type) === null || s === void 0) && s.startsWith("key")) && e.target === "_blank" && (po() ? c = !0 : f = !0);
  let p = D2() && po() && !u1() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: c,
    ctrlKey: f,
    altKey: h,
    shiftKey: m
  }) : new MouseEvent("click", {
    metaKey: c,
    ctrlKey: f,
    altKey: h,
    shiftKey: m,
    bubbles: !0,
    cancelable: !0
  });
  go.isOpening = r, Pi(e), e.dispatchEvent(p), go.isOpening = !1;
}
go.isOpening = !1;
let Ka = /* @__PURE__ */ new Map(), kd = /* @__PURE__ */ new Set();
function ky() {
  if (typeof window > "u") return;
  function e(s) {
    return "propertyName" in s;
  }
  let n = (s) => {
    if (!e(s) || !s.target) return;
    let l = Ka.get(s.target);
    l || (l = /* @__PURE__ */ new Set(), Ka.set(s.target, l), s.target.addEventListener("transitioncancel", r, {
      once: !0
    })), l.add(s.propertyName);
  }, r = (s) => {
    if (!e(s) || !s.target) return;
    let l = Ka.get(s.target);
    if (l && (l.delete(s.propertyName), l.size === 0 && (s.target.removeEventListener("transitioncancel", r), Ka.delete(s.target)), Ka.size === 0)) {
      for (let c of kd) c();
      kd.clear();
    }
  };
  document.body.addEventListener("transitionrun", n), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? ky() : document.addEventListener("DOMContentLoaded", ky));
function V2() {
  for (const [e] of Ka)
    "isConnected" in e && !e.isConnected && Ka.delete(e);
}
function d1(e) {
  requestAnimationFrame(() => {
    V2(), Ka.size === 0 ? e() : kd.add(e);
  });
}
function Rh() {
  let e = C.useRef(/* @__PURE__ */ new Map()), n = C.useCallback((l, c, f, h) => {
    let m = h?.once ? (...p) => {
      e.current.delete(f), f(...p);
    } : f;
    e.current.set(f, {
      type: c,
      eventTarget: l,
      fn: m,
      options: h
    }), l.addEventListener(c, m, h);
  }, []), r = C.useCallback((l, c, f, h) => {
    var m;
    let p = ((m = e.current.get(f)) === null || m === void 0 ? void 0 : m.fn) || f;
    l.removeEventListener(c, p, h), e.current.delete(f);
  }, []), s = C.useCallback(() => {
    e.current.forEach((l, c) => {
      r(l.eventTarget, l.type, c, l.options);
    });
  }, [
    r
  ]);
  return C.useEffect(() => s, [
    s
  ]), {
    addGlobalListener: n,
    removeGlobalListener: r,
    removeAllGlobalListeners: s
  };
}
function h1(e, n) {
  Mu(() => {
    if (e && e.ref && n)
      return e.ref.current = n.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function m1(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : f1() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function O2(e) {
  return !f1() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function k2(e, n, r) {
  let s = C.useRef(n), l = Dn(() => {
    r && r(s.current);
  });
  C.useEffect(() => {
    var c;
    let f = e == null || (c = e.current) === null || c === void 0 ? void 0 : c.form;
    return f?.addEventListener("reset", l), () => {
      f?.removeEventListener("reset", l);
    };
  }, [
    e,
    l
  ]);
}
const p1 = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])'
], $2 = p1.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
p1.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function j2(e) {
  return e.matches($2);
}
function N2(e, n, r) {
  let [s, l] = C.useState(e || n), c = C.useRef(e !== void 0), f = e !== void 0;
  C.useEffect(() => {
    c.current = f;
  }, [
    f
  ]);
  let h = f ? e : s, m = C.useCallback((p, ...g) => {
    let y = (x, ...E) => {
      r && (Object.is(h, x) || r(x, ...E)), f || (h = x);
    };
    typeof p == "function" ? l((E, ..._) => {
      let D = p(f ? h : E, ..._);
      return y(D, ...g), f ? E : D;
    }) : (f || l(p), y(p, ...g));
  }, [
    f,
    h,
    r
  ]);
  return [
    h,
    m
  ];
}
function Vh(e, n) {
  e.indexOf(n) === -1 && e.push(n);
}
function Oh(e, n) {
  const r = e.indexOf(n);
  r > -1 && e.splice(r, 1);
}
const ba = (e, n, r) => r > n ? n : r < e ? e : r, xa = {}, g1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function v1(e) {
  return typeof e == "object" && e !== null;
}
const y1 = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function kh(e) {
  let n;
  return () => (n === void 0 && (n = e()), n);
}
const zn = /* @__NO_SIDE_EFFECTS__ */ (e) => e, L2 = (e, n) => (r) => n(e(r)), _o = (...e) => e.reduce(L2), vo = /* @__NO_SIDE_EFFECTS__ */ (e, n, r) => {
  const s = n - e;
  return s === 0 ? 1 : (r - e) / s;
};
class $h {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return Vh(this.subscriptions, n), () => Oh(this.subscriptions, n);
  }
  notify(n, r, s) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1)
        this.subscriptions[0](n, r, s);
      else
        for (let c = 0; c < l; c++) {
          const f = this.subscriptions[c];
          f && f(n, r, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Fn = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Xn = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function b1(e, n) {
  return n ? e * (1e3 / n) : 0;
}
const x1 = (e, n, r) => (((1 - 3 * r + 3 * n) * e + (3 * r - 6 * n)) * e + 3 * n) * e, U2 = 1e-7, B2 = 12;
function P2(e, n, r, s, l) {
  let c, f, h = 0;
  do
    f = n + (r - n) / 2, c = x1(f, s, l) - e, c > 0 ? r = f : n = f;
  while (Math.abs(c) > U2 && ++h < B2);
  return f;
}
function Co(e, n, r, s) {
  if (e === n && r === s)
    return zn;
  const l = (c) => P2(c, 0, 1, e, r);
  return (c) => c === 0 || c === 1 ? c : x1(l(c), n, s);
}
const S1 = (e) => (n) => n <= 0.5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2, w1 = (e) => (n) => 1 - e(1 - n), T1 = /* @__PURE__ */ Co(0.33, 1.53, 0.69, 0.99), jh = /* @__PURE__ */ w1(T1), E1 = /* @__PURE__ */ S1(jh), A1 = (e) => (e *= 2) < 1 ? 0.5 * jh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Nh = (e) => 1 - Math.sin(Math.acos(e)), _1 = w1(Nh), C1 = S1(Nh), Z2 = /* @__PURE__ */ Co(0.42, 0, 1, 1), H2 = /* @__PURE__ */ Co(0, 0, 0.58, 1), M1 = /* @__PURE__ */ Co(0.42, 0, 0.58, 1), G2 = (e) => Array.isArray(e) && typeof e[0] != "number", D1 = (e) => Array.isArray(e) && typeof e[0] == "number", q2 = {
  linear: zn,
  easeIn: Z2,
  easeInOut: M1,
  easeOut: H2,
  circIn: Nh,
  circInOut: C1,
  circOut: _1,
  backIn: jh,
  backInOut: E1,
  backOut: T1,
  anticipate: A1
}, Y2 = (e) => typeof e == "string", $y = (e) => {
  if (D1(e)) {
    const [n, r, s, l] = e;
    return Co(n, r, s, l);
  } else if (Y2(e))
    return q2[e];
  return e;
};
function Lh(e) {
  let n = e;
  return n.nativeEvent = e, n.isDefaultPrevented = () => n.defaultPrevented, n.isPropagationStopped = () => n.cancelBubble, n.persist = () => {
  }, n;
}
function z1(e, n) {
  Object.defineProperty(e, "target", {
    value: n
  }), Object.defineProperty(e, "currentTarget", {
    value: n
  });
}
function R1(e) {
  let n = C.useRef({
    isFocused: !1,
    observer: null
  });
  Mu(() => {
    const s = n.current;
    return () => {
      s.observer && (s.observer.disconnect(), s.observer = null);
    };
  }, []);
  let r = Dn((s) => {
    e?.(s);
  });
  return C.useCallback((s) => {
    if (s.target instanceof HTMLButtonElement || s.target instanceof HTMLInputElement || s.target instanceof HTMLTextAreaElement || s.target instanceof HTMLSelectElement) {
      n.current.isFocused = !0;
      let l = s.target, c = (f) => {
        if (n.current.isFocused = !1, l.disabled) {
          let h = Lh(f);
          r(h);
        }
        n.current.observer && (n.current.observer.disconnect(), n.current.observer = null);
      };
      l.addEventListener("focusout", c, {
        once: !0
      }), n.current.observer = new MutationObserver(() => {
        if (n.current.isFocused && l.disabled) {
          var f;
          (f = n.current.observer) === null || f === void 0 || f.disconnect();
          let h = l === document.activeElement ? null : document.activeElement;
          l.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: h
          })), l.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: h
          }));
        }
      }), n.current.observer.observe(l, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    r
  ]);
}
let hu = !1;
function F2(e) {
  for (; e && !j2(e); ) e = e.parentElement;
  let n = qn(e), r = n.document.activeElement;
  if (!r || r === e) return;
  hu = !0;
  let s = !1, l = (g) => {
    (g.target === r || s) && g.stopImmediatePropagation();
  }, c = (g) => {
    (g.target === r || s) && (g.stopImmediatePropagation(), !e && !s && (s = !0, Pi(r), m()));
  }, f = (g) => {
    (g.target === e || s) && g.stopImmediatePropagation();
  }, h = (g) => {
    (g.target === e || s) && (g.stopImmediatePropagation(), s || (s = !0, Pi(r), m()));
  };
  n.addEventListener("blur", l, !0), n.addEventListener("focusout", c, !0), n.addEventListener("focusin", h, !0), n.addEventListener("focus", f, !0);
  let m = () => {
    cancelAnimationFrame(p), n.removeEventListener("blur", l, !0), n.removeEventListener("focusout", c, !0), n.removeEventListener("focusin", h, !0), n.removeEventListener("focus", f, !0), hu = !1, s = !1;
  }, p = requestAnimationFrame(m);
  return m;
}
let Oi = "default", $d = "", ou = /* @__PURE__ */ new WeakMap();
function X2(e) {
  if (c1()) {
    if (Oi === "default") {
      const n = Ft(e);
      $d = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none";
    }
    Oi = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    ou.set(e, e.style[n]), e.style[n] = "none";
  }
}
function jy(e) {
  if (c1()) {
    if (Oi !== "disabled") return;
    Oi = "restoring", setTimeout(() => {
      d1(() => {
        if (Oi === "restoring") {
          const n = Ft(e);
          n.documentElement.style.webkitUserSelect === "none" && (n.documentElement.style.webkitUserSelect = $d || ""), $d = "", Oi = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ou.has(e)) {
    let n = ou.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = n), e.getAttribute("style") === "" && e.removeAttribute("style"), ou.delete(e);
  }
}
const V1 = Re.createContext({
  register: () => {
  }
});
V1.displayName = "PressResponderContext";
function K2(e, n) {
  return n.get ? n.get.call(e) : n.value;
}
function O1(e, n, r) {
  if (!n.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return n.get(e);
}
function Q2(e, n) {
  var r = O1(e, n, "get");
  return K2(e, r);
}
function I2(e, n, r) {
  if (n.set) n.set.call(e, r);
  else {
    if (!n.writable)
      throw new TypeError("attempted to set read only private field");
    n.value = r;
  }
}
function Ny(e, n, r) {
  var s = O1(e, n, "set");
  return I2(e, s, r), r;
}
function J2(e) {
  let n = C.useContext(V1);
  if (n) {
    let { register: r, ...s } = n;
    e = Qa(s, e), r();
  }
  return h1(n, e.ref), e;
}
var Gl = /* @__PURE__ */ new WeakMap();
class ql {
  continuePropagation() {
    Ny(this, Gl, !1);
  }
  get shouldStopPropagation() {
    return Q2(this, Gl);
  }
  constructor(n, r, s, l) {
    p2(this, Gl, {
      writable: !0,
      value: void 0
    }), Ny(this, Gl, !0);
    var c;
    let f = (c = l?.target) !== null && c !== void 0 ? c : s.currentTarget;
    const h = f?.getBoundingClientRect();
    let m, p = 0, g, y = null;
    s.clientX != null && s.clientY != null && (g = s.clientX, y = s.clientY), h && (g != null && y != null ? (m = g - h.left, p = y - h.top) : (m = h.width / 2, p = h.height / 2)), this.type = n, this.pointerType = r, this.target = s.currentTarget, this.shiftKey = s.shiftKey, this.metaKey = s.metaKey, this.ctrlKey = s.ctrlKey, this.altKey = s.altKey, this.x = m, this.y = p;
  }
}
const Ly = Symbol("linkClicked"), Uy = "react-aria-pressable-style", By = "data-react-aria-pressable";
function jd(e) {
  let { onPress: n, onPressChange: r, onPressStart: s, onPressEnd: l, onPressUp: c, onClick: f, isDisabled: h, isPressed: m, preventFocusOnPress: p, shouldCancelOnPointerExit: g, allowTextSelectionOnPress: y, ref: x, ...E } = J2(e), [_, D] = C.useState(!1), $ = C.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: X, removeAllGlobalListeners: R } = Rh(), Z = Dn((G, q) => {
    let ae = $.current;
    if (h || ae.didFirePressStart) return !1;
    let U = !0;
    if (ae.isTriggeringEvent = !0, s) {
      let ne = new ql("pressstart", q, G);
      s(ne), U = ne.shouldStopPropagation;
    }
    return r && r(!0), ae.isTriggeringEvent = !1, ae.didFirePressStart = !0, D(!0), U;
  }), W = Dn((G, q, ae = !0) => {
    let U = $.current;
    if (!U.didFirePressStart) return !1;
    U.didFirePressStart = !1, U.isTriggeringEvent = !0;
    let ne = !0;
    if (l) {
      let S = new ql("pressend", q, G);
      l(S), ne = S.shouldStopPropagation;
    }
    if (r && r(!1), D(!1), n && ae && !h) {
      let S = new ql("press", q, G);
      n(S), ne && (ne = S.shouldStopPropagation);
    }
    return U.isTriggeringEvent = !1, ne;
  }), Y = Dn((G, q) => {
    let ae = $.current;
    if (h) return !1;
    if (c) {
      ae.isTriggeringEvent = !0;
      let U = new ql("pressup", q, G);
      return c(U), ae.isTriggeringEvent = !1, U.shouldStopPropagation;
    }
    return !0;
  }), O = Dn((G) => {
    let q = $.current;
    if (q.isPressed && q.target) {
      q.didFirePressStart && q.pointerType != null && W(Sr(q.target, G), q.pointerType, !1), q.isPressed = !1, q.isOverTarget = !1, q.activePointerId = null, q.pointerType = null, R(), y || jy(q.target);
      for (let ae of q.disposables) ae();
      q.disposables = [];
    }
  }), J = Dn((G) => {
    g && O(G);
  }), H = Dn((G) => {
    f?.(G);
  }), ce = Dn((G, q) => {
    if (f) {
      let ae = new MouseEvent("click", G);
      z1(ae, q), f(Lh(ae));
    }
  }), me = C.useMemo(() => {
    let G = $.current, q = {
      onKeyDown(U) {
        if (id(U.nativeEvent, U.currentTarget) && _n(U.currentTarget, qt(U.nativeEvent))) {
          var ne;
          Py(qt(U.nativeEvent), U.key) && U.preventDefault();
          let S = !0;
          if (!G.isPressed && !U.repeat) {
            G.target = U.currentTarget, G.isPressed = !0, G.pointerType = "keyboard", S = Z(U, "keyboard");
            let j = U.currentTarget, z = (le) => {
              id(le, j) && !le.repeat && _n(j, qt(le)) && G.target && Y(Sr(G.target, le), "keyboard");
            };
            X(Ft(U.currentTarget), "keyup", o1(z, ae), !0);
          }
          S && U.stopPropagation(), U.metaKey && po() && ((ne = G.metaKeyEvents) === null || ne === void 0 || ne.set(U.key, U.nativeEvent));
        } else U.key === "Meta" && (G.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(U) {
        if (!(U && !_n(U.currentTarget, qt(U.nativeEvent))) && U && U.button === 0 && !G.isTriggeringEvent && !go.isOpening) {
          let ne = !0;
          if (h && U.preventDefault(), !G.ignoreEmulatedMouseEvents && !G.isPressed && (G.pointerType === "virtual" || m1(U.nativeEvent))) {
            let S = Z(U, "virtual"), j = Y(U, "virtual"), z = W(U, "virtual");
            H(U), ne = S && j && z;
          } else if (G.isPressed && G.pointerType !== "keyboard") {
            let S = G.pointerType || U.nativeEvent.pointerType || "virtual", j = Y(Sr(U.currentTarget, U), S), z = W(Sr(U.currentTarget, U), S, !0);
            ne = j && z, G.isOverTarget = !1, H(U), O(U);
          }
          G.ignoreEmulatedMouseEvents = !1, ne && U.stopPropagation();
        }
      }
    }, ae = (U) => {
      var ne;
      if (G.isPressed && G.target && id(U, G.target)) {
        var S;
        Py(qt(U), U.key) && U.preventDefault();
        let z = qt(U), le = _n(G.target, qt(U));
        W(Sr(G.target, U), "keyboard", le), le && ce(U, G.target), R(), U.key !== "Enter" && Uh(G.target) && _n(G.target, z) && !U[Ly] && (U[Ly] = !0, go(G.target, U, !1)), G.isPressed = !1, (S = G.metaKeyEvents) === null || S === void 0 || S.delete(U.key);
      } else if (U.key === "Meta" && (!((ne = G.metaKeyEvents) === null || ne === void 0) && ne.size)) {
        var j;
        let z = G.metaKeyEvents;
        G.metaKeyEvents = void 0;
        for (let le of z.values()) (j = G.target) === null || j === void 0 || j.dispatchEvent(new KeyboardEvent("keyup", le));
      }
    };
    if (typeof PointerEvent < "u") {
      q.onPointerDown = (S) => {
        if (S.button !== 0 || !_n(S.currentTarget, qt(S.nativeEvent))) return;
        if (O2(S.nativeEvent)) {
          G.pointerType = "virtual";
          return;
        }
        G.pointerType = S.pointerType;
        let j = !0;
        if (!G.isPressed) {
          G.isPressed = !0, G.isOverTarget = !0, G.activePointerId = S.pointerId, G.target = S.currentTarget, y || X2(G.target), j = Z(S, G.pointerType);
          let z = qt(S.nativeEvent);
          "releasePointerCapture" in z && z.releasePointerCapture(S.pointerId), X(Ft(S.currentTarget), "pointerup", U, !1), X(Ft(S.currentTarget), "pointercancel", ne, !1);
        }
        j && S.stopPropagation();
      }, q.onMouseDown = (S) => {
        if (_n(S.currentTarget, qt(S.nativeEvent)) && S.button === 0) {
          if (p) {
            let j = F2(S.target);
            j && G.disposables.push(j);
          }
          S.stopPropagation();
        }
      }, q.onPointerUp = (S) => {
        !_n(S.currentTarget, qt(S.nativeEvent)) || G.pointerType === "virtual" || S.button === 0 && !G.isPressed && Y(S, G.pointerType || S.pointerType);
      }, q.onPointerEnter = (S) => {
        S.pointerId === G.activePointerId && G.target && !G.isOverTarget && G.pointerType != null && (G.isOverTarget = !0, Z(Sr(G.target, S), G.pointerType));
      }, q.onPointerLeave = (S) => {
        S.pointerId === G.activePointerId && G.target && G.isOverTarget && G.pointerType != null && (G.isOverTarget = !1, W(Sr(G.target, S), G.pointerType, !1), J(S));
      };
      let U = (S) => {
        if (S.pointerId === G.activePointerId && G.isPressed && S.button === 0 && G.target) {
          if (_n(G.target, qt(S)) && G.pointerType != null) {
            let j = !1, z = setTimeout(() => {
              G.isPressed && G.target instanceof HTMLElement && (j ? O(S) : (Pi(G.target), G.target.click()));
            }, 80);
            X(S.currentTarget, "click", () => j = !0, !0), G.disposables.push(() => clearTimeout(z));
          } else O(S);
          G.isOverTarget = !1;
        }
      }, ne = (S) => {
        O(S);
      };
      q.onDragStart = (S) => {
        _n(S.currentTarget, qt(S.nativeEvent)) && O(S);
      };
    }
    return q;
  }, [
    X,
    h,
    p,
    R,
    y,
    O,
    J,
    W,
    Z,
    Y,
    H,
    ce
  ]);
  return C.useEffect(() => {
    if (!x) return;
    const G = Ft(x.current);
    if (!G || !G.head || G.getElementById(Uy)) return;
    const q = G.createElement("style");
    q.id = Uy, q.textContent = `
@layer {
  [${By}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), G.head.prepend(q);
  }, [
    x
  ]), C.useEffect(() => {
    let G = $.current;
    return () => {
      var q;
      y || jy((q = G.target) !== null && q !== void 0 ? q : void 0);
      for (let ae of G.disposables) ae();
      G.disposables = [];
    };
  }, [
    y
  ]), {
    isPressed: m || _,
    pressProps: Qa(E, me, {
      [By]: !0
    })
  };
}
function Uh(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function id(e, n) {
  const { key: r, code: s } = e, l = n, c = l.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || s === "Space") && !(l instanceof qn(l).HTMLInputElement && !k1(l, r) || l instanceof qn(l).HTMLTextAreaElement || l.isContentEditable) && // Links should only trigger with Enter key
  !((c === "link" || !c && Uh(l)) && r !== "Enter");
}
function Sr(e, n) {
  let r = n.clientX, s = n.clientY;
  return {
    currentTarget: e,
    shiftKey: n.shiftKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey,
    altKey: n.altKey,
    clientX: r,
    clientY: s
  };
}
function W2(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Uh(e);
}
function Py(e, n) {
  return e instanceof HTMLInputElement ? !k1(e, n) : W2(e);
}
const eA = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function k1(e, n) {
  return e.type === "checkbox" || e.type === "radio" ? n === " " : eA.has(e.type);
}
let $r = null, Nd = /* @__PURE__ */ new Set(), ro = /* @__PURE__ */ new Map(), Vr = !1, Ld = !1;
const tA = {
  Tab: !0,
  Escape: !0
};
function zu(e, n) {
  for (let r of Nd) r(e, n);
}
function nA(e) {
  return !(e.metaKey || !po() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function mu(e) {
  Vr = !0, nA(e) && ($r = "keyboard", zu("keyboard", e));
}
function Ui(e) {
  $r = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Vr = !0, zu("pointer", e));
}
function $1(e) {
  m1(e) && (Vr = !0, $r = "virtual");
}
function j1(e) {
  e.target === window || e.target === document || hu || !e.isTrusted || (!Vr && !Ld && ($r = "virtual", zu("virtual", e)), Vr = !1, Ld = !1);
}
function N1() {
  hu || (Vr = !1, Ld = !0);
}
function Ud(e) {
  if (typeof window > "u" || typeof document > "u" || ro.get(qn(e))) return;
  const n = qn(e), r = Ft(e);
  let s = n.HTMLElement.prototype.focus;
  n.HTMLElement.prototype.focus = function() {
    Vr = !0, s.apply(this, arguments);
  }, r.addEventListener("keydown", mu, !0), r.addEventListener("keyup", mu, !0), r.addEventListener("click", $1, !0), n.addEventListener("focus", j1, !0), n.addEventListener("blur", N1, !1), typeof PointerEvent < "u" && (r.addEventListener("pointerdown", Ui, !0), r.addEventListener("pointermove", Ui, !0), r.addEventListener("pointerup", Ui, !0)), n.addEventListener("beforeunload", () => {
    L1(e);
  }, {
    once: !0
  }), ro.set(n, {
    focus: s
  });
}
const L1 = (e, n) => {
  const r = qn(e), s = Ft(e);
  n && s.removeEventListener("DOMContentLoaded", n), ro.has(r) && (r.HTMLElement.prototype.focus = ro.get(r).focus, s.removeEventListener("keydown", mu, !0), s.removeEventListener("keyup", mu, !0), s.removeEventListener("click", $1, !0), r.removeEventListener("focus", j1, !0), r.removeEventListener("blur", N1, !1), typeof PointerEvent < "u" && (s.removeEventListener("pointerdown", Ui, !0), s.removeEventListener("pointermove", Ui, !0), s.removeEventListener("pointerup", Ui, !0)), ro.delete(r));
};
function aA(e) {
  const n = Ft(e);
  let r;
  return n.readyState !== "loading" ? Ud(e) : (r = () => {
    Ud(e);
  }, n.addEventListener("DOMContentLoaded", r)), () => L1(e, r);
}
typeof document < "u" && aA();
function U1() {
  return $r !== "pointer";
}
function rA() {
  return $r;
}
function iA(e) {
  $r = e, zu(e, null);
}
const sA = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function oA(e, n, r) {
  let s = Ft(r?.target);
  const l = typeof window < "u" ? qn(r?.target).HTMLInputElement : HTMLInputElement, c = typeof window < "u" ? qn(r?.target).HTMLTextAreaElement : HTMLTextAreaElement, f = typeof window < "u" ? qn(r?.target).HTMLElement : HTMLElement, h = typeof window < "u" ? qn(r?.target).KeyboardEvent : KeyboardEvent;
  return e = e || s.activeElement instanceof l && !sA.has(s.activeElement.type) || s.activeElement instanceof c || s.activeElement instanceof f && s.activeElement.isContentEditable, !(e && n === "keyboard" && r instanceof h && !tA[r.key]);
}
function lA(e, n, r) {
  Ud(), C.useEffect(() => {
    let s = (l, c) => {
      oA(!!r?.isTextInput, l, c) && e(U1());
    };
    return Nd.add(s), () => {
      Nd.delete(s);
    };
  }, n);
}
function uA(e) {
  const n = Ft(e), r = mo(n);
  if (rA() === "virtual") {
    let s = r;
    d1(() => {
      mo(n) === s && e.isConnected && Pi(e);
    });
  } else Pi(e);
}
function B1(e) {
  let { isDisabled: n, onFocus: r, onBlur: s, onFocusChange: l } = e;
  const c = C.useCallback((m) => {
    if (m.target === m.currentTarget)
      return s && s(m), l && l(!1), !0;
  }, [
    s,
    l
  ]), f = R1(c), h = C.useCallback((m) => {
    const p = Ft(m.target), g = p ? mo(p) : mo();
    m.target === m.currentTarget && g === qt(m.nativeEvent) && (r && r(m), l && l(!0), f(m));
  }, [
    l,
    r,
    f
  ]);
  return {
    focusProps: {
      onFocus: !n && (r || l || s) ? h : void 0,
      onBlur: !n && (s || l) ? c : void 0
    }
  };
}
function Zy(e) {
  if (!e) return;
  let n = !0;
  return (r) => {
    let s = {
      ...r,
      preventDefault() {
        r.preventDefault();
      },
      isDefaultPrevented() {
        return r.isDefaultPrevented();
      },
      stopPropagation() {
        n = !0;
      },
      continuePropagation() {
        n = !1;
      },
      isPropagationStopped() {
        return n;
      }
    };
    e(s), n && r.stopPropagation();
  };
}
function cA(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Zy(e.onKeyDown),
      onKeyUp: Zy(e.onKeyUp)
    }
  };
}
let fA = /* @__PURE__ */ Re.createContext(null);
function dA(e) {
  let n = C.useContext(fA) || {};
  h1(n, e);
  let { ref: r, ...s } = n;
  return s;
}
function hA(e, n) {
  let { focusProps: r } = B1(e), { keyboardProps: s } = cA(e), l = Qa(r, s), c = dA(n), f = e.isDisabled ? {} : c, h = C.useRef(e.autoFocus);
  C.useEffect(() => {
    h.current && n.current && uA(n.current), h.current = !1;
  }, [
    n
  ]);
  let m = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (m = void 0), {
    focusableProps: Qa({
      ...l,
      tabIndex: m
    }, f)
  };
}
function mA(e) {
  let { isDisabled: n, onBlurWithin: r, onFocusWithin: s, onFocusWithinChange: l } = e, c = C.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: f, removeAllGlobalListeners: h } = Rh(), m = C.useCallback((y) => {
    y.currentTarget.contains(y.target) && c.current.isFocusWithin && !y.currentTarget.contains(y.relatedTarget) && (c.current.isFocusWithin = !1, h(), r && r(y), l && l(!1));
  }, [
    r,
    l,
    c,
    h
  ]), p = R1(m), g = C.useCallback((y) => {
    if (!y.currentTarget.contains(y.target)) return;
    const x = Ft(y.target), E = mo(x);
    if (!c.current.isFocusWithin && E === qt(y.nativeEvent)) {
      s && s(y), l && l(!0), c.current.isFocusWithin = !0, p(y);
      let _ = y.currentTarget;
      f(x, "focus", (D) => {
        if (c.current.isFocusWithin && !_n(_, D.target)) {
          let $ = new x.defaultView.FocusEvent("blur", {
            relatedTarget: D.target
          });
          z1($, _);
          let X = Lh($);
          m(X);
        }
      }, {
        capture: !0
      });
    }
  }, [
    s,
    l,
    p,
    f,
    m
  ]);
  return n ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: g,
      onBlur: m
    }
  };
}
let Bd = !1, sd = 0;
function pA() {
  Bd = !0, setTimeout(() => {
    Bd = !1;
  }, 50);
}
function Hy(e) {
  e.pointerType === "touch" && pA();
}
function gA() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", Hy), sd++, () => {
      sd--, !(sd > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", Hy);
    };
}
function vA(e) {
  let { onHoverStart: n, onHoverChange: r, onHoverEnd: s, isDisabled: l } = e, [c, f] = C.useState(!1), h = C.useRef({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  C.useEffect(gA, []);
  let { addGlobalListener: m, removeAllGlobalListeners: p } = Rh(), { hoverProps: g, triggerHoverEnd: y } = C.useMemo(() => {
    let x = (D, $) => {
      if (h.pointerType = $, l || $ === "touch" || h.isHovered || !D.currentTarget.contains(D.target)) return;
      h.isHovered = !0;
      let X = D.currentTarget;
      h.target = X, m(Ft(D.target), "pointerover", (R) => {
        h.isHovered && h.target && !_n(h.target, R.target) && E(R, R.pointerType);
      }, {
        capture: !0
      }), n && n({
        type: "hoverstart",
        target: X,
        pointerType: $
      }), r && r(!0), f(!0);
    }, E = (D, $) => {
      let X = h.target;
      h.pointerType = "", h.target = null, !($ === "touch" || !h.isHovered || !X) && (h.isHovered = !1, p(), s && s({
        type: "hoverend",
        target: X,
        pointerType: $
      }), r && r(!1), f(!1));
    }, _ = {};
    return typeof PointerEvent < "u" && (_.onPointerEnter = (D) => {
      Bd && D.pointerType === "mouse" || x(D, D.pointerType);
    }, _.onPointerLeave = (D) => {
      !l && D.currentTarget.contains(D.target) && E(D, D.pointerType);
    }), {
      hoverProps: _,
      triggerHoverEnd: E
    };
  }, [
    n,
    r,
    s,
    l,
    h,
    m,
    p
  ]);
  return C.useEffect(() => {
    l && y({
      currentTarget: h.target
    }, h.pointerType);
  }, [
    l
  ]), {
    hoverProps: g,
    isHovered: c
  };
}
function yA(e = {}) {
  let { autoFocus: n = !1, isTextInput: r, within: s } = e, l = C.useRef({
    isFocused: !1,
    isFocusVisible: n || U1()
  }), [c, f] = C.useState(!1), [h, m] = C.useState(() => l.current.isFocused && l.current.isFocusVisible), p = C.useCallback(() => m(l.current.isFocused && l.current.isFocusVisible), []), g = C.useCallback((E) => {
    l.current.isFocused = E, f(E), p();
  }, [
    p
  ]);
  lA((E) => {
    l.current.isFocusVisible = E, p();
  }, [], {
    isTextInput: r
  });
  let { focusProps: y } = B1({
    isDisabled: s,
    onFocusChange: g
  }), { focusWithinProps: x } = mA({
    isDisabled: !s,
    onFocusWithinChange: g
  });
  return {
    isFocused: c,
    isFocusVisible: h,
    focusProps: s ? x : y
  };
}
function bA(e) {
  return C.forwardRef(e);
}
var xA = {
  /** Animation Utilities */
  ".spinner-bar-animation": {
    "animation-delay": "calc(-1.2s + (0.1s * var(--bar-index)))",
    transform: "rotate(calc(30deg * var(--bar-index)))translate(140%)"
  },
  ".spinner-dot-animation": {
    "animation-delay": "calc(250ms * var(--dot-index))"
  },
  ".spinner-dot-blink-animation": {
    "animation-delay": "calc(200ms * var(--dot-index))"
  }
}, SA = {
  /**
   * Custom utilities
   */
  ".leading-inherit": {
    "line-height": "inherit"
  },
  ".bg-img-inherit": {
    "background-image": "inherit"
  },
  ".bg-clip-inherit": {
    "background-clip": "inherit"
  },
  ".text-fill-inherit": {
    "-webkit-text-fill-color": "inherit"
  },
  ".tap-highlight-transparent": {
    "-webkit-tap-highlight-color": "transparent"
  },
  ".input-search-cancel-button-none": {
    "&::-webkit-search-cancel-button": {
      "-webkit-appearance": "none"
    }
  }
}, wA = {
  /**
   * Scroll Hide
   */
  ".scrollbar-hide": {
    /* IE and Edge */
    "-ms-overflow-style": "none",
    /* Firefox */
    "scrollbar-width": "none",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  ".scrollbar-default": {
    /* IE and Edge */
    "-ms-overflow-style": "auto",
    /* Firefox */
    "scrollbar-width": "auto",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "block"
    }
  }
}, TA = {
  /**
   * Text utilities
   */
  ".text-tiny": {
    "font-size": "var(--heroui-font-size-tiny)",
    "line-height": "var(--heroui-line-height-tiny)"
  },
  ".text-small": {
    "font-size": "var(--heroui-font-size-small)",
    "line-height": "var(--heroui-line-height-small)"
  },
  ".text-medium": {
    "font-size": "var(--heroui-font-size-medium)",
    "line-height": "var(--heroui-line-height-medium)"
  },
  ".text-large": {
    "font-size": "var(--heroui-font-size-large)",
    "line-height": "var(--heroui-line-height-large)"
  }
}, Gn = "250ms", EA = {
  /**
   * Transition utilities
   */
  ".transition-background": {
    "transition-property": "background",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-colors-opacity": {
    "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-width": {
    "transition-property": "width",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-height": {
    "transition-property": "height",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-size": {
    "transition-property": "width, height",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-left": {
    "transition-property": "left",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-transform-opacity": {
    "transition-property": "transform, scale, opacity rotate",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-transform-background": {
    "transition-property": "transform, scale, background",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-transform-colors": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  },
  ".transition-transform-colors-opacity": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": Gn
  }
}, AA = {
  ...SA,
  ...EA,
  ...wA,
  ...TA,
  ...xA
}, Yl = ["small", "medium", "large"], Gy = {
  theme: {
    spacing: ["divider"],
    radius: Yl
  },
  classGroups: {
    shadow: [{ shadow: Yl }],
    opacity: [{ opacity: ["disabled"] }],
    "font-size": [{ text: ["tiny", ...Yl] }],
    "border-w": [{ border: Yl }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ],
    transition: Object.keys(AA).filter((e) => e.includes(".transition")).map((e) => e.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
}, qy = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, tn = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, _A = (e, n) => JSON.stringify(e) === JSON.stringify(n);
function P1(e, n) {
  e.forEach(function(r) {
    Array.isArray(r) ? P1(r, n) : n.push(r);
  });
}
function Z1(e) {
  let n = [];
  return P1(e, n), n;
}
var H1 = (...e) => Z1(e).filter(Boolean), G1 = (e, n) => {
  let r = {}, s = Object.keys(e), l = Object.keys(n);
  for (let c of s) if (l.includes(c)) {
    let f = e[c], h = n[c];
    Array.isArray(f) || Array.isArray(h) ? r[c] = H1(h, f) : typeof f == "object" && typeof h == "object" ? r[c] = G1(f, h) : r[c] = h + " " + f;
  } else r[c] = e[c];
  for (let c of l) s.includes(c) || (r[c] = n[c]);
  return r;
}, Yy = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const Bh = "-", CA = (e) => {
  const n = DA(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (f) => {
      const h = f.split(Bh);
      return h[0] === "" && h.length !== 1 && h.shift(), q1(h, n) || MA(f);
    },
    getConflictingClassGroupIds: (f, h) => {
      const m = r[f] || [];
      return h && s[f] ? [...m, ...s[f]] : m;
    }
  };
}, q1 = (e, n) => {
  if (e.length === 0)
    return n.classGroupId;
  const r = e[0], s = n.nextPart.get(r), l = s ? q1(e.slice(1), s) : void 0;
  if (l)
    return l;
  if (n.validators.length === 0)
    return;
  const c = e.join(Bh);
  return n.validators.find(({
    validator: f
  }) => f(c))?.classGroupId;
}, Fy = /^\[(.+)\]$/, MA = (e) => {
  if (Fy.test(e)) {
    const n = Fy.exec(e)[1], r = n?.substring(0, n.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, DA = (e) => {
  const {
    theme: n,
    classGroups: r
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const l in r)
    Pd(r[l], s, l, n);
  return s;
}, Pd = (e, n, r, s) => {
  e.forEach((l) => {
    if (typeof l == "string") {
      const c = l === "" ? n : Xy(n, l);
      c.classGroupId = r;
      return;
    }
    if (typeof l == "function") {
      if (zA(l)) {
        Pd(l(s), n, r, s);
        return;
      }
      n.validators.push({
        validator: l,
        classGroupId: r
      });
      return;
    }
    Object.entries(l).forEach(([c, f]) => {
      Pd(f, Xy(n, c), r, s);
    });
  });
}, Xy = (e, n) => {
  let r = e;
  return n.split(Bh).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, zA = (e) => e.isThemeGetter, RA = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const l = (c, f) => {
    r.set(c, f), n++, n > e && (n = 0, s = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let f = r.get(c);
      if (f !== void 0)
        return f;
      if ((f = s.get(c)) !== void 0)
        return l(c, f), f;
    },
    set(c, f) {
      r.has(c) ? r.set(c, f) : l(c, f);
    }
  };
}, Zd = "!", Hd = ":", VA = Hd.length, OA = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: r
  } = e;
  let s = (l) => {
    const c = [];
    let f = 0, h = 0, m = 0, p;
    for (let _ = 0; _ < l.length; _++) {
      let D = l[_];
      if (f === 0 && h === 0) {
        if (D === Hd) {
          c.push(l.slice(m, _)), m = _ + VA;
          continue;
        }
        if (D === "/") {
          p = _;
          continue;
        }
      }
      D === "[" ? f++ : D === "]" ? f-- : D === "(" ? h++ : D === ")" && h--;
    }
    const g = c.length === 0 ? l : l.substring(m), y = kA(g), x = y !== g, E = p && p > m ? p - m : void 0;
    return {
      modifiers: c,
      hasImportantModifier: x,
      baseClassName: y,
      maybePostfixModifierPosition: E
    };
  };
  if (n) {
    const l = n + Hd, c = s;
    s = (f) => f.startsWith(l) ? c(f.substring(l.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: f,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const l = s;
    s = (c) => r({
      className: c,
      parseClassName: l
    });
  }
  return s;
}, kA = (e) => e.endsWith(Zd) ? e.substring(0, e.length - 1) : e.startsWith(Zd) ? e.substring(1) : e, $A = (e) => {
  const n = Object.fromEntries(e.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const l = [];
    let c = [];
    return s.forEach((f) => {
      f[0] === "[" || n[f] ? (l.push(...c.sort(), f), c = []) : c.push(f);
    }), l.push(...c.sort()), l;
  };
}, jA = (e) => ({
  cache: RA(e.cacheSize),
  parseClassName: OA(e),
  sortModifiers: $A(e),
  ...CA(e)
}), NA = /\s+/, LA = (e, n) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: l,
    sortModifiers: c
  } = n, f = [], h = e.trim().split(NA);
  let m = "";
  for (let p = h.length - 1; p >= 0; p -= 1) {
    const g = h[p], {
      isExternal: y,
      modifiers: x,
      hasImportantModifier: E,
      baseClassName: _,
      maybePostfixModifierPosition: D
    } = r(g);
    if (y) {
      m = g + (m.length > 0 ? " " + m : m);
      continue;
    }
    let $ = !!D, X = s($ ? _.substring(0, D) : _);
    if (!X) {
      if (!$) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (X = s(_), !X) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      $ = !1;
    }
    const R = c(x).join(":"), Z = E ? R + Zd : R, W = Z + X;
    if (f.includes(W))
      continue;
    f.push(W);
    const Y = l(X, $);
    for (let O = 0; O < Y.length; ++O) {
      const J = Y[O];
      f.push(Z + J);
    }
    m = g + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function UA() {
  let e = 0, n, r, s = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (r = Y1(n)) && (s && (s += " "), s += r);
  return s;
}
const Y1 = (e) => {
  if (typeof e == "string")
    return e;
  let n, r = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (n = Y1(e[s])) && (r && (r += " "), r += n);
  return r;
};
function Gd(e, ...n) {
  let r, s, l, c = f;
  function f(m) {
    const p = n.reduce((g, y) => y(g), e());
    return r = jA(p), s = r.cache.get, l = r.cache.set, c = h, h(m);
  }
  function h(m) {
    const p = s(m);
    if (p)
      return p;
    const g = LA(m, r);
    return l(m, g), g;
  }
  return function() {
    return c(UA.apply(null, arguments));
  };
}
const Vt = (e) => {
  const n = (r) => r[e] || [];
  return n.isThemeGetter = !0, n;
}, F1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, X1 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, BA = /^\d+\/\d+$/, PA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ZA = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, HA = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, GA = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qA = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ai = (e) => BA.test(e), Ue = (e) => !!e && !Number.isNaN(Number(e)), wr = (e) => !!e && Number.isInteger(Number(e)), Ky = (e) => e.endsWith("%") && Ue(e.slice(0, -1)), Ya = (e) => PA.test(e), YA = () => !0, FA = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ZA.test(e) && !HA.test(e)
), Ph = () => !1, XA = (e) => GA.test(e), KA = (e) => qA.test(e), QA = (e) => !be(e) && !xe(e), IA = (e) => Gi(e, I1, Ph), be = (e) => F1.test(e), Tr = (e) => Gi(e, J1, FA), od = (e) => Gi(e, l_, Ue), JA = (e) => Gi(e, K1, Ph), WA = (e) => Gi(e, Q1, KA), e_ = (e) => Gi(e, Ph, XA), xe = (e) => X1.test(e), Fl = (e) => qi(e, J1), t_ = (e) => qi(e, u_), n_ = (e) => qi(e, K1), a_ = (e) => qi(e, I1), r_ = (e) => qi(e, Q1), i_ = (e) => qi(e, c_, !0), Gi = (e, n, r) => {
  const s = F1.exec(e);
  return s ? s[1] ? n(s[1]) : r(s[2]) : !1;
}, qi = (e, n, r = !1) => {
  const s = X1.exec(e);
  return s ? s[1] ? n(s[1]) : r : !1;
}, K1 = (e) => e === "position", s_ = /* @__PURE__ */ new Set(["image", "url"]), Q1 = (e) => s_.has(e), o_ = /* @__PURE__ */ new Set(["length", "size", "percentage"]), I1 = (e) => o_.has(e), J1 = (e) => e === "length", l_ = (e) => e === "number", u_ = (e) => e === "family-name", c_ = (e) => e === "shadow", qd = () => {
  const e = Vt("color"), n = Vt("font"), r = Vt("text"), s = Vt("font-weight"), l = Vt("tracking"), c = Vt("leading"), f = Vt("breakpoint"), h = Vt("container"), m = Vt("spacing"), p = Vt("radius"), g = Vt("shadow"), y = Vt("inset-shadow"), x = Vt("drop-shadow"), E = Vt("blur"), _ = Vt("perspective"), D = Vt("aspect"), $ = Vt("ease"), X = Vt("animate"), R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", "contain", "none"], O = () => [xe, be, m], J = () => [Ai, "full", "auto", ...O()], H = () => [wr, "none", "subgrid", xe, be], ce = () => ["auto", {
    span: ["full", wr, xe, be]
  }, xe, be], me = () => [wr, "auto", xe, be], G = () => ["auto", "min", "max", "fr", xe, be], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], ae = () => ["start", "end", "center", "stretch"], U = () => ["auto", ...O()], ne = () => [Ai, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], S = () => [e, xe, be], j = () => [Ky, Tr], z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    xe,
    be
  ], le = () => ["", Ue, Fl, Tr], w = () => ["solid", "dashed", "dotted", "double"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], se = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    xe,
    be
  ], ie = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", xe, be], fe = () => ["none", Ue, xe, be], Te = () => ["none", Ue, xe, be], Se = () => [Ue, xe, be], Me = () => [Ai, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ya],
      breakpoint: [Ya],
      color: [YA],
      container: [Ya],
      "drop-shadow": [Ya],
      ease: ["in", "out", "in-out"],
      font: [QA],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ya],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ya],
      shadow: [Ya],
      spacing: ["px", Ue],
      text: [Ya],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ai, be, xe, D]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ue, be, xe, h]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": R()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": R()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Z(), be, xe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: J()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": J()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": J()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: J()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: J()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: J()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: J()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: J()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: J()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [wr, "auto", xe, be]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ai, "full", "auto", h, ...O()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ue, Ai, "auto", "initial", "none", be]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ue, xe, be]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ue, xe, be]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [wr, "first", "last", "none", xe, be]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": H()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ce()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": me()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": me()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": H()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ce()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": me()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": me()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": G()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": G()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: O()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": O()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": O()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...q(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ae(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ae()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...q()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ae(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ae(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": q()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ae(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ae()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: O()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: O()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: O()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: O()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: O()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: O()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: O()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: O()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: O()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: U()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: U()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: U()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: U()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: U()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: U()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: U()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: U()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: U()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": O()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": O()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: ne()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [h, "screen", ...ne()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          h,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ne()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          h,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [f]
          },
          ...ne()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...ne()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...ne()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...ne()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Fl, Tr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [s, xe, od]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ky, be]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [t_, be, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [l, xe, be]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ue, "none", xe, od]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
          ...O()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", xe, be]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", xe, be]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: S()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: S()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...w(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ue, "from-font", "auto", xe, Tr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: S()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ue, "auto", xe, be]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: O()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", xe, be]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", xe, be]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Z(), n_, JA]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", a_, IA]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, wr, xe, be],
          radial: ["", xe, be],
          conic: [wr, xe, be]
        }, r_, WA]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: S()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: j()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: S()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: S()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: S()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: z()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": z()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": z()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": z()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": z()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": z()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": z()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": z()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": z()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": z()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": z()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": z()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": z()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": z()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": z()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: le()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": le()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": le()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": le()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": le()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": le()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": le()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": le()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": le()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": le()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": le()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...w(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...w(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: S()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": S()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": S()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": S()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": S()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": S()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": S()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": S()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": S()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: S()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...w(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ue, xe, be]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ue, Fl, Tr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          i_,
          e_
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: S()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", xe, be, y]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": S()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: le()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: S()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ue, Tr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": S()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": le()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": S()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ue, xe, be]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Q()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          xe,
          be
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: se()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ue, xe, be]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ue, xe, be]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          xe,
          be
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ue, xe, be]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ue, xe, be]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ue, xe, be]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ue, xe, be]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ue, xe, be]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          xe,
          be
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": se()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ue, xe, be]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ue, xe, be]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ue, xe, be]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ue, xe, be]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ue, xe, be]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ue, xe, be]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ue, xe, be]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ue, xe, be]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": O()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": O()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": O()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", xe, be]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ue, "initial", xe, be]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", $, xe, be]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ue, xe, be]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", X, xe, be]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [_, xe, be]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ie()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: fe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": fe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": fe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": fe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Te()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Se()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Se()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Se()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [xe, be, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ie()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Me()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Me()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Me()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Me()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: S()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: S()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xe, be]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", xe, be]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...S()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ue, Fl, Tr, od]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...S()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, f_ = (e, {
  cacheSize: n,
  prefix: r,
  experimentalParseClassName: s,
  extend: l = {},
  override: c = {}
}) => (no(e, "cacheSize", n), no(e, "prefix", r), no(e, "experimentalParseClassName", s), Xl(e.theme, c.theme), Xl(e.classGroups, c.classGroups), Xl(e.conflictingClassGroups, c.conflictingClassGroups), Xl(e.conflictingClassGroupModifiers, c.conflictingClassGroupModifiers), no(e, "orderSensitiveModifiers", c.orderSensitiveModifiers), Kl(e.theme, l.theme), Kl(e.classGroups, l.classGroups), Kl(e.conflictingClassGroups, l.conflictingClassGroups), Kl(e.conflictingClassGroupModifiers, l.conflictingClassGroupModifiers), W1(e, l, "orderSensitiveModifiers"), e), no = (e, n, r) => {
  r !== void 0 && (e[n] = r);
}, Xl = (e, n) => {
  if (n)
    for (const r in n)
      no(e, r, n[r]);
}, Kl = (e, n) => {
  if (n)
    for (const r in n)
      W1(e, n, r);
}, W1 = (e, n, r) => {
  const s = n[r];
  s !== void 0 && (e[r] = e[r] ? e[r].concat(s) : s);
}, d_ = (e, ...n) => typeof e == "function" ? Gd(qd, e, ...n) : Gd(() => f_(qd(), e), ...n), h_ = /* @__PURE__ */ Gd(qd);
var m_ = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, ex = (e) => e || void 0, yo = (...e) => ex(Z1(e).filter(Boolean).join(" ")), ld = null, va = {}, Yd = !1, Is = (...e) => (n) => n.twMerge ? ((!ld || Yd) && (Yd = !1, ld = tn(va) ? h_ : d_({ ...va, extend: { theme: va.theme, classGroups: va.classGroups, conflictingClassGroupModifiers: va.conflictingClassGroupModifiers, conflictingClassGroups: va.conflictingClassGroups, ...va.extend } })), ex(ld(yo(e)))) : yo(e), Qy = (e, n) => {
  for (let r in n) e.hasOwnProperty(r) ? e[r] = yo(e[r], n[r]) : e[r] = n[r];
  return e;
}, p_ = (e, n) => {
  let { extend: r = null, slots: s = {}, variants: l = {}, compoundVariants: c = [], compoundSlots: f = [], defaultVariants: h = {} } = e, m = { ...m_, ...n }, p = r != null && r.base ? yo(r.base, e?.base) : e?.base, g = r != null && r.variants && !tn(r.variants) ? G1(l, r.variants) : l, y = r != null && r.defaultVariants && !tn(r.defaultVariants) ? { ...r.defaultVariants, ...h } : h;
  !tn(m.twMergeConfig) && !_A(m.twMergeConfig, va) && (Yd = !0, va = m.twMergeConfig);
  let x = tn(r?.slots), E = tn(s) ? {} : { base: yo(e?.base, x && r?.base), ...s }, _ = x ? E : Qy({ ...r?.slots }, tn(E) ? { base: e?.base } : E), D = tn(r?.compoundVariants) ? c : H1(r?.compoundVariants, c), $ = (R) => {
    if (tn(g) && tn(s) && x) return Is(p, R?.class, R?.className)(m);
    if (D && !Array.isArray(D)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof D}`);
    if (f && !Array.isArray(f)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
    let Z = (q, ae, U = [], ne) => {
      let S = U;
      if (typeof ae == "string") S = S.concat(Yy(ae).split(" ").map((j) => `${q}:${j}`));
      else if (Array.isArray(ae)) S = S.concat(ae.reduce((j, z) => j.concat(`${q}:${z}`), []));
      else if (typeof ae == "object" && typeof ne == "string") {
        for (let j in ae) if (ae.hasOwnProperty(j) && j === ne) {
          let z = ae[j];
          if (z && typeof z == "string") {
            let le = Yy(z);
            S[ne] ? S[ne] = S[ne].concat(le.split(" ").map((w) => `${q}:${w}`)) : S[ne] = le.split(" ").map((w) => `${q}:${w}`);
          } else Array.isArray(z) && z.length > 0 && (S[ne] = z.reduce((le, w) => le.concat(`${q}:${w}`), []));
        }
      }
      return S;
    }, W = (q, ae = g, U = null, ne = null) => {
      var S;
      let j = ae[q];
      if (!j || tn(j)) return null;
      let z = (S = ne?.[q]) != null ? S : R?.[q];
      if (z === null) return null;
      let le = qy(z), w = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, Q = y?.[q], se = [];
      if (typeof le == "object" && w) for (let [Te, Se] of Object.entries(le)) {
        let Me = j[Se];
        if (Te === "initial") {
          Q = Se;
          continue;
        }
        Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(Te) || (se = Z(Te, Me, se, U));
      }
      let ie = le != null && typeof le != "object" ? le : qy(Q), fe = j[ie || "false"];
      return typeof se == "object" && typeof U == "string" && se[U] ? Qy(se, fe) : se.length > 0 ? (se.push(fe), U === "base" ? se.join(" ") : se) : fe;
    }, Y = () => g ? Object.keys(g).map((q) => W(q, g)) : null, O = (q, ae) => {
      if (!g || typeof g != "object") return null;
      let U = new Array();
      for (let ne in g) {
        let S = W(ne, g, q, ae), j = q === "base" && typeof S == "string" ? S : S && S[q];
        j && (U[U.length] = j);
      }
      return U;
    }, J = {};
    for (let q in R) R[q] !== void 0 && (J[q] = R[q]);
    let H = (q, ae) => {
      var U;
      let ne = typeof R?.[q] == "object" ? { [q]: (U = R[q]) == null ? void 0 : U.initial } : {};
      return { ...y, ...J, ...ne, ...ae };
    }, ce = (q = [], ae) => {
      let U = [];
      for (let { class: ne, className: S, ...j } of q) {
        let z = !0;
        for (let [le, w] of Object.entries(j)) {
          let Q = H(le, ae)[le];
          if (Array.isArray(w)) {
            if (!w.includes(Q)) {
              z = !1;
              break;
            }
          } else {
            let se = (ie) => ie == null || ie === !1;
            if (se(w) && se(Q)) continue;
            if (Q !== w) {
              z = !1;
              break;
            }
          }
        }
        z && (ne && U.push(ne), S && U.push(S));
      }
      return U;
    }, me = (q) => {
      let ae = ce(D, q);
      if (!Array.isArray(ae)) return ae;
      let U = {};
      for (let ne of ae) if (typeof ne == "string" && (U.base = Is(U.base, ne)(m)), typeof ne == "object") for (let [S, j] of Object.entries(ne)) U[S] = Is(U[S], j)(m);
      return U;
    }, G = (q) => {
      if (f.length < 1) return null;
      let ae = {};
      for (let { slots: U = [], class: ne, className: S, ...j } of f) {
        if (!tn(j)) {
          let z = !0;
          for (let le of Object.keys(j)) {
            let w = H(le, q)[le];
            if (w === void 0 || (Array.isArray(j[le]) ? !j[le].includes(w) : j[le] !== w)) {
              z = !1;
              break;
            }
          }
          if (!z) continue;
        }
        for (let z of U) ae[z] = ae[z] || [], ae[z].push([ne, S]);
      }
      return ae;
    };
    if (!tn(s) || !x) {
      let q = {};
      if (typeof _ == "object" && !tn(_)) for (let ae of Object.keys(_)) q[ae] = (U) => {
        var ne, S;
        return Is(_[ae], O(ae, U), ((ne = me(U)) != null ? ne : [])[ae], ((S = G(U)) != null ? S : [])[ae], U?.class, U?.className)(m);
      };
      return q;
    }
    return Is(p, Y(), ce(D), R?.class, R?.className)(m);
  }, X = () => {
    if (!(!g || typeof g != "object")) return Object.keys(g);
  };
  return $.variantKeys = X(), $.extend = r, $.base = p, $.slots = _, $.variants = g, $.defaultVariants = y, $.compoundSlots = f, $.compoundVariants = D, $;
}, Zh = (e, n) => {
  var r, s, l;
  return p_(e, {
    ...n,
    twMerge: (r = void 0) != null ? r : !0,
    twMergeConfig: {
      theme: {
        ...(s = void 0) == null ? void 0 : s.theme,
        ...Gy.theme
      },
      classGroups: {
        ...(l = void 0) == null ? void 0 : l.classGroups,
        ...Gy.classGroups
      }
    }
  });
}, g_ = [
  "outline-hidden",
  "group-data-[focus-visible=true]:z-10",
  "group-data-[focus-visible=true]:ring-2",
  "group-data-[focus-visible=true]:ring-focus",
  "group-data-[focus-visible=true]:ring-offset-2",
  "group-data-[focus-visible=true]:ring-offset-background"
], v_ = [
  // Font styles
  "font-inherit",
  "text-[100%]",
  "leading-[1.15]",
  // Reset margins and padding
  "m-0",
  "p-0",
  // Overflow and box-sizing
  "overflow-visible",
  "box-border",
  // Positioning & Hit area
  "absolute",
  "top-0",
  "w-full",
  "h-full",
  // Opacity and z-index
  "opacity-[0.0001]",
  "z-[1]",
  // Cursor
  "cursor-pointer",
  // Disabled state
  "disabled:cursor-default"
], y_ = Zh({
  base: "flex flex-col gap-2 items-start"
}), b_ = Zh({
  slots: {
    base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2 select-none",
    wrapper: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "shrink-0",
      "overflow-hidden",
      // before
      "before:content-['']",
      "before:absolute",
      "before:inset-0",
      "before:border-solid",
      "before:border-2",
      "before:box-border",
      "before:border-default",
      // after
      "after:content-['']",
      "after:absolute",
      "after:inset-0",
      "after:scale-50",
      "after:opacity-0",
      "after:origin-center",
      "group-data-[selected=true]:after:scale-100",
      "group-data-[selected=true]:after:opacity-100",
      // hover
      "group-data-[hover=true]:before:bg-default-100",
      // focus ring
      ...g_
    ],
    hiddenInput: v_,
    icon: "z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100 pointer-events-none",
    label: "relative text-foreground select-none"
  },
  variants: {
    color: {
      default: {
        wrapper: "after:bg-default after:text-default-foreground text-default-foreground"
      },
      primary: {
        wrapper: "after:bg-primary after:text-primary-foreground text-primary-foreground"
      },
      secondary: {
        wrapper: "after:bg-secondary after:text-secondary-foreground text-secondary-foreground"
      },
      success: {
        wrapper: "after:bg-success after:text-success-foreground text-success-foreground"
      },
      warning: {
        wrapper: "after:bg-warning after:text-warning-foreground text-warning-foreground"
      },
      danger: {
        wrapper: "after:bg-danger after:text-danger-foreground text-danger-foreground"
      }
    },
    size: {
      sm: {
        wrapper: [
          "w-4 h-4 me-2",
          "rounded-[calc(var(--heroui-radius-medium)*0.5)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.5)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.5)]"
        ],
        label: "text-small",
        icon: "w-3 h-2"
      },
      md: {
        wrapper: [
          "w-5 h-5 me-2",
          "rounded-[calc(var(--heroui-radius-medium)*0.6)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.6)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.6)]"
        ],
        label: "text-medium",
        icon: "w-4 h-3"
      },
      lg: {
        wrapper: [
          "w-6 h-6 me-2",
          "rounded-[calc(var(--heroui-radius-medium)*0.7)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.7)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.7)]"
        ],
        label: "text-large",
        icon: "w-5 h-4"
      }
    },
    radius: {
      none: {
        wrapper: "rounded-none before:rounded-none after:rounded-none"
      },
      sm: {
        wrapper: [
          "rounded-[calc(var(--heroui-radius-medium)*0.5)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.5)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.5)]"
        ]
      },
      md: {
        wrapper: [
          "rounded-[calc(var(--heroui-radius-medium)*0.6)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.6)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.6)]"
        ]
      },
      lg: {
        wrapper: [
          "rounded-[calc(var(--heroui-radius-medium)*0.7)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.7)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.7)]"
        ]
      },
      full: {
        wrapper: "rounded-full before:rounded-full after:rounded-full"
      }
    },
    lineThrough: {
      true: {
        label: [
          "inline-flex",
          "items-center",
          "justify-center",
          "before:content-['']",
          "before:absolute",
          "before:bg-foreground",
          "before:w-0",
          "before:h-0.5",
          "group-data-[selected=true]:opacity-60",
          "group-data-[selected=true]:before:w-full"
        ]
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none"
      }
    },
    isInvalid: {
      true: {
        wrapper: "before:border-danger",
        label: "text-danger"
      }
    },
    disableAnimation: {
      true: {
        wrapper: "transition-none",
        icon: "transition-none",
        label: "transition-none"
      },
      false: {
        wrapper: [
          "before:transition-colors",
          "group-data-[pressed=true]:scale-95",
          "transition-transform",
          "after:transition-transform-opacity",
          "after:!ease-linear",
          "after:!duration-200",
          "motion-reduce:transition-none"
        ],
        icon: "transition-opacity motion-reduce:transition-none",
        label: "transition-colors-opacity before:transition-width motion-reduce:transition-none"
      }
    }
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    isDisabled: !1,
    lineThrough: !1
  }
});
Zh({
  slots: {
    base: "relative flex flex-col gap-2",
    label: "relative text-medium text-foreground-500",
    wrapper: "flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
    description: "text-small text-foreground-400",
    errorMessage: "text-small text-danger"
  },
  variants: {
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5"
      }
    },
    isInvalid: {
      true: {
        description: "text-danger"
      }
    },
    disableAnimation: {
      true: {},
      false: {
        description: "transition-colors !duration-150 motion-reduce:transition-none"
      }
    }
  },
  defaultVariants: {
    isInvalid: !1,
    isRequired: !1
  }
});
var tx = globalThis?.document ? C.useLayoutEffect : C.useEffect;
const nx = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, ax = {
  ...nx,
  customError: !0,
  valid: !1
}, Ri = {
  isInvalid: !1,
  validationDetails: nx,
  validationErrors: []
}, rx = C.createContext({}), pu = "__formValidationState" + Date.now();
function ix(e) {
  if (e[pu]) {
    let { realtimeValidation: n, displayValidation: r, updateValidation: s, resetValidation: l, commitValidation: c } = e[pu];
    return {
      realtimeValidation: n,
      displayValidation: r,
      updateValidation: s,
      resetValidation: l,
      commitValidation: c
    };
  }
  return x_(e);
}
function x_(e) {
  let { isInvalid: n, validationState: r, name: s, value: l, builtinValidation: c, validate: f, validationBehavior: h = "aria" } = e;
  r && (n || (n = r === "invalid"));
  let m = n !== void 0 ? {
    isInvalid: n,
    validationErrors: [],
    validationDetails: ax
  } : null, p = C.useMemo(() => {
    if (!f || l == null) return null;
    let me = S_(f, l);
    return Iy(me);
  }, [
    f,
    l
  ]);
  c?.validationDetails.valid && (c = void 0);
  let g = C.useContext(rx), y = C.useMemo(() => s ? Array.isArray(s) ? s.flatMap((me) => Fd(g[me])) : Fd(g[s]) : [], [
    g,
    s
  ]), [x, E] = C.useState(g), [_, D] = C.useState(!1);
  g !== x && (E(g), D(!1));
  let $ = C.useMemo(() => Iy(_ ? [] : y), [
    _,
    y
  ]), X = C.useRef(Ri), [R, Z] = C.useState(Ri), W = C.useRef(Ri), Y = () => {
    if (!O) return;
    J(!1);
    let me = p || c || X.current;
    ud(me, W.current) || (W.current = me, Z(me));
  }, [O, J] = C.useState(!1);
  return C.useEffect(Y), {
    realtimeValidation: m || $ || p || c || Ri,
    displayValidation: h === "native" ? m || $ || R : m || $ || p || c || R,
    updateValidation(me) {
      h === "aria" && !ud(R, me) ? Z(me) : X.current = me;
    },
    resetValidation() {
      let me = Ri;
      ud(me, W.current) || (W.current = me, Z(me)), h === "native" && J(!1), D(!0);
    },
    commitValidation() {
      h === "native" && J(!0), D(!0);
    }
  };
}
function Fd(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function S_(e, n) {
  if (typeof e == "function") {
    let r = e(n);
    if (r && typeof r != "boolean") return Fd(r);
  }
  return [];
}
function Iy(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: ax
  } : null;
}
function ud(e, n) {
  return e === n ? !0 : !!e && !!n && e.isInvalid === n.isInvalid && e.validationErrors.length === n.validationErrors.length && e.validationErrors.every((r, s) => r === n.validationErrors[s]) && Object.entries(e.validationDetails).every(([r, s]) => n.validationDetails[r] === s);
}
function w_(e, n, r) {
  let { validationBehavior: s, focus: l } = e;
  Mu(() => {
    if (s === "native" && r?.current && !r.current.disabled) {
      let m = n.realtimeValidation.isInvalid ? n.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      r.current.setCustomValidity(m), r.current.hasAttribute("title") || (r.current.title = ""), n.realtimeValidation.isInvalid || n.updateValidation(E_(r.current));
    }
  });
  let c = Dn(() => {
    n.resetValidation();
  }), f = Dn((m) => {
    var p;
    n.displayValidation.isInvalid || n.commitValidation();
    let g = r == null || (p = r.current) === null || p === void 0 ? void 0 : p.form;
    if (!m.defaultPrevented && r && g && A_(g) === r.current) {
      var y;
      l ? l() : (y = r.current) === null || y === void 0 || y.focus(), iA("keyboard");
    }
    m.preventDefault();
  }), h = Dn(() => {
    n.commitValidation();
  });
  C.useEffect(() => {
    let m = r?.current;
    if (!m) return;
    let p = m.form;
    return m.addEventListener("invalid", f), m.addEventListener("change", h), p?.addEventListener("reset", c), () => {
      m.removeEventListener("invalid", f), m.removeEventListener("change", h), p?.removeEventListener("reset", c);
    };
  }, [
    r,
    f,
    h,
    c,
    s
  ]);
}
function T_(e) {
  let n = e.validity;
  return {
    badInput: n.badInput,
    customError: n.customError,
    patternMismatch: n.patternMismatch,
    rangeOverflow: n.rangeOverflow,
    rangeUnderflow: n.rangeUnderflow,
    stepMismatch: n.stepMismatch,
    tooLong: n.tooLong,
    tooShort: n.tooShort,
    typeMismatch: n.typeMismatch,
    valueMissing: n.valueMissing,
    valid: n.valid
  };
}
function E_(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: T_(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function A_(e) {
  for (let n = 0; n < e.elements.length; n++) {
    let r = e.elements[n];
    if (!r.validity.valid) return r;
  }
  return null;
}
function __(e, n, r) {
  let { isDisabled: s = !1, isReadOnly: l = !1, value: c, name: f, children: h, "aria-label": m, "aria-labelledby": p, validationState: g = "valid", isInvalid: y } = e, x = (O) => {
    O.stopPropagation(), n.setSelected(O.target.checked);
  }, E = h != null, _ = m != null || p != null, { pressProps: D, isPressed: $ } = jd({
    isDisabled: s
  }), { pressProps: X, isPressed: R } = jd({
    onPress() {
      var O;
      n.toggle(), (O = r.current) === null || O === void 0 || O.focus();
    },
    isDisabled: s || l
  }), { focusableProps: Z } = hA(e, r), W = Qa(D, Z), Y = E2(e, {
    labelable: !0
  });
  return k2(r, n.isSelected, n.setSelected), {
    labelProps: Qa(X, {
      onClick: (O) => O.preventDefault()
    }),
    inputProps: Qa(Y, {
      "aria-invalid": y || g === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": l || void 0,
      onChange: x,
      disabled: s,
      ...c == null ? {} : {
        value: c
      },
      name: f,
      type: "checkbox",
      ...W
    }),
    isSelected: n.isSelected,
    isPressed: $ || R,
    isDisabled: s,
    isReadOnly: l,
    isInvalid: y || g === "invalid"
  };
}
function sx(e, n, r) {
  let s = ix({
    ...e,
    value: n.isSelected
  }), { isInvalid: l, validationErrors: c, validationDetails: f } = s.displayValidation, { labelProps: h, inputProps: m, isSelected: p, isPressed: g, isDisabled: y, isReadOnly: x } = __({
    ...e,
    isInvalid: l
  }, n, r);
  w_(e, s, r);
  let { isIndeterminate: E, isRequired: _, validationBehavior: D = "aria" } = e;
  C.useEffect(() => {
    r.current && (r.current.indeterminate = !!E);
  });
  let { pressProps: $ } = jd({
    isDisabled: y || x,
    onPress() {
      let { [pu]: X } = e, { commitValidation: R } = X || s;
      R();
    }
  });
  return {
    labelProps: Qa(h, $),
    inputProps: {
      ...m,
      checked: p,
      "aria-required": _ && D === "aria" || void 0,
      required: _ && D === "native"
    },
    isSelected: p,
    isPressed: g,
    isDisabled: y,
    isReadOnly: x,
    isInvalid: l,
    validationErrors: c,
    validationDetails: f
  };
}
const C_ = /* @__PURE__ */ new WeakMap();
function ox(e = {}) {
  let { isReadOnly: n } = e, [r, s] = N2(e.isSelected, e.defaultSelected || !1, e.onChange);
  function l(f) {
    n || s(f);
  }
  function c() {
    n || s(!r);
  }
  return {
    isSelected: r,
    setSelected: l,
    toggle: c
  };
}
function M_(e, n, r) {
  const s = ox({
    isReadOnly: e.isReadOnly || n.isReadOnly,
    isSelected: n.isSelected(e.value),
    onChange($) {
      $ ? n.addValue(e.value) : n.removeValue(e.value), e.onChange && e.onChange($);
    }
  });
  let { name: l, descriptionId: c, errorMessageId: f, validationBehavior: h } = C_.get(n);
  var m;
  h = (m = e.validationBehavior) !== null && m !== void 0 ? m : h;
  let { realtimeValidation: p } = ix({
    ...e,
    value: s.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), g = C.useRef(Ri), y = () => {
    n.setInvalid(e.value, p.isInvalid ? p : g.current);
  };
  C.useEffect(y);
  let x = n.realtimeValidation.isInvalid ? n.realtimeValidation : p, E = h === "native" ? n.displayValidation : x;
  var _;
  let D = sx({
    ...e,
    isReadOnly: e.isReadOnly || n.isReadOnly,
    isDisabled: e.isDisabled || n.isDisabled,
    name: e.name || l,
    isRequired: (_ = e.isRequired) !== null && _ !== void 0 ? _ : n.isRequired,
    validationBehavior: h,
    [pu]: {
      realtimeValidation: x,
      displayValidation: E,
      resetValidation: n.resetValidation,
      commitValidation: n.commitValidation,
      updateValidation($) {
        g.current = $, y();
      }
    }
  }, s, r);
  return {
    ...D,
    inputProps: {
      ...D.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        n.isInvalid ? f : null,
        c
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
var Jy = Symbol("default");
function D_(e) {
  const n = C.useRef(null), r = C.useRef(void 0), s = C.useCallback(
    (l) => {
      if (typeof e == "function") {
        const c = e, f = c(l);
        return () => {
          typeof f == "function" ? f() : c(null);
        };
      } else if (e)
        return e.current = l, () => {
          e.current = null;
        };
    },
    [e]
  );
  return C.useMemo(
    () => ({
      get current() {
        return n.current;
      },
      set current(l) {
        n.current = l, r.current && (r.current(), r.current = void 0), l != null && (r.current = s(l));
      }
    }),
    [s]
  );
}
function lx(e, n) {
  let r = C.useContext(e);
  if (n === null)
    return null;
  if (r && typeof r == "object" && "slots" in r && r.slots) {
    let s = new Intl.ListFormat().format(Object.keys(r.slots).map((c) => `"${c}"`));
    if (!n && !r.slots[Jy])
      throw new Error(`A slot prop is required. Valid slot names are ${s}.`);
    let l = n || Jy;
    if (!r.slots[l])
      throw new Error(`Invalid slot "${n}". Valid slot names are ${s}.`);
    return r.slots[l];
  }
  return r;
}
function z_(e, n, r) {
  let s = lx(r, e.slot) || {}, { ref: l, ...c } = s, f = D_(C.useMemo(() => c2(n, l), [n, l])), h = Vd(c, e);
  return "style" in c && c.style && "style" in e && e.style && (typeof c.style == "function" || typeof e.style == "function" ? h.style = (m) => {
    let p = typeof c.style == "function" ? c.style(m) : c.style, g = { ...m.defaultStyle, ...p }, y = typeof e.style == "function" ? e.style({ ...m, defaultStyle: g }) : e.style;
    return { ...g, ...y };
  } : h.style = { ...c.style, ...e.style }), [h, f];
}
var Xd = C.createContext(null);
C.forwardRef(function(n, r) {
  [n, r] = z_(n, r, Xd);
  let { validationErrors: s, validationBehavior: l = "native", children: c, className: f, ...h } = n;
  const m = C.useMemo(() => y_({ className: f }), [f]);
  return /* @__PURE__ */ F.jsx("form", { noValidate: l !== "native", ...h, ref: r, className: m, children: /* @__PURE__ */ F.jsx(Xd.Provider, { value: { ...n, validationBehavior: l }, children: /* @__PURE__ */ F.jsx(rx.Provider, { value: s ?? {}, children: c }) }) });
});
var [VV, R_] = i1({
  name: "CheckboxGroupContext",
  strict: !1
});
function V_(e) {
  const { isSelected: n, disableAnimation: r, ...s } = e;
  return /* @__PURE__ */ F.jsx(
    "svg",
    {
      "aria-hidden": "true",
      fill: "none",
      role: "presentation",
      stroke: "currentColor",
      strokeDasharray: 22,
      strokeDashoffset: n ? 44 : 66,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      style: !r && n ? {
        transition: "stroke-dashoffset 250ms linear 0.2s"
      } : {},
      viewBox: "0 0 17 18",
      ...s,
      children: /* @__PURE__ */ F.jsx("polyline", { points: "1 9 7 14 15 4" })
    }
  );
}
function O_(e) {
  const { isSelected: n, disableAnimation: r, ...s } = e;
  return /* @__PURE__ */ F.jsx("svg", { stroke: "currentColor", strokeWidth: 3, viewBox: "0 0 24 24", ...s, children: /* @__PURE__ */ F.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" }) });
}
function k_(e) {
  const { isIndeterminate: n, ...r } = e, s = n ? O_ : V_;
  return /* @__PURE__ */ F.jsx(s, { ...r });
}
function $_(e, n = []) {
  const r = C.useRef(e);
  return tx(() => {
    r.current = e;
  }), C.useCallback((...s) => {
    var l;
    return (l = r.current) == null ? void 0 : l.call(r, ...s);
  }, n);
}
function j_(e = {}) {
  var n, r, s, l, c, f, h, m;
  const p = h2(), g = R_(), { validationBehavior: y } = lx(Xd) || {}, x = !!g, {
    as: E,
    ref: _,
    value: D = "",
    children: $,
    icon: X,
    name: R,
    isRequired: Z,
    isReadOnly: W = !1,
    autoFocus: Y = !1,
    isSelected: O,
    size: J = (n = g?.size) != null ? n : "md",
    color: H = (r = g?.color) != null ? r : "primary",
    radius: ce = g?.radius,
    lineThrough: me = (s = g?.lineThrough) != null ? s : !1,
    isDisabled: G = (l = g?.isDisabled) != null ? l : !1,
    disableAnimation: q = (f = (c = g?.disableAnimation) != null ? c : p?.disableAnimation) != null ? f : !1,
    validationState: ae,
    isInvalid: U = ae ? ae === "invalid" : (h = g?.isInvalid) != null ? h : !1,
    isIndeterminate: ne = !1,
    validationBehavior: S = x ? g.validationBehavior : (m = y ?? p?.validationBehavior) != null ? m : "native",
    defaultSelected: j,
    classNames: z,
    className: le,
    onValueChange: w,
    validate: Q,
    ...se
  } = e, ie = E || "label", fe = C.useRef(null), Te = C.useRef(null);
  let Se = e.onChange;
  x && (Se = Rd(() => {
    g.groupState.resetValidation();
  }, Se));
  const Me = C.useId(), Be = C.useMemo(
    () => ({
      name: R,
      value: D,
      children: $,
      autoFocus: Y,
      defaultSelected: j,
      isIndeterminate: ne,
      isRequired: Z,
      isInvalid: U,
      isSelected: O,
      isDisabled: G,
      isReadOnly: W,
      "aria-label": l2(se["aria-label"], $),
      "aria-labelledby": se["aria-labelledby"] || Me,
      onChange: w
    }),
    [
      R,
      D,
      $,
      Y,
      j,
      ne,
      Z,
      U,
      O,
      G,
      W,
      se["aria-label"],
      se["aria-labelledby"],
      Me,
      w
    ]
  ), mt = ox(Be), Zt = {
    isInvalid: U,
    isRequired: Z,
    validate: Q,
    validationState: ae,
    validationBehavior: S
  }, {
    inputProps: At,
    isSelected: _t,
    isDisabled: Ht,
    isReadOnly: Nn,
    isPressed: Lr,
    isInvalid: Ji
  } = x ? (
    // eslint-disable-next-line
    M_(
      { ...Be, ...Zt },
      g.groupState,
      Te
    )
  ) : (
    // eslint-disable-next-line
    sx({ ...Be, ...Zt }, mt, Te)
  ), Kt = Ht || Nn, In = ae === "invalid" || U || Ji, Sa = Kt ? !1 : Lr, { hoverProps: A, isHovered: N } = vA({
    isDisabled: At.disabled
  }), { focusProps: K, isFocused: de, isFocusVisible: ue } = yA({
    autoFocus: At.autoFocus
  }), oe = C.useMemo(
    () => b_({
      color: H,
      size: J,
      radius: ce,
      isInvalid: In,
      lineThrough: me,
      isDisabled: Ht,
      disableAnimation: q
    }),
    [H, J, ce, In, me, Ht, q]
  );
  tx(() => {
    if (!Te.current) return;
    const Ct = !!Te.current.checked;
    mt.setSelected(Ct);
  }, [Te.current]);
  const pe = $_(Se), ze = C.useCallback(
    (Ct) => {
      if (Nn || Ht) {
        Ct.preventDefault();
        return;
      }
      pe?.(Ct);
    },
    [Nn, Ht, pe]
  ), $e = su(z?.base, le), Fe = C.useCallback(() => ({
    ref: fe,
    className: oe.base({ class: $e }),
    "data-disabled": ma(Ht),
    "data-selected": ma(_t || ne),
    "data-invalid": ma(In),
    "data-hover": ma(N),
    "data-focus": ma(de),
    "data-pressed": ma(Sa),
    "data-readonly": ma(At.readOnly),
    "data-focus-visible": ma(ue),
    "data-indeterminate": ma(ne),
    ...Vd(A, se)
  }), [
    oe,
    $e,
    Ht,
    _t,
    ne,
    In,
    N,
    de,
    Sa,
    At.readOnly,
    ue,
    A,
    se
  ]), wa = C.useCallback(
    (Ct = {}) => ({
      ...Ct,
      "aria-hidden": !0,
      className: su(oe.wrapper({ class: su(z?.wrapper, Ct?.className) }))
    }),
    [oe, z?.wrapper]
  ), mn = C.useCallback(() => ({
    ref: d2(Te, _),
    ...Vd(At, K),
    className: oe.hiddenInput({ class: z?.hiddenInput }),
    onChange: Rd(At.onChange, ze)
  }), [At, K, ze, z?.hiddenInput]), Wi = C.useCallback(
    () => ({
      id: Me,
      className: oe.label({ class: z?.label })
    }),
    [oe, z?.label, Ht, _t, In]
  ), Ln = C.useCallback(
    () => ({
      isSelected: _t,
      isIndeterminate: ne,
      disableAnimation: q,
      className: oe.icon({ class: z?.icon })
    }),
    [oe, z?.icon, _t, ne, q]
  );
  return {
    Component: ie,
    icon: X,
    children: $,
    isSelected: _t,
    isDisabled: Ht,
    isInvalid: In,
    isFocused: de,
    isHovered: N,
    isFocusVisible: ue,
    getBaseProps: Fe,
    getWrapperProps: wa,
    getInputProps: mn,
    getLabelProps: Wi,
    getIconProps: Ln
  };
}
var ux = bA((e, n) => {
  const {
    Component: r,
    children: s,
    icon: l = /* @__PURE__ */ F.jsx(k_, {}),
    getBaseProps: c,
    getWrapperProps: f,
    getInputProps: h,
    getIconProps: m,
    getLabelProps: p
  } = j_({ ...e, ref: n }), g = typeof l == "function" ? l(m()) : C.cloneElement(l, m());
  return /* @__PURE__ */ F.jsxs(r, { ...c(), children: [
    /* @__PURE__ */ F.jsx("input", { ...h() }),
    /* @__PURE__ */ F.jsx("span", { ...f(), children: g }),
    s && /* @__PURE__ */ F.jsx("span", { ...p(), children: s })
  ] });
});
ux.displayName = "HeroUI.Checkbox";
var N_ = ux, cd = { exports: {} }, fd = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Wy;
function L_() {
  if (Wy) return fd;
  Wy = 1;
  var e = /* @__PURE__ */ Cu();
  function n(y, x) {
    return y === x && (y !== 0 || 1 / y === 1 / x) || y !== y && x !== x;
  }
  var r = typeof Object.is == "function" ? Object.is : n, s = e.useState, l = e.useEffect, c = e.useLayoutEffect, f = e.useDebugValue;
  function h(y, x) {
    var E = x(), _ = s({ inst: { value: E, getSnapshot: x } }), D = _[0].inst, $ = _[1];
    return c(
      function() {
        D.value = E, D.getSnapshot = x, m(D) && $({ inst: D });
      },
      [y, E, x]
    ), l(
      function() {
        return m(D) && $({ inst: D }), y(function() {
          m(D) && $({ inst: D });
        });
      },
      [y]
    ), f(E), E;
  }
  function m(y) {
    var x = y.getSnapshot;
    y = y.value;
    try {
      var E = x();
      return !r(y, E);
    } catch {
      return !0;
    }
  }
  function p(y, x) {
    return x();
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : h;
  return fd.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g, fd;
}
var eb;
function U_() {
  return eb || (eb = 1, cd.exports = /* @__PURE__ */ L_()), cd.exports;
}
var B_ = /* @__PURE__ */ U_();
function tb(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function P_(...e) {
  return (n) => {
    let r = !1;
    const s = e.map((l) => {
      const c = tb(l, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let l = 0; l < s.length; l++) {
          const c = s[l];
          typeof c == "function" ? c() : tb(e[l], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function cx(e) {
  const n = /* @__PURE__ */ Z_(e), r = C.forwardRef((s, l) => {
    const { children: c, ...f } = s, h = C.Children.toArray(c), m = h.find(G_);
    if (m) {
      const p = m.props.children, g = h.map((y) => y === m ? C.Children.count(p) > 1 ? C.Children.only(null) : C.isValidElement(p) ? p.props.children : null : y);
      return /* @__PURE__ */ F.jsx(n, { ...f, ref: l, children: C.isValidElement(p) ? C.cloneElement(p, void 0, g) : null });
    }
    return /* @__PURE__ */ F.jsx(n, { ...f, ref: l, children: c });
  });
  return r.displayName = `${e}.Slot`, r;
}
var fx = /* @__PURE__ */ cx("Slot");
// @__NO_SIDE_EFFECTS__
function Z_(e) {
  const n = C.forwardRef((r, s) => {
    const { children: l, ...c } = r;
    if (C.isValidElement(l)) {
      const f = Y_(l), h = q_(c, l.props);
      return l.type !== C.Fragment && (h.ref = s ? P_(s, f) : f), C.cloneElement(l, h);
    }
    return C.Children.count(l) > 1 ? C.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var H_ = Symbol("radix.slottable");
function G_(e) {
  return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === H_;
}
function q_(e, n) {
  const r = { ...n };
  for (const s in n) {
    const l = e[s], c = n[s];
    /^on[A-Z]/.test(s) ? l && c ? r[s] = (...h) => {
      const m = c(...h);
      return l(...h), m;
    } : l && (r[s] = l) : s === "style" ? r[s] = { ...l, ...c } : s === "className" && (r[s] = [l, c].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Y_(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const nb = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ab = Dh, F_ = (e, n) => (r) => {
  var s;
  if (n?.variants == null) return ab(e, r?.class, r?.className);
  const { variants: l, defaultVariants: c } = n, f = Object.keys(l).map((p) => {
    const g = r?.[p], y = c?.[p];
    if (g === null) return null;
    const x = nb(g) || nb(y);
    return l[p][x];
  }), h = r && Object.entries(r).reduce((p, g) => {
    let [y, x] = g;
    return x === void 0 || (p[y] = x), p;
  }, {}), m = n == null || (s = n.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((p, g) => {
    let { class: y, className: x, ...E } = g;
    return Object.entries(E).every((_) => {
      let [D, $] = _;
      return Array.isArray($) ? $.includes({
        ...c,
        ...h
      }[D]) : {
        ...c,
        ...h
      }[D] === $;
    }) ? [
      ...p,
      y,
      x
    ] : p;
  }, []);
  return ab(e, f, m, r?.class, r?.className);
}, Hh = "-", X_ = (e) => {
  const n = Q_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (f) => {
      const h = f.split(Hh);
      return h[0] === "" && h.length !== 1 && h.shift(), dx(h, n) || K_(f);
    },
    getConflictingClassGroupIds: (f, h) => {
      const m = r[f] || [];
      return h && s[f] ? [...m, ...s[f]] : m;
    }
  };
}, dx = (e, n) => {
  if (e.length === 0)
    return n.classGroupId;
  const r = e[0], s = n.nextPart.get(r), l = s ? dx(e.slice(1), s) : void 0;
  if (l)
    return l;
  if (n.validators.length === 0)
    return;
  const c = e.join(Hh);
  return n.validators.find(({
    validator: f
  }) => f(c))?.classGroupId;
}, rb = /^\[(.+)\]$/, K_ = (e) => {
  if (rb.test(e)) {
    const n = rb.exec(e)[1], r = n?.substring(0, n.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Q_ = (e) => {
  const {
    theme: n,
    classGroups: r
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const l in r)
    Kd(r[l], s, l, n);
  return s;
}, Kd = (e, n, r, s) => {
  e.forEach((l) => {
    if (typeof l == "string") {
      const c = l === "" ? n : ib(n, l);
      c.classGroupId = r;
      return;
    }
    if (typeof l == "function") {
      if (I_(l)) {
        Kd(l(s), n, r, s);
        return;
      }
      n.validators.push({
        validator: l,
        classGroupId: r
      });
      return;
    }
    Object.entries(l).forEach(([c, f]) => {
      Kd(f, ib(n, c), r, s);
    });
  });
}, ib = (e, n) => {
  let r = e;
  return n.split(Hh).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, I_ = (e) => e.isThemeGetter, J_ = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const l = (c, f) => {
    r.set(c, f), n++, n > e && (n = 0, s = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let f = r.get(c);
      if (f !== void 0)
        return f;
      if ((f = s.get(c)) !== void 0)
        return l(c, f), f;
    },
    set(c, f) {
      r.has(c) ? r.set(c, f) : l(c, f);
    }
  };
}, Qd = "!", Id = ":", W_ = Id.length, e3 = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: r
  } = e;
  let s = (l) => {
    const c = [];
    let f = 0, h = 0, m = 0, p;
    for (let _ = 0; _ < l.length; _++) {
      let D = l[_];
      if (f === 0 && h === 0) {
        if (D === Id) {
          c.push(l.slice(m, _)), m = _ + W_;
          continue;
        }
        if (D === "/") {
          p = _;
          continue;
        }
      }
      D === "[" ? f++ : D === "]" ? f-- : D === "(" ? h++ : D === ")" && h--;
    }
    const g = c.length === 0 ? l : l.substring(m), y = t3(g), x = y !== g, E = p && p > m ? p - m : void 0;
    return {
      modifiers: c,
      hasImportantModifier: x,
      baseClassName: y,
      maybePostfixModifierPosition: E
    };
  };
  if (n) {
    const l = n + Id, c = s;
    s = (f) => f.startsWith(l) ? c(f.substring(l.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: f,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const l = s;
    s = (c) => r({
      className: c,
      parseClassName: l
    });
  }
  return s;
}, t3 = (e) => e.endsWith(Qd) ? e.substring(0, e.length - 1) : e.startsWith(Qd) ? e.substring(1) : e, n3 = (e) => {
  const n = Object.fromEntries(e.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const l = [];
    let c = [];
    return s.forEach((f) => {
      f[0] === "[" || n[f] ? (l.push(...c.sort(), f), c = []) : c.push(f);
    }), l.push(...c.sort()), l;
  };
}, a3 = (e) => ({
  cache: J_(e.cacheSize),
  parseClassName: e3(e),
  sortModifiers: n3(e),
  ...X_(e)
}), r3 = /\s+/, i3 = (e, n) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: l,
    sortModifiers: c
  } = n, f = [], h = e.trim().split(r3);
  let m = "";
  for (let p = h.length - 1; p >= 0; p -= 1) {
    const g = h[p], {
      isExternal: y,
      modifiers: x,
      hasImportantModifier: E,
      baseClassName: _,
      maybePostfixModifierPosition: D
    } = r(g);
    if (y) {
      m = g + (m.length > 0 ? " " + m : m);
      continue;
    }
    let $ = !!D, X = s($ ? _.substring(0, D) : _);
    if (!X) {
      if (!$) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (X = s(_), !X) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      $ = !1;
    }
    const R = c(x).join(":"), Z = E ? R + Qd : R, W = Z + X;
    if (f.includes(W))
      continue;
    f.push(W);
    const Y = l(X, $);
    for (let O = 0; O < Y.length; ++O) {
      const J = Y[O];
      f.push(Z + J);
    }
    m = g + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function s3() {
  let e = 0, n, r, s = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (r = hx(n)) && (s && (s += " "), s += r);
  return s;
}
const hx = (e) => {
  if (typeof e == "string")
    return e;
  let n, r = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (n = hx(e[s])) && (r && (r += " "), r += n);
  return r;
};
function o3(e, ...n) {
  let r, s, l, c = f;
  function f(m) {
    const p = n.reduce((g, y) => y(g), e());
    return r = a3(p), s = r.cache.get, l = r.cache.set, c = h, h(m);
  }
  function h(m) {
    const p = s(m);
    if (p)
      return p;
    const g = i3(m, r);
    return l(m, g), g;
  }
  return function() {
    return c(s3.apply(null, arguments));
  };
}
const wt = (e) => {
  const n = (r) => r[e] || [];
  return n.isThemeGetter = !0, n;
}, mx = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, px = /^\((?:(\w[\w-]*):)?(.+)\)$/i, l3 = /^\d+\/\d+$/, u3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, c3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, f3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, d3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, h3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _i = (e) => l3.test(e), ke = (e) => !!e && !Number.isNaN(Number(e)), Fa = (e) => !!e && Number.isInteger(Number(e)), dd = (e) => e.endsWith("%") && ke(e.slice(0, -1)), pa = (e) => u3.test(e), m3 = () => !0, p3 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  c3.test(e) && !f3.test(e)
), gx = () => !1, g3 = (e) => d3.test(e), v3 = (e) => h3.test(e), y3 = (e) => !ve(e) && !ye(e), b3 = (e) => Yi(e, bx, gx), ve = (e) => mx.test(e), Er = (e) => Yi(e, xx, p3), hd = (e) => Yi(e, E3, ke), sb = (e) => Yi(e, vx, gx), x3 = (e) => Yi(e, yx, v3), Ql = (e) => Yi(e, Sx, g3), ye = (e) => px.test(e), Js = (e) => Fi(e, xx), S3 = (e) => Fi(e, A3), ob = (e) => Fi(e, vx), w3 = (e) => Fi(e, bx), T3 = (e) => Fi(e, yx), Il = (e) => Fi(e, Sx, !0), Yi = (e, n, r) => {
  const s = mx.exec(e);
  return s ? s[1] ? n(s[1]) : r(s[2]) : !1;
}, Fi = (e, n, r = !1) => {
  const s = px.exec(e);
  return s ? s[1] ? n(s[1]) : r : !1;
}, vx = (e) => e === "position" || e === "percentage", yx = (e) => e === "image" || e === "url", bx = (e) => e === "length" || e === "size" || e === "bg-size", xx = (e) => e === "length", E3 = (e) => e === "number", A3 = (e) => e === "family-name", Sx = (e) => e === "shadow", _3 = () => {
  const e = wt("color"), n = wt("font"), r = wt("text"), s = wt("font-weight"), l = wt("tracking"), c = wt("leading"), f = wt("breakpoint"), h = wt("container"), m = wt("spacing"), p = wt("radius"), g = wt("shadow"), y = wt("inset-shadow"), x = wt("text-shadow"), E = wt("drop-shadow"), _ = wt("blur"), D = wt("perspective"), $ = wt("aspect"), X = wt("ease"), R = wt("animate"), Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], Y = () => [...W(), ye, ve], O = () => ["auto", "hidden", "clip", "visible", "scroll"], J = () => ["auto", "contain", "none"], H = () => [ye, ve, m], ce = () => [_i, "full", "auto", ...H()], me = () => [Fa, "none", "subgrid", ye, ve], G = () => ["auto", {
    span: ["full", Fa, ye, ve]
  }, Fa, ye, ve], q = () => [Fa, "auto", ye, ve], ae = () => ["auto", "min", "max", "fr", ye, ve], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], S = () => ["auto", ...H()], j = () => [_i, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()], z = () => [e, ye, ve], le = () => [...W(), ob, sb, {
    position: [ye, ve]
  }], w = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Q = () => ["auto", "cover", "contain", w3, b3, {
    size: [ye, ve]
  }], se = () => [dd, Js, Er], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    ye,
    ve
  ], fe = () => ["", ke, Js, Er], Te = () => ["solid", "dashed", "dotted", "double"], Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Me = () => [ke, dd, ob, sb], Be = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    _,
    ye,
    ve
  ], mt = () => ["none", ke, ye, ve], Zt = () => ["none", ke, ye, ve], At = () => [ke, ye, ve], _t = () => [_i, "full", ...H()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pa],
      breakpoint: [pa],
      color: [m3],
      container: [pa],
      "drop-shadow": [pa],
      ease: ["in", "out", "in-out"],
      font: [y3],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [pa],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [pa],
      shadow: [pa],
      spacing: ["px", ke],
      text: [pa],
      "text-shadow": [pa],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", _i, ve, ye, $]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ke, ve, ye, h]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Z()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: Y()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: ce()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": ce()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": ce()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: ce()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: ce()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: ce()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: ce()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: ce()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: ce()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Fa, "auto", ye, ve]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [_i, "full", "auto", h, ...H()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ke, _i, "auto", "initial", "none", ve]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ke, ye, ve]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ke, ye, ve]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Fa, "first", "last", "none", ye, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": me()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: G()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": me()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: G()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ae()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ae()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: H()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": H()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": H()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...U(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ne(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ne()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...U()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": U()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ne(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ne()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: H()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: H()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: H()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: H()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: H()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: H()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: H()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: H()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: H()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: S()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: S()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: S()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: S()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: S()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: S()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: S()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: S()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: S()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": H()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": H()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: j()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [h, "screen", ...j()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          h,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...j()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          h,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [f]
          },
          ...j()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...j()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...j()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...j()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Js, Er]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [s, ye, hd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", dd, ve]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [S3, ve, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [l, ye, ve]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ke, "none", ye, hd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
          ...H()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ye, ve]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", ye, ve]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: z()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: z()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Te(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ke, "from-font", "auto", ye, Er]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: z()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ke, "auto", ye, ve]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: H()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ye, ve]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ye, ve]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: le()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: w()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Q()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Fa, ye, ve],
          radial: ["", ye, ve],
          conic: [Fa, ye, ve]
        }, T3, x3]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: z()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: se()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: se()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: se()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: z()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: z()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: z()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ie()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ie()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ie()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ie()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ie()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ie()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ie()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ie()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ie()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ie()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ie()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ie()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ie()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ie()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ie()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: fe()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": fe()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": fe()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": fe()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": fe()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": fe()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": fe()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": fe()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": fe()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": fe()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": fe()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Te(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Te(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: z()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": z()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": z()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": z()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": z()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": z()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": z()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": z()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": z()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: z()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Te(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ke, ye, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ke, Js, Er]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: z()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Il,
          Ql
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: z()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, Il, Ql]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": z()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: fe()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: z()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ke, Er]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": z()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": fe()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": z()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", x, Il, Ql]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": z()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ke, ye, ve]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Se()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ke]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Me()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Me()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Me()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Me()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Me()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Me()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Me()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Me()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Me()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Me()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Me()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Me()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Me()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Me()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": z()
      }],
      "mask-image-radial": [{
        "mask-radial": [ye, ve]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Me()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Me()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": z()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": z()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": W()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ke]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Me()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Me()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": z()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": z()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: le()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: w()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Q()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", ye, ve]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ye,
          ve
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Be()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ke, ye, ve]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ke, ye, ve]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          E,
          Il,
          Ql
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": z()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ke, ye, ve]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ke, ye, ve]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ke, ye, ve]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ke, ye, ve]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ke, ye, ve]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ye,
          ve
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Be()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ke, ye, ve]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ke, ye, ve]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ke, ye, ve]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ke, ye, ve]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ke, ye, ve]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ke, ye, ve]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ke, ye, ve]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ke, ye, ve]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": H()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": H()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": H()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ye, ve]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ke, "initial", ye, ve]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", X, ye, ve]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ke, ye, ve]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", R, ye, ve]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [D, ye, ve]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Y()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: mt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": mt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": mt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": mt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Zt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Zt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Zt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Zt()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: At()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": At()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": At()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ye, ve, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Y()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: _t()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": _t()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": _t()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": _t()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: z()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: z()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ye, ve]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": H()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": H()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": H()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": H()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": H()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": H()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": H()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": H()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": H()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": H()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": H()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": H()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": H()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": H()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": H()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": H()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": H()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": H()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ye, ve]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...z()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ke, Js, Er, hd]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...z()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, C3 = /* @__PURE__ */ o3(_3);
function er(...e) {
  return C3(Dh(e));
}
const M3 = F_(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        night: "bg-sign-with-night-bg text-primary shadow-xs hover:!bg-sign-with-night-bg hover:!text-primary",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Vi({
  className: e,
  variant: n,
  size: r,
  asChild: s = !1,
  ...l
}) {
  const c = s ? fx : "button";
  return /* @__PURE__ */ F.jsx(
    c,
    {
      "data-slot": "button",
      className: er(M3({ variant: n, size: r, className: e })),
      ...l
    }
  );
}
function lb({ className: e, ...n }) {
  return /* @__PURE__ */ F.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: er("leading-none font-semibold", e),
      ...n
    }
  );
}
function md({ className: e, ...n }) {
  return /* @__PURE__ */ F.jsx(
    "div",
    {
      "data-slot": "card-description",
      className: er("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function D3(e, n = []) {
  let r = [];
  function s(c, f) {
    const h = C.createContext(f), m = r.length;
    r = [...r, f];
    const p = (y) => {
      const { scope: x, children: E, ..._ } = y, D = x?.[e]?.[m] || h, $ = C.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ F.jsx(D.Provider, { value: $, children: E });
    };
    p.displayName = c + "Provider";
    function g(y, x) {
      const E = x?.[e]?.[m] || h, _ = C.useContext(E);
      if (_) return _;
      if (f !== void 0) return f;
      throw new Error(`\`${y}\` must be used within \`${c}\``);
    }
    return [p, g];
  }
  const l = () => {
    const c = r.map((f) => C.createContext(f));
    return function(h) {
      const m = h?.[e] || c;
      return C.useMemo(
        () => ({ [`__scope${e}`]: { ...h, [e]: m } }),
        [h, m]
      );
    };
  };
  return l.scopeName = e, [s, z3(l, ...n)];
}
function z3(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const r = () => {
    const s = e.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(c) {
      const f = s.reduce((h, { useScope: m, scopeName: p }) => {
        const y = m(c)[`__scope${p}`];
        return { ...h, ...y };
      }, {});
      return C.useMemo(() => ({ [`__scope${n.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = n.scopeName, r;
}
function R3(e) {
  const n = C.useRef(e);
  return C.useEffect(() => {
    n.current = e;
  }), C.useMemo(() => (...r) => n.current?.(...r), []);
}
var Jd = globalThis?.document ? C.useLayoutEffect : () => {
}, V3 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Gh = V3.reduce((e, n) => {
  const r = /* @__PURE__ */ cx(`Primitive.${n}`), s = C.forwardRef((l, c) => {
    const { asChild: f, ...h } = l, m = f ? r : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ F.jsx(m, { ...h, ref: c });
  });
  return s.displayName = `Primitive.${n}`, { ...e, [n]: s };
}, {});
function O3() {
  return B_.useSyncExternalStore(
    k3,
    () => !0,
    () => !1
  );
}
function k3() {
  return () => {
  };
}
var qh = "Avatar", [$3, OV] = D3(qh), [j3, wx] = $3(qh), Tx = C.forwardRef(
  (e, n) => {
    const { __scopeAvatar: r, ...s } = e, [l, c] = C.useState("idle");
    return /* @__PURE__ */ F.jsx(
      j3,
      {
        scope: r,
        imageLoadingStatus: l,
        onImageLoadingStatusChange: c,
        children: /* @__PURE__ */ F.jsx(Gh.span, { ...s, ref: n })
      }
    );
  }
);
Tx.displayName = qh;
var Ex = "AvatarImage", Ax = C.forwardRef(
  (e, n) => {
    const { __scopeAvatar: r, src: s, onLoadingStatusChange: l = () => {
    }, ...c } = e, f = wx(Ex, r), h = N3(s, c), m = R3((p) => {
      l(p), f.onImageLoadingStatusChange(p);
    });
    return Jd(() => {
      h !== "idle" && m(h);
    }, [h, m]), h === "loaded" ? /* @__PURE__ */ F.jsx(Gh.img, { ...c, ref: n, src: s }) : null;
  }
);
Ax.displayName = Ex;
var _x = "AvatarFallback", Cx = C.forwardRef(
  (e, n) => {
    const { __scopeAvatar: r, delayMs: s, ...l } = e, c = wx(_x, r), [f, h] = C.useState(s === void 0);
    return C.useEffect(() => {
      if (s !== void 0) {
        const m = window.setTimeout(() => h(!0), s);
        return () => window.clearTimeout(m);
      }
    }, [s]), f && c.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ F.jsx(Gh.span, { ...l, ref: n }) : null;
  }
);
Cx.displayName = _x;
function ub(e, n) {
  return e ? n ? (e.src !== n && (e.src = n), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function N3(e, { referrerPolicy: n, crossOrigin: r }) {
  const s = O3(), l = C.useRef(null), c = s ? (l.current || (l.current = new window.Image()), l.current) : null, [f, h] = C.useState(
    () => ub(c, e)
  );
  return Jd(() => {
    h(ub(c, e));
  }, [c, e]), Jd(() => {
    const m = (y) => () => {
      h(y);
    };
    if (!c) return;
    const p = m("loaded"), g = m("error");
    return c.addEventListener("load", p), c.addEventListener("error", g), n && (c.referrerPolicy = n), typeof r == "string" && (c.crossOrigin = r), () => {
      c.removeEventListener("load", p), c.removeEventListener("error", g);
    };
  }, [c, r, n]), f;
}
var L3 = Tx, U3 = Ax, B3 = Cx;
function P3({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ F.jsx(
    L3,
    {
      "data-slot": "avatar",
      className: er(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...n
    }
  );
}
function Z3({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ F.jsx(
    U3,
    {
      "data-slot": "avatar-image",
      className: er("aspect-square size-full", e),
      ...n
    }
  );
}
function H3({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ F.jsx(
    B3,
    {
      "data-slot": "avatar-fallback",
      className: er(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...n
    }
  );
}
const Yh = C.createContext({});
function Fh(e) {
  const n = C.useRef(null);
  return n.current === null && (n.current = e()), n.current;
}
const Xh = typeof window < "u", Mx = Xh ? C.useLayoutEffect : C.useEffect, Ru = /* @__PURE__ */ C.createContext(null), Jl = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function G3(e, n) {
  let r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l = !1, c = !1;
  const f = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function m(g) {
    f.has(g) && (p.schedule(g), e()), g(h);
  }
  const p = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (g, y = !1, x = !1) => {
      const _ = x && l ? r : s;
      return y && f.add(g), _.has(g) || _.add(g), g;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (g) => {
      s.delete(g), f.delete(g);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (g) => {
      if (h = g, l) {
        c = !0;
        return;
      }
      l = !0, [r, s] = [s, r], r.forEach(m), r.clear(), l = !1, c && (c = !1, p.process(g));
    }
  };
  return p;
}
const q3 = 40;
function Dx(e, n) {
  let r = !1, s = !0;
  const l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => r = !0, f = Jl.reduce((Z, W) => (Z[W] = G3(c), Z), {}), { setup: h, read: m, resolveKeyframes: p, preUpdate: g, update: y, preRender: x, render: E, postRender: _ } = f, D = () => {
    const Z = xa.useManualTiming ? l.timestamp : performance.now();
    r = !1, xa.useManualTiming || (l.delta = s ? 1e3 / 60 : Math.max(Math.min(Z - l.timestamp, q3), 1)), l.timestamp = Z, l.isProcessing = !0, h.process(l), m.process(l), p.process(l), g.process(l), y.process(l), x.process(l), E.process(l), _.process(l), l.isProcessing = !1, r && n && (s = !1, e(D));
  }, $ = () => {
    r = !0, s = !0, l.isProcessing || e(D);
  };
  return { schedule: Jl.reduce((Z, W) => {
    const Y = f[W];
    return Z[W] = (O, J = !1, H = !1) => (r || $(), Y.schedule(O, J, H)), Z;
  }, {}), cancel: (Z) => {
    for (let W = 0; W < Jl.length; W++)
      f[Jl[W]].cancel(Z);
  }, state: l, steps: f };
}
const { schedule: tt, cancel: Ia, state: Nt, steps: pd } = /* @__PURE__ */ Dx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : zn, !0);
let lu;
function Y3() {
  lu = void 0;
}
const an = {
  now: () => (lu === void 0 && an.set(Nt.isProcessing || xa.useManualTiming ? Nt.timestamp : performance.now()), lu),
  set: (e) => {
    lu = e, queueMicrotask(Y3);
  }
}, zx = (e) => (n) => typeof n == "string" && n.startsWith(e), Kh = /* @__PURE__ */ zx("--"), F3 = /* @__PURE__ */ zx("var(--"), Qh = (e) => F3(e) ? X3.test(e.split("/*")[0].trim()) : !1, X3 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Xi = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, bo = {
  ...Xi,
  transform: (e) => ba(0, 1, e)
}, Wl = {
  ...Xi,
  default: 1
}, io = (e) => Math.round(e * 1e5) / 1e5, Ih = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function K3(e) {
  return e == null;
}
const Q3 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Jh = (e, n) => (r) => !!(typeof r == "string" && Q3.test(r) && r.startsWith(e) || n && !K3(r) && Object.prototype.hasOwnProperty.call(r, n)), Rx = (e, n, r) => (s) => {
  if (typeof s != "string")
    return s;
  const [l, c, f, h] = s.match(Ih);
  return {
    [e]: parseFloat(l),
    [n]: parseFloat(c),
    [r]: parseFloat(f),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, I3 = (e) => ba(0, 255, e), gd = {
  ...Xi,
  transform: (e) => Math.round(I3(e))
}, Cr = {
  test: /* @__PURE__ */ Jh("rgb", "red"),
  parse: /* @__PURE__ */ Rx("red", "green", "blue"),
  transform: ({ red: e, green: n, blue: r, alpha: s = 1 }) => "rgba(" + gd.transform(e) + ", " + gd.transform(n) + ", " + gd.transform(r) + ", " + io(bo.transform(s)) + ")"
};
function J3(e) {
  let n = "", r = "", s = "", l = "";
  return e.length > 5 ? (n = e.substring(1, 3), r = e.substring(3, 5), s = e.substring(5, 7), l = e.substring(7, 9)) : (n = e.substring(1, 2), r = e.substring(2, 3), s = e.substring(3, 4), l = e.substring(4, 5), n += n, r += r, s += s, l += l), {
    red: parseInt(n, 16),
    green: parseInt(r, 16),
    blue: parseInt(s, 16),
    alpha: l ? parseInt(l, 16) / 255 : 1
  };
}
const Wd = {
  test: /* @__PURE__ */ Jh("#"),
  parse: J3,
  transform: Cr.transform
}, Mo = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (n) => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
  parse: parseFloat,
  transform: (n) => `${n}${e}`
}), Xa = /* @__PURE__ */ Mo("deg"), Kn = /* @__PURE__ */ Mo("%"), Ce = /* @__PURE__ */ Mo("px"), W3 = /* @__PURE__ */ Mo("vh"), e4 = /* @__PURE__ */ Mo("vw"), cb = {
  ...Kn,
  parse: (e) => Kn.parse(e) / 100,
  transform: (e) => Kn.transform(e * 100)
}, ki = {
  test: /* @__PURE__ */ Jh("hsl", "hue"),
  parse: /* @__PURE__ */ Rx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: n, lightness: r, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + Kn.transform(io(n)) + ", " + Kn.transform(io(r)) + ", " + io(bo.transform(s)) + ")"
}, bt = {
  test: (e) => Cr.test(e) || Wd.test(e) || ki.test(e),
  parse: (e) => Cr.test(e) ? Cr.parse(e) : ki.test(e) ? ki.parse(e) : Wd.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Cr.transform(e) : ki.transform(e),
  getAnimatableNone: (e) => {
    const n = bt.parse(e);
    return n.alpha = 0, bt.transform(n);
  }
}, t4 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function n4(e) {
  return isNaN(e) && typeof e == "string" && (e.match(Ih)?.length || 0) + (e.match(t4)?.length || 0) > 0;
}
const Vx = "number", Ox = "color", a4 = "var", r4 = "var(", fb = "${}", i4 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function xo(e) {
  const n = e.toString(), r = [], s = {
    color: [],
    number: [],
    var: []
  }, l = [];
  let c = 0;
  const h = n.replace(i4, (m) => (bt.test(m) ? (s.color.push(c), l.push(Ox), r.push(bt.parse(m))) : m.startsWith(r4) ? (s.var.push(c), l.push(a4), r.push(m)) : (s.number.push(c), l.push(Vx), r.push(parseFloat(m))), ++c, fb)).split(fb);
  return { values: r, split: h, indexes: s, types: l };
}
function kx(e) {
  return xo(e).values;
}
function $x(e) {
  const { split: n, types: r } = xo(e), s = n.length;
  return (l) => {
    let c = "";
    for (let f = 0; f < s; f++)
      if (c += n[f], l[f] !== void 0) {
        const h = r[f];
        h === Vx ? c += io(l[f]) : h === Ox ? c += bt.transform(l[f]) : c += l[f];
      }
    return c;
  };
}
const s4 = (e) => typeof e == "number" ? 0 : bt.test(e) ? bt.getAnimatableNone(e) : e;
function o4(e) {
  const n = kx(e);
  return $x(e)(n.map(s4));
}
const Ja = {
  test: n4,
  parse: kx,
  createTransformer: $x,
  getAnimatableNone: o4
};
function vd(e, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
}
function l4({ hue: e, saturation: n, lightness: r, alpha: s }) {
  e /= 360, n /= 100, r /= 100;
  let l = 0, c = 0, f = 0;
  if (!n)
    l = c = f = r;
  else {
    const h = r < 0.5 ? r * (1 + n) : r + n - r * n, m = 2 * r - h;
    l = vd(m, h, e + 1 / 3), c = vd(m, h, e), f = vd(m, h, e - 1 / 3);
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: s
  };
}
function gu(e, n) {
  return (r) => r > 0 ? n : e;
}
const rt = (e, n, r) => e + (n - e) * r, yd = (e, n, r) => {
  const s = e * e, l = r * (n * n - s) + s;
  return l < 0 ? 0 : Math.sqrt(l);
}, u4 = [Wd, Cr, ki], c4 = (e) => u4.find((n) => n.test(e));
function db(e) {
  const n = c4(e);
  if (!n)
    return !1;
  let r = n.parse(e);
  return n === ki && (r = l4(r)), r;
}
const hb = (e, n) => {
  const r = db(e), s = db(n);
  if (!r || !s)
    return gu(e, n);
  const l = { ...r };
  return (c) => (l.red = yd(r.red, s.red, c), l.green = yd(r.green, s.green, c), l.blue = yd(r.blue, s.blue, c), l.alpha = rt(r.alpha, s.alpha, c), Cr.transform(l));
}, eh = /* @__PURE__ */ new Set(["none", "hidden"]);
function f4(e, n) {
  return eh.has(e) ? (r) => r <= 0 ? e : n : (r) => r >= 1 ? n : e;
}
function d4(e, n) {
  return (r) => rt(e, n, r);
}
function Wh(e) {
  return typeof e == "number" ? d4 : typeof e == "string" ? Qh(e) ? gu : bt.test(e) ? hb : p4 : Array.isArray(e) ? jx : typeof e == "object" ? bt.test(e) ? hb : h4 : gu;
}
function jx(e, n) {
  const r = [...e], s = r.length, l = e.map((c, f) => Wh(c)(c, n[f]));
  return (c) => {
    for (let f = 0; f < s; f++)
      r[f] = l[f](c);
    return r;
  };
}
function h4(e, n) {
  const r = { ...e, ...n }, s = {};
  for (const l in r)
    e[l] !== void 0 && n[l] !== void 0 && (s[l] = Wh(e[l])(e[l], n[l]));
  return (l) => {
    for (const c in s)
      r[c] = s[c](l);
    return r;
  };
}
function m4(e, n) {
  const r = [], s = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < n.values.length; l++) {
    const c = n.types[l], f = e.indexes[c][s[c]], h = e.values[f] ?? 0;
    r[l] = h, s[c]++;
  }
  return r;
}
const p4 = (e, n) => {
  const r = Ja.createTransformer(n), s = xo(e), l = xo(n);
  return s.indexes.var.length === l.indexes.var.length && s.indexes.color.length === l.indexes.color.length && s.indexes.number.length >= l.indexes.number.length ? eh.has(e) && !l.values.length || eh.has(n) && !s.values.length ? f4(e, n) : _o(jx(m4(s, l), l.values), r) : gu(e, n);
};
function Nx(e, n, r) {
  return typeof e == "number" && typeof n == "number" && typeof r == "number" ? rt(e, n, r) : Wh(e)(e, n);
}
const g4 = (e) => {
  const n = ({ timestamp: r }) => e(r);
  return {
    start: (r = !0) => tt.update(n, r),
    stop: () => Ia(n),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Nt.isProcessing ? Nt.timestamp : an.now()
  };
}, Lx = (e, n, r = 10) => {
  let s = "";
  const l = Math.max(Math.round(n / r), 2);
  for (let c = 0; c < l; c++)
    s += Math.round(e(c / (l - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, vu = 2e4;
function em(e) {
  let n = 0;
  const r = 50;
  let s = e.next(n);
  for (; !s.done && n < vu; )
    n += r, s = e.next(n);
  return n >= vu ? 1 / 0 : n;
}
function v4(e, n = 100, r) {
  const s = r({ ...e, keyframes: [0, n] }), l = Math.min(em(s), vu);
  return {
    type: "keyframes",
    ease: (c) => s.next(l * c).value / n,
    duration: /* @__PURE__ */ Xn(l)
  };
}
const y4 = 5;
function Ux(e, n, r) {
  const s = Math.max(n - y4, 0);
  return b1(r - e(s), n - s);
}
const lt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, bd = 1e-3;
function b4({ duration: e = lt.duration, bounce: n = lt.bounce, velocity: r = lt.velocity, mass: s = lt.mass }) {
  let l, c, f = 1 - n;
  f = ba(lt.minDamping, lt.maxDamping, f), e = ba(lt.minDuration, lt.maxDuration, /* @__PURE__ */ Xn(e)), f < 1 ? (l = (p) => {
    const g = p * f, y = g * e, x = g - r, E = th(p, f), _ = Math.exp(-y);
    return bd - x / E * _;
  }, c = (p) => {
    const y = p * f * e, x = y * r + r, E = Math.pow(f, 2) * Math.pow(p, 2) * e, _ = Math.exp(-y), D = th(Math.pow(p, 2), f);
    return (-l(p) + bd > 0 ? -1 : 1) * ((x - E) * _) / D;
  }) : (l = (p) => {
    const g = Math.exp(-p * e), y = (p - r) * e + 1;
    return -bd + g * y;
  }, c = (p) => {
    const g = Math.exp(-p * e), y = (r - p) * (e * e);
    return g * y;
  });
  const h = 5 / e, m = S4(l, c, h);
  if (e = /* @__PURE__ */ Fn(e), isNaN(m))
    return {
      stiffness: lt.stiffness,
      damping: lt.damping,
      duration: e
    };
  {
    const p = Math.pow(m, 2) * s;
    return {
      stiffness: p,
      damping: f * 2 * Math.sqrt(s * p),
      duration: e
    };
  }
}
const x4 = 12;
function S4(e, n, r) {
  let s = r;
  for (let l = 1; l < x4; l++)
    s = s - e(s) / n(s);
  return s;
}
function th(e, n) {
  return e * Math.sqrt(1 - n * n);
}
const w4 = ["duration", "bounce"], T4 = ["stiffness", "damping", "mass"];
function mb(e, n) {
  return n.some((r) => e[r] !== void 0);
}
function E4(e) {
  let n = {
    velocity: lt.velocity,
    stiffness: lt.stiffness,
    damping: lt.damping,
    mass: lt.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!mb(e, T4) && mb(e, w4))
    if (e.visualDuration) {
      const r = e.visualDuration, s = 2 * Math.PI / (r * 1.2), l = s * s, c = 2 * ba(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
      n = {
        ...n,
        mass: lt.mass,
        stiffness: l,
        damping: c
      };
    } else {
      const r = b4(e);
      n = {
        ...n,
        ...r,
        mass: lt.mass
      }, n.isResolvedFromDuration = !0;
    }
  return n;
}
function yu(e = lt.visualDuration, n = lt.bounce) {
  const r = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: n
  } : e;
  let { restSpeed: s, restDelta: l } = r;
  const c = r.keyframes[0], f = r.keyframes[r.keyframes.length - 1], h = { done: !1, value: c }, { stiffness: m, damping: p, mass: g, duration: y, velocity: x, isResolvedFromDuration: E } = E4({
    ...r,
    velocity: -/* @__PURE__ */ Xn(r.velocity || 0)
  }), _ = x || 0, D = p / (2 * Math.sqrt(m * g)), $ = f - c, X = /* @__PURE__ */ Xn(Math.sqrt(m / g)), R = Math.abs($) < 5;
  s || (s = R ? lt.restSpeed.granular : lt.restSpeed.default), l || (l = R ? lt.restDelta.granular : lt.restDelta.default);
  let Z;
  if (D < 1) {
    const Y = th(X, D);
    Z = (O) => {
      const J = Math.exp(-D * X * O);
      return f - J * ((_ + D * X * $) / Y * Math.sin(Y * O) + $ * Math.cos(Y * O));
    };
  } else if (D === 1)
    Z = (Y) => f - Math.exp(-X * Y) * ($ + (_ + X * $) * Y);
  else {
    const Y = X * Math.sqrt(D * D - 1);
    Z = (O) => {
      const J = Math.exp(-D * X * O), H = Math.min(Y * O, 300);
      return f - J * ((_ + D * X * $) * Math.sinh(H) + Y * $ * Math.cosh(H)) / Y;
    };
  }
  const W = {
    calculatedDuration: E && y || null,
    next: (Y) => {
      const O = Z(Y);
      if (E)
        h.done = Y >= y;
      else {
        let J = Y === 0 ? _ : 0;
        D < 1 && (J = Y === 0 ? /* @__PURE__ */ Fn(_) : Ux(Z, Y, O));
        const H = Math.abs(J) <= s, ce = Math.abs(f - O) <= l;
        h.done = H && ce;
      }
      return h.value = h.done ? f : O, h;
    },
    toString: () => {
      const Y = Math.min(em(W), vu), O = Lx((J) => W.next(Y * J).value, Y, 30);
      return Y + "ms " + O;
    },
    toTransition: () => {
    }
  };
  return W;
}
yu.applyToOptions = (e) => {
  const n = v4(e, 100, yu);
  return e.ease = n.ease, e.duration = /* @__PURE__ */ Fn(n.duration), e.type = "keyframes", e;
};
function nh({ keyframes: e, velocity: n = 0, power: r = 0.8, timeConstant: s = 325, bounceDamping: l = 10, bounceStiffness: c = 500, modifyTarget: f, min: h, max: m, restDelta: p = 0.5, restSpeed: g }) {
  const y = e[0], x = {
    done: !1,
    value: y
  }, E = (H) => h !== void 0 && H < h || m !== void 0 && H > m, _ = (H) => h === void 0 ? m : m === void 0 || Math.abs(h - H) < Math.abs(m - H) ? h : m;
  let D = r * n;
  const $ = y + D, X = f === void 0 ? $ : f($);
  X !== $ && (D = X - y);
  const R = (H) => -D * Math.exp(-H / s), Z = (H) => X + R(H), W = (H) => {
    const ce = R(H), me = Z(H);
    x.done = Math.abs(ce) <= p, x.value = x.done ? X : me;
  };
  let Y, O;
  const J = (H) => {
    E(x.value) && (Y = H, O = yu({
      keyframes: [x.value, _(x.value)],
      velocity: Ux(Z, H, x.value),
      // TODO: This should be passing * 1000
      damping: l,
      stiffness: c,
      restDelta: p,
      restSpeed: g
    }));
  };
  return J(0), {
    calculatedDuration: null,
    next: (H) => {
      let ce = !1;
      return !O && Y === void 0 && (ce = !0, W(H), J(H)), Y !== void 0 && H >= Y ? O.next(H - Y) : (!ce && W(H), x);
    }
  };
}
function A4(e, n, r) {
  const s = [], l = r || xa.mix || Nx, c = e.length - 1;
  for (let f = 0; f < c; f++) {
    let h = l(e[f], e[f + 1]);
    if (n) {
      const m = Array.isArray(n) ? n[f] || zn : n;
      h = _o(m, h);
    }
    s.push(h);
  }
  return s;
}
function _4(e, n, { clamp: r = !0, ease: s, mixer: l } = {}) {
  const c = e.length;
  if (c === 1)
    return () => n[0];
  if (c === 2 && n[0] === n[1])
    return () => n[1];
  const f = e[0] === e[1];
  e[0] > e[c - 1] && (e = [...e].reverse(), n = [...n].reverse());
  const h = A4(n, s, l), m = h.length, p = (g) => {
    if (f && g < e[0])
      return n[0];
    let y = 0;
    if (m > 1)
      for (; y < e.length - 2 && !(g < e[y + 1]); y++)
        ;
    const x = /* @__PURE__ */ vo(e[y], e[y + 1], g);
    return h[y](x);
  };
  return r ? (g) => p(ba(e[0], e[c - 1], g)) : p;
}
function C4(e, n) {
  const r = e[e.length - 1];
  for (let s = 1; s <= n; s++) {
    const l = /* @__PURE__ */ vo(0, n, s);
    e.push(rt(r, 1, l));
  }
}
function M4(e) {
  const n = [0];
  return C4(n, e.length - 1), n;
}
function D4(e, n) {
  return e.map((r) => r * n);
}
function z4(e, n) {
  return e.map(() => n || M1).splice(0, e.length - 1);
}
function so({ duration: e = 300, keyframes: n, times: r, ease: s = "easeInOut" }) {
  const l = G2(s) ? s.map($y) : $y(s), c = {
    done: !1,
    value: n[0]
  }, f = D4(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === n.length ? r : M4(n),
    e
  ), h = _4(f, n, {
    ease: Array.isArray(l) ? l : z4(n, l)
  });
  return {
    calculatedDuration: e,
    next: (m) => (c.value = h(m), c.done = m >= e, c)
  };
}
const R4 = (e) => e !== null;
function tm(e, { repeat: n, repeatType: r = "loop" }, s, l = 1) {
  const c = e.filter(R4), h = l < 0 || n && r !== "loop" && n % 2 === 1 ? 0 : c.length - 1;
  return !h || s === void 0 ? c[h] : s;
}
const V4 = {
  decay: nh,
  inertia: nh,
  tween: so,
  keyframes: so,
  spring: yu
};
function Bx(e) {
  typeof e.type == "string" && (e.type = V4[e.type]);
}
class nm {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((n) => {
      this.resolve = n;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(n, r) {
    return this.finished.then(n, r);
  }
}
const O4 = (e) => e / 100;
class am extends nm {
  constructor(n) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: r } = this.options;
      r && r.updatedAt !== an.now() && this.tick(an.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = n, this.initAnimation(), this.play(), n.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: n } = this;
    Bx(n);
    const { type: r = so, repeat: s = 0, repeatDelay: l = 0, repeatType: c, velocity: f = 0 } = n;
    let { keyframes: h } = n;
    const m = r || so;
    m !== so && typeof h[0] != "number" && (this.mixKeyframes = _o(O4, Nx(h[0], h[1])), h = [0, 100]);
    const p = m({ ...n, keyframes: h });
    c === "mirror" && (this.mirroredGenerator = m({
      ...n,
      keyframes: [...h].reverse(),
      velocity: -f
    })), p.calculatedDuration === null && (p.calculatedDuration = em(p));
    const { calculatedDuration: g } = p;
    this.calculatedDuration = g, this.resolvedDuration = g + l, this.totalDuration = this.resolvedDuration * (s + 1) - l, this.generator = p;
  }
  updateTime(n) {
    const r = Math.round(n - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(n, r = !1) {
    const { generator: s, totalDuration: l, mixKeyframes: c, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: m } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: p = 0, keyframes: g, repeat: y, repeatType: x, repeatDelay: E, type: _, onUpdate: D, finalKeyframe: $ } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - l / this.speed, this.startTime)), r ? this.currentTime = n : this.updateTime(n);
    const X = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), R = this.playbackSpeed >= 0 ? X < 0 : X > l;
    this.currentTime = Math.max(X, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let Z = this.currentTime, W = s;
    if (y) {
      const H = Math.min(this.currentTime, l) / h;
      let ce = Math.floor(H), me = H % 1;
      !me && H >= 1 && (me = 1), me === 1 && ce--, ce = Math.min(ce, y + 1), !!(ce % 2) && (x === "reverse" ? (me = 1 - me, E && (me -= E / h)) : x === "mirror" && (W = f)), Z = ba(0, 1, me) * h;
    }
    const Y = R ? { done: !1, value: g[0] } : W.next(Z);
    c && (Y.value = c(Y.value));
    let { done: O } = Y;
    !R && m !== null && (O = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const J = this.holdTime === null && (this.state === "finished" || this.state === "running" && O);
    return J && _ !== nh && (Y.value = tm(g, this.options, $, this.speed)), D && D(Y.value), J && this.finish(), Y;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(n, r) {
    return this.finished.then(n, r);
  }
  get duration() {
    return /* @__PURE__ */ Xn(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Xn(this.currentTime);
  }
  set time(n) {
    n = /* @__PURE__ */ Fn(n), this.currentTime = n, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(n) {
    this.updateTime(an.now());
    const r = this.playbackSpeed !== n;
    this.playbackSpeed = n, r && (this.time = /* @__PURE__ */ Xn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: n = g4, startTime: r } = this.options;
    this.driver || (this.driver = n((l) => this.tick(l))), this.options.onPlay?.();
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = r ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(an.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(n) {
    return this.startTime = 0, this.tick(n, !0);
  }
  attachTimeline(n) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), n.observe(this);
  }
}
function k4(e) {
  for (let n = 1; n < e.length; n++)
    e[n] ?? (e[n] = e[n - 1]);
}
const Mr = (e) => e * 180 / Math.PI, ah = (e) => {
  const n = Mr(Math.atan2(e[1], e[0]));
  return rh(n);
}, $4 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: ah,
  rotateZ: ah,
  skewX: (e) => Mr(Math.atan(e[1])),
  skewY: (e) => Mr(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, rh = (e) => (e = e % 360, e < 0 && (e += 360), e), pb = ah, gb = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), vb = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), j4 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: gb,
  scaleY: vb,
  scale: (e) => (gb(e) + vb(e)) / 2,
  rotateX: (e) => rh(Mr(Math.atan2(e[6], e[5]))),
  rotateY: (e) => rh(Mr(Math.atan2(-e[2], e[0]))),
  rotateZ: pb,
  rotate: pb,
  skewX: (e) => Mr(Math.atan(e[4])),
  skewY: (e) => Mr(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function ih(e) {
  return e.includes("scale") ? 1 : 0;
}
function sh(e, n) {
  if (!e || e === "none")
    return ih(n);
  const r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, l;
  if (r)
    s = j4, l = r;
  else {
    const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = $4, l = h;
  }
  if (!l)
    return ih(n);
  const c = s[n], f = l[1].split(",").map(L4);
  return typeof c == "function" ? c(f) : f[c];
}
const N4 = (e, n) => {
  const { transform: r = "none" } = getComputedStyle(e);
  return sh(r, n);
};
function L4(e) {
  return parseFloat(e.trim());
}
const Ki = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Qi = new Set(Ki), yb = (e) => e === Xi || e === Ce, U4 = /* @__PURE__ */ new Set(["x", "y", "z"]), B4 = Ki.filter((e) => !U4.has(e));
function P4(e) {
  const n = [];
  return B4.forEach((r) => {
    const s = e.getValue(r);
    s !== void 0 && (n.push([r, s.get()]), s.set(r.startsWith("scale") ? 1 : 0));
  }), n;
}
const zr = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: n = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(n) - parseFloat(r),
  height: ({ y: e }, { paddingTop: n = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(n) - parseFloat(r),
  top: (e, { top: n }) => parseFloat(n),
  left: (e, { left: n }) => parseFloat(n),
  bottom: ({ y: e }, { top: n }) => parseFloat(n) + (e.max - e.min),
  right: ({ x: e }, { left: n }) => parseFloat(n) + (e.max - e.min),
  // Transform
  x: (e, { transform: n }) => sh(n, "x"),
  y: (e, { transform: n }) => sh(n, "y")
};
zr.translateX = zr.x;
zr.translateY = zr.y;
const Rr = /* @__PURE__ */ new Set();
let oh = !1, lh = !1, uh = !1;
function Px() {
  if (lh) {
    const e = Array.from(Rr).filter((s) => s.needsMeasurement), n = new Set(e.map((s) => s.element)), r = /* @__PURE__ */ new Map();
    n.forEach((s) => {
      const l = P4(s);
      l.length && (r.set(s, l), s.render());
    }), e.forEach((s) => s.measureInitialState()), n.forEach((s) => {
      s.render();
      const l = r.get(s);
      l && l.forEach(([c, f]) => {
        s.getValue(c)?.set(f);
      });
    }), e.forEach((s) => s.measureEndState()), e.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  lh = !1, oh = !1, Rr.forEach((e) => e.complete(uh)), Rr.clear();
}
function Zx() {
  Rr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (lh = !0);
  });
}
function Z4() {
  uh = !0, Zx(), Px(), uh = !1;
}
class rm {
  constructor(n, r, s, l, c, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...n], this.onComplete = r, this.name = s, this.motionValue = l, this.element = c, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Rr.add(this), oh || (oh = !0, tt.read(Zx), tt.resolveKeyframes(Px))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, name: r, element: s, motionValue: l } = this;
    if (n[0] === null) {
      const c = l?.get(), f = n[n.length - 1];
      if (c !== void 0)
        n[0] = c;
      else if (s && r) {
        const h = s.readValue(r, f);
        h != null && (n[0] = h);
      }
      n[0] === void 0 && (n[0] = f), l && c === void 0 && l.set(n[0]);
    }
    k4(n);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(n = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n), Rr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Rr.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const H4 = (e) => e.startsWith("--");
function G4(e, n, r) {
  H4(n) ? e.style.setProperty(n, r) : e.style[n] = r;
}
const q4 = /* @__PURE__ */ kh(() => window.ScrollTimeline !== void 0), Y4 = {};
function F4(e, n) {
  const r = /* @__PURE__ */ kh(e);
  return () => Y4[n] ?? r();
}
const Hx = /* @__PURE__ */ F4(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ao = ([e, n, r, s]) => `cubic-bezier(${e}, ${n}, ${r}, ${s})`, bb = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ao([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ao([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ao([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ao([0.33, 1.53, 0.69, 0.99])
};
function Gx(e, n) {
  if (e)
    return typeof e == "function" ? Hx() ? Lx(e, n) : "ease-out" : D1(e) ? ao(e) : Array.isArray(e) ? e.map((r) => Gx(r, n) || bb.easeOut) : bb[e];
}
function X4(e, n, r, { delay: s = 0, duration: l = 300, repeat: c = 0, repeatType: f = "loop", ease: h = "easeOut", times: m } = {}, p = void 0) {
  const g = {
    [n]: r
  };
  m && (g.offset = m);
  const y = Gx(h, l);
  Array.isArray(y) && (g.easing = y);
  const x = {
    delay: s,
    duration: l,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return p && (x.pseudoElement = p), e.animate(g, x);
}
function qx(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function K4({ type: e, ...n }) {
  return qx(e) && Hx() ? e.applyToOptions(n) : (n.duration ?? (n.duration = 300), n.ease ?? (n.ease = "easeOut"), n);
}
class Q4 extends nm {
  constructor(n) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !n)
      return;
    const { element: r, name: s, keyframes: l, pseudoElement: c, allowFlatten: f = !1, finalKeyframe: h, onComplete: m } = n;
    this.isPseudoElement = !!c, this.allowFlatten = f, this.options = n;
    const p = K4(n);
    this.animation = X4(r, s, l, p, c), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !c) {
        const g = tm(l, this.options, h, this.speed);
        this.updateMotionValue ? this.updateMotionValue(g) : G4(r, s, g), this.animation.cancel();
      }
      m?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: n } = this;
    n === "idle" || n === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const n = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Xn(Number(n));
  }
  get time() {
    return /* @__PURE__ */ Xn(Number(this.animation.currentTime) || 0);
  }
  set time(n) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Fn(n);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(n) {
    n < 0 && (this.finishedTime = null), this.animation.playbackRate = n;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(n) {
    this.animation.startTime = n;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: n, observe: r }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, n && q4() ? (this.animation.timeline = n, zn) : r(this);
  }
}
const Yx = {
  anticipate: A1,
  backInOut: E1,
  circInOut: C1
};
function I4(e) {
  return e in Yx;
}
function J4(e) {
  typeof e.ease == "string" && I4(e.ease) && (e.ease = Yx[e.ease]);
}
const xb = 10;
class W4 extends Q4 {
  constructor(n) {
    J4(n), Bx(n), super(n), n.startTime && (this.startTime = n.startTime), this.options = n;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(n) {
    const { motionValue: r, onUpdate: s, onComplete: l, element: c, ...f } = this.options;
    if (!r)
      return;
    if (n !== void 0) {
      r.set(n);
      return;
    }
    const h = new am({
      ...f,
      autoplay: !1
    }), m = /* @__PURE__ */ Fn(this.finishedTime ?? this.time);
    r.setWithVelocity(h.sample(m - xb).value, h.sample(m).value, xb), h.stop();
  }
}
const Sb = (e, n) => n === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ja.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function e6(e) {
  const n = e[0];
  if (e.length === 1)
    return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== n)
      return !0;
}
function t6(e, n, r, s) {
  const l = e[0];
  if (l === null)
    return !1;
  if (n === "display" || n === "visibility")
    return !0;
  const c = e[e.length - 1], f = Sb(l, n), h = Sb(c, n);
  return !f || !h ? !1 : e6(e) || (r === "spring" || qx(r)) && s;
}
function ch(e) {
  e.duration = 0;
}
const n6 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), a6 = /* @__PURE__ */ kh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function r6(e) {
  const { motionValue: n, name: r, repeatDelay: s, repeatType: l, damping: c, type: f } = e;
  if (!(n?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: m, transformTemplate: p } = n.owner.getProps();
  return a6() && r && n6.has(r) && (r !== "transform" || !p) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !m && !s && l !== "mirror" && c !== 0 && f !== "inertia";
}
const i6 = 40;
class s6 extends nm {
  constructor({ autoplay: n = !0, delay: r = 0, type: s = "keyframes", repeat: l = 0, repeatDelay: c = 0, repeatType: f = "loop", keyframes: h, name: m, motionValue: p, element: g, ...y }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = an.now();
    const x = {
      autoplay: n,
      delay: r,
      type: s,
      repeat: l,
      repeatDelay: c,
      repeatType: f,
      name: m,
      motionValue: p,
      element: g,
      ...y
    }, E = g?.KeyframeResolver || rm;
    this.keyframeResolver = new E(h, (_, D, $) => this.onKeyframesResolved(_, D, x, !$), m, p, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(n, r, s, l) {
    this.keyframeResolver = void 0;
    const { name: c, type: f, velocity: h, delay: m, isHandoff: p, onUpdate: g } = s;
    this.resolvedAt = an.now(), t6(n, c, f, h) || ((xa.instantAnimations || !m) && g?.(tm(n, s, r)), n[0] = n[n.length - 1], ch(s), s.repeat = 0);
    const x = {
      startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > i6 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...s,
      keyframes: n
    }, E = !p && r6(x) ? new W4({
      ...x,
      element: x.motionValue.owner.current
    }) : new am(x);
    E.finished.then(() => this.notifyFinished()).catch(zn), this.pendingTimeline && (this.stopTimeline = E.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = E;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(n, r) {
    return this.finished.finally(n).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Z4()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(n) {
    this.animation.time = n;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(n) {
    this.animation.speed = n;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(n) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(n) : this.pendingTimeline = n, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const o6 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function l6(e) {
  const n = o6.exec(e);
  if (!n)
    return [,];
  const [, r, s, l] = n;
  return [`--${r ?? s}`, l];
}
function Fx(e, n, r = 1) {
  const [s, l] = l6(e);
  if (!s)
    return;
  const c = window.getComputedStyle(n).getPropertyValue(s);
  if (c) {
    const f = c.trim();
    return g1(f) ? parseFloat(f) : f;
  }
  return Qh(l) ? Fx(l, n, r + 1) : l;
}
function im(e, n) {
  return e?.[n] ?? e?.default ?? e;
}
const Xx = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ki
]), u6 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Kx = (e) => (n) => n.test(e), Qx = [Xi, Ce, Kn, Xa, e4, W3, u6], wb = (e) => Qx.find(Kx(e));
function c6(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || y1(e) : !0;
}
const f6 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function d6(e) {
  const [n, r] = e.slice(0, -1).split("(");
  if (n === "drop-shadow")
    return e;
  const [s] = r.match(Ih) || [];
  if (!s)
    return e;
  const l = r.replace(s, "");
  let c = f6.has(n) ? 1 : 0;
  return s !== r && (c *= 100), n + "(" + c + l + ")";
}
const h6 = /\b([a-z-]*)\(.*?\)/gu, fh = {
  ...Ja,
  getAnimatableNone: (e) => {
    const n = e.match(h6);
    return n ? n.map(d6).join(" ") : e;
  }
}, Tb = {
  ...Xi,
  transform: Math.round
}, m6 = {
  rotate: Xa,
  rotateX: Xa,
  rotateY: Xa,
  rotateZ: Xa,
  scale: Wl,
  scaleX: Wl,
  scaleY: Wl,
  scaleZ: Wl,
  skew: Xa,
  skewX: Xa,
  skewY: Xa,
  distance: Ce,
  translateX: Ce,
  translateY: Ce,
  translateZ: Ce,
  x: Ce,
  y: Ce,
  z: Ce,
  perspective: Ce,
  transformPerspective: Ce,
  opacity: bo,
  originX: cb,
  originY: cb,
  originZ: Ce
}, sm = {
  // Border props
  borderWidth: Ce,
  borderTopWidth: Ce,
  borderRightWidth: Ce,
  borderBottomWidth: Ce,
  borderLeftWidth: Ce,
  borderRadius: Ce,
  radius: Ce,
  borderTopLeftRadius: Ce,
  borderTopRightRadius: Ce,
  borderBottomRightRadius: Ce,
  borderBottomLeftRadius: Ce,
  // Positioning props
  width: Ce,
  maxWidth: Ce,
  height: Ce,
  maxHeight: Ce,
  top: Ce,
  right: Ce,
  bottom: Ce,
  left: Ce,
  // Spacing props
  padding: Ce,
  paddingTop: Ce,
  paddingRight: Ce,
  paddingBottom: Ce,
  paddingLeft: Ce,
  margin: Ce,
  marginTop: Ce,
  marginRight: Ce,
  marginBottom: Ce,
  marginLeft: Ce,
  // Misc
  backgroundPositionX: Ce,
  backgroundPositionY: Ce,
  ...m6,
  zIndex: Tb,
  // SVG
  fillOpacity: bo,
  strokeOpacity: bo,
  numOctaves: Tb
}, p6 = {
  ...sm,
  // Color props
  color: bt,
  backgroundColor: bt,
  outlineColor: bt,
  fill: bt,
  stroke: bt,
  // Border props
  borderColor: bt,
  borderTopColor: bt,
  borderRightColor: bt,
  borderBottomColor: bt,
  borderLeftColor: bt,
  filter: fh,
  WebkitFilter: fh
}, Ix = (e) => p6[e];
function Jx(e, n) {
  let r = Ix(e);
  return r !== fh && (r = Ja), r.getAnimatableNone ? r.getAnimatableNone(n) : void 0;
}
const g6 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function v6(e, n, r) {
  let s = 0, l;
  for (; s < e.length && !l; ) {
    const c = e[s];
    typeof c == "string" && !g6.has(c) && xo(c).values.length && (l = e[s]), s++;
  }
  if (l && r)
    for (const c of n)
      e[c] = Jx(r, l);
}
class y6 extends rm {
  constructor(n, r, s, l, c) {
    super(n, r, s, l, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, element: r, name: s } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let m = 0; m < n.length; m++) {
      let p = n[m];
      if (typeof p == "string" && (p = p.trim(), Qh(p))) {
        const g = Fx(p, r.current);
        g !== void 0 && (n[m] = g), m === n.length - 1 && (this.finalKeyframe = p);
      }
    }
    if (this.resolveNoneKeyframes(), !Xx.has(s) || n.length !== 2)
      return;
    const [l, c] = n, f = wb(l), h = wb(c);
    if (f !== h)
      if (yb(f) && yb(h))
        for (let m = 0; m < n.length; m++) {
          const p = n[m];
          typeof p == "string" && (n[m] = parseFloat(p));
        }
      else zr[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: n, name: r } = this, s = [];
    for (let l = 0; l < n.length; l++)
      (n[l] === null || c6(n[l])) && s.push(l);
    s.length && v6(n, s, r);
  }
  measureInitialState() {
    const { element: n, unresolvedKeyframes: r, name: s } = this;
    if (!n || !n.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = zr[s](n.measureViewportBox(), window.getComputedStyle(n.current)), r[0] = this.measuredOrigin;
    const l = r[r.length - 1];
    l !== void 0 && n.getValue(s, l).jump(l, !1);
  }
  measureEndState() {
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current)
      return;
    const l = n.getValue(r);
    l && l.jump(this.measuredOrigin, !1);
    const c = s.length - 1, f = s[c];
    s[c] = zr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([h, m]) => {
      n.getValue(h).set(m);
    }), this.resolveNoneKeyframes();
  }
}
function b6(e, n, r) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let s = document;
    const l = r?.[e] ?? s.querySelectorAll(e);
    return l ? Array.from(l) : [];
  }
  return Array.from(e);
}
const Wx = (e, n) => n && typeof e == "number" ? n.transform(e) : e;
function eS(e) {
  return v1(e) && "offsetHeight" in e;
}
const Eb = 30, x6 = (e) => !isNaN(parseFloat(e));
class S6 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(n, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      const l = an.now();
      if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const c of this.dependents)
          c.dirty();
    }, this.hasAnimated = !1, this.setCurrent(n), this.owner = r.owner;
  }
  setCurrent(n) {
    this.current = n, this.updatedAt = an.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = x6(this.current));
  }
  setPrevFrameValue(n = this.current) {
    this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(n) {
    return this.on("change", n);
  }
  on(n, r) {
    this.events[n] || (this.events[n] = new $h());
    const s = this.events[n].add(r);
    return n === "change" ? () => {
      s(), tt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const n in this.events)
      this.events[n].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(n, r) {
    this.passiveEffect = n, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(n) {
    this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n);
  }
  setWithVelocity(n, r, s) {
    this.set(r), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(n, r = !0) {
    this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(n) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(n);
  }
  removeDependent(n) {
    this.dependents && this.dependents.delete(n);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const n = an.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > Eb)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Eb);
    return b1(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(n) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = n(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Zi(e, n) {
  return new S6(e, n);
}
const { schedule: om } = /* @__PURE__ */ Dx(queueMicrotask, !1), kn = {
  x: !1,
  y: !1
};
function tS() {
  return kn.x || kn.y;
}
function w6(e) {
  return e === "x" || e === "y" ? kn[e] ? null : (kn[e] = !0, () => {
    kn[e] = !1;
  }) : kn.x || kn.y ? null : (kn.x = kn.y = !0, () => {
    kn.x = kn.y = !1;
  });
}
function nS(e, n) {
  const r = b6(e), s = new AbortController(), l = {
    passive: !0,
    ...n,
    signal: s.signal
  };
  return [r, l, () => s.abort()];
}
function Ab(e) {
  return !(e.pointerType === "touch" || tS());
}
function T6(e, n, r = {}) {
  const [s, l, c] = nS(e, r), f = (h) => {
    if (!Ab(h))
      return;
    const { target: m } = h, p = n(m, h);
    if (typeof p != "function" || !m)
      return;
    const g = (y) => {
      Ab(y) && (p(y), m.removeEventListener("pointerleave", g));
    };
    m.addEventListener("pointerleave", g, l);
  };
  return s.forEach((h) => {
    h.addEventListener("pointerenter", f, l);
  }), c;
}
const aS = (e, n) => n ? e === n ? !0 : aS(e, n.parentElement) : !1, lm = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, E6 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function A6(e) {
  return E6.has(e.tagName) || e.tabIndex !== -1;
}
const uu = /* @__PURE__ */ new WeakSet();
function _b(e) {
  return (n) => {
    n.key === "Enter" && e(n);
  };
}
function xd(e, n) {
  e.dispatchEvent(new PointerEvent("pointer" + n, { isPrimary: !0, bubbles: !0 }));
}
const _6 = (e, n) => {
  const r = e.currentTarget;
  if (!r)
    return;
  const s = _b(() => {
    if (uu.has(r))
      return;
    xd(r, "down");
    const l = _b(() => {
      xd(r, "up");
    }), c = () => xd(r, "cancel");
    r.addEventListener("keyup", l, n), r.addEventListener("blur", c, n);
  });
  r.addEventListener("keydown", s, n), r.addEventListener("blur", () => r.removeEventListener("keydown", s), n);
};
function Cb(e) {
  return lm(e) && !tS();
}
function C6(e, n, r = {}) {
  const [s, l, c] = nS(e, r), f = (h) => {
    const m = h.currentTarget;
    if (!Cb(h))
      return;
    uu.add(m);
    const p = n(m, h), g = (E, _) => {
      window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", x), uu.has(m) && uu.delete(m), Cb(E) && typeof p == "function" && p(E, { success: _ });
    }, y = (E) => {
      g(E, m === window || m === document || r.useGlobalTarget || aS(m, E.target));
    }, x = (E) => {
      g(E, !1);
    };
    window.addEventListener("pointerup", y, l), window.addEventListener("pointercancel", x, l);
  };
  return s.forEach((h) => {
    (r.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l), eS(h) && (h.addEventListener("focus", (p) => _6(p, l)), !A6(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), c;
}
function rS(e) {
  return v1(e) && "ownerSVGElement" in e;
}
function M6(e) {
  return rS(e) && e.tagName === "svg";
}
const Pt = (e) => !!(e && e.getVelocity), D6 = [...Qx, bt, Ja], z6 = (e) => D6.find(Kx(e)), um = C.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class R6 extends C.Component {
  getSnapshotBeforeUpdate(n) {
    const r = this.props.childRef.current;
    if (r && n.isPresent && !this.props.isPresent) {
      const s = r.offsetParent, l = eS(s) && s.offsetWidth || 0, c = this.props.sizeRef.current;
      c.height = r.offsetHeight || 0, c.width = r.offsetWidth || 0, c.top = r.offsetTop, c.left = r.offsetLeft, c.right = l - c.width - c.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function V6({ children: e, isPresent: n, anchorX: r, root: s }) {
  const l = C.useId(), c = C.useRef(null), f = C.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: h } = C.useContext(um);
  return C.useInsertionEffect(() => {
    const { width: m, height: p, top: g, left: y, right: x } = f.current;
    if (n || !c.current || !m || !p)
      return;
    const E = r === "left" ? `left: ${y}` : `right: ${x}`;
    c.current.dataset.motionPopId = l;
    const _ = document.createElement("style");
    h && (_.nonce = h);
    const D = s ?? document.head;
    return D.appendChild(_), _.sheet && _.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${p}px !important;
            ${E}px !important;
            top: ${g}px !important;
          }
        `), () => {
      D.contains(_) && D.removeChild(_);
    };
  }, [n]), F.jsx(R6, { isPresent: n, childRef: c, sizeRef: f, children: C.cloneElement(e, { ref: c }) });
}
const O6 = ({ children: e, initial: n, isPresent: r, onExitComplete: s, custom: l, presenceAffectsLayout: c, mode: f, anchorX: h, root: m }) => {
  const p = Fh(k6), g = C.useId();
  let y = !0, x = C.useMemo(() => (y = !1, {
    id: g,
    initial: n,
    isPresent: r,
    custom: l,
    onExitComplete: (E) => {
      p.set(E, !0);
      for (const _ of p.values())
        if (!_)
          return;
      s && s();
    },
    register: (E) => (p.set(E, !1), () => p.delete(E))
  }), [r, p, s]);
  return c && y && (x = { ...x }), C.useMemo(() => {
    p.forEach((E, _) => p.set(_, !1));
  }, [r]), C.useEffect(() => {
    !r && !p.size && s && s();
  }, [r]), f === "popLayout" && (e = F.jsx(V6, { isPresent: r, anchorX: h, root: m, children: e })), F.jsx(Ru.Provider, { value: x, children: e });
};
function k6() {
  return /* @__PURE__ */ new Map();
}
function iS(e = !0) {
  const n = C.useContext(Ru);
  if (n === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: s, register: l } = n, c = C.useId();
  C.useEffect(() => {
    if (e)
      return l(c);
  }, [e]);
  const f = C.useCallback(() => e && s && s(c), [c, s, e]);
  return !r && s ? [!1, f] : [!0];
}
const eu = (e) => e.key || "";
function Mb(e) {
  const n = [];
  return C.Children.forEach(e, (r) => {
    C.isValidElement(r) && n.push(r);
  }), n;
}
const $6 = ({ children: e, custom: n, initial: r = !0, onExitComplete: s, presenceAffectsLayout: l = !0, mode: c = "sync", propagate: f = !1, anchorX: h = "left", root: m }) => {
  const [p, g] = iS(f), y = C.useMemo(() => Mb(e), [e]), x = f && !p ? [] : y.map(eu), E = C.useRef(!0), _ = C.useRef(y), D = Fh(() => /* @__PURE__ */ new Map()), [$, X] = C.useState(y), [R, Z] = C.useState(y);
  Mx(() => {
    E.current = !1, _.current = y;
    for (let O = 0; O < R.length; O++) {
      const J = eu(R[O]);
      x.includes(J) ? D.delete(J) : D.get(J) !== !0 && D.set(J, !1);
    }
  }, [R, x.length, x.join("-")]);
  const W = [];
  if (y !== $) {
    let O = [...y];
    for (let J = 0; J < R.length; J++) {
      const H = R[J], ce = eu(H);
      x.includes(ce) || (O.splice(J, 0, H), W.push(H));
    }
    return c === "wait" && W.length && (O = W), Z(Mb(O)), X(y), null;
  }
  const { forceRender: Y } = C.useContext(Yh);
  return F.jsx(F.Fragment, { children: R.map((O) => {
    const J = eu(O), H = f && !p ? !1 : y === R || x.includes(J), ce = () => {
      if (D.has(J))
        D.set(J, !0);
      else
        return;
      let me = !0;
      D.forEach((G) => {
        G || (me = !1);
      }), me && (Y?.(), Z(_.current), f && g?.(), s && s());
    };
    return F.jsx(O6, { isPresent: H, initial: !E.current || r ? void 0 : !1, custom: n, presenceAffectsLayout: l, mode: c, root: m, onExitComplete: H ? void 0 : ce, anchorX: h, children: O }, J);
  }) });
}, sS = C.createContext({ strict: !1 }), Db = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Hi = {};
for (const e in Db)
  Hi[e] = {
    isEnabled: (n) => Db[e].some((r) => !!n[r])
  };
function j6(e) {
  for (const n in e)
    Hi[n] = {
      ...Hi[n],
      ...e[n]
    };
}
const N6 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function bu(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || N6.has(e);
}
let oS = (e) => !bu(e);
function L6(e) {
  typeof e == "function" && (oS = (n) => n.startsWith("on") ? !bu(n) : e(n));
}
try {
  L6(require("@emotion/is-prop-valid").default);
} catch {
}
function U6(e, n, r) {
  const s = {};
  for (const l in e)
    l === "values" && typeof e.values == "object" || (oS(l) || r === !0 && bu(l) || !n && !bu(l) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && l.startsWith("onDrag")) && (s[l] = e[l]);
  return s;
}
const Vu = /* @__PURE__ */ C.createContext({});
function Ou(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function So(e) {
  return typeof e == "string" || Array.isArray(e);
}
const cm = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], fm = ["initial", ...cm];
function ku(e) {
  return Ou(e.animate) || fm.some((n) => So(e[n]));
}
function lS(e) {
  return !!(ku(e) || e.variants);
}
function B6(e, n) {
  if (ku(e)) {
    const { initial: r, animate: s } = e;
    return {
      initial: r === !1 || So(r) ? r : void 0,
      animate: So(s) ? s : void 0
    };
  }
  return e.inherit !== !1 ? n : {};
}
function P6(e) {
  const { initial: n, animate: r } = B6(e, C.useContext(Vu));
  return C.useMemo(() => ({ initial: n, animate: r }), [zb(n), zb(r)]);
}
function zb(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const wo = {};
function Z6(e) {
  for (const n in e)
    wo[n] = e[n], Kh(n) && (wo[n].isCSSVariable = !0);
}
function uS(e, { layout: n, layoutId: r }) {
  return Qi.has(e) || e.startsWith("origin") || (n || r !== void 0) && (!!wo[e] || e === "opacity");
}
const H6 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, G6 = Ki.length;
function q6(e, n, r) {
  let s = "", l = !0;
  for (let c = 0; c < G6; c++) {
    const f = Ki[c], h = e[f];
    if (h === void 0)
      continue;
    let m = !0;
    if (typeof h == "number" ? m = h === (f.startsWith("scale") ? 1 : 0) : m = parseFloat(h) === 0, !m || r) {
      const p = Wx(h, sm[f]);
      if (!m) {
        l = !1;
        const g = H6[f] || f;
        s += `${g}(${p}) `;
      }
      r && (n[f] = p);
    }
  }
  return s = s.trim(), r ? s = r(n, l ? "" : s) : l && (s = "none"), s;
}
function dm(e, n, r) {
  const { style: s, vars: l, transformOrigin: c } = e;
  let f = !1, h = !1;
  for (const m in n) {
    const p = n[m];
    if (Qi.has(m)) {
      f = !0;
      continue;
    } else if (Kh(m)) {
      l[m] = p;
      continue;
    } else {
      const g = Wx(p, sm[m]);
      m.startsWith("origin") ? (h = !0, c[m] = g) : s[m] = g;
    }
  }
  if (n.transform || (f || r ? s.transform = q6(n, e.transform, r) : s.transform && (s.transform = "none")), h) {
    const { originX: m = "50%", originY: p = "50%", originZ: g = 0 } = c;
    s.transformOrigin = `${m} ${p} ${g}`;
  }
}
const hm = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function cS(e, n, r) {
  for (const s in n)
    !Pt(n[s]) && !uS(s, r) && (e[s] = n[s]);
}
function Y6({ transformTemplate: e }, n) {
  return C.useMemo(() => {
    const r = hm();
    return dm(r, n, e), Object.assign({}, r.vars, r.style);
  }, [n]);
}
function F6(e, n) {
  const r = e.style || {}, s = {};
  return cS(s, r, e), Object.assign(s, Y6(e, n)), s;
}
function X6(e, n) {
  const r = {}, s = F6(e, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = s, r;
}
const K6 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Q6 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function I6(e, n, r = 1, s = 0, l = !0) {
  e.pathLength = 1;
  const c = l ? K6 : Q6;
  e[c.offset] = Ce.transform(-s);
  const f = Ce.transform(n), h = Ce.transform(r);
  e[c.array] = `${f} ${h}`;
}
function fS(e, {
  attrX: n,
  attrY: r,
  attrScale: s,
  pathLength: l,
  pathSpacing: c = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, m, p, g) {
  if (dm(e, h, p), m) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: y, style: x } = e;
  y.transform && (x.transform = y.transform, delete y.transform), (x.transform || y.transformOrigin) && (x.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), x.transform && (x.transformBox = g?.transformBox ?? "fill-box", delete y.transformBox), n !== void 0 && (y.x = n), r !== void 0 && (y.y = r), s !== void 0 && (y.scale = s), l !== void 0 && I6(y, l, c, f, !1);
}
const dS = () => ({
  ...hm(),
  attrs: {}
}), hS = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function J6(e, n, r, s) {
  const l = C.useMemo(() => {
    const c = dS();
    return fS(c, n, hS(s), e.transformTemplate, e.style), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [n]);
  if (e.style) {
    const c = {};
    cS(c, e.style, e), l.style = { ...c, ...l.style };
  }
  return l;
}
const W6 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function mm(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(W6.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function eC(e, n, r, { latestValues: s }, l, c = !1) {
  const h = (mm(e) ? J6 : X6)(n, s, l, e), m = U6(n, typeof e == "string", c), p = e !== C.Fragment ? { ...m, ...h, ref: r } : {}, { children: g } = n, y = C.useMemo(() => Pt(g) ? g.get() : g, [g]);
  return C.createElement(e, {
    ...p,
    children: y
  });
}
function Rb(e) {
  const n = [{}, {}];
  return e?.values.forEach((r, s) => {
    n[0][s] = r.get(), n[1][s] = r.getVelocity();
  }), n;
}
function pm(e, n, r, s) {
  if (typeof n == "function") {
    const [l, c] = Rb(s);
    n = n(r !== void 0 ? r : e.custom, l, c);
  }
  if (typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function") {
    const [l, c] = Rb(s);
    n = n(r !== void 0 ? r : e.custom, l, c);
  }
  return n;
}
function cu(e) {
  return Pt(e) ? e.get() : e;
}
function tC({ scrapeMotionValuesFromProps: e, createRenderState: n }, r, s, l) {
  return {
    latestValues: nC(r, s, l, e),
    renderState: n()
  };
}
function nC(e, n, r, s) {
  const l = {}, c = s(e, {});
  for (const x in c)
    l[x] = cu(c[x]);
  let { initial: f, animate: h } = e;
  const m = ku(e), p = lS(e);
  n && p && !m && e.inherit !== !1 && (f === void 0 && (f = n.initial), h === void 0 && (h = n.animate));
  let g = r ? r.initial === !1 : !1;
  g = g || f === !1;
  const y = g ? h : f;
  if (y && typeof y != "boolean" && !Ou(y)) {
    const x = Array.isArray(y) ? y : [y];
    for (let E = 0; E < x.length; E++) {
      const _ = pm(e, x[E]);
      if (_) {
        const { transitionEnd: D, transition: $, ...X } = _;
        for (const R in X) {
          let Z = X[R];
          if (Array.isArray(Z)) {
            const W = g ? Z.length - 1 : 0;
            Z = Z[W];
          }
          Z !== null && (l[R] = Z);
        }
        for (const R in D)
          l[R] = D[R];
      }
    }
  }
  return l;
}
const mS = (e) => (n, r) => {
  const s = C.useContext(Vu), l = C.useContext(Ru), c = () => tC(e, n, s, l);
  return r ? c() : Fh(c);
};
function gm(e, n, r) {
  const { style: s } = e, l = {};
  for (const c in s)
    (Pt(s[c]) || n.style && Pt(n.style[c]) || uS(c, e) || r?.getValue(c)?.liveStyle !== void 0) && (l[c] = s[c]);
  return l;
}
const aC = /* @__PURE__ */ mS({
  scrapeMotionValuesFromProps: gm,
  createRenderState: hm
});
function pS(e, n, r) {
  const s = gm(e, n, r);
  for (const l in e)
    if (Pt(e[l]) || Pt(n[l])) {
      const c = Ki.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
      s[c] = e[l];
    }
  return s;
}
const rC = /* @__PURE__ */ mS({
  scrapeMotionValuesFromProps: pS,
  createRenderState: dS
}), iC = Symbol.for("motionComponentSymbol");
function $i(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function sC(e, n, r) {
  return C.useCallback(
    (s) => {
      s && e.onMount && e.onMount(s), n && (s ? n.mount(s) : n.unmount()), r && (typeof r == "function" ? r(s) : $i(r) && (r.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [n]
  );
}
const vm = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), oC = "framerAppearId", gS = "data-" + vm(oC), vS = C.createContext({});
function lC(e, n, r, s, l) {
  const { visualElement: c } = C.useContext(Vu), f = C.useContext(sS), h = C.useContext(Ru), m = C.useContext(um).reducedMotion, p = C.useRef(null);
  s = s || f.renderer, !p.current && s && (p.current = s(e, {
    visualState: n,
    parent: c,
    props: r,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: m
  }));
  const g = p.current, y = C.useContext(vS);
  g && !g.projection && l && (g.type === "html" || g.type === "svg") && uC(p.current, r, l, y);
  const x = C.useRef(!1);
  C.useInsertionEffect(() => {
    g && x.current && g.update(r, h);
  });
  const E = r[gS], _ = C.useRef(!!E && !window.MotionHandoffIsComplete?.(E) && window.MotionHasOptimisedAnimation?.(E));
  return Mx(() => {
    g && (x.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), g.scheduleRenderMicrotask(), _.current && g.animationState && g.animationState.animateChanges());
  }), C.useEffect(() => {
    g && (!_.current && g.animationState && g.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(E);
    }), _.current = !1), g.enteringChildren = void 0);
  }), g;
}
function uC(e, n, r, s) {
  const { layoutId: l, layout: c, drag: f, dragConstraints: h, layoutScroll: m, layoutRoot: p, layoutCrossfade: g } = n;
  e.projection = new r(e.latestValues, n["data-framer-portal-id"] ? void 0 : yS(e.parent)), e.projection.setOptions({
    layoutId: l,
    layout: c,
    alwaysMeasureLayout: !!f || h && $i(h),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof c == "string" ? c : "both",
    initialPromotionConfig: s,
    crossfade: g,
    layoutScroll: m,
    layoutRoot: p
  });
}
function yS(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : yS(e.parent);
}
function Sd(e, { forwardMotionProps: n = !1 } = {}, r, s) {
  r && j6(r);
  const l = mm(e) ? rC : aC;
  function c(h, m) {
    let p;
    const g = {
      ...C.useContext(um),
      ...h,
      layoutId: cC(h)
    }, { isStatic: y } = g, x = P6(h), E = l(h, y);
    if (!y && Xh) {
      fC();
      const _ = dC(g);
      p = _.MeasureLayout, x.visualElement = lC(e, E, g, s, _.ProjectionNode);
    }
    return F.jsxs(Vu.Provider, { value: x, children: [p && x.visualElement ? F.jsx(p, { visualElement: x.visualElement, ...g }) : null, eC(e, h, sC(E, x.visualElement, m), E, y, n)] });
  }
  c.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const f = C.forwardRef(c);
  return f[iC] = e, f;
}
function cC({ layoutId: e }) {
  const n = C.useContext(Yh).id;
  return n && e !== void 0 ? n + "-" + e : e;
}
function fC(e, n) {
  C.useContext(sS).strict;
}
function dC(e) {
  const { drag: n, layout: r } = Hi;
  if (!n && !r)
    return {};
  const s = { ...n, ...r };
  return {
    MeasureLayout: n?.isEnabled(e) || r?.isEnabled(e) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
function hC(e, n) {
  if (typeof Proxy > "u")
    return Sd;
  const r = /* @__PURE__ */ new Map(), s = (c, f) => Sd(c, f, e, n), l = (c, f) => s(c, f);
  return new Proxy(l, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (c, f) => f === "create" ? s : (r.has(f) || r.set(f, Sd(f, void 0, e, n)), r.get(f))
  });
}
function bS({ top: e, left: n, right: r, bottom: s }) {
  return {
    x: { min: n, max: r },
    y: { min: e, max: s }
  };
}
function mC({ x: e, y: n }) {
  return { top: n.min, right: e.max, bottom: n.max, left: e.min };
}
function pC(e, n) {
  if (!n)
    return e;
  const r = n({ x: e.left, y: e.top }), s = n({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: s.y,
    right: s.x
  };
}
function wd(e) {
  return e === void 0 || e === 1;
}
function dh({ scale: e, scaleX: n, scaleY: r }) {
  return !wd(e) || !wd(n) || !wd(r);
}
function _r(e) {
  return dh(e) || xS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function xS(e) {
  return Vb(e.x) || Vb(e.y);
}
function Vb(e) {
  return e && e !== "0%";
}
function xu(e, n, r) {
  const s = e - r, l = n * s;
  return r + l;
}
function Ob(e, n, r, s, l) {
  return l !== void 0 && (e = xu(e, l, s)), xu(e, r, s) + n;
}
function hh(e, n = 0, r = 1, s, l) {
  e.min = Ob(e.min, n, r, s, l), e.max = Ob(e.max, n, r, s, l);
}
function SS(e, { x: n, y: r }) {
  hh(e.x, n.translate, n.scale, n.originPoint), hh(e.y, r.translate, r.scale, r.originPoint);
}
const kb = 0.999999999999, $b = 1.0000000000001;
function gC(e, n, r, s = !1) {
  const l = r.length;
  if (!l)
    return;
  n.x = n.y = 1;
  let c, f;
  for (let h = 0; h < l; h++) {
    c = r[h], f = c.projectionDelta;
    const { visualElement: m } = c.options;
    m && m.props.style && m.props.style.display === "contents" || (s && c.options.layoutScroll && c.scroll && c !== c.root && Ni(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), f && (n.x *= f.x.scale, n.y *= f.y.scale, SS(e, f)), s && _r(c.latestValues) && Ni(e, c.latestValues));
  }
  n.x < $b && n.x > kb && (n.x = 1), n.y < $b && n.y > kb && (n.y = 1);
}
function ji(e, n) {
  e.min = e.min + n, e.max = e.max + n;
}
function jb(e, n, r, s, l = 0.5) {
  const c = rt(e.min, e.max, l);
  hh(e, n, r, c, s);
}
function Ni(e, n) {
  jb(e.x, n.x, n.scaleX, n.scale, n.originX), jb(e.y, n.y, n.scaleY, n.scale, n.originY);
}
function wS(e, n) {
  return bS(pC(e.getBoundingClientRect(), n));
}
function vC(e, n, r) {
  const s = wS(e, r), { scroll: l } = n;
  return l && (ji(s.x, l.offset.x), ji(s.y, l.offset.y)), s;
}
const Nb = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Li = () => ({
  x: Nb(),
  y: Nb()
}), Lb = () => ({ min: 0, max: 0 }), ft = () => ({
  x: Lb(),
  y: Lb()
}), mh = { current: null }, TS = { current: !1 };
function yC() {
  if (TS.current = !0, !!Xh)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), n = () => mh.current = e.matches;
      e.addEventListener("change", n), n();
    } else
      mh.current = !1;
}
const bC = /* @__PURE__ */ new WeakMap();
function xC(e, n, r) {
  for (const s in n) {
    const l = n[s], c = r[s];
    if (Pt(l))
      e.addValue(s, l);
    else if (Pt(c))
      e.addValue(s, Zi(l, { owner: e }));
    else if (c !== l)
      if (e.hasValue(s)) {
        const f = e.getValue(s);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = e.getStaticValue(s);
        e.addValue(s, Zi(f !== void 0 ? f : l, { owner: e }));
      }
  }
  for (const s in r)
    n[s] === void 0 && e.removeValue(s);
  return n;
}
const Ub = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class SC {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(n, r, s) {
    return {};
  }
  constructor({ parent: n, props: r, presenceContext: s, reducedMotionConfig: l, blockInitialAnimation: c, visualState: f }, h = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = rm, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const x = an.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, tt.render(this.render, !1, !0));
    };
    const { latestValues: m, renderState: p } = f;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = r.initial ? { ...m } : {}, this.renderState = p, this.parent = n, this.props = r, this.presenceContext = s, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = l, this.options = h, this.blockInitialAnimation = !!c, this.isControllingVariants = ku(r), this.isVariantNode = lS(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
    const { willChange: g, ...y } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const x in y) {
      const E = y[x];
      m[x] !== void 0 && Pt(E) && E.set(m[x]);
    }
  }
  mount(n) {
    this.current = n, bC.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, s) => this.bindToMotionValue(s, r)), TS.current || yC(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : mh.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Ia(this.notifyUpdate), Ia(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(n) {
    this.children.add(n), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(n);
  }
  removeChild(n) {
    this.children.delete(n), this.enteringChildren && this.enteringChildren.delete(n);
  }
  bindToMotionValue(n, r) {
    this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
    const s = Qi.has(n);
    s && this.onBindTransform && this.onBindTransform();
    const l = r.on("change", (f) => {
      this.latestValues[n] = f, this.props.onUpdate && tt.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let c;
    window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, n, r)), this.valueSubscriptions.set(n, () => {
      l(), c && c(), r.owner && r.stop();
    });
  }
  sortNodePosition(n) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current);
  }
  updateFeatures() {
    let n = "animation";
    for (n in Hi) {
      const r = Hi[n];
      if (!r)
        continue;
      const { isEnabled: s, Feature: l } = r;
      if (!this.features[n] && l && s(this.props) && (this.features[n] = new l(this)), this.features[n]) {
        const c = this.features[n];
        c.isMounted ? c.update() : (c.mount(), c.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ft();
  }
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, r) {
    this.latestValues[n] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(n, r) {
    (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let s = 0; s < Ub.length; s++) {
      const l = Ub[s];
      this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
      const c = "on" + l, f = n[c];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    this.prevMotionValues = xC(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(n) {
    return this.props.variants ? this.props.variants[n] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(n) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(n), () => r.variantChildren.delete(n);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(n, r) {
    const s = this.values.get(n);
    r !== s && (s && this.removeValue(n), this.bindToMotionValue(n, r), this.values.set(n, r), this.latestValues[n] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(n) {
    this.values.delete(n);
    const r = this.valueSubscriptions.get(n);
    r && (r(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, r) {
    if (this.props.values && this.props.values[n])
      return this.props.values[n];
    let s = this.values.get(n);
    return s === void 0 && r !== void 0 && (s = Zi(r === null ? void 0 : r, { owner: this }), this.addValue(n, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(n, r) {
    let s = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options);
    return s != null && (typeof s == "string" && (g1(s) || y1(s)) ? s = parseFloat(s) : !z6(s) && Ja.test(r) && (s = Jx(n, r)), this.setBaseTarget(n, Pt(s) ? s.get() : s)), Pt(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(n, r) {
    this.baseTarget[n] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(n) {
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const c = pm(this.props, r, this.presenceContext?.custom);
      c && (s = c[n]);
    }
    if (r && s !== void 0)
      return s;
    const l = this.getBaseTargetFromProps(this.props, n);
    return l !== void 0 && !Pt(l) ? l : this.initialValues[n] !== void 0 && s === void 0 ? void 0 : this.baseTarget[n];
  }
  on(n, r) {
    return this.events[n] || (this.events[n] = new $h()), this.events[n].add(r);
  }
  notify(n, ...r) {
    this.events[n] && this.events[n].notify(...r);
  }
  scheduleRenderMicrotask() {
    om.render(this.render);
  }
}
class ES extends SC {
  constructor() {
    super(...arguments), this.KeyframeResolver = y6;
  }
  sortInstanceNodePosition(n, r) {
    return n.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, r) {
    return n.style ? n.style[r] : void 0;
  }
  removeValueFromRenderState(n, { vars: r, style: s }) {
    delete r[n], delete s[n];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    Pt(n) && (this.childSubscription = n.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
function AS(e, { style: n, vars: r }, s, l) {
  const c = e.style;
  let f;
  for (f in n)
    c[f] = n[f];
  l?.applyProjectionStyles(c, s);
  for (f in r)
    c.setProperty(f, r[f]);
}
function wC(e) {
  return window.getComputedStyle(e);
}
class TC extends ES {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = AS;
  }
  readValueFromInstance(n, r) {
    if (Qi.has(r))
      return this.projection?.isProjecting ? ih(r) : N4(n, r);
    {
      const s = wC(n), l = (Kh(r) ? s.getPropertyValue(r) : s[r]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: r }) {
    return wS(n, r);
  }
  build(n, r, s) {
    dm(n, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, r, s) {
    return gm(n, r, s);
  }
}
const _S = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function EC(e, n, r, s) {
  AS(e, n, void 0, s);
  for (const l in n.attrs)
    e.setAttribute(_S.has(l) ? l : vm(l), n.attrs[l]);
}
class AC extends ES {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ft;
  }
  getBaseTargetFromProps(n, r) {
    return n[r];
  }
  readValueFromInstance(n, r) {
    if (Qi.has(r)) {
      const s = Ix(r);
      return s && s.default || 0;
    }
    return r = _S.has(r) ? r : vm(r), n.getAttribute(r);
  }
  scrapeMotionValuesFromProps(n, r, s) {
    return pS(n, r, s);
  }
  build(n, r, s) {
    fS(n, r, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(n, r, s, l) {
    EC(n, r, s, l);
  }
  mount(n) {
    this.isSVGTag = hS(n.tagName), super.mount(n);
  }
}
const _C = (e, n) => mm(e) ? new AC(n) : new TC(n, {
  allowProjection: e !== C.Fragment
});
function Bi(e, n, r) {
  const s = e.getProps();
  return pm(s, n, r !== void 0 ? r : s.custom, e);
}
const ph = (e) => Array.isArray(e);
function CC(e, n, r) {
  e.hasValue(n) ? e.getValue(n).set(r) : e.addValue(n, Zi(r));
}
function MC(e) {
  return ph(e) ? e[e.length - 1] || 0 : e;
}
function DC(e, n) {
  const r = Bi(e, n);
  let { transitionEnd: s = {}, transition: l = {}, ...c } = r || {};
  c = { ...c, ...s };
  for (const f in c) {
    const h = MC(c[f]);
    CC(e, f, h);
  }
}
function zC(e) {
  return !!(Pt(e) && e.add);
}
function gh(e, n) {
  const r = e.getValue("willChange");
  if (zC(r))
    return r.add(n);
  if (!r && xa.WillChange) {
    const s = new xa.WillChange("auto");
    e.addValue("willChange", s), s.add(n);
  }
}
function CS(e) {
  return e.props[gS];
}
const RC = (e) => e !== null;
function VC(e, { repeat: n, repeatType: r = "loop" }, s) {
  const l = e.filter(RC), c = n && r !== "loop" && n % 2 === 1 ? 0 : l.length - 1;
  return l[c];
}
const OC = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, kC = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), $C = {
  type: "keyframes",
  duration: 0.8
}, jC = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, NC = (e, { keyframes: n }) => n.length > 2 ? $C : Qi.has(e) ? e.startsWith("scale") ? kC(n[1]) : OC : jC;
function LC({ when: e, delay: n, delayChildren: r, staggerChildren: s, staggerDirection: l, repeat: c, repeatType: f, repeatDelay: h, from: m, elapsed: p, ...g }) {
  return !!Object.keys(g).length;
}
const ym = (e, n, r, s = {}, l, c) => (f) => {
  const h = im(s, e) || {}, m = h.delay || s.delay || 0;
  let { elapsed: p = 0 } = s;
  p = p - /* @__PURE__ */ Fn(m);
  const g = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: n.getVelocity(),
    ...h,
    delay: -p,
    onUpdate: (x) => {
      n.set(x), h.onUpdate && h.onUpdate(x);
    },
    onComplete: () => {
      f(), h.onComplete && h.onComplete();
    },
    name: e,
    motionValue: n,
    element: c ? void 0 : l
  };
  LC(h) || Object.assign(g, NC(e, g)), g.duration && (g.duration = /* @__PURE__ */ Fn(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ Fn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let y = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (ch(g), g.delay === 0 && (y = !0)), (xa.instantAnimations || xa.skipAnimations) && (y = !0, ch(g), g.delay = 0), g.allowFlatten = !h.type && !h.ease, y && !c && n.get() !== void 0) {
    const x = VC(g.keyframes, h);
    if (x !== void 0) {
      tt.update(() => {
        g.onUpdate(x), g.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new am(g) : new s6(g);
};
function UC({ protectedKeys: e, needsAnimating: n }, r) {
  const s = e.hasOwnProperty(r) && n[r] !== !0;
  return n[r] = !1, s;
}
function MS(e, n, { delay: r = 0, transitionOverride: s, type: l } = {}) {
  let { transition: c = e.getDefaultTransition(), transitionEnd: f, ...h } = n;
  s && (c = s);
  const m = [], p = l && e.animationState && e.animationState.getState()[l];
  for (const g in h) {
    const y = e.getValue(g, e.latestValues[g] ?? null), x = h[g];
    if (x === void 0 || p && UC(p, g))
      continue;
    const E = {
      delay: r,
      ...im(c || {}, g)
    }, _ = y.get();
    if (_ !== void 0 && !y.isAnimating && !Array.isArray(x) && x === _ && !E.velocity)
      continue;
    let D = !1;
    if (window.MotionHandoffAnimation) {
      const X = CS(e);
      if (X) {
        const R = window.MotionHandoffAnimation(X, g, tt);
        R !== null && (E.startTime = R, D = !0);
      }
    }
    gh(e, g), y.start(ym(g, y, x, e.shouldReduceMotion && Xx.has(g) ? { type: !1 } : E, e, D));
    const $ = y.animation;
    $ && m.push($);
  }
  return f && Promise.all(m).then(() => {
    tt.update(() => {
      f && DC(e, f);
    });
  }), m;
}
function DS(e, n, r, s = 0, l = 1) {
  const c = Array.from(e).sort((p, g) => p.sortNodePosition(g)).indexOf(n), f = e.size, h = (f - 1) * s;
  return typeof r == "function" ? r(c, f) : l === 1 ? c * s : h - c * s;
}
function vh(e, n, r = {}) {
  const s = Bi(e, n, r.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: l = e.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (l = r.transitionOverride);
  const c = s ? () => Promise.all(MS(e, s, r)) : () => Promise.resolve(), f = e.variantChildren && e.variantChildren.size ? (m = 0) => {
    const { delayChildren: p = 0, staggerChildren: g, staggerDirection: y } = l;
    return BC(e, n, m, p, g, y, r);
  } : () => Promise.resolve(), { when: h } = l;
  if (h) {
    const [m, p] = h === "beforeChildren" ? [c, f] : [f, c];
    return m().then(() => p());
  } else
    return Promise.all([c(), f(r.delay)]);
}
function BC(e, n, r = 0, s = 0, l = 0, c = 1, f) {
  const h = [];
  for (const m of e.variantChildren)
    m.notify("AnimationStart", n), h.push(vh(m, n, {
      ...f,
      delay: r + (typeof s == "function" ? 0 : s) + DS(e.variantChildren, m, s, l, c)
    }).then(() => m.notify("AnimationComplete", n)));
  return Promise.all(h);
}
function PC(e, n, r = {}) {
  e.notify("AnimationStart", n);
  let s;
  if (Array.isArray(n)) {
    const l = n.map((c) => vh(e, c, r));
    s = Promise.all(l);
  } else if (typeof n == "string")
    s = vh(e, n, r);
  else {
    const l = typeof n == "function" ? Bi(e, n, r.custom) : n;
    s = Promise.all(MS(e, l, r));
  }
  return s.then(() => {
    e.notify("AnimationComplete", n);
  });
}
function zS(e, n) {
  if (!Array.isArray(n))
    return !1;
  const r = n.length;
  if (r !== e.length)
    return !1;
  for (let s = 0; s < r; s++)
    if (n[s] !== e[s])
      return !1;
  return !0;
}
const ZC = fm.length;
function RS(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const r = e.parent ? RS(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const n = {};
  for (let r = 0; r < ZC; r++) {
    const s = fm[r], l = e.props[s];
    (So(l) || l === !1) && (n[s] = l);
  }
  return n;
}
const HC = [...cm].reverse(), GC = cm.length;
function qC(e) {
  return (n) => Promise.all(n.map(({ animation: r, options: s }) => PC(e, r, s)));
}
function YC(e) {
  let n = qC(e), r = Bb(), s = !0;
  const l = (m) => (p, g) => {
    const y = Bi(e, g, m === "exit" ? e.presenceContext?.custom : void 0);
    if (y) {
      const { transition: x, transitionEnd: E, ..._ } = y;
      p = { ...p, ..._, ...E };
    }
    return p;
  };
  function c(m) {
    n = m(e);
  }
  function f(m) {
    const { props: p } = e, g = RS(e.parent) || {}, y = [], x = /* @__PURE__ */ new Set();
    let E = {}, _ = 1 / 0;
    for (let $ = 0; $ < GC; $++) {
      const X = HC[$], R = r[X], Z = p[X] !== void 0 ? p[X] : g[X], W = So(Z), Y = X === m ? R.isActive : null;
      Y === !1 && (_ = $);
      let O = Z === g[X] && Z !== p[X] && W;
      if (O && s && e.manuallyAnimateOnMount && (O = !1), R.protectedKeys = { ...E }, // If it isn't active and hasn't *just* been set as inactive
      !R.isActive && Y === null || // If we didn't and don't have any defined prop for this animation type
      !Z && !R.prevProp || // Or if the prop doesn't define an animation
      Ou(Z) || typeof Z == "boolean")
        continue;
      const J = FC(R.prevProp, Z);
      let H = J || // If we're making this variant active, we want to always make it active
      X === m && R.isActive && !O && W || // If we removed a higher-priority variant (i is in reverse order)
      $ > _ && W, ce = !1;
      const me = Array.isArray(Z) ? Z : [Z];
      let G = me.reduce(l(X), {});
      Y === !1 && (G = {});
      const { prevResolvedValues: q = {} } = R, ae = {
        ...q,
        ...G
      }, U = (j) => {
        H = !0, x.has(j) && (ce = !0, x.delete(j)), R.needsAnimating[j] = !0;
        const z = e.getValue(j);
        z && (z.liveStyle = !1);
      };
      for (const j in ae) {
        const z = G[j], le = q[j];
        if (E.hasOwnProperty(j))
          continue;
        let w = !1;
        ph(z) && ph(le) ? w = !zS(z, le) : w = z !== le, w ? z != null ? U(j) : x.add(j) : z !== void 0 && x.has(j) ? U(j) : R.protectedKeys[j] = !0;
      }
      R.prevProp = Z, R.prevResolvedValues = G, R.isActive && (E = { ...E, ...G }), s && e.blockInitialAnimation && (H = !1);
      const ne = O && J;
      H && (!ne || ce) && y.push(...me.map((j) => {
        const z = { type: X };
        if (typeof j == "string" && s && !ne && e.manuallyAnimateOnMount && e.parent) {
          const { parent: le } = e, w = Bi(le, j);
          if (le.enteringChildren && w) {
            const { delayChildren: Q } = w.transition || {};
            z.delay = DS(le.enteringChildren, e, Q);
          }
        }
        return {
          animation: j,
          options: z
        };
      }));
    }
    if (x.size) {
      const $ = {};
      if (typeof p.initial != "boolean") {
        const X = Bi(e, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        X && X.transition && ($.transition = X.transition);
      }
      x.forEach((X) => {
        const R = e.getBaseTarget(X), Z = e.getValue(X);
        Z && (Z.liveStyle = !0), $[X] = R ?? null;
      }), y.push({ animation: $ });
    }
    let D = !!y.length;
    return s && (p.initial === !1 || p.initial === p.animate) && !e.manuallyAnimateOnMount && (D = !1), s = !1, D ? n(y) : Promise.resolve();
  }
  function h(m, p) {
    if (r[m].isActive === p)
      return Promise.resolve();
    e.variantChildren?.forEach((y) => y.animationState?.setActive(m, p)), r[m].isActive = p;
    const g = f(m);
    for (const y in r)
      r[y].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: f,
    setActive: h,
    setAnimateFunction: c,
    getState: () => r,
    reset: () => {
      r = Bb(), s = !0;
    }
  };
}
function FC(e, n) {
  return typeof n == "string" ? n !== e : Array.isArray(n) ? !zS(n, e) : !1;
}
function Ar(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Bb() {
  return {
    animate: Ar(!0),
    whileInView: Ar(),
    whileHover: Ar(),
    whileTap: Ar(),
    whileDrag: Ar(),
    whileFocus: Ar(),
    exit: Ar()
  };
}
class tr {
  constructor(n) {
    this.isMounted = !1, this.node = n;
  }
  update() {
  }
}
class XC extends tr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(n) {
    super(n), n.animationState || (n.animationState = YC(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    Ou(n) && (this.unmountControls = n.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    n !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let KC = 0;
class QC extends tr {
  constructor() {
    super(...arguments), this.id = KC++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: n, onExitComplete: r } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === s)
      return;
    const l = this.node.animationState.setActive("exit", !n);
    r && !n && l.then(() => {
      r(this.id);
    });
  }
  mount() {
    const { register: n, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), n && (this.unmount = n(this.id));
  }
  unmount() {
  }
}
const IC = {
  animation: {
    Feature: XC
  },
  exit: {
    Feature: QC
  }
};
function To(e, n, r, s = { passive: !0 }) {
  return e.addEventListener(n, r, s), () => e.removeEventListener(n, r);
}
function Do(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const JC = (e) => (n) => lm(n) && e(n, Do(n));
function oo(e, n, r, s) {
  return To(e, n, JC(r), s);
}
const VS = 1e-4, WC = 1 - VS, eM = 1 + VS, OS = 0.01, tM = 0 - OS, nM = 0 + OS;
function Xt(e) {
  return e.max - e.min;
}
function aM(e, n, r) {
  return Math.abs(e - n) <= r;
}
function Pb(e, n, r, s = 0.5) {
  e.origin = s, e.originPoint = rt(n.min, n.max, e.origin), e.scale = Xt(r) / Xt(n), e.translate = rt(r.min, r.max, e.origin) - e.originPoint, (e.scale >= WC && e.scale <= eM || isNaN(e.scale)) && (e.scale = 1), (e.translate >= tM && e.translate <= nM || isNaN(e.translate)) && (e.translate = 0);
}
function lo(e, n, r, s) {
  Pb(e.x, n.x, r.x, s ? s.originX : void 0), Pb(e.y, n.y, r.y, s ? s.originY : void 0);
}
function Zb(e, n, r) {
  e.min = r.min + n.min, e.max = e.min + Xt(n);
}
function rM(e, n, r) {
  Zb(e.x, n.x, r.x), Zb(e.y, n.y, r.y);
}
function Hb(e, n, r) {
  e.min = n.min - r.min, e.max = e.min + Xt(n);
}
function uo(e, n, r) {
  Hb(e.x, n.x, r.x), Hb(e.y, n.y, r.y);
}
function Cn(e) {
  return [e("x"), e("y")];
}
const kS = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Gb = (e, n) => Math.abs(e - n);
function iM(e, n) {
  const r = Gb(e.x, n.x), s = Gb(e.y, n.y);
  return Math.sqrt(r ** 2 + s ** 2);
}
class $S {
  constructor(n, r, { transformPagePoint: s, contextWindow: l = window, dragSnapToOrigin: c = !1, distanceThreshold: f = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Ed(this.lastMoveEventInfo, this.history), E = this.startEvent !== null, _ = iM(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!E && !_)
        return;
      const { point: D } = x, { timestamp: $ } = Nt;
      this.history.push({ ...D, timestamp: $ });
      const { onStart: X, onMove: R } = this.handlers;
      E || (X && X(this.lastMoveEvent, x), this.startEvent = this.lastMoveEvent), R && R(this.lastMoveEvent, x);
    }, this.handlePointerMove = (x, E) => {
      this.lastMoveEvent = x, this.lastMoveEventInfo = Td(E, this.transformPagePoint), tt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (x, E) => {
      this.end();
      const { onEnd: _, onSessionEnd: D, resumeAnimation: $ } = this.handlers;
      if (this.dragSnapToOrigin && $ && $(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const X = Ed(x.type === "pointercancel" ? this.lastMoveEventInfo : Td(E, this.transformPagePoint), this.history);
      this.startEvent && _ && _(x, X), D && D(x, X);
    }, !lm(n))
      return;
    this.dragSnapToOrigin = c, this.handlers = r, this.transformPagePoint = s, this.distanceThreshold = f, this.contextWindow = l || window;
    const h = Do(n), m = Td(h, this.transformPagePoint), { point: p } = m, { timestamp: g } = Nt;
    this.history = [{ ...p, timestamp: g }];
    const { onSessionStart: y } = r;
    y && y(n, Ed(m, this.history)), this.removeListeners = _o(oo(this.contextWindow, "pointermove", this.handlePointerMove), oo(this.contextWindow, "pointerup", this.handlePointerUp), oo(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ia(this.updatePoint);
  }
}
function Td(e, n) {
  return n ? { point: n(e.point) } : e;
}
function qb(e, n) {
  return { x: e.x - n.x, y: e.y - n.y };
}
function Ed({ point: e }, n) {
  return {
    point: e,
    delta: qb(e, jS(n)),
    offset: qb(e, sM(n)),
    velocity: oM(n, 0.1)
  };
}
function sM(e) {
  return e[0];
}
function jS(e) {
  return e[e.length - 1];
}
function oM(e, n) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, s = null;
  const l = jS(e);
  for (; r >= 0 && (s = e[r], !(l.timestamp - s.timestamp > /* @__PURE__ */ Fn(n))); )
    r--;
  if (!s)
    return { x: 0, y: 0 };
  const c = /* @__PURE__ */ Xn(l.timestamp - s.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (l.x - s.x) / c,
    y: (l.y - s.y) / c
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function lM(e, { min: n, max: r }, s) {
  return n !== void 0 && e < n ? e = s ? rt(n, e, s.min) : Math.max(e, n) : r !== void 0 && e > r && (e = s ? rt(r, e, s.max) : Math.min(e, r)), e;
}
function Yb(e, n, r) {
  return {
    min: n !== void 0 ? e.min + n : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function uM(e, { top: n, left: r, bottom: s, right: l }) {
  return {
    x: Yb(e.x, r, l),
    y: Yb(e.y, n, s)
  };
}
function Fb(e, n) {
  let r = n.min - e.min, s = n.max - e.max;
  return n.max - n.min < e.max - e.min && ([r, s] = [s, r]), { min: r, max: s };
}
function cM(e, n) {
  return {
    x: Fb(e.x, n.x),
    y: Fb(e.y, n.y)
  };
}
function fM(e, n) {
  let r = 0.5;
  const s = Xt(e), l = Xt(n);
  return l > s ? r = /* @__PURE__ */ vo(n.min, n.max - s, e.min) : s > l && (r = /* @__PURE__ */ vo(e.min, e.max - l, n.min)), ba(0, 1, r);
}
function dM(e, n) {
  const r = {};
  return n.min !== void 0 && (r.min = n.min - e.min), n.max !== void 0 && (r.max = n.max - e.min), r;
}
const yh = 0.35;
function hM(e = yh) {
  return e === !1 ? e = 0 : e === !0 && (e = yh), {
    x: Xb(e, "left", "right"),
    y: Xb(e, "top", "bottom")
  };
}
function Xb(e, n, r) {
  return {
    min: Kb(e, n),
    max: Kb(e, r)
  };
}
function Kb(e, n) {
  return typeof e == "number" ? e : e[n] || 0;
}
const mM = /* @__PURE__ */ new WeakMap();
class pM {
  constructor(n) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ft(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = n;
  }
  start(n, { snapToCursor: r = !1, distanceThreshold: s } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1)
      return;
    const c = (y) => {
      const { dragSnapToOrigin: x } = this.getProps();
      x ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Do(y).point);
    }, f = (y, x) => {
      const { drag: E, dragPropagation: _, onDragStart: D } = this.getProps();
      if (E && !_ && (this.openDragLock && this.openDragLock(), this.openDragLock = w6(E), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = x, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Cn((X) => {
        let R = this.getAxisMotionValue(X).get() || 0;
        if (Kn.test(R)) {
          const { projection: Z } = this.visualElement;
          if (Z && Z.layout) {
            const W = Z.layout.layoutBox[X];
            W && (R = Xt(W) * (parseFloat(R) / 100));
          }
        }
        this.originPoint[X] = R;
      }), D && tt.postRender(() => D(y, x)), gh(this.visualElement, "transform");
      const { animationState: $ } = this.visualElement;
      $ && $.setActive("whileDrag", !0);
    }, h = (y, x) => {
      this.latestPointerEvent = y, this.latestPanInfo = x;
      const { dragPropagation: E, dragDirectionLock: _, onDirectionLock: D, onDrag: $ } = this.getProps();
      if (!E && !this.openDragLock)
        return;
      const { offset: X } = x;
      if (_ && this.currentDirection === null) {
        this.currentDirection = gM(X), this.currentDirection !== null && D && D(this.currentDirection);
        return;
      }
      this.updateAxis("x", x.point, X), this.updateAxis("y", x.point, X), this.visualElement.render(), $ && $(y, x);
    }, m = (y, x) => {
      this.latestPointerEvent = y, this.latestPanInfo = x, this.stop(y, x), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, p = () => Cn((y) => this.getAnimationState(y) === "paused" && this.getAxisMotionValue(y).animation?.play()), { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new $S(n, {
      onSessionStart: c,
      onStart: f,
      onMove: h,
      onSessionEnd: m,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: s,
      contextWindow: kS(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(n, r) {
    const s = n || this.latestPointerEvent, l = r || this.latestPanInfo, c = this.isDragging;
    if (this.cancel(), !c || !l || !s)
      return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && tt.postRender(() => h(s, l));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: r } = this.visualElement;
    n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(n, r, s) {
    const { drag: l } = this.getProps();
    if (!s || !tu(n, l, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(n);
    let f = this.originPoint[n] + s[n];
    this.constraints && this.constraints[n] && (f = lM(f, this.constraints[n], this.elastic[n])), c.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: n, dragElastic: r } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints;
    n && $i(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = uM(s.layoutBox, n) : this.constraints = !1, this.elastic = hM(r), l !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Cn((c) => {
      this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = dM(s.layoutBox[c], this.constraints[c]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: r } = this.getProps();
    if (!n || !$i(n))
      return !1;
    const s = n.current, { projection: l } = this.visualElement;
    if (!l || !l.layout)
      return !1;
    const c = vC(s, l.root, this.visualElement.getTransformPagePoint());
    let f = cM(l.layout.layoutBox, c);
    if (r) {
      const h = r(mC(f));
      this.hasMutatedConstraints = !!h, h && (f = bS(h));
    }
    return f;
  }
  startAnimation(n) {
    const { drag: r, dragMomentum: s, dragElastic: l, dragTransition: c, dragSnapToOrigin: f, onDragTransitionEnd: h } = this.getProps(), m = this.constraints || {}, p = Cn((g) => {
      if (!tu(g, r, this.currentDirection))
        return;
      let y = m && m[g] || {};
      f && (y = { min: 0, max: 0 });
      const x = l ? 200 : 1e6, E = l ? 40 : 1e7, _ = {
        type: "inertia",
        velocity: s ? n[g] : 0,
        bounceStiffness: x,
        bounceDamping: E,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...y
      };
      return this.startAxisValueAnimation(g, _);
    });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(n, r) {
    const s = this.getAxisMotionValue(n);
    return gh(this.visualElement, n), s.start(ym(n, s, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    Cn((n) => this.getAxisMotionValue(n).stop());
  }
  pauseAnimation() {
    Cn((n) => this.getAxisMotionValue(n).animation?.pause());
  }
  getAnimationState(n) {
    return this.getAxisMotionValue(n).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(n) {
    const r = `_drag${n.toUpperCase()}`, s = this.visualElement.getProps(), l = s[r];
    return l || this.visualElement.getValue(n, (s.initial ? s.initial[n] : void 0) || 0);
  }
  snapToCursor(n) {
    Cn((r) => {
      const { drag: s } = this.getProps();
      if (!tu(r, s, this.currentDirection))
        return;
      const { projection: l } = this.visualElement, c = this.getAxisMotionValue(r);
      if (l && l.layout) {
        const { min: f, max: h } = l.layout.layoutBox[r];
        c.set(n[r] - rt(f, h, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: n, dragConstraints: r } = this.getProps(), { projection: s } = this.visualElement;
    if (!$i(r) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    Cn((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const m = h.get();
        l[f] = fM({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), Cn((f) => {
      if (!tu(f, n, null))
        return;
      const h = this.getAxisMotionValue(f), { min: m, max: p } = this.constraints[f];
      h.set(rt(m, p, l[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    mM.set(this.visualElement, this);
    const n = this.visualElement.current, r = oo(n, "pointerdown", (m) => {
      const { drag: p, dragListener: g = !0 } = this.getProps();
      p && g && this.start(m);
    }), s = () => {
      const { dragConstraints: m } = this.getProps();
      $i(m) && m.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: l } = this.visualElement, c = l.addEventListener("measure", s);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()), tt.read(s);
    const f = To(window, "resize", () => this.scalePositionWithinConstraints()), h = l.addEventListener("didUpdate", ({ delta: m, hasLayoutChanged: p }) => {
      this.isDragging && p && (Cn((g) => {
        const y = this.getAxisMotionValue(g);
        y && (this.originPoint[g] += m[g].translate, y.set(y.get() + m[g].translate));
      }), this.visualElement.render());
    });
    return () => {
      f(), r(), c(), h && h();
    };
  }
  getProps() {
    const n = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: s = !1, dragPropagation: l = !1, dragConstraints: c = !1, dragElastic: f = yh, dragMomentum: h = !0 } = n;
    return {
      ...n,
      drag: r,
      dragDirectionLock: s,
      dragPropagation: l,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: h
    };
  }
}
function tu(e, n, r) {
  return (n === !0 || n === e) && (r === null || r === e);
}
function gM(e, n = 10) {
  let r = null;
  return Math.abs(e.y) > n ? r = "y" : Math.abs(e.x) > n && (r = "x"), r;
}
class vM extends tr {
  constructor(n) {
    super(n), this.removeGroupControls = zn, this.removeListeners = zn, this.controls = new pM(n);
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || zn;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qb = (e) => (n, r) => {
  e && tt.postRender(() => e(n, r));
};
class yM extends tr {
  constructor() {
    super(...arguments), this.removePointerDownListener = zn;
  }
  onPointerDown(n) {
    this.session = new $S(n, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: kS(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: n, onPanStart: r, onPan: s, onPanEnd: l } = this.node.getProps();
    return {
      onSessionStart: Qb(n),
      onStart: Qb(r),
      onMove: s,
      onEnd: (c, f) => {
        delete this.session, l && tt.postRender(() => l(c, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = oo(this.node.current, "pointerdown", (n) => this.onPointerDown(n));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const fu = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ib(e, n) {
  return n.max === n.min ? 0 : e / (n.max - n.min) * 100;
}
const Ws = {
  correct: (e, n) => {
    if (!n.target)
      return e;
    if (typeof e == "string")
      if (Ce.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Ib(e, n.target.x), s = Ib(e, n.target.y);
    return `${r}% ${s}%`;
  }
}, bM = {
  correct: (e, { treeScale: n, projectionDelta: r }) => {
    const s = e, l = Ja.parse(e);
    if (l.length > 5)
      return s;
    const c = Ja.createTransformer(e), f = typeof l[0] != "number" ? 1 : 0, h = r.x.scale * n.x, m = r.y.scale * n.y;
    l[0 + f] /= h, l[1 + f] /= m;
    const p = rt(h, m, 0.5);
    return typeof l[2 + f] == "number" && (l[2 + f] /= p), typeof l[3 + f] == "number" && (l[3 + f] /= p), c(l);
  }
};
let Ad = !1;
class xM extends C.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: n, layoutGroup: r, switchLayoutGroup: s, layoutId: l } = this.props, { projection: c } = n;
    Z6(SM), c && (r.group && r.group.add(c), s && s.register && l && s.register(c), Ad && c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), fu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(n) {
    const { layoutDependency: r, visualElement: s, drag: l, isPresent: c } = this.props, { projection: f } = s;
    return f && (f.isPresent = c, Ad = !0, l || n.layoutDependency !== r || r === void 0 || n.isPresent !== c ? f.willUpdate() : this.safeToRemove(), n.isPresent !== c && (c ? f.promote() : f.relegate() || tt.postRender(() => {
      const h = f.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n && (n.root.didUpdate(), om.postRender(() => {
      !n.currentAnimation && n.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: n, layoutGroup: r, switchLayoutGroup: s } = this.props, { projection: l } = n;
    Ad = !0, l && (l.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(l), s && s.deregister && s.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: n } = this.props;
    n && n();
  }
  render() {
    return null;
  }
}
function NS(e) {
  const [n, r] = iS(), s = C.useContext(Yh);
  return F.jsx(xM, { ...e, layoutGroup: s, switchLayoutGroup: C.useContext(vS), isPresent: n, safeToRemove: r });
}
const SM = {
  borderRadius: {
    ...Ws,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ws,
  borderTopRightRadius: Ws,
  borderBottomLeftRadius: Ws,
  borderBottomRightRadius: Ws,
  boxShadow: bM
};
function wM(e, n, r) {
  const s = Pt(e) ? e : Zi(e);
  return s.start(ym("", s, n, r)), s.animation;
}
const TM = (e, n) => e.depth - n.depth;
class EM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(n) {
    Vh(this.children, n), this.isDirty = !0;
  }
  remove(n) {
    Oh(this.children, n), this.isDirty = !0;
  }
  forEach(n) {
    this.isDirty && this.children.sort(TM), this.isDirty = !1, this.children.forEach(n);
  }
}
function AM(e, n) {
  const r = an.now(), s = ({ timestamp: l }) => {
    const c = l - r;
    c >= n && (Ia(s), e(c - n));
  };
  return tt.setup(s, !0), () => Ia(s);
}
const LS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], _M = LS.length, Jb = (e) => typeof e == "string" ? parseFloat(e) : e, Wb = (e) => typeof e == "number" || Ce.test(e);
function CM(e, n, r, s, l, c) {
  l ? (e.opacity = rt(0, r.opacity ?? 1, MM(s)), e.opacityExit = rt(n.opacity ?? 1, 0, DM(s))) : c && (e.opacity = rt(n.opacity ?? 1, r.opacity ?? 1, s));
  for (let f = 0; f < _M; f++) {
    const h = `border${LS[f]}Radius`;
    let m = e0(n, h), p = e0(r, h);
    if (m === void 0 && p === void 0)
      continue;
    m || (m = 0), p || (p = 0), m === 0 || p === 0 || Wb(m) === Wb(p) ? (e[h] = Math.max(rt(Jb(m), Jb(p), s), 0), (Kn.test(p) || Kn.test(m)) && (e[h] += "%")) : e[h] = p;
  }
  (n.rotate || r.rotate) && (e.rotate = rt(n.rotate || 0, r.rotate || 0, s));
}
function e0(e, n) {
  return e[n] !== void 0 ? e[n] : e.borderRadius;
}
const MM = /* @__PURE__ */ US(0, 0.5, _1), DM = /* @__PURE__ */ US(0.5, 0.95, zn);
function US(e, n, r) {
  return (s) => s < e ? 0 : s > n ? 1 : r(/* @__PURE__ */ vo(e, n, s));
}
function t0(e, n) {
  e.min = n.min, e.max = n.max;
}
function En(e, n) {
  t0(e.x, n.x), t0(e.y, n.y);
}
function n0(e, n) {
  e.translate = n.translate, e.scale = n.scale, e.originPoint = n.originPoint, e.origin = n.origin;
}
function a0(e, n, r, s, l) {
  return e -= n, e = xu(e, 1 / r, s), l !== void 0 && (e = xu(e, 1 / l, s)), e;
}
function zM(e, n = 0, r = 1, s = 0.5, l, c = e, f = e) {
  if (Kn.test(n) && (n = parseFloat(n), n = rt(f.min, f.max, n / 100) - f.min), typeof n != "number")
    return;
  let h = rt(c.min, c.max, s);
  e === c && (h -= n), e.min = a0(e.min, n, r, h, l), e.max = a0(e.max, n, r, h, l);
}
function r0(e, n, [r, s, l], c, f) {
  zM(e, n[r], n[s], n[l], n.scale, c, f);
}
const RM = ["x", "scaleX", "originX"], VM = ["y", "scaleY", "originY"];
function i0(e, n, r, s) {
  r0(e.x, n, RM, r ? r.x : void 0, s ? s.x : void 0), r0(e.y, n, VM, r ? r.y : void 0, s ? s.y : void 0);
}
function s0(e) {
  return e.translate === 0 && e.scale === 1;
}
function BS(e) {
  return s0(e.x) && s0(e.y);
}
function o0(e, n) {
  return e.min === n.min && e.max === n.max;
}
function OM(e, n) {
  return o0(e.x, n.x) && o0(e.y, n.y);
}
function l0(e, n) {
  return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max);
}
function PS(e, n) {
  return l0(e.x, n.x) && l0(e.y, n.y);
}
function u0(e) {
  return Xt(e.x) / Xt(e.y);
}
function c0(e, n) {
  return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint;
}
class kM {
  constructor() {
    this.members = [];
  }
  add(n) {
    Vh(this.members, n), n.scheduleRender();
  }
  remove(n) {
    if (Oh(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(n) {
    const r = this.members.findIndex((l) => n === l);
    if (r === 0)
      return !1;
    let s;
    for (let l = r; l >= 0; l--) {
      const c = this.members[l];
      if (c.isPresent !== !1) {
        s = c;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(n, r) {
    const s = this.lead;
    if (n !== s && (this.prevLead = s, this.lead = n, n.show(), s)) {
      s.instance && s.scheduleRender(), n.scheduleRender(), n.resumeFrom = s, r && (n.resumeFrom.preserveOpacity = !0), s.snapshot && (n.snapshot = s.snapshot, n.snapshot.latestValues = s.animationValues || s.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
      const { crossfade: l } = n.options;
      l === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((n) => {
      const { options: r, resumingFrom: s } = n;
      r.onExitComplete && r.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((n) => {
      n.instance && n.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function $M(e, n, r) {
  let s = "";
  const l = e.x.translate / n.x, c = e.y.translate / n.y, f = r?.z || 0;
  if ((l || c || f) && (s = `translate3d(${l}px, ${c}px, ${f}px) `), (n.x !== 1 || n.y !== 1) && (s += `scale(${1 / n.x}, ${1 / n.y}) `), r) {
    const { transformPerspective: p, rotate: g, rotateX: y, rotateY: x, skewX: E, skewY: _ } = r;
    p && (s = `perspective(${p}px) ${s}`), g && (s += `rotate(${g}deg) `), y && (s += `rotateX(${y}deg) `), x && (s += `rotateY(${x}deg) `), E && (s += `skewX(${E}deg) `), _ && (s += `skewY(${_}deg) `);
  }
  const h = e.x.scale * n.x, m = e.y.scale * n.y;
  return (h !== 1 || m !== 1) && (s += `scale(${h}, ${m})`), s || "none";
}
const _d = ["", "X", "Y", "Z"], jM = 1e3;
let NM = 0;
function Cd(e, n, r, s) {
  const { latestValues: l } = n;
  l[e] && (r[e] = l[e], n.setStaticValue(e, 0), s && (s[e] = 0));
}
function ZS(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: n } = e.options;
  if (!n)
    return;
  const r = CS(n);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: l, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", tt, !(l || c));
  }
  const { parent: s } = e;
  s && !s.hasCheckedOptimisedAppear && ZS(s);
}
function HS({ attachResizeListener: e, defaultParent: n, measureScroll: r, checkIsScrollRoot: s, resetTransform: l }) {
  return class {
    constructor(f = {}, h = n?.()) {
      this.id = NM++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(BM), this.nodes.forEach(GM), this.nodes.forEach(qM), this.nodes.forEach(PM);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new EM());
    }
    addEventListener(f, h) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new $h()), this.eventHandlers.get(f).add(h);
    }
    notifyListeners(f, ...h) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...h);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    /**
     * Lifecycles
     */
    mount(f) {
      if (this.instance)
        return;
      this.isSVG = rS(f) && !M6(f), this.instance = f;
      const { layoutId: h, layout: m, visualElement: p } = this.options;
      if (p && !p.current && p.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (m || h) && (this.isLayoutDirty = !0), e) {
        let g, y = 0;
        const x = () => this.root.updateBlockedByResize = !1;
        tt.read(() => {
          y = window.innerWidth;
        }), e(f, () => {
          const E = window.innerWidth;
          E !== y && (y = E, this.root.updateBlockedByResize = !0, g && g(), g = AM(x, 250), fu.hasAnimatedSinceResize && (fu.hasAnimatedSinceResize = !1, this.nodes.forEach(h0)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && p && (h || m) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y, hasRelativeLayoutChanged: x, layout: E }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const _ = this.options.transition || p.getDefaultTransition() || QM, { onLayoutAnimationStart: D, onLayoutAnimationComplete: $ } = p.getProps(), X = !this.targetLayout || !PS(this.targetLayout, E), R = !y && x;
        if (this.options.layoutRoot || this.resumeFrom || R || y && (X || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const Z = {
            ...im(_, "layout"),
            onPlay: D,
            onComplete: $
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (Z.delay = 0, Z.type = !1), this.startAnimation(Z), this.setAnimationOrigin(g, R);
        } else
          y || h0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = E;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ia(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(YM), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ZS(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: h, layout: m } = this.options;
      if (h === void 0 && !m)
        return;
      const p = this.getTransformTemplate();
      this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(f0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(d0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(HM), this.nodes.forEach(LM), this.nodes.forEach(UM)) : this.nodes.forEach(d0), this.clearAllSnapshots();
      const h = an.now();
      Nt.delta = ba(0, 1e3 / 60, h - Nt.timestamp), Nt.timestamp = h, Nt.isProcessing = !0, pd.update.process(Nt), pd.preRender.process(Nt), pd.render.process(Nt), Nt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, om.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ZM), this.sharedNodes.forEach(FM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, tt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      tt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Xt(this.snapshot.measuredBox.x) && !Xt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++)
          this.path[m].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ft(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h && this.instance) {
        const m = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m
        };
      }
    }
    resetTransform() {
      if (!l)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !BS(this.projectionDelta), m = this.getTransformTemplate(), p = m ? m(this.latestValues, "") : void 0, g = p !== this.prevTransformTemplateValue;
      f && this.instance && (h || _r(this.latestValues) || g) && (l(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let m = this.removeElementScroll(h);
      return f && (m = this.removeTransform(m)), IM(m), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: m,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f)
        return ft();
      const h = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(JM))) {
        const { scroll: p } = this.root;
        p && (ji(h.x, p.offset.x), ji(h.y, p.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      const h = ft();
      if (En(h, f), this.scroll?.wasRoot)
        return h;
      for (let m = 0; m < this.path.length; m++) {
        const p = this.path[m], { scroll: g, options: y } = p;
        p !== this.root && g && y.layoutScroll && (g.wasRoot && En(h, f), ji(h.x, g.offset.x), ji(h.y, g.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1) {
      const m = ft();
      En(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        !h && g.options.layoutScroll && g.scroll && g !== g.root && Ni(m, {
          x: -g.scroll.offset.x,
          y: -g.scroll.offset.y
        }), _r(g.latestValues) && Ni(m, g.latestValues);
      }
      return _r(this.latestValues) && Ni(m, this.latestValues), m;
    }
    removeTransform(f) {
      const h = ft();
      En(h, f);
      for (let m = 0; m < this.path.length; m++) {
        const p = this.path[m];
        if (!p.instance || !_r(p.latestValues))
          continue;
        dh(p.latestValues) && p.updateSnapshot();
        const g = ft(), y = p.measurePageBox();
        En(g, y), i0(h, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g);
      }
      return _r(this.latestValues) && i0(h, this.latestValues), h;
    }
    setTargetDelta(f) {
      this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Nt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== h;
      if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: y } = this.options;
      if (!(!this.layout || !(g || y))) {
        if (this.resolvedRelativeTargetAt = Nt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ft(), this.relativeTargetOrigin = ft(), uo(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox), En(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ft(), this.targetWithTransforms = ft()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), rM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : En(this.target, this.layout.layoutBox), SS(this.target, this.targetDelta)) : En(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ft(), this.relativeTargetOrigin = ft(), uo(this.relativeTargetOrigin, this.target, x.target), En(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || dh(this.parent.latestValues) || xS(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const f = this.getLead(), h = !!this.resumingFrom || this !== f;
      let m = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === Nt.timestamp && (m = !1), m)
        return;
      const { layout: p, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || g))
        return;
      En(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, x = this.treeScale.y;
      gC(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = ft());
      const { target: E } = f;
      if (!E) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (n0(this.prevProjectionDelta.x, this.projectionDelta.x), n0(this.prevProjectionDelta.y, this.projectionDelta.y)), lo(this.projectionDelta, this.layoutCorrected, E, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== x || !c0(this.projectionDelta.x, this.prevProjectionDelta.x) || !c0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", E));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if (this.options.visualElement?.scheduleRender(), f) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Li(), this.projectionDelta = Li(), this.projectionDeltaWithTransform = Li();
    }
    setAnimationOrigin(f, h = !1) {
      const m = this.snapshot, p = m ? m.latestValues : {}, g = { ...this.latestValues }, y = Li();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const x = ft(), E = m ? m.source : void 0, _ = this.layout ? this.layout.source : void 0, D = E !== _, $ = this.getStack(), X = !$ || $.members.length <= 1, R = !!(D && !X && this.options.crossfade === !0 && !this.path.some(KM));
      this.animationProgress = 0;
      let Z;
      this.mixTargetDelta = (W) => {
        const Y = W / 1e3;
        m0(y.x, f.x, Y), m0(y.y, f.y, Y), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (uo(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), XM(this.relativeTarget, this.relativeTargetOrigin, x, Y), Z && OM(this.relativeTarget, Z) && (this.isProjectionDirty = !1), Z || (Z = ft()), En(Z, this.relativeTarget)), D && (this.animationValues = g, CM(g, p, this.latestValues, Y, R, X)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Y;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Ia(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tt.update(() => {
        fu.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Zi(0)), this.currentAnimation = wM(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (h) => {
            this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h);
          },
          onStop: () => {
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(jM), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: h, target: m, layout: p, latestValues: g } = f;
      if (!(!h || !m || !p)) {
        if (this !== f && this.layout && p && GS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          m = this.target || ft();
          const y = Xt(this.layout.layoutBox.x);
          m.x.min = f.target.x.min, m.x.max = m.x.min + y;
          const x = Xt(this.layout.layoutBox.y);
          m.y.min = f.target.y.min, m.y.max = m.y.min + x;
        }
        En(h, m), Ni(h, g), lo(this.projectionDeltaWithTransform, this.layoutCorrected, h, g);
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new kM()), this.sharedNodes.get(f).add(h);
      const p = h.options.initialPromotionConfig;
      h.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(h) : void 0
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f)
        return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: m } = {}) {
      const p = this.getStack();
      p && p.promote(this, m), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f)
        return;
      let h = !1;
      const { latestValues: m } = f;
      if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (h = !0), !h)
        return;
      const p = {};
      m.z && Cd("z", f, p, this.animationValues);
      for (let g = 0; g < _d.length; g++)
        Cd(`rotate${_d[g]}`, f, p, this.animationValues), Cd(`skew${_d[g]}`, f, p, this.animationValues);
      f.render();
      for (const g in p)
        f.setStaticValue(g, p[g]), this.animationValues && (this.animationValues[g] = p[g]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, h) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = cu(h?.pointerEvents) || "", f.transform = m ? m(this.latestValues, "") : "none";
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = cu(h?.pointerEvents) || ""), this.hasProjected && !_r(this.latestValues) && (f.transform = m ? m({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const g = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let y = $M(this.projectionDeltaWithTransform, this.treeScale, g);
      m && (y = m(g, y)), f.transform = y;
      const { x, y: E } = this.projectionDelta;
      f.transformOrigin = `${x.origin * 100}% ${E.origin * 100}% 0`, p.animationValues ? f.opacity = p === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = p === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const _ in wo) {
        if (g[_] === void 0)
          continue;
        const { correct: D, applyTo: $, isCSSVariable: X } = wo[_], R = y === "none" ? g[_] : D(g[_], p);
        if ($) {
          const Z = $.length;
          for (let W = 0; W < Z; W++)
            f[$[W]] = R;
        } else
          X ? this.options.visualElement.renderState.vars[_] = R : f[_] = R;
      }
      this.options.layoutId && (f.pointerEvents = p === this ? cu(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(f0), this.root.sharedNodes.clear();
    }
  };
}
function LM(e) {
  e.updateLayout();
}
function UM(e) {
  const n = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout, { animationType: l } = e.options, c = n.source !== e.layout.source;
    l === "size" ? Cn((g) => {
      const y = c ? n.measuredBox[g] : n.layoutBox[g], x = Xt(y);
      y.min = r[g].min, y.max = y.min + x;
    }) : GS(l, n.layoutBox, r) && Cn((g) => {
      const y = c ? n.measuredBox[g] : n.layoutBox[g], x = Xt(r[g]);
      y.max = y.min + x, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[g].max = e.relativeTarget[g].min + x);
    });
    const f = Li();
    lo(f, r, n.layoutBox);
    const h = Li();
    c ? lo(h, e.applyTransform(s, !0), n.measuredBox) : lo(h, r, n.layoutBox);
    const m = !BS(f);
    let p = !1;
    if (!e.resumeFrom) {
      const g = e.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: y, layout: x } = g;
        if (y && x) {
          const E = ft();
          uo(E, n.layoutBox, y.layoutBox);
          const _ = ft();
          uo(_, r, x.layoutBox), PS(E, _) || (p = !0), g.options.layoutRoot && (e.relativeTarget = _, e.relativeTargetOrigin = E, e.relativeParent = g);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: p
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function BM(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function PM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ZM(e) {
  e.clearSnapshot();
}
function f0(e) {
  e.clearMeasurements();
}
function d0(e) {
  e.isLayoutDirty = !1;
}
function HM(e) {
  const { visualElement: n } = e.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function h0(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function GM(e) {
  e.resolveTargetDelta();
}
function qM(e) {
  e.calcProjection();
}
function YM(e) {
  e.resetSkewAndRotation();
}
function FM(e) {
  e.removeLeadSnapshot();
}
function m0(e, n, r) {
  e.translate = rt(n.translate, 0, r), e.scale = rt(n.scale, 1, r), e.origin = n.origin, e.originPoint = n.originPoint;
}
function p0(e, n, r, s) {
  e.min = rt(n.min, r.min, s), e.max = rt(n.max, r.max, s);
}
function XM(e, n, r, s) {
  p0(e.x, n.x, r.x, s), p0(e.y, n.y, r.y, s);
}
function KM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const QM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, g0 = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), v0 = g0("applewebkit/") && !g0("chrome/") ? Math.round : zn;
function y0(e) {
  e.min = v0(e.min), e.max = v0(e.max);
}
function IM(e) {
  y0(e.x), y0(e.y);
}
function GS(e, n, r) {
  return e === "position" || e === "preserve-aspect" && !aM(u0(n), u0(r), 0.2);
}
function JM(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const WM = HS({
  attachResizeListener: (e, n) => To(e, "resize", n),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Md = {
  current: void 0
}, qS = HS({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Md.current) {
      const e = new WM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Md.current = e;
    }
    return Md.current;
  },
  resetTransform: (e, n) => {
    e.style.transform = n !== void 0 ? n : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), eD = {
  pan: {
    Feature: yM
  },
  drag: {
    Feature: vM,
    ProjectionNode: qS,
    MeasureLayout: NS
  }
};
function b0(e, n, r) {
  const { props: s } = e;
  e.animationState && s.whileHover && e.animationState.setActive("whileHover", r === "Start");
  const l = "onHover" + r, c = s[l];
  c && tt.postRender(() => c(n, Do(n)));
}
class tD extends tr {
  mount() {
    const { current: n } = this.node;
    n && (this.unmount = T6(n, (r, s) => (b0(this.node, s, "Start"), (l) => b0(this.node, l, "End"))));
  }
  unmount() {
  }
}
class nD extends tr {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let n = !1;
    try {
      n = this.node.current.matches(":focus-visible");
    } catch {
      n = !0;
    }
    !n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = _o(To(this.node.current, "focus", () => this.onFocus()), To(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function x0(e, n, r) {
  const { props: s } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && s.whileTap && e.animationState.setActive("whileTap", r === "Start");
  const l = "onTap" + (r === "End" ? "" : r), c = s[l];
  c && tt.postRender(() => c(n, Do(n)));
}
class aD extends tr {
  mount() {
    const { current: n } = this.node;
    n && (this.unmount = C6(n, (r, s) => (x0(this.node, s, "Start"), (l, { success: c }) => x0(this.node, l, c ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const bh = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap(), rD = (e) => {
  const n = bh.get(e.target);
  n && n(e);
}, iD = (e) => {
  e.forEach(rD);
};
function sD({ root: e, ...n }) {
  const r = e || document;
  Dd.has(r) || Dd.set(r, {});
  const s = Dd.get(r), l = JSON.stringify(n);
  return s[l] || (s[l] = new IntersectionObserver(iD, { root: e, ...n })), s[l];
}
function oD(e, n, r) {
  const s = sD(n);
  return bh.set(e, r), s.observe(e), () => {
    bh.delete(e), s.unobserve(e);
  };
}
const lD = {
  some: 0,
  all: 1
};
class uD extends tr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(), { root: r, margin: s, amount: l = "some", once: c } = n, f = {
      root: r ? r.current : void 0,
      rootMargin: s,
      threshold: typeof l == "number" ? l : lD[l]
    }, h = (m) => {
      const { isIntersecting: p } = m;
      if (this.isInView === p || (this.isInView = p, c && !p && this.hasEnteredView))
        return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(), x = p ? g : y;
      x && x(m);
    };
    return oD(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: n, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(cD(n, r)) && this.startObserver();
  }
  unmount() {
  }
}
function cD({ viewport: e = {} }, { viewport: n = {} } = {}) {
  return (r) => e[r] !== n[r];
}
const fD = {
  inView: {
    Feature: uD
  },
  tap: {
    Feature: aD
  },
  focus: {
    Feature: nD
  },
  hover: {
    Feature: tD
  }
}, dD = {
  layout: {
    ProjectionNode: qS,
    MeasureLayout: NS
  }
}, hD = {
  ...IC,
  ...fD,
  ...eD,
  ...dD
}, vt = /* @__PURE__ */ hC(hD, _C), S0 = ({
  size: e = 24,
  className: n,
  ...r
}) => /* @__PURE__ */ F.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    ...r,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: er("animate-spin", n),
    children: /* @__PURE__ */ F.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
  }
);
function re(e, n, r) {
  function s(h, m) {
    var p;
    Object.defineProperty(h, "_zod", {
      value: h._zod ?? {},
      enumerable: !1
    }), (p = h._zod).traits ?? (p.traits = /* @__PURE__ */ new Set()), h._zod.traits.add(e), n(h, m);
    for (const g in f.prototype)
      g in h || Object.defineProperty(h, g, { value: f.prototype[g].bind(h) });
    h._zod.constr = f, h._zod.def = m;
  }
  const l = r?.Parent ?? Object;
  class c extends l {
  }
  Object.defineProperty(c, "name", { value: e });
  function f(h) {
    var m;
    const p = r?.Parent ? new c() : this;
    s(p, h), (m = p._zod).deferred ?? (m.deferred = []);
    for (const g of p._zod.deferred)
      g();
    return p;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (h) => r?.Parent && h instanceof r.Parent ? !0 : h?._zod?.traits?.has(e)
  }), Object.defineProperty(f, "name", { value: e }), f;
}
class Eo extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const YS = {};
function Or(e) {
  return YS;
}
function mD(e) {
  const n = Object.values(e).filter((s) => typeof s == "number");
  return Object.entries(e).filter(([s, l]) => n.indexOf(+s) === -1).map(([s, l]) => l);
}
function xh(e, n) {
  return typeof n == "bigint" ? n.toString() : n;
}
function FS(e) {
  return {
    get value() {
      {
        const n = e();
        return Object.defineProperty(this, "value", { value: n }), n;
      }
    }
  };
}
function bm(e) {
  return e == null;
}
function xm(e) {
  const n = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(n, r);
}
const w0 = Symbol("evaluating");
function We(e, n, r) {
  let s;
  Object.defineProperty(e, n, {
    get() {
      if (s !== w0)
        return s === void 0 && (s = w0, s = r()), s;
    },
    set(l) {
      Object.defineProperty(e, n, {
        value: l
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function pD(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function jr(e, n, r) {
  Object.defineProperty(e, n, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ii(...e) {
  const n = {};
  for (const r of e) {
    const s = Object.getOwnPropertyDescriptors(r);
    Object.assign(n, s);
  }
  return Object.defineProperties({}, n);
}
function T0(e) {
  return JSON.stringify(e);
}
const XS = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Sh(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const gD = FS(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Su(e) {
  if (Sh(e) === !1)
    return !1;
  const n = e.constructor;
  if (n === void 0)
    return !0;
  const r = n.prototype;
  return !(Sh(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function KS(e) {
  return Su(e) ? { ...e } : e;
}
const vD = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function $u(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Nr(e, n, r) {
  const s = new e._zod.constr(n ?? e._zod.def);
  return (!n || r?.parent) && (s._zod.parent = e), s;
}
function De(e) {
  const n = e;
  if (!n)
    return {};
  if (typeof n == "string")
    return { error: () => n };
  if (n?.message !== void 0) {
    if (n?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    n.error = n.message;
  }
  return delete n.message, typeof n.error == "string" ? { ...n, error: () => n.error } : n;
}
function yD(e) {
  return Object.keys(e).filter((n) => e[n]._zod.optin === "optional" && e[n]._zod.optout === "optional");
}
function bD(e, n) {
  const r = e._zod.def, s = Ii(e._zod.def, {
    get shape() {
      const l = {};
      for (const c in n) {
        if (!(c in r.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        n[c] && (l[c] = r.shape[c]);
      }
      return jr(this, "shape", l), l;
    },
    checks: []
  });
  return Nr(e, s);
}
function xD(e, n) {
  const r = e._zod.def, s = Ii(e._zod.def, {
    get shape() {
      const l = { ...e._zod.def.shape };
      for (const c in n) {
        if (!(c in r.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        n[c] && delete l[c];
      }
      return jr(this, "shape", l), l;
    },
    checks: []
  });
  return Nr(e, s);
}
function SD(e, n) {
  if (!Su(n))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = Ii(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...n };
      return jr(this, "shape", s), s;
    },
    checks: []
  });
  return Nr(e, r);
}
function wD(e, n) {
  const r = Ii(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...n._zod.def.shape };
      return jr(this, "shape", s), s;
    },
    get catchall() {
      return n._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Nr(e, r);
}
function TD(e, n, r) {
  const s = Ii(n._zod.def, {
    get shape() {
      const l = n._zod.def.shape, c = { ...l };
      if (r)
        for (const f in r) {
          if (!(f in l))
            throw new Error(`Unrecognized key: "${f}"`);
          r[f] && (c[f] = e ? new e({
            type: "optional",
            innerType: l[f]
          }) : l[f]);
        }
      else
        for (const f in l)
          c[f] = e ? new e({
            type: "optional",
            innerType: l[f]
          }) : l[f];
      return jr(this, "shape", c), c;
    },
    checks: []
  });
  return Nr(n, s);
}
function ED(e, n, r) {
  const s = Ii(n._zod.def, {
    get shape() {
      const l = n._zod.def.shape, c = { ...l };
      if (r)
        for (const f in r) {
          if (!(f in c))
            throw new Error(`Unrecognized key: "${f}"`);
          r[f] && (c[f] = new e({
            type: "nonoptional",
            innerType: l[f]
          }));
        }
      else
        for (const f in l)
          c[f] = new e({
            type: "nonoptional",
            innerType: l[f]
          });
      return jr(this, "shape", c), c;
    },
    checks: []
  });
  return Nr(n, s);
}
function co(e, n = 0) {
  for (let r = n; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function QS(e, n) {
  return n.map((r) => {
    var s;
    return (s = r).path ?? (s.path = []), r.path.unshift(e), r;
  });
}
function nu(e) {
  return typeof e == "string" ? e : e?.message;
}
function kr(e, n, r) {
  const s = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const l = nu(e.inst?._zod.def?.error?.(e)) ?? nu(n?.error?.(e)) ?? nu(r.customError?.(e)) ?? nu(r.localeError?.(e)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, n?.reportInput || delete s.input, s;
}
function Sm(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Ao(...e) {
  const [n, r, s] = e;
  return typeof n == "string" ? {
    message: n,
    code: "custom",
    input: r,
    inst: s
  } : { ...n };
}
const IS = (e, n) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: n,
    enumerable: !1
  }), e.message = JSON.stringify(n, xh, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, wm = re("$ZodError", IS), ju = re("$ZodError", IS, { Parent: Error });
function AD(e, n = (r) => r.message) {
  const r = {}, s = [];
  for (const l of e.issues)
    l.path.length > 0 ? (r[l.path[0]] = r[l.path[0]] || [], r[l.path[0]].push(n(l))) : s.push(n(l));
  return { formErrors: s, fieldErrors: r };
}
function _D(e, n) {
  const r = n || function(c) {
    return c.message;
  }, s = { _errors: [] }, l = (c) => {
    for (const f of c.issues)
      if (f.code === "invalid_union" && f.errors.length)
        f.errors.map((h) => l({ issues: h }));
      else if (f.code === "invalid_key")
        l({ issues: f.issues });
      else if (f.code === "invalid_element")
        l({ issues: f.issues });
      else if (f.path.length === 0)
        s._errors.push(r(f));
      else {
        let h = s, m = 0;
        for (; m < f.path.length; ) {
          const p = f.path[m];
          m === f.path.length - 1 ? (h[p] = h[p] || { _errors: [] }, h[p]._errors.push(r(f))) : h[p] = h[p] || { _errors: [] }, h = h[p], m++;
        }
      }
  };
  return l(e), s;
}
const JS = (e) => (n, r, s, l) => {
  const c = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = n._zod.run({ value: r, issues: [] }, c);
  if (f instanceof Promise)
    throw new Eo();
  if (f.issues.length) {
    const h = new (l?.Err ?? e)(f.issues.map((m) => kr(m, c, Or())));
    throw XS(h, l?.callee), h;
  }
  return f.value;
}, CD = /* @__PURE__ */ JS(ju), WS = (e) => async (n, r, s, l) => {
  const c = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = n._zod.run({ value: r, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const h = new (l?.Err ?? e)(f.issues.map((m) => kr(m, c, Or())));
    throw XS(h, l?.callee), h;
  }
  return f.value;
}, MD = /* @__PURE__ */ WS(ju), ew = (e) => (n, r, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, c = n._zod.run({ value: r, issues: [] }, l);
  if (c instanceof Promise)
    throw new Eo();
  return c.issues.length ? {
    success: !1,
    error: new (e ?? wm)(c.issues.map((f) => kr(f, l, Or())))
  } : { success: !0, data: c.value };
}, DD = /* @__PURE__ */ ew(ju), tw = (e) => async (n, r, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let c = n._zod.run({ value: r, issues: [] }, l);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new e(c.issues.map((f) => kr(f, l, Or())))
  } : { success: !0, data: c.value };
}, zD = /* @__PURE__ */ tw(ju), RD = /^[cC][^\s-]{8,}$/, VD = /^[0-9a-z]+$/, OD = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, kD = /^[0-9a-vA-V]{20}$/, $D = /^[A-Za-z0-9]{27}$/, jD = /^[a-zA-Z0-9_-]{21}$/, ND = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, LD = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, E0 = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/, UD = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, BD = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function PD() {
  return new RegExp(BD, "u");
}
const ZD = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, HD = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/, GD = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, qD = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, YD = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, nw = /^[A-Za-z0-9_-]*$/, FD = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, XD = /^\+(?:[0-9]){6,14}[0-9]$/, aw = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", KD = /* @__PURE__ */ new RegExp(`^${aw}$`);
function rw(e) {
  const n = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${n}` : e.precision === 0 ? `${n}:[0-5]\\d` : `${n}:[0-5]\\d\\.\\d{${e.precision}}` : `${n}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function QD(e) {
  return new RegExp(`^${rw(e)}$`);
}
function ID(e) {
  const n = rw({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${n}(?:${r.join("|")})`;
  return new RegExp(`^${aw}T(?:${s})$`);
}
const JD = (e) => {
  const n = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${n}$`);
}, WD = /^[^A-Z]*$/, ez = /^[^a-z]*$/, Qn = /* @__PURE__ */ re("$ZodCheck", (e, n) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = n, (r = e._zod).onattach ?? (r.onattach = []);
}), tz = /* @__PURE__ */ re("$ZodCheckMaxLength", (e, n) => {
  var r;
  Qn.init(e, n), (r = e._zod.def).when ?? (r.when = (s) => {
    const l = s.value;
    return !bm(l) && l.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    n.maximum < l && (s._zod.bag.maximum = n.maximum);
  }), e._zod.check = (s) => {
    const l = s.value;
    if (l.length <= n.maximum)
      return;
    const f = Sm(l);
    s.issues.push({
      origin: f,
      code: "too_big",
      maximum: n.maximum,
      inclusive: !0,
      input: l,
      inst: e,
      continue: !n.abort
    });
  };
}), nz = /* @__PURE__ */ re("$ZodCheckMinLength", (e, n) => {
  var r;
  Qn.init(e, n), (r = e._zod.def).when ?? (r.when = (s) => {
    const l = s.value;
    return !bm(l) && l.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    n.minimum > l && (s._zod.bag.minimum = n.minimum);
  }), e._zod.check = (s) => {
    const l = s.value;
    if (l.length >= n.minimum)
      return;
    const f = Sm(l);
    s.issues.push({
      origin: f,
      code: "too_small",
      minimum: n.minimum,
      inclusive: !0,
      input: l,
      inst: e,
      continue: !n.abort
    });
  };
}), az = /* @__PURE__ */ re("$ZodCheckLengthEquals", (e, n) => {
  var r;
  Qn.init(e, n), (r = e._zod.def).when ?? (r.when = (s) => {
    const l = s.value;
    return !bm(l) && l.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = n.length, l.maximum = n.length, l.length = n.length;
  }), e._zod.check = (s) => {
    const l = s.value, c = l.length;
    if (c === n.length)
      return;
    const f = Sm(l), h = c > n.length;
    s.issues.push({
      origin: f,
      ...h ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: e,
      continue: !n.abort
    });
  };
}), Nu = /* @__PURE__ */ re("$ZodCheckStringFormat", (e, n) => {
  var r, s;
  Qn.init(e, n), e._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.format = n.format, n.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(n.pattern));
  }), n.pattern ? (r = e._zod).check ?? (r.check = (l) => {
    n.pattern.lastIndex = 0, !n.pattern.test(l.value) && l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: n.format,
      input: l.value,
      ...n.pattern ? { pattern: n.pattern.toString() } : {},
      inst: e,
      continue: !n.abort
    });
  }) : (s = e._zod).check ?? (s.check = () => {
  });
}), rz = /* @__PURE__ */ re("$ZodCheckRegex", (e, n) => {
  Nu.init(e, n), e._zod.check = (r) => {
    n.pattern.lastIndex = 0, !n.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: n.pattern.toString(),
      inst: e,
      continue: !n.abort
    });
  };
}), iz = /* @__PURE__ */ re("$ZodCheckLowerCase", (e, n) => {
  n.pattern ?? (n.pattern = WD), Nu.init(e, n);
}), sz = /* @__PURE__ */ re("$ZodCheckUpperCase", (e, n) => {
  n.pattern ?? (n.pattern = ez), Nu.init(e, n);
}), oz = /* @__PURE__ */ re("$ZodCheckIncludes", (e, n) => {
  Qn.init(e, n);
  const r = $u(n.includes), s = new RegExp(typeof n.position == "number" ? `^.{${n.position}}${r}` : r);
  n.pattern = s, e._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(s);
  }), e._zod.check = (l) => {
    l.value.includes(n.includes, n.position) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: n.includes,
      input: l.value,
      inst: e,
      continue: !n.abort
    });
  };
}), lz = /* @__PURE__ */ re("$ZodCheckStartsWith", (e, n) => {
  Qn.init(e, n);
  const r = new RegExp(`^${$u(n.prefix)}.*`);
  n.pattern ?? (n.pattern = r), e._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(r);
  }), e._zod.check = (s) => {
    s.value.startsWith(n.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: n.prefix,
      input: s.value,
      inst: e,
      continue: !n.abort
    });
  };
}), uz = /* @__PURE__ */ re("$ZodCheckEndsWith", (e, n) => {
  Qn.init(e, n);
  const r = new RegExp(`.*${$u(n.suffix)}$`);
  n.pattern ?? (n.pattern = r), e._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(r);
  }), e._zod.check = (s) => {
    s.value.endsWith(n.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: n.suffix,
      input: s.value,
      inst: e,
      continue: !n.abort
    });
  };
}), cz = /* @__PURE__ */ re("$ZodCheckOverwrite", (e, n) => {
  Qn.init(e, n), e._zod.check = (r) => {
    r.value = n.tx(r.value);
  };
});
class fz {
  constructor(n = []) {
    this.content = [], this.indent = 0, this && (this.args = n);
  }
  indented(n) {
    this.indent += 1, n(this), this.indent -= 1;
  }
  write(n) {
    if (typeof n == "function") {
      n(this, { execution: "sync" }), n(this, { execution: "async" });
      return;
    }
    const s = n.split(`
`).filter((f) => f), l = Math.min(...s.map((f) => f.length - f.trimStart().length)), c = s.map((f) => f.slice(l)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const n = Function, r = this?.args, l = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new n(...r, l.join(`
`));
  }
}
const dz = {
  major: 4,
  minor: 0,
  patch: 17
}, Et = /* @__PURE__ */ re("$ZodType", (e, n) => {
  var r;
  e ?? (e = {}), e._zod.def = n, e._zod.bag = e._zod.bag || {}, e._zod.version = dz;
  const s = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && s.unshift(e);
  for (const l of s)
    for (const c of l._zod.onattach)
      c(e);
  if (s.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const l = (c, f, h) => {
      let m = co(c), p;
      for (const g of f) {
        if (g._zod.def.when) {
          if (!g._zod.def.when(c))
            continue;
        } else if (m)
          continue;
        const y = c.issues.length, x = g._zod.check(c);
        if (x instanceof Promise && h?.async === !1)
          throw new Eo();
        if (p || x instanceof Promise)
          p = (p ?? Promise.resolve()).then(async () => {
            await x, c.issues.length !== y && (m || (m = co(c, y)));
          });
        else {
          if (c.issues.length === y)
            continue;
          m || (m = co(c, y));
        }
      }
      return p ? p.then(() => c) : c;
    };
    e._zod.run = (c, f) => {
      const h = e._zod.parse(c, f);
      if (h instanceof Promise) {
        if (f.async === !1)
          throw new Eo();
        return h.then((m) => l(m, s, f));
      }
      return l(h, s, f);
    };
  }
  e["~standard"] = {
    validate: (l) => {
      try {
        const c = DD(e, l);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return zD(e, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Tm = /* @__PURE__ */ re("$ZodString", (e, n) => {
  Et.init(e, n), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? JD(e._zod.bag), e._zod.parse = (r, s) => {
    if (n.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), nt = /* @__PURE__ */ re("$ZodStringFormat", (e, n) => {
  Nu.init(e, n), Tm.init(e, n);
}), hz = /* @__PURE__ */ re("$ZodGUID", (e, n) => {
  n.pattern ?? (n.pattern = LD), nt.init(e, n);
}), mz = /* @__PURE__ */ re("$ZodUUID", (e, n) => {
  if (n.version) {
    const s = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[n.version];
    if (s === void 0)
      throw new Error(`Invalid UUID version: "${n.version}"`);
    n.pattern ?? (n.pattern = E0(s));
  } else
    n.pattern ?? (n.pattern = E0());
  nt.init(e, n);
}), pz = /* @__PURE__ */ re("$ZodEmail", (e, n) => {
  n.pattern ?? (n.pattern = UD), nt.init(e, n);
}), gz = /* @__PURE__ */ re("$ZodURL", (e, n) => {
  nt.init(e, n), e._zod.check = (r) => {
    try {
      const s = r.value.trim(), l = new URL(s);
      n.hostname && (n.hostname.lastIndex = 0, n.hostname.test(l.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: FD.source,
        input: r.value,
        inst: e,
        continue: !n.abort
      })), n.protocol && (n.protocol.lastIndex = 0, n.protocol.test(l.protocol.endsWith(":") ? l.protocol.slice(0, -1) : l.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: n.protocol.source,
        input: r.value,
        inst: e,
        continue: !n.abort
      })), n.normalize ? r.value = l.href : r.value = s;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), vz = /* @__PURE__ */ re("$ZodEmoji", (e, n) => {
  n.pattern ?? (n.pattern = PD()), nt.init(e, n);
}), yz = /* @__PURE__ */ re("$ZodNanoID", (e, n) => {
  n.pattern ?? (n.pattern = jD), nt.init(e, n);
}), bz = /* @__PURE__ */ re("$ZodCUID", (e, n) => {
  n.pattern ?? (n.pattern = RD), nt.init(e, n);
}), xz = /* @__PURE__ */ re("$ZodCUID2", (e, n) => {
  n.pattern ?? (n.pattern = VD), nt.init(e, n);
}), Sz = /* @__PURE__ */ re("$ZodULID", (e, n) => {
  n.pattern ?? (n.pattern = OD), nt.init(e, n);
}), wz = /* @__PURE__ */ re("$ZodXID", (e, n) => {
  n.pattern ?? (n.pattern = kD), nt.init(e, n);
}), Tz = /* @__PURE__ */ re("$ZodKSUID", (e, n) => {
  n.pattern ?? (n.pattern = $D), nt.init(e, n);
}), Ez = /* @__PURE__ */ re("$ZodISODateTime", (e, n) => {
  n.pattern ?? (n.pattern = ID(n)), nt.init(e, n);
}), Az = /* @__PURE__ */ re("$ZodISODate", (e, n) => {
  n.pattern ?? (n.pattern = KD), nt.init(e, n);
}), _z = /* @__PURE__ */ re("$ZodISOTime", (e, n) => {
  n.pattern ?? (n.pattern = QD(n)), nt.init(e, n);
}), Cz = /* @__PURE__ */ re("$ZodISODuration", (e, n) => {
  n.pattern ?? (n.pattern = ND), nt.init(e, n);
}), Mz = /* @__PURE__ */ re("$ZodIPv4", (e, n) => {
  n.pattern ?? (n.pattern = ZD), nt.init(e, n), e._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.format = "ipv4";
  });
}), Dz = /* @__PURE__ */ re("$ZodIPv6", (e, n) => {
  n.pattern ?? (n.pattern = HD), nt.init(e, n), e._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), zz = /* @__PURE__ */ re("$ZodCIDRv4", (e, n) => {
  n.pattern ?? (n.pattern = GD), nt.init(e, n);
}), Rz = /* @__PURE__ */ re("$ZodCIDRv6", (e, n) => {
  n.pattern ?? (n.pattern = qD), nt.init(e, n), e._zod.check = (r) => {
    const [s, l] = r.value.split("/");
    try {
      if (!l)
        throw new Error();
      const c = Number(l);
      if (`${c}` !== l)
        throw new Error();
      if (c < 0 || c > 128)
        throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
});
function iw(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Vz = /* @__PURE__ */ re("$ZodBase64", (e, n) => {
  n.pattern ?? (n.pattern = YD), nt.init(e, n), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    iw(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
});
function Oz(e) {
  if (!nw.test(e))
    return !1;
  const n = e.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), r = n.padEnd(Math.ceil(n.length / 4) * 4, "=");
  return iw(r);
}
const kz = /* @__PURE__ */ re("$ZodBase64URL", (e, n) => {
  n.pattern ?? (n.pattern = nw), nt.init(e, n), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    Oz(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
}), $z = /* @__PURE__ */ re("$ZodE164", (e, n) => {
  n.pattern ?? (n.pattern = XD), nt.init(e, n);
});
function jz(e, n = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [s] = r;
    if (!s)
      return !1;
    const l = JSON.parse(atob(s));
    return !("typ" in l && l?.typ !== "JWT" || !l.alg || n && (!("alg" in l) || l.alg !== n));
  } catch {
    return !1;
  }
}
const Nz = /* @__PURE__ */ re("$ZodJWT", (e, n) => {
  nt.init(e, n), e._zod.check = (r) => {
    jz(r.value, n.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
}), Lz = /* @__PURE__ */ re("$ZodUnknown", (e, n) => {
  Et.init(e, n), e._zod.parse = (r) => r;
}), Uz = /* @__PURE__ */ re("$ZodNever", (e, n) => {
  Et.init(e, n), e._zod.parse = (r, s) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function A0(e, n, r) {
  e.issues.length && n.issues.push(...QS(r, e.issues)), n.value[r] = e.value;
}
const Bz = /* @__PURE__ */ re("$ZodArray", (e, n) => {
  Et.init(e, n), e._zod.parse = (r, s) => {
    const l = r.value;
    if (!Array.isArray(l))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: e
      }), r;
    r.value = Array(l.length);
    const c = [];
    for (let f = 0; f < l.length; f++) {
      const h = l[f], m = n.element._zod.run({
        value: h,
        issues: []
      }, s);
      m instanceof Promise ? c.push(m.then((p) => A0(p, r, f))) : A0(m, r, f);
    }
    return c.length ? Promise.all(c).then(() => r) : r;
  };
});
function au(e, n, r, s) {
  e.issues.length && n.issues.push(...QS(r, e.issues)), e.value === void 0 ? r in s && (n.value[r] = void 0) : n.value[r] = e.value;
}
const Pz = /* @__PURE__ */ re("$ZodObject", (e, n) => {
  Et.init(e, n);
  const r = FS(() => {
    const y = Object.keys(n.shape);
    for (const E of y)
      if (!n.shape[E]._zod.traits.has("$ZodType"))
        throw new Error(`Invalid element at key "${E}": expected a Zod schema`);
    const x = yD(n.shape);
    return {
      shape: n.shape,
      keys: y,
      keySet: new Set(y),
      numKeys: y.length,
      optionalKeys: new Set(x)
    };
  });
  We(e._zod, "propValues", () => {
    const y = n.shape, x = {};
    for (const E in y) {
      const _ = y[E]._zod;
      if (_.values) {
        x[E] ?? (x[E] = /* @__PURE__ */ new Set());
        for (const D of _.values)
          x[E].add(D);
      }
    }
    return x;
  });
  const s = (y) => {
    const x = new fz(["shape", "payload", "ctx"]), E = r.value, _ = (R) => {
      const Z = T0(R);
      return `shape[${Z}]._zod.run({ value: input[${Z}], issues: [] }, ctx)`;
    };
    x.write("const input = payload.value;");
    const D = /* @__PURE__ */ Object.create(null);
    let $ = 0;
    for (const R of E.keys)
      D[R] = `key_${$++}`;
    x.write("const newResult = {}");
    for (const R of E.keys) {
      const Z = D[R], W = T0(R);
      x.write(`const ${Z} = ${_(R)};`), x.write(`
        if (${Z}.issues.length) {
          payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${W}, ...iss.path] : [${W}]
          })));
        }
        
        if (${Z}.value === undefined) {
          if (${W} in input) {
            newResult[${W}] = undefined;
          }
        } else {
          newResult[${W}] = ${Z}.value;
        }
      `);
    }
    x.write("payload.value = newResult;"), x.write("return payload;");
    const X = x.compile();
    return (R, Z) => X(y, R, Z);
  };
  let l;
  const c = Sh, f = !YS.jitless, m = f && gD.value, p = n.catchall;
  let g;
  e._zod.parse = (y, x) => {
    g ?? (g = r.value);
    const E = y.value;
    if (!c(E))
      return y.issues.push({
        expected: "object",
        code: "invalid_type",
        input: E,
        inst: e
      }), y;
    const _ = [];
    if (f && m && x?.async === !1 && x.jitless !== !0)
      l || (l = s(n.shape)), y = l(y, x);
    else {
      y.value = {};
      const Z = g.shape;
      for (const W of g.keys) {
        const O = Z[W]._zod.run({ value: E[W], issues: [] }, x);
        O instanceof Promise ? _.push(O.then((J) => au(J, y, W, E))) : au(O, y, W, E);
      }
    }
    if (!p)
      return _.length ? Promise.all(_).then(() => y) : y;
    const D = [], $ = g.keySet, X = p._zod, R = X.def.type;
    for (const Z of Object.keys(E)) {
      if ($.has(Z))
        continue;
      if (R === "never") {
        D.push(Z);
        continue;
      }
      const W = X.run({ value: E[Z], issues: [] }, x);
      W instanceof Promise ? _.push(W.then((Y) => au(Y, y, Z, E))) : au(W, y, Z, E);
    }
    return D.length && y.issues.push({
      code: "unrecognized_keys",
      keys: D,
      input: E,
      inst: e
    }), _.length ? Promise.all(_).then(() => y) : y;
  };
});
function _0(e, n, r, s) {
  for (const c of e)
    if (c.issues.length === 0)
      return n.value = c.value, n;
  const l = e.filter((c) => !co(c));
  return l.length === 1 ? (n.value = l[0].value, l[0]) : (n.issues.push({
    code: "invalid_union",
    input: n.value,
    inst: r,
    errors: e.map((c) => c.issues.map((f) => kr(f, s, Or())))
  }), n);
}
const Zz = /* @__PURE__ */ re("$ZodUnion", (e, n) => {
  Et.init(e, n), We(e._zod, "optin", () => n.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), We(e._zod, "optout", () => n.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), We(e._zod, "values", () => {
    if (n.options.every((l) => l._zod.values))
      return new Set(n.options.flatMap((l) => Array.from(l._zod.values)));
  }), We(e._zod, "pattern", () => {
    if (n.options.every((l) => l._zod.pattern)) {
      const l = n.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${l.map((c) => xm(c.source)).join("|")})$`);
    }
  });
  const r = n.options.length === 1, s = n.options[0]._zod.run;
  e._zod.parse = (l, c) => {
    if (r)
      return s(l, c);
    let f = !1;
    const h = [];
    for (const m of n.options) {
      const p = m._zod.run({
        value: l.value,
        issues: []
      }, c);
      if (p instanceof Promise)
        h.push(p), f = !0;
      else {
        if (p.issues.length === 0)
          return p;
        h.push(p);
      }
    }
    return f ? Promise.all(h).then((m) => _0(m, l, e, c)) : _0(h, l, e, c);
  };
}), Hz = /* @__PURE__ */ re("$ZodIntersection", (e, n) => {
  Et.init(e, n), e._zod.parse = (r, s) => {
    const l = r.value, c = n.left._zod.run({ value: l, issues: [] }, s), f = n.right._zod.run({ value: l, issues: [] }, s);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([m, p]) => C0(r, m, p)) : C0(r, c, f);
  };
});
function wh(e, n) {
  if (e === n)
    return { valid: !0, data: e };
  if (e instanceof Date && n instanceof Date && +e == +n)
    return { valid: !0, data: e };
  if (Su(e) && Su(n)) {
    const r = Object.keys(n), s = Object.keys(e).filter((c) => r.indexOf(c) !== -1), l = { ...e, ...n };
    for (const c of s) {
      const f = wh(e[c], n[c]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...f.mergeErrorPath]
        };
      l[c] = f.data;
    }
    return { valid: !0, data: l };
  }
  if (Array.isArray(e) && Array.isArray(n)) {
    if (e.length !== n.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const l = e[s], c = n[s], f = wh(l, c);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...f.mergeErrorPath]
        };
      r.push(f.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function C0(e, n, r) {
  if (n.issues.length && e.issues.push(...n.issues), r.issues.length && e.issues.push(...r.issues), co(e))
    return e;
  const s = wh(n.value, r.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const Gz = /* @__PURE__ */ re("$ZodEnum", (e, n) => {
  Et.init(e, n);
  const r = mD(n.entries), s = new Set(r);
  e._zod.values = s, e._zod.pattern = new RegExp(`^(${r.filter((l) => vD.has(typeof l)).map((l) => typeof l == "string" ? $u(l) : l.toString()).join("|")})$`), e._zod.parse = (l, c) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: r,
      input: f,
      inst: e
    }), l;
  };
}), qz = /* @__PURE__ */ re("$ZodTransform", (e, n) => {
  Et.init(e, n), e._zod.parse = (r, s) => {
    const l = n.transform(r.value, r);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (r.value = f, r));
    if (l instanceof Promise)
      throw new Eo();
    return r.value = l, r;
  };
});
function M0(e, n) {
  return e.issues.length && n === void 0 ? { issues: [], value: void 0 } : e;
}
const Yz = /* @__PURE__ */ re("$ZodOptional", (e, n) => {
  Et.init(e, n), e._zod.optin = "optional", e._zod.optout = "optional", We(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, void 0]) : void 0), We(e._zod, "pattern", () => {
    const r = n.innerType._zod.pattern;
    return r ? new RegExp(`^(${xm(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, s) => {
    if (n.innerType._zod.optin === "optional") {
      const l = n.innerType._zod.run(r, s);
      return l instanceof Promise ? l.then((c) => M0(c, r.value)) : M0(l, r.value);
    }
    return r.value === void 0 ? r : n.innerType._zod.run(r, s);
  };
}), Fz = /* @__PURE__ */ re("$ZodNullable", (e, n) => {
  Et.init(e, n), We(e._zod, "optin", () => n.innerType._zod.optin), We(e._zod, "optout", () => n.innerType._zod.optout), We(e._zod, "pattern", () => {
    const r = n.innerType._zod.pattern;
    return r ? new RegExp(`^(${xm(r.source)}|null)$`) : void 0;
  }), We(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, null]) : void 0), e._zod.parse = (r, s) => r.value === null ? r : n.innerType._zod.run(r, s);
}), Xz = /* @__PURE__ */ re("$ZodDefault", (e, n) => {
  Et.init(e, n), e._zod.optin = "optional", We(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (r, s) => {
    if (r.value === void 0)
      return r.value = n.defaultValue, r;
    const l = n.innerType._zod.run(r, s);
    return l instanceof Promise ? l.then((c) => D0(c, n)) : D0(l, n);
  };
});
function D0(e, n) {
  return e.value === void 0 && (e.value = n.defaultValue), e;
}
const Kz = /* @__PURE__ */ re("$ZodPrefault", (e, n) => {
  Et.init(e, n), e._zod.optin = "optional", We(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (r, s) => (r.value === void 0 && (r.value = n.defaultValue), n.innerType._zod.run(r, s));
}), Qz = /* @__PURE__ */ re("$ZodNonOptional", (e, n) => {
  Et.init(e, n), We(e._zod, "values", () => {
    const r = n.innerType._zod.values;
    return r ? new Set([...r].filter((s) => s !== void 0)) : void 0;
  }), e._zod.parse = (r, s) => {
    const l = n.innerType._zod.run(r, s);
    return l instanceof Promise ? l.then((c) => z0(c, e)) : z0(l, e);
  };
});
function z0(e, n) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: n
  }), e;
}
const Iz = /* @__PURE__ */ re("$ZodCatch", (e, n) => {
  Et.init(e, n), We(e._zod, "optin", () => n.innerType._zod.optin), We(e._zod, "optout", () => n.innerType._zod.optout), We(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (r, s) => {
    const l = n.innerType._zod.run(r, s);
    return l instanceof Promise ? l.then((c) => (r.value = c.value, c.issues.length && (r.value = n.catchValue({
      ...r,
      error: {
        issues: c.issues.map((f) => kr(f, s, Or()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = l.value, l.issues.length && (r.value = n.catchValue({
      ...r,
      error: {
        issues: l.issues.map((c) => kr(c, s, Or()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), Jz = /* @__PURE__ */ re("$ZodPipe", (e, n) => {
  Et.init(e, n), We(e._zod, "values", () => n.in._zod.values), We(e._zod, "optin", () => n.in._zod.optin), We(e._zod, "optout", () => n.out._zod.optout), We(e._zod, "propValues", () => n.in._zod.propValues), e._zod.parse = (r, s) => {
    const l = n.in._zod.run(r, s);
    return l instanceof Promise ? l.then((c) => R0(c, n, s)) : R0(l, n, s);
  };
});
function R0(e, n, r) {
  return e.issues.length ? e : n.out._zod.run({ value: e.value, issues: e.issues }, r);
}
const Wz = /* @__PURE__ */ re("$ZodReadonly", (e, n) => {
  Et.init(e, n), We(e._zod, "propValues", () => n.innerType._zod.propValues), We(e._zod, "values", () => n.innerType._zod.values), We(e._zod, "optin", () => n.innerType._zod.optin), We(e._zod, "optout", () => n.innerType._zod.optout), e._zod.parse = (r, s) => {
    const l = n.innerType._zod.run(r, s);
    return l instanceof Promise ? l.then(V0) : V0(l);
  };
});
function V0(e) {
  return e.value = Object.freeze(e.value), e;
}
const eR = /* @__PURE__ */ re("$ZodCustom", (e, n) => {
  Qn.init(e, n), Et.init(e, n), e._zod.parse = (r, s) => r, e._zod.check = (r) => {
    const s = r.value, l = n.fn(s);
    if (l instanceof Promise)
      return l.then((c) => O0(c, r, s, e));
    O0(l, r, s, e);
  };
});
function O0(e, n, r, s) {
  if (!e) {
    const l = {
      code: "custom",
      input: r,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (l.params = s._zod.def.params), n.issues.push(Ao(l));
  }
}
class tR {
  constructor() {
    this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(n, ...r) {
    const s = r[0];
    if (this._map.set(n, s), s && typeof s == "object" && "id" in s) {
      if (this._idmap.has(s.id))
        throw new Error(`ID ${s.id} already exists in the registry`);
      this._idmap.set(s.id, n);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(n) {
    const r = this._map.get(n);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(n), this;
  }
  get(n) {
    const r = n._zod.parent;
    if (r) {
      const s = { ...this.get(r) ?? {} };
      delete s.id;
      const l = { ...s, ...this._map.get(n) };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(n);
  }
  has(n) {
    return this._map.has(n);
  }
}
function nR() {
  return new tR();
}
const ru = /* @__PURE__ */ nR();
function aR(e, n) {
  return new e({
    type: "string",
    ...De(n)
  });
}
function sw(e, n) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function k0(e, n) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function rR(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function iR(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...De(n)
  });
}
function sR(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...De(n)
  });
}
function oR(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...De(n)
  });
}
function lR(e, n) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function uR(e, n) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function cR(e, n) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function fR(e, n) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function dR(e, n) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function hR(e, n) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function mR(e, n) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function pR(e, n) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function gR(e, n) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function vR(e, n) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function yR(e, n) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function bR(e, n) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function xR(e, n) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function SR(e, n) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function wR(e, n) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function TR(e, n) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...De(n)
  });
}
function ER(e, n) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...De(n)
  });
}
function AR(e, n) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...De(n)
  });
}
function _R(e, n) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...De(n)
  });
}
function CR(e, n) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...De(n)
  });
}
function MR(e) {
  return new e({
    type: "unknown"
  });
}
function DR(e, n) {
  return new e({
    type: "never",
    ...De(n)
  });
}
function ow(e, n) {
  return new tz({
    check: "max_length",
    ...De(n),
    maximum: e
  });
}
function wu(e, n) {
  return new nz({
    check: "min_length",
    ...De(n),
    minimum: e
  });
}
function lw(e, n) {
  return new az({
    check: "length_equals",
    ...De(n),
    length: e
  });
}
function zR(e, n) {
  return new rz({
    check: "string_format",
    format: "regex",
    ...De(n),
    pattern: e
  });
}
function RR(e) {
  return new iz({
    check: "string_format",
    format: "lowercase",
    ...De(e)
  });
}
function VR(e) {
  return new sz({
    check: "string_format",
    format: "uppercase",
    ...De(e)
  });
}
function OR(e, n) {
  return new oz({
    check: "string_format",
    format: "includes",
    ...De(n),
    includes: e
  });
}
function kR(e, n) {
  return new lz({
    check: "string_format",
    format: "starts_with",
    ...De(n),
    prefix: e
  });
}
function $R(e, n) {
  return new uz({
    check: "string_format",
    format: "ends_with",
    ...De(n),
    suffix: e
  });
}
function zo(e) {
  return new cz({
    check: "overwrite",
    tx: e
  });
}
function jR(e) {
  return zo((n) => n.normalize(e));
}
function NR() {
  return zo((e) => e.trim());
}
function LR() {
  return zo((e) => e.toLowerCase());
}
function UR() {
  return zo((e) => e.toUpperCase());
}
function BR(e, n, r) {
  return new e({
    type: "array",
    element: n,
    // get element() {
    //   return element;
    // },
    ...De(r)
  });
}
function PR(e, n, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: n,
    ...De(r)
  });
}
function ZR(e) {
  const n = HR((r) => (r.addIssue = (s) => {
    if (typeof s == "string")
      r.issues.push(Ao(s, r.value, n._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = r.value), l.inst ?? (l.inst = n), l.continue ?? (l.continue = !n._zod.def.abort), r.issues.push(Ao(l));
    }
  }, e(r.value, r)));
  return n;
}
function HR(e, n) {
  const r = new Qn({
    check: "custom",
    ...De(n)
  });
  return r._zod.check = e, r;
}
const GR = /* @__PURE__ */ re("ZodISODateTime", (e, n) => {
  Ez.init(e, n), it.init(e, n);
});
function qR(e) {
  return ER(GR, e);
}
const YR = /* @__PURE__ */ re("ZodISODate", (e, n) => {
  Az.init(e, n), it.init(e, n);
});
function FR(e) {
  return AR(YR, e);
}
const XR = /* @__PURE__ */ re("ZodISOTime", (e, n) => {
  _z.init(e, n), it.init(e, n);
});
function KR(e) {
  return _R(XR, e);
}
const QR = /* @__PURE__ */ re("ZodISODuration", (e, n) => {
  Cz.init(e, n), it.init(e, n);
});
function IR(e) {
  return CR(QR, e);
}
const JR = (e, n) => {
  wm.init(e, n), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => _D(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => AD(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, xh, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, xh, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Lu = re("ZodError", JR, {
  Parent: Error
}), WR = /* @__PURE__ */ JS(Lu), e5 = /* @__PURE__ */ WS(Lu), t5 = /* @__PURE__ */ ew(Lu), n5 = /* @__PURE__ */ tw(Lu), Ot = /* @__PURE__ */ re("ZodType", (e, n) => (Et.init(e, n), e.def = n, Object.defineProperty(e, "_def", { value: n }), e.check = (...r) => e.clone(
  {
    ...n,
    checks: [
      ...n.checks ?? [],
      ...r.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
    ]
  }
  // { parent: true }
), e.clone = (r, s) => Nr(e, r, s), e.brand = () => e, e.register = (r, s) => (r.add(e, s), e), e.parse = (r, s) => WR(e, r, s, { callee: e.parse }), e.safeParse = (r, s) => t5(e, r, s), e.parseAsync = async (r, s) => e5(e, r, s, { callee: e.parseAsync }), e.safeParseAsync = async (r, s) => n5(e, r, s), e.spa = e.safeParseAsync, e.refine = (r, s) => e.check(G5(r, s)), e.superRefine = (r) => e.check(q5(r)), e.overwrite = (r) => e.check(zo(r)), e.optional = () => N0(e), e.nullable = () => L0(e), e.nullish = () => N0(L0(e)), e.nonoptional = (r) => L5(e, r), e.array = () => E5(e), e.or = (r) => C5([e, r]), e.and = (r) => D5(e, r), e.transform = (r) => U0(e, V5(r)), e.default = (r) => $5(e, r), e.prefault = (r) => N5(e, r), e.catch = (r) => B5(e, r), e.pipe = (r) => U0(e, r), e.readonly = () => H5(e), e.describe = (r) => {
  const s = e.clone();
  return ru.add(s, { description: r }), s;
}, Object.defineProperty(e, "description", {
  get() {
    return ru.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return ru.get(e);
  const s = e.clone();
  return ru.add(s, r[0]), s;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), uw = /* @__PURE__ */ re("_ZodString", (e, n) => {
  Tm.init(e, n), Ot.init(e, n);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...s) => e.check(zR(...s)), e.includes = (...s) => e.check(OR(...s)), e.startsWith = (...s) => e.check(kR(...s)), e.endsWith = (...s) => e.check($R(...s)), e.min = (...s) => e.check(wu(...s)), e.max = (...s) => e.check(ow(...s)), e.length = (...s) => e.check(lw(...s)), e.nonempty = (...s) => e.check(wu(1, ...s)), e.lowercase = (s) => e.check(RR(s)), e.uppercase = (s) => e.check(VR(s)), e.trim = () => e.check(NR()), e.normalize = (...s) => e.check(jR(...s)), e.toLowerCase = () => e.check(LR()), e.toUpperCase = () => e.check(UR());
}), a5 = /* @__PURE__ */ re("ZodString", (e, n) => {
  Tm.init(e, n), uw.init(e, n), e.email = (r) => e.check(sw(cw, r)), e.url = (r) => e.check(lR(r5, r)), e.jwt = (r) => e.check(TR(b5, r)), e.emoji = (r) => e.check(uR(i5, r)), e.guid = (r) => e.check(k0($0, r)), e.uuid = (r) => e.check(rR(iu, r)), e.uuidv4 = (r) => e.check(iR(iu, r)), e.uuidv6 = (r) => e.check(sR(iu, r)), e.uuidv7 = (r) => e.check(oR(iu, r)), e.nanoid = (r) => e.check(cR(s5, r)), e.guid = (r) => e.check(k0($0, r)), e.cuid = (r) => e.check(fR(o5, r)), e.cuid2 = (r) => e.check(dR(l5, r)), e.ulid = (r) => e.check(hR(u5, r)), e.base64 = (r) => e.check(xR(g5, r)), e.base64url = (r) => e.check(SR(v5, r)), e.xid = (r) => e.check(mR(c5, r)), e.ksuid = (r) => e.check(pR(f5, r)), e.ipv4 = (r) => e.check(gR(d5, r)), e.ipv6 = (r) => e.check(vR(h5, r)), e.cidrv4 = (r) => e.check(yR(m5, r)), e.cidrv6 = (r) => e.check(bR(p5, r)), e.e164 = (r) => e.check(wR(y5, r)), e.datetime = (r) => e.check(qR(r)), e.date = (r) => e.check(FR(r)), e.time = (r) => e.check(KR(r)), e.duration = (r) => e.check(IR(r));
});
function Th(e) {
  return aR(a5, e);
}
const it = /* @__PURE__ */ re("ZodStringFormat", (e, n) => {
  nt.init(e, n), uw.init(e, n);
}), cw = /* @__PURE__ */ re("ZodEmail", (e, n) => {
  pz.init(e, n), it.init(e, n);
});
function fw(e) {
  return sw(cw, e);
}
const $0 = /* @__PURE__ */ re("ZodGUID", (e, n) => {
  hz.init(e, n), it.init(e, n);
}), iu = /* @__PURE__ */ re("ZodUUID", (e, n) => {
  mz.init(e, n), it.init(e, n);
}), r5 = /* @__PURE__ */ re("ZodURL", (e, n) => {
  gz.init(e, n), it.init(e, n);
}), i5 = /* @__PURE__ */ re("ZodEmoji", (e, n) => {
  vz.init(e, n), it.init(e, n);
}), s5 = /* @__PURE__ */ re("ZodNanoID", (e, n) => {
  yz.init(e, n), it.init(e, n);
}), o5 = /* @__PURE__ */ re("ZodCUID", (e, n) => {
  bz.init(e, n), it.init(e, n);
}), l5 = /* @__PURE__ */ re("ZodCUID2", (e, n) => {
  xz.init(e, n), it.init(e, n);
}), u5 = /* @__PURE__ */ re("ZodULID", (e, n) => {
  Sz.init(e, n), it.init(e, n);
}), c5 = /* @__PURE__ */ re("ZodXID", (e, n) => {
  wz.init(e, n), it.init(e, n);
}), f5 = /* @__PURE__ */ re("ZodKSUID", (e, n) => {
  Tz.init(e, n), it.init(e, n);
}), d5 = /* @__PURE__ */ re("ZodIPv4", (e, n) => {
  Mz.init(e, n), it.init(e, n);
}), h5 = /* @__PURE__ */ re("ZodIPv6", (e, n) => {
  Dz.init(e, n), it.init(e, n);
}), m5 = /* @__PURE__ */ re("ZodCIDRv4", (e, n) => {
  zz.init(e, n), it.init(e, n);
}), p5 = /* @__PURE__ */ re("ZodCIDRv6", (e, n) => {
  Rz.init(e, n), it.init(e, n);
}), g5 = /* @__PURE__ */ re("ZodBase64", (e, n) => {
  Vz.init(e, n), it.init(e, n);
}), v5 = /* @__PURE__ */ re("ZodBase64URL", (e, n) => {
  kz.init(e, n), it.init(e, n);
}), y5 = /* @__PURE__ */ re("ZodE164", (e, n) => {
  $z.init(e, n), it.init(e, n);
}), b5 = /* @__PURE__ */ re("ZodJWT", (e, n) => {
  Nz.init(e, n), it.init(e, n);
}), x5 = /* @__PURE__ */ re("ZodUnknown", (e, n) => {
  Lz.init(e, n), Ot.init(e, n);
});
function j0() {
  return MR(x5);
}
const S5 = /* @__PURE__ */ re("ZodNever", (e, n) => {
  Uz.init(e, n), Ot.init(e, n);
});
function w5(e) {
  return DR(S5, e);
}
const T5 = /* @__PURE__ */ re("ZodArray", (e, n) => {
  Bz.init(e, n), Ot.init(e, n), e.element = n.element, e.min = (r, s) => e.check(wu(r, s)), e.nonempty = (r) => e.check(wu(1, r)), e.max = (r, s) => e.check(ow(r, s)), e.length = (r, s) => e.check(lw(r, s)), e.unwrap = () => e.element;
});
function E5(e, n) {
  return BR(T5, e, n);
}
const A5 = /* @__PURE__ */ re("ZodObject", (e, n) => {
  Pz.init(e, n), Ot.init(e, n), We(e, "shape", () => n.shape), e.keyof = () => z5(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: j0() }), e.loose = () => e.clone({ ...e._zod.def, catchall: j0() }), e.strict = () => e.clone({ ...e._zod.def, catchall: w5() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => SD(e, r), e.merge = (r) => wD(e, r), e.pick = (r) => bD(e, r), e.omit = (r) => xD(e, r), e.partial = (...r) => TD(hw, e, r[0]), e.required = (...r) => ED(mw, e, r[0]);
});
function dw(e, n) {
  const r = {
    type: "object",
    get shape() {
      return jr(this, "shape", e ? pD(e) : {}), this.shape;
    },
    ...De(n)
  };
  return new A5(r);
}
const _5 = /* @__PURE__ */ re("ZodUnion", (e, n) => {
  Zz.init(e, n), Ot.init(e, n), e.options = n.options;
});
function C5(e, n) {
  return new _5({
    type: "union",
    options: e,
    ...De(n)
  });
}
const M5 = /* @__PURE__ */ re("ZodIntersection", (e, n) => {
  Hz.init(e, n), Ot.init(e, n);
});
function D5(e, n) {
  return new M5({
    type: "intersection",
    left: e,
    right: n
  });
}
const Eh = /* @__PURE__ */ re("ZodEnum", (e, n) => {
  Gz.init(e, n), Ot.init(e, n), e.enum = n.entries, e.options = Object.values(n.entries);
  const r = new Set(Object.keys(n.entries));
  e.extract = (s, l) => {
    const c = {};
    for (const f of s)
      if (r.has(f))
        c[f] = n.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Eh({
      ...n,
      checks: [],
      ...De(l),
      entries: c
    });
  }, e.exclude = (s, l) => {
    const c = { ...n.entries };
    for (const f of s)
      if (r.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Eh({
      ...n,
      checks: [],
      ...De(l),
      entries: c
    });
  };
});
function z5(e, n) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((s) => [s, s])) : e;
  return new Eh({
    type: "enum",
    entries: r,
    ...De(n)
  });
}
const R5 = /* @__PURE__ */ re("ZodTransform", (e, n) => {
  qz.init(e, n), Ot.init(e, n), e._zod.parse = (r, s) => {
    r.addIssue = (c) => {
      if (typeof c == "string")
        r.issues.push(Ao(c, r.value, n));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = r.value), f.inst ?? (f.inst = e), r.issues.push(Ao(f));
      }
    };
    const l = n.transform(r.value, r);
    return l instanceof Promise ? l.then((c) => (r.value = c, r)) : (r.value = l, r);
  };
});
function V5(e) {
  return new R5({
    type: "transform",
    transform: e
  });
}
const hw = /* @__PURE__ */ re("ZodOptional", (e, n) => {
  Yz.init(e, n), Ot.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function N0(e) {
  return new hw({
    type: "optional",
    innerType: e
  });
}
const O5 = /* @__PURE__ */ re("ZodNullable", (e, n) => {
  Fz.init(e, n), Ot.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function L0(e) {
  return new O5({
    type: "nullable",
    innerType: e
  });
}
const k5 = /* @__PURE__ */ re("ZodDefault", (e, n) => {
  Xz.init(e, n), Ot.init(e, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function $5(e, n) {
  return new k5({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : KS(n);
    }
  });
}
const j5 = /* @__PURE__ */ re("ZodPrefault", (e, n) => {
  Kz.init(e, n), Ot.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function N5(e, n) {
  return new j5({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : KS(n);
    }
  });
}
const mw = /* @__PURE__ */ re("ZodNonOptional", (e, n) => {
  Qz.init(e, n), Ot.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function L5(e, n) {
  return new mw({
    type: "nonoptional",
    innerType: e,
    ...De(n)
  });
}
const U5 = /* @__PURE__ */ re("ZodCatch", (e, n) => {
  Iz.init(e, n), Ot.init(e, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function B5(e, n) {
  return new U5({
    type: "catch",
    innerType: e,
    catchValue: typeof n == "function" ? n : () => n
  });
}
const P5 = /* @__PURE__ */ re("ZodPipe", (e, n) => {
  Jz.init(e, n), Ot.init(e, n), e.in = n.in, e.out = n.out;
});
function U0(e, n) {
  return new P5({
    type: "pipe",
    in: e,
    out: n
    // ...util.normalizeParams(params),
  });
}
const Z5 = /* @__PURE__ */ re("ZodReadonly", (e, n) => {
  Wz.init(e, n), Ot.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function H5(e) {
  return new Z5({
    type: "readonly",
    innerType: e
  });
}
const pw = /* @__PURE__ */ re("ZodCustom", (e, n) => {
  eR.init(e, n), Ot.init(e, n);
});
function G5(e, n = {}) {
  return PR(pw, e, n);
}
function q5(e) {
  return ZR(e);
}
function Y5(e, n = {
  error: `Input not instance of ${e.name}`
}) {
  const r = new pw({
    type: "custom",
    check: "custom",
    fn: (s) => s instanceof e,
    abort: !0,
    ...De(n)
  });
  return r._zod.bag.Class = e, r;
}
var Ro = (e) => e.type === "checkbox", Dr = (e) => e instanceof Date, Yt = (e) => e == null;
const gw = (e) => typeof e == "object";
var ht = (e) => !Yt(e) && !Array.isArray(e) && gw(e) && !Dr(e), vw = (e) => ht(e) && e.target ? Ro(e.target) ? e.target.checked : e.target.value : e, F5 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, yw = (e, n) => e.has(F5(n)), X5 = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return ht(n) && n.hasOwnProperty("isPrototypeOf");
}, Em = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Tt(e) {
  let n;
  const r = Array.isArray(e), s = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(Em && (e instanceof Blob || s)) && (r || ht(e)))
    if (n = r ? [] : Object.create(Object.getPrototypeOf(e)), !r && !X5(e))
      n = e;
    else
      for (const l in e)
        e.hasOwnProperty(l) && (n[l] = Tt(e[l]));
  else
    return e;
  return n;
}
var Uu = (e) => /^\w*$/.test(e), dt = (e) => e === void 0, Am = (e) => Array.isArray(e) ? e.filter(Boolean) : [], _m = (e) => Am(e.replace(/["|']|\]/g, "").split(/\.|\[/)), he = (e, n, r) => {
  if (!n || !ht(e))
    return r;
  const s = (Uu(n) ? [n] : _m(n)).reduce((l, c) => Yt(l) ? l : l[c], e);
  return dt(s) || s === e ? dt(e[n]) ? r : e[n] : s;
}, hn = (e) => typeof e == "boolean", Ye = (e, n, r) => {
  let s = -1;
  const l = Uu(n) ? [n] : _m(n), c = l.length, f = c - 1;
  for (; ++s < c; ) {
    const h = l[s];
    let m = r;
    if (s !== f) {
      const p = e[h];
      m = ht(p) || Array.isArray(p) ? p : isNaN(+l[s + 1]) ? {} : [];
    }
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return;
    e[h] = m, e = e[h];
  }
};
const Tu = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, $n = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, ga = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Cm = Re.createContext(null);
Cm.displayName = "HookFormContext";
const Bu = () => Re.useContext(Cm), K5 = (e) => {
  const { children: n, ...r } = e;
  return Re.createElement(Cm.Provider, { value: r }, n);
};
var bw = (e, n, r, s = !0) => {
  const l = {
    defaultValues: n._defaultValues
  };
  for (const c in e)
    Object.defineProperty(l, c, {
      get: () => {
        const f = c;
        return n._proxyFormState[f] !== $n.all && (n._proxyFormState[f] = !s || $n.all), r && (r[f] = !0), e[f];
      }
    });
  return l;
};
const Mm = typeof window < "u" ? Re.useLayoutEffect : Re.useEffect;
function xw(e) {
  const n = Bu(), { control: r = n.control, disabled: s, name: l, exact: c } = e || {}, [f, h] = Re.useState(r._formState), m = Re.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Mm(() => r._subscribe({
    name: l,
    formState: m.current,
    exact: c,
    callback: (p) => {
      !s && h({
        ...r._formState,
        ...p
      });
    }
  }), [l, s, c]), Re.useEffect(() => {
    m.current.isValid && r._setValid(!0);
  }, [r]), Re.useMemo(() => bw(f, r, m.current, !1), [f, r]);
}
var Yn = (e) => typeof e == "string", Sw = (e, n, r, s, l) => Yn(e) ? (s && n.watch.add(e), he(r, e, l)) : Array.isArray(e) ? e.map((c) => (s && n.watch.add(c), he(r, c))) : (s && (n.watchAll = !0), r), Ah = (e) => Yt(e) || !gw(e);
function ya(e, n, r = /* @__PURE__ */ new WeakSet()) {
  if (Ah(e) || Ah(n))
    return e === n;
  if (Dr(e) && Dr(n))
    return e.getTime() === n.getTime();
  const s = Object.keys(e), l = Object.keys(n);
  if (s.length !== l.length)
    return !1;
  if (r.has(e) || r.has(n))
    return !0;
  r.add(e), r.add(n);
  for (const c of s) {
    const f = e[c];
    if (!l.includes(c))
      return !1;
    if (c !== "ref") {
      const h = n[c];
      if (Dr(f) && Dr(h) || ht(f) && ht(h) || Array.isArray(f) && Array.isArray(h) ? !ya(f, h, r) : f !== h)
        return !1;
    }
  }
  return !0;
}
function Q5(e) {
  const n = Bu(), { control: r = n.control, name: s, defaultValue: l, disabled: c, exact: f, compute: h } = e || {}, m = Re.useRef(l), p = Re.useRef(h), g = Re.useRef(void 0);
  p.current = h;
  const y = Re.useMemo(() => r._getWatch(s, m.current), [r, s]), [x, E] = Re.useState(p.current ? p.current(y) : y);
  return Mm(() => r._subscribe({
    name: s,
    formState: {
      values: !0
    },
    exact: f,
    callback: (_) => {
      if (!c) {
        const D = Sw(s, r._names, _.values || r._formValues, !1, m.current);
        if (p.current) {
          const $ = p.current(D);
          ya($, g.current) || (E($), g.current = $);
        } else
          E(D);
      }
    }
  }), [r, c, s, f]), Re.useEffect(() => r._removeUnmounted()), x;
}
function I5(e) {
  const n = Bu(), { name: r, disabled: s, control: l = n.control, shouldUnregister: c, defaultValue: f } = e, h = yw(l._names.array, r), m = Re.useMemo(() => he(l._formValues, r, he(l._defaultValues, r, f)), [l, r, f]), p = Q5({
    control: l,
    name: r,
    defaultValue: m,
    exact: !0
  }), g = xw({
    control: l,
    name: r,
    exact: !0
  }), y = Re.useRef(e), x = Re.useRef(l.register(r, {
    ...e.rules,
    value: p,
    ...hn(e.disabled) ? { disabled: e.disabled } : {}
  }));
  y.current = e;
  const E = Re.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!he(g.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!he(g.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!he(g.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!he(g.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => he(g.errors, r)
    }
  }), [g, r]), _ = Re.useCallback((R) => x.current.onChange({
    target: {
      value: vw(R),
      name: r
    },
    type: Tu.CHANGE
  }), [r]), D = Re.useCallback(() => x.current.onBlur({
    target: {
      value: he(l._formValues, r),
      name: r
    },
    type: Tu.BLUR
  }), [r, l._formValues]), $ = Re.useCallback((R) => {
    const Z = he(l._fields, r);
    Z && R && (Z._f.ref = {
      focus: () => R.focus && R.focus(),
      select: () => R.select && R.select(),
      setCustomValidity: (W) => R.setCustomValidity(W),
      reportValidity: () => R.reportValidity()
    });
  }, [l._fields, r]), X = Re.useMemo(() => ({
    name: r,
    value: p,
    ...hn(s) || g.disabled ? { disabled: g.disabled || s } : {},
    onChange: _,
    onBlur: D,
    ref: $
  }), [r, s, g.disabled, _, D, $, p]);
  return Re.useEffect(() => {
    const R = l._options.shouldUnregister || c;
    l.register(r, {
      ...y.current.rules,
      ...hn(y.current.disabled) ? { disabled: y.current.disabled } : {}
    });
    const Z = (W, Y) => {
      const O = he(l._fields, W);
      O && O._f && (O._f.mount = Y);
    };
    if (Z(r, !0), R) {
      const W = Tt(he(l._options.defaultValues, r));
      Ye(l._defaultValues, r, W), dt(he(l._formValues, r)) && Ye(l._formValues, r, W);
    }
    return !h && l.register(r), () => {
      (h ? R && !l._state.action : R) ? l.unregister(r) : Z(r, !1);
    };
  }, [r, l, h, c]), Re.useEffect(() => {
    l._setDisabledField({
      disabled: s,
      name: r
    });
  }, [s, r, l]), Re.useMemo(() => ({
    field: X,
    formState: g,
    fieldState: E
  }), [X, g, E]);
}
const J5 = (e) => e.render(I5(e));
var Dm = (e, n, r, s, l) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [s]: l || !0
  }
} : {}, fo = (e) => Array.isArray(e) ? e : [e], B0 = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const c of e)
        c.next && c.next(l);
    },
    subscribe: (l) => (e.push(l), {
      unsubscribe: () => {
        e = e.filter((c) => c !== l);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, nn = (e) => ht(e) && !Object.keys(e).length, zm = (e) => e.type === "file", jn = (e) => typeof e == "function", Eu = (e) => {
  if (!Em)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, ww = (e) => e.type === "select-multiple", Rm = (e) => e.type === "radio", W5 = (e) => Rm(e) || Ro(e), zd = (e) => Eu(e) && e.isConnected;
function eV(e, n) {
  const r = n.slice(0, -1).length;
  let s = 0;
  for (; s < r; )
    e = dt(e) ? s++ : e[n[s++]];
  return e;
}
function tV(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !dt(e[n]))
      return !1;
  return !0;
}
function yt(e, n) {
  const r = Array.isArray(n) ? n : Uu(n) ? [n] : _m(n), s = r.length === 1 ? e : eV(e, r), l = r.length - 1, c = r[l];
  return s && delete s[c], l !== 0 && (ht(s) && nn(s) || Array.isArray(s) && tV(s)) && yt(e, r.slice(0, -1)), e;
}
var Tw = (e) => {
  for (const n in e)
    if (jn(e[n]))
      return !0;
  return !1;
};
function Au(e, n = {}) {
  const r = Array.isArray(e);
  if (ht(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || ht(e[s]) && !Tw(e[s]) ? (n[s] = Array.isArray(e[s]) ? [] : {}, Au(e[s], n[s])) : Yt(e[s]) || (n[s] = !0);
  return n;
}
function Ew(e, n, r) {
  const s = Array.isArray(e);
  if (ht(e) || s)
    for (const l in e)
      Array.isArray(e[l]) || ht(e[l]) && !Tw(e[l]) ? dt(n) || Ah(r[l]) ? r[l] = Array.isArray(e[l]) ? Au(e[l], []) : { ...Au(e[l]) } : Ew(e[l], Yt(n) ? {} : n[l], r[l]) : r[l] = !ya(e[l], n[l]);
  return r;
}
var eo = (e, n) => Ew(e, n, Au(n));
const P0 = {
  value: !1,
  isValid: !1
}, Z0 = { value: !0, isValid: !0 };
var Aw = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !dt(e[0].attributes.value) ? dt(e[0].value) || e[0].value === "" ? Z0 : { value: e[0].value, isValid: !0 } : Z0
    ) : P0;
  }
  return P0;
}, _w = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: s }) => dt(e) ? e : n ? e === "" ? NaN : e && +e : r && Yn(e) ? new Date(e) : s ? s(e) : e;
const H0 = {
  isValid: !1,
  value: null
};
var Cw = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, H0) : H0;
function G0(e) {
  const n = e.ref;
  return zm(n) ? n.files : Rm(n) ? Cw(e.refs).value : ww(n) ? [...n.selectedOptions].map(({ value: r }) => r) : Ro(n) ? Aw(e.refs).value : _w(dt(n.value) ? e.ref.value : n.value, e);
}
var nV = (e, n, r, s) => {
  const l = {};
  for (const c of e) {
    const f = he(n, c);
    f && Ye(l, c, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: l,
    shouldUseNativeValidation: s
  };
}, _u = (e) => e instanceof RegExp, to = (e) => dt(e) ? e : _u(e) ? e.source : ht(e) ? _u(e.value) ? e.value.source : e.value : e, q0 = (e) => ({
  isOnSubmit: !e || e === $n.onSubmit,
  isOnBlur: e === $n.onBlur,
  isOnChange: e === $n.onChange,
  isOnAll: e === $n.all,
  isOnTouch: e === $n.onTouched
});
const Y0 = "AsyncFunction";
var aV = (e) => !!e && !!e.validate && !!(jn(e.validate) && e.validate.constructor.name === Y0 || ht(e.validate) && Object.values(e.validate).find((n) => n.constructor.name === Y0)), rV = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), F0 = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((s) => e.startsWith(s) && /^\.\w+/.test(e.slice(s.length))));
const ho = (e, n, r, s) => {
  for (const l of r || Object.keys(e)) {
    const c = he(e, l);
    if (c) {
      const { _f: f, ...h } = c;
      if (f) {
        if (f.refs && f.refs[0] && n(f.refs[0], l) && !s)
          return !0;
        if (f.ref && n(f.ref, f.name) && !s)
          return !0;
        if (ho(h, n))
          break;
      } else if (ht(h) && ho(h, n))
        break;
    }
  }
};
function X0(e, n, r) {
  const s = he(e, r);
  if (s || Uu(r))
    return {
      error: s,
      name: r
    };
  const l = r.split(".");
  for (; l.length; ) {
    const c = l.join("."), f = he(n, c), h = he(e, c);
    if (f && !Array.isArray(f) && r !== c)
      return { name: r };
    if (h && h.type)
      return {
        name: c,
        error: h
      };
    if (h && h.root && h.root.type)
      return {
        name: `${c}.root`,
        error: h.root
      };
    l.pop();
  }
  return {
    name: r
  };
}
var iV = (e, n, r, s) => {
  r(e);
  const { name: l, ...c } = e;
  return nn(c) || Object.keys(c).length >= Object.keys(n).length || Object.keys(c).find((f) => n[f] === (!s || $n.all));
}, sV = (e, n, r) => !e || !n || e === n || fo(e).some((s) => s && (r ? s === n : s.startsWith(n) || n.startsWith(s))), oV = (e, n, r, s, l) => l.isOnAll ? !1 : !r && l.isOnTouch ? !(n || e) : (r ? s.isOnBlur : l.isOnBlur) ? !e : (r ? s.isOnChange : l.isOnChange) ? e : !0, lV = (e, n) => !Am(he(e, n)).length && yt(e, n), uV = (e, n, r) => {
  const s = fo(he(e, r));
  return Ye(s, "root", n[r]), Ye(e, r, s), e;
}, du = (e) => Yn(e);
function K0(e, n, r = "validate") {
  if (du(e) || Array.isArray(e) && e.every(du) || hn(e) && !e)
    return {
      type: r,
      message: du(e) ? e : "",
      ref: n
    };
}
var Ci = (e) => ht(e) && !_u(e) ? e : {
  value: e,
  message: ""
}, Q0 = async (e, n, r, s, l, c) => {
  const { ref: f, refs: h, required: m, maxLength: p, minLength: g, min: y, max: x, pattern: E, validate: _, name: D, valueAsNumber: $, mount: X } = e._f, R = he(r, D);
  if (!X || n.has(D))
    return {};
  const Z = h ? h[0] : f, W = (q) => {
    l && Z.reportValidity && (Z.setCustomValidity(hn(q) ? "" : q || ""), Z.reportValidity());
  }, Y = {}, O = Rm(f), J = Ro(f), H = O || J, ce = ($ || zm(f)) && dt(f.value) && dt(R) || Eu(f) && f.value === "" || R === "" || Array.isArray(R) && !R.length, me = Dm.bind(null, D, s, Y), G = (q, ae, U, ne = ga.maxLength, S = ga.minLength) => {
    const j = q ? ae : U;
    Y[D] = {
      type: q ? ne : S,
      message: j,
      ref: f,
      ...me(q ? ne : S, j)
    };
  };
  if (c ? !Array.isArray(R) || !R.length : m && (!H && (ce || Yt(R)) || hn(R) && !R || J && !Aw(h).isValid || O && !Cw(h).isValid)) {
    const { value: q, message: ae } = du(m) ? { value: !!m, message: m } : Ci(m);
    if (q && (Y[D] = {
      type: ga.required,
      message: ae,
      ref: Z,
      ...me(ga.required, ae)
    }, !s))
      return W(ae), Y;
  }
  if (!ce && (!Yt(y) || !Yt(x))) {
    let q, ae;
    const U = Ci(x), ne = Ci(y);
    if (!Yt(R) && !isNaN(R)) {
      const S = f.valueAsNumber || R && +R;
      Yt(U.value) || (q = S > U.value), Yt(ne.value) || (ae = S < ne.value);
    } else {
      const S = f.valueAsDate || new Date(R), j = (w) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + w), z = f.type == "time", le = f.type == "week";
      Yn(U.value) && R && (q = z ? j(R) > j(U.value) : le ? R > U.value : S > new Date(U.value)), Yn(ne.value) && R && (ae = z ? j(R) < j(ne.value) : le ? R < ne.value : S < new Date(ne.value));
    }
    if ((q || ae) && (G(!!q, U.message, ne.message, ga.max, ga.min), !s))
      return W(Y[D].message), Y;
  }
  if ((p || g) && !ce && (Yn(R) || c && Array.isArray(R))) {
    const q = Ci(p), ae = Ci(g), U = !Yt(q.value) && R.length > +q.value, ne = !Yt(ae.value) && R.length < +ae.value;
    if ((U || ne) && (G(U, q.message, ae.message), !s))
      return W(Y[D].message), Y;
  }
  if (E && !ce && Yn(R)) {
    const { value: q, message: ae } = Ci(E);
    if (_u(q) && !R.match(q) && (Y[D] = {
      type: ga.pattern,
      message: ae,
      ref: f,
      ...me(ga.pattern, ae)
    }, !s))
      return W(ae), Y;
  }
  if (_) {
    if (jn(_)) {
      const q = await _(R, r), ae = K0(q, Z);
      if (ae && (Y[D] = {
        ...ae,
        ...me(ga.validate, ae.message)
      }, !s))
        return W(ae.message), Y;
    } else if (ht(_)) {
      let q = {};
      for (const ae in _) {
        if (!nn(q) && !s)
          break;
        const U = K0(await _[ae](R, r), Z, ae);
        U && (q = {
          ...U,
          ...me(ae, U.message)
        }, W(U.message), s && (Y[D] = q));
      }
      if (!nn(q) && (Y[D] = {
        ref: Z,
        ...q
      }, !s))
        return Y;
    }
  }
  return W(!0), Y;
};
const cV = {
  mode: $n.onSubmit,
  reValidateMode: $n.onChange,
  shouldFocusError: !0
};
function fV(e = {}) {
  let n = {
    ...cV,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: jn(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1
  }, s = {}, l = ht(n.defaultValues) || ht(n.values) ? Tt(n.defaultValues || n.values) || {} : {}, c = n.shouldUnregister ? {} : Tt(l), f = {
    action: !1,
    mount: !1,
    watch: !1
  }, h = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, m, p = 0;
  const g = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let y = {
    ...g
  };
  const x = {
    array: B0(),
    state: B0()
  }, E = n.criteriaMode === $n.all, _ = (A) => (N) => {
    clearTimeout(p), p = setTimeout(A, N);
  }, D = async (A) => {
    if (!n.disabled && (g.isValid || y.isValid || A)) {
      const N = n.resolver ? nn((await J()).errors) : await ce(s, !0);
      N !== r.isValid && x.state.next({
        isValid: N
      });
    }
  }, $ = (A, N) => {
    !n.disabled && (g.isValidating || g.validatingFields || y.isValidating || y.validatingFields) && ((A || Array.from(h.mount)).forEach((K) => {
      K && (N ? Ye(r.validatingFields, K, N) : yt(r.validatingFields, K));
    }), x.state.next({
      validatingFields: r.validatingFields,
      isValidating: !nn(r.validatingFields)
    }));
  }, X = (A, N = [], K, de, ue = !0, oe = !0) => {
    if (de && K && !n.disabled) {
      if (f.action = !0, oe && Array.isArray(he(s, A))) {
        const pe = K(he(s, A), de.argA, de.argB);
        ue && Ye(s, A, pe);
      }
      if (oe && Array.isArray(he(r.errors, A))) {
        const pe = K(he(r.errors, A), de.argA, de.argB);
        ue && Ye(r.errors, A, pe), lV(r.errors, A);
      }
      if ((g.touchedFields || y.touchedFields) && oe && Array.isArray(he(r.touchedFields, A))) {
        const pe = K(he(r.touchedFields, A), de.argA, de.argB);
        ue && Ye(r.touchedFields, A, pe);
      }
      (g.dirtyFields || y.dirtyFields) && (r.dirtyFields = eo(l, c)), x.state.next({
        name: A,
        isDirty: G(A, N),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Ye(c, A, N);
  }, R = (A, N) => {
    Ye(r.errors, A, N), x.state.next({
      errors: r.errors
    });
  }, Z = (A) => {
    r.errors = A, x.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, W = (A, N, K, de) => {
    const ue = he(s, A);
    if (ue) {
      const oe = he(c, A, dt(K) ? he(l, A) : K);
      dt(oe) || de && de.defaultChecked || N ? Ye(c, A, N ? oe : G0(ue._f)) : U(A, oe), f.mount && D();
    }
  }, Y = (A, N, K, de, ue) => {
    let oe = !1, pe = !1;
    const ze = {
      name: A
    };
    if (!n.disabled) {
      if (!K || de) {
        (g.isDirty || y.isDirty) && (pe = r.isDirty, r.isDirty = ze.isDirty = G(), oe = pe !== ze.isDirty);
        const $e = ya(he(l, A), N);
        pe = !!he(r.dirtyFields, A), $e ? yt(r.dirtyFields, A) : Ye(r.dirtyFields, A, !0), ze.dirtyFields = r.dirtyFields, oe = oe || (g.dirtyFields || y.dirtyFields) && pe !== !$e;
      }
      if (K) {
        const $e = he(r.touchedFields, A);
        $e || (Ye(r.touchedFields, A, K), ze.touchedFields = r.touchedFields, oe = oe || (g.touchedFields || y.touchedFields) && $e !== K);
      }
      oe && ue && x.state.next(ze);
    }
    return oe ? ze : {};
  }, O = (A, N, K, de) => {
    const ue = he(r.errors, A), oe = (g.isValid || y.isValid) && hn(N) && r.isValid !== N;
    if (n.delayError && K ? (m = _(() => R(A, K)), m(n.delayError)) : (clearTimeout(p), m = null, K ? Ye(r.errors, A, K) : yt(r.errors, A)), (K ? !ya(ue, K) : ue) || !nn(de) || oe) {
      const pe = {
        ...de,
        ...oe && hn(N) ? { isValid: N } : {},
        errors: r.errors,
        name: A
      };
      r = {
        ...r,
        ...pe
      }, x.state.next(pe);
    }
  }, J = async (A) => {
    $(A, !0);
    const N = await n.resolver(c, n.context, nV(A || h.mount, s, n.criteriaMode, n.shouldUseNativeValidation));
    return $(A), N;
  }, H = async (A) => {
    const { errors: N } = await J(A);
    if (A)
      for (const K of A) {
        const de = he(N, K);
        de ? Ye(r.errors, K, de) : yt(r.errors, K);
      }
    else
      r.errors = N;
    return N;
  }, ce = async (A, N, K = {
    valid: !0
  }) => {
    for (const de in A) {
      const ue = A[de];
      if (ue) {
        const { _f: oe, ...pe } = ue;
        if (oe) {
          const ze = h.array.has(oe.name), $e = ue._f && aV(ue._f);
          $e && g.validatingFields && $([de], !0);
          const Fe = await Q0(ue, h.disabled, c, E, n.shouldUseNativeValidation && !N, ze);
          if ($e && g.validatingFields && $([de]), Fe[oe.name] && (K.valid = !1, N))
            break;
          !N && (he(Fe, oe.name) ? ze ? uV(r.errors, Fe, oe.name) : Ye(r.errors, oe.name, Fe[oe.name]) : yt(r.errors, oe.name));
        }
        !nn(pe) && await ce(pe, N, K);
      }
    }
    return K.valid;
  }, me = () => {
    for (const A of h.unMount) {
      const N = he(s, A);
      N && (N._f.refs ? N._f.refs.every((K) => !zd(K)) : !zd(N._f.ref)) && Me(A);
    }
    h.unMount = /* @__PURE__ */ new Set();
  }, G = (A, N) => !n.disabled && (A && N && Ye(c, A, N), !ya(w(), l)), q = (A, N, K) => Sw(A, h, {
    ...f.mount ? c : dt(N) ? l : Yn(A) ? { [A]: N } : N
  }, K, N), ae = (A) => Am(he(f.mount ? c : l, A, n.shouldUnregister ? he(l, A, []) : [])), U = (A, N, K = {}) => {
    const de = he(s, A);
    let ue = N;
    if (de) {
      const oe = de._f;
      oe && (!oe.disabled && Ye(c, A, _w(N, oe)), ue = Eu(oe.ref) && Yt(N) ? "" : N, ww(oe.ref) ? [...oe.ref.options].forEach((pe) => pe.selected = ue.includes(pe.value)) : oe.refs ? Ro(oe.ref) ? oe.refs.forEach((pe) => {
        (!pe.defaultChecked || !pe.disabled) && (Array.isArray(ue) ? pe.checked = !!ue.find((ze) => ze === pe.value) : pe.checked = ue === pe.value || !!ue);
      }) : oe.refs.forEach((pe) => pe.checked = pe.value === ue) : zm(oe.ref) ? oe.ref.value = "" : (oe.ref.value = ue, oe.ref.type || x.state.next({
        name: A,
        values: Tt(c)
      })));
    }
    (K.shouldDirty || K.shouldTouch) && Y(A, ue, K.shouldTouch, K.shouldDirty, !0), K.shouldValidate && le(A);
  }, ne = (A, N, K) => {
    for (const de in N) {
      if (!N.hasOwnProperty(de))
        return;
      const ue = N[de], oe = A + "." + de, pe = he(s, oe);
      (h.array.has(A) || ht(ue) || pe && !pe._f) && !Dr(ue) ? ne(oe, ue, K) : U(oe, ue, K);
    }
  }, S = (A, N, K = {}) => {
    const de = he(s, A), ue = h.array.has(A), oe = Tt(N);
    Ye(c, A, oe), ue ? (x.array.next({
      name: A,
      values: Tt(c)
    }), (g.isDirty || g.dirtyFields || y.isDirty || y.dirtyFields) && K.shouldDirty && x.state.next({
      name: A,
      dirtyFields: eo(l, c),
      isDirty: G(A, oe)
    })) : de && !de._f && !Yt(oe) ? ne(A, oe, K) : U(A, oe, K), F0(A, h) && x.state.next({ ...r, name: A }), x.state.next({
      name: f.mount ? A : void 0,
      values: Tt(c)
    });
  }, j = async (A) => {
    f.mount = !0;
    const N = A.target;
    let K = N.name, de = !0;
    const ue = he(s, K), oe = ($e) => {
      de = Number.isNaN($e) || Dr($e) && isNaN($e.getTime()) || ya($e, he(c, K, $e));
    }, pe = q0(n.mode), ze = q0(n.reValidateMode);
    if (ue) {
      let $e, Fe;
      const wa = N.type ? G0(ue._f) : vw(A), mn = A.type === Tu.BLUR || A.type === Tu.FOCUS_OUT, Wi = !rV(ue._f) && !n.resolver && !he(r.errors, K) && !ue._f.deps || oV(mn, he(r.touchedFields, K), r.isSubmitted, ze, pe), Ln = F0(K, h, mn);
      Ye(c, K, wa), mn ? (!N || !N.readOnly) && (ue._f.onBlur && ue._f.onBlur(A), m && m(0)) : ue._f.onChange && ue._f.onChange(A);
      const Ct = Y(K, wa, mn), Jn = !nn(Ct) || Ln;
      if (!mn && x.state.next({
        name: K,
        type: A.type,
        values: Tt(c)
      }), Wi)
        return (g.isValid || y.isValid) && (n.mode === "onBlur" ? mn && D() : mn || D()), Jn && x.state.next({ name: K, ...Ln ? {} : Ct });
      if (!mn && Ln && x.state.next({ ...r }), n.resolver) {
        const { errors: nr } = await J([K]);
        if (oe(wa), de) {
          const ar = X0(r.errors, s, K), Vo = X0(nr, s, ar.name || K);
          $e = Vo.error, K = Vo.name, Fe = nn(nr);
        }
      } else
        $([K], !0), $e = (await Q0(ue, h.disabled, c, E, n.shouldUseNativeValidation))[K], $([K]), oe(wa), de && ($e ? Fe = !1 : (g.isValid || y.isValid) && (Fe = await ce(s, !0)));
      de && (ue._f.deps && le(ue._f.deps), O(K, Fe, $e, Ct));
    }
  }, z = (A, N) => {
    if (he(r.errors, N) && A.focus)
      return A.focus(), 1;
  }, le = async (A, N = {}) => {
    let K, de;
    const ue = fo(A);
    if (n.resolver) {
      const oe = await H(dt(A) ? A : ue);
      K = nn(oe), de = A ? !ue.some((pe) => he(oe, pe)) : K;
    } else A ? (de = (await Promise.all(ue.map(async (oe) => {
      const pe = he(s, oe);
      return await ce(pe && pe._f ? { [oe]: pe } : pe);
    }))).every(Boolean), !(!de && !r.isValid) && D()) : de = K = await ce(s);
    return x.state.next({
      ...!Yn(A) || (g.isValid || y.isValid) && K !== r.isValid ? {} : { name: A },
      ...n.resolver || !A ? { isValid: K } : {},
      errors: r.errors
    }), N.shouldFocus && !de && ho(s, z, A ? ue : h.mount), de;
  }, w = (A) => {
    const N = {
      ...f.mount ? c : l
    };
    return dt(A) ? N : Yn(A) ? he(N, A) : A.map((K) => he(N, K));
  }, Q = (A, N) => ({
    invalid: !!he((N || r).errors, A),
    isDirty: !!he((N || r).dirtyFields, A),
    error: he((N || r).errors, A),
    isValidating: !!he(r.validatingFields, A),
    isTouched: !!he((N || r).touchedFields, A)
  }), se = (A) => {
    A && fo(A).forEach((N) => yt(r.errors, N)), x.state.next({
      errors: A ? r.errors : {}
    });
  }, ie = (A, N, K) => {
    const de = (he(s, A, { _f: {} })._f || {}).ref, ue = he(r.errors, A) || {}, { ref: oe, message: pe, type: ze, ...$e } = ue;
    Ye(r.errors, A, {
      ...$e,
      ...N,
      ref: de
    }), x.state.next({
      name: A,
      errors: r.errors,
      isValid: !1
    }), K && K.shouldFocus && de && de.focus && de.focus();
  }, fe = (A, N) => jn(A) ? x.state.subscribe({
    next: (K) => "values" in K && A(q(void 0, N), K)
  }) : q(A, N, !0), Te = (A) => x.state.subscribe({
    next: (N) => {
      sV(A.name, N.name, A.exact) && iV(N, A.formState || g, Kt, A.reRenderRoot) && A.callback({
        values: { ...c },
        ...r,
        ...N,
        defaultValues: l
      });
    }
  }).unsubscribe, Se = (A) => (f.mount = !0, y = {
    ...y,
    ...A.formState
  }, Te({
    ...A,
    formState: y
  })), Me = (A, N = {}) => {
    for (const K of A ? fo(A) : h.mount)
      h.mount.delete(K), h.array.delete(K), N.keepValue || (yt(s, K), yt(c, K)), !N.keepError && yt(r.errors, K), !N.keepDirty && yt(r.dirtyFields, K), !N.keepTouched && yt(r.touchedFields, K), !N.keepIsValidating && yt(r.validatingFields, K), !n.shouldUnregister && !N.keepDefaultValue && yt(l, K);
    x.state.next({
      values: Tt(c)
    }), x.state.next({
      ...r,
      ...N.keepDirty ? { isDirty: G() } : {}
    }), !N.keepIsValid && D();
  }, Be = ({ disabled: A, name: N }) => {
    (hn(A) && f.mount || A || h.disabled.has(N)) && (A ? h.disabled.add(N) : h.disabled.delete(N));
  }, mt = (A, N = {}) => {
    let K = he(s, A);
    const de = hn(N.disabled) || hn(n.disabled);
    return Ye(s, A, {
      ...K || {},
      _f: {
        ...K && K._f ? K._f : { ref: { name: A } },
        name: A,
        mount: !0,
        ...N
      }
    }), h.mount.add(A), K ? Be({
      disabled: hn(N.disabled) ? N.disabled : n.disabled,
      name: A
    }) : W(A, !0, N.value), {
      ...de ? { disabled: N.disabled || n.disabled } : {},
      ...n.progressive ? {
        required: !!N.required,
        min: to(N.min),
        max: to(N.max),
        minLength: to(N.minLength),
        maxLength: to(N.maxLength),
        pattern: to(N.pattern)
      } : {},
      name: A,
      onChange: j,
      onBlur: j,
      ref: (ue) => {
        if (ue) {
          mt(A, N), K = he(s, A);
          const oe = dt(ue.value) && ue.querySelectorAll && ue.querySelectorAll("input,select,textarea")[0] || ue, pe = W5(oe), ze = K._f.refs || [];
          if (pe ? ze.find(($e) => $e === oe) : oe === K._f.ref)
            return;
          Ye(s, A, {
            _f: {
              ...K._f,
              ...pe ? {
                refs: [
                  ...ze.filter(zd),
                  oe,
                  ...Array.isArray(he(l, A)) ? [{}] : []
                ],
                ref: { type: oe.type, name: A }
              } : { ref: oe }
            }
          }), W(A, !1, void 0, oe);
        } else
          K = he(s, A, {}), K._f && (K._f.mount = !1), (n.shouldUnregister || N.shouldUnregister) && !(yw(h.array, A) && f.action) && h.unMount.add(A);
      }
    };
  }, Zt = () => n.shouldFocusError && ho(s, z, h.mount), At = (A) => {
    hn(A) && (x.state.next({ disabled: A }), ho(s, (N, K) => {
      const de = he(s, K);
      de && (N.disabled = de._f.disabled || A, Array.isArray(de._f.refs) && de._f.refs.forEach((ue) => {
        ue.disabled = de._f.disabled || A;
      }));
    }, 0, !1));
  }, _t = (A, N) => async (K) => {
    let de;
    K && (K.preventDefault && K.preventDefault(), K.persist && K.persist());
    let ue = Tt(c);
    if (x.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: oe, values: pe } = await J();
      r.errors = oe, ue = Tt(pe);
    } else
      await ce(s);
    if (h.disabled.size)
      for (const oe of h.disabled)
        yt(ue, oe);
    if (yt(r.errors, "root"), nn(r.errors)) {
      x.state.next({
        errors: {}
      });
      try {
        await A(ue, K);
      } catch (oe) {
        de = oe;
      }
    } else
      N && await N({ ...r.errors }, K), Zt(), setTimeout(Zt);
    if (x.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: nn(r.errors) && !de,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), de)
      throw de;
  }, Ht = (A, N = {}) => {
    he(s, A) && (dt(N.defaultValue) ? S(A, Tt(he(l, A))) : (S(A, N.defaultValue), Ye(l, A, Tt(N.defaultValue))), N.keepTouched || yt(r.touchedFields, A), N.keepDirty || (yt(r.dirtyFields, A), r.isDirty = N.defaultValue ? G(A, Tt(he(l, A))) : G()), N.keepError || (yt(r.errors, A), g.isValid && D()), x.state.next({ ...r }));
  }, Nn = (A, N = {}) => {
    const K = A ? Tt(A) : l, de = Tt(K), ue = nn(A), oe = ue ? l : de;
    if (N.keepDefaultValues || (l = K), !N.keepValues) {
      if (N.keepDirtyValues) {
        const pe = /* @__PURE__ */ new Set([
          ...h.mount,
          ...Object.keys(eo(l, c))
        ]);
        for (const ze of Array.from(pe))
          he(r.dirtyFields, ze) ? Ye(oe, ze, he(c, ze)) : S(ze, he(oe, ze));
      } else {
        if (Em && dt(A))
          for (const pe of h.mount) {
            const ze = he(s, pe);
            if (ze && ze._f) {
              const $e = Array.isArray(ze._f.refs) ? ze._f.refs[0] : ze._f.ref;
              if (Eu($e)) {
                const Fe = $e.closest("form");
                if (Fe) {
                  Fe.reset();
                  break;
                }
              }
            }
          }
        if (N.keepFieldsRef)
          for (const pe of h.mount)
            S(pe, he(oe, pe));
        else
          s = {};
      }
      c = n.shouldUnregister ? N.keepDefaultValues ? Tt(l) : {} : Tt(oe), x.array.next({
        values: { ...oe }
      }), x.state.next({
        values: { ...oe }
      });
    }
    h = {
      mount: N.keepDirtyValues ? h.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, f.mount = !g.isValid || !!N.keepIsValid || !!N.keepDirtyValues, f.watch = !!n.shouldUnregister, x.state.next({
      submitCount: N.keepSubmitCount ? r.submitCount : 0,
      isDirty: ue ? !1 : N.keepDirty ? r.isDirty : !!(N.keepDefaultValues && !ya(A, l)),
      isSubmitted: N.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: ue ? {} : N.keepDirtyValues ? N.keepDefaultValues && c ? eo(l, c) : r.dirtyFields : N.keepDefaultValues && A ? eo(l, A) : N.keepDirty ? r.dirtyFields : {},
      touchedFields: N.keepTouched ? r.touchedFields : {},
      errors: N.keepErrors ? r.errors : {},
      isSubmitSuccessful: N.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: l
    });
  }, Lr = (A, N) => Nn(jn(A) ? A(c) : A, N), Ji = (A, N = {}) => {
    const K = he(s, A), de = K && K._f;
    if (de) {
      const ue = de.refs ? de.refs[0] : de.ref;
      ue.focus && (ue.focus(), N.shouldSelect && jn(ue.select) && ue.select());
    }
  }, Kt = (A) => {
    r = {
      ...r,
      ...A
    };
  }, Sa = {
    control: {
      register: mt,
      unregister: Me,
      getFieldState: Q,
      handleSubmit: _t,
      setError: ie,
      _subscribe: Te,
      _runSchema: J,
      _focusError: Zt,
      _getWatch: q,
      _getDirty: G,
      _setValid: D,
      _setFieldArray: X,
      _setDisabledField: Be,
      _setErrors: Z,
      _getFieldArray: ae,
      _reset: Nn,
      _resetDefaultValues: () => jn(n.defaultValues) && n.defaultValues().then((A) => {
        Lr(A, n.resetOptions), x.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: me,
      _disableForm: At,
      _subjects: x,
      _proxyFormState: g,
      get _fields() {
        return s;
      },
      get _formValues() {
        return c;
      },
      get _state() {
        return f;
      },
      set _state(A) {
        f = A;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return h;
      },
      set _names(A) {
        h = A;
      },
      get _formState() {
        return r;
      },
      get _options() {
        return n;
      },
      set _options(A) {
        n = {
          ...n,
          ...A
        };
      }
    },
    subscribe: Se,
    trigger: le,
    register: mt,
    handleSubmit: _t,
    watch: fe,
    setValue: S,
    getValues: w,
    reset: Lr,
    resetField: Ht,
    clearErrors: se,
    unregister: Me,
    setError: ie,
    setFocus: Ji,
    getFieldState: Q
  };
  return {
    ...Sa,
    formControl: Sa
  };
}
function I0(e = {}) {
  const n = Re.useRef(void 0), r = Re.useRef(void 0), [s, l] = Re.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: jn(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: jn(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!n.current)
    if (e.formControl)
      n.current = {
        ...e.formControl,
        formState: s
      }, e.defaultValues && !jn(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: f, ...h } = fV(e);
      n.current = {
        ...h,
        formState: s
      };
    }
  const c = n.current.control;
  return c._options = e, Mm(() => {
    const f = c._subscribe({
      formState: c._proxyFormState,
      callback: () => l({ ...c._formState }),
      reRenderRoot: !0
    });
    return l((h) => ({
      ...h,
      isReady: !0
    })), c._formState.isReady = !0, f;
  }, [c]), Re.useEffect(() => c._disableForm(e.disabled), [c, e.disabled]), Re.useEffect(() => {
    e.mode && (c._options.mode = e.mode), e.reValidateMode && (c._options.reValidateMode = e.reValidateMode);
  }, [c, e.mode, e.reValidateMode]), Re.useEffect(() => {
    e.errors && (c._setErrors(e.errors), c._focusError());
  }, [c, e.errors]), Re.useEffect(() => {
    e.shouldUnregister && c._subjects.state.next({
      values: c._getWatch()
    });
  }, [c, e.shouldUnregister]), Re.useEffect(() => {
    if (c._proxyFormState.isDirty) {
      const f = c._getDirty();
      f !== s.isDirty && c._subjects.state.next({
        isDirty: f
      });
    }
  }, [c, s.isDirty]), Re.useEffect(() => {
    e.values && !ya(e.values, r.current) ? (c._reset(e.values, {
      keepFieldsRef: !0,
      ...c._options.resetOptions
    }), r.current = e.values, l((f) => ({ ...f }))) : c._resetDefaultValues();
  }, [c, e.values]), Re.useEffect(() => {
    c._state.mount || (c._setValid(), c._state.mount = !0), c._state.watch && (c._state.watch = !1, c._subjects.state.next({ ...c._formState })), c._removeUnmounted();
  }), n.current.formState = bw(s, c), n.current;
}
const J0 = (e, n, r) => {
  if (e && "reportValidity" in e) {
    const s = he(r, n);
    e.setCustomValidity(s && s.message || ""), e.reportValidity();
  }
}, _h = (e, n) => {
  for (const r in n.fields) {
    const s = n.fields[r];
    s && s.ref && "reportValidity" in s.ref ? J0(s.ref, r, e) : s && s.refs && s.refs.forEach((l) => J0(l, r, e));
  }
}, W0 = (e, n) => {
  n.shouldUseNativeValidation && _h(e, n);
  const r = {};
  for (const s in e) {
    const l = he(n.fields, s), c = Object.assign(e[s] || {}, { ref: l && l.ref });
    if (dV(n.names || Object.keys(e), s)) {
      const f = Object.assign({}, he(r, s));
      Ye(f, "root", c), Ye(r, s, f);
    } else Ye(r, s, c);
  }
  return r;
}, dV = (e, n) => {
  const r = e1(n);
  return e.some((s) => e1(s).match(`^${r}\\.\\d+`));
};
function e1(e) {
  return e.replace(/\]|\[/g, "");
}
function t1(e, n) {
  try {
    var r = e();
  } catch (s) {
    return n(s);
  }
  return r && r.then ? r.then(void 0, n) : r;
}
function hV(e, n) {
  for (var r = {}; e.length; ) {
    var s = e[0], l = s.code, c = s.message, f = s.path.join(".");
    if (!r[f]) if ("unionErrors" in s) {
      var h = s.unionErrors[0].errors[0];
      r[f] = { message: h.message, type: h.code };
    } else r[f] = { message: c, type: l };
    if ("unionErrors" in s && s.unionErrors.forEach(function(g) {
      return g.errors.forEach(function(y) {
        return e.push(y);
      });
    }), n) {
      var m = r[f].types, p = m && m[s.code];
      r[f] = Dm(f, n, r, l, p ? [].concat(p, s.message) : s.message);
    }
    e.shift();
  }
  return r;
}
function mV(e, n) {
  for (var r = {}; e.length; ) {
    var s = e[0], l = s.code, c = s.message, f = s.path.join(".");
    if (!r[f]) if (s.code === "invalid_union" && s.errors.length > 0) {
      var h = s.errors[0][0];
      r[f] = { message: h.message, type: h.code };
    } else r[f] = { message: c, type: l };
    if (s.code === "invalid_union" && s.errors.forEach(function(g) {
      return g.forEach(function(y) {
        return e.push(y);
      });
    }), n) {
      var m = r[f].types, p = m && m[s.code];
      r[f] = Dm(f, n, r, l, p ? [].concat(p, s.message) : s.message);
    }
    e.shift();
  }
  return r;
}
function n1(e, n, r) {
  if (r === void 0 && (r = {}), function(s) {
    return "_def" in s && typeof s._def == "object" && "typeName" in s._def;
  }(e)) return function(s, l, c) {
    try {
      return Promise.resolve(t1(function() {
        return Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](s, n)).then(function(f) {
          return c.shouldUseNativeValidation && _h({}, c), { errors: {}, values: r.raw ? Object.assign({}, s) : f };
        });
      }, function(f) {
        if (function(h) {
          return Array.isArray(h?.issues);
        }(f)) return { values: {}, errors: W0(hV(f.errors, !c.shouldUseNativeValidation && c.criteriaMode === "all"), c) };
        throw f;
      }));
    } catch (f) {
      return Promise.reject(f);
    }
  };
  if (function(s) {
    return "_zod" in s && typeof s._zod == "object";
  }(e)) return function(s, l, c) {
    try {
      return Promise.resolve(t1(function() {
        return Promise.resolve((r.mode === "sync" ? CD : MD)(e, s, n)).then(function(f) {
          return c.shouldUseNativeValidation && _h({}, c), { errors: {}, values: r.raw ? Object.assign({}, s) : f };
        });
      }, function(f) {
        if (function(h) {
          return h instanceof wm;
        }(f)) return { values: {}, errors: W0(mV(f.issues, !c.shouldUseNativeValidation && c.criteriaMode === "all"), c) };
        throw f;
      }));
    } catch (f) {
      return Promise.reject(f);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
const a1 = K5, Mw = C.createContext(
  {}
), Mi = ({
  ...e
}) => /* @__PURE__ */ F.jsx(Mw.Provider, { value: { name: e.name }, children: /* @__PURE__ */ F.jsx(J5, { ...e }) }), pV = () => {
  const e = C.useContext(Mw), n = C.useContext(Dw), { getFieldState: r } = Bu(), s = xw({ name: e.name }), l = r(e.name, s);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: c } = n;
  return {
    id: c,
    name: e.name,
    formItemId: `${c}-form-item`,
    formDescriptionId: `${c}-form-item-description`,
    formMessageId: `${c}-form-item-message`,
    ...l
  };
}, Dw = C.createContext(
  {}
);
function Di({ className: e, ...n }) {
  const r = C.useId();
  return /* @__PURE__ */ F.jsx(Dw.Provider, { value: { id: r }, children: /* @__PURE__ */ F.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: er("grid gap-2", e),
      ...n
    }
  ) });
}
function zi({ ...e }) {
  const { error: n, formItemId: r, formDescriptionId: s, formMessageId: l } = pV();
  return /* @__PURE__ */ F.jsx(
    fx,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": n ? `${s} ${l}` : `${s}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function gV(e) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
Array(12).fill(0);
let Ch = 1;
class vV {
  constructor() {
    this.subscribe = (n) => (this.subscribers.push(n), () => {
      const r = this.subscribers.indexOf(n);
      this.subscribers.splice(r, 1);
    }), this.publish = (n) => {
      this.subscribers.forEach((r) => r(n));
    }, this.addToast = (n) => {
      this.publish(n), this.toasts = [
        ...this.toasts,
        n
      ];
    }, this.create = (n) => {
      var r;
      const { message: s, ...l } = n, c = typeof n?.id == "number" || ((r = n.id) == null ? void 0 : r.length) > 0 ? n.id : Ch++, f = this.toasts.find((m) => m.id === c), h = n.dismissible === void 0 ? !0 : n.dismissible;
      return this.dismissedToasts.has(c) && this.dismissedToasts.delete(c), f ? this.toasts = this.toasts.map((m) => m.id === c ? (this.publish({
        ...m,
        ...n,
        id: c,
        title: s
      }), {
        ...m,
        ...n,
        id: c,
        dismissible: h,
        title: s
      }) : m) : this.addToast({
        title: s,
        ...l,
        dismissible: h,
        id: c
      }), c;
    }, this.dismiss = (n) => (n ? (this.dismissedToasts.add(n), requestAnimationFrame(() => this.subscribers.forEach((r) => r({
      id: n,
      dismiss: !0
    })))) : this.toasts.forEach((r) => {
      this.subscribers.forEach((s) => s({
        id: r.id,
        dismiss: !0
      }));
    }), n), this.message = (n, r) => this.create({
      ...r,
      message: n
    }), this.error = (n, r) => this.create({
      ...r,
      message: n,
      type: "error"
    }), this.success = (n, r) => this.create({
      ...r,
      type: "success",
      message: n
    }), this.info = (n, r) => this.create({
      ...r,
      type: "info",
      message: n
    }), this.warning = (n, r) => this.create({
      ...r,
      type: "warning",
      message: n
    }), this.loading = (n, r) => this.create({
      ...r,
      type: "loading",
      message: n
    }), this.promise = (n, r) => {
      if (!r)
        return;
      let s;
      r.loading !== void 0 && (s = this.create({
        ...r,
        promise: n,
        type: "loading",
        message: r.loading,
        description: typeof r.description != "function" ? r.description : void 0
      }));
      const l = Promise.resolve(n instanceof Function ? n() : n);
      let c = s !== void 0, f;
      const h = l.then(async (p) => {
        if (f = [
          "resolve",
          p
        ], Re.isValidElement(p))
          c = !1, this.create({
            id: s,
            type: "default",
            message: p
          });
        else if (bV(p) && !p.ok) {
          c = !1;
          const y = typeof r.error == "function" ? await r.error(`HTTP error! status: ${p.status}`) : r.error, x = typeof r.description == "function" ? await r.description(`HTTP error! status: ${p.status}`) : r.description, _ = typeof y == "object" && !Re.isValidElement(y) ? y : {
            message: y
          };
          this.create({
            id: s,
            type: "error",
            description: x,
            ..._
          });
        } else if (p instanceof Error) {
          c = !1;
          const y = typeof r.error == "function" ? await r.error(p) : r.error, x = typeof r.description == "function" ? await r.description(p) : r.description, _ = typeof y == "object" && !Re.isValidElement(y) ? y : {
            message: y
          };
          this.create({
            id: s,
            type: "error",
            description: x,
            ..._
          });
        } else if (r.success !== void 0) {
          c = !1;
          const y = typeof r.success == "function" ? await r.success(p) : r.success, x = typeof r.description == "function" ? await r.description(p) : r.description, _ = typeof y == "object" && !Re.isValidElement(y) ? y : {
            message: y
          };
          this.create({
            id: s,
            type: "success",
            description: x,
            ..._
          });
        }
      }).catch(async (p) => {
        if (f = [
          "reject",
          p
        ], r.error !== void 0) {
          c = !1;
          const g = typeof r.error == "function" ? await r.error(p) : r.error, y = typeof r.description == "function" ? await r.description(p) : r.description, E = typeof g == "object" && !Re.isValidElement(g) ? g : {
            message: g
          };
          this.create({
            id: s,
            type: "error",
            description: y,
            ...E
          });
        }
      }).finally(() => {
        c && (this.dismiss(s), s = void 0), r.finally == null || r.finally.call(r);
      }), m = () => new Promise((p, g) => h.then(() => f[0] === "reject" ? g(f[1]) : p(f[1])).catch(g));
      return typeof s != "string" && typeof s != "number" ? {
        unwrap: m
      } : Object.assign(s, {
        unwrap: m
      });
    }, this.custom = (n, r) => {
      const s = r?.id || Ch++;
      return this.create({
        jsx: n(s),
        id: s,
        ...r
      }), s;
    }, this.getActiveToasts = () => this.toasts.filter((n) => !this.dismissedToasts.has(n.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Mn = new vV(), yV = (e, n) => {
  const r = n?.id || Ch++;
  return Mn.addToast({
    title: e,
    ...n,
    id: r
  }), r;
}, bV = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", xV = yV, SV = () => Mn.toasts, wV = () => Mn.getActiveToasts(), An = Object.assign(xV, {
  success: Mn.success,
  info: Mn.info,
  warning: Mn.warning,
  error: Mn.error,
  custom: Mn.custom,
  message: Mn.message,
  promise: Mn.promise,
  dismiss: Mn.dismiss,
  loading: Mn.loading
}, {
  getHistory: SV,
  getToasts: wV
});
gV("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
const TV = "/bg_alt.jpeg", EV = "/nightlogo.png", AV = dw({
  email: fw("Invalid email address"),
  password: Th().min(8, "Password must be at least 8 characters")
}), _V = dw({
  username: Th().min(4, "Username must be at least 4 characters"),
  email: fw("Invalid email address"),
  password: Th().min(8, "Password must be at least 8 characters"),
  avatar: Y5(File).refine((e) => {
    if (!e) return !1;
    const n = 2 * 1024 * 1024, r = 1024;
    if (e.size > n) return !1;
    const s = new Image();
    return s.src = URL.createObjectURL(e), new Promise((l) => {
      s.onload = () => {
        l(s.width <= r && s.height <= r);
      }, s.onerror = () => l(!1);
    });
  }, "Avatar image must be smaller than 2MB and not exceed 1024x1024 pixels")
}), CV = {
  hidden: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
      delayChildren: 0.1
    }
  },
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08
    }
  }
}, MV = {
  hidden: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.08,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.08
    }
  }
}, dn = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: { ease: [0.4, 0, 0.2, 1], duration: 0.3 }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.4, 0, 0.2, 1],
      duration: 0.5,
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};
function DV({ service: e = "", visible: n = !0, onLogin: r, onCancel: s, API_URL: l = "https://jwtauth-srv-api.night-x.com" }) {
  const [c, f] = C.useState(!1), [h, m] = C.useState(!1), [p, g] = C.useState(!1), [y, x] = C.useState(null), [E, _] = C.useState(""), [D, $] = C.useState("");
  console.log(s);
  const X = I0({
    resolver: n1(AV),
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onSubmit"
  }), R = I0({
    resolver: n1(_V),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      avatar: void 0
    },
    mode: "onSubmit"
  });
  C.useEffect(() => {
    n || g(!1);
  }, [n]), C.useEffect(() => {
    (async () => {
      if (localStorage.getItem("access_token")) {
        const J = await fetch(`${l}/get_user`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_token: localStorage.getItem("access_token")
          })
        });
        if (!J.ok) {
          const ce = setTimeout(() => {
            g(!0);
          }, 800);
          return () => clearTimeout(ce);
        }
        const H = await J.json();
        x(H), r && r();
      } else {
        const J = await fetch(`${l}/refresh`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        if (!J.ok) {
          const ce = setTimeout(() => {
            g(!0);
          }, 800);
          return () => clearTimeout(ce);
        }
        const H = await J.json();
        localStorage.setItem("access_token", H.access_token), r && r();
      }
    })();
  }, [y]);
  const Z = () => {
    m(!h);
  }, W = async (O) => {
    try {
      f(!0);
      const J = await fetch(`${l}/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(O)
      }), H = await J.json();
      if (!J.ok) {
        An.error(H.error || "Login failed"), f(!1);
        return;
      }
      localStorage.setItem("access_token", H.access_token), An.success("Welcome back!", {
        description: "Please consent to share your basic profile info with " + e
      }), f(!1), g(!1), setTimeout(function() {
        r && r();
      }, 1e3);
    } catch (J) {
      An.error("Network error: " + J), f(!1);
    }
  }, Y = async (O) => {
    f(!0);
    try {
      const J = O.avatar;
      if (!J) {
        An.error("Avatar is required; please upload one."), f(!1);
        return;
      }
      const H = 2 * 1024 * 1024, ce = 1024;
      if (J.size > H) {
        An.error("Avatar image must be smaller than 2MB."), f(!1);
        return;
      }
      const me = new Image(), G = URL.createObjectURL(J);
      await new Promise((ne, S) => {
        me.onload = () => {
          if (me.width > ce || me.height > ce) {
            An.error(
              "Avatar image resolution must not exceed 1024x1024 pixels."
            ), URL.revokeObjectURL(G), S(new Error("Invalid image dimensions"));
            return;
          }
          ne(null);
        }, me.onerror = () => {
          An.error("Invalid image file."), URL.revokeObjectURL(G), S(new Error("Invalid image file"));
        }, me.src = G;
      }), URL.revokeObjectURL(G);
      const q = await J.arrayBuffer(), ae = await fetch(`${l}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: O.username,
          password: O.password,
          email: O.email,
          avatar: Array.from(new Uint8Array(q))
        })
      }), U = await ae.json();
      if (!ae.ok) {
        An.error(U.error || "Registration failed"), f(!1);
        return;
      }
      An.success("Account created successfully!", {
        description: "You can login with your new account if you want to redeem a Night+ subscription."
      }), f(!1), m(!1);
    } catch (J) {
      An.error("Network error: " + J), f(!1);
    }
  };
  return /* @__PURE__ */ F.jsx("div", { className: "font flex flex-col items-center justify-center min-h-screen text-foreground", children: /* @__PURE__ */ F.jsxs(
    vt.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: p ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
      variants: MV,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      className: "relative z-0 h-[calc(67vh+64px)] p-[24px] w-[60vw] rounded-[54px] flex flex-row bg-card border-x-[1.5px] border-t border-b border-border overflow-hidden",
      children: [
        /* @__PURE__ */ F.jsx(
          vt.div,
          {
            initial: {
              scale: 1,
              rotateY: 0,
              perspective: 800,
              transformStyle: "preserve-3d",
              filter: "blur(25px) brightness(1)",
              x: 15
            },
            animate: p ? {
              scale: 1.02,
              rotateY: 8,
              perspective: 800,
              transformStyle: "preserve-3d",
              filter: "blur(0px) brightness(0.95)",
              x: 0
            } : {
              scale: 0.9,
              rotateY: 0,
              perspective: 800,
              transformStyle: "preserve-3d",
              filter: "blur(15px) brightness(1.5)",
              x: 15
            },
            transition: {
              duration: 0.3,
              delay: 0.1,
              ease: [0.4, 0, 0.2, 1],
              rotateY: { duration: 0.4 },
              scale: { duration: 0.4 },
              x: { duration: 0.5 }
            },
            style: {
              transformOrigin: "right center"
            },
            className: "relative flex-1 overflow-hidden w-full rounded-[30px] h-full",
            children: /* @__PURE__ */ F.jsx(
              vt.img,
              {
                src: TV,
                alt: "Visual background",
                initial: { scale: 1.1, x: 15 },
                animate: p ? { scale: 1.15, x: 0 } : { scale: 1.1, x: 15 },
                transition: {
                  duration: 0.4,
                  delay: 0.15,
                  ease: [0.4, 0, 0.2, 1]
                },
                className: "w-full rounded-[30px] h-full object-cover",
                style: { transformOrigin: "center center" }
              }
            )
          }
        ),
        /* @__PURE__ */ F.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center z-10 mt-[-20px] p-0", children: [
          /* @__PURE__ */ F.jsxs(
            vt.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: p ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
              transition: {
                duration: 0.4,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1]
              },
              className: "logo_parent flex flex-row items-center justify-center space-x-2 pt-[30px]",
              children: [
                /* @__PURE__ */ F.jsx(
                  vt.div,
                  {
                    initial: { scale: 0.3, opacity: 0 },
                    animate: p ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 0.55,
                      type: "spring",
                      bounce: 0.6,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    children: /* @__PURE__ */ F.jsxs(P3, { className: "w-7 h-7", children: [
                      /* @__PURE__ */ F.jsx(Z3, { src: EV, alt: "Logo" }),
                      /* @__PURE__ */ F.jsx(H3, { children: "NG" })
                    ] })
                  }
                ),
                /* @__PURE__ */ F.jsx(
                  vt.p,
                  {
                    initial: { opacity: 0, x: -30 },
                    animate: p ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
                    transition: {
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    className: "text-bold text-foreground",
                    children: "Night Network"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ F.jsx($6, { mode: "wait", children: /* @__PURE__ */ F.jsxs(
            vt.div,
            {
              variants: CV,
              initial: "hidden",
              animate: p ? "visible" : "hidden",
              exit: "hidden",
              transition: { delay: 0.6 },
              className: "w-[70%] text-center",
              children: [
                !h && /* @__PURE__ */ F.jsxs(
                  vt.div,
                  {
                    variants: dn,
                    className: "translate-y-[15px] mb-4",
                    children: [
                      /* @__PURE__ */ F.jsx(lb, { className: "text-3xl scale-[0.9]", children: h ? "Create Account" : "Welcome back!" }),
                      /* @__PURE__ */ F.jsx(md, { className: "text-sm mt-1", children: h ? "Get started with Night!" : `Continue to ${e} with Night` })
                    ]
                  }
                ),
                h && /* @__PURE__ */ F.jsxs(
                  vt.div,
                  {
                    variants: dn,
                    className: "translate-y-[15px] mb-2",
                    children: [
                      /* @__PURE__ */ F.jsx(lb, { className: "text-3xl scale-[0.9]", children: h ? "Create Account" : "Welcome back!" }),
                      /* @__PURE__ */ F.jsx(md, { className: "text-sm mt-1", children: h ? "Get started with Night!" : `Continue to ${e} with Night` })
                    ]
                  }
                ),
                h ? /* @__PURE__ */ F.jsx(a1, { ...R, children: /* @__PURE__ */ F.jsxs(
                  "form",
                  {
                    onSubmit: R.handleSubmit(
                      Y,
                      (O) => {
                        Object.entries(O).map(
                          ([H, ce]) => ({
                            field: H.charAt(0).toUpperCase() + H.slice(1),
                            message: ce?.message
                          })
                        ).forEach((H) => {
                          An.error(H.field, {
                            description: H.message
                          });
                        });
                      }
                    ),
                    className: "flex flex-col space-y-4 transform scale-[0.85] -translate-y-2",
                    children: [
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Mi,
                        {
                          control: R.control,
                          name: "username",
                          render: ({ field: O }) => /* @__PURE__ */ F.jsx(Di, { children: /* @__PURE__ */ F.jsx(zi, { children: /* @__PURE__ */ F.jsx(
                            Ei,
                            {
                              label: "Username",
                              placeholder: "Your username...",
                              ...O,
                              onChange: (J) => {
                                O.onChange(J), _(J.target.value);
                              }
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Mi,
                        {
                          control: R.control,
                          name: "email",
                          render: ({ field: O }) => /* @__PURE__ */ F.jsx(Di, { children: /* @__PURE__ */ F.jsx(zi, { children: /* @__PURE__ */ F.jsx(
                            Ei,
                            {
                              label: "Email address",
                              type: "email",
                              placeholder: "Your email...",
                              ...O,
                              onChange: (J) => {
                                O.onChange(J), $(J.target.value);
                              }
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Mi,
                        {
                          control: R.control,
                          name: "password",
                          render: ({ field: O }) => /* @__PURE__ */ F.jsx(Di, { children: /* @__PURE__ */ F.jsx(zi, { children: /* @__PURE__ */ F.jsx(
                            Ei,
                            {
                              label: "Password",
                              type: "password",
                              placeholder: "Your password...",
                              ...O
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Mi,
                        {
                          control: R.control,
                          name: "avatar",
                          render: ({ field: { onChange: O, ...J } }) => /* @__PURE__ */ F.jsx(Di, { children: /* @__PURE__ */ F.jsx(zi, { children: /* @__PURE__ */ F.jsx(
                            Ei,
                            {
                              label: "Avatar",
                              type: "file",
                              previewUsername: E,
                              previewEmail: D,
                              onChange: (H) => {
                                const ce = H.target.files?.[0];
                                ce && ce.type.startsWith("image/") && O(ce);
                              },
                              ...J,
                              value: J.value ? "" : void 0
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Vi,
                        {
                          className: "w-full rounded-full hover:cursor-pointer p-[23px]",
                          type: "submit",
                          disabled: c,
                          children: c ? /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
                            /* @__PURE__ */ F.jsx(S0, { size: 18, className: "" }),
                            "Loading..."
                          ] }) : "Create Account"
                        }
                      ) })
                    ]
                  }
                ) }) : /* @__PURE__ */ F.jsx(a1, { ...X, children: /* @__PURE__ */ F.jsxs(
                  "form",
                  {
                    onSubmit: X.handleSubmit(W, (O) => {
                      Object.entries(O).map(
                        ([H, ce]) => ({
                          field: H.charAt(0).toUpperCase() + H.slice(1),
                          message: ce?.message
                        })
                      ).forEach((H) => {
                        An.error(H.field, {
                          description: H.message
                        });
                      });
                    }),
                    className: "flex flex-col space-y-3 transform scale-[0.85] -translate-y-2",
                    children: [
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Mi,
                        {
                          control: X.control,
                          name: "email",
                          render: ({ field: O }) => /* @__PURE__ */ F.jsx(Di, { children: /* @__PURE__ */ F.jsx(zi, { children: /* @__PURE__ */ F.jsx(
                            Ei,
                            {
                              label: "Email address",
                              type: "email",
                              placeholder: "Your email...",
                              ...O
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Mi,
                        {
                          control: X.control,
                          name: "password",
                          render: ({ field: O }) => /* @__PURE__ */ F.jsx(Di, { children: /* @__PURE__ */ F.jsx(zi, { children: /* @__PURE__ */ F.jsx(
                            Ei,
                            {
                              label: "Password",
                              type: "password",
                              placeholder: "Your password...",
                              ...O
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ F.jsxs(
                        vt.div,
                        {
                          variants: dn,
                          className: "flex flex-row translate-y-[-13px]",
                          children: [
                            /* @__PURE__ */ F.jsx(
                              N_,
                              {
                                defaultSelected: !0,
                                radius: "full",
                                className: "pl-0 pt-0 whitespace-nowrap",
                                style: { transform: "scale(0.65) translate(-20px)" },
                                children: "Remember me"
                              }
                            ),
                            /* @__PURE__ */ F.jsx(
                              Vi,
                              {
                                className: "ml-auto pl-0 pt-0 text-muted-foreground",
                                style: { transform: "scale(0.8) translateX(15px)" },
                                variant: "link",
                                children: "Forgot password?"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Vi,
                        {
                          className: "w-full rounded-full hover:cursor-pointer p-[23px]",
                          type: "submit",
                          disabled: c,
                          children: c ? /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
                            /* @__PURE__ */ F.jsx(S0, { size: 18, className: "" }),
                            "Loading..."
                          ] }) : "Sign In"
                        }
                      ) }),
                      /* @__PURE__ */ F.jsx(vt.div, { variants: dn, children: /* @__PURE__ */ F.jsx(
                        Vi,
                        {
                          className: "w-full rounded-full hover:cursor-pointer p-[23px]",
                          variant: "outline",
                          children: "Sign in with..."
                        }
                      ) })
                    ]
                  }
                ) }),
                /* @__PURE__ */ F.jsx(
                  vt.div,
                  {
                    variants: dn,
                    className: "mt-2 transform scale-[0.85]",
                    children: /* @__PURE__ */ F.jsxs(md, { className: "text-muted-foreground text-xs mt-[-25px]", children: [
                      h ? "Already have an account?" : "Don't have an account?",
                      " ",
                      /* @__PURE__ */ F.jsx(
                        Vi,
                        {
                          variant: "link",
                          className: "pl-1 text-xs pb-0",
                          onClick: Z,
                          type: "button",
                          children: h ? "Sign in" : "Sign up"
                        }
                      )
                    ] })
                  }
                )
              ]
            },
            h ? "signup" : "signin"
          ) })
        ] })
      ]
    }
  ) });
}
function zV({ size: e = 24, color: n = "currentColor", ...r }) {
  return /* @__PURE__ */ F.jsx(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...r,
      children: /* @__PURE__ */ F.jsx(
        "path",
        {
          d: "M11.2051 0.0263672C8.11696 1.59471 6 4.79931 6 8.5C6 13.7467 10.2533 18 15.5 18C19.2008 18 22.4044 15.8823 23.9727 12.7939C23.5639 19.0512 18.3606 24 12 24C5.37258 24 0 18.6274 0 12C0 5.6397 4.94827 0.435567 11.2051 0.0263672ZM16.2236 3.80762C16.5223 3.80762 16.763 3.8403 16.9443 3.9043C17.1361 3.95765 17.2691 4.05381 17.3438 4.19238C17.4397 4.39504 17.4883 4.6884 17.4883 5.07227V6.35156H18.7842C19.1572 6.35158 19.429 6.40021 19.5996 6.49609C19.7703 6.58143 19.8822 6.71515 19.9355 6.89648C19.9995 7.07776 20.0322 7.32274 20.0322 7.63184C20.0322 7.93026 20.0054 8.17028 19.9521 8.35156C19.8988 8.5329 19.8077 8.66166 19.6797 8.73633C19.4878 8.83218 19.2159 8.87986 18.8643 8.87988H17.4883V10.1758C17.4883 10.5491 17.4398 10.8215 17.3438 10.9922C17.2585 11.1626 17.1254 11.2798 16.9443 11.3438C16.763 11.3971 16.5173 11.4238 16.208 11.4238C15.9094 11.4238 15.6696 11.397 15.4883 11.3438C15.3069 11.2797 15.1782 11.1787 15.1035 11.04C15.0076 10.8374 14.96 10.544 14.96 10.1602V8.87988H13.5684C13.2164 8.87988 12.9598 8.83729 12.7998 8.75195C12.6399 8.66662 12.5338 8.53283 12.4805 8.35156C12.4272 8.15965 12.4004 7.91463 12.4004 7.61621C12.4004 7.31772 12.4272 7.07778 12.4805 6.89648C12.5444 6.70457 12.6506 6.57078 12.7998 6.49609C13.0024 6.40012 13.2958 6.35159 13.6797 6.35156H14.96V5.05566C14.96 4.68267 15.0027 4.41086 15.0879 4.24023C15.1732 4.06957 15.3069 3.95763 15.4883 3.9043C15.6802 3.84036 15.9252 3.80764 16.2236 3.80762Z",
          fill: r.fill ?? n
        }
      )
    }
  );
}
function $V() {
  const e = C.useId();
  return /* @__PURE__ */ F.jsxs(
    Vi,
    {
      variant: "night",
      id: e,
      className: "signInWithNight border-solid border-2 border-sign-with-night-border rounded-full font p-[1rem] w-[17.5rem] transition-shadow duration-300 ease-out shadow-[inset_0_0_0_0_rgba(203,166,247,0)] hover:shadow-[inset_0_4px_12px_-4px_rgba(203,166,247,0.65)]",
      children: [
        /* @__PURE__ */ F.jsx(zV, { size: 18, className: "mr-1" }),
        " Sign in with Night"
      ]
    }
  );
}
const jV = {
  render: (e, n) => {
    const r = QE.createRoot(e);
    r.render(Re.createElement(DV, n)), e.__night_root = r;
  },
  unmount: (e) => {
    const n = e.__night_root;
    n && typeof n.unmount == "function" ? n.unmount() : e.innerHTML = "";
  }
};
export {
  $V as SignInWithNight,
  jV as default
};
//# sourceMappingURL=night-login-frame.es.js.map
