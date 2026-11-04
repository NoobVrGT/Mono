function _1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var md = { exports: {} }, $e = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ly;
function p2() {
  if (Ly) return $e;
  Ly = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.iterator;
  function b(w) {
    return w === null || typeof w != "object" ? null : (w = v && w[v] || w["@@iterator"], typeof w == "function" ? w : null);
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
  }, _ = Object.assign, M = {};
  function N(w, J, oe) {
    this.props = w, this.context = J, this.refs = M, this.updater = oe || E;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(w, J) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, J, "setState");
  }, N.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function L() {
  }
  L.prototype = N.prototype;
  function z(w, J, oe) {
    this.props = w, this.context = J, this.refs = M, this.updater = oe || E;
  }
  var Z = z.prototype = new L();
  Z.constructor = z, _(Z, N.prototype), Z.isPureReactComponent = !0;
  var ee = Array.isArray, I = { H: null, A: null, T: null, S: null, V: null }, k = Object.prototype.hasOwnProperty;
  function W(w, J, oe, Q, le, me) {
    return oe = me.ref, {
      $$typeof: e,
      type: w,
      key: J,
      ref: oe !== void 0 ? oe : null,
      props: me
    };
  }
  function Y(w, J) {
    return W(
      w.type,
      J,
      void 0,
      void 0,
      void 0,
      w.props
    );
  }
  function de(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }
  function ve(w) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(oe) {
      return J[oe];
    });
  }
  var K = /\/+/g;
  function q(w, J) {
    return typeof w == "object" && w !== null && w.key != null ? ve("" + w.key) : J.toString(36);
  }
  function ne() {
  }
  function H(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(ne, ne) : (w.status = "pending", w.then(
          function(J) {
            w.status === "pending" && (w.status = "fulfilled", w.value = J);
          },
          function(J) {
            w.status === "pending" && (w.status = "rejected", w.reason = J);
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
  function ie(w, J, oe, Q, le) {
    var me = typeof w;
    (me === "undefined" || me === "boolean") && (w = null);
    var ge = !1;
    if (w === null) ge = !0;
    else
      switch (me) {
        case "bigint":
        case "string":
        case "number":
          ge = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case e:
            case n:
              ge = !0;
              break;
            case g:
              return ge = w._init, ie(
                ge(w._payload),
                J,
                oe,
                Q,
                le
              );
          }
      }
    if (ge)
      return le = le(w), ge = Q === "" ? "." + q(w, 0) : Q, ee(le) ? (oe = "", ge != null && (oe = ge.replace(K, "$&/") + "/"), ie(le, J, oe, "", function(We) {
        return We;
      })) : le != null && (de(le) && (le = Y(
        le,
        oe + (le.key == null || w && w.key === le.key ? "" : ("" + le.key).replace(
          K,
          "$&/"
        ) + "/") + ge
      )), J.push(le)), 1;
    ge = 0;
    var _e = Q === "" ? "." : Q + ":";
    if (ee(w))
      for (var Te = 0; Te < w.length; Te++)
        Q = w[Te], me = _e + q(Q, Te), ge += ie(
          Q,
          J,
          oe,
          me,
          le
        );
    else if (Te = b(w), typeof Te == "function")
      for (w = Te.call(w), Te = 0; !(Q = w.next()).done; )
        Q = Q.value, me = _e + q(Q, Te++), ge += ie(
          Q,
          J,
          oe,
          me,
          le
        );
    else if (me === "object") {
      if (typeof w.then == "function")
        return ie(
          H(w),
          J,
          oe,
          Q,
          le
        );
      throw J = String(w), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ge;
  }
  function S(w, J, oe) {
    if (w == null) return w;
    var Q = [], le = 0;
    return ie(w, Q, "", "", function(me) {
      return J.call(oe, me, le++);
    }), Q;
  }
  function O(w) {
    if (w._status === -1) {
      var J = w._result;
      J = J(), J.then(
        function(oe) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = oe);
        },
        function(oe) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = oe);
        }
      ), w._status === -1 && (w._status = 0, w._result = J);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var R = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  };
  function ue() {
  }
  return $e.Children = {
    map: S,
    forEach: function(w, J, oe) {
      S(
        w,
        function() {
          J.apply(this, arguments);
        },
        oe
      );
    },
    count: function(w) {
      var J = 0;
      return S(w, function() {
        J++;
      }), J;
    },
    toArray: function(w) {
      return S(w, function(J) {
        return J;
      }) || [];
    },
    only: function(w) {
      if (!de(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  }, $e.Component = N, $e.Fragment = i, $e.Profiler = l, $e.PureComponent = z, $e.StrictMode = s, $e.Suspense = m, $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, $e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return I.H.useMemoCache(w);
    }
  }, $e.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, $e.cloneElement = function(w, J, oe) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var Q = _({}, w.props), le = w.key, me = void 0;
    if (J != null)
      for (ge in J.ref !== void 0 && (me = void 0), J.key !== void 0 && (le = "" + J.key), J)
        !k.call(J, ge) || ge === "key" || ge === "__self" || ge === "__source" || ge === "ref" && J.ref === void 0 || (Q[ge] = J[ge]);
    var ge = arguments.length - 2;
    if (ge === 1) Q.children = oe;
    else if (1 < ge) {
      for (var _e = Array(ge), Te = 0; Te < ge; Te++)
        _e[Te] = arguments[Te + 2];
      Q.children = _e;
    }
    return W(w.type, le, void 0, void 0, me, Q);
  }, $e.createContext = function(w) {
    return w = {
      $$typeof: f,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: u,
      _context: w
    }, w;
  }, $e.createElement = function(w, J, oe) {
    var Q, le = {}, me = null;
    if (J != null)
      for (Q in J.key !== void 0 && (me = "" + J.key), J)
        k.call(J, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (le[Q] = J[Q]);
    var ge = arguments.length - 2;
    if (ge === 1) le.children = oe;
    else if (1 < ge) {
      for (var _e = Array(ge), Te = 0; Te < ge; Te++)
        _e[Te] = arguments[Te + 2];
      le.children = _e;
    }
    if (w && w.defaultProps)
      for (Q in ge = w.defaultProps, ge)
        le[Q] === void 0 && (le[Q] = ge[Q]);
    return W(w, me, void 0, void 0, null, le);
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(w) {
    return { $$typeof: h, render: w };
  }, $e.isValidElement = de, $e.lazy = function(w) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: w },
      _init: O
    };
  }, $e.memo = function(w, J) {
    return {
      $$typeof: p,
      type: w,
      compare: J === void 0 ? null : J
    };
  }, $e.startTransition = function(w) {
    var J = I.T, oe = {};
    I.T = oe;
    try {
      var Q = w(), le = I.S;
      le !== null && le(oe, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(ue, R);
    } catch (me) {
      R(me);
    } finally {
      I.T = J;
    }
  }, $e.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, $e.use = function(w) {
    return I.H.use(w);
  }, $e.useActionState = function(w, J, oe) {
    return I.H.useActionState(w, J, oe);
  }, $e.useCallback = function(w, J) {
    return I.H.useCallback(w, J);
  }, $e.useContext = function(w) {
    return I.H.useContext(w);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(w, J) {
    return I.H.useDeferredValue(w, J);
  }, $e.useEffect = function(w, J, oe) {
    var Q = I.H;
    if (typeof oe == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return Q.useEffect(w, J);
  }, $e.useId = function() {
    return I.H.useId();
  }, $e.useImperativeHandle = function(w, J, oe) {
    return I.H.useImperativeHandle(w, J, oe);
  }, $e.useInsertionEffect = function(w, J) {
    return I.H.useInsertionEffect(w, J);
  }, $e.useLayoutEffect = function(w, J) {
    return I.H.useLayoutEffect(w, J);
  }, $e.useMemo = function(w, J) {
    return I.H.useMemo(w, J);
  }, $e.useOptimistic = function(w, J) {
    return I.H.useOptimistic(w, J);
  }, $e.useReducer = function(w, J, oe) {
    return I.H.useReducer(w, J, oe);
  }, $e.useRef = function(w) {
    return I.H.useRef(w);
  }, $e.useState = function(w) {
    return I.H.useState(w);
  }, $e.useSyncExternalStore = function(w, J, oe) {
    return I.H.useSyncExternalStore(
      w,
      J,
      oe
    );
  }, $e.useTransition = function() {
    return I.H.useTransition();
  }, $e.version = "19.1.0", $e;
}
var Uy;
function Fu() {
  return Uy || (Uy = 1, md.exports = /* @__PURE__ */ p2()), md.exports;
}
var A = /* @__PURE__ */ Fu();
const j = /* @__PURE__ */ _1(A);
var pd = { exports: {} }, uo = {}, gd = { exports: {} }, vd = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var By;
function g2() {
  return By || (By = 1, function(e) {
    function n(S, O) {
      var R = S.length;
      S.push(O);
      e: for (; 0 < R; ) {
        var ue = R - 1 >>> 1, w = S[ue];
        if (0 < l(w, O))
          S[ue] = O, S[R] = w, R = ue;
        else break e;
      }
    }
    function i(S) {
      return S.length === 0 ? null : S[0];
    }
    function s(S) {
      if (S.length === 0) return null;
      var O = S[0], R = S.pop();
      if (R !== O) {
        S[0] = R;
        e: for (var ue = 0, w = S.length, J = w >>> 1; ue < J; ) {
          var oe = 2 * (ue + 1) - 1, Q = S[oe], le = oe + 1, me = S[le];
          if (0 > l(Q, R))
            le < w && 0 > l(me, Q) ? (S[ue] = me, S[le] = R, ue = le) : (S[ue] = Q, S[oe] = R, ue = oe);
          else if (le < w && 0 > l(me, R))
            S[ue] = me, S[le] = R, ue = le;
          else break e;
        }
      }
      return O;
    }
    function l(S, O) {
      var R = S.sortIndex - O.sortIndex;
      return R !== 0 ? R : S.id - O.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      e.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, h = f.now();
      e.unstable_now = function() {
        return f.now() - h;
      };
    }
    var m = [], p = [], g = 1, v = null, b = 3, E = !1, _ = !1, M = !1, N = !1, L = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function ee(S) {
      for (var O = i(p); O !== null; ) {
        if (O.callback === null) s(p);
        else if (O.startTime <= S)
          s(p), O.sortIndex = O.expirationTime, n(m, O);
        else break;
        O = i(p);
      }
    }
    function I(S) {
      if (M = !1, ee(S), !_)
        if (i(m) !== null)
          _ = !0, k || (k = !0, q());
        else {
          var O = i(p);
          O !== null && ie(I, O.startTime - S);
        }
    }
    var k = !1, W = -1, Y = 5, de = -1;
    function ve() {
      return N ? !0 : !(e.unstable_now() - de < Y);
    }
    function K() {
      if (N = !1, k) {
        var S = e.unstable_now();
        de = S;
        var O = !0;
        try {
          e: {
            _ = !1, M && (M = !1, z(W), W = -1), E = !0;
            var R = b;
            try {
              t: {
                for (ee(S), v = i(m); v !== null && !(v.expirationTime > S && ve()); ) {
                  var ue = v.callback;
                  if (typeof ue == "function") {
                    v.callback = null, b = v.priorityLevel;
                    var w = ue(
                      v.expirationTime <= S
                    );
                    if (S = e.unstable_now(), typeof w == "function") {
                      v.callback = w, ee(S), O = !0;
                      break t;
                    }
                    v === i(m) && s(m), ee(S);
                  } else s(m);
                  v = i(m);
                }
                if (v !== null) O = !0;
                else {
                  var J = i(p);
                  J !== null && ie(
                    I,
                    J.startTime - S
                  ), O = !1;
                }
              }
              break e;
            } finally {
              v = null, b = R, E = !1;
            }
            O = void 0;
          }
        } finally {
          O ? q() : k = !1;
        }
      }
    }
    var q;
    if (typeof Z == "function")
      q = function() {
        Z(K);
      };
    else if (typeof MessageChannel < "u") {
      var ne = new MessageChannel(), H = ne.port2;
      ne.port1.onmessage = K, q = function() {
        H.postMessage(null);
      };
    } else
      q = function() {
        L(K, 0);
      };
    function ie(S, O) {
      W = L(function() {
        S(e.unstable_now());
      }, O);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, e.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < S ? Math.floor(1e3 / S) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, e.unstable_next = function(S) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = b;
      }
      var R = b;
      b = O;
      try {
        return S();
      } finally {
        b = R;
      }
    }, e.unstable_requestPaint = function() {
      N = !0;
    }, e.unstable_runWithPriority = function(S, O) {
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
      var R = b;
      b = S;
      try {
        return O();
      } finally {
        b = R;
      }
    }, e.unstable_scheduleCallback = function(S, O, R) {
      var ue = e.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? ue + R : ue) : R = ue, S) {
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
      return w = R + w, S = {
        id: g++,
        callback: O,
        priorityLevel: S,
        startTime: R,
        expirationTime: w,
        sortIndex: -1
      }, R > ue ? (S.sortIndex = R, n(p, S), i(m) === null && S === i(p) && (M ? (z(W), W = -1) : M = !0, ie(I, R - ue))) : (S.sortIndex = w, n(m, S), _ || E || (_ = !0, k || (k = !0, q()))), S;
    }, e.unstable_shouldYield = ve, e.unstable_wrapCallback = function(S) {
      var O = b;
      return function() {
        var R = b;
        b = O;
        try {
          return S.apply(this, arguments);
        } finally {
          b = R;
        }
      };
    };
  }(vd)), vd;
}
var Py;
function v2() {
  return Py || (Py = 1, gd.exports = /* @__PURE__ */ g2()), gd.exports;
}
var yd = { exports: {} }, Jt = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Hy;
function y2() {
  if (Hy) return Jt;
  Hy = 1;
  var e = /* @__PURE__ */ Fu();
  function n(m) {
    var p = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + m + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var s = {
    d: {
      f: i,
      r: function() {
        throw Error(n(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, l = Symbol.for("react.portal");
  function u(m, p, g) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: v == null ? null : "" + v,
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
  return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Jt.createPortal = function(m, p) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(n(299));
    return u(m, p, null, g);
  }, Jt.flushSync = function(m) {
    var p = f.T, g = s.p;
    try {
      if (f.T = null, s.p = 2, m) return m();
    } finally {
      f.T = p, s.p = g, s.d.f();
    }
  }, Jt.preconnect = function(m, p) {
    typeof m == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(m, p));
  }, Jt.prefetchDNS = function(m) {
    typeof m == "string" && s.d.D(m);
  }, Jt.preinit = function(m, p) {
    if (typeof m == "string" && p && typeof p.as == "string") {
      var g = p.as, v = h(g, p.crossOrigin), b = typeof p.integrity == "string" ? p.integrity : void 0, E = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      g === "style" ? s.d.S(
        m,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: v,
          integrity: b,
          fetchPriority: E
        }
      ) : g === "script" && s.d.X(m, {
        crossOrigin: v,
        integrity: b,
        fetchPriority: E,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Jt.preinitModule = function(m, p) {
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
  }, Jt.preload = function(m, p) {
    if (typeof m == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var g = p.as, v = h(g, p.crossOrigin);
      s.d.L(m, g, {
        crossOrigin: v,
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
  }, Jt.preloadModule = function(m, p) {
    if (typeof m == "string")
      if (p) {
        var g = h(p.as, p.crossOrigin);
        s.d.m(m, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: g,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else s.d.m(m);
  }, Jt.requestFormReset = function(m) {
    s.d.r(m);
  }, Jt.unstable_batchedUpdates = function(m, p) {
    return m(p);
  }, Jt.useFormState = function(m, p, g) {
    return f.H.useFormState(m, p, g);
  }, Jt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Jt.version = "19.1.0", Jt;
}
var Zy;
function C1() {
  if (Zy) return yd.exports;
  Zy = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), yd.exports = /* @__PURE__ */ y2(), yd.exports;
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
var Gy;
function b2() {
  if (Gy) return uo;
  Gy = 1;
  var e = /* @__PURE__ */ v2(), n = /* @__PURE__ */ Fu(), i = /* @__PURE__ */ C1();
  function s(t) {
    var a = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        a += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + t + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function u(t) {
    var a = t, r = t;
    if (t.alternate) for (; a.return; ) a = a.return;
    else {
      t = a;
      do
        a = t, (a.flags & 4098) !== 0 && (r = a.return), t = a.return;
      while (t);
    }
    return a.tag === 3 ? r : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var a = t.memoizedState;
      if (a === null && (t = t.alternate, t !== null && (a = t.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (u(t) !== t)
      throw Error(s(188));
  }
  function m(t) {
    var a = t.alternate;
    if (!a) {
      if (a = u(t), a === null) throw Error(s(188));
      return a !== t ? null : t;
    }
    for (var r = t, o = a; ; ) {
      var c = r.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          r = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === r) return h(c), t;
          if (d === o) return h(c), a;
          d = d.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== o.return) r = c, o = d;
      else {
        for (var y = !1, x = c.child; x; ) {
          if (x === r) {
            y = !0, r = c, o = d;
            break;
          }
          if (x === o) {
            y = !0, o = c, r = d;
            break;
          }
          x = x.sibling;
        }
        if (!y) {
          for (x = d.child; x; ) {
            if (x === r) {
              y = !0, r = d, o = c;
              break;
            }
            if (x === o) {
              y = !0, o = d, r = c;
              break;
            }
            x = x.sibling;
          }
          if (!y) throw Error(s(189));
        }
      }
      if (r.alternate !== o) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? t : a;
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
  var g = Object.assign, v = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), z = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), ve = Symbol.for("react.memo_cache_sentinel"), K = Symbol.iterator;
  function q(t) {
    return t === null || typeof t != "object" ? null : (t = K && t[K] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ne = Symbol.for("react.client.reference");
  function H(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ne ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case _:
        return "Fragment";
      case N:
        return "Profiler";
      case M:
        return "StrictMode";
      case I:
        return "Suspense";
      case k:
        return "SuspenseList";
      case de:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case E:
          return "Portal";
        case Z:
          return (t.displayName || "Context") + ".Provider";
        case z:
          return (t._context.displayName || "Context") + ".Consumer";
        case ee:
          var a = t.render;
          return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case W:
          return a = t.displayName || null, a !== null ? a : H(t.type) || "Memo";
        case Y:
          a = t._payload, t = t._init;
          try {
            return H(t(a));
          } catch {
          }
      }
    return null;
  }
  var ie = Array.isArray, S = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ue = [], w = -1;
  function J(t) {
    return { current: t };
  }
  function oe(t) {
    0 > w || (t.current = ue[w], ue[w] = null, w--);
  }
  function Q(t, a) {
    w++, ue[w] = t.current, t.current = a;
  }
  var le = J(null), me = J(null), ge = J(null), _e = J(null);
  function Te(t, a) {
    switch (Q(ge, a), Q(me, t), Q(le, null), a.nodeType) {
      case 9:
      case 11:
        t = (t = a.documentElement) && (t = t.namespaceURI) ? dy(t) : 0;
        break;
      default:
        if (t = a.tagName, a = a.namespaceURI)
          a = dy(a), t = hy(a, t);
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
    oe(le), Q(le, t);
  }
  function We() {
    oe(le), oe(me), oe(ge);
  }
  function Et(t) {
    t.memoizedState !== null && Q(_e, t);
    var a = le.current, r = hy(a, t.type);
    a !== r && (Q(me, t), Q(le, r));
  }
  function lt(t) {
    me.current === t && (oe(le), oe(me)), _e.current === t && (oe(_e), io._currentValue = R);
  }
  var it = Object.prototype.hasOwnProperty, Yt = e.unstable_scheduleCallback, un = e.unstable_cancelCallback, Na = e.unstable_shouldYield, ja = e.unstable_requestPaint, Tt = e.unstable_now, Cn = e.unstable_getCurrentPriorityLevel, jt = e.unstable_ImmediatePriority, C = e.unstable_UserBlockingPriority, B = e.unstable_NormalPriority, X = e.unstable_LowPriority, he = e.unstable_IdlePriority, fe = e.log, ce = e.unstable_setDisableYieldValue, ye = null, De = null;
  function Ve(t) {
    if (typeof fe == "function" && ce(t), De && typeof De.setStrictMode == "function")
      try {
        De.setStrictMode(ye, t);
      } catch {
      }
  }
  var Ge = Math.clz32 ? Math.clz32 : Mn, en = Math.log, tn = Math.LN2;
  function Mn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (en(t) / tn | 0) | 0;
  }
  var Dn = 256, At = 4194304;
  function Rn(t) {
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
  function Jn(t, a, r) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var c = 0, d = t.suspendedLanes, y = t.pingedLanes;
    t = t.warmLanes;
    var x = o & 134217727;
    return x !== 0 ? (o = x & ~d, o !== 0 ? c = Rn(o) : (y &= x, y !== 0 ? c = Rn(y) : r || (r = x & ~t, r !== 0 && (c = Rn(r))))) : (x = o & ~d, x !== 0 ? c = Rn(x) : y !== 0 ? c = Rn(y) : r || (r = o & ~t, r !== 0 && (c = Rn(r)))), c === 0 ? 0 : a !== 0 && a !== c && (a & d) === 0 && (d = c & -c, r = a & -a, d >= r || d === 32 && (r & 4194048) !== 0) ? a : c;
  }
  function ha(t, a) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & a) === 0;
  }
  function La(t, a) {
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
  function Yn() {
    var t = Dn;
    return Dn <<= 1, (Dn & 4194048) === 0 && (Dn = 256), t;
  }
  function qo() {
    var t = At;
    return At <<= 1, (At & 62914560) === 0 && (At = 4194304), t;
  }
  function ms(t) {
    for (var a = [], r = 0; 31 > r; r++) a.push(t);
    return a;
  }
  function Ua(t, a) {
    t.pendingLanes |= a, a !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Ko(t, a, r, o, c, d) {
    var y = t.pendingLanes;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= r, t.entangledLanes &= r, t.errorRecoveryDisabledLanes &= r, t.shellSuspendCounter = 0;
    var x = t.entanglements, T = t.expirationTimes, P = t.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var te = 31 - Ge(r), re = 1 << te;
      x[te] = 0, T[te] = -1;
      var G = P[te];
      if (G !== null)
        for (P[te] = null, te = 0; te < G.length; te++) {
          var F = G[te];
          F !== null && (F.lane &= -536870913);
        }
      r &= ~re;
    }
    o !== 0 && Oe(t, o, 0), d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(y & ~a));
  }
  function Oe(t, a, r) {
    t.pendingLanes |= a, t.suspendedLanes &= ~a;
    var o = 31 - Ge(a);
    t.entangledLanes |= a, t.entanglements[o] = t.entanglements[o] | 1073741824 | r & 4194090;
  }
  function pt(t, a) {
    var r = t.entangledLanes |= a;
    for (t = t.entanglements; r; ) {
      var o = 31 - Ge(r), c = 1 << o;
      c & a | t[o] & a && (t[o] |= a), r &= ~c;
    }
  }
  function _t(t) {
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
  function Ft(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function bi() {
    var t = O.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ky(t.type));
  }
  function zt(t, a) {
    var r = O.p;
    try {
      return O.p = t, a();
    } finally {
      O.p = r;
    }
  }
  var gt = Math.random().toString(36).slice(2), vt = "__reactFiber$" + gt, tt = "__reactProps$" + gt, Lt = "__reactContainer$" + gt, tr = "__reactEvents$" + gt, ma = "__reactListeners$" + gt, Wm = "__reactHandles$" + gt, ep = "__reactResources$" + gt, ps = "__reactMarker$" + gt;
  function sc(t) {
    delete t[vt], delete t[tt], delete t[tr], delete t[ma], delete t[Wm];
  }
  function nr(t) {
    var a = t[vt];
    if (a) return a;
    for (var r = t.parentNode; r; ) {
      if (a = r[Lt] || r[vt]) {
        if (r = a.alternate, a.child !== null || r !== null && r.child !== null)
          for (t = vy(t); t !== null; ) {
            if (r = t[vt]) return r;
            t = vy(t);
          }
        return a;
      }
      t = r, r = t.parentNode;
    }
    return null;
  }
  function ar(t) {
    if (t = t[vt] || t[Lt]) {
      var a = t.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return t;
    }
    return null;
  }
  function gs(t) {
    var a = t.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return t.stateNode;
    throw Error(s(33));
  }
  function ir(t) {
    var a = t[ep];
    return a || (a = t[ep] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function Ut(t) {
    t[ps] = !0;
  }
  var tp = /* @__PURE__ */ new Set(), np = {};
  function xi(t, a) {
    rr(t, a), rr(t + "Capture", a);
  }
  function rr(t, a) {
    for (np[t] = a, t = 0; t < a.length; t++)
      tp.add(a[t]);
  }
  var oE = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ap = {}, ip = {};
  function lE(t) {
    return it.call(ip, t) ? !0 : it.call(ap, t) ? !1 : oE.test(t) ? ip[t] = !0 : (ap[t] = !0, !1);
  }
  function Io(t, a, r) {
    if (lE(a))
      if (r === null) t.removeAttribute(a);
      else {
        switch (typeof r) {
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
        t.setAttribute(a, "" + r);
      }
  }
  function Xo(t, a, r) {
    if (r === null) t.removeAttribute(a);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttribute(a, "" + r);
    }
  }
  function pa(t, a, r, o) {
    if (o === null) t.removeAttribute(r);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(r);
          return;
      }
      t.setAttributeNS(a, r, "" + o);
    }
  }
  var oc, rp;
  function sr(t) {
    if (oc === void 0)
      try {
        throw Error();
      } catch (r) {
        var a = r.stack.trim().match(/\n( *(at )?)/);
        oc = a && a[1] || "", rp = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + oc + t + rp;
  }
  var lc = !1;
  function uc(t, a) {
    if (!t || lc) return "";
    lc = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var re = function() {
                throw Error();
              };
              if (Object.defineProperty(re.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(re, []);
                } catch (F) {
                  var G = F;
                }
                Reflect.construct(t, [], re);
              } else {
                try {
                  re.call();
                } catch (F) {
                  G = F;
                }
                t.call(re.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                G = F;
              }
              (re = t()) && typeof re.catch == "function" && re.catch(function() {
              });
            }
          } catch (F) {
            if (F && G && typeof F.stack == "string")
              return [F.stack, G.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = o.DetermineComponentFrameRoot(), y = d[0], x = d[1];
      if (y && x) {
        var T = y.split(`
`), P = x.split(`
`);
        for (c = o = 0; o < T.length && !T[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; c < P.length && !P[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (o === T.length || c === P.length)
          for (o = T.length - 1, c = P.length - 1; 1 <= o && 0 <= c && T[o] !== P[c]; )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (T[o] !== P[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || T[o] !== P[c]) {
                  var te = `
` + T[o].replace(" at new ", " at ");
                  return t.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", t.displayName)), te;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      lc = !1, Error.prepareStackTrace = r;
    }
    return (r = t ? t.displayName || t.name : "") ? sr(r) : "";
  }
  function uE(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return sr(t.type);
      case 16:
        return sr("Lazy");
      case 13:
        return sr("Suspense");
      case 19:
        return sr("SuspenseList");
      case 0:
      case 15:
        return uc(t.type, !1);
      case 11:
        return uc(t.type.render, !1);
      case 1:
        return uc(t.type, !0);
      case 31:
        return sr("Activity");
      default:
        return "";
    }
  }
  function sp(t) {
    try {
      var a = "";
      do
        a += uE(t), t = t.return;
      while (t);
      return a;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  function zn(t) {
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
  function op(t) {
    var a = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function cE(t) {
    var a = op(t) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      a
    ), o = "" + t[a];
    if (!t.hasOwnProperty(a) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var c = r.get, d = r.set;
      return Object.defineProperty(t, a, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(y) {
          o = "" + y, d.call(this, y);
        }
      }), Object.defineProperty(t, a, {
        enumerable: r.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(y) {
          o = "" + y;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[a];
        }
      };
    }
  }
  function Qo(t) {
    t._valueTracker || (t._valueTracker = cE(t));
  }
  function lp(t) {
    if (!t) return !1;
    var a = t._valueTracker;
    if (!a) return !0;
    var r = a.getValue(), o = "";
    return t && (o = op(t) ? t.checked ? "true" : "false" : t.value), t = o, t !== r ? (a.setValue(t), !0) : !1;
  }
  function Jo(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var fE = /[\n"\\]/g;
  function kn(t) {
    return t.replace(
      fE,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function cc(t, a, r, o, c, d, y, x) {
    t.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y : t.removeAttribute("type"), a != null ? y === "number" ? (a === 0 && t.value === "" || t.value != a) && (t.value = "" + zn(a)) : t.value !== "" + zn(a) && (t.value = "" + zn(a)) : y !== "submit" && y !== "reset" || t.removeAttribute("value"), a != null ? fc(t, y, zn(a)) : r != null ? fc(t, y, zn(r)) : o != null && t.removeAttribute("value"), c == null && d != null && (t.defaultChecked = !!d), c != null && (t.checked = c && typeof c != "function" && typeof c != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? t.name = "" + zn(x) : t.removeAttribute("name");
  }
  function up(t, a, r, o, c, d, y, x) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.type = d), a != null || r != null) {
      if (!(d !== "submit" && d !== "reset" || a != null))
        return;
      r = r != null ? "" + zn(r) : "", a = a != null ? "" + zn(a) : r, x || a === t.value || (t.value = a), t.defaultValue = a;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, t.checked = x ? t.checked : !!o, t.defaultChecked = !!o, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (t.name = y);
  }
  function fc(t, a, r) {
    a === "number" && Jo(t.ownerDocument) === t || t.defaultValue === "" + r || (t.defaultValue = "" + r);
  }
  function or(t, a, r, o) {
    if (t = t.options, a) {
      a = {};
      for (var c = 0; c < r.length; c++)
        a["$" + r[c]] = !0;
      for (r = 0; r < t.length; r++)
        c = a.hasOwnProperty("$" + t[r].value), t[r].selected !== c && (t[r].selected = c), c && o && (t[r].defaultSelected = !0);
    } else {
      for (r = "" + zn(r), a = null, c = 0; c < t.length; c++) {
        if (t[c].value === r) {
          t[c].selected = !0, o && (t[c].defaultSelected = !0);
          return;
        }
        a !== null || t[c].disabled || (a = t[c]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function cp(t, a, r) {
    if (a != null && (a = "" + zn(a), a !== t.value && (t.value = a), r == null)) {
      t.defaultValue !== a && (t.defaultValue = a);
      return;
    }
    t.defaultValue = r != null ? "" + zn(r) : "";
  }
  function fp(t, a, r, o) {
    if (a == null) {
      if (o != null) {
        if (r != null) throw Error(s(92));
        if (ie(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), a = r;
    }
    r = zn(a), t.defaultValue = r, o = t.textContent, o === r && o !== "" && o !== null && (t.value = o);
  }
  function lr(t, a) {
    if (a) {
      var r = t.firstChild;
      if (r && r === t.lastChild && r.nodeType === 3) {
        r.nodeValue = a;
        return;
      }
    }
    t.textContent = a;
  }
  var dE = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function dp(t, a, r) {
    var o = a.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? o ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "" : o ? t.setProperty(a, r) : typeof r != "number" || r === 0 || dE.has(a) ? a === "float" ? t.cssFloat = r : t[a] = ("" + r).trim() : t[a] = r + "px";
  }
  function hp(t, a, r) {
    if (a != null && typeof a != "object")
      throw Error(s(62));
    if (t = t.style, r != null) {
      for (var o in r)
        !r.hasOwnProperty(o) || a != null && a.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o, "") : o === "float" ? t.cssFloat = "" : t[o] = "");
      for (var c in a)
        o = a[c], a.hasOwnProperty(c) && r[c] !== o && dp(t, c, o);
    } else
      for (var d in a)
        a.hasOwnProperty(d) && dp(t, d, a[d]);
  }
  function dc(t) {
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
  var hE = /* @__PURE__ */ new Map([
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
  ]), mE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wo(t) {
    return mE.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var hc = null;
  function mc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ur = null, cr = null;
  function mp(t) {
    var a = ar(t);
    if (a && (t = a.stateNode)) {
      var r = t[tt] || null;
      e: switch (t = a.stateNode, a.type) {
        case "input":
          if (cc(
            t,
            r.value,
            r.defaultValue,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name
          ), a = r.name, r.type === "radio" && a != null) {
            for (r = t; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll(
              'input[name="' + kn(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < r.length; a++) {
              var o = r[a];
              if (o !== t && o.form === t.form) {
                var c = o[tt] || null;
                if (!c) throw Error(s(90));
                cc(
                  o,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (a = 0; a < r.length; a++)
              o = r[a], o.form === t.form && lp(o);
          }
          break e;
        case "textarea":
          cp(t, r.value, r.defaultValue);
          break e;
        case "select":
          a = r.value, a != null && or(t, !!r.multiple, a, !1);
      }
    }
  }
  var pc = !1;
  function pp(t, a, r) {
    if (pc) return t(a, r);
    pc = !0;
    try {
      var o = t(a);
      return o;
    } finally {
      if (pc = !1, (ur !== null || cr !== null) && (Ll(), ur && (a = ur, t = cr, cr = ur = null, mp(a), t)))
        for (a = 0; a < t.length; a++) mp(t[a]);
    }
  }
  function vs(t, a) {
    var r = t.stateNode;
    if (r === null) return null;
    var o = r[tt] || null;
    if (o === null) return null;
    r = o[a];
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
    if (r && typeof r != "function")
      throw Error(
        s(231, a, typeof r)
      );
    return r;
  }
  var ga = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gc = !1;
  if (ga)
    try {
      var ys = {};
      Object.defineProperty(ys, "passive", {
        get: function() {
          gc = !0;
        }
      }), window.addEventListener("test", ys, ys), window.removeEventListener("test", ys, ys);
    } catch {
      gc = !1;
    }
  var Ba = null, vc = null, el = null;
  function gp() {
    if (el) return el;
    var t, a = vc, r = a.length, o, c = "value" in Ba ? Ba.value : Ba.textContent, d = c.length;
    for (t = 0; t < r && a[t] === c[t]; t++) ;
    var y = r - t;
    for (o = 1; o <= y && a[r - o] === c[d - o]; o++) ;
    return el = c.slice(t, 1 < o ? 1 - o : void 0);
  }
  function tl(t) {
    var a = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function nl() {
    return !0;
  }
  function vp() {
    return !1;
  }
  function cn(t) {
    function a(r, o, c, d, y) {
      this._reactName = r, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var x in t)
        t.hasOwnProperty(x) && (r = t[x], this[x] = r ? r(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? nl : vp, this.isPropagationStopped = vp, this;
    }
    return g(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = nl);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = nl);
      },
      persist: function() {
      },
      isPersistent: nl
    }), a;
  }
  var Si = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, al = cn(Si), bs = g({}, Si, { view: 0, detail: 0 }), pE = cn(bs), yc, bc, xs, il = g({}, bs, {
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
    getModifierState: Sc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== xs && (xs && t.type === "mousemove" ? (yc = t.screenX - xs.screenX, bc = t.screenY - xs.screenY) : bc = yc = 0, xs = t), yc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : bc;
    }
  }), yp = cn(il), gE = g({}, il, { dataTransfer: 0 }), vE = cn(gE), yE = g({}, bs, { relatedTarget: 0 }), xc = cn(yE), bE = g({}, Si, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xE = cn(bE), SE = g({}, Si, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), wE = cn(SE), EE = g({}, Si, { data: 0 }), bp = cn(EE), TE = {
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
  }, AE = {
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
  }, _E = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function CE(t) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(t) : (t = _E[t]) ? !!a[t] : !1;
  }
  function Sc() {
    return CE;
  }
  var ME = g({}, bs, {
    key: function(t) {
      if (t.key) {
        var a = TE[t.key] || t.key;
        if (a !== "Unidentified") return a;
      }
      return t.type === "keypress" ? (t = tl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? AE[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sc,
    charCode: function(t) {
      return t.type === "keypress" ? tl(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? tl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), DE = cn(ME), RE = g({}, il, {
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
  }), xp = cn(RE), zE = g({}, bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sc
  }), kE = cn(zE), OE = g({}, Si, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), VE = cn(OE), $E = g({}, il, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), NE = cn($E), jE = g({}, Si, {
    newState: 0,
    oldState: 0
  }), LE = cn(jE), UE = [9, 13, 27, 32], wc = ga && "CompositionEvent" in window, Ss = null;
  ga && "documentMode" in document && (Ss = document.documentMode);
  var BE = ga && "TextEvent" in window && !Ss, Sp = ga && (!wc || Ss && 8 < Ss && 11 >= Ss), wp = " ", Ep = !1;
  function Tp(t, a) {
    switch (t) {
      case "keyup":
        return UE.indexOf(a.keyCode) !== -1;
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
  function Ap(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var fr = !1;
  function PE(t, a) {
    switch (t) {
      case "compositionend":
        return Ap(a);
      case "keypress":
        return a.which !== 32 ? null : (Ep = !0, wp);
      case "textInput":
        return t = a.data, t === wp && Ep ? null : t;
      default:
        return null;
    }
  }
  function HE(t, a) {
    if (fr)
      return t === "compositionend" || !wc && Tp(t, a) ? (t = gp(), el = vc = Ba = null, fr = !1, t) : null;
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
        return Sp && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var ZE = {
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
  function _p(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a === "input" ? !!ZE[t.type] : a === "textarea";
  }
  function Cp(t, a, r, o) {
    ur ? cr ? cr.push(o) : cr = [o] : ur = o, a = Gl(a, "onChange"), 0 < a.length && (r = new al(
      "onChange",
      "change",
      null,
      r,
      o
    ), t.push({ event: r, listeners: a }));
  }
  var ws = null, Es = null;
  function GE(t) {
    oy(t, 0);
  }
  function rl(t) {
    var a = gs(t);
    if (lp(a)) return t;
  }
  function Mp(t, a) {
    if (t === "change") return a;
  }
  var Dp = !1;
  if (ga) {
    var Ec;
    if (ga) {
      var Tc = "oninput" in document;
      if (!Tc) {
        var Rp = document.createElement("div");
        Rp.setAttribute("oninput", "return;"), Tc = typeof Rp.oninput == "function";
      }
      Ec = Tc;
    } else Ec = !1;
    Dp = Ec && (!document.documentMode || 9 < document.documentMode);
  }
  function zp() {
    ws && (ws.detachEvent("onpropertychange", kp), Es = ws = null);
  }
  function kp(t) {
    if (t.propertyName === "value" && rl(Es)) {
      var a = [];
      Cp(
        a,
        Es,
        t,
        mc(t)
      ), pp(GE, a);
    }
  }
  function YE(t, a, r) {
    t === "focusin" ? (zp(), ws = a, Es = r, ws.attachEvent("onpropertychange", kp)) : t === "focusout" && zp();
  }
  function FE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return rl(Es);
  }
  function qE(t, a) {
    if (t === "click") return rl(a);
  }
  function KE(t, a) {
    if (t === "input" || t === "change")
      return rl(a);
  }
  function IE(t, a) {
    return t === a && (t !== 0 || 1 / t === 1 / a) || t !== t && a !== a;
  }
  var yn = typeof Object.is == "function" ? Object.is : IE;
  function Ts(t, a) {
    if (yn(t, a)) return !0;
    if (typeof t != "object" || t === null || typeof a != "object" || a === null)
      return !1;
    var r = Object.keys(t), o = Object.keys(a);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var c = r[o];
      if (!it.call(a, c) || !yn(t[c], a[c]))
        return !1;
    }
    return !0;
  }
  function Op(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Vp(t, a) {
    var r = Op(t);
    t = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (o = t + r.textContent.length, t <= a && o >= a)
          return { node: r, offset: a - t };
        t = o;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Op(r);
    }
  }
  function $p(t, a) {
    return t && a ? t === a ? !0 : t && t.nodeType === 3 ? !1 : a && a.nodeType === 3 ? $p(t, a.parentNode) : "contains" in t ? t.contains(a) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function Np(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var a = Jo(t.document); a instanceof t.HTMLIFrameElement; ) {
      try {
        var r = typeof a.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) t = a.contentWindow;
      else break;
      a = Jo(t.document);
    }
    return a;
  }
  function Ac(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a && (a === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || a === "textarea" || t.contentEditable === "true");
  }
  var XE = ga && "documentMode" in document && 11 >= document.documentMode, dr = null, _c = null, As = null, Cc = !1;
  function jp(t, a, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Cc || dr == null || dr !== Jo(o) || (o = dr, "selectionStart" in o && Ac(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), As && Ts(As, o) || (As = o, o = Gl(_c, "onSelect"), 0 < o.length && (a = new al(
      "onSelect",
      "select",
      null,
      a,
      r
    ), t.push({ event: a, listeners: o }), a.target = dr)));
  }
  function wi(t, a) {
    var r = {};
    return r[t.toLowerCase()] = a.toLowerCase(), r["Webkit" + t] = "webkit" + a, r["Moz" + t] = "moz" + a, r;
  }
  var hr = {
    animationend: wi("Animation", "AnimationEnd"),
    animationiteration: wi("Animation", "AnimationIteration"),
    animationstart: wi("Animation", "AnimationStart"),
    transitionrun: wi("Transition", "TransitionRun"),
    transitionstart: wi("Transition", "TransitionStart"),
    transitioncancel: wi("Transition", "TransitionCancel"),
    transitionend: wi("Transition", "TransitionEnd")
  }, Mc = {}, Lp = {};
  ga && (Lp = document.createElement("div").style, "AnimationEvent" in window || (delete hr.animationend.animation, delete hr.animationiteration.animation, delete hr.animationstart.animation), "TransitionEvent" in window || delete hr.transitionend.transition);
  function Ei(t) {
    if (Mc[t]) return Mc[t];
    if (!hr[t]) return t;
    var a = hr[t], r;
    for (r in a)
      if (a.hasOwnProperty(r) && r in Lp)
        return Mc[t] = a[r];
    return t;
  }
  var Up = Ei("animationend"), Bp = Ei("animationiteration"), Pp = Ei("animationstart"), QE = Ei("transitionrun"), JE = Ei("transitionstart"), WE = Ei("transitioncancel"), Hp = Ei("transitionend"), Zp = /* @__PURE__ */ new Map(), Dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Dc.push("scrollEnd");
  function Fn(t, a) {
    Zp.set(t, a), xi(a, [t]);
  }
  var Gp = /* @__PURE__ */ new WeakMap();
  function On(t, a) {
    if (typeof t == "object" && t !== null) {
      var r = Gp.get(t);
      return r !== void 0 ? r : (a = {
        value: t,
        source: a,
        stack: sp(a)
      }, Gp.set(t, a), a);
    }
    return {
      value: t,
      source: a,
      stack: sp(a)
    };
  }
  var Vn = [], mr = 0, Rc = 0;
  function sl() {
    for (var t = mr, a = Rc = mr = 0; a < t; ) {
      var r = Vn[a];
      Vn[a++] = null;
      var o = Vn[a];
      Vn[a++] = null;
      var c = Vn[a];
      Vn[a++] = null;
      var d = Vn[a];
      if (Vn[a++] = null, o !== null && c !== null) {
        var y = o.pending;
        y === null ? c.next = c : (c.next = y.next, y.next = c), o.pending = c;
      }
      d !== 0 && Yp(r, c, d);
    }
  }
  function ol(t, a, r, o) {
    Vn[mr++] = t, Vn[mr++] = a, Vn[mr++] = r, Vn[mr++] = o, Rc |= o, t.lanes |= o, t = t.alternate, t !== null && (t.lanes |= o);
  }
  function zc(t, a, r, o) {
    return ol(t, a, r, o), ll(t);
  }
  function pr(t, a) {
    return ol(t, null, null, a), ll(t);
  }
  function Yp(t, a, r) {
    t.lanes |= r;
    var o = t.alternate;
    o !== null && (o.lanes |= r);
    for (var c = !1, d = t.return; d !== null; )
      d.childLanes |= r, o = d.alternate, o !== null && (o.childLanes |= r), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (c = !0)), t = d, d = d.return;
    return t.tag === 3 ? (d = t.stateNode, c && a !== null && (c = 31 - Ge(r), t = d.hiddenUpdates, o = t[c], o === null ? t[c] = [a] : o.push(a), a.lane = r | 536870912), d) : null;
  }
  function ll(t) {
    if (50 < Xs)
      throw Xs = 0, Lf = null, Error(s(185));
    for (var a = t.return; a !== null; )
      t = a, a = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var gr = {};
  function eT(t, a, r, o) {
    this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bn(t, a, r, o) {
    return new eT(t, a, r, o);
  }
  function kc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function va(t, a) {
    var r = t.alternate;
    return r === null ? (r = bn(
      t.tag,
      a,
      t.key,
      t.mode
    ), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = a, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 65011712, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, a = t.dependencies, r.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r.refCleanup = t.refCleanup, r;
  }
  function Fp(t, a) {
    t.flags &= 65011714;
    var r = t.alternate;
    return r === null ? (t.childLanes = 0, t.lanes = a, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = r.childLanes, t.lanes = r.lanes, t.child = r.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = r.memoizedProps, t.memoizedState = r.memoizedState, t.updateQueue = r.updateQueue, t.type = r.type, a = r.dependencies, t.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), t;
  }
  function ul(t, a, r, o, c, d) {
    var y = 0;
    if (o = t, typeof t == "function") kc(t) && (y = 1);
    else if (typeof t == "string")
      y = n2(
        t,
        r,
        le.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      e: switch (t) {
        case de:
          return t = bn(31, r, a, c), t.elementType = de, t.lanes = d, t;
        case _:
          return Ti(r.children, c, d, a);
        case M:
          y = 8, c |= 24;
          break;
        case N:
          return t = bn(12, r, a, c | 2), t.elementType = N, t.lanes = d, t;
        case I:
          return t = bn(13, r, a, c), t.elementType = I, t.lanes = d, t;
        case k:
          return t = bn(19, r, a, c), t.elementType = k, t.lanes = d, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case L:
              case Z:
                y = 10;
                break e;
              case z:
                y = 9;
                break e;
              case ee:
                y = 11;
                break e;
              case W:
                y = 14;
                break e;
              case Y:
                y = 16, o = null;
                break e;
            }
          y = 29, r = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), o = null;
      }
    return a = bn(y, r, a, c), a.elementType = t, a.type = o, a.lanes = d, a;
  }
  function Ti(t, a, r, o) {
    return t = bn(7, t, o, a), t.lanes = r, t;
  }
  function Oc(t, a, r) {
    return t = bn(6, t, null, a), t.lanes = r, t;
  }
  function Vc(t, a, r) {
    return a = bn(
      4,
      t.children !== null ? t.children : [],
      t.key,
      a
    ), a.lanes = r, a.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, a;
  }
  var vr = [], yr = 0, cl = null, fl = 0, $n = [], Nn = 0, Ai = null, ya = 1, ba = "";
  function _i(t, a) {
    vr[yr++] = fl, vr[yr++] = cl, cl = t, fl = a;
  }
  function qp(t, a, r) {
    $n[Nn++] = ya, $n[Nn++] = ba, $n[Nn++] = Ai, Ai = t;
    var o = ya;
    t = ba;
    var c = 32 - Ge(o) - 1;
    o &= ~(1 << c), r += 1;
    var d = 32 - Ge(a) + c;
    if (30 < d) {
      var y = c - c % 5;
      d = (o & (1 << y) - 1).toString(32), o >>= y, c -= y, ya = 1 << 32 - Ge(a) + c | r << c | o, ba = d + t;
    } else
      ya = 1 << d | r << c | o, ba = t;
  }
  function $c(t) {
    t.return !== null && (_i(t, 1), qp(t, 1, 0));
  }
  function Nc(t) {
    for (; t === cl; )
      cl = vr[--yr], vr[yr] = null, fl = vr[--yr], vr[yr] = null;
    for (; t === Ai; )
      Ai = $n[--Nn], $n[Nn] = null, ba = $n[--Nn], $n[Nn] = null, ya = $n[--Nn], $n[Nn] = null;
  }
  var nn = null, dt = null, Fe = !1, Ci = null, Wn = !1, jc = Error(s(519));
  function Mi(t) {
    var a = Error(s(418, ""));
    throw Ms(On(a, t)), jc;
  }
  function Kp(t) {
    var a = t.stateNode, r = t.type, o = t.memoizedProps;
    switch (a[vt] = t, a[tt] = o, r) {
      case "dialog":
        Be("cancel", a), Be("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", a);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Js.length; r++)
          Be(Js[r], a);
        break;
      case "source":
        Be("error", a);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", a), Be("load", a);
        break;
      case "details":
        Be("toggle", a);
        break;
      case "input":
        Be("invalid", a), up(
          a,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), Qo(a);
        break;
      case "select":
        Be("invalid", a);
        break;
      case "textarea":
        Be("invalid", a), fp(a, o.value, o.defaultValue, o.children), Qo(a);
    }
    r = o.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || a.textContent === "" + r || o.suppressHydrationWarning === !0 || fy(a.textContent, r) ? (o.popover != null && (Be("beforetoggle", a), Be("toggle", a)), o.onScroll != null && Be("scroll", a), o.onScrollEnd != null && Be("scrollend", a), o.onClick != null && (a.onclick = Yl), a = !0) : a = !1, a || Mi(t);
  }
  function Ip(t) {
    for (nn = t.return; nn; )
      switch (nn.tag) {
        case 5:
        case 13:
          Wn = !1;
          return;
        case 27:
        case 3:
          Wn = !0;
          return;
        default:
          nn = nn.return;
      }
  }
  function _s(t) {
    if (t !== nn) return !1;
    if (!Fe) return Ip(t), Fe = !0, !1;
    var a = t.tag, r;
    if ((r = a !== 3 && a !== 27) && ((r = a === 5) && (r = t.type, r = !(r !== "form" && r !== "button") || ed(t.type, t.memoizedProps)), r = !r), r && dt && Mi(t), Ip(t), a === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      e: {
        for (t = t.nextSibling, a = 0; t; ) {
          if (t.nodeType === 8)
            if (r = t.data, r === "/$") {
              if (a === 0) {
                dt = Kn(t.nextSibling);
                break e;
              }
              a--;
            } else
              r !== "$" && r !== "$!" && r !== "$?" || a++;
          t = t.nextSibling;
        }
        dt = null;
      }
    } else
      a === 27 ? (a = dt, ni(t.type) ? (t = id, id = null, dt = t) : dt = a) : dt = nn ? Kn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Cs() {
    dt = nn = null, Fe = !1;
  }
  function Xp() {
    var t = Ci;
    return t !== null && (hn === null ? hn = t : hn.push.apply(
      hn,
      t
    ), Ci = null), t;
  }
  function Ms(t) {
    Ci === null ? Ci = [t] : Ci.push(t);
  }
  var Lc = J(null), Di = null, xa = null;
  function Pa(t, a, r) {
    Q(Lc, a._currentValue), a._currentValue = r;
  }
  function Sa(t) {
    t._currentValue = Lc.current, oe(Lc);
  }
  function Uc(t, a, r) {
    for (; t !== null; ) {
      var o = t.alternate;
      if ((t.childLanes & a) !== a ? (t.childLanes |= a, o !== null && (o.childLanes |= a)) : o !== null && (o.childLanes & a) !== a && (o.childLanes |= a), t === r) break;
      t = t.return;
    }
  }
  function Bc(t, a, r, o) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var y = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var x = d;
          d = c;
          for (var T = 0; T < a.length; T++)
            if (x.context === a[T]) {
              d.lanes |= r, x = d.alternate, x !== null && (x.lanes |= r), Uc(
                d.return,
                r,
                t
              ), o || (y = null);
              break e;
            }
          d = x.next;
        }
      } else if (c.tag === 18) {
        if (y = c.return, y === null) throw Error(s(341));
        y.lanes |= r, d = y.alternate, d !== null && (d.lanes |= r), Uc(y, r, t), y = null;
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (c = y.sibling, c !== null) {
            c.return = y.return, y = c;
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function Ds(t, a, r, o) {
    t = null;
    for (var c = a, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(s(387));
        if (y = y.memoizedProps, y !== null) {
          var x = c.type;
          yn(c.pendingProps.value, y.value) || (t !== null ? t.push(x) : t = [x]);
        }
      } else if (c === _e.current) {
        if (y = c.alternate, y === null) throw Error(s(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push(io) : t = [io]);
      }
      c = c.return;
    }
    t !== null && Bc(
      a,
      t,
      r,
      o
    ), a.flags |= 262144;
  }
  function dl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!yn(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ri(t) {
    Di = t, xa = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Qt(t) {
    return Qp(Di, t);
  }
  function hl(t, a) {
    return Di === null && Ri(t), Qp(t, a);
  }
  function Qp(t, a) {
    var r = a._currentValue;
    if (a = { context: a, memoizedValue: r, next: null }, xa === null) {
      if (t === null) throw Error(s(308));
      xa = a, t.dependencies = { lanes: 0, firstContext: a }, t.flags |= 524288;
    } else xa = xa.next = a;
    return r;
  }
  var tT = typeof AbortController < "u" ? AbortController : function() {
    var t = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(r, o) {
        t.push(o);
      }
    };
    this.abort = function() {
      a.aborted = !0, t.forEach(function(r) {
        return r();
      });
    };
  }, nT = e.unstable_scheduleCallback, aT = e.unstable_NormalPriority, kt = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Pc() {
    return {
      controller: new tT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Rs(t) {
    t.refCount--, t.refCount === 0 && nT(aT, function() {
      t.controller.abort();
    });
  }
  var zs = null, Hc = 0, br = 0, xr = null;
  function iT(t, a) {
    if (zs === null) {
      var r = zs = [];
      Hc = 0, br = Yf(), xr = {
        status: "pending",
        value: void 0,
        then: function(o) {
          r.push(o);
        }
      };
    }
    return Hc++, a.then(Jp, Jp), a;
  }
  function Jp() {
    if (--Hc === 0 && zs !== null) {
      xr !== null && (xr.status = "fulfilled");
      var t = zs;
      zs = null, br = 0, xr = null;
      for (var a = 0; a < t.length; a++) (0, t[a])();
    }
  }
  function rT(t, a) {
    var r = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        r.push(c);
      }
    };
    return t.then(
      function() {
        o.status = "fulfilled", o.value = a;
        for (var c = 0; c < r.length; c++) (0, r[c])(a);
      },
      function(c) {
        for (o.status = "rejected", o.reason = c, c = 0; c < r.length; c++)
          (0, r[c])(void 0);
      }
    ), o;
  }
  var Wp = S.S;
  S.S = function(t, a) {
    typeof a == "object" && a !== null && typeof a.then == "function" && iT(t, a), Wp !== null && Wp(t, a);
  };
  var zi = J(null);
  function Zc() {
    var t = zi.current;
    return t !== null ? t : nt.pooledCache;
  }
  function ml(t, a) {
    a === null ? Q(zi, zi.current) : Q(zi, a.pool);
  }
  function eg() {
    var t = Zc();
    return t === null ? null : { parent: kt._currentValue, pool: t };
  }
  var ks = Error(s(460)), tg = Error(s(474)), pl = Error(s(542)), Gc = { then: function() {
  } };
  function ng(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function gl() {
  }
  function ag(t, a, r) {
    switch (r = t[r], r === void 0 ? t.push(a) : r !== a && (a.then(gl, gl), a = r), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw t = a.reason, rg(t), t;
      default:
        if (typeof a.status == "string") a.then(gl, gl);
        else {
          if (t = nt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = a, t.status = "pending", t.then(
            function(o) {
              if (a.status === "pending") {
                var c = a;
                c.status = "fulfilled", c.value = o;
              }
            },
            function(o) {
              if (a.status === "pending") {
                var c = a;
                c.status = "rejected", c.reason = o;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw t = a.reason, rg(t), t;
        }
        throw Os = a, ks;
    }
  }
  var Os = null;
  function ig() {
    if (Os === null) throw Error(s(459));
    var t = Os;
    return Os = null, t;
  }
  function rg(t) {
    if (t === ks || t === pl)
      throw Error(s(483));
  }
  var Ha = !1;
  function Yc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Fc(t, a) {
    t = t.updateQueue, a.updateQueue === t && (a.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Za(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ga(t, a, r) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (qe & 2) !== 0) {
      var c = o.pending;
      return c === null ? a.next = a : (a.next = c.next, c.next = a), o.pending = a, a = ll(t), Yp(t, null, r), a;
    }
    return ol(t, o, a, r), ll(t);
  }
  function Vs(t, a, r) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (r & 4194048) !== 0)) {
      var o = a.lanes;
      o &= t.pendingLanes, r |= o, a.lanes = r, pt(t, r);
    }
  }
  function qc(t, a) {
    var r = t.updateQueue, o = t.alternate;
    if (o !== null && (o = o.updateQueue, r === o)) {
      var c = null, d = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var y = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          d === null ? c = d = y : d = d.next = y, r = r.next;
        } while (r !== null);
        d === null ? c = d = a : d = d.next = a;
      } else c = d = a;
      r = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks
      }, t.updateQueue = r;
      return;
    }
    t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = a : t.next = a, r.lastBaseUpdate = a;
  }
  var Kc = !1;
  function $s() {
    if (Kc) {
      var t = xr;
      if (t !== null) throw t;
    }
  }
  function Ns(t, a, r, o) {
    Kc = !1;
    var c = t.updateQueue;
    Ha = !1;
    var d = c.firstBaseUpdate, y = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var T = x, P = T.next;
      T.next = null, y === null ? d = P : y.next = P, y = T;
      var te = t.alternate;
      te !== null && (te = te.updateQueue, x = te.lastBaseUpdate, x !== y && (x === null ? te.firstBaseUpdate = P : x.next = P, te.lastBaseUpdate = T));
    }
    if (d !== null) {
      var re = c.baseState;
      y = 0, te = P = T = null, x = d;
      do {
        var G = x.lane & -536870913, F = G !== x.lane;
        if (F ? (He & G) === G : (o & G) === G) {
          G !== 0 && G === br && (Kc = !0), te !== null && (te = te.next = {
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: null,
            next: null
          });
          e: {
            var Re = t, Ce = x;
            G = a;
            var Je = r;
            switch (Ce.tag) {
              case 1:
                if (Re = Ce.payload, typeof Re == "function") {
                  re = Re.call(Je, re, G);
                  break e;
                }
                re = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = Ce.payload, G = typeof Re == "function" ? Re.call(Je, re, G) : Re, G == null) break e;
                re = g({}, re, G);
                break e;
              case 2:
                Ha = !0;
            }
          }
          G = x.callback, G !== null && (t.flags |= 64, F && (t.flags |= 8192), F = c.callbacks, F === null ? c.callbacks = [G] : F.push(G));
        } else
          F = {
            lane: G,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, te === null ? (P = te = F, T = re) : te = te.next = F, y |= G;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null)
            break;
          F = x, x = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      te === null && (T = re), c.baseState = T, c.firstBaseUpdate = P, c.lastBaseUpdate = te, d === null && (c.shared.lanes = 0), Ja |= y, t.lanes = y, t.memoizedState = re;
    }
  }
  function sg(t, a) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(a);
  }
  function og(t, a) {
    var r = t.callbacks;
    if (r !== null)
      for (t.callbacks = null, t = 0; t < r.length; t++)
        sg(r[t], a);
  }
  var Sr = J(null), vl = J(0);
  function lg(t, a) {
    t = Ma, Q(vl, t), Q(Sr, a), Ma = t | a.baseLanes;
  }
  function Ic() {
    Q(vl, Ma), Q(Sr, Sr.current);
  }
  function Xc() {
    Ma = vl.current, oe(Sr), oe(vl);
  }
  var Ya = 0, Ne = null, Xe = null, Ct = null, yl = !1, wr = !1, ki = !1, bl = 0, js = 0, Er = null, sT = 0;
  function yt() {
    throw Error(s(321));
  }
  function Qc(t, a) {
    if (a === null) return !1;
    for (var r = 0; r < a.length && r < t.length; r++)
      if (!yn(t[r], a[r])) return !1;
    return !0;
  }
  function Jc(t, a, r, o, c, d) {
    return Ya = d, Ne = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, S.H = t === null || t.memoizedState === null ? Yg : Fg, ki = !1, d = r(o, c), ki = !1, wr && (d = cg(
      a,
      r,
      o,
      c
    )), ug(t), d;
  }
  function ug(t) {
    S.H = Al;
    var a = Xe !== null && Xe.next !== null;
    if (Ya = 0, Ct = Xe = Ne = null, yl = !1, js = 0, Er = null, a) throw Error(s(300));
    t === null || Bt || (t = t.dependencies, t !== null && dl(t) && (Bt = !0));
  }
  function cg(t, a, r, o) {
    Ne = t;
    var c = 0;
    do {
      if (wr && (Er = null), js = 0, wr = !1, 25 <= c) throw Error(s(301));
      if (c += 1, Ct = Xe = null, t.updateQueue != null) {
        var d = t.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      S.H = hT, d = a(r, o);
    } while (wr);
    return d;
  }
  function oT() {
    var t = S.H, a = t.useState()[0];
    return a = typeof a.then == "function" ? Ls(a) : a, t = t.useState()[0], (Xe !== null ? Xe.memoizedState : null) !== t && (Ne.flags |= 1024), a;
  }
  function Wc() {
    var t = bl !== 0;
    return bl = 0, t;
  }
  function ef(t, a, r) {
    a.updateQueue = t.updateQueue, a.flags &= -2053, t.lanes &= ~r;
  }
  function tf(t) {
    if (yl) {
      for (t = t.memoizedState; t !== null; ) {
        var a = t.queue;
        a !== null && (a.pending = null), t = t.next;
      }
      yl = !1;
    }
    Ya = 0, Ct = Xe = Ne = null, wr = !1, js = bl = 0, Er = null;
  }
  function fn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ct === null ? Ne.memoizedState = Ct = t : Ct = Ct.next = t, Ct;
  }
  function Mt() {
    if (Xe === null) {
      var t = Ne.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Xe.next;
    var a = Ct === null ? Ne.memoizedState : Ct.next;
    if (a !== null)
      Ct = a, Xe = t;
    else {
      if (t === null)
        throw Ne.alternate === null ? Error(s(467)) : Error(s(310));
      Xe = t, t = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null
      }, Ct === null ? Ne.memoizedState = Ct = t : Ct = Ct.next = t;
    }
    return Ct;
  }
  function nf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ls(t) {
    var a = js;
    return js += 1, Er === null && (Er = []), t = ag(Er, t, a), a = Ne, (Ct === null ? a.memoizedState : Ct.next) === null && (a = a.alternate, S.H = a === null || a.memoizedState === null ? Yg : Fg), t;
  }
  function xl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ls(t);
      if (t.$$typeof === Z) return Qt(t);
    }
    throw Error(s(438, String(t)));
  }
  function af(t) {
    var a = null, r = Ne.updateQueue;
    if (r !== null && (a = r.memoCache), a == null) {
      var o = Ne.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (a = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), r === null && (r = nf(), Ne.updateQueue = r), r.memoCache = a, r = a.data[a.index], r === void 0)
      for (r = a.data[a.index] = Array(t), o = 0; o < t; o++)
        r[o] = ve;
    return a.index++, r;
  }
  function wa(t, a) {
    return typeof a == "function" ? a(t) : a;
  }
  function Sl(t) {
    var a = Mt();
    return rf(a, Xe, t);
  }
  function rf(t, a, r) {
    var o = t.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = r;
    var c = t.baseQueue, d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        c.next = d.next, d.next = y;
      }
      a.baseQueue = c = d, o.pending = null;
    }
    if (d = t.baseState, c === null) t.memoizedState = d;
    else {
      a = c.next;
      var x = y = null, T = null, P = a, te = !1;
      do {
        var re = P.lane & -536870913;
        if (re !== P.lane ? (He & re) === re : (Ya & re) === re) {
          var G = P.revertLane;
          if (G === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }), re === br && (te = !0);
          else if ((Ya & G) === G) {
            P = P.next, G === br && (te = !0);
            continue;
          } else
            re = {
              lane: 0,
              revertLane: P.revertLane,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }, T === null ? (x = T = re, y = d) : T = T.next = re, Ne.lanes |= G, Ja |= G;
          re = P.action, ki && r(d, re), d = P.hasEagerState ? P.eagerState : r(d, re);
        } else
          G = {
            lane: re,
            revertLane: P.revertLane,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          }, T === null ? (x = T = G, y = d) : T = T.next = G, Ne.lanes |= re, Ja |= re;
        P = P.next;
      } while (P !== null && P !== a);
      if (T === null ? y = d : T.next = x, !yn(d, t.memoizedState) && (Bt = !0, te && (r = xr, r !== null)))
        throw r;
      t.memoizedState = d, t.baseState = y, t.baseQueue = T, o.lastRenderedState = d;
    }
    return c === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function sf(t) {
    var a = Mt(), r = a.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = t;
    var o = r.dispatch, c = r.pending, d = a.memoizedState;
    if (c !== null) {
      r.pending = null;
      var y = c = c.next;
      do
        d = t(d, y.action), y = y.next;
      while (y !== c);
      yn(d, a.memoizedState) || (Bt = !0), a.memoizedState = d, a.baseQueue === null && (a.baseState = d), r.lastRenderedState = d;
    }
    return [d, o];
  }
  function fg(t, a, r) {
    var o = Ne, c = Mt(), d = Fe;
    if (d) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else r = a();
    var y = !yn(
      (Xe || c).memoizedState,
      r
    );
    y && (c.memoizedState = r, Bt = !0), c = c.queue;
    var x = mg.bind(null, o, c, t);
    if (Us(2048, 8, x, [t]), c.getSnapshot !== a || y || Ct !== null && Ct.memoizedState.tag & 1) {
      if (o.flags |= 2048, Tr(
        9,
        wl(),
        hg.bind(
          null,
          o,
          c,
          r,
          a
        ),
        null
      ), nt === null) throw Error(s(349));
      d || (Ya & 124) !== 0 || dg(o, a, r);
    }
    return r;
  }
  function dg(t, a, r) {
    t.flags |= 16384, t = { getSnapshot: a, value: r }, a = Ne.updateQueue, a === null ? (a = nf(), Ne.updateQueue = a, a.stores = [t]) : (r = a.stores, r === null ? a.stores = [t] : r.push(t));
  }
  function hg(t, a, r, o) {
    a.value = r, a.getSnapshot = o, pg(a) && gg(t);
  }
  function mg(t, a, r) {
    return r(function() {
      pg(a) && gg(t);
    });
  }
  function pg(t) {
    var a = t.getSnapshot;
    t = t.value;
    try {
      var r = a();
      return !yn(t, r);
    } catch {
      return !0;
    }
  }
  function gg(t) {
    var a = pr(t, 2);
    a !== null && Tn(a, t, 2);
  }
  function of(t) {
    var a = fn();
    if (typeof t == "function") {
      var r = t;
      if (t = r(), ki) {
        Ve(!0);
        try {
          r();
        } finally {
          Ve(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = t, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wa,
      lastRenderedState: t
    }, a;
  }
  function vg(t, a, r, o) {
    return t.baseState = r, rf(
      t,
      Xe,
      typeof o == "function" ? o : wa
    );
  }
  function lT(t, a, r, o, c) {
    if (Tl(t)) throw Error(s(485));
    if (t = a.action, t !== null) {
      var d = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          d.listeners.push(y);
        }
      };
      S.T !== null ? r(!0) : d.isTransition = !1, o(d), r = a.pending, r === null ? (d.next = a.pending = d, yg(a, d)) : (d.next = r.next, a.pending = r.next = d);
    }
  }
  function yg(t, a) {
    var r = a.action, o = a.payload, c = t.state;
    if (a.isTransition) {
      var d = S.T, y = {};
      S.T = y;
      try {
        var x = r(c, o), T = S.S;
        T !== null && T(y, x), bg(t, a, x);
      } catch (P) {
        lf(t, a, P);
      } finally {
        S.T = d;
      }
    } else
      try {
        d = r(c, o), bg(t, a, d);
      } catch (P) {
        lf(t, a, P);
      }
  }
  function bg(t, a, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(o) {
        xg(t, a, o);
      },
      function(o) {
        return lf(t, a, o);
      }
    ) : xg(t, a, r);
  }
  function xg(t, a, r) {
    a.status = "fulfilled", a.value = r, Sg(a), t.state = r, a = t.pending, a !== null && (r = a.next, r === a ? t.pending = null : (r = r.next, a.next = r, yg(t, r)));
  }
  function lf(t, a, r) {
    var o = t.pending;
    if (t.pending = null, o !== null) {
      o = o.next;
      do
        a.status = "rejected", a.reason = r, Sg(a), a = a.next;
      while (a !== o);
    }
    t.action = null;
  }
  function Sg(t) {
    t = t.listeners;
    for (var a = 0; a < t.length; a++) (0, t[a])();
  }
  function wg(t, a) {
    return a;
  }
  function Eg(t, a) {
    if (Fe) {
      var r = nt.formState;
      if (r !== null) {
        e: {
          var o = Ne;
          if (Fe) {
            if (dt) {
              t: {
                for (var c = dt, d = Wn; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (c = Kn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                d = c.data, c = d === "F!" || d === "F" ? c : null;
              }
              if (c) {
                dt = Kn(
                  c.nextSibling
                ), o = c.data === "F!";
                break e;
              }
            }
            Mi(o);
          }
          o = !1;
        }
        o && (a = r[0]);
      }
    }
    return r = fn(), r.memoizedState = r.baseState = a, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wg,
      lastRenderedState: a
    }, r.queue = o, r = Hg.bind(
      null,
      Ne,
      o
    ), o.dispatch = r, o = of(!1), d = hf.bind(
      null,
      Ne,
      !1,
      o.queue
    ), o = fn(), c = {
      state: a,
      dispatch: null,
      action: t,
      pending: null
    }, o.queue = c, r = lT.bind(
      null,
      Ne,
      c,
      d,
      r
    ), c.dispatch = r, o.memoizedState = t, [a, r, !1];
  }
  function Tg(t) {
    var a = Mt();
    return Ag(a, Xe, t);
  }
  function Ag(t, a, r) {
    if (a = rf(
      t,
      a,
      wg
    )[0], t = Sl(wa)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var o = Ls(a);
      } catch (y) {
        throw y === ks ? pl : y;
      }
    else o = a;
    a = Mt();
    var c = a.queue, d = c.dispatch;
    return r !== a.memoizedState && (Ne.flags |= 2048, Tr(
      9,
      wl(),
      uT.bind(null, c, r),
      null
    )), [o, d, t];
  }
  function uT(t, a) {
    t.action = a;
  }
  function _g(t) {
    var a = Mt(), r = Xe;
    if (r !== null)
      return Ag(a, r, t);
    Mt(), a = a.memoizedState, r = Mt();
    var o = r.queue.dispatch;
    return r.memoizedState = t, [a, o, !1];
  }
  function Tr(t, a, r, o) {
    return t = { tag: t, create: r, deps: o, inst: a, next: null }, a = Ne.updateQueue, a === null && (a = nf(), Ne.updateQueue = a), r = a.lastEffect, r === null ? a.lastEffect = t.next = t : (o = r.next, r.next = t, t.next = o, a.lastEffect = t), t;
  }
  function wl() {
    return { destroy: void 0, resource: void 0 };
  }
  function Cg() {
    return Mt().memoizedState;
  }
  function El(t, a, r, o) {
    var c = fn();
    o = o === void 0 ? null : o, Ne.flags |= t, c.memoizedState = Tr(
      1 | a,
      wl(),
      r,
      o
    );
  }
  function Us(t, a, r, o) {
    var c = Mt();
    o = o === void 0 ? null : o;
    var d = c.memoizedState.inst;
    Xe !== null && o !== null && Qc(o, Xe.memoizedState.deps) ? c.memoizedState = Tr(a, d, r, o) : (Ne.flags |= t, c.memoizedState = Tr(
      1 | a,
      d,
      r,
      o
    ));
  }
  function Mg(t, a) {
    El(8390656, 8, t, a);
  }
  function Dg(t, a) {
    Us(2048, 8, t, a);
  }
  function Rg(t, a) {
    return Us(4, 2, t, a);
  }
  function zg(t, a) {
    return Us(4, 4, t, a);
  }
  function kg(t, a) {
    if (typeof a == "function") {
      t = t();
      var r = a(t);
      return function() {
        typeof r == "function" ? r() : a(null);
      };
    }
    if (a != null)
      return t = t(), a.current = t, function() {
        a.current = null;
      };
  }
  function Og(t, a, r) {
    r = r != null ? r.concat([t]) : null, Us(4, 4, kg.bind(null, a, t), r);
  }
  function uf() {
  }
  function Vg(t, a) {
    var r = Mt();
    a = a === void 0 ? null : a;
    var o = r.memoizedState;
    return a !== null && Qc(a, o[1]) ? o[0] : (r.memoizedState = [t, a], t);
  }
  function $g(t, a) {
    var r = Mt();
    a = a === void 0 ? null : a;
    var o = r.memoizedState;
    if (a !== null && Qc(a, o[1]))
      return o[0];
    if (o = t(), ki) {
      Ve(!0);
      try {
        t();
      } finally {
        Ve(!1);
      }
    }
    return r.memoizedState = [o, a], o;
  }
  function cf(t, a, r) {
    return r === void 0 || (Ya & 1073741824) !== 0 ? t.memoizedState = a : (t.memoizedState = r, t = Lv(), Ne.lanes |= t, Ja |= t, r);
  }
  function Ng(t, a, r, o) {
    return yn(r, a) ? r : Sr.current !== null ? (t = cf(t, r, o), yn(t, a) || (Bt = !0), t) : (Ya & 42) === 0 ? (Bt = !0, t.memoizedState = r) : (t = Lv(), Ne.lanes |= t, Ja |= t, a);
  }
  function jg(t, a, r, o, c) {
    var d = O.p;
    O.p = d !== 0 && 8 > d ? d : 8;
    var y = S.T, x = {};
    S.T = x, hf(t, !1, a, r);
    try {
      var T = c(), P = S.S;
      if (P !== null && P(x, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var te = rT(
          T,
          o
        );
        Bs(
          t,
          a,
          te,
          En()
        );
      } else
        Bs(
          t,
          a,
          o,
          En()
        );
    } catch (re) {
      Bs(
        t,
        a,
        { then: function() {
        }, status: "rejected", reason: re },
        En()
      );
    } finally {
      O.p = d, S.T = y;
    }
  }
  function cT() {
  }
  function ff(t, a, r, o) {
    if (t.tag !== 5) throw Error(s(476));
    var c = Lg(t).queue;
    jg(
      t,
      c,
      a,
      R,
      r === null ? cT : function() {
        return Ug(t), r(o);
      }
    );
  }
  function Lg(t) {
    var a = t.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: R,
      baseState: R,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wa,
        lastRenderedState: R
      },
      next: null
    };
    var r = {};
    return a.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wa,
        lastRenderedState: r
      },
      next: null
    }, t.memoizedState = a, t = t.alternate, t !== null && (t.memoizedState = a), a;
  }
  function Ug(t) {
    var a = Lg(t).next.queue;
    Bs(t, a, {}, En());
  }
  function df() {
    return Qt(io);
  }
  function Bg() {
    return Mt().memoizedState;
  }
  function Pg() {
    return Mt().memoizedState;
  }
  function fT(t) {
    for (var a = t.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var r = En();
          t = Za(r);
          var o = Ga(a, t, r);
          o !== null && (Tn(o, a, r), Vs(o, a, r)), a = { cache: Pc() }, t.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function dT(t, a, r) {
    var o = En();
    r = {
      lane: o,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tl(t) ? Zg(a, r) : (r = zc(t, a, r, o), r !== null && (Tn(r, t, o), Gg(r, a, o)));
  }
  function Hg(t, a, r) {
    var o = En();
    Bs(t, a, r, o);
  }
  function Bs(t, a, r, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Tl(t)) Zg(a, c);
    else {
      var d = t.alternate;
      if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = a.lastRenderedReducer, d !== null))
        try {
          var y = a.lastRenderedState, x = d(y, r);
          if (c.hasEagerState = !0, c.eagerState = x, yn(x, y))
            return ol(t, a, c, 0), nt === null && sl(), !1;
        } catch {
        } finally {
        }
      if (r = zc(t, a, c, o), r !== null)
        return Tn(r, t, o), Gg(r, a, o), !0;
    }
    return !1;
  }
  function hf(t, a, r, o) {
    if (o = {
      lane: 2,
      revertLane: Yf(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tl(t)) {
      if (a) throw Error(s(479));
    } else
      a = zc(
        t,
        r,
        o,
        2
      ), a !== null && Tn(a, t, 2);
  }
  function Tl(t) {
    var a = t.alternate;
    return t === Ne || a !== null && a === Ne;
  }
  function Zg(t, a) {
    wr = yl = !0;
    var r = t.pending;
    r === null ? a.next = a : (a.next = r.next, r.next = a), t.pending = a;
  }
  function Gg(t, a, r) {
    if ((r & 4194048) !== 0) {
      var o = a.lanes;
      o &= t.pendingLanes, r |= o, a.lanes = r, pt(t, r);
    }
  }
  var Al = {
    readContext: Qt,
    use: xl,
    useCallback: yt,
    useContext: yt,
    useEffect: yt,
    useImperativeHandle: yt,
    useLayoutEffect: yt,
    useInsertionEffect: yt,
    useMemo: yt,
    useReducer: yt,
    useRef: yt,
    useState: yt,
    useDebugValue: yt,
    useDeferredValue: yt,
    useTransition: yt,
    useSyncExternalStore: yt,
    useId: yt,
    useHostTransitionStatus: yt,
    useFormState: yt,
    useActionState: yt,
    useOptimistic: yt,
    useMemoCache: yt,
    useCacheRefresh: yt
  }, Yg = {
    readContext: Qt,
    use: xl,
    useCallback: function(t, a) {
      return fn().memoizedState = [
        t,
        a === void 0 ? null : a
      ], t;
    },
    useContext: Qt,
    useEffect: Mg,
    useImperativeHandle: function(t, a, r) {
      r = r != null ? r.concat([t]) : null, El(
        4194308,
        4,
        kg.bind(null, a, t),
        r
      );
    },
    useLayoutEffect: function(t, a) {
      return El(4194308, 4, t, a);
    },
    useInsertionEffect: function(t, a) {
      El(4, 2, t, a);
    },
    useMemo: function(t, a) {
      var r = fn();
      a = a === void 0 ? null : a;
      var o = t();
      if (ki) {
        Ve(!0);
        try {
          t();
        } finally {
          Ve(!1);
        }
      }
      return r.memoizedState = [o, a], o;
    },
    useReducer: function(t, a, r) {
      var o = fn();
      if (r !== void 0) {
        var c = r(a);
        if (ki) {
          Ve(!0);
          try {
            r(a);
          } finally {
            Ve(!1);
          }
        }
      } else c = a;
      return o.memoizedState = o.baseState = c, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: c
      }, o.queue = t, t = t.dispatch = dT.bind(
        null,
        Ne,
        t
      ), [o.memoizedState, t];
    },
    useRef: function(t) {
      var a = fn();
      return t = { current: t }, a.memoizedState = t;
    },
    useState: function(t) {
      t = of(t);
      var a = t.queue, r = Hg.bind(null, Ne, a);
      return a.dispatch = r, [t.memoizedState, r];
    },
    useDebugValue: uf,
    useDeferredValue: function(t, a) {
      var r = fn();
      return cf(r, t, a);
    },
    useTransition: function() {
      var t = of(!1);
      return t = jg.bind(
        null,
        Ne,
        t.queue,
        !0,
        !1
      ), fn().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, a, r) {
      var o = Ne, c = fn();
      if (Fe) {
        if (r === void 0)
          throw Error(s(407));
        r = r();
      } else {
        if (r = a(), nt === null)
          throw Error(s(349));
        (He & 124) !== 0 || dg(o, a, r);
      }
      c.memoizedState = r;
      var d = { value: r, getSnapshot: a };
      return c.queue = d, Mg(mg.bind(null, o, d, t), [
        t
      ]), o.flags |= 2048, Tr(
        9,
        wl(),
        hg.bind(
          null,
          o,
          d,
          r,
          a
        ),
        null
      ), r;
    },
    useId: function() {
      var t = fn(), a = nt.identifierPrefix;
      if (Fe) {
        var r = ba, o = ya;
        r = (o & ~(1 << 32 - Ge(o) - 1)).toString(32) + r, a = "«" + a + "R" + r, r = bl++, 0 < r && (a += "H" + r.toString(32)), a += "»";
      } else
        r = sT++, a = "«" + a + "r" + r.toString(32) + "»";
      return t.memoizedState = a;
    },
    useHostTransitionStatus: df,
    useFormState: Eg,
    useActionState: Eg,
    useOptimistic: function(t) {
      var a = fn();
      a.memoizedState = a.baseState = t;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = r, a = hf.bind(
        null,
        Ne,
        !0,
        r
      ), r.dispatch = a, [t, a];
    },
    useMemoCache: af,
    useCacheRefresh: function() {
      return fn().memoizedState = fT.bind(
        null,
        Ne
      );
    }
  }, Fg = {
    readContext: Qt,
    use: xl,
    useCallback: Vg,
    useContext: Qt,
    useEffect: Dg,
    useImperativeHandle: Og,
    useInsertionEffect: Rg,
    useLayoutEffect: zg,
    useMemo: $g,
    useReducer: Sl,
    useRef: Cg,
    useState: function() {
      return Sl(wa);
    },
    useDebugValue: uf,
    useDeferredValue: function(t, a) {
      var r = Mt();
      return Ng(
        r,
        Xe.memoizedState,
        t,
        a
      );
    },
    useTransition: function() {
      var t = Sl(wa)[0], a = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ls(t),
        a
      ];
    },
    useSyncExternalStore: fg,
    useId: Bg,
    useHostTransitionStatus: df,
    useFormState: Tg,
    useActionState: Tg,
    useOptimistic: function(t, a) {
      var r = Mt();
      return vg(r, Xe, t, a);
    },
    useMemoCache: af,
    useCacheRefresh: Pg
  }, hT = {
    readContext: Qt,
    use: xl,
    useCallback: Vg,
    useContext: Qt,
    useEffect: Dg,
    useImperativeHandle: Og,
    useInsertionEffect: Rg,
    useLayoutEffect: zg,
    useMemo: $g,
    useReducer: sf,
    useRef: Cg,
    useState: function() {
      return sf(wa);
    },
    useDebugValue: uf,
    useDeferredValue: function(t, a) {
      var r = Mt();
      return Xe === null ? cf(r, t, a) : Ng(
        r,
        Xe.memoizedState,
        t,
        a
      );
    },
    useTransition: function() {
      var t = sf(wa)[0], a = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ls(t),
        a
      ];
    },
    useSyncExternalStore: fg,
    useId: Bg,
    useHostTransitionStatus: df,
    useFormState: _g,
    useActionState: _g,
    useOptimistic: function(t, a) {
      var r = Mt();
      return Xe !== null ? vg(r, Xe, t, a) : (r.baseState = t, [t, r.queue.dispatch]);
    },
    useMemoCache: af,
    useCacheRefresh: Pg
  }, Ar = null, Ps = 0;
  function _l(t) {
    var a = Ps;
    return Ps += 1, Ar === null && (Ar = []), ag(Ar, t, a);
  }
  function Hs(t, a) {
    a = a.props.ref, t.ref = a !== void 0 ? a : null;
  }
  function Cl(t, a) {
    throw a.$$typeof === v ? Error(s(525)) : (t = Object.prototype.toString.call(a), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : t
      )
    ));
  }
  function qg(t) {
    var a = t._init;
    return a(t._payload);
  }
  function Kg(t) {
    function a(V, D) {
      if (t) {
        var U = V.deletions;
        U === null ? (V.deletions = [D], V.flags |= 16) : U.push(D);
      }
    }
    function r(V, D) {
      if (!t) return null;
      for (; D !== null; )
        a(V, D), D = D.sibling;
      return null;
    }
    function o(V) {
      for (var D = /* @__PURE__ */ new Map(); V !== null; )
        V.key !== null ? D.set(V.key, V) : D.set(V.index, V), V = V.sibling;
      return D;
    }
    function c(V, D) {
      return V = va(V, D), V.index = 0, V.sibling = null, V;
    }
    function d(V, D, U) {
      return V.index = U, t ? (U = V.alternate, U !== null ? (U = U.index, U < D ? (V.flags |= 67108866, D) : U) : (V.flags |= 67108866, D)) : (V.flags |= 1048576, D);
    }
    function y(V) {
      return t && V.alternate === null && (V.flags |= 67108866), V;
    }
    function x(V, D, U, ae) {
      return D === null || D.tag !== 6 ? (D = Oc(U, V.mode, ae), D.return = V, D) : (D = c(D, U), D.return = V, D);
    }
    function T(V, D, U, ae) {
      var be = U.type;
      return be === _ ? te(
        V,
        D,
        U.props.children,
        ae,
        U.key
      ) : D !== null && (D.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Y && qg(be) === D.type) ? (D = c(D, U.props), Hs(D, U), D.return = V, D) : (D = ul(
        U.type,
        U.key,
        U.props,
        null,
        V.mode,
        ae
      ), Hs(D, U), D.return = V, D);
    }
    function P(V, D, U, ae) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== U.containerInfo || D.stateNode.implementation !== U.implementation ? (D = Vc(U, V.mode, ae), D.return = V, D) : (D = c(D, U.children || []), D.return = V, D);
    }
    function te(V, D, U, ae, be) {
      return D === null || D.tag !== 7 ? (D = Ti(
        U,
        V.mode,
        ae,
        be
      ), D.return = V, D) : (D = c(D, U), D.return = V, D);
    }
    function re(V, D, U) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = Oc(
          "" + D,
          V.mode,
          U
        ), D.return = V, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            return U = ul(
              D.type,
              D.key,
              D.props,
              null,
              V.mode,
              U
            ), Hs(U, D), U.return = V, U;
          case E:
            return D = Vc(
              D,
              V.mode,
              U
            ), D.return = V, D;
          case Y:
            var ae = D._init;
            return D = ae(D._payload), re(V, D, U);
        }
        if (ie(D) || q(D))
          return D = Ti(
            D,
            V.mode,
            U,
            null
          ), D.return = V, D;
        if (typeof D.then == "function")
          return re(V, _l(D), U);
        if (D.$$typeof === Z)
          return re(
            V,
            hl(V, D),
            U
          );
        Cl(V, D);
      }
      return null;
    }
    function G(V, D, U, ae) {
      var be = D !== null ? D.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return be !== null ? null : x(V, D, "" + U, ae);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case b:
            return U.key === be ? T(V, D, U, ae) : null;
          case E:
            return U.key === be ? P(V, D, U, ae) : null;
          case Y:
            return be = U._init, U = be(U._payload), G(V, D, U, ae);
        }
        if (ie(U) || q(U))
          return be !== null ? null : te(V, D, U, ae, null);
        if (typeof U.then == "function")
          return G(
            V,
            D,
            _l(U),
            ae
          );
        if (U.$$typeof === Z)
          return G(
            V,
            D,
            hl(V, U),
            ae
          );
        Cl(V, U);
      }
      return null;
    }
    function F(V, D, U, ae, be) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number" || typeof ae == "bigint")
        return V = V.get(U) || null, x(D, V, "" + ae, be);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case b:
            return V = V.get(
              ae.key === null ? U : ae.key
            ) || null, T(D, V, ae, be);
          case E:
            return V = V.get(
              ae.key === null ? U : ae.key
            ) || null, P(D, V, ae, be);
          case Y:
            var Le = ae._init;
            return ae = Le(ae._payload), F(
              V,
              D,
              U,
              ae,
              be
            );
        }
        if (ie(ae) || q(ae))
          return V = V.get(U) || null, te(D, V, ae, be, null);
        if (typeof ae.then == "function")
          return F(
            V,
            D,
            U,
            _l(ae),
            be
          );
        if (ae.$$typeof === Z)
          return F(
            V,
            D,
            U,
            hl(D, ae),
            be
          );
        Cl(D, ae);
      }
      return null;
    }
    function Re(V, D, U, ae) {
      for (var be = null, Le = null, Ae = D, Me = D = 0, Ht = null; Ae !== null && Me < U.length; Me++) {
        Ae.index > Me ? (Ht = Ae, Ae = null) : Ht = Ae.sibling;
        var Ye = G(
          V,
          Ae,
          U[Me],
          ae
        );
        if (Ye === null) {
          Ae === null && (Ae = Ht);
          break;
        }
        t && Ae && Ye.alternate === null && a(V, Ae), D = d(Ye, D, Me), Le === null ? be = Ye : Le.sibling = Ye, Le = Ye, Ae = Ht;
      }
      if (Me === U.length)
        return r(V, Ae), Fe && _i(V, Me), be;
      if (Ae === null) {
        for (; Me < U.length; Me++)
          Ae = re(V, U[Me], ae), Ae !== null && (D = d(
            Ae,
            D,
            Me
          ), Le === null ? be = Ae : Le.sibling = Ae, Le = Ae);
        return Fe && _i(V, Me), be;
      }
      for (Ae = o(Ae); Me < U.length; Me++)
        Ht = F(
          Ae,
          V,
          Me,
          U[Me],
          ae
        ), Ht !== null && (t && Ht.alternate !== null && Ae.delete(
          Ht.key === null ? Me : Ht.key
        ), D = d(
          Ht,
          D,
          Me
        ), Le === null ? be = Ht : Le.sibling = Ht, Le = Ht);
      return t && Ae.forEach(function(oi) {
        return a(V, oi);
      }), Fe && _i(V, Me), be;
    }
    function Ce(V, D, U, ae) {
      if (U == null) throw Error(s(151));
      for (var be = null, Le = null, Ae = D, Me = D = 0, Ht = null, Ye = U.next(); Ae !== null && !Ye.done; Me++, Ye = U.next()) {
        Ae.index > Me ? (Ht = Ae, Ae = null) : Ht = Ae.sibling;
        var oi = G(V, Ae, Ye.value, ae);
        if (oi === null) {
          Ae === null && (Ae = Ht);
          break;
        }
        t && Ae && oi.alternate === null && a(V, Ae), D = d(oi, D, Me), Le === null ? be = oi : Le.sibling = oi, Le = oi, Ae = Ht;
      }
      if (Ye.done)
        return r(V, Ae), Fe && _i(V, Me), be;
      if (Ae === null) {
        for (; !Ye.done; Me++, Ye = U.next())
          Ye = re(V, Ye.value, ae), Ye !== null && (D = d(Ye, D, Me), Le === null ? be = Ye : Le.sibling = Ye, Le = Ye);
        return Fe && _i(V, Me), be;
      }
      for (Ae = o(Ae); !Ye.done; Me++, Ye = U.next())
        Ye = F(Ae, V, Me, Ye.value, ae), Ye !== null && (t && Ye.alternate !== null && Ae.delete(Ye.key === null ? Me : Ye.key), D = d(Ye, D, Me), Le === null ? be = Ye : Le.sibling = Ye, Le = Ye);
      return t && Ae.forEach(function(m2) {
        return a(V, m2);
      }), Fe && _i(V, Me), be;
    }
    function Je(V, D, U, ae) {
      if (typeof U == "object" && U !== null && U.type === _ && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case b:
            e: {
              for (var be = U.key; D !== null; ) {
                if (D.key === be) {
                  if (be = U.type, be === _) {
                    if (D.tag === 7) {
                      r(
                        V,
                        D.sibling
                      ), ae = c(
                        D,
                        U.props.children
                      ), ae.return = V, V = ae;
                      break e;
                    }
                  } else if (D.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Y && qg(be) === D.type) {
                    r(
                      V,
                      D.sibling
                    ), ae = c(D, U.props), Hs(ae, U), ae.return = V, V = ae;
                    break e;
                  }
                  r(V, D);
                  break;
                } else a(V, D);
                D = D.sibling;
              }
              U.type === _ ? (ae = Ti(
                U.props.children,
                V.mode,
                ae,
                U.key
              ), ae.return = V, V = ae) : (ae = ul(
                U.type,
                U.key,
                U.props,
                null,
                V.mode,
                ae
              ), Hs(ae, U), ae.return = V, V = ae);
            }
            return y(V);
          case E:
            e: {
              for (be = U.key; D !== null; ) {
                if (D.key === be)
                  if (D.tag === 4 && D.stateNode.containerInfo === U.containerInfo && D.stateNode.implementation === U.implementation) {
                    r(
                      V,
                      D.sibling
                    ), ae = c(D, U.children || []), ae.return = V, V = ae;
                    break e;
                  } else {
                    r(V, D);
                    break;
                  }
                else a(V, D);
                D = D.sibling;
              }
              ae = Vc(U, V.mode, ae), ae.return = V, V = ae;
            }
            return y(V);
          case Y:
            return be = U._init, U = be(U._payload), Je(
              V,
              D,
              U,
              ae
            );
        }
        if (ie(U))
          return Re(
            V,
            D,
            U,
            ae
          );
        if (q(U)) {
          if (be = q(U), typeof be != "function") throw Error(s(150));
          return U = be.call(U), Ce(
            V,
            D,
            U,
            ae
          );
        }
        if (typeof U.then == "function")
          return Je(
            V,
            D,
            _l(U),
            ae
          );
        if (U.$$typeof === Z)
          return Je(
            V,
            D,
            hl(V, U),
            ae
          );
        Cl(V, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, D !== null && D.tag === 6 ? (r(V, D.sibling), ae = c(D, U), ae.return = V, V = ae) : (r(V, D), ae = Oc(U, V.mode, ae), ae.return = V, V = ae), y(V)) : r(V, D);
    }
    return function(V, D, U, ae) {
      try {
        Ps = 0;
        var be = Je(
          V,
          D,
          U,
          ae
        );
        return Ar = null, be;
      } catch (Ae) {
        if (Ae === ks || Ae === pl) throw Ae;
        var Le = bn(29, Ae, null, V.mode);
        return Le.lanes = ae, Le.return = V, Le;
      } finally {
      }
    };
  }
  var _r = Kg(!0), Ig = Kg(!1), jn = J(null), ea = null;
  function Fa(t) {
    var a = t.alternate;
    Q(Ot, Ot.current & 1), Q(jn, t), ea === null && (a === null || Sr.current !== null || a.memoizedState !== null) && (ea = t);
  }
  function Xg(t) {
    if (t.tag === 22) {
      if (Q(Ot, Ot.current), Q(jn, t), ea === null) {
        var a = t.alternate;
        a !== null && a.memoizedState !== null && (ea = t);
      }
    } else qa();
  }
  function qa() {
    Q(Ot, Ot.current), Q(jn, jn.current);
  }
  function Ea(t) {
    oe(jn), ea === t && (ea = null), oe(Ot);
  }
  var Ot = J(0);
  function Ml(t) {
    for (var a = t; a !== null; ) {
      if (a.tag === 13) {
        var r = a.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || ad(r)))
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
  function mf(t, a, r, o) {
    a = t.memoizedState, r = r(o, a), r = r == null ? a : g({}, a, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r);
  }
  var pf = {
    enqueueSetState: function(t, a, r) {
      t = t._reactInternals;
      var o = En(), c = Za(o);
      c.payload = a, r != null && (c.callback = r), a = Ga(t, c, o), a !== null && (Tn(a, t, o), Vs(a, t, o));
    },
    enqueueReplaceState: function(t, a, r) {
      t = t._reactInternals;
      var o = En(), c = Za(o);
      c.tag = 1, c.payload = a, r != null && (c.callback = r), a = Ga(t, c, o), a !== null && (Tn(a, t, o), Vs(a, t, o));
    },
    enqueueForceUpdate: function(t, a) {
      t = t._reactInternals;
      var r = En(), o = Za(r);
      o.tag = 2, a != null && (o.callback = a), a = Ga(t, o, r), a !== null && (Tn(a, t, r), Vs(a, t, r));
    }
  };
  function Qg(t, a, r, o, c, d, y) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, d, y) : a.prototype && a.prototype.isPureReactComponent ? !Ts(r, o) || !Ts(c, d) : !0;
  }
  function Jg(t, a, r, o) {
    t = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(r, o), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(r, o), a.state !== t && pf.enqueueReplaceState(a, a.state, null);
  }
  function Oi(t, a) {
    var r = a;
    if ("ref" in a) {
      r = {};
      for (var o in a)
        o !== "ref" && (r[o] = a[o]);
    }
    if (t = t.defaultProps) {
      r === a && (r = g({}, r));
      for (var c in t)
        r[c] === void 0 && (r[c] = t[c]);
    }
    return r;
  }
  var Dl = typeof reportError == "function" ? reportError : function(t) {
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
  function Wg(t) {
    Dl(t);
  }
  function ev(t) {
    console.error(t);
  }
  function tv(t) {
    Dl(t);
  }
  function Rl(t, a) {
    try {
      var r = t.onUncaughtError;
      r(a.value, { componentStack: a.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function nv(t, a, r) {
    try {
      var o = t.onCaughtError;
      o(r.value, {
        componentStack: r.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function gf(t, a, r) {
    return r = Za(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      Rl(t, a);
    }, r;
  }
  function av(t) {
    return t = Za(t), t.tag = 3, t;
  }
  function iv(t, a, r, o) {
    var c = r.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = o.value;
      t.payload = function() {
        return c(d);
      }, t.callback = function() {
        nv(a, r, o);
      };
    }
    var y = r.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (t.callback = function() {
      nv(a, r, o), typeof c != "function" && (Wa === null ? Wa = /* @__PURE__ */ new Set([this]) : Wa.add(this));
      var x = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: x !== null ? x : ""
      });
    });
  }
  function mT(t, a, r, o, c) {
    if (r.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (a = r.alternate, a !== null && Ds(
        a,
        r,
        c,
        !0
      ), r = jn.current, r !== null) {
        switch (r.tag) {
          case 13:
            return ea === null ? Bf() : r.alternate === null && ht === 0 && (ht = 3), r.flags &= -257, r.flags |= 65536, r.lanes = c, o === Gc ? r.flags |= 16384 : (a = r.updateQueue, a === null ? r.updateQueue = /* @__PURE__ */ new Set([o]) : a.add(o), Hf(t, o, c)), !1;
          case 22:
            return r.flags |= 65536, o === Gc ? r.flags |= 16384 : (a = r.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, r.updateQueue = a) : (r = a.retryQueue, r === null ? a.retryQueue = /* @__PURE__ */ new Set([o]) : r.add(o)), Hf(t, o, c)), !1;
        }
        throw Error(s(435, r.tag));
      }
      return Hf(t, o, c), Bf(), !1;
    }
    if (Fe)
      return a = jn.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = c, o !== jc && (t = Error(s(422), { cause: o }), Ms(On(t, r)))) : (o !== jc && (a = Error(s(423), {
        cause: o
      }), Ms(
        On(a, r)
      )), t = t.current.alternate, t.flags |= 65536, c &= -c, t.lanes |= c, o = On(o, r), c = gf(
        t.stateNode,
        o,
        c
      ), qc(t, c), ht !== 4 && (ht = 2)), !1;
    var d = Error(s(520), { cause: o });
    if (d = On(d, r), Is === null ? Is = [d] : Is.push(d), ht !== 4 && (ht = 2), a === null) return !0;
    o = On(o, r), r = a;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, t = c & -c, r.lanes |= t, t = gf(r.stateNode, o, t), qc(r, t), !1;
        case 1:
          if (a = r.type, d = r.stateNode, (r.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Wa === null || !Wa.has(d))))
            return r.flags |= 65536, c &= -c, r.lanes |= c, c = av(c), iv(
              c,
              t,
              r,
              o
            ), qc(r, c), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var rv = Error(s(461)), Bt = !1;
  function qt(t, a, r, o) {
    a.child = t === null ? Ig(a, null, r, o) : _r(
      a,
      t.child,
      r,
      o
    );
  }
  function sv(t, a, r, o, c) {
    r = r.render;
    var d = a.ref;
    if ("ref" in o) {
      var y = {};
      for (var x in o)
        x !== "ref" && (y[x] = o[x]);
    } else y = o;
    return Ri(a), o = Jc(
      t,
      a,
      r,
      y,
      d,
      c
    ), x = Wc(), t !== null && !Bt ? (ef(t, a, c), Ta(t, a, c)) : (Fe && x && $c(a), a.flags |= 1, qt(t, a, o, c), a.child);
  }
  function ov(t, a, r, o, c) {
    if (t === null) {
      var d = r.type;
      return typeof d == "function" && !kc(d) && d.defaultProps === void 0 && r.compare === null ? (a.tag = 15, a.type = d, lv(
        t,
        a,
        d,
        o,
        c
      )) : (t = ul(
        r.type,
        null,
        o,
        a,
        a.mode,
        c
      ), t.ref = a.ref, t.return = a, a.child = t);
    }
    if (d = t.child, !Tf(t, c)) {
      var y = d.memoizedProps;
      if (r = r.compare, r = r !== null ? r : Ts, r(y, o) && t.ref === a.ref)
        return Ta(t, a, c);
    }
    return a.flags |= 1, t = va(d, o), t.ref = a.ref, t.return = a, a.child = t;
  }
  function lv(t, a, r, o, c) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (Ts(d, o) && t.ref === a.ref)
        if (Bt = !1, a.pendingProps = o = d, Tf(t, c))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else
          return a.lanes = t.lanes, Ta(t, a, c);
    }
    return vf(
      t,
      a,
      r,
      o,
      c
    );
  }
  function uv(t, a, r) {
    var o = a.pendingProps, c = o.children, d = t !== null ? t.memoizedState : null;
    if (o.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (o = d !== null ? d.baseLanes | r : r, t !== null) {
          for (c = a.child = t.child, d = 0; c !== null; )
            d = d | c.lanes | c.childLanes, c = c.sibling;
          a.childLanes = d & ~o;
        } else a.childLanes = 0, a.child = null;
        return cv(
          t,
          a,
          o,
          r
        );
      }
      if ((r & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ml(
          a,
          d !== null ? d.cachePool : null
        ), d !== null ? lg(a, d) : Ic(), Xg(a);
      else
        return a.lanes = a.childLanes = 536870912, cv(
          t,
          a,
          d !== null ? d.baseLanes | r : r,
          r
        );
    } else
      d !== null ? (ml(a, d.cachePool), lg(a, d), qa(), a.memoizedState = null) : (t !== null && ml(a, null), Ic(), qa());
    return qt(t, a, c, r), a.child;
  }
  function cv(t, a, r, o) {
    var c = Zc();
    return c = c === null ? null : { parent: kt._currentValue, pool: c }, a.memoizedState = {
      baseLanes: r,
      cachePool: c
    }, t !== null && ml(a, null), Ic(), Xg(a), t !== null && Ds(t, a, o, !0), null;
  }
  function zl(t, a) {
    var r = a.ref;
    if (r === null)
      t !== null && t.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(s(284));
      (t === null || t.ref !== r) && (a.flags |= 4194816);
    }
  }
  function vf(t, a, r, o, c) {
    return Ri(a), r = Jc(
      t,
      a,
      r,
      o,
      void 0,
      c
    ), o = Wc(), t !== null && !Bt ? (ef(t, a, c), Ta(t, a, c)) : (Fe && o && $c(a), a.flags |= 1, qt(t, a, r, c), a.child);
  }
  function fv(t, a, r, o, c, d) {
    return Ri(a), a.updateQueue = null, r = cg(
      a,
      o,
      r,
      c
    ), ug(t), o = Wc(), t !== null && !Bt ? (ef(t, a, d), Ta(t, a, d)) : (Fe && o && $c(a), a.flags |= 1, qt(t, a, r, d), a.child);
  }
  function dv(t, a, r, o, c) {
    if (Ri(a), a.stateNode === null) {
      var d = gr, y = r.contextType;
      typeof y == "object" && y !== null && (d = Qt(y)), d = new r(o, d), a.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = pf, a.stateNode = d, d._reactInternals = a, d = a.stateNode, d.props = o, d.state = a.memoizedState, d.refs = {}, Yc(a), y = r.contextType, d.context = typeof y == "object" && y !== null ? Qt(y) : gr, d.state = a.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (mf(
        a,
        r,
        y,
        o
      ), d.state = a.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), y !== d.state && pf.enqueueReplaceState(d, d.state, null), Ns(a, o, d, c), $s(), d.state = a.memoizedState), typeof d.componentDidMount == "function" && (a.flags |= 4194308), o = !0;
    } else if (t === null) {
      d = a.stateNode;
      var x = a.memoizedProps, T = Oi(r, x);
      d.props = T;
      var P = d.context, te = r.contextType;
      y = gr, typeof te == "object" && te !== null && (y = Qt(te));
      var re = r.getDerivedStateFromProps;
      te = typeof re == "function" || typeof d.getSnapshotBeforeUpdate == "function", x = a.pendingProps !== x, te || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (x || P !== y) && Jg(
        a,
        d,
        o,
        y
      ), Ha = !1;
      var G = a.memoizedState;
      d.state = G, Ns(a, o, d, c), $s(), P = a.memoizedState, x || G !== P || Ha ? (typeof re == "function" && (mf(
        a,
        r,
        re,
        o
      ), P = a.memoizedState), (T = Ha || Qg(
        a,
        r,
        T,
        o,
        G,
        P,
        y
      )) ? (te || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = o, a.memoizedState = P), d.props = o, d.state = P, d.context = y, o = T) : (typeof d.componentDidMount == "function" && (a.flags |= 4194308), o = !1);
    } else {
      d = a.stateNode, Fc(t, a), y = a.memoizedProps, te = Oi(r, y), d.props = te, re = a.pendingProps, G = d.context, P = r.contextType, T = gr, typeof P == "object" && P !== null && (T = Qt(P)), x = r.getDerivedStateFromProps, (P = typeof x == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== re || G !== T) && Jg(
        a,
        d,
        o,
        T
      ), Ha = !1, G = a.memoizedState, d.state = G, Ns(a, o, d, c), $s();
      var F = a.memoizedState;
      y !== re || G !== F || Ha || t !== null && t.dependencies !== null && dl(t.dependencies) ? (typeof x == "function" && (mf(
        a,
        r,
        x,
        o
      ), F = a.memoizedState), (te = Ha || Qg(
        a,
        r,
        te,
        o,
        G,
        F,
        T
      ) || t !== null && t.dependencies !== null && dl(t.dependencies)) ? (P || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, F, T), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        o,
        F,
        T
      )), typeof d.componentDidUpdate == "function" && (a.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === t.memoizedProps && G === t.memoizedState || (a.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && G === t.memoizedState || (a.flags |= 1024), a.memoizedProps = o, a.memoizedState = F), d.props = o, d.state = F, d.context = T, o = te) : (typeof d.componentDidUpdate != "function" || y === t.memoizedProps && G === t.memoizedState || (a.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && G === t.memoizedState || (a.flags |= 1024), o = !1);
    }
    return d = o, zl(t, a), o = (a.flags & 128) !== 0, d || o ? (d = a.stateNode, r = o && typeof r.getDerivedStateFromError != "function" ? null : d.render(), a.flags |= 1, t !== null && o ? (a.child = _r(
      a,
      t.child,
      null,
      c
    ), a.child = _r(
      a,
      null,
      r,
      c
    )) : qt(t, a, r, c), a.memoizedState = d.state, t = a.child) : t = Ta(
      t,
      a,
      c
    ), t;
  }
  function hv(t, a, r, o) {
    return Cs(), a.flags |= 256, qt(t, a, r, o), a.child;
  }
  var yf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bf(t) {
    return { baseLanes: t, cachePool: eg() };
  }
  function xf(t, a, r) {
    return t = t !== null ? t.childLanes & ~r : 0, a && (t |= Ln), t;
  }
  function mv(t, a, r) {
    var o = a.pendingProps, c = !1, d = (a.flags & 128) !== 0, y;
    if ((y = d) || (y = t !== null && t.memoizedState === null ? !1 : (Ot.current & 2) !== 0), y && (c = !0, a.flags &= -129), y = (a.flags & 32) !== 0, a.flags &= -33, t === null) {
      if (Fe) {
        if (c ? Fa(a) : qa(), Fe) {
          var x = dt, T;
          if (T = x) {
            e: {
              for (T = x, x = Wn; T.nodeType !== 8; ) {
                if (!x) {
                  x = null;
                  break e;
                }
                if (T = Kn(
                  T.nextSibling
                ), T === null) {
                  x = null;
                  break e;
                }
              }
              x = T;
            }
            x !== null ? (a.memoizedState = {
              dehydrated: x,
              treeContext: Ai !== null ? { id: ya, overflow: ba } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, T = bn(
              18,
              null,
              null,
              0
            ), T.stateNode = x, T.return = a, a.child = T, nn = a, dt = null, T = !0) : T = !1;
          }
          T || Mi(a);
        }
        if (x = a.memoizedState, x !== null && (x = x.dehydrated, x !== null))
          return ad(x) ? a.lanes = 32 : a.lanes = 536870912, null;
        Ea(a);
      }
      return x = o.children, o = o.fallback, c ? (qa(), c = a.mode, x = kl(
        { mode: "hidden", children: x },
        c
      ), o = Ti(
        o,
        c,
        r,
        null
      ), x.return = a, o.return = a, x.sibling = o, a.child = x, c = a.child, c.memoizedState = bf(r), c.childLanes = xf(
        t,
        y,
        r
      ), a.memoizedState = yf, o) : (Fa(a), Sf(a, x));
    }
    if (T = t.memoizedState, T !== null && (x = T.dehydrated, x !== null)) {
      if (d)
        a.flags & 256 ? (Fa(a), a.flags &= -257, a = wf(
          t,
          a,
          r
        )) : a.memoizedState !== null ? (qa(), a.child = t.child, a.flags |= 128, a = null) : (qa(), c = o.fallback, x = a.mode, o = kl(
          { mode: "visible", children: o.children },
          x
        ), c = Ti(
          c,
          x,
          r,
          null
        ), c.flags |= 2, o.return = a, c.return = a, o.sibling = c, a.child = o, _r(
          a,
          t.child,
          null,
          r
        ), o = a.child, o.memoizedState = bf(r), o.childLanes = xf(
          t,
          y,
          r
        ), a.memoizedState = yf, a = c);
      else if (Fa(a), ad(x)) {
        if (y = x.nextSibling && x.nextSibling.dataset, y) var P = y.dgst;
        y = P, o = Error(s(419)), o.stack = "", o.digest = y, Ms({ value: o, source: null, stack: null }), a = wf(
          t,
          a,
          r
        );
      } else if (Bt || Ds(t, a, r, !1), y = (r & t.childLanes) !== 0, Bt || y) {
        if (y = nt, y !== null && (o = r & -r, o = (o & 42) !== 0 ? 1 : _t(o), o = (o & (y.suspendedLanes | r)) !== 0 ? 0 : o, o !== 0 && o !== T.retryLane))
          throw T.retryLane = o, pr(t, o), Tn(y, t, o), rv;
        x.data === "$?" || Bf(), a = wf(
          t,
          a,
          r
        );
      } else
        x.data === "$?" ? (a.flags |= 192, a.child = t.child, a = null) : (t = T.treeContext, dt = Kn(
          x.nextSibling
        ), nn = a, Fe = !0, Ci = null, Wn = !1, t !== null && ($n[Nn++] = ya, $n[Nn++] = ba, $n[Nn++] = Ai, ya = t.id, ba = t.overflow, Ai = a), a = Sf(
          a,
          o.children
        ), a.flags |= 4096);
      return a;
    }
    return c ? (qa(), c = o.fallback, x = a.mode, T = t.child, P = T.sibling, o = va(T, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = T.subtreeFlags & 65011712, P !== null ? c = va(P, c) : (c = Ti(
      c,
      x,
      r,
      null
    ), c.flags |= 2), c.return = a, o.return = a, o.sibling = c, a.child = o, o = c, c = a.child, x = t.child.memoizedState, x === null ? x = bf(r) : (T = x.cachePool, T !== null ? (P = kt._currentValue, T = T.parent !== P ? { parent: P, pool: P } : T) : T = eg(), x = {
      baseLanes: x.baseLanes | r,
      cachePool: T
    }), c.memoizedState = x, c.childLanes = xf(
      t,
      y,
      r
    ), a.memoizedState = yf, o) : (Fa(a), r = t.child, t = r.sibling, r = va(r, {
      mode: "visible",
      children: o.children
    }), r.return = a, r.sibling = null, t !== null && (y = a.deletions, y === null ? (a.deletions = [t], a.flags |= 16) : y.push(t)), a.child = r, a.memoizedState = null, r);
  }
  function Sf(t, a) {
    return a = kl(
      { mode: "visible", children: a },
      t.mode
    ), a.return = t, t.child = a;
  }
  function kl(t, a) {
    return t = bn(22, t, null, a), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function wf(t, a, r) {
    return _r(a, t.child, null, r), t = Sf(
      a,
      a.pendingProps.children
    ), t.flags |= 2, a.memoizedState = null, t;
  }
  function pv(t, a, r) {
    t.lanes |= a;
    var o = t.alternate;
    o !== null && (o.lanes |= a), Uc(t.return, a, r);
  }
  function Ef(t, a, r, o, c) {
    var d = t.memoizedState;
    d === null ? t.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: r,
      tailMode: c
    } : (d.isBackwards = a, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = r, d.tailMode = c);
  }
  function gv(t, a, r) {
    var o = a.pendingProps, c = o.revealOrder, d = o.tail;
    if (qt(t, a, o.children, r), o = Ot.current, (o & 2) !== 0)
      o = o & 1 | 2, a.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        e: for (t = a.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && pv(t, r, a);
          else if (t.tag === 19)
            pv(t, r, a);
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
    switch (Q(Ot, o), c) {
      case "forwards":
        for (r = a.child, c = null; r !== null; )
          t = r.alternate, t !== null && Ml(t) === null && (c = r), r = r.sibling;
        r = c, r === null ? (c = a.child, a.child = null) : (c = r.sibling, r.sibling = null), Ef(
          a,
          !1,
          c,
          r,
          d
        );
        break;
      case "backwards":
        for (r = null, c = a.child, a.child = null; c !== null; ) {
          if (t = c.alternate, t !== null && Ml(t) === null) {
            a.child = c;
            break;
          }
          t = c.sibling, c.sibling = r, r = c, c = t;
        }
        Ef(
          a,
          !0,
          r,
          null,
          d
        );
        break;
      case "together":
        Ef(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Ta(t, a, r) {
    if (t !== null && (a.dependencies = t.dependencies), Ja |= a.lanes, (r & a.childLanes) === 0)
      if (t !== null) {
        if (Ds(
          t,
          a,
          r,
          !1
        ), (r & a.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && a.child !== t.child)
      throw Error(s(153));
    if (a.child !== null) {
      for (t = a.child, r = va(t, t.pendingProps), a.child = r, r.return = a; t.sibling !== null; )
        t = t.sibling, r = r.sibling = va(t, t.pendingProps), r.return = a;
      r.sibling = null;
    }
    return a.child;
  }
  function Tf(t, a) {
    return (t.lanes & a) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && dl(t)));
  }
  function pT(t, a, r) {
    switch (a.tag) {
      case 3:
        Te(a, a.stateNode.containerInfo), Pa(a, kt, t.memoizedState.cache), Cs();
        break;
      case 27:
      case 5:
        Et(a);
        break;
      case 4:
        Te(a, a.stateNode.containerInfo);
        break;
      case 10:
        Pa(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 13:
        var o = a.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Fa(a), a.flags |= 128, null) : (r & a.child.childLanes) !== 0 ? mv(t, a, r) : (Fa(a), t = Ta(
            t,
            a,
            r
          ), t !== null ? t.sibling : null);
        Fa(a);
        break;
      case 19:
        var c = (t.flags & 128) !== 0;
        if (o = (r & a.childLanes) !== 0, o || (Ds(
          t,
          a,
          r,
          !1
        ), o = (r & a.childLanes) !== 0), c) {
          if (o)
            return gv(
              t,
              a,
              r
            );
          a.flags |= 128;
        }
        if (c = a.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Q(Ot, Ot.current), o) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, uv(t, a, r);
      case 24:
        Pa(a, kt, t.memoizedState.cache);
    }
    return Ta(t, a, r);
  }
  function vv(t, a, r) {
    if (t !== null)
      if (t.memoizedProps !== a.pendingProps)
        Bt = !0;
      else {
        if (!Tf(t, r) && (a.flags & 128) === 0)
          return Bt = !1, pT(
            t,
            a,
            r
          );
        Bt = (t.flags & 131072) !== 0;
      }
    else
      Bt = !1, Fe && (a.flags & 1048576) !== 0 && qp(a, fl, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        e: {
          t = a.pendingProps;
          var o = a.elementType, c = o._init;
          if (o = c(o._payload), a.type = o, typeof o == "function")
            kc(o) ? (t = Oi(o, t), a.tag = 1, a = dv(
              null,
              a,
              o,
              t,
              r
            )) : (a.tag = 0, a = vf(
              null,
              a,
              o,
              t,
              r
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === ee) {
                a.tag = 11, a = sv(
                  null,
                  a,
                  o,
                  t,
                  r
                );
                break e;
              } else if (c === W) {
                a.tag = 14, a = ov(
                  null,
                  a,
                  o,
                  t,
                  r
                );
                break e;
              }
            }
            throw a = H(o) || o, Error(s(306, a, ""));
          }
        }
        return a;
      case 0:
        return vf(
          t,
          a,
          a.type,
          a.pendingProps,
          r
        );
      case 1:
        return o = a.type, c = Oi(
          o,
          a.pendingProps
        ), dv(
          t,
          a,
          o,
          c,
          r
        );
      case 3:
        e: {
          if (Te(
            a,
            a.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          o = a.pendingProps;
          var d = a.memoizedState;
          c = d.element, Fc(t, a), Ns(a, o, null, r);
          var y = a.memoizedState;
          if (o = y.cache, Pa(a, kt, o), o !== d.cache && Bc(
            a,
            [kt],
            r,
            !0
          ), $s(), o = y.element, d.isDehydrated)
            if (d = {
              element: o,
              isDehydrated: !1,
              cache: y.cache
            }, a.updateQueue.baseState = d, a.memoizedState = d, a.flags & 256) {
              a = hv(
                t,
                a,
                o,
                r
              );
              break e;
            } else if (o !== c) {
              c = On(
                Error(s(424)),
                a
              ), Ms(c), a = hv(
                t,
                a,
                o,
                r
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
              for (dt = Kn(t.firstChild), nn = a, Fe = !0, Ci = null, Wn = !0, r = Ig(
                a,
                null,
                o,
                r
              ), a.child = r; r; )
                r.flags = r.flags & -3 | 4096, r = r.sibling;
            }
          else {
            if (Cs(), o === c) {
              a = Ta(
                t,
                a,
                r
              );
              break e;
            }
            qt(
              t,
              a,
              o,
              r
            );
          }
          a = a.child;
        }
        return a;
      case 26:
        return zl(t, a), t === null ? (r = Sy(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = r : Fe || (r = a.type, t = a.pendingProps, o = Fl(
          ge.current
        ).createElement(r), o[vt] = a, o[tt] = t, It(o, r, t), Ut(o), a.stateNode = o) : a.memoizedState = Sy(
          a.type,
          t.memoizedProps,
          a.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Et(a), t === null && Fe && (o = a.stateNode = yy(
          a.type,
          a.pendingProps,
          ge.current
        ), nn = a, Wn = !0, c = dt, ni(a.type) ? (id = c, dt = Kn(
          o.firstChild
        )) : dt = c), qt(
          t,
          a,
          a.pendingProps.children,
          r
        ), zl(t, a), t === null && (a.flags |= 4194304), a.child;
      case 5:
        return t === null && Fe && ((c = o = dt) && (o = ZT(
          o,
          a.type,
          a.pendingProps,
          Wn
        ), o !== null ? (a.stateNode = o, nn = a, dt = Kn(
          o.firstChild
        ), Wn = !1, c = !0) : c = !1), c || Mi(a)), Et(a), c = a.type, d = a.pendingProps, y = t !== null ? t.memoizedProps : null, o = d.children, ed(c, d) ? o = null : y !== null && ed(c, y) && (a.flags |= 32), a.memoizedState !== null && (c = Jc(
          t,
          a,
          oT,
          null,
          null,
          r
        ), io._currentValue = c), zl(t, a), qt(t, a, o, r), a.child;
      case 6:
        return t === null && Fe && ((t = r = dt) && (r = GT(
          r,
          a.pendingProps,
          Wn
        ), r !== null ? (a.stateNode = r, nn = a, dt = null, t = !0) : t = !1), t || Mi(a)), null;
      case 13:
        return mv(t, a, r);
      case 4:
        return Te(
          a,
          a.stateNode.containerInfo
        ), o = a.pendingProps, t === null ? a.child = _r(
          a,
          null,
          o,
          r
        ) : qt(
          t,
          a,
          o,
          r
        ), a.child;
      case 11:
        return sv(
          t,
          a,
          a.type,
          a.pendingProps,
          r
        );
      case 7:
        return qt(
          t,
          a,
          a.pendingProps,
          r
        ), a.child;
      case 8:
        return qt(
          t,
          a,
          a.pendingProps.children,
          r
        ), a.child;
      case 12:
        return qt(
          t,
          a,
          a.pendingProps.children,
          r
        ), a.child;
      case 10:
        return o = a.pendingProps, Pa(a, a.type, o.value), qt(
          t,
          a,
          o.children,
          r
        ), a.child;
      case 9:
        return c = a.type._context, o = a.pendingProps.children, Ri(a), c = Qt(c), o = o(c), a.flags |= 1, qt(t, a, o, r), a.child;
      case 14:
        return ov(
          t,
          a,
          a.type,
          a.pendingProps,
          r
        );
      case 15:
        return lv(
          t,
          a,
          a.type,
          a.pendingProps,
          r
        );
      case 19:
        return gv(t, a, r);
      case 31:
        return o = a.pendingProps, r = a.mode, o = {
          mode: o.mode,
          children: o.children
        }, t === null ? (r = kl(
          o,
          r
        ), r.ref = a.ref, a.child = r, r.return = a, a = r) : (r = va(t.child, o), r.ref = a.ref, a.child = r, r.return = a, a = r), a;
      case 22:
        return uv(t, a, r);
      case 24:
        return Ri(a), o = Qt(kt), t === null ? (c = Zc(), c === null && (c = nt, d = Pc(), c.pooledCache = d, d.refCount++, d !== null && (c.pooledCacheLanes |= r), c = d), a.memoizedState = {
          parent: o,
          cache: c
        }, Yc(a), Pa(a, kt, c)) : ((t.lanes & r) !== 0 && (Fc(t, a), Ns(a, null, null, r), $s()), c = t.memoizedState, d = a.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, a.memoizedState = c, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = c), Pa(a, kt, o)) : (o = d.cache, Pa(a, kt, o), o !== c.cache && Bc(
          a,
          [kt],
          r,
          !0
        ))), qt(
          t,
          a,
          a.pendingProps.children,
          r
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(s(156, a.tag));
  }
  function Aa(t) {
    t.flags |= 4;
  }
  function yv(t, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !_y(a)) {
      if (a = jn.current, a !== null && ((He & 4194048) === He ? ea !== null : (He & 62914560) !== He && (He & 536870912) === 0 || a !== ea))
        throw Os = Gc, tg;
      t.flags |= 8192;
    }
  }
  function Ol(t, a) {
    a !== null && (t.flags |= 4), t.flags & 16384 && (a = t.tag !== 22 ? qo() : 536870912, t.lanes |= a, Rr |= a);
  }
  function Zs(t, a) {
    if (!Fe)
      switch (t.tailMode) {
        case "hidden":
          a = t.tail;
          for (var r = null; a !== null; )
            a.alternate !== null && (r = a), a = a.sibling;
          r === null ? t.tail = null : r.sibling = null;
          break;
        case "collapsed":
          r = t.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? a || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null;
      }
  }
  function ut(t) {
    var a = t.alternate !== null && t.alternate.child === t.child, r = 0, o = 0;
    if (a)
      for (var c = t.child; c !== null; )
        r |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = t, c = c.sibling;
    else
      for (c = t.child; c !== null; )
        r |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = t, c = c.sibling;
    return t.subtreeFlags |= o, t.childLanes = r, a;
  }
  function gT(t, a, r) {
    var o = a.pendingProps;
    switch (Nc(a), a.tag) {
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
        return ut(a), null;
      case 1:
        return ut(a), null;
      case 3:
        return r = a.stateNode, o = null, t !== null && (o = t.memoizedState.cache), a.memoizedState.cache !== o && (a.flags |= 2048), Sa(kt), We(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (_s(a) ? Aa(a) : t === null || t.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, Xp())), ut(a), null;
      case 26:
        return r = a.memoizedState, t === null ? (Aa(a), r !== null ? (ut(a), yv(a, r)) : (ut(a), a.flags &= -16777217)) : r ? r !== t.memoizedState ? (Aa(a), ut(a), yv(a, r)) : (ut(a), a.flags &= -16777217) : (t.memoizedProps !== o && Aa(a), ut(a), a.flags &= -16777217), null;
      case 27:
        lt(a), r = ge.current;
        var c = a.type;
        if (t !== null && a.stateNode != null)
          t.memoizedProps !== o && Aa(a);
        else {
          if (!o) {
            if (a.stateNode === null)
              throw Error(s(166));
            return ut(a), null;
          }
          t = le.current, _s(a) ? Kp(a) : (t = yy(c, o, r), a.stateNode = t, Aa(a));
        }
        return ut(a), null;
      case 5:
        if (lt(a), r = a.type, t !== null && a.stateNode != null)
          t.memoizedProps !== o && Aa(a);
        else {
          if (!o) {
            if (a.stateNode === null)
              throw Error(s(166));
            return ut(a), null;
          }
          if (t = le.current, _s(a))
            Kp(a);
          else {
            switch (c = Fl(
              ge.current
            ), t) {
              case 1:
                t = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                t = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    t = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    t = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    t = c.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof o.is == "string" ? c.createElement("select", { is: o.is }) : c.createElement("select"), o.multiple ? t.multiple = !0 : o.size && (t.size = o.size);
                    break;
                  default:
                    t = typeof o.is == "string" ? c.createElement(r, { is: o.is }) : c.createElement(r);
                }
            }
            t[vt] = a, t[tt] = o;
            e: for (c = a.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                t.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === a) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === a)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            a.stateNode = t;
            e: switch (It(t, r, o), r) {
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
            t && Aa(a);
          }
        }
        return ut(a), a.flags &= -16777217, null;
      case 6:
        if (t && a.stateNode != null)
          t.memoizedProps !== o && Aa(a);
        else {
          if (typeof o != "string" && a.stateNode === null)
            throw Error(s(166));
          if (t = ge.current, _s(a)) {
            if (t = a.stateNode, r = a.memoizedProps, o = null, c = nn, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            t[vt] = a, t = !!(t.nodeValue === r || o !== null && o.suppressHydrationWarning === !0 || fy(t.nodeValue, r)), t || Mi(a);
          } else
            t = Fl(t).createTextNode(
              o
            ), t[vt] = a, a.stateNode = t;
        }
        return ut(a), null;
      case 13:
        if (o = a.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (c = _s(a), o !== null && o.dehydrated !== null) {
            if (t === null) {
              if (!c) throw Error(s(318));
              if (c = a.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[vt] = a;
            } else
              Cs(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            ut(a), c = !1;
          } else
            c = Xp(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return a.flags & 256 ? (Ea(a), a) : (Ea(a), null);
        }
        if (Ea(a), (a.flags & 128) !== 0)
          return a.lanes = r, a;
        if (r = o !== null, t = t !== null && t.memoizedState !== null, r) {
          o = a.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var d = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (d = o.memoizedState.cachePool.pool), d !== c && (o.flags |= 2048);
        }
        return r !== t && r && (a.child.flags |= 8192), Ol(a, a.updateQueue), ut(a), null;
      case 4:
        return We(), t === null && If(a.stateNode.containerInfo), ut(a), null;
      case 10:
        return Sa(a.type), ut(a), null;
      case 19:
        if (oe(Ot), c = a.memoizedState, c === null) return ut(a), null;
        if (o = (a.flags & 128) !== 0, d = c.rendering, d === null)
          if (o) Zs(c, !1);
          else {
            if (ht !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = a.child; t !== null; ) {
                if (d = Ml(t), d !== null) {
                  for (a.flags |= 128, Zs(c, !1), t = d.updateQueue, a.updateQueue = t, Ol(a, t), a.subtreeFlags = 0, t = r, r = a.child; r !== null; )
                    Fp(r, t), r = r.sibling;
                  return Q(
                    Ot,
                    Ot.current & 1 | 2
                  ), a.child;
                }
                t = t.sibling;
              }
            c.tail !== null && Tt() > Nl && (a.flags |= 128, o = !0, Zs(c, !1), a.lanes = 4194304);
          }
        else {
          if (!o)
            if (t = Ml(d), t !== null) {
              if (a.flags |= 128, o = !0, t = t.updateQueue, a.updateQueue = t, Ol(a, t), Zs(c, !0), c.tail === null && c.tailMode === "hidden" && !d.alternate && !Fe)
                return ut(a), null;
            } else
              2 * Tt() - c.renderingStartTime > Nl && r !== 536870912 && (a.flags |= 128, o = !0, Zs(c, !1), a.lanes = 4194304);
          c.isBackwards ? (d.sibling = a.child, a.child = d) : (t = c.last, t !== null ? t.sibling = d : a.child = d, c.last = d);
        }
        return c.tail !== null ? (a = c.tail, c.rendering = a, c.tail = a.sibling, c.renderingStartTime = Tt(), a.sibling = null, t = Ot.current, Q(Ot, o ? t & 1 | 2 : t & 1), a) : (ut(a), null);
      case 22:
      case 23:
        return Ea(a), Xc(), o = a.memoizedState !== null, t !== null ? t.memoizedState !== null !== o && (a.flags |= 8192) : o && (a.flags |= 8192), o ? (r & 536870912) !== 0 && (a.flags & 128) === 0 && (ut(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : ut(a), r = a.updateQueue, r !== null && Ol(a, r.retryQueue), r = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), o = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== r && (a.flags |= 2048), t !== null && oe(zi), null;
      case 24:
        return r = null, t !== null && (r = t.memoizedState.cache), a.memoizedState.cache !== r && (a.flags |= 2048), Sa(kt), ut(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, a.tag));
  }
  function vT(t, a) {
    switch (Nc(a), a.tag) {
      case 1:
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 3:
        return Sa(kt), We(), t = a.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (a.flags = t & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return lt(a), null;
      case 13:
        if (Ea(a), t = a.memoizedState, t !== null && t.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(s(340));
          Cs();
        }
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 19:
        return oe(Ot), null;
      case 4:
        return We(), null;
      case 10:
        return Sa(a.type), null;
      case 22:
      case 23:
        return Ea(a), Xc(), t !== null && oe(zi), t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 24:
        return Sa(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bv(t, a) {
    switch (Nc(a), a.tag) {
      case 3:
        Sa(kt), We();
        break;
      case 26:
      case 27:
      case 5:
        lt(a);
        break;
      case 4:
        We();
        break;
      case 13:
        Ea(a);
        break;
      case 19:
        oe(Ot);
        break;
      case 10:
        Sa(a.type);
        break;
      case 22:
      case 23:
        Ea(a), Xc(), t !== null && oe(zi);
        break;
      case 24:
        Sa(kt);
    }
  }
  function Gs(t, a) {
    try {
      var r = a.updateQueue, o = r !== null ? r.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        r = c;
        do {
          if ((r.tag & t) === t) {
            o = void 0;
            var d = r.create, y = r.inst;
            o = d(), y.destroy = o;
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (x) {
      et(a, a.return, x);
    }
  }
  function Ka(t, a, r) {
    try {
      var o = a.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        o = d;
        do {
          if ((o.tag & t) === t) {
            var y = o.inst, x = y.destroy;
            if (x !== void 0) {
              y.destroy = void 0, c = a;
              var T = r, P = x;
              try {
                P();
              } catch (te) {
                et(
                  c,
                  T,
                  te
                );
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (te) {
      et(a, a.return, te);
    }
  }
  function xv(t) {
    var a = t.updateQueue;
    if (a !== null) {
      var r = t.stateNode;
      try {
        og(a, r);
      } catch (o) {
        et(t, t.return, o);
      }
    }
  }
  function Sv(t, a, r) {
    r.props = Oi(
      t.type,
      t.memoizedProps
    ), r.state = t.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (o) {
      et(t, a, o);
    }
  }
  function Ys(t, a) {
    try {
      var r = t.ref;
      if (r !== null) {
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
        typeof r == "function" ? t.refCleanup = r(o) : r.current = o;
      }
    } catch (c) {
      et(t, a, c);
    }
  }
  function ta(t, a) {
    var r = t.ref, o = t.refCleanup;
    if (r !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          et(t, a, c);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (c) {
          et(t, a, c);
        }
      else r.current = null;
  }
  function wv(t) {
    var a = t.type, r = t.memoizedProps, o = t.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && o.focus();
          break e;
        case "img":
          r.src ? o.src = r.src : r.srcSet && (o.srcset = r.srcSet);
      }
    } catch (c) {
      et(t, t.return, c);
    }
  }
  function Af(t, a, r) {
    try {
      var o = t.stateNode;
      LT(o, t.type, r, a), o[tt] = a;
    } catch (c) {
      et(t, t.return, c);
    }
  }
  function Ev(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ni(t.type) || t.tag === 4;
  }
  function _f(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ev(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ni(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Cf(t, a, r) {
    var o = t.tag;
    if (o === 5 || o === 6)
      t = t.stateNode, a ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(t, a) : (a = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, a.appendChild(t), r = r._reactRootContainer, r != null || a.onclick !== null || (a.onclick = Yl));
    else if (o !== 4 && (o === 27 && ni(t.type) && (r = t.stateNode, a = null), t = t.child, t !== null))
      for (Cf(t, a, r), t = t.sibling; t !== null; )
        Cf(t, a, r), t = t.sibling;
  }
  function Vl(t, a, r) {
    var o = t.tag;
    if (o === 5 || o === 6)
      t = t.stateNode, a ? r.insertBefore(t, a) : r.appendChild(t);
    else if (o !== 4 && (o === 27 && ni(t.type) && (r = t.stateNode), t = t.child, t !== null))
      for (Vl(t, a, r), t = t.sibling; t !== null; )
        Vl(t, a, r), t = t.sibling;
  }
  function Tv(t) {
    var a = t.stateNode, r = t.memoizedProps;
    try {
      for (var o = t.type, c = a.attributes; c.length; )
        a.removeAttributeNode(c[0]);
      It(a, o, r), a[vt] = t, a[tt] = r;
    } catch (d) {
      et(t, t.return, d);
    }
  }
  var _a = !1, bt = !1, Mf = !1, Av = typeof WeakSet == "function" ? WeakSet : Set, Pt = null;
  function yT(t, a) {
    if (t = t.containerInfo, Jf = Jl, t = Np(t), Ac(t)) {
      if ("selectionStart" in t)
        var r = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else {
        r = (r = t.ownerDocument) && r.defaultView || window;
        var o = r.getSelection && r.getSelection();
        if (o && o.rangeCount !== 0) {
          r = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          var y = 0, x = -1, T = -1, P = 0, te = 0, re = t, G = null;
          e: for (; ; ) {
            for (var F; re !== r || c !== 0 && re.nodeType !== 3 || (x = y + c), re !== d || o !== 0 && re.nodeType !== 3 || (T = y + o), re.nodeType === 3 && (y += re.nodeValue.length), (F = re.firstChild) !== null; )
              G = re, re = F;
            for (; ; ) {
              if (re === t) break e;
              if (G === r && ++P === c && (x = y), G === d && ++te === o && (T = y), (F = re.nextSibling) !== null) break;
              re = G, G = re.parentNode;
            }
            re = F;
          }
          r = x === -1 || T === -1 ? null : { start: x, end: T };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Wf = { focusedElem: t, selectionRange: r }, Jl = !1, Pt = a; Pt !== null; )
      if (a = Pt, t = a.child, (a.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = a, Pt = t;
      else
        for (; Pt !== null; ) {
          switch (a = Pt, d = a.alternate, t = a.flags, a.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && d !== null) {
                t = void 0, r = a, c = d.memoizedProps, d = d.memoizedState, o = r.stateNode;
                try {
                  var Re = Oi(
                    r.type,
                    c
                  );
                  t = o.getSnapshotBeforeUpdate(
                    Re,
                    d
                  ), o.__reactInternalSnapshotBeforeUpdate = t;
                } catch (Ce) {
                  et(
                    r,
                    r.return,
                    Ce
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = a.stateNode.containerInfo, r = t.nodeType, r === 9)
                  nd(t);
                else if (r === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nd(t);
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
            t.return = a.return, Pt = t;
            break;
          }
          Pt = a.return;
        }
  }
  function _v(t, a, r) {
    var o = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Ia(t, r), o & 4 && Gs(5, r);
        break;
      case 1:
        if (Ia(t, r), o & 4)
          if (t = r.stateNode, a === null)
            try {
              t.componentDidMount();
            } catch (y) {
              et(r, r.return, y);
            }
          else {
            var c = Oi(
              r.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              t.componentDidUpdate(
                c,
                a,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              et(
                r,
                r.return,
                y
              );
            }
          }
        o & 64 && xv(r), o & 512 && Ys(r, r.return);
        break;
      case 3:
        if (Ia(t, r), o & 64 && (t = r.updateQueue, t !== null)) {
          if (a = null, r.child !== null)
            switch (r.child.tag) {
              case 27:
              case 5:
                a = r.child.stateNode;
                break;
              case 1:
                a = r.child.stateNode;
            }
          try {
            og(t, a);
          } catch (y) {
            et(r, r.return, y);
          }
        }
        break;
      case 27:
        a === null && o & 4 && Tv(r);
      case 26:
      case 5:
        Ia(t, r), a === null && o & 4 && wv(r), o & 512 && Ys(r, r.return);
        break;
      case 12:
        Ia(t, r);
        break;
      case 13:
        Ia(t, r), o & 4 && Dv(t, r), o & 64 && (t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null && (r = CT.bind(
          null,
          r
        ), YT(t, r))));
        break;
      case 22:
        if (o = r.memoizedState !== null || _a, !o) {
          a = a !== null && a.memoizedState !== null || bt, c = _a;
          var d = bt;
          _a = o, (bt = a) && !d ? Xa(
            t,
            r,
            (r.subtreeFlags & 8772) !== 0
          ) : Ia(t, r), _a = c, bt = d;
        }
        break;
      case 30:
        break;
      default:
        Ia(t, r);
    }
  }
  function Cv(t) {
    var a = t.alternate;
    a !== null && (t.alternate = null, Cv(a)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (a = t.stateNode, a !== null && sc(a)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var rt = null, dn = !1;
  function Ca(t, a, r) {
    for (r = r.child; r !== null; )
      Mv(t, a, r), r = r.sibling;
  }
  function Mv(t, a, r) {
    if (De && typeof De.onCommitFiberUnmount == "function")
      try {
        De.onCommitFiberUnmount(ye, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        bt || ta(r, a), Ca(
          t,
          a,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        bt || ta(r, a);
        var o = rt, c = dn;
        ni(r.type) && (rt = r.stateNode, dn = !1), Ca(
          t,
          a,
          r
        ), eo(r.stateNode), rt = o, dn = c;
        break;
      case 5:
        bt || ta(r, a);
      case 6:
        if (o = rt, c = dn, rt = null, Ca(
          t,
          a,
          r
        ), rt = o, dn = c, rt !== null)
          if (dn)
            try {
              (rt.nodeType === 9 ? rt.body : rt.nodeName === "HTML" ? rt.ownerDocument.body : rt).removeChild(r.stateNode);
            } catch (d) {
              et(
                r,
                a,
                d
              );
            }
          else
            try {
              rt.removeChild(r.stateNode);
            } catch (d) {
              et(
                r,
                a,
                d
              );
            }
        break;
      case 18:
        rt !== null && (dn ? (t = rt, gy(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          r.stateNode
        ), lo(t)) : gy(rt, r.stateNode));
        break;
      case 4:
        o = rt, c = dn, rt = r.stateNode.containerInfo, dn = !0, Ca(
          t,
          a,
          r
        ), rt = o, dn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bt || Ka(2, r, a), bt || Ka(4, r, a), Ca(
          t,
          a,
          r
        );
        break;
      case 1:
        bt || (ta(r, a), o = r.stateNode, typeof o.componentWillUnmount == "function" && Sv(
          r,
          a,
          o
        )), Ca(
          t,
          a,
          r
        );
        break;
      case 21:
        Ca(
          t,
          a,
          r
        );
        break;
      case 22:
        bt = (o = bt) || r.memoizedState !== null, Ca(
          t,
          a,
          r
        ), bt = o;
        break;
      default:
        Ca(
          t,
          a,
          r
        );
    }
  }
  function Dv(t, a) {
    if (a.memoizedState === null && (t = a.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        lo(t);
      } catch (r) {
        et(a, a.return, r);
      }
  }
  function bT(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var a = t.stateNode;
        return a === null && (a = t.stateNode = new Av()), a;
      case 22:
        return t = t.stateNode, a = t._retryCache, a === null && (a = t._retryCache = new Av()), a;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Df(t, a) {
    var r = bT(t);
    a.forEach(function(o) {
      var c = MT.bind(null, t, o);
      r.has(o) || (r.add(o), o.then(c, c));
    });
  }
  function xn(t, a) {
    var r = a.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var c = r[o], d = t, y = a, x = y;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (ni(x.type)) {
                rt = x.stateNode, dn = !1;
                break e;
              }
              break;
            case 5:
              rt = x.stateNode, dn = !1;
              break e;
            case 3:
            case 4:
              rt = x.stateNode.containerInfo, dn = !0;
              break e;
          }
          x = x.return;
        }
        if (rt === null) throw Error(s(160));
        Mv(d, y, c), rt = null, dn = !1, d = c.alternate, d !== null && (d.return = null), c.return = null;
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; )
        Rv(a, t), a = a.sibling;
  }
  var qn = null;
  function Rv(t, a) {
    var r = t.alternate, o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        xn(a, t), Sn(t), o & 4 && (Ka(3, t, t.return), Gs(3, t), Ka(5, t, t.return));
        break;
      case 1:
        xn(a, t), Sn(t), o & 512 && (bt || r === null || ta(r, r.return)), o & 64 && _a && (t = t.updateQueue, t !== null && (o = t.callbacks, o !== null && (r = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = r === null ? o : r.concat(o))));
        break;
      case 26:
        var c = qn;
        if (xn(a, t), Sn(t), o & 512 && (bt || r === null || ta(r, r.return)), o & 4) {
          var d = r !== null ? r.memoizedState : null;
          if (o = t.memoizedState, r === null)
            if (o === null)
              if (t.stateNode === null) {
                e: {
                  o = t.type, r = t.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      d = c.getElementsByTagName("title")[0], (!d || d[ps] || d[vt] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = c.createElement(o), c.head.insertBefore(
                        d,
                        c.querySelector("head > title")
                      )), It(d, o, r), d[vt] = t, Ut(d), o = d;
                      break e;
                    case "link":
                      var y = Ty(
                        "link",
                        "href",
                        c
                      ).get(o + (r.href || ""));
                      if (y) {
                        for (var x = 0; x < y.length; x++)
                          if (d = y[x], d.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && d.getAttribute("rel") === (r.rel == null ? null : r.rel) && d.getAttribute("title") === (r.title == null ? null : r.title) && d.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                            y.splice(x, 1);
                            break t;
                          }
                      }
                      d = c.createElement(o), It(d, o, r), c.head.appendChild(d);
                      break;
                    case "meta":
                      if (y = Ty(
                        "meta",
                        "content",
                        c
                      ).get(o + (r.content || ""))) {
                        for (x = 0; x < y.length; x++)
                          if (d = y[x], d.getAttribute("content") === (r.content == null ? null : "" + r.content) && d.getAttribute("name") === (r.name == null ? null : r.name) && d.getAttribute("property") === (r.property == null ? null : r.property) && d.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && d.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                            y.splice(x, 1);
                            break t;
                          }
                      }
                      d = c.createElement(o), It(d, o, r), c.head.appendChild(d);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  d[vt] = t, Ut(d), o = d;
                }
                t.stateNode = o;
              } else
                Ay(
                  c,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Ey(
                c,
                o,
                t.memoizedProps
              );
          else
            d !== o ? (d === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : d.count--, o === null ? Ay(
              c,
              t.type,
              t.stateNode
            ) : Ey(
              c,
              o,
              t.memoizedProps
            )) : o === null && t.stateNode !== null && Af(
              t,
              t.memoizedProps,
              r.memoizedProps
            );
        }
        break;
      case 27:
        xn(a, t), Sn(t), o & 512 && (bt || r === null || ta(r, r.return)), r !== null && o & 4 && Af(
          t,
          t.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (xn(a, t), Sn(t), o & 512 && (bt || r === null || ta(r, r.return)), t.flags & 32) {
          c = t.stateNode;
          try {
            lr(c, "");
          } catch (F) {
            et(t, t.return, F);
          }
        }
        o & 4 && t.stateNode != null && (c = t.memoizedProps, Af(
          t,
          c,
          r !== null ? r.memoizedProps : c
        )), o & 1024 && (Mf = !0);
        break;
      case 6:
        if (xn(a, t), Sn(t), o & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          o = t.memoizedProps, r = t.stateNode;
          try {
            r.nodeValue = o;
          } catch (F) {
            et(t, t.return, F);
          }
        }
        break;
      case 3:
        if (Il = null, c = qn, qn = ql(a.containerInfo), xn(a, t), qn = c, Sn(t), o & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            lo(a.containerInfo);
          } catch (F) {
            et(t, t.return, F);
          }
        Mf && (Mf = !1, zv(t));
        break;
      case 4:
        o = qn, qn = ql(
          t.stateNode.containerInfo
        ), xn(a, t), Sn(t), qn = o;
        break;
      case 12:
        xn(a, t), Sn(t);
        break;
      case 13:
        xn(a, t), Sn(t), t.child.flags & 8192 && t.memoizedState !== null != (r !== null && r.memoizedState !== null) && ($f = Tt()), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Df(t, o)));
        break;
      case 22:
        c = t.memoizedState !== null;
        var T = r !== null && r.memoizedState !== null, P = _a, te = bt;
        if (_a = P || c, bt = te || T, xn(a, t), bt = te, _a = P, Sn(t), o & 8192)
          e: for (a = t.stateNode, a._visibility = c ? a._visibility & -2 : a._visibility | 1, c && (r === null || T || _a || bt || Vi(t)), r = null, a = t; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (r === null) {
                T = r = a;
                try {
                  if (d = T.stateNode, c)
                    y = d.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    x = T.stateNode;
                    var re = T.memoizedProps.style, G = re != null && re.hasOwnProperty("display") ? re.display : null;
                    x.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (F) {
                  et(T, T.return, F);
                }
              }
            } else if (a.tag === 6) {
              if (r === null) {
                T = a;
                try {
                  T.stateNode.nodeValue = c ? "" : T.memoizedProps;
                } catch (F) {
                  et(T, T.return, F);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === t) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === t) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === t) break e;
              r === a && (r = null), a = a.return;
            }
            r === a && (r = null), a.sibling.return = a.return, a = a.sibling;
          }
        o & 4 && (o = t.updateQueue, o !== null && (r = o.retryQueue, r !== null && (o.retryQueue = null, Df(t, r))));
        break;
      case 19:
        xn(a, t), Sn(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Df(t, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        xn(a, t), Sn(t);
    }
  }
  function Sn(t) {
    var a = t.flags;
    if (a & 2) {
      try {
        for (var r, o = t.return; o !== null; ) {
          if (Ev(o)) {
            r = o;
            break;
          }
          o = o.return;
        }
        if (r == null) throw Error(s(160));
        switch (r.tag) {
          case 27:
            var c = r.stateNode, d = _f(t);
            Vl(t, d, c);
            break;
          case 5:
            var y = r.stateNode;
            r.flags & 32 && (lr(y, ""), r.flags &= -33);
            var x = _f(t);
            Vl(t, x, y);
            break;
          case 3:
          case 4:
            var T = r.stateNode.containerInfo, P = _f(t);
            Cf(
              t,
              P,
              T
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (te) {
        et(t, t.return, te);
      }
      t.flags &= -3;
    }
    a & 4096 && (t.flags &= -4097);
  }
  function zv(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var a = t;
        zv(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), t = t.sibling;
      }
  }
  function Ia(t, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        _v(t, a.alternate, a), a = a.sibling;
  }
  function Vi(t) {
    for (t = t.child; t !== null; ) {
      var a = t;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ka(4, a, a.return), Vi(a);
          break;
        case 1:
          ta(a, a.return);
          var r = a.stateNode;
          typeof r.componentWillUnmount == "function" && Sv(
            a,
            a.return,
            r
          ), Vi(a);
          break;
        case 27:
          eo(a.stateNode);
        case 26:
        case 5:
          ta(a, a.return), Vi(a);
          break;
        case 22:
          a.memoizedState === null && Vi(a);
          break;
        case 30:
          Vi(a);
          break;
        default:
          Vi(a);
      }
      t = t.sibling;
    }
  }
  function Xa(t, a, r) {
    for (r = r && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var o = a.alternate, c = t, d = a, y = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Xa(
            c,
            d,
            r
          ), Gs(4, d);
          break;
        case 1:
          if (Xa(
            c,
            d,
            r
          ), o = d, c = o.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (P) {
              et(o, o.return, P);
            }
          if (o = d, c = o.updateQueue, c !== null) {
            var x = o.stateNode;
            try {
              var T = c.shared.hiddenCallbacks;
              if (T !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < T.length; c++)
                  sg(T[c], x);
            } catch (P) {
              et(o, o.return, P);
            }
          }
          r && y & 64 && xv(d), Ys(d, d.return);
          break;
        case 27:
          Tv(d);
        case 26:
        case 5:
          Xa(
            c,
            d,
            r
          ), r && o === null && y & 4 && wv(d), Ys(d, d.return);
          break;
        case 12:
          Xa(
            c,
            d,
            r
          );
          break;
        case 13:
          Xa(
            c,
            d,
            r
          ), r && y & 4 && Dv(c, d);
          break;
        case 22:
          d.memoizedState === null && Xa(
            c,
            d,
            r
          ), Ys(d, d.return);
          break;
        case 30:
          break;
        default:
          Xa(
            c,
            d,
            r
          );
      }
      a = a.sibling;
    }
  }
  function Rf(t, a) {
    var r = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), t = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (t = a.memoizedState.cachePool.pool), t !== r && (t != null && t.refCount++, r != null && Rs(r));
  }
  function zf(t, a) {
    t = null, a.alternate !== null && (t = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== t && (a.refCount++, t != null && Rs(t));
  }
  function na(t, a, r, o) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        kv(
          t,
          a,
          r,
          o
        ), a = a.sibling;
  }
  function kv(t, a, r, o) {
    var c = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        na(
          t,
          a,
          r,
          o
        ), c & 2048 && Gs(9, a);
        break;
      case 1:
        na(
          t,
          a,
          r,
          o
        );
        break;
      case 3:
        na(
          t,
          a,
          r,
          o
        ), c & 2048 && (t = null, a.alternate !== null && (t = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== t && (a.refCount++, t != null && Rs(t)));
        break;
      case 12:
        if (c & 2048) {
          na(
            t,
            a,
            r,
            o
          ), t = a.stateNode;
          try {
            var d = a.memoizedProps, y = d.id, x = d.onPostCommit;
            typeof x == "function" && x(
              y,
              a.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (T) {
            et(a, a.return, T);
          }
        } else
          na(
            t,
            a,
            r,
            o
          );
        break;
      case 13:
        na(
          t,
          a,
          r,
          o
        );
        break;
      case 23:
        break;
      case 22:
        d = a.stateNode, y = a.alternate, a.memoizedState !== null ? d._visibility & 2 ? na(
          t,
          a,
          r,
          o
        ) : Fs(t, a) : d._visibility & 2 ? na(
          t,
          a,
          r,
          o
        ) : (d._visibility |= 2, Cr(
          t,
          a,
          r,
          o,
          (a.subtreeFlags & 10256) !== 0
        )), c & 2048 && Rf(y, a);
        break;
      case 24:
        na(
          t,
          a,
          r,
          o
        ), c & 2048 && zf(a.alternate, a);
        break;
      default:
        na(
          t,
          a,
          r,
          o
        );
    }
  }
  function Cr(t, a, r, o, c) {
    for (c = c && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var d = t, y = a, x = r, T = o, P = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Cr(
            d,
            y,
            x,
            T,
            c
          ), Gs(8, y);
          break;
        case 23:
          break;
        case 22:
          var te = y.stateNode;
          y.memoizedState !== null ? te._visibility & 2 ? Cr(
            d,
            y,
            x,
            T,
            c
          ) : Fs(
            d,
            y
          ) : (te._visibility |= 2, Cr(
            d,
            y,
            x,
            T,
            c
          )), c && P & 2048 && Rf(
            y.alternate,
            y
          );
          break;
        case 24:
          Cr(
            d,
            y,
            x,
            T,
            c
          ), c && P & 2048 && zf(y.alternate, y);
          break;
        default:
          Cr(
            d,
            y,
            x,
            T,
            c
          );
      }
      a = a.sibling;
    }
  }
  function Fs(t, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var r = t, o = a, c = o.flags;
        switch (o.tag) {
          case 22:
            Fs(r, o), c & 2048 && Rf(
              o.alternate,
              o
            );
            break;
          case 24:
            Fs(r, o), c & 2048 && zf(o.alternate, o);
            break;
          default:
            Fs(r, o);
        }
        a = a.sibling;
      }
  }
  var qs = 8192;
  function Mr(t) {
    if (t.subtreeFlags & qs)
      for (t = t.child; t !== null; )
        Ov(t), t = t.sibling;
  }
  function Ov(t) {
    switch (t.tag) {
      case 26:
        Mr(t), t.flags & qs && t.memoizedState !== null && i2(
          qn,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Mr(t);
        break;
      case 3:
      case 4:
        var a = qn;
        qn = ql(t.stateNode.containerInfo), Mr(t), qn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = qs, qs = 16777216, Mr(t), qs = a) : Mr(t));
        break;
      default:
        Mr(t);
    }
  }
  function Vv(t) {
    var a = t.alternate;
    if (a !== null && (t = a.child, t !== null)) {
      a.child = null;
      do
        a = t.sibling, t.sibling = null, t = a;
      while (t !== null);
    }
  }
  function Ks(t) {
    var a = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (a !== null)
        for (var r = 0; r < a.length; r++) {
          var o = a[r];
          Pt = o, Nv(
            o,
            t
          );
        }
      Vv(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $v(t), t = t.sibling;
  }
  function $v(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ks(t), t.flags & 2048 && Ka(9, t, t.return);
        break;
      case 3:
        Ks(t);
        break;
      case 12:
        Ks(t);
        break;
      case 22:
        var a = t.stateNode;
        t.memoizedState !== null && a._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (a._visibility &= -3, $l(t)) : Ks(t);
        break;
      default:
        Ks(t);
    }
  }
  function $l(t) {
    var a = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (a !== null)
        for (var r = 0; r < a.length; r++) {
          var o = a[r];
          Pt = o, Nv(
            o,
            t
          );
        }
      Vv(t);
    }
    for (t = t.child; t !== null; ) {
      switch (a = t, a.tag) {
        case 0:
        case 11:
        case 15:
          Ka(8, a, a.return), $l(a);
          break;
        case 22:
          r = a.stateNode, r._visibility & 2 && (r._visibility &= -3, $l(a));
          break;
        default:
          $l(a);
      }
      t = t.sibling;
    }
  }
  function Nv(t, a) {
    for (; Pt !== null; ) {
      var r = Pt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ka(8, r, a);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var o = r.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Rs(r.memoizedState.cache);
      }
      if (o = r.child, o !== null) o.return = r, Pt = o;
      else
        e: for (r = t; Pt !== null; ) {
          o = Pt;
          var c = o.sibling, d = o.return;
          if (Cv(o), o === r) {
            Pt = null;
            break e;
          }
          if (c !== null) {
            c.return = d, Pt = c;
            break e;
          }
          Pt = d;
        }
    }
  }
  var xT = {
    getCacheForType: function(t) {
      var a = Qt(kt), r = a.data.get(t);
      return r === void 0 && (r = t(), a.data.set(t, r)), r;
    }
  }, ST = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, nt = null, Ue = null, He = 0, Ke = 0, wn = null, Qa = !1, Dr = !1, kf = !1, Ma = 0, ht = 0, Ja = 0, $i = 0, Of = 0, Ln = 0, Rr = 0, Is = null, hn = null, Vf = !1, $f = 0, Nl = 1 / 0, jl = null, Wa = null, Kt = 0, ei = null, zr = null, kr = 0, Nf = 0, jf = null, jv = null, Xs = 0, Lf = null;
  function En() {
    if ((qe & 2) !== 0 && He !== 0)
      return He & -He;
    if (S.T !== null) {
      var t = br;
      return t !== 0 ? t : Yf();
    }
    return bi();
  }
  function Lv() {
    Ln === 0 && (Ln = (He & 536870912) === 0 || Fe ? Yn() : 536870912);
    var t = jn.current;
    return t !== null && (t.flags |= 32), Ln;
  }
  function Tn(t, a, r) {
    (t === nt && (Ke === 2 || Ke === 9) || t.cancelPendingCommit !== null) && (Or(t, 0), ti(
      t,
      He,
      Ln,
      !1
    )), Ua(t, r), ((qe & 2) === 0 || t !== nt) && (t === nt && ((qe & 2) === 0 && ($i |= r), ht === 4 && ti(
      t,
      He,
      Ln,
      !1
    )), aa(t));
  }
  function Uv(t, a, r) {
    if ((qe & 6) !== 0) throw Error(s(327));
    var o = !r && (a & 124) === 0 && (a & t.expiredLanes) === 0 || ha(t, a), c = o ? TT(t, a) : Pf(t, a, !0), d = o;
    do {
      if (c === 0) {
        Dr && !o && ti(t, a, 0, !1);
        break;
      } else {
        if (r = t.current.alternate, d && !wT(r)) {
          c = Pf(t, a, !1), d = !1;
          continue;
        }
        if (c === 2) {
          if (d = a, t.errorRecoveryDisabledLanes & d)
            var y = 0;
          else
            y = t.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            a = y;
            e: {
              var x = t;
              c = Is;
              var T = x.current.memoizedState.isDehydrated;
              if (T && (Or(x, y).flags |= 256), y = Pf(
                x,
                y,
                !1
              ), y !== 2) {
                if (kf && !T) {
                  x.errorRecoveryDisabledLanes |= d, $i |= d, c = 4;
                  break e;
                }
                d = hn, hn = c, d !== null && (hn === null ? hn = d : hn.push.apply(
                  hn,
                  d
                ));
              }
              c = y;
            }
            if (d = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          Or(t, 0), ti(t, a, 0, !0);
          break;
        }
        e: {
          switch (o = t, d = c, d) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              ti(
                o,
                a,
                Ln,
                !Qa
              );
              break e;
            case 2:
              hn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((a & 62914560) === a && (c = $f + 300 - Tt(), 10 < c)) {
            if (ti(
              o,
              a,
              Ln,
              !Qa
            ), Jn(o, 0, !0) !== 0) break e;
            o.timeoutHandle = my(
              Bv.bind(
                null,
                o,
                r,
                hn,
                jl,
                Vf,
                a,
                Ln,
                $i,
                Rr,
                Qa,
                d,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          Bv(
            o,
            r,
            hn,
            jl,
            Vf,
            a,
            Ln,
            $i,
            Rr,
            Qa,
            d,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    aa(t);
  }
  function Bv(t, a, r, o, c, d, y, x, T, P, te, re, G, F) {
    if (t.timeoutHandle = -1, re = a.subtreeFlags, (re & 8192 || (re & 16785408) === 16785408) && (ao = { stylesheets: null, count: 0, unsuspend: a2 }, Ov(a), re = r2(), re !== null)) {
      t.cancelPendingCommit = re(
        qv.bind(
          null,
          t,
          a,
          d,
          r,
          o,
          c,
          y,
          x,
          T,
          te,
          1,
          G,
          F
        )
      ), ti(t, d, y, !P);
      return;
    }
    qv(
      t,
      a,
      d,
      r,
      o,
      c,
      y,
      x,
      T
    );
  }
  function wT(t) {
    for (var a = t; ; ) {
      var r = a.tag;
      if ((r === 0 || r === 11 || r === 15) && a.flags & 16384 && (r = a.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var o = 0; o < r.length; o++) {
          var c = r[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!yn(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (r = a.child, a.subtreeFlags & 16384 && r !== null)
        r.return = a, a = r;
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
  function ti(t, a, r, o) {
    a &= ~Of, a &= ~$i, t.suspendedLanes |= a, t.pingedLanes &= ~a, o && (t.warmLanes |= a), o = t.expirationTimes;
    for (var c = a; 0 < c; ) {
      var d = 31 - Ge(c), y = 1 << d;
      o[d] = -1, c &= ~y;
    }
    r !== 0 && Oe(t, r, a);
  }
  function Ll() {
    return (qe & 6) === 0 ? (Qs(0), !1) : !0;
  }
  function Uf() {
    if (Ue !== null) {
      if (Ke === 0)
        var t = Ue.return;
      else
        t = Ue, xa = Di = null, tf(t), Ar = null, Ps = 0, t = Ue;
      for (; t !== null; )
        bv(t.alternate, t), t = t.return;
      Ue = null;
    }
  }
  function Or(t, a) {
    var r = t.timeoutHandle;
    r !== -1 && (t.timeoutHandle = -1, BT(r)), r = t.cancelPendingCommit, r !== null && (t.cancelPendingCommit = null, r()), Uf(), nt = t, Ue = r = va(t.current, null), He = a, Ke = 0, wn = null, Qa = !1, Dr = ha(t, a), kf = !1, Rr = Ln = Of = $i = Ja = ht = 0, hn = Is = null, Vf = !1, (a & 8) !== 0 && (a |= a & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= a; 0 < o; ) {
        var c = 31 - Ge(o), d = 1 << c;
        a |= t[c], o &= ~d;
      }
    return Ma = a, sl(), r;
  }
  function Pv(t, a) {
    Ne = null, S.H = Al, a === ks || a === pl ? (a = ig(), Ke = 3) : a === tg ? (a = ig(), Ke = 4) : Ke = a === rv ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, wn = a, Ue === null && (ht = 1, Rl(
      t,
      On(a, t.current)
    ));
  }
  function Hv() {
    var t = S.H;
    return S.H = Al, t === null ? Al : t;
  }
  function Zv() {
    var t = S.A;
    return S.A = xT, t;
  }
  function Bf() {
    ht = 4, Qa || (He & 4194048) !== He && jn.current !== null || (Dr = !0), (Ja & 134217727) === 0 && ($i & 134217727) === 0 || nt === null || ti(
      nt,
      He,
      Ln,
      !1
    );
  }
  function Pf(t, a, r) {
    var o = qe;
    qe |= 2;
    var c = Hv(), d = Zv();
    (nt !== t || He !== a) && (jl = null, Or(t, a)), a = !1;
    var y = ht;
    e: do
      try {
        if (Ke !== 0 && Ue !== null) {
          var x = Ue, T = wn;
          switch (Ke) {
            case 8:
              Uf(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              jn.current === null && (a = !0);
              var P = Ke;
              if (Ke = 0, wn = null, Vr(t, x, T, P), r && Dr) {
                y = 0;
                break e;
              }
              break;
            default:
              P = Ke, Ke = 0, wn = null, Vr(t, x, T, P);
          }
        }
        ET(), y = ht;
        break;
      } catch (te) {
        Pv(t, te);
      }
    while (!0);
    return a && t.shellSuspendCounter++, xa = Di = null, qe = o, S.H = c, S.A = d, Ue === null && (nt = null, He = 0, sl()), y;
  }
  function ET() {
    for (; Ue !== null; ) Gv(Ue);
  }
  function TT(t, a) {
    var r = qe;
    qe |= 2;
    var o = Hv(), c = Zv();
    nt !== t || He !== a ? (jl = null, Nl = Tt() + 500, Or(t, a)) : Dr = ha(
      t,
      a
    );
    e: do
      try {
        if (Ke !== 0 && Ue !== null) {
          a = Ue;
          var d = wn;
          t: switch (Ke) {
            case 1:
              Ke = 0, wn = null, Vr(t, a, d, 1);
              break;
            case 2:
            case 9:
              if (ng(d)) {
                Ke = 0, wn = null, Yv(a);
                break;
              }
              a = function() {
                Ke !== 2 && Ke !== 9 || nt !== t || (Ke = 7), aa(t);
              }, d.then(a, a);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              ng(d) ? (Ke = 0, wn = null, Yv(a)) : (Ke = 0, wn = null, Vr(t, a, d, 7));
              break;
            case 5:
              var y = null;
              switch (Ue.tag) {
                case 26:
                  y = Ue.memoizedState;
                case 5:
                case 27:
                  var x = Ue;
                  if (!y || _y(y)) {
                    Ke = 0, wn = null;
                    var T = x.sibling;
                    if (T !== null) Ue = T;
                    else {
                      var P = x.return;
                      P !== null ? (Ue = P, Ul(P)) : Ue = null;
                    }
                    break t;
                  }
              }
              Ke = 0, wn = null, Vr(t, a, d, 5);
              break;
            case 6:
              Ke = 0, wn = null, Vr(t, a, d, 6);
              break;
            case 8:
              Uf(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        AT();
        break;
      } catch (te) {
        Pv(t, te);
      }
    while (!0);
    return xa = Di = null, S.H = o, S.A = c, qe = r, Ue !== null ? 0 : (nt = null, He = 0, sl(), ht);
  }
  function AT() {
    for (; Ue !== null && !Na(); )
      Gv(Ue);
  }
  function Gv(t) {
    var a = vv(t.alternate, t, Ma);
    t.memoizedProps = t.pendingProps, a === null ? Ul(t) : Ue = a;
  }
  function Yv(t) {
    var a = t, r = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = fv(
          r,
          a,
          a.pendingProps,
          a.type,
          void 0,
          He
        );
        break;
      case 11:
        a = fv(
          r,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          He
        );
        break;
      case 5:
        tf(a);
      default:
        bv(r, a), a = Ue = Fp(a, Ma), a = vv(r, a, Ma);
    }
    t.memoizedProps = t.pendingProps, a === null ? Ul(t) : Ue = a;
  }
  function Vr(t, a, r, o) {
    xa = Di = null, tf(a), Ar = null, Ps = 0;
    var c = a.return;
    try {
      if (mT(
        t,
        c,
        a,
        r,
        He
      )) {
        ht = 1, Rl(
          t,
          On(r, t.current)
        ), Ue = null;
        return;
      }
    } catch (d) {
      if (c !== null) throw Ue = c, d;
      ht = 1, Rl(
        t,
        On(r, t.current)
      ), Ue = null;
      return;
    }
    a.flags & 32768 ? (Fe || o === 1 ? t = !0 : Dr || (He & 536870912) !== 0 ? t = !1 : (Qa = t = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = jn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Fv(a, t)) : Ul(a);
  }
  function Ul(t) {
    var a = t;
    do {
      if ((a.flags & 32768) !== 0) {
        Fv(
          a,
          Qa
        );
        return;
      }
      t = a.return;
      var r = gT(
        a.alternate,
        a,
        Ma
      );
      if (r !== null) {
        Ue = r;
        return;
      }
      if (a = a.sibling, a !== null) {
        Ue = a;
        return;
      }
      Ue = a = t;
    } while (a !== null);
    ht === 0 && (ht = 5);
  }
  function Fv(t, a) {
    do {
      var r = vT(t.alternate, t);
      if (r !== null) {
        r.flags &= 32767, Ue = r;
        return;
      }
      if (r = t.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !a && (t = t.sibling, t !== null)) {
        Ue = t;
        return;
      }
      Ue = t = r;
    } while (t !== null);
    ht = 6, Ue = null;
  }
  function qv(t, a, r, o, c, d, y, x, T) {
    t.cancelPendingCommit = null;
    do
      Bl();
    while (Kt !== 0);
    if ((qe & 6) !== 0) throw Error(s(327));
    if (a !== null) {
      if (a === t.current) throw Error(s(177));
      if (d = a.lanes | a.childLanes, d |= Rc, Ko(
        t,
        r,
        d,
        y,
        x,
        T
      ), t === nt && (Ue = nt = null, He = 0), zr = a, ei = t, kr = r, Nf = d, jf = c, jv = o, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, DT(B, function() {
        return Jv(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), o = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || o) {
        o = S.T, S.T = null, c = O.p, O.p = 2, y = qe, qe |= 4;
        try {
          yT(t, a);
        } finally {
          qe = y, O.p = c, S.T = o;
        }
      }
      Kt = 1, Kv(), Iv(), Xv();
    }
  }
  function Kv() {
    if (Kt === 1) {
      Kt = 0;
      var t = ei, a = zr, r = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || r) {
        r = S.T, S.T = null;
        var o = O.p;
        O.p = 2;
        var c = qe;
        qe |= 4;
        try {
          Rv(a, t);
          var d = Wf, y = Np(t.containerInfo), x = d.focusedElem, T = d.selectionRange;
          if (y !== x && x && x.ownerDocument && $p(
            x.ownerDocument.documentElement,
            x
          )) {
            if (T !== null && Ac(x)) {
              var P = T.start, te = T.end;
              if (te === void 0 && (te = P), "selectionStart" in x)
                x.selectionStart = P, x.selectionEnd = Math.min(
                  te,
                  x.value.length
                );
              else {
                var re = x.ownerDocument || document, G = re && re.defaultView || window;
                if (G.getSelection) {
                  var F = G.getSelection(), Re = x.textContent.length, Ce = Math.min(T.start, Re), Je = T.end === void 0 ? Ce : Math.min(T.end, Re);
                  !F.extend && Ce > Je && (y = Je, Je = Ce, Ce = y);
                  var V = Vp(
                    x,
                    Ce
                  ), D = Vp(
                    x,
                    Je
                  );
                  if (V && D && (F.rangeCount !== 1 || F.anchorNode !== V.node || F.anchorOffset !== V.offset || F.focusNode !== D.node || F.focusOffset !== D.offset)) {
                    var U = re.createRange();
                    U.setStart(V.node, V.offset), F.removeAllRanges(), Ce > Je ? (F.addRange(U), F.extend(D.node, D.offset)) : (U.setEnd(D.node, D.offset), F.addRange(U));
                  }
                }
              }
            }
            for (re = [], F = x; F = F.parentNode; )
              F.nodeType === 1 && re.push({
                element: F,
                left: F.scrollLeft,
                top: F.scrollTop
              });
            for (typeof x.focus == "function" && x.focus(), x = 0; x < re.length; x++) {
              var ae = re[x];
              ae.element.scrollLeft = ae.left, ae.element.scrollTop = ae.top;
            }
          }
          Jl = !!Jf, Wf = Jf = null;
        } finally {
          qe = c, O.p = o, S.T = r;
        }
      }
      t.current = a, Kt = 2;
    }
  }
  function Iv() {
    if (Kt === 2) {
      Kt = 0;
      var t = ei, a = zr, r = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || r) {
        r = S.T, S.T = null;
        var o = O.p;
        O.p = 2;
        var c = qe;
        qe |= 4;
        try {
          _v(t, a.alternate, a);
        } finally {
          qe = c, O.p = o, S.T = r;
        }
      }
      Kt = 3;
    }
  }
  function Xv() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0, ja();
      var t = ei, a = zr, r = kr, o = jv;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? Kt = 5 : (Kt = 0, zr = ei = null, Qv(t, t.pendingLanes));
      var c = t.pendingLanes;
      if (c === 0 && (Wa = null), Ft(r), a = a.stateNode, De && typeof De.onCommitFiberRoot == "function")
        try {
          De.onCommitFiberRoot(
            ye,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        a = S.T, c = O.p, O.p = 2, S.T = null;
        try {
          for (var d = t.onRecoverableError, y = 0; y < o.length; y++) {
            var x = o[y];
            d(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          S.T = a, O.p = c;
        }
      }
      (kr & 3) !== 0 && Bl(), aa(t), c = t.pendingLanes, (r & 4194090) !== 0 && (c & 42) !== 0 ? t === Lf ? Xs++ : (Xs = 0, Lf = t) : Xs = 0, Qs(0);
    }
  }
  function Qv(t, a) {
    (t.pooledCacheLanes &= a) === 0 && (a = t.pooledCache, a != null && (t.pooledCache = null, Rs(a)));
  }
  function Bl(t) {
    return Kv(), Iv(), Xv(), Jv();
  }
  function Jv() {
    if (Kt !== 5) return !1;
    var t = ei, a = Nf;
    Nf = 0;
    var r = Ft(kr), o = S.T, c = O.p;
    try {
      O.p = 32 > r ? 32 : r, S.T = null, r = jf, jf = null;
      var d = ei, y = kr;
      if (Kt = 0, zr = ei = null, kr = 0, (qe & 6) !== 0) throw Error(s(331));
      var x = qe;
      if (qe |= 4, $v(d.current), kv(
        d,
        d.current,
        y,
        r
      ), qe = x, Qs(0), De && typeof De.onPostCommitFiberRoot == "function")
        try {
          De.onPostCommitFiberRoot(ye, d);
        } catch {
        }
      return !0;
    } finally {
      O.p = c, S.T = o, Qv(t, a);
    }
  }
  function Wv(t, a, r) {
    a = On(r, a), a = gf(t.stateNode, a, 2), t = Ga(t, a, 2), t !== null && (Ua(t, 2), aa(t));
  }
  function et(t, a, r) {
    if (t.tag === 3)
      Wv(t, t, r);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Wv(
            a,
            t,
            r
          );
          break;
        } else if (a.tag === 1) {
          var o = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Wa === null || !Wa.has(o))) {
            t = On(r, t), r = av(2), o = Ga(a, r, 2), o !== null && (iv(
              r,
              o,
              a,
              t
            ), Ua(o, 2), aa(o));
            break;
          }
        }
        a = a.return;
      }
  }
  function Hf(t, a, r) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new ST();
      var c = /* @__PURE__ */ new Set();
      o.set(a, c);
    } else
      c = o.get(a), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(a, c));
    c.has(r) || (kf = !0, c.add(r), t = _T.bind(null, t, a, r), a.then(t, t));
  }
  function _T(t, a, r) {
    var o = t.pingCache;
    o !== null && o.delete(a), t.pingedLanes |= t.suspendedLanes & r, t.warmLanes &= ~r, nt === t && (He & r) === r && (ht === 4 || ht === 3 && (He & 62914560) === He && 300 > Tt() - $f ? (qe & 2) === 0 && Or(t, 0) : Of |= r, Rr === He && (Rr = 0)), aa(t);
  }
  function ey(t, a) {
    a === 0 && (a = qo()), t = pr(t, a), t !== null && (Ua(t, a), aa(t));
  }
  function CT(t) {
    var a = t.memoizedState, r = 0;
    a !== null && (r = a.retryLane), ey(t, r);
  }
  function MT(t, a) {
    var r = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode, c = t.memoizedState;
        c !== null && (r = c.retryLane);
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
    o !== null && o.delete(a), ey(t, r);
  }
  function DT(t, a) {
    return Yt(t, a);
  }
  var Pl = null, $r = null, Zf = !1, Hl = !1, Gf = !1, Ni = 0;
  function aa(t) {
    t !== $r && t.next === null && ($r === null ? Pl = $r = t : $r = $r.next = t), Hl = !0, Zf || (Zf = !0, zT());
  }
  function Qs(t, a) {
    if (!Gf && Hl) {
      Gf = !0;
      do
        for (var r = !1, o = Pl; o !== null; ) {
          if (t !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var y = o.suspendedLanes, x = o.pingedLanes;
              d = (1 << 31 - Ge(42 | t) + 1) - 1, d &= c & ~(y & ~x), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (r = !0, iy(o, d));
          } else
            d = He, d = Jn(
              o,
              o === nt ? d : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (d & 3) === 0 || ha(o, d) || (r = !0, iy(o, d));
          o = o.next;
        }
      while (r);
      Gf = !1;
    }
  }
  function RT() {
    ty();
  }
  function ty() {
    Hl = Zf = !1;
    var t = 0;
    Ni !== 0 && (UT() && (t = Ni), Ni = 0);
    for (var a = Tt(), r = null, o = Pl; o !== null; ) {
      var c = o.next, d = ny(o, a);
      d === 0 ? (o.next = null, r === null ? Pl = c : r.next = c, c === null && ($r = r)) : (r = o, (t !== 0 || (d & 3) !== 0) && (Hl = !0)), o = c;
    }
    Qs(t);
  }
  function ny(t, a) {
    for (var r = t.suspendedLanes, o = t.pingedLanes, c = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d; ) {
      var y = 31 - Ge(d), x = 1 << y, T = c[y];
      T === -1 ? ((x & r) === 0 || (x & o) !== 0) && (c[y] = La(x, a)) : T <= a && (t.expiredLanes |= x), d &= ~x;
    }
    if (a = nt, r = He, r = Jn(
      t,
      t === a ? r : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), o = t.callbackNode, r === 0 || t === a && (Ke === 2 || Ke === 9) || t.cancelPendingCommit !== null)
      return o !== null && o !== null && un(o), t.callbackNode = null, t.callbackPriority = 0;
    if ((r & 3) === 0 || ha(t, r)) {
      if (a = r & -r, a === t.callbackPriority) return a;
      switch (o !== null && un(o), Ft(r)) {
        case 2:
        case 8:
          r = C;
          break;
        case 32:
          r = B;
          break;
        case 268435456:
          r = he;
          break;
        default:
          r = B;
      }
      return o = ay.bind(null, t), r = Yt(r, o), t.callbackPriority = a, t.callbackNode = r, a;
    }
    return o !== null && o !== null && un(o), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function ay(t, a) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var r = t.callbackNode;
    if (Bl() && t.callbackNode !== r)
      return null;
    var o = He;
    return o = Jn(
      t,
      t === nt ? o : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), o === 0 ? null : (Uv(t, o, a), ny(t, Tt()), t.callbackNode != null && t.callbackNode === r ? ay.bind(null, t) : null);
  }
  function iy(t, a) {
    if (Bl()) return null;
    Uv(t, a, !0);
  }
  function zT() {
    PT(function() {
      (qe & 6) !== 0 ? Yt(
        jt,
        RT
      ) : ty();
    });
  }
  function Yf() {
    return Ni === 0 && (Ni = Yn()), Ni;
  }
  function ry(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Wo("" + t);
  }
  function sy(t, a) {
    var r = a.ownerDocument.createElement("input");
    return r.name = a.name, r.value = a.value, t.id && r.setAttribute("form", t.id), a.parentNode.insertBefore(r, a), t = new FormData(t), r.parentNode.removeChild(r), t;
  }
  function kT(t, a, r, o, c) {
    if (a === "submit" && r && r.stateNode === c) {
      var d = ry(
        (c[tt] || null).action
      ), y = o.submitter;
      y && (a = (a = y[tt] || null) ? ry(a.formAction) : y.getAttribute("formAction"), a !== null && (d = a, y = null));
      var x = new al(
        "action",
        "action",
        null,
        o,
        c
      );
      t.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Ni !== 0) {
                  var T = y ? sy(c, y) : new FormData(c);
                  ff(
                    r,
                    {
                      pending: !0,
                      data: T,
                      method: c.method,
                      action: d
                    },
                    null,
                    T
                  );
                }
              } else
                typeof d == "function" && (x.preventDefault(), T = y ? sy(c, y) : new FormData(c), ff(
                  r,
                  {
                    pending: !0,
                    data: T,
                    method: c.method,
                    action: d
                  },
                  d,
                  T
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Ff = 0; Ff < Dc.length; Ff++) {
    var qf = Dc[Ff], OT = qf.toLowerCase(), VT = qf[0].toUpperCase() + qf.slice(1);
    Fn(
      OT,
      "on" + VT
    );
  }
  Fn(Up, "onAnimationEnd"), Fn(Bp, "onAnimationIteration"), Fn(Pp, "onAnimationStart"), Fn("dblclick", "onDoubleClick"), Fn("focusin", "onFocus"), Fn("focusout", "onBlur"), Fn(QE, "onTransitionRun"), Fn(JE, "onTransitionStart"), Fn(WE, "onTransitionCancel"), Fn(Hp, "onTransitionEnd"), rr("onMouseEnter", ["mouseout", "mouseover"]), rr("onMouseLeave", ["mouseout", "mouseover"]), rr("onPointerEnter", ["pointerout", "pointerover"]), rr("onPointerLeave", ["pointerout", "pointerover"]), xi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Js = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $T = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Js)
  );
  function oy(t, a) {
    a = (a & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
      var o = t[r], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (a)
          for (var y = o.length - 1; 0 <= y; y--) {
            var x = o[y], T = x.instance, P = x.currentTarget;
            if (x = x.listener, T !== d && c.isPropagationStopped())
              break e;
            d = x, c.currentTarget = P;
            try {
              d(c);
            } catch (te) {
              Dl(te);
            }
            c.currentTarget = null, d = T;
          }
        else
          for (y = 0; y < o.length; y++) {
            if (x = o[y], T = x.instance, P = x.currentTarget, x = x.listener, T !== d && c.isPropagationStopped())
              break e;
            d = x, c.currentTarget = P;
            try {
              d(c);
            } catch (te) {
              Dl(te);
            }
            c.currentTarget = null, d = T;
          }
      }
    }
  }
  function Be(t, a) {
    var r = a[tr];
    r === void 0 && (r = a[tr] = /* @__PURE__ */ new Set());
    var o = t + "__bubble";
    r.has(o) || (ly(a, t, 2, !1), r.add(o));
  }
  function Kf(t, a, r) {
    var o = 0;
    a && (o |= 4), ly(
      r,
      t,
      o,
      a
    );
  }
  var Zl = "_reactListening" + Math.random().toString(36).slice(2);
  function If(t) {
    if (!t[Zl]) {
      t[Zl] = !0, tp.forEach(function(r) {
        r !== "selectionchange" && ($T.has(r) || Kf(r, !1, t), Kf(r, !0, t));
      });
      var a = t.nodeType === 9 ? t : t.ownerDocument;
      a === null || a[Zl] || (a[Zl] = !0, Kf("selectionchange", !1, a));
    }
  }
  function ly(t, a, r, o) {
    switch (ky(a)) {
      case 2:
        var c = l2;
        break;
      case 8:
        c = u2;
        break;
      default:
        c = ud;
    }
    r = c.bind(
      null,
      a,
      r,
      t
    ), c = void 0, !gc || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (c = !0), o ? c !== void 0 ? t.addEventListener(a, r, {
      capture: !0,
      passive: c
    }) : t.addEventListener(a, r, !0) : c !== void 0 ? t.addEventListener(a, r, {
      passive: c
    }) : t.addEventListener(a, r, !1);
  }
  function Xf(t, a, r, o, c) {
    var d = o;
    if ((a & 1) === 0 && (a & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var x = o.stateNode.containerInfo;
          if (x === c) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var T = y.tag;
              if ((T === 3 || T === 4) && y.stateNode.containerInfo === c)
                return;
              y = y.return;
            }
          for (; x !== null; ) {
            if (y = nr(x), y === null) return;
            if (T = y.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              o = d = y;
              continue e;
            }
            x = x.parentNode;
          }
        }
        o = o.return;
      }
    pp(function() {
      var P = d, te = mc(r), re = [];
      e: {
        var G = Zp.get(t);
        if (G !== void 0) {
          var F = al, Re = t;
          switch (t) {
            case "keypress":
              if (tl(r) === 0) break e;
            case "keydown":
            case "keyup":
              F = DE;
              break;
            case "focusin":
              Re = "focus", F = xc;
              break;
            case "focusout":
              Re = "blur", F = xc;
              break;
            case "beforeblur":
            case "afterblur":
              F = xc;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = yp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = vE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = kE;
              break;
            case Up:
            case Bp:
            case Pp:
              F = xE;
              break;
            case Hp:
              F = VE;
              break;
            case "scroll":
            case "scrollend":
              F = pE;
              break;
            case "wheel":
              F = NE;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = wE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = xp;
              break;
            case "toggle":
            case "beforetoggle":
              F = LE;
          }
          var Ce = (a & 4) !== 0, Je = !Ce && (t === "scroll" || t === "scrollend"), V = Ce ? G !== null ? G + "Capture" : null : G;
          Ce = [];
          for (var D = P, U; D !== null; ) {
            var ae = D;
            if (U = ae.stateNode, ae = ae.tag, ae !== 5 && ae !== 26 && ae !== 27 || U === null || V === null || (ae = vs(D, V), ae != null && Ce.push(
              Ws(D, ae, U)
            )), Je) break;
            D = D.return;
          }
          0 < Ce.length && (G = new F(
            G,
            Re,
            null,
            r,
            te
          ), re.push({ event: G, listeners: Ce }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (G = t === "mouseover" || t === "pointerover", F = t === "mouseout" || t === "pointerout", G && r !== hc && (Re = r.relatedTarget || r.fromElement) && (nr(Re) || Re[Lt]))
            break e;
          if ((F || G) && (G = te.window === te ? te : (G = te.ownerDocument) ? G.defaultView || G.parentWindow : window, F ? (Re = r.relatedTarget || r.toElement, F = P, Re = Re ? nr(Re) : null, Re !== null && (Je = u(Re), Ce = Re.tag, Re !== Je || Ce !== 5 && Ce !== 27 && Ce !== 6) && (Re = null)) : (F = null, Re = P), F !== Re)) {
            if (Ce = yp, ae = "onMouseLeave", V = "onMouseEnter", D = "mouse", (t === "pointerout" || t === "pointerover") && (Ce = xp, ae = "onPointerLeave", V = "onPointerEnter", D = "pointer"), Je = F == null ? G : gs(F), U = Re == null ? G : gs(Re), G = new Ce(
              ae,
              D + "leave",
              F,
              r,
              te
            ), G.target = Je, G.relatedTarget = U, ae = null, nr(te) === P && (Ce = new Ce(
              V,
              D + "enter",
              Re,
              r,
              te
            ), Ce.target = U, Ce.relatedTarget = Je, ae = Ce), Je = ae, F && Re)
              t: {
                for (Ce = F, V = Re, D = 0, U = Ce; U; U = Nr(U))
                  D++;
                for (U = 0, ae = V; ae; ae = Nr(ae))
                  U++;
                for (; 0 < D - U; )
                  Ce = Nr(Ce), D--;
                for (; 0 < U - D; )
                  V = Nr(V), U--;
                for (; D--; ) {
                  if (Ce === V || V !== null && Ce === V.alternate)
                    break t;
                  Ce = Nr(Ce), V = Nr(V);
                }
                Ce = null;
              }
            else Ce = null;
            F !== null && uy(
              re,
              G,
              F,
              Ce,
              !1
            ), Re !== null && Je !== null && uy(
              re,
              Je,
              Re,
              Ce,
              !0
            );
          }
        }
        e: {
          if (G = P ? gs(P) : window, F = G.nodeName && G.nodeName.toLowerCase(), F === "select" || F === "input" && G.type === "file")
            var be = Mp;
          else if (_p(G))
            if (Dp)
              be = KE;
            else {
              be = FE;
              var Le = YE;
            }
          else
            F = G.nodeName, !F || F.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? P && dc(P.elementType) && (be = Mp) : be = qE;
          if (be && (be = be(t, P))) {
            Cp(
              re,
              be,
              r,
              te
            );
            break e;
          }
          Le && Le(t, G, P), t === "focusout" && P && G.type === "number" && P.memoizedProps.value != null && fc(G, "number", G.value);
        }
        switch (Le = P ? gs(P) : window, t) {
          case "focusin":
            (_p(Le) || Le.contentEditable === "true") && (dr = Le, _c = P, As = null);
            break;
          case "focusout":
            As = _c = dr = null;
            break;
          case "mousedown":
            Cc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Cc = !1, jp(re, r, te);
            break;
          case "selectionchange":
            if (XE) break;
          case "keydown":
          case "keyup":
            jp(re, r, te);
        }
        var Ae;
        if (wc)
          e: {
            switch (t) {
              case "compositionstart":
                var Me = "onCompositionStart";
                break e;
              case "compositionend":
                Me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Me = "onCompositionUpdate";
                break e;
            }
            Me = void 0;
          }
        else
          fr ? Tp(t, r) && (Me = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (Me = "onCompositionStart");
        Me && (Sp && r.locale !== "ko" && (fr || Me !== "onCompositionStart" ? Me === "onCompositionEnd" && fr && (Ae = gp()) : (Ba = te, vc = "value" in Ba ? Ba.value : Ba.textContent, fr = !0)), Le = Gl(P, Me), 0 < Le.length && (Me = new bp(
          Me,
          t,
          null,
          r,
          te
        ), re.push({ event: Me, listeners: Le }), Ae ? Me.data = Ae : (Ae = Ap(r), Ae !== null && (Me.data = Ae)))), (Ae = BE ? PE(t, r) : HE(t, r)) && (Me = Gl(P, "onBeforeInput"), 0 < Me.length && (Le = new bp(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          te
        ), re.push({
          event: Le,
          listeners: Me
        }), Le.data = Ae)), kT(
          re,
          t,
          P,
          r,
          te
        );
      }
      oy(re, a);
    });
  }
  function Ws(t, a, r) {
    return {
      instance: t,
      listener: a,
      currentTarget: r
    };
  }
  function Gl(t, a) {
    for (var r = a + "Capture", o = []; t !== null; ) {
      var c = t, d = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || d === null || (c = vs(t, r), c != null && o.unshift(
        Ws(t, c, d)
      ), c = vs(t, a), c != null && o.push(
        Ws(t, c, d)
      )), t.tag === 3) return o;
      t = t.return;
    }
    return [];
  }
  function Nr(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function uy(t, a, r, o, c) {
    for (var d = a._reactName, y = []; r !== null && r !== o; ) {
      var x = r, T = x.alternate, P = x.stateNode;
      if (x = x.tag, T !== null && T === o) break;
      x !== 5 && x !== 26 && x !== 27 || P === null || (T = P, c ? (P = vs(r, d), P != null && y.unshift(
        Ws(r, P, T)
      )) : c || (P = vs(r, d), P != null && y.push(
        Ws(r, P, T)
      ))), r = r.return;
    }
    y.length !== 0 && t.push({ event: a, listeners: y });
  }
  var NT = /\r\n?/g, jT = /\u0000|\uFFFD/g;
  function cy(t) {
    return (typeof t == "string" ? t : "" + t).replace(NT, `
`).replace(jT, "");
  }
  function fy(t, a) {
    return a = cy(a), cy(t) === a;
  }
  function Yl() {
  }
  function Qe(t, a, r, o, c, d) {
    switch (r) {
      case "children":
        typeof o == "string" ? a === "body" || a === "textarea" && o === "" || lr(t, o) : (typeof o == "number" || typeof o == "bigint") && a !== "body" && lr(t, "" + o);
        break;
      case "className":
        Xo(t, "class", o);
        break;
      case "tabIndex":
        Xo(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xo(t, r, o);
        break;
      case "style":
        hp(t, o, d);
        break;
      case "data":
        if (a !== "object") {
          Xo(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (a !== "a" || r !== "href")) {
          t.removeAttribute(r);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(r);
          break;
        }
        o = Wo("" + o), t.setAttribute(r, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (r === "formAction" ? (a !== "input" && Qe(t, a, "name", c.name, c, null), Qe(
            t,
            a,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Qe(
            t,
            a,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Qe(
            t,
            a,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Qe(t, a, "encType", c.encType, c, null), Qe(t, a, "method", c.method, c, null), Qe(t, a, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(r);
          break;
        }
        o = Wo("" + o), t.setAttribute(r, o);
        break;
      case "onClick":
        o != null && (t.onclick = Yl);
        break;
      case "onScroll":
        o != null && Be("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (r = o.__html, r != null) {
            if (c.children != null) throw Error(s(60));
            t.innerHTML = r;
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
        r = Wo("" + o), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          r
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
        o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(r, "" + o) : t.removeAttribute(r);
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
        o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(r, "") : t.removeAttribute(r);
        break;
      case "capture":
      case "download":
        o === !0 ? t.setAttribute(r, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(r, o) : t.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? t.setAttribute(r, o) : t.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(r) : t.setAttribute(r, o);
        break;
      case "popover":
        Be("beforetoggle", t), Be("toggle", t), Io(t, "popover", o);
        break;
      case "xlinkActuate":
        pa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        pa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        pa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        pa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        pa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        pa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        pa(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        pa(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        pa(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        Io(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = hE.get(r) || r, Io(t, r, o));
    }
  }
  function Qf(t, a, r, o, c, d) {
    switch (r) {
      case "style":
        hp(t, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (r = o.__html, r != null) {
            if (c.children != null) throw Error(s(60));
            t.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof o == "string" ? lr(t, o) : (typeof o == "number" || typeof o == "bigint") && lr(t, "" + o);
        break;
      case "onScroll":
        o != null && Be("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Yl);
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
        if (!np.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (c = r.endsWith("Capture"), a = r.slice(2, c ? r.length - 7 : void 0), d = t[tt] || null, d = d != null ? d[r] : null, typeof d == "function" && t.removeEventListener(a, d, c), typeof o == "function")) {
              typeof d != "function" && d !== null && (r in t ? t[r] = null : t.hasAttribute(r) && t.removeAttribute(r)), t.addEventListener(a, o, c);
              break e;
            }
            r in t ? t[r] = o : o === !0 ? t.setAttribute(r, "") : Io(t, r, o);
          }
    }
  }
  function It(t, a, r) {
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
        Be("error", t), Be("load", t);
        var o = !1, c = !1, d;
        for (d in r)
          if (r.hasOwnProperty(d)) {
            var y = r[d];
            if (y != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, a));
                default:
                  Qe(t, a, d, y, r, null);
              }
          }
        c && Qe(t, a, "srcSet", r.srcSet, r, null), o && Qe(t, a, "src", r.src, r, null);
        return;
      case "input":
        Be("invalid", t);
        var x = d = y = c = null, T = null, P = null;
        for (o in r)
          if (r.hasOwnProperty(o)) {
            var te = r[o];
            if (te != null)
              switch (o) {
                case "name":
                  c = te;
                  break;
                case "type":
                  y = te;
                  break;
                case "checked":
                  T = te;
                  break;
                case "defaultChecked":
                  P = te;
                  break;
                case "value":
                  d = te;
                  break;
                case "defaultValue":
                  x = te;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (te != null)
                    throw Error(s(137, a));
                  break;
                default:
                  Qe(t, a, o, te, r, null);
              }
          }
        up(
          t,
          d,
          x,
          T,
          P,
          y,
          c,
          !1
        ), Qo(t);
        return;
      case "select":
        Be("invalid", t), o = y = d = null;
        for (c in r)
          if (r.hasOwnProperty(c) && (x = r[c], x != null))
            switch (c) {
              case "value":
                d = x;
                break;
              case "defaultValue":
                y = x;
                break;
              case "multiple":
                o = x;
              default:
                Qe(t, a, c, x, r, null);
            }
        a = d, r = y, t.multiple = !!o, a != null ? or(t, !!o, a, !1) : r != null && or(t, !!o, r, !0);
        return;
      case "textarea":
        Be("invalid", t), d = c = o = null;
        for (y in r)
          if (r.hasOwnProperty(y) && (x = r[y], x != null))
            switch (y) {
              case "value":
                o = x;
                break;
              case "defaultValue":
                c = x;
                break;
              case "children":
                d = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(s(91));
                break;
              default:
                Qe(t, a, y, x, r, null);
            }
        fp(t, o, c, d), Qo(t);
        return;
      case "option":
        for (T in r)
          if (r.hasOwnProperty(T) && (o = r[T], o != null))
            switch (T) {
              case "selected":
                t.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Qe(t, a, T, o, r, null);
            }
        return;
      case "dialog":
        Be("beforetoggle", t), Be("toggle", t), Be("cancel", t), Be("close", t);
        break;
      case "iframe":
      case "object":
        Be("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Js.length; o++)
          Be(Js[o], t);
        break;
      case "image":
        Be("error", t), Be("load", t);
        break;
      case "details":
        Be("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", t), Be("load", t);
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
        for (P in r)
          if (r.hasOwnProperty(P) && (o = r[P], o != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, a));
              default:
                Qe(t, a, P, o, r, null);
            }
        return;
      default:
        if (dc(a)) {
          for (te in r)
            r.hasOwnProperty(te) && (o = r[te], o !== void 0 && Qf(
              t,
              a,
              te,
              o,
              r,
              void 0
            ));
          return;
        }
    }
    for (x in r)
      r.hasOwnProperty(x) && (o = r[x], o != null && Qe(t, a, x, o, r, null));
  }
  function LT(t, a, r, o) {
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
        var c = null, d = null, y = null, x = null, T = null, P = null, te = null;
        for (F in r) {
          var re = r[F];
          if (r.hasOwnProperty(F) && re != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = re;
              default:
                o.hasOwnProperty(F) || Qe(t, a, F, null, o, re);
            }
        }
        for (var G in o) {
          var F = o[G];
          if (re = r[G], o.hasOwnProperty(G) && (F != null || re != null))
            switch (G) {
              case "type":
                d = F;
                break;
              case "name":
                c = F;
                break;
              case "checked":
                P = F;
                break;
              case "defaultChecked":
                te = F;
                break;
              case "value":
                y = F;
                break;
              case "defaultValue":
                x = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, a));
                break;
              default:
                F !== re && Qe(
                  t,
                  a,
                  G,
                  F,
                  o,
                  re
                );
            }
        }
        cc(
          t,
          y,
          x,
          T,
          P,
          te,
          d,
          c
        );
        return;
      case "select":
        F = y = x = G = null;
        for (d in r)
          if (T = r[d], r.hasOwnProperty(d) && T != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                F = T;
              default:
                o.hasOwnProperty(d) || Qe(
                  t,
                  a,
                  d,
                  null,
                  o,
                  T
                );
            }
        for (c in o)
          if (d = o[c], T = r[c], o.hasOwnProperty(c) && (d != null || T != null))
            switch (c) {
              case "value":
                G = d;
                break;
              case "defaultValue":
                x = d;
                break;
              case "multiple":
                y = d;
              default:
                d !== T && Qe(
                  t,
                  a,
                  c,
                  d,
                  o,
                  T
                );
            }
        a = x, r = y, o = F, G != null ? or(t, !!r, G, !1) : !!o != !!r && (a != null ? or(t, !!r, a, !0) : or(t, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        F = G = null;
        for (x in r)
          if (c = r[x], r.hasOwnProperty(x) && c != null && !o.hasOwnProperty(x))
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qe(t, a, x, null, o, c);
            }
        for (y in o)
          if (c = o[y], d = r[y], o.hasOwnProperty(y) && (c != null || d != null))
            switch (y) {
              case "value":
                G = c;
                break;
              case "defaultValue":
                F = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== d && Qe(t, a, y, c, o, d);
            }
        cp(t, G, F);
        return;
      case "option":
        for (var Re in r)
          if (G = r[Re], r.hasOwnProperty(Re) && G != null && !o.hasOwnProperty(Re))
            switch (Re) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Qe(
                  t,
                  a,
                  Re,
                  null,
                  o,
                  G
                );
            }
        for (T in o)
          if (G = o[T], F = r[T], o.hasOwnProperty(T) && G !== F && (G != null || F != null))
            switch (T) {
              case "selected":
                t.selected = G && typeof G != "function" && typeof G != "symbol";
                break;
              default:
                Qe(
                  t,
                  a,
                  T,
                  G,
                  o,
                  F
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
        for (var Ce in r)
          G = r[Ce], r.hasOwnProperty(Ce) && G != null && !o.hasOwnProperty(Ce) && Qe(t, a, Ce, null, o, G);
        for (P in o)
          if (G = o[P], F = r[P], o.hasOwnProperty(P) && G !== F && (G != null || F != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(s(137, a));
                break;
              default:
                Qe(
                  t,
                  a,
                  P,
                  G,
                  o,
                  F
                );
            }
        return;
      default:
        if (dc(a)) {
          for (var Je in r)
            G = r[Je], r.hasOwnProperty(Je) && G !== void 0 && !o.hasOwnProperty(Je) && Qf(
              t,
              a,
              Je,
              void 0,
              o,
              G
            );
          for (te in o)
            G = o[te], F = r[te], !o.hasOwnProperty(te) || G === F || G === void 0 && F === void 0 || Qf(
              t,
              a,
              te,
              G,
              o,
              F
            );
          return;
        }
    }
    for (var V in r)
      G = r[V], r.hasOwnProperty(V) && G != null && !o.hasOwnProperty(V) && Qe(t, a, V, null, o, G);
    for (re in o)
      G = o[re], F = r[re], !o.hasOwnProperty(re) || G === F || G == null && F == null || Qe(t, a, re, G, o, F);
  }
  var Jf = null, Wf = null;
  function Fl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function dy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hy(t, a) {
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
  function ed(t, a) {
    return t === "textarea" || t === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var td = null;
  function UT() {
    var t = window.event;
    return t && t.type === "popstate" ? t === td ? !1 : (td = t, !0) : (td = null, !1);
  }
  var my = typeof setTimeout == "function" ? setTimeout : void 0, BT = typeof clearTimeout == "function" ? clearTimeout : void 0, py = typeof Promise == "function" ? Promise : void 0, PT = typeof queueMicrotask == "function" ? queueMicrotask : typeof py < "u" ? function(t) {
    return py.resolve(null).then(t).catch(HT);
  } : my;
  function HT(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ni(t) {
    return t === "head";
  }
  function gy(t, a) {
    var r = a, o = 0, c = 0;
    do {
      var d = r.nextSibling;
      if (t.removeChild(r), d && d.nodeType === 8)
        if (r = d.data, r === "/$") {
          if (0 < o && 8 > o) {
            r = o;
            var y = t.ownerDocument;
            if (r & 1 && eo(y.documentElement), r & 2 && eo(y.body), r & 4)
              for (r = y.head, eo(r), y = r.firstChild; y; ) {
                var x = y.nextSibling, T = y.nodeName;
                y[ps] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && y.rel.toLowerCase() === "stylesheet" || r.removeChild(y), y = x;
              }
          }
          if (c === 0) {
            t.removeChild(d), lo(a);
            return;
          }
          c--;
        } else
          r === "$" || r === "$?" || r === "$!" ? c++ : o = r.charCodeAt(0) - 48;
      else o = 0;
      r = d;
    } while (r);
    lo(a);
  }
  function nd(t) {
    var a = t.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var r = a;
      switch (a = a.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nd(r), sc(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(r);
    }
  }
  function ZT(t, a, r, o) {
    for (; t.nodeType === 1; ) {
      var c = r;
      if (t.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (o) {
        if (!t[ps])
          switch (a) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (d = t.getAttribute("rel"), d === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (d !== c.rel || t.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || t.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (d = t.getAttribute("src"), (d !== (c.src == null ? null : c.src) || t.getAttribute("type") !== (c.type == null ? null : c.type) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && d && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (a === "input" && t.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === d)
          return t;
      } else return t;
      if (t = Kn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function GT(t, a, r) {
    if (a === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !r || (t = Kn(t.nextSibling), t === null)) return null;
    return t;
  }
  function ad(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function YT(t, a) {
    var r = t.ownerDocument;
    if (t.data !== "$?" || r.readyState === "complete")
      a();
    else {
      var o = function() {
        a(), r.removeEventListener("DOMContentLoaded", o);
      };
      r.addEventListener("DOMContentLoaded", o), t._reactRetry = o;
    }
  }
  function Kn(t) {
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
  var id = null;
  function vy(t) {
    t = t.previousSibling;
    for (var a = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (a === 0) return t;
          a--;
        } else r === "/$" && a++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function yy(t, a, r) {
    switch (a = Fl(r), t) {
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
  function eo(t) {
    for (var a = t.attributes; a.length; )
      t.removeAttributeNode(a[0]);
    sc(t);
  }
  var Un = /* @__PURE__ */ new Map(), by = /* @__PURE__ */ new Set();
  function ql(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Da = O.d;
  O.d = {
    f: FT,
    r: qT,
    D: KT,
    C: IT,
    L: XT,
    m: QT,
    X: WT,
    S: JT,
    M: e2
  };
  function FT() {
    var t = Da.f(), a = Ll();
    return t || a;
  }
  function qT(t) {
    var a = ar(t);
    a !== null && a.tag === 5 && a.type === "form" ? Ug(a) : Da.r(t);
  }
  var jr = typeof document > "u" ? null : document;
  function xy(t, a, r) {
    var o = jr;
    if (o && typeof a == "string" && a) {
      var c = kn(a);
      c = 'link[rel="' + t + '"][href="' + c + '"]', typeof r == "string" && (c += '[crossorigin="' + r + '"]'), by.has(c) || (by.add(c), t = { rel: t, crossOrigin: r, href: a }, o.querySelector(c) === null && (a = o.createElement("link"), It(a, "link", t), Ut(a), o.head.appendChild(a)));
    }
  }
  function KT(t) {
    Da.D(t), xy("dns-prefetch", t, null);
  }
  function IT(t, a) {
    Da.C(t, a), xy("preconnect", t, a);
  }
  function XT(t, a, r) {
    Da.L(t, a, r);
    var o = jr;
    if (o && t && a) {
      var c = 'link[rel="preload"][as="' + kn(a) + '"]';
      a === "image" && r && r.imageSrcSet ? (c += '[imagesrcset="' + kn(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (c += '[imagesizes="' + kn(
        r.imageSizes
      ) + '"]')) : c += '[href="' + kn(t) + '"]';
      var d = c;
      switch (a) {
        case "style":
          d = Lr(t);
          break;
        case "script":
          d = Ur(t);
      }
      Un.has(d) || (t = g(
        {
          rel: "preload",
          href: a === "image" && r && r.imageSrcSet ? void 0 : t,
          as: a
        },
        r
      ), Un.set(d, t), o.querySelector(c) !== null || a === "style" && o.querySelector(to(d)) || a === "script" && o.querySelector(no(d)) || (a = o.createElement("link"), It(a, "link", t), Ut(a), o.head.appendChild(a)));
    }
  }
  function QT(t, a) {
    Da.m(t, a);
    var r = jr;
    if (r && t) {
      var o = a && typeof a.as == "string" ? a.as : "script", c = 'link[rel="modulepreload"][as="' + kn(o) + '"][href="' + kn(t) + '"]', d = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Ur(t);
      }
      if (!Un.has(d) && (t = g({ rel: "modulepreload", href: t }, a), Un.set(d, t), r.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(no(d)))
              return;
        }
        o = r.createElement("link"), It(o, "link", t), Ut(o), r.head.appendChild(o);
      }
    }
  }
  function JT(t, a, r) {
    Da.S(t, a, r);
    var o = jr;
    if (o && t) {
      var c = ir(o).hoistableStyles, d = Lr(t);
      a = a || "default";
      var y = c.get(d);
      if (!y) {
        var x = { loading: 0, preload: null };
        if (y = o.querySelector(
          to(d)
        ))
          x.loading = 5;
        else {
          t = g(
            { rel: "stylesheet", href: t, "data-precedence": a },
            r
          ), (r = Un.get(d)) && rd(t, r);
          var T = y = o.createElement("link");
          Ut(T), It(T, "link", t), T._p = new Promise(function(P, te) {
            T.onload = P, T.onerror = te;
          }), T.addEventListener("load", function() {
            x.loading |= 1;
          }), T.addEventListener("error", function() {
            x.loading |= 2;
          }), x.loading |= 4, Kl(y, a, o);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: x
        }, c.set(d, y);
      }
    }
  }
  function WT(t, a) {
    Da.X(t, a);
    var r = jr;
    if (r && t) {
      var o = ir(r).hoistableScripts, c = Ur(t), d = o.get(c);
      d || (d = r.querySelector(no(c)), d || (t = g({ src: t, async: !0 }, a), (a = Un.get(c)) && sd(t, a), d = r.createElement("script"), Ut(d), It(d, "link", t), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, o.set(c, d));
    }
  }
  function e2(t, a) {
    Da.M(t, a);
    var r = jr;
    if (r && t) {
      var o = ir(r).hoistableScripts, c = Ur(t), d = o.get(c);
      d || (d = r.querySelector(no(c)), d || (t = g({ src: t, async: !0, type: "module" }, a), (a = Un.get(c)) && sd(t, a), d = r.createElement("script"), Ut(d), It(d, "link", t), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, o.set(c, d));
    }
  }
  function Sy(t, a, r, o) {
    var c = (c = ge.current) ? ql(c) : null;
    if (!c) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (a = Lr(r.href), r = ir(
          c
        ).hoistableStyles, o = r.get(a), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(a, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          t = Lr(r.href);
          var d = ir(
            c
          ).hoistableStyles, y = d.get(t);
          if (y || (c = c.ownerDocument || c, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(t, y), (d = c.querySelector(
            to(t)
          )) && !d._p && (y.instance = d, y.state.loading = 5), Un.has(t) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, Un.set(t, r), d || t2(
            c,
            t,
            r,
            y.state
          ))), a && o === null)
            throw Error(s(528, ""));
          return y;
        }
        if (a && o !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return a = r.async, r = r.src, typeof r == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = Ur(r), r = ir(
          c
        ).hoistableScripts, o = r.get(a), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, r.set(a, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function Lr(t) {
    return 'href="' + kn(t) + '"';
  }
  function to(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function wy(t) {
    return g({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function t2(t, a, r, o) {
    t.querySelector('link[rel="preload"][as="style"][' + a + "]") ? o.loading = 1 : (a = t.createElement("link"), o.preload = a, a.addEventListener("load", function() {
      return o.loading |= 1;
    }), a.addEventListener("error", function() {
      return o.loading |= 2;
    }), It(a, "link", r), Ut(a), t.head.appendChild(a));
  }
  function Ur(t) {
    return '[src="' + kn(t) + '"]';
  }
  function no(t) {
    return "script[async]" + t;
  }
  function Ey(t, a, r) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var o = t.querySelector(
            'style[data-href~="' + kn(r.href) + '"]'
          );
          if (o)
            return a.instance = o, Ut(o), o;
          var c = g({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return o = (t.ownerDocument || t).createElement(
            "style"
          ), Ut(o), It(o, "style", c), Kl(o, r.precedence, t), a.instance = o;
        case "stylesheet":
          c = Lr(r.href);
          var d = t.querySelector(
            to(c)
          );
          if (d)
            return a.state.loading |= 4, a.instance = d, Ut(d), d;
          o = wy(r), (c = Un.get(c)) && rd(o, c), d = (t.ownerDocument || t).createElement("link"), Ut(d);
          var y = d;
          return y._p = new Promise(function(x, T) {
            y.onload = x, y.onerror = T;
          }), It(d, "link", o), a.state.loading |= 4, Kl(d, r.precedence, t), a.instance = d;
        case "script":
          return d = Ur(r.src), (c = t.querySelector(
            no(d)
          )) ? (a.instance = c, Ut(c), c) : (o = r, (c = Un.get(d)) && (o = g({}, r), sd(o, c)), t = t.ownerDocument || t, c = t.createElement("script"), Ut(c), It(c, "link", o), t.head.appendChild(c), a.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (o = a.instance, a.state.loading |= 4, Kl(o, r.precedence, t));
    return a.instance;
  }
  function Kl(t, a, r) {
    for (var o = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, d = c, y = 0; y < o.length; y++) {
      var x = o[y];
      if (x.dataset.precedence === a) d = x;
      else if (d !== c) break;
    }
    d ? d.parentNode.insertBefore(t, d.nextSibling) : (a = r.nodeType === 9 ? r.head : r, a.insertBefore(t, a.firstChild));
  }
  function rd(t, a) {
    t.crossOrigin == null && (t.crossOrigin = a.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = a.referrerPolicy), t.title == null && (t.title = a.title);
  }
  function sd(t, a) {
    t.crossOrigin == null && (t.crossOrigin = a.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = a.referrerPolicy), t.integrity == null && (t.integrity = a.integrity);
  }
  var Il = null;
  function Ty(t, a, r) {
    if (Il === null) {
      var o = /* @__PURE__ */ new Map(), c = Il = /* @__PURE__ */ new Map();
      c.set(r, o);
    } else
      c = Il, o = c.get(r), o || (o = /* @__PURE__ */ new Map(), c.set(r, o));
    if (o.has(t)) return o;
    for (o.set(t, null), r = r.getElementsByTagName(t), c = 0; c < r.length; c++) {
      var d = r[c];
      if (!(d[ps] || d[vt] || t === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = d.getAttribute(a) || "";
        y = t + y;
        var x = o.get(y);
        x ? x.push(d) : o.set(y, [d]);
      }
    }
    return o;
  }
  function Ay(t, a, r) {
    t = t.ownerDocument || t, t.head.insertBefore(
      r,
      a === "title" ? t.querySelector("head > title") : null
    );
  }
  function n2(t, a, r) {
    if (r === 1 || a.itemProp != null) return !1;
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
  function _y(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ao = null;
  function a2() {
  }
  function i2(t, a, r) {
    if (ao === null) throw Error(s(475));
    var o = ao;
    if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var c = Lr(r.href), d = t.querySelector(
          to(c)
        );
        if (d) {
          t = d._p, t !== null && typeof t == "object" && typeof t.then == "function" && (o.count++, o = Xl.bind(o), t.then(o, o)), a.state.loading |= 4, a.instance = d, Ut(d);
          return;
        }
        d = t.ownerDocument || t, r = wy(r), (c = Un.get(c)) && rd(r, c), d = d.createElement("link"), Ut(d);
        var y = d;
        y._p = new Promise(function(x, T) {
          y.onload = x, y.onerror = T;
        }), It(d, "link", r), a.instance = d;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (o.count++, a = Xl.bind(o), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  function r2() {
    if (ao === null) throw Error(s(475));
    var t = ao;
    return t.stylesheets && t.count === 0 && od(t, t.stylesheets), 0 < t.count ? function(a) {
      var r = setTimeout(function() {
        if (t.stylesheets && od(t, t.stylesheets), t.unsuspend) {
          var o = t.unsuspend;
          t.unsuspend = null, o();
        }
      }, 6e4);
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(r);
      };
    } : null;
  }
  function Xl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) od(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ql = null;
  function od(t, a) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ql = /* @__PURE__ */ new Map(), a.forEach(s2, t), Ql = null, Xl.call(t));
  }
  function s2(t, a) {
    if (!(a.state.loading & 4)) {
      var r = Ql.get(t);
      if (r) var o = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), Ql.set(t, r);
        for (var c = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < c.length; d++) {
          var y = c[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (r.set(y.dataset.precedence, y), o = y);
        }
        o && r.set(null, o);
      }
      c = a.instance, y = c.getAttribute("data-precedence"), d = r.get(y) || o, d === o && r.set(null, c), r.set(y, c), this.count++, o = Xl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), d ? d.parentNode.insertBefore(c, d.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(c, t.firstChild)), a.state.loading |= 4;
    }
  }
  var io = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: R,
    _currentValue2: R,
    _threadCount: 0
  };
  function o2(t, a, r, o, c, d, y, x) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ms(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ms(0), this.hiddenUpdates = ms(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = d, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Cy(t, a, r, o, c, d, y, x, T, P, te, re) {
    return t = new o2(
      t,
      a,
      r,
      y,
      x,
      T,
      P,
      re
    ), a = 1, d === !0 && (a |= 24), d = bn(3, null, null, a), t.current = d, d.stateNode = t, a = Pc(), a.refCount++, t.pooledCache = a, a.refCount++, d.memoizedState = {
      element: o,
      isDehydrated: r,
      cache: a
    }, Yc(d), t;
  }
  function My(t) {
    return t ? (t = gr, t) : gr;
  }
  function Dy(t, a, r, o, c, d) {
    c = My(c), o.context === null ? o.context = c : o.pendingContext = c, o = Za(a), o.payload = { element: r }, d = d === void 0 ? null : d, d !== null && (o.callback = d), r = Ga(t, o, a), r !== null && (Tn(r, t, a), Vs(r, t, a));
  }
  function Ry(t, a) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var r = t.retryLane;
      t.retryLane = r !== 0 && r < a ? r : a;
    }
  }
  function ld(t, a) {
    Ry(t, a), (t = t.alternate) && Ry(t, a);
  }
  function zy(t) {
    if (t.tag === 13) {
      var a = pr(t, 67108864);
      a !== null && Tn(a, t, 67108864), ld(t, 67108864);
    }
  }
  var Jl = !0;
  function l2(t, a, r, o) {
    var c = S.T;
    S.T = null;
    var d = O.p;
    try {
      O.p = 2, ud(t, a, r, o);
    } finally {
      O.p = d, S.T = c;
    }
  }
  function u2(t, a, r, o) {
    var c = S.T;
    S.T = null;
    var d = O.p;
    try {
      O.p = 8, ud(t, a, r, o);
    } finally {
      O.p = d, S.T = c;
    }
  }
  function ud(t, a, r, o) {
    if (Jl) {
      var c = cd(o);
      if (c === null)
        Xf(
          t,
          a,
          o,
          Wl,
          r
        ), Oy(t, o);
      else if (f2(
        c,
        t,
        a,
        r,
        o
      ))
        o.stopPropagation();
      else if (Oy(t, o), a & 4 && -1 < c2.indexOf(t)) {
        for (; c !== null; ) {
          var d = ar(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var y = Rn(d.pendingLanes);
                  if (y !== 0) {
                    var x = d;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; y; ) {
                      var T = 1 << 31 - Ge(y);
                      x.entanglements[1] |= T, y &= ~T;
                    }
                    aa(d), (qe & 6) === 0 && (Nl = Tt() + 500, Qs(0));
                  }
                }
                break;
              case 13:
                x = pr(d, 2), x !== null && Tn(x, d, 2), Ll(), ld(d, 2);
            }
          if (d = cd(o), d === null && Xf(
            t,
            a,
            o,
            Wl,
            r
          ), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Xf(
          t,
          a,
          o,
          null,
          r
        );
    }
  }
  function cd(t) {
    return t = mc(t), fd(t);
  }
  var Wl = null;
  function fd(t) {
    if (Wl = null, t = nr(t), t !== null) {
      var a = u(t);
      if (a === null) t = null;
      else {
        var r = a.tag;
        if (r === 13) {
          if (t = f(a), t !== null) return t;
          t = null;
        } else if (r === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          t = null;
        } else a !== t && (t = null);
      }
    }
    return Wl = t, null;
  }
  function ky(t) {
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
        switch (Cn()) {
          case jt:
            return 2;
          case C:
            return 8;
          case B:
          case X:
            return 32;
          case he:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var dd = !1, ai = null, ii = null, ri = null, ro = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), si = [], c2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Oy(t, a) {
    switch (t) {
      case "focusin":
      case "focusout":
        ai = null;
        break;
      case "dragenter":
      case "dragleave":
        ii = null;
        break;
      case "mouseover":
      case "mouseout":
        ri = null;
        break;
      case "pointerover":
      case "pointerout":
        ro.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        so.delete(a.pointerId);
    }
  }
  function oo(t, a, r, o, c, d) {
    return t === null || t.nativeEvent !== d ? (t = {
      blockedOn: a,
      domEventName: r,
      eventSystemFlags: o,
      nativeEvent: d,
      targetContainers: [c]
    }, a !== null && (a = ar(a), a !== null && zy(a)), t) : (t.eventSystemFlags |= o, a = t.targetContainers, c !== null && a.indexOf(c) === -1 && a.push(c), t);
  }
  function f2(t, a, r, o, c) {
    switch (a) {
      case "focusin":
        return ai = oo(
          ai,
          t,
          a,
          r,
          o,
          c
        ), !0;
      case "dragenter":
        return ii = oo(
          ii,
          t,
          a,
          r,
          o,
          c
        ), !0;
      case "mouseover":
        return ri = oo(
          ri,
          t,
          a,
          r,
          o,
          c
        ), !0;
      case "pointerover":
        var d = c.pointerId;
        return ro.set(
          d,
          oo(
            ro.get(d) || null,
            t,
            a,
            r,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return d = c.pointerId, so.set(
          d,
          oo(
            so.get(d) || null,
            t,
            a,
            r,
            o,
            c
          )
        ), !0;
    }
    return !1;
  }
  function Vy(t) {
    var a = nr(t.target);
    if (a !== null) {
      var r = u(a);
      if (r !== null) {
        if (a = r.tag, a === 13) {
          if (a = f(r), a !== null) {
            t.blockedOn = a, zt(t.priority, function() {
              if (r.tag === 13) {
                var o = En();
                o = _t(o);
                var c = pr(r, o);
                c !== null && Tn(c, r, o), ld(r, o);
              }
            });
            return;
          }
        } else if (a === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function eu(t) {
    if (t.blockedOn !== null) return !1;
    for (var a = t.targetContainers; 0 < a.length; ) {
      var r = cd(t.nativeEvent);
      if (r === null) {
        r = t.nativeEvent;
        var o = new r.constructor(
          r.type,
          r
        );
        hc = o, r.target.dispatchEvent(o), hc = null;
      } else
        return a = ar(r), a !== null && zy(a), t.blockedOn = r, !1;
      a.shift();
    }
    return !0;
  }
  function $y(t, a, r) {
    eu(t) && r.delete(a);
  }
  function d2() {
    dd = !1, ai !== null && eu(ai) && (ai = null), ii !== null && eu(ii) && (ii = null), ri !== null && eu(ri) && (ri = null), ro.forEach($y), so.forEach($y);
  }
  function tu(t, a) {
    t.blockedOn === a && (t.blockedOn = null, dd || (dd = !0, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      d2
    )));
  }
  var nu = null;
  function Ny(t) {
    nu !== t && (nu = t, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      function() {
        nu === t && (nu = null);
        for (var a = 0; a < t.length; a += 3) {
          var r = t[a], o = t[a + 1], c = t[a + 2];
          if (typeof o != "function") {
            if (fd(o || r) === null)
              continue;
            break;
          }
          var d = ar(r);
          d !== null && (t.splice(a, 3), a -= 3, ff(
            d,
            {
              pending: !0,
              data: c,
              method: r.method,
              action: o
            },
            o,
            c
          ));
        }
      }
    ));
  }
  function lo(t) {
    function a(T) {
      return tu(T, t);
    }
    ai !== null && tu(ai, t), ii !== null && tu(ii, t), ri !== null && tu(ri, t), ro.forEach(a), so.forEach(a);
    for (var r = 0; r < si.length; r++) {
      var o = si[r];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < si.length && (r = si[0], r.blockedOn === null); )
      Vy(r), r.blockedOn === null && si.shift();
    if (r = (t.ownerDocument || t).$$reactFormReplay, r != null)
      for (o = 0; o < r.length; o += 3) {
        var c = r[o], d = r[o + 1], y = c[tt] || null;
        if (typeof d == "function")
          y || Ny(r);
        else if (y) {
          var x = null;
          if (d && d.hasAttribute("formAction")) {
            if (c = d, y = d[tt] || null)
              x = y.formAction;
            else if (fd(c) !== null) continue;
          } else x = y.action;
          typeof x == "function" ? r[o + 1] = x : (r.splice(o, 3), o -= 3), Ny(r);
        }
      }
  }
  function hd(t) {
    this._internalRoot = t;
  }
  au.prototype.render = hd.prototype.render = function(t) {
    var a = this._internalRoot;
    if (a === null) throw Error(s(409));
    var r = a.current, o = En();
    Dy(r, o, t, a, null, null);
  }, au.prototype.unmount = hd.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var a = t.containerInfo;
      Dy(t.current, 2, null, t, null, null), Ll(), a[Lt] = null;
    }
  };
  function au(t) {
    this._internalRoot = t;
  }
  au.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var a = bi();
      t = { blockedOn: null, target: t, priority: a };
      for (var r = 0; r < si.length && a !== 0 && a < si[r].priority; r++) ;
      si.splice(r, 0, t), r === 0 && Vy(t);
    }
  };
  var jy = n.version;
  if (jy !== "19.1.0")
    throw Error(
      s(
        527,
        jy,
        "19.1.0"
      )
    );
  O.findDOMNode = function(t) {
    var a = t._reactInternals;
    if (a === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = m(a), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var h2 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!iu.isDisabled && iu.supportsFiber)
      try {
        ye = iu.inject(
          h2
        ), De = iu;
      } catch {
      }
  }
  return uo.createRoot = function(t, a) {
    if (!l(t)) throw Error(s(299));
    var r = !1, o = "", c = Wg, d = ev, y = tv, x = null;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (x = a.unstable_transitionCallbacks)), a = Cy(
      t,
      1,
      !1,
      null,
      null,
      r,
      o,
      c,
      d,
      y,
      x,
      null
    ), t[Lt] = a.current, If(t), new hd(a);
  }, uo.hydrateRoot = function(t, a, r) {
    if (!l(t)) throw Error(s(299));
    var o = !1, c = "", d = Wg, y = ev, x = tv, T = null, P = null;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onUncaughtError !== void 0 && (d = r.onUncaughtError), r.onCaughtError !== void 0 && (y = r.onCaughtError), r.onRecoverableError !== void 0 && (x = r.onRecoverableError), r.unstable_transitionCallbacks !== void 0 && (T = r.unstable_transitionCallbacks), r.formState !== void 0 && (P = r.formState)), a = Cy(
      t,
      1,
      !0,
      a,
      r ?? null,
      o,
      c,
      d,
      y,
      x,
      T,
      P
    ), a.context = My(null), r = a.current, o = En(), o = _t(o), c = Za(o), c.callback = null, Ga(r, c, o), r = o, a.current.lanes = r, Ua(a, r), aa(a), t[Lt] = a.current, If(t), new au(a);
  }, uo.version = "19.1.0", uo;
}
var Yy;
function x2() {
  if (Yy) return pd.exports;
  Yy = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), pd.exports = /* @__PURE__ */ b2(), pd.exports;
}
var bd = /* @__PURE__ */ x2(), xd = { exports: {} }, co = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Fy;
function S2() {
  if (Fy) return co;
  Fy = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function i(s, l, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      u = {};
      for (var h in l)
        h !== "key" && (u[h] = l[h]);
    } else u = l;
    return l = u.ref, {
      $$typeof: e,
      type: s,
      key: f,
      ref: l !== void 0 ? l : null,
      props: u
    };
  }
  return co.Fragment = n, co.jsx = i, co.jsxs = i, co;
}
var qy;
function w2() {
  return qy || (qy = 1, xd.exports = /* @__PURE__ */ S2()), xd.exports;
}
var $ = /* @__PURE__ */ w2();
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const E2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), T2 = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, i, s) => s ? s.toUpperCase() : i.toLowerCase()
), Ky = (e) => {
  const n = T2(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, M1 = (...e) => e.filter((n, i, s) => !!n && n.trim() !== "" && s.indexOf(n) === i).join(" ").trim(), A2 = (e) => {
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
var _2 = {
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
const C2 = A.forwardRef(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: s,
    className: l = "",
    children: u,
    iconNode: f,
    ...h
  }, m) => A.createElement(
    "svg",
    {
      ref: m,
      ..._2,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: s ? Number(i) * 24 / Number(n) : i,
      className: M1("lucide", l),
      ...!u && !A2(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...f.map(([p, g]) => A.createElement(p, g)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const M2 = (e, n) => {
  const i = A.forwardRef(
    ({ className: s, ...l }, u) => A.createElement(C2, {
      ref: u,
      iconNode: n,
      className: M1(
        `lucide-${E2(Ky(e))}`,
        `lucide-${e}`,
        s
      ),
      ...l
    })
  );
  return i.displayName = Ky(e), i;
};
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const D2 = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], R2 = M2("arrow-up-from-line", D2);
function Br({
  label: e,
  placeholder: n,
  type: i = "text",
  value: s,
  onChange: l,
  style: u,
  initialPreviewUrl: f,
  className: h = "",
  previewUsername: m,
  previewEmail: p
}) {
  const g = A.useId(), [v, b] = A.useState(
    f || null
  );
  A.useEffect(() => {
    b(f || null);
  }, [f]);
  const E = (_) => {
    const M = _.target.files?.[0];
    if (M && M.type.startsWith("image/")) {
      v && v.startsWith("blob:") && URL.revokeObjectURL(v);
      const N = URL.createObjectURL(M);
      b(N);
    }
    l && l(_);
  };
  return A.useEffect(() => () => {
    v && v.startsWith("blob:") && URL.revokeObjectURL(v);
  }, [v]), i === "file" ? /* @__PURE__ */ $.jsx("div", { style: u, className: `w-full ${h}`, children: /* @__PURE__ */ $.jsxs(
    "label",
    {
      htmlFor: g,
      className: "relative rounded-full flex cursor-pointer items-center gap-3 border border-input bg-transparent px-2 py-2 transition-colors hover:border-primary",
      children: [
        /* @__PURE__ */ $.jsx(
          "input",
          {
            id: g,
            type: "file",
            className: "sr-only",
            onChange: E,
            accept: "image/*"
          }
        ),
        v ? /* @__PURE__ */ $.jsxs("div", { className: "flex items-center gap-3 w-full", children: [
          /* @__PURE__ */ $.jsx(
            "img",
            {
              src: v,
              alt: "Avatar Preview",
              className: "h-10 w-10 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ $.jsxs("div", { className: "flex flex-col text-sm", children: [
            /* @__PURE__ */ $.jsx("span", { className: "font-medium text-foreground w-0 text-left", children: m || "Username" }),
            /* @__PURE__ */ $.jsx("span", { className: "text-muted-foreground text-xs", children: p || "email@example.com" })
          ] })
        ] }) : /* @__PURE__ */ $.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
          /* @__PURE__ */ $.jsx(R2, { size: 16, className: "text-muted-foreground" }),
          /* @__PURE__ */ $.jsxs("div", { className: "flex flex-col text-sm text-muted-foreground", children: [
            /* @__PURE__ */ $.jsx("span", { className: "font-medium text-foreground w-0", children: e }),
            /* @__PURE__ */ $.jsx("span", { className: "text-xs", children: "Click to upload or drag image" })
          ] })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ $.jsxs(
    "div",
    {
      style: u,
      className: "group relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-ring after:transition-transform after:duration-300 after:ease-in-out focus-within:after:scale-x-100",
      children: [
        /* @__PURE__ */ $.jsx(
          "input",
          {
            type: i,
            id: g,
            value: s,
            onChange: l,
            className: "peer block w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-4 text-foreground placeholder:text-transparent focus:outline-none focus:ring-0 sm:text-sm disabled:pointer-events-none disabled:opacity-50 autofill:pb-2 autofill:pt-6 focus:pb-2 focus:pt-6 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6",
            placeholder: n
          }
        ),
        /* @__PURE__ */ $.jsx(
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
function D1(e = {}) {
  const {
    strict: n = !0,
    errorMessage: i = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: s
  } = e, l = A.createContext(void 0);
  l.displayName = s;
  function u() {
    var f;
    const h = A.useContext(l);
    if (!h && n) {
      const m = new Error(i);
      throw m.name = "ContextError", (f = Error.captureStackTrace) == null || f.call(Error, m, u), m;
    }
    return h;
  }
  return [l.Provider, u, l];
}
function z2(e) {
  return typeof e == "function";
}
var Ra = (e) => e ? "true" : void 0;
function R1(e) {
  var n, i, s = "";
  if (typeof e == "string" || typeof e == "number")
    s += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (i = R1(e[n])) && (s && (s += " "), s += i);
    else
      for (n in e)
        e[n] && (s && (s += " "), s += n);
  return s;
}
function Au(...e) {
  for (var n = 0, i, s, l = ""; n < e.length; )
    (i = e[n++]) && (s = R1(i)) && (l && (l += " "), l += s);
  return l;
}
var k2 = (...e) => {
  let n = " ";
  for (const i of e)
    if (typeof i == "string" && i.length > 0) {
      n = i;
      break;
    }
  return n;
};
function Kd(...e) {
  return (...n) => {
    for (let i of e)
      typeof i == "function" && i(...n);
  };
}
var Iy = /* @__PURE__ */ new Map();
function O2(e, n) {
  if (e === n)
    return e;
  let i = Iy.get(e);
  if (i)
    return i.forEach((l) => l.current = n), n;
  let s = Iy.get(n);
  return s ? (s.forEach((l) => l.current = e), e) : n;
}
function Id(...e) {
  let n = { ...e[0] };
  for (let i = 1; i < e.length; i++) {
    let s = e[i];
    for (let l in s) {
      let u = n[l], f = s[l];
      typeof u == "function" && typeof f == "function" && // This is a lot faster than a regex.
      l[0] === "o" && l[1] === "n" && l.charCodeAt(2) >= /* 'A' */
      65 && l.charCodeAt(2) <= /* 'Z' */
      90 ? n[l] = Kd(u, f) : (l === "className" || l === "UNSAFE_className") && typeof u == "string" && typeof f == "string" ? n[l] = Au(u, f) : l === "id" && u && f ? n.id = O2(u, f) : n[l] = f !== void 0 ? f : u;
    }
  }
  return n;
}
function V2(...e) {
  return e.length === 1 && e[0] ? e[0] : (n) => {
    let i = !1;
    const s = e.map((l) => {
      const u = Xy(l, n);
      return i || (i = typeof u == "function"), u;
    });
    if (i)
      return () => {
        s.forEach((l, u) => {
          typeof l == "function" ? l?.() : Xy(e[u], null);
        });
      };
  };
}
function Xy(e, n) {
  if (typeof e == "function")
    return () => e(n);
  e != null && "current" in e && (e.current = n);
}
function $2(e, n) {
  if (e != null) {
    if (z2(e)) {
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
function N2(...e) {
  return (n) => {
    e.forEach((i) => $2(i, n));
  };
}
var [j2, L2] = D1({
  name: "ProviderContext",
  strict: !1
});
const U2 = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), B2 = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function z1(e) {
  if (Intl.Locale) {
    let i = new Intl.Locale(e).maximize(), s = typeof i.getTextInfo == "function" ? i.getTextInfo() : i.textInfo;
    if (s) return s.direction === "rtl";
    if (i.script) return U2.has(i.script);
  }
  let n = e.split("-")[0];
  return B2.has(n);
}
const P2 = /* @__PURE__ */ j.createContext(!1);
function H2() {
  return !1;
}
function Z2() {
  return !0;
}
function G2(e) {
  return () => {
  };
}
function Y2() {
  return typeof j.useSyncExternalStore == "function" ? j.useSyncExternalStore(G2, H2, Z2) : A.useContext(P2);
}
const F2 = Symbol.for("react-aria.i18n.locale");
function k1() {
  let e = typeof window < "u" && window[F2] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  return {
    locale: e,
    direction: z1(e) ? "rtl" : "ltr"
  };
}
let Xd = k1(), yo = /* @__PURE__ */ new Set();
function Qy() {
  Xd = k1();
  for (let e of yo) e(Xd);
}
function q2() {
  let e = Y2(), [n, i] = A.useState(Xd);
  return A.useEffect(() => (yo.size === 0 && window.addEventListener("languagechange", Qy), yo.add(i), () => {
    yo.delete(i), yo.size === 0 && window.removeEventListener("languagechange", Qy);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : n;
}
const K2 = /* @__PURE__ */ j.createContext(null);
function I2(e) {
  let { locale: n, children: i } = e, s = q2(), l = j.useMemo(() => n ? {
    locale: n,
    direction: z1(n) ? "rtl" : "ltr"
  } : s, [
    s,
    n
  ]);
  return /* @__PURE__ */ j.createElement(K2.Provider, {
    value: l
  }, i);
}
function X2(e, n) {
  if (n.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Q2(e, n, i) {
  X2(e, n), n.set(e, i);
}
const qu = typeof document < "u" ? j.useLayoutEffect : () => {
};
function Zn(e) {
  const n = A.useRef(null);
  return qu(() => {
    n.current = e;
  }, [
    e
  ]), A.useCallback((...i) => {
    const s = n.current;
    return s?.(...i);
  }, []);
}
let Qd = /* @__PURE__ */ new Map();
typeof FinalizationRegistry < "u" && new FinalizationRegistry((e) => {
  Qd.delete(e);
});
function J2(e, n) {
  if (e === n) return e;
  let i = Qd.get(e);
  if (i)
    return i.forEach((l) => l.current = n), n;
  let s = Qd.get(n);
  return s ? (s.forEach((l) => l.current = e), e) : n;
}
function O1(...e) {
  return (...n) => {
    for (let i of e) typeof i == "function" && i(...n);
  };
}
const on = (e) => {
  var n;
  return (n = e?.ownerDocument) !== null && n !== void 0 ? n : document;
}, sa = (e) => e && "window" in e && e.window === e ? e : on(e).defaultView || window;
function W2(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function eA(e) {
  return W2(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let tA = !1;
function Ih() {
  return tA;
}
function Pn(e, n) {
  if (!Ih()) return n && e ? e.contains(n) : !1;
  if (!e || !n) return !1;
  let i = n;
  for (; i !== null; ) {
    if (i === e) return !0;
    i.tagName === "SLOT" && i.assignedSlot ? i = i.assignedSlot.parentNode : eA(i) ? i = i.host : i = i.parentNode;
  }
  return !1;
}
const Ro = (e = document) => {
  var n;
  if (!Ih()) return e.activeElement;
  let i = e.activeElement;
  for (; i && "shadowRoot" in i && (!((n = i.shadowRoot) === null || n === void 0) && n.activeElement); ) i = i.shadowRoot.activeElement;
  return i;
};
function an(e) {
  return Ih() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function V1(e) {
  var n, i, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (n = 0; n < l; n++) e[n] && (i = V1(e[n])) && (s && (s += " "), s += i);
  } else for (i in e) e[i] && (s && (s += " "), s += i);
  return s;
}
function Xh() {
  for (var e, n, i = 0, s = "", l = arguments.length; i < l; i++) (e = arguments[i]) && (n = V1(e)) && (s && (s += " "), s += n);
  return s;
}
function hi(...e) {
  let n = {
    ...e[0]
  };
  for (let i = 1; i < e.length; i++) {
    let s = e[i];
    for (let l in s) {
      let u = n[l], f = s[l];
      typeof u == "function" && typeof f == "function" && // This is a lot faster than a regex.
      l[0] === "o" && l[1] === "n" && l.charCodeAt(2) >= /* 'A' */
      65 && l.charCodeAt(2) <= /* 'Z' */
      90 ? n[l] = O1(u, f) : (l === "className" || l === "UNSAFE_className") && typeof u == "string" && typeof f == "string" ? n[l] = Xh(u, f) : l === "id" && u && f ? n.id = J2(u, f) : n[l] = f !== void 0 ? f : u;
    }
  }
  return n;
}
const nA = /* @__PURE__ */ new Set([
  "id"
]), aA = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), iA = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), rA = /^(data-.*)$/;
function sA(e, n = {}) {
  let { labelable: i, isLink: s, propNames: l } = n, u = {};
  for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (nA.has(f) || i && aA.has(f) || s && iA.has(f) || l?.has(f) || rA.test(f)) && (u[f] = e[f]);
  return u;
}
function as(e) {
  if (oA()) e.focus({
    preventScroll: !0
  });
  else {
    let n = lA(e);
    e.focus(), uA(n);
  }
}
let ru = null;
function oA() {
  if (ru == null) {
    ru = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return ru = !0, !0;
        }
      });
    } catch {
    }
  }
  return ru;
}
function lA(e) {
  let n = e.parentNode, i = [], s = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== s; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && i.push({
      element: n,
      scrollTop: n.scrollTop,
      scrollLeft: n.scrollLeft
    }), n = n.parentNode;
  return s instanceof HTMLElement && i.push({
    element: s,
    scrollTop: s.scrollTop,
    scrollLeft: s.scrollLeft
  }), i;
}
function uA(e) {
  for (let { element: n, scrollTop: i, scrollLeft: s } of e)
    n.scrollTop = i, n.scrollLeft = s;
}
function Ku(e) {
  var n;
  return typeof window > "u" || window.navigator == null ? !1 : ((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.brands.some((i) => e.test(i.brand))) || e.test(window.navigator.userAgent);
}
function Qh(e) {
  var n;
  return typeof window < "u" && window.navigator != null ? e.test(((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.platform) || window.navigator.platform) : !1;
}
function gi(e) {
  let n = null;
  return () => (n == null && (n = e()), n);
}
const zo = gi(function() {
  return Qh(/^Mac/i);
}), cA = gi(function() {
  return Qh(/^iPhone/i);
}), $1 = gi(function() {
  return Qh(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  zo() && navigator.maxTouchPoints > 1;
}), N1 = gi(function() {
  return cA() || $1();
}), fA = gi(function() {
  return Ku(/AppleWebKit/i) && !dA();
}), dA = gi(function() {
  return Ku(/Chrome/i);
}), j1 = gi(function() {
  return Ku(/Android/i);
}), hA = gi(function() {
  return Ku(/Firefox/i);
}), mA = /* @__PURE__ */ A.createContext({
  isNative: !0,
  open: vA,
  useHref: (e) => e
});
function pA(e) {
  let { children: n, navigate: i, useHref: s } = e, l = A.useMemo(() => ({
    isNative: !1,
    open: (u, f, h, m) => {
      L1(u, (p) => {
        gA(p, f) ? i(h, m) : Ki(p, f);
      });
    },
    useHref: s || ((u) => u)
  }), [
    i,
    s
  ]);
  return /* @__PURE__ */ j.createElement(mA.Provider, {
    value: l
  }, n);
}
function gA(e, n) {
  let i = e.getAttribute("target");
  return (!i || i === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !n.metaKey && // open in new tab (mac)
  !n.ctrlKey && // open in new tab (windows)
  !n.altKey && // download
  !n.shiftKey;
}
function Ki(e, n, i = !0) {
  var s, l;
  let { metaKey: u, ctrlKey: f, altKey: h, shiftKey: m } = n;
  hA() && (!((l = window.event) === null || l === void 0 || (s = l.type) === null || s === void 0) && s.startsWith("key")) && e.target === "_blank" && (zo() ? u = !0 : f = !0);
  let p = fA() && zo() && !$1() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: u,
    ctrlKey: f,
    altKey: h,
    shiftKey: m
  }) : new MouseEvent("click", {
    metaKey: u,
    ctrlKey: f,
    altKey: h,
    shiftKey: m,
    bubbles: !0,
    cancelable: !0
  });
  Ki.isOpening = i, as(e), e.dispatchEvent(p), Ki.isOpening = !1;
}
Ki.isOpening = !1;
function L1(e, n) {
  if (e instanceof HTMLAnchorElement) n(e);
  else if (e.hasAttribute("data-href")) {
    let i = document.createElement("a");
    i.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (i.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (i.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (i.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (i.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (i.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(i), n(i), e.removeChild(i);
  }
}
function vA(e, n) {
  L1(e, (i) => Ki(i, n));
}
let fi = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
function Jy() {
  if (typeof window > "u") return;
  function e(s) {
    return "propertyName" in s;
  }
  let n = (s) => {
    if (!e(s) || !s.target) return;
    let l = fi.get(s.target);
    l || (l = /* @__PURE__ */ new Set(), fi.set(s.target, l), s.target.addEventListener("transitioncancel", i, {
      once: !0
    })), l.add(s.propertyName);
  }, i = (s) => {
    if (!e(s) || !s.target) return;
    let l = fi.get(s.target);
    if (l && (l.delete(s.propertyName), l.size === 0 && (s.target.removeEventListener("transitioncancel", i), fi.delete(s.target)), fi.size === 0)) {
      for (let u of Jd) u();
      Jd.clear();
    }
  };
  document.body.addEventListener("transitionrun", n), document.body.addEventListener("transitionend", i);
}
typeof document < "u" && (document.readyState !== "loading" ? Jy() : document.addEventListener("DOMContentLoaded", Jy));
function yA() {
  for (const [e] of fi)
    "isConnected" in e && !e.isConnected && fi.delete(e);
}
function U1(e) {
  requestAnimationFrame(() => {
    yA(), fi.size === 0 ? e() : Jd.add(e);
  });
}
function Jh() {
  let e = A.useRef(/* @__PURE__ */ new Map()), n = A.useCallback((l, u, f, h) => {
    let m = h?.once ? (...p) => {
      e.current.delete(f), f(...p);
    } : f;
    e.current.set(f, {
      type: u,
      eventTarget: l,
      fn: m,
      options: h
    }), l.addEventListener(u, m, h);
  }, []), i = A.useCallback((l, u, f, h) => {
    var m;
    let p = ((m = e.current.get(f)) === null || m === void 0 ? void 0 : m.fn) || f;
    l.removeEventListener(u, p, h), e.current.delete(f);
  }, []), s = A.useCallback(() => {
    e.current.forEach((l, u) => {
      i(l.eventTarget, l.type, u, l.options);
    });
  }, [
    i
  ]);
  return A.useEffect(() => s, [
    s
  ]), {
    addGlobalListener: n,
    removeGlobalListener: i,
    removeAllGlobalListeners: s
  };
}
function B1(e, n) {
  qu(() => {
    if (e && e.ref && n)
      return e.ref.current = n.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function P1(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : j1() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function bA(e) {
  return !j1() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function xA(e, n, i) {
  let s = A.useRef(n), l = Zn(() => {
    i && i(s.current);
  });
  A.useEffect(() => {
    var u;
    let f = e == null || (u = e.current) === null || u === void 0 ? void 0 : u.form;
    return f?.addEventListener("reset", l), () => {
      f?.removeEventListener("reset", l);
    };
  }, [
    e,
    l
  ]);
}
var SA = /* @__PURE__ */ C1();
const wA = /* @__PURE__ */ _1(SA), H1 = [
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
], EA = H1.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
H1.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function TA(e) {
  return e.matches(EA);
}
function AA(e, n, i) {
  let [s, l] = A.useState(e || n), u = A.useRef(e !== void 0), f = e !== void 0;
  A.useEffect(() => {
    u.current = f;
  }, [
    f
  ]);
  let h = f ? e : s, m = A.useCallback((p, ...g) => {
    let v = (b, ...E) => {
      i && (Object.is(h, b) || i(b, ...E)), f || (h = b);
    };
    typeof p == "function" ? l((E, ..._) => {
      let M = p(f ? h : E, ..._);
      return v(M, ...g), f ? E : M;
    }) : (f || l(p), v(p, ...g));
  }, [
    f,
    h,
    i
  ]);
  return [
    h,
    m
  ];
}
function _A(e) {
  const n = A.useRef(null);
  return n.current === null && (n.current = e()), n.current;
}
function Wh(e, n) {
  e.indexOf(n) === -1 && e.push(n);
}
function em(e, n) {
  const i = e.indexOf(n);
  i > -1 && e.splice(i, 1);
}
const $a = (e, n, i) => i > n ? n : i < e ? e : i, fa = {}, Z1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function G1(e) {
  return typeof e == "object" && e !== null;
}
const Y1 = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function tm(e) {
  let n;
  return () => (n === void 0 && (n = e()), n);
}
const Gn = /* @__NO_SIDE_EFFECTS__ */ (e) => e, CA = (e, n) => (i) => n(e(i)), Po = (...e) => e.reduce(CA), ko = /* @__NO_SIDE_EFFECTS__ */ (e, n, i) => {
  const s = n - e;
  return s === 0 ? 1 : (i - e) / s;
};
class nm {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return Wh(this.subscriptions, n), () => em(this.subscriptions, n);
  }
  notify(n, i, s) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1)
        this.subscriptions[0](n, i, s);
      else
        for (let u = 0; u < l; u++) {
          const f = this.subscriptions[u];
          f && f(n, i, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const la = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ua = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function F1(e, n) {
  return n ? e * (1e3 / n) : 0;
}
const q1 = (e, n, i) => (((1 - 3 * i + 3 * n) * e + (3 * i - 6 * n)) * e + 3 * n) * e, MA = 1e-7, DA = 12;
function RA(e, n, i, s, l) {
  let u, f, h = 0;
  do
    f = n + (i - n) / 2, u = q1(f, s, l) - e, u > 0 ? i = f : n = f;
  while (Math.abs(u) > MA && ++h < DA);
  return f;
}
function Ho(e, n, i, s) {
  if (e === n && i === s)
    return Gn;
  const l = (u) => RA(u, 0, 1, e, i);
  return (u) => u === 0 || u === 1 ? u : q1(l(u), n, s);
}
const K1 = (e) => (n) => n <= 0.5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2, I1 = (e) => (n) => 1 - e(1 - n), X1 = /* @__PURE__ */ Ho(0.33, 1.53, 0.69, 0.99), am = /* @__PURE__ */ I1(X1), Q1 = /* @__PURE__ */ K1(am), J1 = (e) => (e *= 2) < 1 ? 0.5 * am(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), im = (e) => 1 - Math.sin(Math.acos(e)), W1 = I1(im), ex = K1(im), zA = /* @__PURE__ */ Ho(0.42, 0, 1, 1), kA = /* @__PURE__ */ Ho(0, 0, 0.58, 1), tx = /* @__PURE__ */ Ho(0.42, 0, 0.58, 1), OA = (e) => Array.isArray(e) && typeof e[0] != "number", nx = (e) => Array.isArray(e) && typeof e[0] == "number", VA = {
  linear: Gn,
  easeIn: zA,
  easeInOut: tx,
  easeOut: kA,
  circIn: im,
  circInOut: ex,
  circOut: W1,
  backIn: am,
  backInOut: Q1,
  backOut: X1,
  anticipate: J1
}, $A = (e) => typeof e == "string", Wy = (e) => {
  if (nx(e)) {
    const [n, i, s, l] = e;
    return Ho(n, i, s, l);
  } else if ($A(e))
    return VA[e];
  return e;
}, e0 = A.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function NA({ children: e, isValidProp: n, ...i }) {
  i = { ...A.useContext(e0), ...i }, i.isStatic = _A(() => i.isStatic);
  const s = A.useMemo(() => i, [
    JSON.stringify(i.transition),
    i.transformPagePoint,
    i.reducedMotion
  ]);
  return $.jsx(e0.Provider, { value: s, children: e });
}
function rm(e) {
  let n = e;
  return n.nativeEvent = e, n.isDefaultPrevented = () => n.defaultPrevented, n.isPropagationStopped = () => n.cancelBubble, n.persist = () => {
  }, n;
}
function ax(e, n) {
  Object.defineProperty(e, "target", {
    value: n
  }), Object.defineProperty(e, "currentTarget", {
    value: n
  });
}
function ix(e) {
  let n = A.useRef({
    isFocused: !1,
    observer: null
  });
  qu(() => {
    const s = n.current;
    return () => {
      s.observer && (s.observer.disconnect(), s.observer = null);
    };
  }, []);
  let i = Zn((s) => {
    e?.(s);
  });
  return A.useCallback((s) => {
    if (s.target instanceof HTMLButtonElement || s.target instanceof HTMLInputElement || s.target instanceof HTMLTextAreaElement || s.target instanceof HTMLSelectElement) {
      n.current.isFocused = !0;
      let l = s.target, u = (f) => {
        if (n.current.isFocused = !1, l.disabled) {
          let h = rm(f);
          i(h);
        }
        n.current.observer && (n.current.observer.disconnect(), n.current.observer = null);
      };
      l.addEventListener("focusout", u, {
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
    i
  ]);
}
let ku = !1;
function jA(e) {
  for (; e && !TA(e); ) e = e.parentElement;
  let n = sa(e), i = n.document.activeElement;
  if (!i || i === e) return;
  ku = !0;
  let s = !1, l = (g) => {
    (g.target === i || s) && g.stopImmediatePropagation();
  }, u = (g) => {
    (g.target === i || s) && (g.stopImmediatePropagation(), !e && !s && (s = !0, as(i), m()));
  }, f = (g) => {
    (g.target === e || s) && g.stopImmediatePropagation();
  }, h = (g) => {
    (g.target === e || s) && (g.stopImmediatePropagation(), s || (s = !0, as(i), m()));
  };
  n.addEventListener("blur", l, !0), n.addEventListener("focusout", u, !0), n.addEventListener("focusin", h, !0), n.addEventListener("focus", f, !0);
  let m = () => {
    cancelAnimationFrame(p), n.removeEventListener("blur", l, !0), n.removeEventListener("focusout", u, !0), n.removeEventListener("focusin", h, !0), n.removeEventListener("focus", f, !0), ku = !1, s = !1;
  }, p = requestAnimationFrame(m);
  return m;
}
let Kr = "default", Wd = "", _u = /* @__PURE__ */ new WeakMap();
function LA(e) {
  if (N1()) {
    if (Kr === "default") {
      const n = on(e);
      Wd = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none";
    }
    Kr = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    _u.set(e, e.style[n]), e.style[n] = "none";
  }
}
function t0(e) {
  if (N1()) {
    if (Kr !== "disabled") return;
    Kr = "restoring", setTimeout(() => {
      U1(() => {
        if (Kr === "restoring") {
          const n = on(e);
          n.documentElement.style.webkitUserSelect === "none" && (n.documentElement.style.webkitUserSelect = Wd || ""), Wd = "", Kr = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && _u.has(e)) {
    let n = _u.get(e), i = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[i] === "none" && (e.style[i] = n), e.getAttribute("style") === "" && e.removeAttribute("style"), _u.delete(e);
  }
}
const rx = j.createContext({
  register: () => {
  }
});
rx.displayName = "PressResponderContext";
function UA(e, n) {
  return n.get ? n.get.call(e) : n.value;
}
function sx(e, n, i) {
  if (!n.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
  return n.get(e);
}
function BA(e, n) {
  var i = sx(e, n, "get");
  return UA(e, i);
}
function PA(e, n, i) {
  if (n.set) n.set.call(e, i);
  else {
    if (!n.writable)
      throw new TypeError("attempted to set read only private field");
    n.value = i;
  }
}
function n0(e, n, i) {
  var s = sx(e, n, "set");
  return PA(e, s, i), i;
}
function HA(e) {
  let n = A.useContext(rx);
  if (n) {
    let { register: i, ...s } = n;
    e = hi(s, e), i();
  }
  return B1(n, e.ref), e;
}
var su = /* @__PURE__ */ new WeakMap();
class ou {
  continuePropagation() {
    n0(this, su, !1);
  }
  get shouldStopPropagation() {
    return BA(this, su);
  }
  constructor(n, i, s, l) {
    Q2(this, su, {
      writable: !0,
      value: void 0
    }), n0(this, su, !0);
    var u;
    let f = (u = l?.target) !== null && u !== void 0 ? u : s.currentTarget;
    const h = f?.getBoundingClientRect();
    let m, p = 0, g, v = null;
    s.clientX != null && s.clientY != null && (g = s.clientX, v = s.clientY), h && (g != null && v != null ? (m = g - h.left, p = v - h.top) : (m = h.width / 2, p = h.height / 2)), this.type = n, this.pointerType = i, this.target = s.currentTarget, this.shiftKey = s.shiftKey, this.metaKey = s.metaKey, this.ctrlKey = s.ctrlKey, this.altKey = s.altKey, this.x = m, this.y = p;
  }
}
const a0 = Symbol("linkClicked"), i0 = "react-aria-pressable-style", r0 = "data-react-aria-pressable";
function eh(e) {
  let { onPress: n, onPressChange: i, onPressStart: s, onPressEnd: l, onPressUp: u, onClick: f, isDisabled: h, isPressed: m, preventFocusOnPress: p, shouldCancelOnPointerExit: g, allowTextSelectionOnPress: v, ref: b, ...E } = HA(e), [_, M] = A.useState(!1), N = A.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: L, removeAllGlobalListeners: z } = Jh(), Z = Zn((K, q) => {
    let ne = N.current;
    if (h || ne.didFirePressStart) return !1;
    let H = !0;
    if (ne.isTriggeringEvent = !0, s) {
      let ie = new ou("pressstart", q, K);
      s(ie), H = ie.shouldStopPropagation;
    }
    return i && i(!0), ne.isTriggeringEvent = !1, ne.didFirePressStart = !0, M(!0), H;
  }), ee = Zn((K, q, ne = !0) => {
    let H = N.current;
    if (!H.didFirePressStart) return !1;
    H.didFirePressStart = !1, H.isTriggeringEvent = !0;
    let ie = !0;
    if (l) {
      let S = new ou("pressend", q, K);
      l(S), ie = S.shouldStopPropagation;
    }
    if (i && i(!1), M(!1), n && ne && !h) {
      let S = new ou("press", q, K);
      n(S), ie && (ie = S.shouldStopPropagation);
    }
    return H.isTriggeringEvent = !1, ie;
  }), I = Zn((K, q) => {
    let ne = N.current;
    if (h) return !1;
    if (u) {
      ne.isTriggeringEvent = !0;
      let H = new ou("pressup", q, K);
      return u(H), ne.isTriggeringEvent = !1, H.shouldStopPropagation;
    }
    return !0;
  }), k = Zn((K) => {
    let q = N.current;
    if (q.isPressed && q.target) {
      q.didFirePressStart && q.pointerType != null && ee(ji(q.target, K), q.pointerType, !1), q.isPressed = !1, q.isOverTarget = !1, q.activePointerId = null, q.pointerType = null, z(), v || t0(q.target);
      for (let ne of q.disposables) ne();
      q.disposables = [];
    }
  }), W = Zn((K) => {
    g && k(K);
  }), Y = Zn((K) => {
    f?.(K);
  }), de = Zn((K, q) => {
    if (f) {
      let ne = new MouseEvent("click", K);
      ax(ne, q), f(rm(ne));
    }
  }), ve = A.useMemo(() => {
    let K = N.current, q = {
      onKeyDown(H) {
        if (Sd(H.nativeEvent, H.currentTarget) && Pn(H.currentTarget, an(H.nativeEvent))) {
          var ie;
          s0(an(H.nativeEvent), H.key) && H.preventDefault();
          let S = !0;
          if (!K.isPressed && !H.repeat) {
            K.target = H.currentTarget, K.isPressed = !0, K.pointerType = "keyboard", S = Z(H, "keyboard");
            let O = H.currentTarget, R = (ue) => {
              Sd(ue, O) && !ue.repeat && Pn(O, an(ue)) && K.target && I(ji(K.target, ue), "keyboard");
            };
            L(on(H.currentTarget), "keyup", O1(R, ne), !0);
          }
          S && H.stopPropagation(), H.metaKey && zo() && ((ie = K.metaKeyEvents) === null || ie === void 0 || ie.set(H.key, H.nativeEvent));
        } else H.key === "Meta" && (K.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(H) {
        if (!(H && !Pn(H.currentTarget, an(H.nativeEvent))) && H && H.button === 0 && !K.isTriggeringEvent && !Ki.isOpening) {
          let ie = !0;
          if (h && H.preventDefault(), !K.ignoreEmulatedMouseEvents && !K.isPressed && (K.pointerType === "virtual" || P1(H.nativeEvent))) {
            let S = Z(H, "virtual"), O = I(H, "virtual"), R = ee(H, "virtual");
            Y(H), ie = S && O && R;
          } else if (K.isPressed && K.pointerType !== "keyboard") {
            let S = K.pointerType || H.nativeEvent.pointerType || "virtual", O = I(ji(H.currentTarget, H), S), R = ee(ji(H.currentTarget, H), S, !0);
            ie = O && R, K.isOverTarget = !1, Y(H), k(H);
          }
          K.ignoreEmulatedMouseEvents = !1, ie && H.stopPropagation();
        }
      }
    }, ne = (H) => {
      var ie;
      if (K.isPressed && K.target && Sd(H, K.target)) {
        var S;
        s0(an(H), H.key) && H.preventDefault();
        let R = an(H), ue = Pn(K.target, an(H));
        ee(ji(K.target, H), "keyboard", ue), ue && de(H, K.target), z(), H.key !== "Enter" && sm(K.target) && Pn(K.target, R) && !H[a0] && (H[a0] = !0, Ki(K.target, H, !1)), K.isPressed = !1, (S = K.metaKeyEvents) === null || S === void 0 || S.delete(H.key);
      } else if (H.key === "Meta" && (!((ie = K.metaKeyEvents) === null || ie === void 0) && ie.size)) {
        var O;
        let R = K.metaKeyEvents;
        K.metaKeyEvents = void 0;
        for (let ue of R.values()) (O = K.target) === null || O === void 0 || O.dispatchEvent(new KeyboardEvent("keyup", ue));
      }
    };
    if (typeof PointerEvent < "u") {
      q.onPointerDown = (S) => {
        if (S.button !== 0 || !Pn(S.currentTarget, an(S.nativeEvent))) return;
        if (bA(S.nativeEvent)) {
          K.pointerType = "virtual";
          return;
        }
        K.pointerType = S.pointerType;
        let O = !0;
        if (!K.isPressed) {
          K.isPressed = !0, K.isOverTarget = !0, K.activePointerId = S.pointerId, K.target = S.currentTarget, v || LA(K.target), O = Z(S, K.pointerType);
          let R = an(S.nativeEvent);
          "releasePointerCapture" in R && R.releasePointerCapture(S.pointerId), L(on(S.currentTarget), "pointerup", H, !1), L(on(S.currentTarget), "pointercancel", ie, !1);
        }
        O && S.stopPropagation();
      }, q.onMouseDown = (S) => {
        if (Pn(S.currentTarget, an(S.nativeEvent)) && S.button === 0) {
          if (p) {
            let O = jA(S.target);
            O && K.disposables.push(O);
          }
          S.stopPropagation();
        }
      }, q.onPointerUp = (S) => {
        !Pn(S.currentTarget, an(S.nativeEvent)) || K.pointerType === "virtual" || S.button === 0 && !K.isPressed && I(S, K.pointerType || S.pointerType);
      }, q.onPointerEnter = (S) => {
        S.pointerId === K.activePointerId && K.target && !K.isOverTarget && K.pointerType != null && (K.isOverTarget = !0, Z(ji(K.target, S), K.pointerType));
      }, q.onPointerLeave = (S) => {
        S.pointerId === K.activePointerId && K.target && K.isOverTarget && K.pointerType != null && (K.isOverTarget = !1, ee(ji(K.target, S), K.pointerType, !1), W(S));
      };
      let H = (S) => {
        if (S.pointerId === K.activePointerId && K.isPressed && S.button === 0 && K.target) {
          if (Pn(K.target, an(S)) && K.pointerType != null) {
            let O = !1, R = setTimeout(() => {
              K.isPressed && K.target instanceof HTMLElement && (O ? k(S) : (as(K.target), K.target.click()));
            }, 80);
            L(S.currentTarget, "click", () => O = !0, !0), K.disposables.push(() => clearTimeout(R));
          } else k(S);
          K.isOverTarget = !1;
        }
      }, ie = (S) => {
        k(S);
      };
      q.onDragStart = (S) => {
        Pn(S.currentTarget, an(S.nativeEvent)) && k(S);
      };
    }
    return q;
  }, [
    L,
    h,
    p,
    z,
    v,
    k,
    W,
    ee,
    Z,
    I,
    Y,
    de
  ]);
  return A.useEffect(() => {
    if (!b) return;
    const K = on(b.current);
    if (!K || !K.head || K.getElementById(i0)) return;
    const q = K.createElement("style");
    q.id = i0, q.textContent = `
@layer {
  [${r0}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), K.head.prepend(q);
  }, [
    b
  ]), A.useEffect(() => {
    let K = N.current;
    return () => {
      var q;
      v || t0((q = K.target) !== null && q !== void 0 ? q : void 0);
      for (let ne of K.disposables) ne();
      K.disposables = [];
    };
  }, [
    v
  ]), {
    isPressed: m || _,
    pressProps: hi(E, ve, {
      [r0]: !0
    })
  };
}
function sm(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Sd(e, n) {
  const { key: i, code: s } = e, l = n, u = l.getAttribute("role");
  return (i === "Enter" || i === " " || i === "Spacebar" || s === "Space") && !(l instanceof sa(l).HTMLInputElement && !ox(l, i) || l instanceof sa(l).HTMLTextAreaElement || l.isContentEditable) && // Links should only trigger with Enter key
  !((u === "link" || !u && sm(l)) && i !== "Enter");
}
function ji(e, n) {
  let i = n.clientX, s = n.clientY;
  return {
    currentTarget: e,
    shiftKey: n.shiftKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey,
    altKey: n.altKey,
    clientX: i,
    clientY: s
  };
}
function ZA(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !sm(e);
}
function s0(e, n) {
  return e instanceof HTMLInputElement ? !ox(e, n) : ZA(e);
}
const GA = /* @__PURE__ */ new Set([
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
function ox(e, n) {
  return e.type === "checkbox" || e.type === "radio" ? n === " " : GA.has(e.type);
}
let Ji = null, th = /* @__PURE__ */ new Set(), So = /* @__PURE__ */ new Map(), Ii = !1, nh = !1;
const YA = {
  Tab: !0,
  Escape: !0
};
function Iu(e, n) {
  for (let i of th) i(e, n);
}
function FA(e) {
  return !(e.metaKey || !zo() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Ou(e) {
  Ii = !0, FA(e) && (Ji = "keyboard", Iu("keyboard", e));
}
function es(e) {
  Ji = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ii = !0, Iu("pointer", e));
}
function lx(e) {
  P1(e) && (Ii = !0, Ji = "virtual");
}
function ux(e) {
  e.target === window || e.target === document || ku || !e.isTrusted || (!Ii && !nh && (Ji = "virtual", Iu("virtual", e)), Ii = !1, nh = !1);
}
function cx() {
  ku || (Ii = !1, nh = !0);
}
function ah(e) {
  if (typeof window > "u" || typeof document > "u" || So.get(sa(e))) return;
  const n = sa(e), i = on(e);
  let s = n.HTMLElement.prototype.focus;
  n.HTMLElement.prototype.focus = function() {
    Ii = !0, s.apply(this, arguments);
  }, i.addEventListener("keydown", Ou, !0), i.addEventListener("keyup", Ou, !0), i.addEventListener("click", lx, !0), n.addEventListener("focus", ux, !0), n.addEventListener("blur", cx, !1), typeof PointerEvent < "u" && (i.addEventListener("pointerdown", es, !0), i.addEventListener("pointermove", es, !0), i.addEventListener("pointerup", es, !0)), n.addEventListener("beforeunload", () => {
    fx(e);
  }, {
    once: !0
  }), So.set(n, {
    focus: s
  });
}
const fx = (e, n) => {
  const i = sa(e), s = on(e);
  n && s.removeEventListener("DOMContentLoaded", n), So.has(i) && (i.HTMLElement.prototype.focus = So.get(i).focus, s.removeEventListener("keydown", Ou, !0), s.removeEventListener("keyup", Ou, !0), s.removeEventListener("click", lx, !0), i.removeEventListener("focus", ux, !0), i.removeEventListener("blur", cx, !1), typeof PointerEvent < "u" && (s.removeEventListener("pointerdown", es, !0), s.removeEventListener("pointermove", es, !0), s.removeEventListener("pointerup", es, !0)), So.delete(i));
};
function qA(e) {
  const n = on(e);
  let i;
  return n.readyState !== "loading" ? ah(e) : (i = () => {
    ah(e);
  }, n.addEventListener("DOMContentLoaded", i)), () => fx(e, i);
}
typeof document < "u" && qA();
function dx() {
  return Ji !== "pointer";
}
function KA() {
  return Ji;
}
function IA(e) {
  Ji = e, Iu(e, null);
}
const XA = /* @__PURE__ */ new Set([
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
function QA(e, n, i) {
  let s = on(i?.target);
  const l = typeof window < "u" ? sa(i?.target).HTMLInputElement : HTMLInputElement, u = typeof window < "u" ? sa(i?.target).HTMLTextAreaElement : HTMLTextAreaElement, f = typeof window < "u" ? sa(i?.target).HTMLElement : HTMLElement, h = typeof window < "u" ? sa(i?.target).KeyboardEvent : KeyboardEvent;
  return e = e || s.activeElement instanceof l && !XA.has(s.activeElement.type) || s.activeElement instanceof u || s.activeElement instanceof f && s.activeElement.isContentEditable, !(e && n === "keyboard" && i instanceof h && !YA[i.key]);
}
function JA(e, n, i) {
  ah(), A.useEffect(() => {
    let s = (l, u) => {
      QA(!!i?.isTextInput, l, u) && e(dx());
    };
    return th.add(s), () => {
      th.delete(s);
    };
  }, n);
}
function WA(e) {
  const n = on(e), i = Ro(n);
  if (KA() === "virtual") {
    let s = i;
    U1(() => {
      Ro(n) === s && e.isConnected && as(e);
    });
  } else as(e);
}
function hx(e) {
  let { isDisabled: n, onFocus: i, onBlur: s, onFocusChange: l } = e;
  const u = A.useCallback((m) => {
    if (m.target === m.currentTarget)
      return s && s(m), l && l(!1), !0;
  }, [
    s,
    l
  ]), f = ix(u), h = A.useCallback((m) => {
    const p = on(m.target), g = p ? Ro(p) : Ro();
    m.target === m.currentTarget && g === an(m.nativeEvent) && (i && i(m), l && l(!0), f(m));
  }, [
    l,
    i,
    f
  ]);
  return {
    focusProps: {
      onFocus: !n && (i || l || s) ? h : void 0,
      onBlur: !n && (s || l) ? u : void 0
    }
  };
}
function o0(e) {
  if (!e) return;
  let n = !0;
  return (i) => {
    let s = {
      ...i,
      preventDefault() {
        i.preventDefault();
      },
      isDefaultPrevented() {
        return i.isDefaultPrevented();
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
    e(s), n && i.stopPropagation();
  };
}
function e_(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: o0(e.onKeyDown),
      onKeyUp: o0(e.onKeyUp)
    }
  };
}
let t_ = /* @__PURE__ */ j.createContext(null);
function n_(e) {
  let n = A.useContext(t_) || {};
  B1(n, e);
  let { ref: i, ...s } = n;
  return s;
}
function a_(e, n) {
  let { focusProps: i } = hx(e), { keyboardProps: s } = e_(e), l = hi(i, s), u = n_(n), f = e.isDisabled ? {} : u, h = A.useRef(e.autoFocus);
  A.useEffect(() => {
    h.current && n.current && WA(n.current), h.current = !1;
  }, [
    n
  ]);
  let m = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (m = void 0), {
    focusableProps: hi({
      ...l,
      tabIndex: m
    }, f)
  };
}
function i_(e) {
  let { isDisabled: n, onBlurWithin: i, onFocusWithin: s, onFocusWithinChange: l } = e, u = A.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: f, removeAllGlobalListeners: h } = Jh(), m = A.useCallback((v) => {
    v.currentTarget.contains(v.target) && u.current.isFocusWithin && !v.currentTarget.contains(v.relatedTarget) && (u.current.isFocusWithin = !1, h(), i && i(v), l && l(!1));
  }, [
    i,
    l,
    u,
    h
  ]), p = ix(m), g = A.useCallback((v) => {
    if (!v.currentTarget.contains(v.target)) return;
    const b = on(v.target), E = Ro(b);
    if (!u.current.isFocusWithin && E === an(v.nativeEvent)) {
      s && s(v), l && l(!0), u.current.isFocusWithin = !0, p(v);
      let _ = v.currentTarget;
      f(b, "focus", (M) => {
        if (u.current.isFocusWithin && !Pn(_, M.target)) {
          let N = new b.defaultView.FocusEvent("blur", {
            relatedTarget: M.target
          });
          ax(N, _);
          let L = rm(N);
          m(L);
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
let ih = !1, wd = 0;
function r_() {
  ih = !0, setTimeout(() => {
    ih = !1;
  }, 50);
}
function l0(e) {
  e.pointerType === "touch" && r_();
}
function s_() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", l0), wd++, () => {
      wd--, !(wd > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", l0);
    };
}
function o_(e) {
  let { onHoverStart: n, onHoverChange: i, onHoverEnd: s, isDisabled: l } = e, [u, f] = A.useState(!1), h = A.useRef({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  A.useEffect(s_, []);
  let { addGlobalListener: m, removeAllGlobalListeners: p } = Jh(), { hoverProps: g, triggerHoverEnd: v } = A.useMemo(() => {
    let b = (M, N) => {
      if (h.pointerType = N, l || N === "touch" || h.isHovered || !M.currentTarget.contains(M.target)) return;
      h.isHovered = !0;
      let L = M.currentTarget;
      h.target = L, m(on(M.target), "pointerover", (z) => {
        h.isHovered && h.target && !Pn(h.target, z.target) && E(z, z.pointerType);
      }, {
        capture: !0
      }), n && n({
        type: "hoverstart",
        target: L,
        pointerType: N
      }), i && i(!0), f(!0);
    }, E = (M, N) => {
      let L = h.target;
      h.pointerType = "", h.target = null, !(N === "touch" || !h.isHovered || !L) && (h.isHovered = !1, p(), s && s({
        type: "hoverend",
        target: L,
        pointerType: N
      }), i && i(!1), f(!1));
    }, _ = {};
    return typeof PointerEvent < "u" && (_.onPointerEnter = (M) => {
      ih && M.pointerType === "mouse" || b(M, M.pointerType);
    }, _.onPointerLeave = (M) => {
      !l && M.currentTarget.contains(M.target) && E(M, M.pointerType);
    }), {
      hoverProps: _,
      triggerHoverEnd: E
    };
  }, [
    n,
    i,
    s,
    l,
    h,
    m,
    p
  ]);
  return A.useEffect(() => {
    l && v({
      currentTarget: h.target
    }, h.pointerType);
  }, [
    l
  ]), {
    hoverProps: g,
    isHovered: u
  };
}
function l_(e = {}) {
  let { autoFocus: n = !1, isTextInput: i, within: s } = e, l = A.useRef({
    isFocused: !1,
    isFocusVisible: n || dx()
  }), [u, f] = A.useState(!1), [h, m] = A.useState(() => l.current.isFocused && l.current.isFocusVisible), p = A.useCallback(() => m(l.current.isFocused && l.current.isFocusVisible), []), g = A.useCallback((E) => {
    l.current.isFocused = E, f(E), p();
  }, [
    p
  ]);
  JA((E) => {
    l.current.isFocusVisible = E, p();
  }, [], {
    isTextInput: i
  });
  let { focusProps: v } = hx({
    isDisabled: s,
    onFocusChange: g
  }), { focusWithinProps: b } = i_({
    isDisabled: !s,
    onFocusWithinChange: g
  });
  return {
    isFocused: u,
    isFocusVisible: h,
    focusProps: s ? b : v
  };
}
const rh = /* @__PURE__ */ j.createContext(null);
function u_(e) {
  let { children: n } = e, i = A.useContext(rh), [s, l] = A.useState(0), u = A.useMemo(() => ({
    parent: i,
    modalCount: s,
    addModal() {
      l((f) => f + 1), i && i.addModal();
    },
    removeModal() {
      l((f) => f - 1), i && i.removeModal();
    }
  }), [
    i,
    s
  ]);
  return /* @__PURE__ */ j.createElement(rh.Provider, {
    value: u
  }, n);
}
function c_() {
  let e = A.useContext(rh);
  return {
    modalProviderProps: {
      "aria-hidden": e && e.modalCount > 0 ? !0 : void 0
    }
  };
}
function f_(e) {
  let { modalProviderProps: n } = c_();
  return /* @__PURE__ */ j.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...n
  });
}
function d_(e) {
  return /* @__PURE__ */ j.createElement(u_, null, /* @__PURE__ */ j.createElement(f_, e));
}
var Ed = ({
  children: e,
  navigate: n,
  disableAnimation: i,
  useHref: s,
  disableRipple: l = !1,
  skipFramerMotionAnimations: u = i,
  reducedMotion: f = "never",
  validationBehavior: h,
  locale: m = "en-US",
  labelPlacement: p,
  // if minDate / maxDate are not specified in `defaultDates`
  // then they will be set in `use-date-input.ts` or `use-calendar-base.ts`
  defaultDates: g,
  createCalendar: v,
  spinnerVariant: b,
  ...E
}) => {
  let _ = e;
  n && (_ = /* @__PURE__ */ $.jsx(pA, { navigate: n, useHref: s, children: _ }));
  const M = A.useMemo(() => (i && u && (fa.skipAnimations = !0), {
    createCalendar: v,
    defaultDates: g,
    disableAnimation: i,
    disableRipple: l,
    validationBehavior: h,
    labelPlacement: p,
    spinnerVariant: b
  }), [
    v,
    g?.maxDate,
    g?.minDate,
    i,
    l,
    h,
    p,
    b
  ]);
  return /* @__PURE__ */ $.jsx(j2, { value: M, children: /* @__PURE__ */ $.jsx(I2, { locale: m, children: /* @__PURE__ */ $.jsx(NA, { reducedMotion: f, children: /* @__PURE__ */ $.jsx(d_, { ...E, children: _ }) }) }) });
};
function h_(e) {
  return A.forwardRef(e);
}
var m_ = {
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
}, p_ = {
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
}, g_ = {
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
}, v_ = {
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
}, ia = "250ms", y_ = {
  /**
   * Transition utilities
   */
  ".transition-background": {
    "transition-property": "background",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-colors-opacity": {
    "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-width": {
    "transition-property": "width",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-height": {
    "transition-property": "height",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-size": {
    "transition-property": "width, height",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-left": {
    "transition-property": "left",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-transform-opacity": {
    "transition-property": "transform, scale, opacity rotate",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-transform-background": {
    "transition-property": "transform, scale, background",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-transform-colors": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke",
    "transition-timing-function": "ease",
    "transition-duration": ia
  },
  ".transition-transform-colors-opacity": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": ia
  }
}, b_ = {
  ...p_,
  ...y_,
  ...g_,
  ...v_,
  ...m_
}, lu = ["small", "medium", "large"], u0 = {
  theme: {
    spacing: ["divider"],
    radius: lu
  },
  classGroups: {
    shadow: [{ shadow: lu }],
    opacity: [{ opacity: ["disabled"] }],
    "font-size": [{ text: ["tiny", ...lu] }],
    "border-w": [{ border: lu }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ],
    transition: Object.keys(b_).filter((e) => e.includes(".transition")).map((e) => e.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
}, c0 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mn = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, x_ = (e, n) => JSON.stringify(e) === JSON.stringify(n);
function mx(e, n) {
  e.forEach(function(i) {
    Array.isArray(i) ? mx(i, n) : n.push(i);
  });
}
function px(e) {
  let n = [];
  return mx(e, n), n;
}
var gx = (...e) => px(e).filter(Boolean), vx = (e, n) => {
  let i = {}, s = Object.keys(e), l = Object.keys(n);
  for (let u of s) if (l.includes(u)) {
    let f = e[u], h = n[u];
    Array.isArray(f) || Array.isArray(h) ? i[u] = gx(h, f) : typeof f == "object" && typeof h == "object" ? i[u] = vx(f, h) : i[u] = h + " " + f;
  } else i[u] = e[u];
  for (let u of l) s.includes(u) || (i[u] = n[u]);
  return i;
}, f0 = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const om = "-", S_ = (e) => {
  const n = E_(e), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (f) => {
      const h = f.split(om);
      return h[0] === "" && h.length !== 1 && h.shift(), yx(h, n) || w_(f);
    },
    getConflictingClassGroupIds: (f, h) => {
      const m = i[f] || [];
      return h && s[f] ? [...m, ...s[f]] : m;
    }
  };
}, yx = (e, n) => {
  if (e.length === 0)
    return n.classGroupId;
  const i = e[0], s = n.nextPart.get(i), l = s ? yx(e.slice(1), s) : void 0;
  if (l)
    return l;
  if (n.validators.length === 0)
    return;
  const u = e.join(om);
  return n.validators.find(({
    validator: f
  }) => f(u))?.classGroupId;
}, d0 = /^\[(.+)\]$/, w_ = (e) => {
  if (d0.test(e)) {
    const n = d0.exec(e)[1], i = n?.substring(0, n.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, E_ = (e) => {
  const {
    theme: n,
    classGroups: i
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const l in i)
    sh(i[l], s, l, n);
  return s;
}, sh = (e, n, i, s) => {
  e.forEach((l) => {
    if (typeof l == "string") {
      const u = l === "" ? n : h0(n, l);
      u.classGroupId = i;
      return;
    }
    if (typeof l == "function") {
      if (T_(l)) {
        sh(l(s), n, i, s);
        return;
      }
      n.validators.push({
        validator: l,
        classGroupId: i
      });
      return;
    }
    Object.entries(l).forEach(([u, f]) => {
      sh(f, h0(n, u), i, s);
    });
  });
}, h0 = (e, n) => {
  let i = e;
  return n.split(om).forEach((s) => {
    i.nextPart.has(s) || i.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(s);
  }), i;
}, T_ = (e) => e.isThemeGetter, A_ = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const l = (u, f) => {
    i.set(u, f), n++, n > e && (n = 0, s = i, i = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let f = i.get(u);
      if (f !== void 0)
        return f;
      if ((f = s.get(u)) !== void 0)
        return l(u, f), f;
    },
    set(u, f) {
      i.has(u) ? i.set(u, f) : l(u, f);
    }
  };
}, oh = "!", lh = ":", __ = lh.length, C_ = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: i
  } = e;
  let s = (l) => {
    const u = [];
    let f = 0, h = 0, m = 0, p;
    for (let _ = 0; _ < l.length; _++) {
      let M = l[_];
      if (f === 0 && h === 0) {
        if (M === lh) {
          u.push(l.slice(m, _)), m = _ + __;
          continue;
        }
        if (M === "/") {
          p = _;
          continue;
        }
      }
      M === "[" ? f++ : M === "]" ? f-- : M === "(" ? h++ : M === ")" && h--;
    }
    const g = u.length === 0 ? l : l.substring(m), v = M_(g), b = v !== g, E = p && p > m ? p - m : void 0;
    return {
      modifiers: u,
      hasImportantModifier: b,
      baseClassName: v,
      maybePostfixModifierPosition: E
    };
  };
  if (n) {
    const l = n + lh, u = s;
    s = (f) => f.startsWith(l) ? u(f.substring(l.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: f,
      maybePostfixModifierPosition: void 0
    };
  }
  if (i) {
    const l = s;
    s = (u) => i({
      className: u,
      parseClassName: l
    });
  }
  return s;
}, M_ = (e) => e.endsWith(oh) ? e.substring(0, e.length - 1) : e.startsWith(oh) ? e.substring(1) : e, D_ = (e) => {
  const n = Object.fromEntries(e.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const l = [];
    let u = [];
    return s.forEach((f) => {
      f[0] === "[" || n[f] ? (l.push(...u.sort(), f), u = []) : u.push(f);
    }), l.push(...u.sort()), l;
  };
}, R_ = (e) => ({
  cache: A_(e.cacheSize),
  parseClassName: C_(e),
  sortModifiers: D_(e),
  ...S_(e)
}), z_ = /\s+/, k_ = (e, n) => {
  const {
    parseClassName: i,
    getClassGroupId: s,
    getConflictingClassGroupIds: l,
    sortModifiers: u
  } = n, f = [], h = e.trim().split(z_);
  let m = "";
  for (let p = h.length - 1; p >= 0; p -= 1) {
    const g = h[p], {
      isExternal: v,
      modifiers: b,
      hasImportantModifier: E,
      baseClassName: _,
      maybePostfixModifierPosition: M
    } = i(g);
    if (v) {
      m = g + (m.length > 0 ? " " + m : m);
      continue;
    }
    let N = !!M, L = s(N ? _.substring(0, M) : _);
    if (!L) {
      if (!N) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (L = s(_), !L) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      N = !1;
    }
    const z = u(b).join(":"), Z = E ? z + oh : z, ee = Z + L;
    if (f.includes(ee))
      continue;
    f.push(ee);
    const I = l(L, N);
    for (let k = 0; k < I.length; ++k) {
      const W = I[k];
      f.push(Z + W);
    }
    m = g + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function O_() {
  let e = 0, n, i, s = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (i = bx(n)) && (s && (s += " "), s += i);
  return s;
}
const bx = (e) => {
  if (typeof e == "string")
    return e;
  let n, i = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (n = bx(e[s])) && (i && (i += " "), i += n);
  return i;
};
function uh(e, ...n) {
  let i, s, l, u = f;
  function f(m) {
    const p = n.reduce((g, v) => v(g), e());
    return i = R_(p), s = i.cache.get, l = i.cache.set, u = h, h(m);
  }
  function h(m) {
    const p = s(m);
    if (p)
      return p;
    const g = k_(m, i);
    return l(m, g), g;
  }
  return function() {
    return u(O_.apply(null, arguments));
  };
}
const Zt = (e) => {
  const n = (i) => i[e] || [];
  return n.isThemeGetter = !0, n;
}, xx = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Sx = /^\((?:(\w[\w-]*):)?(.+)\)$/i, V_ = /^\d+\/\d+$/, $_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, N_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, j_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, L_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, U_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pr = (e) => V_.test(e), Pe = (e) => !!e && !Number.isNaN(Number(e)), Li = (e) => !!e && Number.isInteger(Number(e)), m0 = (e) => e.endsWith("%") && Pe(e.slice(0, -1)), li = (e) => $_.test(e), B_ = () => !0, P_ = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  N_.test(e) && !j_.test(e)
), lm = () => !1, H_ = (e) => L_.test(e), Z_ = (e) => U_.test(e), G_ = (e) => !we(e) && !Ee(e), Y_ = (e) => ss(e, Tx, lm), we = (e) => xx.test(e), Ui = (e) => ss(e, Ax, P_), Td = (e) => ss(e, nC, Pe), F_ = (e) => ss(e, wx, lm), q_ = (e) => ss(e, Ex, Z_), K_ = (e) => ss(e, lm, H_), Ee = (e) => Sx.test(e), uu = (e) => os(e, Ax), I_ = (e) => os(e, aC), X_ = (e) => os(e, wx), Q_ = (e) => os(e, Tx), J_ = (e) => os(e, Ex), W_ = (e) => os(e, iC, !0), ss = (e, n, i) => {
  const s = xx.exec(e);
  return s ? s[1] ? n(s[1]) : i(s[2]) : !1;
}, os = (e, n, i = !1) => {
  const s = Sx.exec(e);
  return s ? s[1] ? n(s[1]) : i : !1;
}, wx = (e) => e === "position", eC = /* @__PURE__ */ new Set(["image", "url"]), Ex = (e) => eC.has(e), tC = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Tx = (e) => tC.has(e), Ax = (e) => e === "length", nC = (e) => e === "number", aC = (e) => e === "family-name", iC = (e) => e === "shadow", ch = () => {
  const e = Zt("color"), n = Zt("font"), i = Zt("text"), s = Zt("font-weight"), l = Zt("tracking"), u = Zt("leading"), f = Zt("breakpoint"), h = Zt("container"), m = Zt("spacing"), p = Zt("radius"), g = Zt("shadow"), v = Zt("inset-shadow"), b = Zt("drop-shadow"), E = Zt("blur"), _ = Zt("perspective"), M = Zt("aspect"), N = Zt("ease"), L = Zt("animate"), z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], k = () => [Ee, we, m], W = () => [Pr, "full", "auto", ...k()], Y = () => [Li, "none", "subgrid", Ee, we], de = () => ["auto", {
    span: ["full", Li, Ee, we]
  }, Ee, we], ve = () => [Li, "auto", Ee, we], K = () => ["auto", "min", "max", "fr", Ee, we], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], ne = () => ["start", "end", "center", "stretch"], H = () => ["auto", ...k()], ie = () => [Pr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], S = () => [e, Ee, we], O = () => [m0, Ui], R = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    Ee,
    we
  ], ue = () => ["", Pe, uu, Ui], w = () => ["solid", "dashed", "dotted", "double"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], oe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    Ee,
    we
  ], Q = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ee, we], le = () => ["none", Pe, Ee, we], me = () => ["none", Pe, Ee, we], ge = () => [Pe, Ee, we], _e = () => [Pr, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [li],
      breakpoint: [li],
      color: [B_],
      container: [li],
      "drop-shadow": [li],
      ease: ["in", "out", "in-out"],
      font: [G_],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [li],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [li],
      shadow: [li],
      spacing: ["px", Pe],
      text: [li],
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
        aspect: ["auto", "square", Pr, we, Ee, M]
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
        columns: [Pe, we, Ee, h]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": z()
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
        object: [...Z(), we, Ee]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        inset: W()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": W()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": W()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: W()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: W()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: W()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: W()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: W()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: W()
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
        z: [Li, "auto", Ee, we]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Pr, "full", "auto", h, ...k()]
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
        flex: [Pe, Pr, "auto", "initial", "none", we]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Pe, Ee, we]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Pe, Ee, we]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Li, "first", "last", "none", Ee, we]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Y()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: de()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ve()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ve()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Y()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: de()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ve()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ve()
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
        "auto-cols": K()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": K()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: k()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": k()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": k()
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
        content: ["normal", ...q()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ne(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ne(), "baseline"]
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
        p: k()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: k()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: k()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: k()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: k()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: k()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: k()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: k()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: k()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: H()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": k()
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
        "space-y": k()
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
        size: ie()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [h, "screen", ...ie()]
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
          ...ie()
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
          ...ie()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...ie()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...ie()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...ie()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", i, uu, Ui]
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
        font: [s, Ee, Td]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", m0, we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [I_, we, n]
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
        tracking: [l, Ee, we]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Pe, "none", Ee, Td]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ee, we]
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
        list: ["disc", "decimal", "none", Ee, we]
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
        decoration: [Pe, "from-font", "auto", Ee, Ui]
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
        "underline-offset": [Pe, "auto", Ee, we]
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
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ee, we]
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
        content: ["none", Ee, we]
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
        bg: [...Z(), X_, F_]
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
        bg: ["auto", "cover", "contain", Q_, Y_]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Li, Ee, we],
          radial: ["", Ee, we],
          conic: [Li, Ee, we]
        }, J_, q_]
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
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
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
        rounded: R()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": R()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": R()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": R()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": R()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": R()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": R()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": R()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": R()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": R()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": R()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": R()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": R()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": R()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": R()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ue()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ue()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ue()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ue()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ue()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ue()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ue()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ue()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ue()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ue()
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
        "divide-y": ue()
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
        "outline-offset": [Pe, Ee, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Pe, uu, Ui]
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
          W_,
          K_
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
        "inset-shadow": ["none", Ee, we, v]
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
        ring: ue()
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
        "ring-offset": [Pe, Ui]
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
        "inset-ring": ue()
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
        opacity: [Pe, Ee, we]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
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
          Ee,
          we
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: oe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Pe, Ee, we]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Pe, Ee, we]
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
          b,
          Ee,
          we
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Pe, Ee, we]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Pe, Ee, we]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Pe, Ee, we]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Pe, Ee, we]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Pe, Ee, we]
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
          Ee,
          we
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": oe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Pe, Ee, we]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Pe, Ee, we]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Pe, Ee, we]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Pe, Ee, we]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Pe, Ee, we]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Pe, Ee, we]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Pe, Ee, we]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Pe, Ee, we]
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
        "border-spacing": k()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": k()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": k()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Ee, we]
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
        duration: [Pe, "initial", Ee, we]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", N, Ee, we]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Pe, Ee, we]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", L, Ee, we]
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
        perspective: [_, Ee, we]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Q()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: le()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": le()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": le()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": le()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: me()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": me()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": me()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": me()
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
        skew: ge()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ge()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ge()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Ee, we, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Q()
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
        translate: _e()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": _e()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": _e()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": _e()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ee, we]
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
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
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
        "will-change": ["auto", "scroll", "contents", "transform", Ee, we]
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
        stroke: [Pe, uu, Ui, Td]
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
}, rC = (e, {
  cacheSize: n,
  prefix: i,
  experimentalParseClassName: s,
  extend: l = {},
  override: u = {}
}) => (bo(e, "cacheSize", n), bo(e, "prefix", i), bo(e, "experimentalParseClassName", s), cu(e.theme, u.theme), cu(e.classGroups, u.classGroups), cu(e.conflictingClassGroups, u.conflictingClassGroups), cu(e.conflictingClassGroupModifiers, u.conflictingClassGroupModifiers), bo(e, "orderSensitiveModifiers", u.orderSensitiveModifiers), fu(e.theme, l.theme), fu(e.classGroups, l.classGroups), fu(e.conflictingClassGroups, l.conflictingClassGroups), fu(e.conflictingClassGroupModifiers, l.conflictingClassGroupModifiers), _x(e, l, "orderSensitiveModifiers"), e), bo = (e, n, i) => {
  i !== void 0 && (e[n] = i);
}, cu = (e, n) => {
  if (n)
    for (const i in n)
      bo(e, i, n[i]);
}, fu = (e, n) => {
  if (n)
    for (const i in n)
      _x(e, n, i);
}, _x = (e, n, i) => {
  const s = n[i];
  s !== void 0 && (e[i] = e[i] ? e[i].concat(s) : s);
}, sC = (e, ...n) => typeof e == "function" ? uh(ch, e, ...n) : uh(() => rC(ch(), e), ...n), oC = /* @__PURE__ */ uh(ch);
var lC = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Cx = (e) => e || void 0, Oo = (...e) => Cx(px(e).filter(Boolean).join(" ")), Ad = null, Oa = {}, fh = !1, fo = (...e) => (n) => n.twMerge ? ((!Ad || fh) && (fh = !1, Ad = mn(Oa) ? oC : sC({ ...Oa, extend: { theme: Oa.theme, classGroups: Oa.classGroups, conflictingClassGroupModifiers: Oa.conflictingClassGroupModifiers, conflictingClassGroups: Oa.conflictingClassGroups, ...Oa.extend } })), Cx(Ad(Oo(e)))) : Oo(e), p0 = (e, n) => {
  for (let i in n) e.hasOwnProperty(i) ? e[i] = Oo(e[i], n[i]) : e[i] = n[i];
  return e;
}, uC = (e, n) => {
  let { extend: i = null, slots: s = {}, variants: l = {}, compoundVariants: u = [], compoundSlots: f = [], defaultVariants: h = {} } = e, m = { ...lC, ...n }, p = i != null && i.base ? Oo(i.base, e?.base) : e?.base, g = i != null && i.variants && !mn(i.variants) ? vx(l, i.variants) : l, v = i != null && i.defaultVariants && !mn(i.defaultVariants) ? { ...i.defaultVariants, ...h } : h;
  !mn(m.twMergeConfig) && !x_(m.twMergeConfig, Oa) && (fh = !0, Oa = m.twMergeConfig);
  let b = mn(i?.slots), E = mn(s) ? {} : { base: Oo(e?.base, b && i?.base), ...s }, _ = b ? E : p0({ ...i?.slots }, mn(E) ? { base: e?.base } : E), M = mn(i?.compoundVariants) ? u : gx(i?.compoundVariants, u), N = (z) => {
    if (mn(g) && mn(s) && b) return fo(p, z?.class, z?.className)(m);
    if (M && !Array.isArray(M)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof M}`);
    if (f && !Array.isArray(f)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
    let Z = (q, ne, H = [], ie) => {
      let S = H;
      if (typeof ne == "string") S = S.concat(f0(ne).split(" ").map((O) => `${q}:${O}`));
      else if (Array.isArray(ne)) S = S.concat(ne.reduce((O, R) => O.concat(`${q}:${R}`), []));
      else if (typeof ne == "object" && typeof ie == "string") {
        for (let O in ne) if (ne.hasOwnProperty(O) && O === ie) {
          let R = ne[O];
          if (R && typeof R == "string") {
            let ue = f0(R);
            S[ie] ? S[ie] = S[ie].concat(ue.split(" ").map((w) => `${q}:${w}`)) : S[ie] = ue.split(" ").map((w) => `${q}:${w}`);
          } else Array.isArray(R) && R.length > 0 && (S[ie] = R.reduce((ue, w) => ue.concat(`${q}:${w}`), []));
        }
      }
      return S;
    }, ee = (q, ne = g, H = null, ie = null) => {
      var S;
      let O = ne[q];
      if (!O || mn(O)) return null;
      let R = (S = ie?.[q]) != null ? S : z?.[q];
      if (R === null) return null;
      let ue = c0(R), w = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, J = v?.[q], oe = [];
      if (typeof ue == "object" && w) for (let [me, ge] of Object.entries(ue)) {
        let _e = O[ge];
        if (me === "initial") {
          J = ge;
          continue;
        }
        Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(me) || (oe = Z(me, _e, oe, H));
      }
      let Q = ue != null && typeof ue != "object" ? ue : c0(J), le = O[Q || "false"];
      return typeof oe == "object" && typeof H == "string" && oe[H] ? p0(oe, le) : oe.length > 0 ? (oe.push(le), H === "base" ? oe.join(" ") : oe) : le;
    }, I = () => g ? Object.keys(g).map((q) => ee(q, g)) : null, k = (q, ne) => {
      if (!g || typeof g != "object") return null;
      let H = new Array();
      for (let ie in g) {
        let S = ee(ie, g, q, ne), O = q === "base" && typeof S == "string" ? S : S && S[q];
        O && (H[H.length] = O);
      }
      return H;
    }, W = {};
    for (let q in z) z[q] !== void 0 && (W[q] = z[q]);
    let Y = (q, ne) => {
      var H;
      let ie = typeof z?.[q] == "object" ? { [q]: (H = z[q]) == null ? void 0 : H.initial } : {};
      return { ...v, ...W, ...ie, ...ne };
    }, de = (q = [], ne) => {
      let H = [];
      for (let { class: ie, className: S, ...O } of q) {
        let R = !0;
        for (let [ue, w] of Object.entries(O)) {
          let J = Y(ue, ne)[ue];
          if (Array.isArray(w)) {
            if (!w.includes(J)) {
              R = !1;
              break;
            }
          } else {
            let oe = (Q) => Q == null || Q === !1;
            if (oe(w) && oe(J)) continue;
            if (J !== w) {
              R = !1;
              break;
            }
          }
        }
        R && (ie && H.push(ie), S && H.push(S));
      }
      return H;
    }, ve = (q) => {
      let ne = de(M, q);
      if (!Array.isArray(ne)) return ne;
      let H = {};
      for (let ie of ne) if (typeof ie == "string" && (H.base = fo(H.base, ie)(m)), typeof ie == "object") for (let [S, O] of Object.entries(ie)) H[S] = fo(H[S], O)(m);
      return H;
    }, K = (q) => {
      if (f.length < 1) return null;
      let ne = {};
      for (let { slots: H = [], class: ie, className: S, ...O } of f) {
        if (!mn(O)) {
          let R = !0;
          for (let ue of Object.keys(O)) {
            let w = Y(ue, q)[ue];
            if (w === void 0 || (Array.isArray(O[ue]) ? !O[ue].includes(w) : O[ue] !== w)) {
              R = !1;
              break;
            }
          }
          if (!R) continue;
        }
        for (let R of H) ne[R] = ne[R] || [], ne[R].push([ie, S]);
      }
      return ne;
    };
    if (!mn(s) || !b) {
      let q = {};
      if (typeof _ == "object" && !mn(_)) for (let ne of Object.keys(_)) q[ne] = (H) => {
        var ie, S;
        return fo(_[ne], k(ne, H), ((ie = ve(H)) != null ? ie : [])[ne], ((S = K(H)) != null ? S : [])[ne], H?.class, H?.className)(m);
      };
      return q;
    }
    return fo(p, I(), de(M), z?.class, z?.className)(m);
  }, L = () => {
    if (!(!g || typeof g != "object")) return Object.keys(g);
  };
  return N.variantKeys = L(), N.extend = i, N.base = p, N.slots = _, N.variants = g, N.defaultVariants = v, N.compoundSlots = f, N.compoundVariants = M, N;
}, um = (e, n) => {
  var i, s, l;
  return uC(e, {
    ...n,
    twMerge: (i = void 0) != null ? i : !0,
    twMergeConfig: {
      theme: {
        ...(s = void 0) == null ? void 0 : s.theme,
        ...u0.theme
      },
      classGroups: {
        ...(l = void 0) == null ? void 0 : l.classGroups,
        ...u0.classGroups
      }
    }
  });
}, cC = [
  "outline-hidden",
  "group-data-[focus-visible=true]:z-10",
  "group-data-[focus-visible=true]:ring-2",
  "group-data-[focus-visible=true]:ring-focus",
  "group-data-[focus-visible=true]:ring-offset-2",
  "group-data-[focus-visible=true]:ring-offset-background"
], fC = [
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
], dC = um({
  base: "flex flex-col gap-2 items-start"
}), hC = um({
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
      ...cC
    ],
    hiddenInput: fC,
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
um({
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
var Mx = globalThis?.document ? A.useLayoutEffect : A.useEffect;
const Dx = {
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
}, Rx = {
  ...Dx,
  customError: !0,
  valid: !1
}, qr = {
  isInvalid: !1,
  validationDetails: Dx,
  validationErrors: []
}, zx = A.createContext({}), Vu = "__formValidationState" + Date.now();
function kx(e) {
  if (e[Vu]) {
    let { realtimeValidation: n, displayValidation: i, updateValidation: s, resetValidation: l, commitValidation: u } = e[Vu];
    return {
      realtimeValidation: n,
      displayValidation: i,
      updateValidation: s,
      resetValidation: l,
      commitValidation: u
    };
  }
  return mC(e);
}
function mC(e) {
  let { isInvalid: n, validationState: i, name: s, value: l, builtinValidation: u, validate: f, validationBehavior: h = "aria" } = e;
  i && (n || (n = i === "invalid"));
  let m = n !== void 0 ? {
    isInvalid: n,
    validationErrors: [],
    validationDetails: Rx
  } : null, p = A.useMemo(() => {
    if (!f || l == null) return null;
    let ve = pC(f, l);
    return g0(ve);
  }, [
    f,
    l
  ]);
  u?.validationDetails.valid && (u = void 0);
  let g = A.useContext(zx), v = A.useMemo(() => s ? Array.isArray(s) ? s.flatMap((ve) => dh(g[ve])) : dh(g[s]) : [], [
    g,
    s
  ]), [b, E] = A.useState(g), [_, M] = A.useState(!1);
  g !== b && (E(g), M(!1));
  let N = A.useMemo(() => g0(_ ? [] : v), [
    _,
    v
  ]), L = A.useRef(qr), [z, Z] = A.useState(qr), ee = A.useRef(qr), I = () => {
    if (!k) return;
    W(!1);
    let ve = p || u || L.current;
    _d(ve, ee.current) || (ee.current = ve, Z(ve));
  }, [k, W] = A.useState(!1);
  return A.useEffect(I), {
    realtimeValidation: m || N || p || u || qr,
    displayValidation: h === "native" ? m || N || z : m || N || p || u || z,
    updateValidation(ve) {
      h === "aria" && !_d(z, ve) ? Z(ve) : L.current = ve;
    },
    resetValidation() {
      let ve = qr;
      _d(ve, ee.current) || (ee.current = ve, Z(ve)), h === "native" && W(!1), M(!0);
    },
    commitValidation() {
      h === "native" && W(!0), M(!0);
    }
  };
}
function dh(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function pC(e, n) {
  if (typeof e == "function") {
    let i = e(n);
    if (i && typeof i != "boolean") return dh(i);
  }
  return [];
}
function g0(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: Rx
  } : null;
}
function _d(e, n) {
  return e === n ? !0 : !!e && !!n && e.isInvalid === n.isInvalid && e.validationErrors.length === n.validationErrors.length && e.validationErrors.every((i, s) => i === n.validationErrors[s]) && Object.entries(e.validationDetails).every(([i, s]) => n.validationDetails[i] === s);
}
function gC(e, n, i) {
  let { validationBehavior: s, focus: l } = e;
  qu(() => {
    if (s === "native" && i?.current && !i.current.disabled) {
      let m = n.realtimeValidation.isInvalid ? n.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      i.current.setCustomValidity(m), i.current.hasAttribute("title") || (i.current.title = ""), n.realtimeValidation.isInvalid || n.updateValidation(yC(i.current));
    }
  });
  let u = Zn(() => {
    n.resetValidation();
  }), f = Zn((m) => {
    var p;
    n.displayValidation.isInvalid || n.commitValidation();
    let g = i == null || (p = i.current) === null || p === void 0 ? void 0 : p.form;
    if (!m.defaultPrevented && i && g && bC(g) === i.current) {
      var v;
      l ? l() : (v = i.current) === null || v === void 0 || v.focus(), IA("keyboard");
    }
    m.preventDefault();
  }), h = Zn(() => {
    n.commitValidation();
  });
  A.useEffect(() => {
    let m = i?.current;
    if (!m) return;
    let p = m.form;
    return m.addEventListener("invalid", f), m.addEventListener("change", h), p?.addEventListener("reset", u), () => {
      m.removeEventListener("invalid", f), m.removeEventListener("change", h), p?.removeEventListener("reset", u);
    };
  }, [
    i,
    f,
    h,
    u,
    s
  ]);
}
function vC(e) {
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
function yC(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: vC(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function bC(e) {
  for (let n = 0; n < e.elements.length; n++) {
    let i = e.elements[n];
    if (!i.validity.valid) return i;
  }
  return null;
}
function xC(e, n, i) {
  let { isDisabled: s = !1, isReadOnly: l = !1, value: u, name: f, children: h, "aria-label": m, "aria-labelledby": p, validationState: g = "valid", isInvalid: v } = e, b = (k) => {
    k.stopPropagation(), n.setSelected(k.target.checked);
  }, E = h != null, _ = m != null || p != null, { pressProps: M, isPressed: N } = eh({
    isDisabled: s
  }), { pressProps: L, isPressed: z } = eh({
    onPress() {
      var k;
      n.toggle(), (k = i.current) === null || k === void 0 || k.focus();
    },
    isDisabled: s || l
  }), { focusableProps: Z } = a_(e, i), ee = hi(M, Z), I = sA(e, {
    labelable: !0
  });
  return xA(i, n.isSelected, n.setSelected), {
    labelProps: hi(L, {
      onClick: (k) => k.preventDefault()
    }),
    inputProps: hi(I, {
      "aria-invalid": v || g === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": l || void 0,
      onChange: b,
      disabled: s,
      ...u == null ? {} : {
        value: u
      },
      name: f,
      type: "checkbox",
      ...ee
    }),
    isSelected: n.isSelected,
    isPressed: N || z,
    isDisabled: s,
    isReadOnly: l,
    isInvalid: v || g === "invalid"
  };
}
function Ox(e, n, i) {
  let s = kx({
    ...e,
    value: n.isSelected
  }), { isInvalid: l, validationErrors: u, validationDetails: f } = s.displayValidation, { labelProps: h, inputProps: m, isSelected: p, isPressed: g, isDisabled: v, isReadOnly: b } = xC({
    ...e,
    isInvalid: l
  }, n, i);
  gC(e, s, i);
  let { isIndeterminate: E, isRequired: _, validationBehavior: M = "aria" } = e;
  A.useEffect(() => {
    i.current && (i.current.indeterminate = !!E);
  });
  let { pressProps: N } = eh({
    isDisabled: v || b,
    onPress() {
      let { [Vu]: L } = e, { commitValidation: z } = L || s;
      z();
    }
  });
  return {
    labelProps: hi(h, N),
    inputProps: {
      ...m,
      checked: p,
      "aria-required": _ && M === "aria" || void 0,
      required: _ && M === "native"
    },
    isSelected: p,
    isPressed: g,
    isDisabled: v,
    isReadOnly: b,
    isInvalid: l,
    validationErrors: u,
    validationDetails: f
  };
}
const SC = /* @__PURE__ */ new WeakMap();
function Vx(e = {}) {
  let { isReadOnly: n } = e, [i, s] = AA(e.isSelected, e.defaultSelected || !1, e.onChange);
  function l(f) {
    n || s(f);
  }
  function u() {
    n || s(!i);
  }
  return {
    isSelected: i,
    setSelected: l,
    toggle: u
  };
}
function wC(e, n, i) {
  const s = Vx({
    isReadOnly: e.isReadOnly || n.isReadOnly,
    isSelected: n.isSelected(e.value),
    onChange(N) {
      N ? n.addValue(e.value) : n.removeValue(e.value), e.onChange && e.onChange(N);
    }
  });
  let { name: l, descriptionId: u, errorMessageId: f, validationBehavior: h } = SC.get(n);
  var m;
  h = (m = e.validationBehavior) !== null && m !== void 0 ? m : h;
  let { realtimeValidation: p } = kx({
    ...e,
    value: s.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), g = A.useRef(qr), v = () => {
    n.setInvalid(e.value, p.isInvalid ? p : g.current);
  };
  A.useEffect(v);
  let b = n.realtimeValidation.isInvalid ? n.realtimeValidation : p, E = h === "native" ? n.displayValidation : b;
  var _;
  let M = Ox({
    ...e,
    isReadOnly: e.isReadOnly || n.isReadOnly,
    isDisabled: e.isDisabled || n.isDisabled,
    name: e.name || l,
    isRequired: (_ = e.isRequired) !== null && _ !== void 0 ? _ : n.isRequired,
    validationBehavior: h,
    [Vu]: {
      realtimeValidation: b,
      displayValidation: E,
      resetValidation: n.resetValidation,
      commitValidation: n.commitValidation,
      updateValidation(N) {
        g.current = N, v();
      }
    }
  }, s, i);
  return {
    ...M,
    inputProps: {
      ...M.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        n.isInvalid ? f : null,
        u
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
var v0 = Symbol("default");
function EC(e) {
  const n = A.useRef(null), i = A.useRef(void 0), s = A.useCallback(
    (l) => {
      if (typeof e == "function") {
        const u = e, f = u(l);
        return () => {
          typeof f == "function" ? f() : u(null);
        };
      } else if (e)
        return e.current = l, () => {
          e.current = null;
        };
    },
    [e]
  );
  return A.useMemo(
    () => ({
      get current() {
        return n.current;
      },
      set current(l) {
        n.current = l, i.current && (i.current(), i.current = void 0), l != null && (i.current = s(l));
      }
    }),
    [s]
  );
}
function $x(e, n) {
  let i = A.useContext(e);
  if (n === null)
    return null;
  if (i && typeof i == "object" && "slots" in i && i.slots) {
    let s = new Intl.ListFormat().format(Object.keys(i.slots).map((u) => `"${u}"`));
    if (!n && !i.slots[v0])
      throw new Error(`A slot prop is required. Valid slot names are ${s}.`);
    let l = n || v0;
    if (!i.slots[l])
      throw new Error(`Invalid slot "${n}". Valid slot names are ${s}.`);
    return i.slots[l];
  }
  return i;
}
function TC(e, n, i) {
  let s = $x(i, e.slot) || {}, { ref: l, ...u } = s, f = EC(A.useMemo(() => V2(n, l), [n, l])), h = Id(u, e);
  return "style" in u && u.style && "style" in e && e.style && (typeof u.style == "function" || typeof e.style == "function" ? h.style = (m) => {
    let p = typeof u.style == "function" ? u.style(m) : u.style, g = { ...m.defaultStyle, ...p }, v = typeof e.style == "function" ? e.style({ ...m, defaultStyle: g }) : e.style;
    return { ...g, ...v };
  } : h.style = { ...u.style, ...e.style }), [h, f];
}
var hh = A.createContext(null);
A.forwardRef(function(n, i) {
  [n, i] = TC(n, i, hh);
  let { validationErrors: s, validationBehavior: l = "native", children: u, className: f, ...h } = n;
  const m = A.useMemo(() => dC({ className: f }), [f]);
  return /* @__PURE__ */ $.jsx("form", { noValidate: l !== "native", ...h, ref: i, className: m, children: /* @__PURE__ */ $.jsx(hh.Provider, { value: { ...n, validationBehavior: l }, children: /* @__PURE__ */ $.jsx(zx.Provider, { value: s ?? {}, children: u }) }) });
});
var [Q8, AC] = D1({
  name: "CheckboxGroupContext",
  strict: !1
});
function _C(e) {
  const { isSelected: n, disableAnimation: i, ...s } = e;
  return /* @__PURE__ */ $.jsx(
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
      style: !i && n ? {
        transition: "stroke-dashoffset 250ms linear 0.2s"
      } : {},
      viewBox: "0 0 17 18",
      ...s,
      children: /* @__PURE__ */ $.jsx("polyline", { points: "1 9 7 14 15 4" })
    }
  );
}
function CC(e) {
  const { isSelected: n, disableAnimation: i, ...s } = e;
  return /* @__PURE__ */ $.jsx("svg", { stroke: "currentColor", strokeWidth: 3, viewBox: "0 0 24 24", ...s, children: /* @__PURE__ */ $.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" }) });
}
function MC(e) {
  const { isIndeterminate: n, ...i } = e, s = n ? CC : _C;
  return /* @__PURE__ */ $.jsx(s, { ...i });
}
function DC(e, n = []) {
  const i = A.useRef(e);
  return Mx(() => {
    i.current = e;
  }), A.useCallback((...s) => {
    var l;
    return (l = i.current) == null ? void 0 : l.call(i, ...s);
  }, n);
}
function RC(e = {}) {
  var n, i, s, l, u, f, h, m;
  const p = L2(), g = AC(), { validationBehavior: v } = $x(hh) || {}, b = !!g, {
    as: E,
    ref: _,
    value: M = "",
    children: N,
    icon: L,
    name: z,
    isRequired: Z,
    isReadOnly: ee = !1,
    autoFocus: I = !1,
    isSelected: k,
    size: W = (n = g?.size) != null ? n : "md",
    color: Y = (i = g?.color) != null ? i : "primary",
    radius: de = g?.radius,
    lineThrough: ve = (s = g?.lineThrough) != null ? s : !1,
    isDisabled: K = (l = g?.isDisabled) != null ? l : !1,
    disableAnimation: q = (f = (u = g?.disableAnimation) != null ? u : p?.disableAnimation) != null ? f : !1,
    validationState: ne,
    isInvalid: H = ne ? ne === "invalid" : (h = g?.isInvalid) != null ? h : !1,
    isIndeterminate: ie = !1,
    validationBehavior: S = b ? g.validationBehavior : (m = v ?? p?.validationBehavior) != null ? m : "native",
    defaultSelected: O,
    classNames: R,
    className: ue,
    onValueChange: w,
    validate: J,
    ...oe
  } = e, Q = E || "label", le = A.useRef(null), me = A.useRef(null);
  let ge = e.onChange;
  b && (ge = Kd(() => {
    g.groupState.resetValidation();
  }, ge));
  const _e = A.useId(), Te = A.useMemo(
    () => ({
      name: z,
      value: M,
      children: N,
      autoFocus: I,
      defaultSelected: O,
      isIndeterminate: ie,
      isRequired: Z,
      isInvalid: H,
      isSelected: k,
      isDisabled: K,
      isReadOnly: ee,
      "aria-label": k2(oe["aria-label"], N),
      "aria-labelledby": oe["aria-labelledby"] || _e,
      onChange: w
    }),
    [
      z,
      M,
      N,
      I,
      O,
      ie,
      Z,
      H,
      k,
      K,
      ee,
      oe["aria-label"],
      oe["aria-labelledby"],
      _e,
      w
    ]
  ), We = Vx(Te), Et = {
    isInvalid: H,
    isRequired: Z,
    validate: J,
    validationState: ne,
    validationBehavior: S
  }, {
    inputProps: lt,
    isSelected: it,
    isDisabled: Yt,
    isReadOnly: un,
    isPressed: Na,
    isInvalid: ja
  } = b ? (
    // eslint-disable-next-line
    wC(
      { ...Te, ...Et },
      g.groupState,
      me
    )
  ) : (
    // eslint-disable-next-line
    Ox({ ...Te, ...Et }, We, me)
  ), Tt = Yt || un, Cn = ne === "invalid" || H || ja, jt = Tt ? !1 : Na, { hoverProps: C, isHovered: B } = o_({
    isDisabled: lt.disabled
  }), { focusProps: X, isFocused: he, isFocusVisible: fe } = l_({
    autoFocus: lt.autoFocus
  }), ce = A.useMemo(
    () => hC({
      color: Y,
      size: W,
      radius: de,
      isInvalid: Cn,
      lineThrough: ve,
      isDisabled: Yt,
      disableAnimation: q
    }),
    [Y, W, de, Cn, ve, Yt, q]
  );
  Mx(() => {
    if (!me.current) return;
    const At = !!me.current.checked;
    We.setSelected(At);
  }, [me.current]);
  const ye = DC(ge), De = A.useCallback(
    (At) => {
      if (un || Yt) {
        At.preventDefault();
        return;
      }
      ye?.(At);
    },
    [un, Yt, ye]
  ), Ve = Au(R?.base, ue), Ge = A.useCallback(() => ({
    ref: le,
    className: ce.base({ class: Ve }),
    "data-disabled": Ra(Yt),
    "data-selected": Ra(it || ie),
    "data-invalid": Ra(Cn),
    "data-hover": Ra(B),
    "data-focus": Ra(he),
    "data-pressed": Ra(jt),
    "data-readonly": Ra(lt.readOnly),
    "data-focus-visible": Ra(fe),
    "data-indeterminate": Ra(ie),
    ...Id(C, oe)
  }), [
    ce,
    Ve,
    Yt,
    it,
    ie,
    Cn,
    B,
    he,
    jt,
    lt.readOnly,
    fe,
    C,
    oe
  ]), en = A.useCallback(
    (At = {}) => ({
      ...At,
      "aria-hidden": !0,
      className: Au(ce.wrapper({ class: Au(R?.wrapper, At?.className) }))
    }),
    [ce, R?.wrapper]
  ), tn = A.useCallback(() => ({
    ref: N2(me, _),
    ...Id(lt, X),
    className: ce.hiddenInput({ class: R?.hiddenInput }),
    onChange: Kd(lt.onChange, De)
  }), [lt, X, De, R?.hiddenInput]), Mn = A.useCallback(
    () => ({
      id: _e,
      className: ce.label({ class: R?.label })
    }),
    [ce, R?.label, Yt, it, Cn]
  ), Dn = A.useCallback(
    () => ({
      isSelected: it,
      isIndeterminate: ie,
      disableAnimation: q,
      className: ce.icon({ class: R?.icon })
    }),
    [ce, R?.icon, it, ie, q]
  );
  return {
    Component: Q,
    icon: L,
    children: N,
    isSelected: it,
    isDisabled: Yt,
    isInvalid: Cn,
    isFocused: he,
    isHovered: B,
    isFocusVisible: fe,
    getBaseProps: Ge,
    getWrapperProps: en,
    getInputProps: tn,
    getLabelProps: Mn,
    getIconProps: Dn
  };
}
var Nx = h_((e, n) => {
  const {
    Component: i,
    children: s,
    icon: l = /* @__PURE__ */ $.jsx(MC, {}),
    getBaseProps: u,
    getWrapperProps: f,
    getInputProps: h,
    getIconProps: m,
    getLabelProps: p
  } = RC({ ...e, ref: n }), g = typeof l == "function" ? l(m()) : A.cloneElement(l, m());
  return /* @__PURE__ */ $.jsxs(i, { ...u(), children: [
    /* @__PURE__ */ $.jsx("input", { ...h() }),
    /* @__PURE__ */ $.jsx("span", { ...f(), children: g }),
    s && /* @__PURE__ */ $.jsx("span", { ...p(), children: s })
  ] });
});
Nx.displayName = "HeroUI.Checkbox";
var zC = Nx, Cd = { exports: {} }, Md = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var y0;
function kC() {
  if (y0) return Md;
  y0 = 1;
  var e = /* @__PURE__ */ Fu();
  function n(v, b) {
    return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b;
  }
  var i = typeof Object.is == "function" ? Object.is : n, s = e.useState, l = e.useEffect, u = e.useLayoutEffect, f = e.useDebugValue;
  function h(v, b) {
    var E = b(), _ = s({ inst: { value: E, getSnapshot: b } }), M = _[0].inst, N = _[1];
    return u(
      function() {
        M.value = E, M.getSnapshot = b, m(M) && N({ inst: M });
      },
      [v, E, b]
    ), l(
      function() {
        return m(M) && N({ inst: M }), v(function() {
          m(M) && N({ inst: M });
        });
      },
      [v]
    ), f(E), E;
  }
  function m(v) {
    var b = v.getSnapshot;
    v = v.value;
    try {
      var E = b();
      return !i(v, E);
    } catch {
      return !0;
    }
  }
  function p(v, b) {
    return b();
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : h;
  return Md.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g, Md;
}
var b0;
function OC() {
  return b0 || (b0 = 1, Cd.exports = /* @__PURE__ */ kC()), Cd.exports;
}
var VC = /* @__PURE__ */ OC();
function x0(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function $C(...e) {
  return (n) => {
    let i = !1;
    const s = e.map((l) => {
      const u = x0(l, n);
      return !i && typeof u == "function" && (i = !0), u;
    });
    if (i)
      return () => {
        for (let l = 0; l < s.length; l++) {
          const u = s[l];
          typeof u == "function" ? u() : x0(e[l], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function jx(e) {
  const n = /* @__PURE__ */ NC(e), i = A.forwardRef((s, l) => {
    const { children: u, ...f } = s, h = A.Children.toArray(u), m = h.find(LC);
    if (m) {
      const p = m.props.children, g = h.map((v) => v === m ? A.Children.count(p) > 1 ? A.Children.only(null) : A.isValidElement(p) ? p.props.children : null : v);
      return /* @__PURE__ */ $.jsx(n, { ...f, ref: l, children: A.isValidElement(p) ? A.cloneElement(p, void 0, g) : null });
    }
    return /* @__PURE__ */ $.jsx(n, { ...f, ref: l, children: u });
  });
  return i.displayName = `${e}.Slot`, i;
}
var Lx = /* @__PURE__ */ jx("Slot");
// @__NO_SIDE_EFFECTS__
function NC(e) {
  const n = A.forwardRef((i, s) => {
    const { children: l, ...u } = i;
    if (A.isValidElement(l)) {
      const f = BC(l), h = UC(u, l.props);
      return l.type !== A.Fragment && (h.ref = s ? $C(s, f) : f), A.cloneElement(l, h);
    }
    return A.Children.count(l) > 1 ? A.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var jC = Symbol("radix.slottable");
function LC(e) {
  return A.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === jC;
}
function UC(e, n) {
  const i = { ...n };
  for (const s in n) {
    const l = e[s], u = n[s];
    /^on[A-Z]/.test(s) ? l && u ? i[s] = (...h) => {
      const m = u(...h);
      return l(...h), m;
    } : l && (i[s] = l) : s === "style" ? i[s] = { ...l, ...u } : s === "className" && (i[s] = [l, u].filter(Boolean).join(" "));
  }
  return { ...e, ...i };
}
function BC(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning;
  return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref);
}
const S0 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, w0 = Xh, PC = (e, n) => (i) => {
  var s;
  if (n?.variants == null) return w0(e, i?.class, i?.className);
  const { variants: l, defaultVariants: u } = n, f = Object.keys(l).map((p) => {
    const g = i?.[p], v = u?.[p];
    if (g === null) return null;
    const b = S0(g) || S0(v);
    return l[p][b];
  }), h = i && Object.entries(i).reduce((p, g) => {
    let [v, b] = g;
    return b === void 0 || (p[v] = b), p;
  }, {}), m = n == null || (s = n.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((p, g) => {
    let { class: v, className: b, ...E } = g;
    return Object.entries(E).every((_) => {
      let [M, N] = _;
      return Array.isArray(N) ? N.includes({
        ...u,
        ...h
      }[M]) : {
        ...u,
        ...h
      }[M] === N;
    }) ? [
      ...p,
      v,
      b
    ] : p;
  }, []);
  return w0(e, f, m, i?.class, i?.className);
}, cm = "-", HC = (e) => {
  const n = GC(e), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (f) => {
      const h = f.split(cm);
      return h[0] === "" && h.length !== 1 && h.shift(), Ux(h, n) || ZC(f);
    },
    getConflictingClassGroupIds: (f, h) => {
      const m = i[f] || [];
      return h && s[f] ? [...m, ...s[f]] : m;
    }
  };
}, Ux = (e, n) => {
  if (e.length === 0)
    return n.classGroupId;
  const i = e[0], s = n.nextPart.get(i), l = s ? Ux(e.slice(1), s) : void 0;
  if (l)
    return l;
  if (n.validators.length === 0)
    return;
  const u = e.join(cm);
  return n.validators.find(({
    validator: f
  }) => f(u))?.classGroupId;
}, E0 = /^\[(.+)\]$/, ZC = (e) => {
  if (E0.test(e)) {
    const n = E0.exec(e)[1], i = n?.substring(0, n.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, GC = (e) => {
  const {
    theme: n,
    classGroups: i
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const l in i)
    mh(i[l], s, l, n);
  return s;
}, mh = (e, n, i, s) => {
  e.forEach((l) => {
    if (typeof l == "string") {
      const u = l === "" ? n : T0(n, l);
      u.classGroupId = i;
      return;
    }
    if (typeof l == "function") {
      if (YC(l)) {
        mh(l(s), n, i, s);
        return;
      }
      n.validators.push({
        validator: l,
        classGroupId: i
      });
      return;
    }
    Object.entries(l).forEach(([u, f]) => {
      mh(f, T0(n, u), i, s);
    });
  });
}, T0 = (e, n) => {
  let i = e;
  return n.split(cm).forEach((s) => {
    i.nextPart.has(s) || i.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(s);
  }), i;
}, YC = (e) => e.isThemeGetter, FC = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const l = (u, f) => {
    i.set(u, f), n++, n > e && (n = 0, s = i, i = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let f = i.get(u);
      if (f !== void 0)
        return f;
      if ((f = s.get(u)) !== void 0)
        return l(u, f), f;
    },
    set(u, f) {
      i.has(u) ? i.set(u, f) : l(u, f);
    }
  };
}, ph = "!", gh = ":", qC = gh.length, KC = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: i
  } = e;
  let s = (l) => {
    const u = [];
    let f = 0, h = 0, m = 0, p;
    for (let _ = 0; _ < l.length; _++) {
      let M = l[_];
      if (f === 0 && h === 0) {
        if (M === gh) {
          u.push(l.slice(m, _)), m = _ + qC;
          continue;
        }
        if (M === "/") {
          p = _;
          continue;
        }
      }
      M === "[" ? f++ : M === "]" ? f-- : M === "(" ? h++ : M === ")" && h--;
    }
    const g = u.length === 0 ? l : l.substring(m), v = IC(g), b = v !== g, E = p && p > m ? p - m : void 0;
    return {
      modifiers: u,
      hasImportantModifier: b,
      baseClassName: v,
      maybePostfixModifierPosition: E
    };
  };
  if (n) {
    const l = n + gh, u = s;
    s = (f) => f.startsWith(l) ? u(f.substring(l.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: f,
      maybePostfixModifierPosition: void 0
    };
  }
  if (i) {
    const l = s;
    s = (u) => i({
      className: u,
      parseClassName: l
    });
  }
  return s;
}, IC = (e) => e.endsWith(ph) ? e.substring(0, e.length - 1) : e.startsWith(ph) ? e.substring(1) : e, XC = (e) => {
  const n = Object.fromEntries(e.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const l = [];
    let u = [];
    return s.forEach((f) => {
      f[0] === "[" || n[f] ? (l.push(...u.sort(), f), u = []) : u.push(f);
    }), l.push(...u.sort()), l;
  };
}, QC = (e) => ({
  cache: FC(e.cacheSize),
  parseClassName: KC(e),
  sortModifiers: XC(e),
  ...HC(e)
}), JC = /\s+/, WC = (e, n) => {
  const {
    parseClassName: i,
    getClassGroupId: s,
    getConflictingClassGroupIds: l,
    sortModifiers: u
  } = n, f = [], h = e.trim().split(JC);
  let m = "";
  for (let p = h.length - 1; p >= 0; p -= 1) {
    const g = h[p], {
      isExternal: v,
      modifiers: b,
      hasImportantModifier: E,
      baseClassName: _,
      maybePostfixModifierPosition: M
    } = i(g);
    if (v) {
      m = g + (m.length > 0 ? " " + m : m);
      continue;
    }
    let N = !!M, L = s(N ? _.substring(0, M) : _);
    if (!L) {
      if (!N) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (L = s(_), !L) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      N = !1;
    }
    const z = u(b).join(":"), Z = E ? z + ph : z, ee = Z + L;
    if (f.includes(ee))
      continue;
    f.push(ee);
    const I = l(L, N);
    for (let k = 0; k < I.length; ++k) {
      const W = I[k];
      f.push(Z + W);
    }
    m = g + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function e4() {
  let e = 0, n, i, s = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (i = Bx(n)) && (s && (s += " "), s += i);
  return s;
}
const Bx = (e) => {
  if (typeof e == "string")
    return e;
  let n, i = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (n = Bx(e[s])) && (i && (i += " "), i += n);
  return i;
};
function t4(e, ...n) {
  let i, s, l, u = f;
  function f(m) {
    const p = n.reduce((g, v) => v(g), e());
    return i = QC(p), s = i.cache.get, l = i.cache.set, u = h, h(m);
  }
  function h(m) {
    const p = s(m);
    if (p)
      return p;
    const g = WC(m, i);
    return l(m, g), g;
  }
  return function() {
    return u(e4.apply(null, arguments));
  };
}
const Vt = (e) => {
  const n = (i) => i[e] || [];
  return n.isThemeGetter = !0, n;
}, Px = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Hx = /^\((?:(\w[\w-]*):)?(.+)\)$/i, n4 = /^\d+\/\d+$/, a4 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, i4 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, r4 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, s4 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, o4 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Hr = (e) => n4.test(e), je = (e) => !!e && !Number.isNaN(Number(e)), ui = (e) => !!e && Number.isInteger(Number(e)), Dd = (e) => e.endsWith("%") && je(e.slice(0, -1)), za = (e) => a4.test(e), l4 = () => !0, u4 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  i4.test(e) && !r4.test(e)
), Zx = () => !1, c4 = (e) => s4.test(e), f4 = (e) => o4.test(e), d4 = (e) => !xe(e) && !Se(e), h4 = (e) => ls(e, Fx, Zx), xe = (e) => Px.test(e), Bi = (e) => ls(e, qx, u4), Rd = (e) => ls(e, y4, je), A0 = (e) => ls(e, Gx, Zx), m4 = (e) => ls(e, Yx, f4), du = (e) => ls(e, Kx, c4), Se = (e) => Hx.test(e), ho = (e) => us(e, qx), p4 = (e) => us(e, b4), _0 = (e) => us(e, Gx), g4 = (e) => us(e, Fx), v4 = (e) => us(e, Yx), hu = (e) => us(e, Kx, !0), ls = (e, n, i) => {
  const s = Px.exec(e);
  return s ? s[1] ? n(s[1]) : i(s[2]) : !1;
}, us = (e, n, i = !1) => {
  const s = Hx.exec(e);
  return s ? s[1] ? n(s[1]) : i : !1;
}, Gx = (e) => e === "position" || e === "percentage", Yx = (e) => e === "image" || e === "url", Fx = (e) => e === "length" || e === "size" || e === "bg-size", qx = (e) => e === "length", y4 = (e) => e === "number", b4 = (e) => e === "family-name", Kx = (e) => e === "shadow", x4 = () => {
  const e = Vt("color"), n = Vt("font"), i = Vt("text"), s = Vt("font-weight"), l = Vt("tracking"), u = Vt("leading"), f = Vt("breakpoint"), h = Vt("container"), m = Vt("spacing"), p = Vt("radius"), g = Vt("shadow"), v = Vt("inset-shadow"), b = Vt("text-shadow"), E = Vt("drop-shadow"), _ = Vt("blur"), M = Vt("perspective"), N = Vt("aspect"), L = Vt("ease"), z = Vt("animate"), Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [
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
  ], I = () => [...ee(), Se, xe], k = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", "contain", "none"], Y = () => [Se, xe, m], de = () => [Hr, "full", "auto", ...Y()], ve = () => [ui, "none", "subgrid", Se, xe], K = () => ["auto", {
    span: ["full", ui, Se, xe]
  }, ui, Se, xe], q = () => [ui, "auto", Se, xe], ne = () => ["auto", "min", "max", "fr", Se, xe], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ie = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], S = () => ["auto", ...Y()], O = () => [Hr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], R = () => [e, Se, xe], ue = () => [...ee(), _0, A0, {
    position: [Se, xe]
  }], w = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], J = () => ["auto", "cover", "contain", g4, h4, {
    size: [Se, xe]
  }], oe = () => [Dd, ho, Bi], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    Se,
    xe
  ], le = () => ["", je, ho, Bi], me = () => ["solid", "dashed", "dotted", "double"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _e = () => [je, Dd, _0, A0], Te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    _,
    Se,
    xe
  ], We = () => ["none", je, Se, xe], Et = () => ["none", je, Se, xe], lt = () => [je, Se, xe], it = () => [Hr, "full", ...Y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [za],
      breakpoint: [za],
      color: [l4],
      container: [za],
      "drop-shadow": [za],
      ease: ["in", "out", "in-out"],
      font: [d4],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [za],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [za],
      shadow: [za],
      spacing: ["px", je],
      text: [za],
      "text-shadow": [za],
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
        aspect: ["auto", "square", Hr, xe, Se, N]
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
        columns: [je, xe, Se, h]
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
        object: I()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
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
        inset: de()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": de()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": de()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: de()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: de()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: de()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: de()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: de()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: de()
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
        z: [ui, "auto", Se, xe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Hr, "full", "auto", h, ...Y()]
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
        flex: [je, Hr, "auto", "initial", "none", xe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", je, Se, xe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", je, Se, xe]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ui, "first", "last", "none", Se, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ve()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: K()
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
        "grid-rows": ve()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: K()
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
        "auto-cols": ne()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ne()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ie(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ie()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ie(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ie()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Y()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Y()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Y()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Y()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Y()
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
        "space-x": Y()
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
        "space-y": Y()
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
        size: O()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [h, "screen", ...O()]
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
          ...O()
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
          ...O()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...O()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...O()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...O()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", i, ho, Bi]
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
        font: [s, Se, Rd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Dd, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [p4, xe, n]
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
        tracking: [l, Se, xe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [je, "none", Se, Rd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...Y()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Se, xe]
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
        list: ["disc", "decimal", "none", Se, xe]
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
        placeholder: R()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: R()
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
        decoration: [...me(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [je, "from-font", "auto", Se, Bi]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: R()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [je, "auto", Se, xe]
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
        indent: Y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Se, xe]
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
        content: ["none", Se, xe]
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
        bg: ue()
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
        bg: J()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ui, Se, xe],
          radial: ["", Se, xe],
          conic: [ui, Se, xe]
        }, v4, m4]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: R()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: oe()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: oe()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: oe()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: R()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Q()
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
        border: [...me(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...me(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: R()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": R()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": R()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": R()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": R()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": R()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": R()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": R()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": R()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: R()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...me(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [je, Se, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", je, ho, Bi]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: R()
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
          hu,
          du
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: R()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, hu, du]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": R()
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
        ring: R()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [je, Bi]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": R()
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
        "inset-ring": R()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, hu, du]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": R()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [je, Se, xe]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ge(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ge()
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
        "mask-linear": [je]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": _e()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": _e()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": _e()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": _e()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": _e()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": _e()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": _e()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": _e()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": _e()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": _e()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": _e()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": _e()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": _e()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": _e()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [Se, xe]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": _e()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": _e()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": R()
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
        "mask-radial-at": ee()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [je]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": _e()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": _e()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": R()
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
        mask: ue()
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
        mask: J()
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
        mask: ["none", Se, xe]
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
          Se,
          xe
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Te()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [je, Se, xe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [je, Se, xe]
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
          hu,
          du
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": R()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", je, Se, xe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [je, Se, xe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", je, Se, xe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [je, Se, xe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", je, Se, xe]
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
          Se,
          xe
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Te()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [je, Se, xe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [je, Se, xe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", je, Se, xe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [je, Se, xe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", je, Se, xe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [je, Se, xe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [je, Se, xe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", je, Se, xe]
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
        "border-spacing": Y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Y()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Se, xe]
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
        duration: [je, "initial", Se, xe]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", L, Se, xe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [je, Se, xe]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", z, Se, xe]
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
        perspective: [M, Se, xe]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": I()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: We()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": We()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": We()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": We()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Et()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Et()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Et()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Et()
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
        skew: lt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": lt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": lt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Se, xe, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: I()
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
        translate: it()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": it()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": it()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": it()
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
        accent: R()
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
        caret: R()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Se, xe]
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        "will-change": ["auto", "scroll", "contents", "transform", Se, xe]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...R()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [je, ho, Bi, Rd]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...R()]
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
}, S4 = /* @__PURE__ */ t4(x4);
function vi(...e) {
  return S4(Xh(e));
}
const w4 = PC(
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
function di({
  className: e,
  variant: n,
  size: i,
  asChild: s = !1,
  ...l
}) {
  const u = s ? Lx : "button";
  return /* @__PURE__ */ $.jsx(
    u,
    {
      "data-slot": "button",
      className: vi(w4({ variant: n, size: i, className: e })),
      ...l
    }
  );
}
function vh({ className: e, ...n }) {
  return /* @__PURE__ */ $.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: vi("leading-none font-semibold", e),
      ...n
    }
  );
}
function ts({ className: e, ...n }) {
  return /* @__PURE__ */ $.jsx(
    "div",
    {
      "data-slot": "card-description",
      className: vi("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function E4(e, n = []) {
  let i = [];
  function s(u, f) {
    const h = A.createContext(f), m = i.length;
    i = [...i, f];
    const p = (v) => {
      const { scope: b, children: E, ..._ } = v, M = b?.[e]?.[m] || h, N = A.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ $.jsx(M.Provider, { value: N, children: E });
    };
    p.displayName = u + "Provider";
    function g(v, b) {
      const E = b?.[e]?.[m] || h, _ = A.useContext(E);
      if (_) return _;
      if (f !== void 0) return f;
      throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return [p, g];
  }
  const l = () => {
    const u = i.map((f) => A.createContext(f));
    return function(h) {
      const m = h?.[e] || u;
      return A.useMemo(
        () => ({ [`__scope${e}`]: { ...h, [e]: m } }),
        [h, m]
      );
    };
  };
  return l.scopeName = e, [s, T4(l, ...n)];
}
function T4(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const i = () => {
    const s = e.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = s.reduce((h, { useScope: m, scopeName: p }) => {
        const v = m(u)[`__scope${p}`];
        return { ...h, ...v };
      }, {});
      return A.useMemo(() => ({ [`__scope${n.scopeName}`]: f }), [f]);
    };
  };
  return i.scopeName = n.scopeName, i;
}
function A4(e) {
  const n = A.useRef(e);
  return A.useEffect(() => {
    n.current = e;
  }), A.useMemo(() => (...i) => n.current?.(...i), []);
}
var yh = globalThis?.document ? A.useLayoutEffect : () => {
}, _4 = [
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
], fm = _4.reduce((e, n) => {
  const i = /* @__PURE__ */ jx(`Primitive.${n}`), s = A.forwardRef((l, u) => {
    const { asChild: f, ...h } = l, m = f ? i : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ $.jsx(m, { ...h, ref: u });
  });
  return s.displayName = `Primitive.${n}`, { ...e, [n]: s };
}, {});
function C4() {
  return VC.useSyncExternalStore(
    M4,
    () => !0,
    () => !1
  );
}
function M4() {
  return () => {
  };
}
var dm = "Avatar", [D4, J8] = E4(dm), [R4, Ix] = D4(dm), Xx = A.forwardRef(
  (e, n) => {
    const { __scopeAvatar: i, ...s } = e, [l, u] = A.useState("idle");
    return /* @__PURE__ */ $.jsx(
      R4,
      {
        scope: i,
        imageLoadingStatus: l,
        onImageLoadingStatusChange: u,
        children: /* @__PURE__ */ $.jsx(fm.span, { ...s, ref: n })
      }
    );
  }
);
Xx.displayName = dm;
var Qx = "AvatarImage", Jx = A.forwardRef(
  (e, n) => {
    const { __scopeAvatar: i, src: s, onLoadingStatusChange: l = () => {
    }, ...u } = e, f = Ix(Qx, i), h = z4(s, u), m = A4((p) => {
      l(p), f.onImageLoadingStatusChange(p);
    });
    return yh(() => {
      h !== "idle" && m(h);
    }, [h, m]), h === "loaded" ? /* @__PURE__ */ $.jsx(fm.img, { ...u, ref: n, src: s }) : null;
  }
);
Jx.displayName = Qx;
var Wx = "AvatarFallback", eS = A.forwardRef(
  (e, n) => {
    const { __scopeAvatar: i, delayMs: s, ...l } = e, u = Ix(Wx, i), [f, h] = A.useState(s === void 0);
    return A.useEffect(() => {
      if (s !== void 0) {
        const m = window.setTimeout(() => h(!0), s);
        return () => window.clearTimeout(m);
      }
    }, [s]), f && u.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ $.jsx(fm.span, { ...l, ref: n }) : null;
  }
);
eS.displayName = Wx;
function C0(e, n) {
  return e ? n ? (e.src !== n && (e.src = n), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function z4(e, { referrerPolicy: n, crossOrigin: i }) {
  const s = C4(), l = A.useRef(null), u = s ? (l.current || (l.current = new window.Image()), l.current) : null, [f, h] = A.useState(
    () => C0(u, e)
  );
  return yh(() => {
    h(C0(u, e));
  }, [u, e]), yh(() => {
    const m = (v) => () => {
      h(v);
    };
    if (!u) return;
    const p = m("loaded"), g = m("error");
    return u.addEventListener("load", p), u.addEventListener("error", g), n && (u.referrerPolicy = n), typeof i == "string" && (u.crossOrigin = i), () => {
      u.removeEventListener("load", p), u.removeEventListener("error", g);
    };
  }, [u, i, n]), f;
}
var k4 = Xx, O4 = Jx, V4 = eS;
function tS({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ $.jsx(
    k4,
    {
      "data-slot": "avatar",
      className: vi(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...n
    }
  );
}
function nS({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ $.jsx(
    O4,
    {
      "data-slot": "avatar-image",
      className: vi("aspect-square size-full", e),
      ...n
    }
  );
}
function aS({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ $.jsx(
    V4,
    {
      "data-slot": "avatar-fallback",
      className: vi(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...n
    }
  );
}
const hm = A.createContext({});
function mm(e) {
  const n = A.useRef(null);
  return n.current === null && (n.current = e()), n.current;
}
const pm = typeof window < "u", iS = pm ? A.useLayoutEffect : A.useEffect, Xu = /* @__PURE__ */ A.createContext(null), mu = [
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
function $4(e, n) {
  let i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l = !1, u = !1;
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
    schedule: (g, v = !1, b = !1) => {
      const _ = b && l ? i : s;
      return v && f.add(g), _.has(g) || _.add(g), g;
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
        u = !0;
        return;
      }
      l = !0, [i, s] = [s, i], i.forEach(m), i.clear(), l = !1, u && (u = !1, p.process(g));
    }
  };
  return p;
}
const N4 = 40;
function rS(e, n) {
  let i = !1, s = !0;
  const l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, u = () => i = !0, f = mu.reduce((Z, ee) => (Z[ee] = $4(u), Z), {}), { setup: h, read: m, resolveKeyframes: p, preUpdate: g, update: v, preRender: b, render: E, postRender: _ } = f, M = () => {
    const Z = fa.useManualTiming ? l.timestamp : performance.now();
    i = !1, fa.useManualTiming || (l.delta = s ? 1e3 / 60 : Math.max(Math.min(Z - l.timestamp, N4), 1)), l.timestamp = Z, l.isProcessing = !0, h.process(l), m.process(l), p.process(l), g.process(l), v.process(l), b.process(l), E.process(l), _.process(l), l.isProcessing = !1, i && n && (s = !1, e(M));
  }, N = () => {
    i = !0, s = !0, l.isProcessing || e(M);
  };
  return { schedule: mu.reduce((Z, ee) => {
    const I = f[ee];
    return Z[ee] = (k, W = !1, Y = !1) => (i || N(), I.schedule(k, W, Y)), Z;
  }, {}), cancel: (Z) => {
    for (let ee = 0; ee < mu.length; ee++)
      f[mu[ee]].cancel(Z);
  }, state: l, steps: f };
}
const { schedule: st, cancel: mi, state: Xt, steps: zd } = /* @__PURE__ */ rS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Gn, !0);
let Cu;
function j4() {
  Cu = void 0;
}
const vn = {
  now: () => (Cu === void 0 && vn.set(Xt.isProcessing || fa.useManualTiming ? Xt.timestamp : performance.now()), Cu),
  set: (e) => {
    Cu = e, queueMicrotask(j4);
  }
}, sS = (e) => (n) => typeof n == "string" && n.startsWith(e), gm = /* @__PURE__ */ sS("--"), L4 = /* @__PURE__ */ sS("var(--"), vm = (e) => L4(e) ? U4.test(e.split("/*")[0].trim()) : !1, U4 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, cs = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Vo = {
  ...cs,
  transform: (e) => $a(0, 1, e)
}, pu = {
  ...cs,
  default: 1
}, wo = (e) => Math.round(e * 1e5) / 1e5, ym = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function B4(e) {
  return e == null;
}
const P4 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, bm = (e, n) => (i) => !!(typeof i == "string" && P4.test(i) && i.startsWith(e) || n && !B4(i) && Object.prototype.hasOwnProperty.call(i, n)), oS = (e, n, i) => (s) => {
  if (typeof s != "string")
    return s;
  const [l, u, f, h] = s.match(ym);
  return {
    [e]: parseFloat(l),
    [n]: parseFloat(u),
    [i]: parseFloat(f),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, H4 = (e) => $a(0, 255, e), kd = {
  ...cs,
  transform: (e) => Math.round(H4(e))
}, Zi = {
  test: /* @__PURE__ */ bm("rgb", "red"),
  parse: /* @__PURE__ */ oS("red", "green", "blue"),
  transform: ({ red: e, green: n, blue: i, alpha: s = 1 }) => "rgba(" + kd.transform(e) + ", " + kd.transform(n) + ", " + kd.transform(i) + ", " + wo(Vo.transform(s)) + ")"
};
function Z4(e) {
  let n = "", i = "", s = "", l = "";
  return e.length > 5 ? (n = e.substring(1, 3), i = e.substring(3, 5), s = e.substring(5, 7), l = e.substring(7, 9)) : (n = e.substring(1, 2), i = e.substring(2, 3), s = e.substring(3, 4), l = e.substring(4, 5), n += n, i += i, s += s, l += l), {
    red: parseInt(n, 16),
    green: parseInt(i, 16),
    blue: parseInt(s, 16),
    alpha: l ? parseInt(l, 16) / 255 : 1
  };
}
const bh = {
  test: /* @__PURE__ */ bm("#"),
  parse: Z4,
  transform: Zi.transform
}, Zo = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (n) => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
  parse: parseFloat,
  transform: (n) => `${n}${e}`
}), ci = /* @__PURE__ */ Zo("deg"), ca = /* @__PURE__ */ Zo("%"), ze = /* @__PURE__ */ Zo("px"), G4 = /* @__PURE__ */ Zo("vh"), Y4 = /* @__PURE__ */ Zo("vw"), M0 = {
  ...ca,
  parse: (e) => ca.parse(e) / 100,
  transform: (e) => ca.transform(e * 100)
}, Ir = {
  test: /* @__PURE__ */ bm("hsl", "hue"),
  parse: /* @__PURE__ */ oS("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: n, lightness: i, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + ca.transform(wo(n)) + ", " + ca.transform(wo(i)) + ", " + wo(Vo.transform(s)) + ")"
}, Rt = {
  test: (e) => Zi.test(e) || bh.test(e) || Ir.test(e),
  parse: (e) => Zi.test(e) ? Zi.parse(e) : Ir.test(e) ? Ir.parse(e) : bh.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Zi.transform(e) : Ir.transform(e),
  getAnimatableNone: (e) => {
    const n = Rt.parse(e);
    return n.alpha = 0, Rt.transform(n);
  }
}, F4 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function q4(e) {
  return isNaN(e) && typeof e == "string" && (e.match(ym)?.length || 0) + (e.match(F4)?.length || 0) > 0;
}
const lS = "number", uS = "color", K4 = "var", I4 = "var(", D0 = "${}", X4 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function $o(e) {
  const n = e.toString(), i = [], s = {
    color: [],
    number: [],
    var: []
  }, l = [];
  let u = 0;
  const h = n.replace(X4, (m) => (Rt.test(m) ? (s.color.push(u), l.push(uS), i.push(Rt.parse(m))) : m.startsWith(I4) ? (s.var.push(u), l.push(K4), i.push(m)) : (s.number.push(u), l.push(lS), i.push(parseFloat(m))), ++u, D0)).split(D0);
  return { values: i, split: h, indexes: s, types: l };
}
function cS(e) {
  return $o(e).values;
}
function fS(e) {
  const { split: n, types: i } = $o(e), s = n.length;
  return (l) => {
    let u = "";
    for (let f = 0; f < s; f++)
      if (u += n[f], l[f] !== void 0) {
        const h = i[f];
        h === lS ? u += wo(l[f]) : h === uS ? u += Rt.transform(l[f]) : u += l[f];
      }
    return u;
  };
}
const Q4 = (e) => typeof e == "number" ? 0 : Rt.test(e) ? Rt.getAnimatableNone(e) : e;
function J4(e) {
  const n = cS(e);
  return fS(e)(n.map(Q4));
}
const pi = {
  test: q4,
  parse: cS,
  createTransformer: fS,
  getAnimatableNone: J4
};
function Od(e, n, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (n - e) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? e + (n - e) * (2 / 3 - i) * 6 : e;
}
function W4({ hue: e, saturation: n, lightness: i, alpha: s }) {
  e /= 360, n /= 100, i /= 100;
  let l = 0, u = 0, f = 0;
  if (!n)
    l = u = f = i;
  else {
    const h = i < 0.5 ? i * (1 + n) : i + n - i * n, m = 2 * i - h;
    l = Od(m, h, e + 1 / 3), u = Od(m, h, e), f = Od(m, h, e - 1 / 3);
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(u * 255),
    blue: Math.round(f * 255),
    alpha: s
  };
}
function $u(e, n) {
  return (i) => i > 0 ? n : e;
}
const ct = (e, n, i) => e + (n - e) * i, Vd = (e, n, i) => {
  const s = e * e, l = i * (n * n - s) + s;
  return l < 0 ? 0 : Math.sqrt(l);
}, e3 = [bh, Zi, Ir], t3 = (e) => e3.find((n) => n.test(e));
function R0(e) {
  const n = t3(e);
  if (!n)
    return !1;
  let i = n.parse(e);
  return n === Ir && (i = W4(i)), i;
}
const z0 = (e, n) => {
  const i = R0(e), s = R0(n);
  if (!i || !s)
    return $u(e, n);
  const l = { ...i };
  return (u) => (l.red = Vd(i.red, s.red, u), l.green = Vd(i.green, s.green, u), l.blue = Vd(i.blue, s.blue, u), l.alpha = ct(i.alpha, s.alpha, u), Zi.transform(l));
}, xh = /* @__PURE__ */ new Set(["none", "hidden"]);
function n3(e, n) {
  return xh.has(e) ? (i) => i <= 0 ? e : n : (i) => i >= 1 ? n : e;
}
function a3(e, n) {
  return (i) => ct(e, n, i);
}
function xm(e) {
  return typeof e == "number" ? a3 : typeof e == "string" ? vm(e) ? $u : Rt.test(e) ? z0 : s3 : Array.isArray(e) ? dS : typeof e == "object" ? Rt.test(e) ? z0 : i3 : $u;
}
function dS(e, n) {
  const i = [...e], s = i.length, l = e.map((u, f) => xm(u)(u, n[f]));
  return (u) => {
    for (let f = 0; f < s; f++)
      i[f] = l[f](u);
    return i;
  };
}
function i3(e, n) {
  const i = { ...e, ...n }, s = {};
  for (const l in i)
    e[l] !== void 0 && n[l] !== void 0 && (s[l] = xm(e[l])(e[l], n[l]));
  return (l) => {
    for (const u in s)
      i[u] = s[u](l);
    return i;
  };
}
function r3(e, n) {
  const i = [], s = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < n.values.length; l++) {
    const u = n.types[l], f = e.indexes[u][s[u]], h = e.values[f] ?? 0;
    i[l] = h, s[u]++;
  }
  return i;
}
const s3 = (e, n) => {
  const i = pi.createTransformer(n), s = $o(e), l = $o(n);
  return s.indexes.var.length === l.indexes.var.length && s.indexes.color.length === l.indexes.color.length && s.indexes.number.length >= l.indexes.number.length ? xh.has(e) && !l.values.length || xh.has(n) && !s.values.length ? n3(e, n) : Po(dS(r3(s, l), l.values), i) : $u(e, n);
};
function hS(e, n, i) {
  return typeof e == "number" && typeof n == "number" && typeof i == "number" ? ct(e, n, i) : xm(e)(e, n);
}
const o3 = (e) => {
  const n = ({ timestamp: i }) => e(i);
  return {
    start: (i = !0) => st.update(n, i),
    stop: () => mi(n),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Xt.isProcessing ? Xt.timestamp : vn.now()
  };
}, mS = (e, n, i = 10) => {
  let s = "";
  const l = Math.max(Math.round(n / i), 2);
  for (let u = 0; u < l; u++)
    s += Math.round(e(u / (l - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, Nu = 2e4;
function Sm(e) {
  let n = 0;
  const i = 50;
  let s = e.next(n);
  for (; !s.done && n < Nu; )
    n += i, s = e.next(n);
  return n >= Nu ? 1 / 0 : n;
}
function l3(e, n = 100, i) {
  const s = i({ ...e, keyframes: [0, n] }), l = Math.min(Sm(s), Nu);
  return {
    type: "keyframes",
    ease: (u) => s.next(l * u).value / n,
    duration: /* @__PURE__ */ ua(l)
  };
}
const u3 = 5;
function pS(e, n, i) {
  const s = Math.max(n - u3, 0);
  return F1(i - e(s), n - s);
}
const mt = {
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
}, $d = 1e-3;
function c3({ duration: e = mt.duration, bounce: n = mt.bounce, velocity: i = mt.velocity, mass: s = mt.mass }) {
  let l, u, f = 1 - n;
  f = $a(mt.minDamping, mt.maxDamping, f), e = $a(mt.minDuration, mt.maxDuration, /* @__PURE__ */ ua(e)), f < 1 ? (l = (p) => {
    const g = p * f, v = g * e, b = g - i, E = Sh(p, f), _ = Math.exp(-v);
    return $d - b / E * _;
  }, u = (p) => {
    const v = p * f * e, b = v * i + i, E = Math.pow(f, 2) * Math.pow(p, 2) * e, _ = Math.exp(-v), M = Sh(Math.pow(p, 2), f);
    return (-l(p) + $d > 0 ? -1 : 1) * ((b - E) * _) / M;
  }) : (l = (p) => {
    const g = Math.exp(-p * e), v = (p - i) * e + 1;
    return -$d + g * v;
  }, u = (p) => {
    const g = Math.exp(-p * e), v = (i - p) * (e * e);
    return g * v;
  });
  const h = 5 / e, m = d3(l, u, h);
  if (e = /* @__PURE__ */ la(e), isNaN(m))
    return {
      stiffness: mt.stiffness,
      damping: mt.damping,
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
const f3 = 12;
function d3(e, n, i) {
  let s = i;
  for (let l = 1; l < f3; l++)
    s = s - e(s) / n(s);
  return s;
}
function Sh(e, n) {
  return e * Math.sqrt(1 - n * n);
}
const h3 = ["duration", "bounce"], m3 = ["stiffness", "damping", "mass"];
function k0(e, n) {
  return n.some((i) => e[i] !== void 0);
}
function p3(e) {
  let n = {
    velocity: mt.velocity,
    stiffness: mt.stiffness,
    damping: mt.damping,
    mass: mt.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!k0(e, m3) && k0(e, h3))
    if (e.visualDuration) {
      const i = e.visualDuration, s = 2 * Math.PI / (i * 1.2), l = s * s, u = 2 * $a(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
      n = {
        ...n,
        mass: mt.mass,
        stiffness: l,
        damping: u
      };
    } else {
      const i = c3(e);
      n = {
        ...n,
        ...i,
        mass: mt.mass
      }, n.isResolvedFromDuration = !0;
    }
  return n;
}
function ju(e = mt.visualDuration, n = mt.bounce) {
  const i = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: n
  } : e;
  let { restSpeed: s, restDelta: l } = i;
  const u = i.keyframes[0], f = i.keyframes[i.keyframes.length - 1], h = { done: !1, value: u }, { stiffness: m, damping: p, mass: g, duration: v, velocity: b, isResolvedFromDuration: E } = p3({
    ...i,
    velocity: -/* @__PURE__ */ ua(i.velocity || 0)
  }), _ = b || 0, M = p / (2 * Math.sqrt(m * g)), N = f - u, L = /* @__PURE__ */ ua(Math.sqrt(m / g)), z = Math.abs(N) < 5;
  s || (s = z ? mt.restSpeed.granular : mt.restSpeed.default), l || (l = z ? mt.restDelta.granular : mt.restDelta.default);
  let Z;
  if (M < 1) {
    const I = Sh(L, M);
    Z = (k) => {
      const W = Math.exp(-M * L * k);
      return f - W * ((_ + M * L * N) / I * Math.sin(I * k) + N * Math.cos(I * k));
    };
  } else if (M === 1)
    Z = (I) => f - Math.exp(-L * I) * (N + (_ + L * N) * I);
  else {
    const I = L * Math.sqrt(M * M - 1);
    Z = (k) => {
      const W = Math.exp(-M * L * k), Y = Math.min(I * k, 300);
      return f - W * ((_ + M * L * N) * Math.sinh(Y) + I * N * Math.cosh(Y)) / I;
    };
  }
  const ee = {
    calculatedDuration: E && v || null,
    next: (I) => {
      const k = Z(I);
      if (E)
        h.done = I >= v;
      else {
        let W = I === 0 ? _ : 0;
        M < 1 && (W = I === 0 ? /* @__PURE__ */ la(_) : pS(Z, I, k));
        const Y = Math.abs(W) <= s, de = Math.abs(f - k) <= l;
        h.done = Y && de;
      }
      return h.value = h.done ? f : k, h;
    },
    toString: () => {
      const I = Math.min(Sm(ee), Nu), k = mS((W) => ee.next(I * W).value, I, 30);
      return I + "ms " + k;
    },
    toTransition: () => {
    }
  };
  return ee;
}
ju.applyToOptions = (e) => {
  const n = l3(e, 100, ju);
  return e.ease = n.ease, e.duration = /* @__PURE__ */ la(n.duration), e.type = "keyframes", e;
};
function wh({ keyframes: e, velocity: n = 0, power: i = 0.8, timeConstant: s = 325, bounceDamping: l = 10, bounceStiffness: u = 500, modifyTarget: f, min: h, max: m, restDelta: p = 0.5, restSpeed: g }) {
  const v = e[0], b = {
    done: !1,
    value: v
  }, E = (Y) => h !== void 0 && Y < h || m !== void 0 && Y > m, _ = (Y) => h === void 0 ? m : m === void 0 || Math.abs(h - Y) < Math.abs(m - Y) ? h : m;
  let M = i * n;
  const N = v + M, L = f === void 0 ? N : f(N);
  L !== N && (M = L - v);
  const z = (Y) => -M * Math.exp(-Y / s), Z = (Y) => L + z(Y), ee = (Y) => {
    const de = z(Y), ve = Z(Y);
    b.done = Math.abs(de) <= p, b.value = b.done ? L : ve;
  };
  let I, k;
  const W = (Y) => {
    E(b.value) && (I = Y, k = ju({
      keyframes: [b.value, _(b.value)],
      velocity: pS(Z, Y, b.value),
      // TODO: This should be passing * 1000
      damping: l,
      stiffness: u,
      restDelta: p,
      restSpeed: g
    }));
  };
  return W(0), {
    calculatedDuration: null,
    next: (Y) => {
      let de = !1;
      return !k && I === void 0 && (de = !0, ee(Y), W(Y)), I !== void 0 && Y >= I ? k.next(Y - I) : (!de && ee(Y), b);
    }
  };
}
function g3(e, n, i) {
  const s = [], l = i || fa.mix || hS, u = e.length - 1;
  for (let f = 0; f < u; f++) {
    let h = l(e[f], e[f + 1]);
    if (n) {
      const m = Array.isArray(n) ? n[f] || Gn : n;
      h = Po(m, h);
    }
    s.push(h);
  }
  return s;
}
function v3(e, n, { clamp: i = !0, ease: s, mixer: l } = {}) {
  const u = e.length;
  if (u === 1)
    return () => n[0];
  if (u === 2 && n[0] === n[1])
    return () => n[1];
  const f = e[0] === e[1];
  e[0] > e[u - 1] && (e = [...e].reverse(), n = [...n].reverse());
  const h = g3(n, s, l), m = h.length, p = (g) => {
    if (f && g < e[0])
      return n[0];
    let v = 0;
    if (m > 1)
      for (; v < e.length - 2 && !(g < e[v + 1]); v++)
        ;
    const b = /* @__PURE__ */ ko(e[v], e[v + 1], g);
    return h[v](b);
  };
  return i ? (g) => p($a(e[0], e[u - 1], g)) : p;
}
function y3(e, n) {
  const i = e[e.length - 1];
  for (let s = 1; s <= n; s++) {
    const l = /* @__PURE__ */ ko(0, n, s);
    e.push(ct(i, 1, l));
  }
}
function b3(e) {
  const n = [0];
  return y3(n, e.length - 1), n;
}
function x3(e, n) {
  return e.map((i) => i * n);
}
function S3(e, n) {
  return e.map(() => n || tx).splice(0, e.length - 1);
}
function Eo({ duration: e = 300, keyframes: n, times: i, ease: s = "easeInOut" }) {
  const l = OA(s) ? s.map(Wy) : Wy(s), u = {
    done: !1,
    value: n[0]
  }, f = x3(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    i && i.length === n.length ? i : b3(n),
    e
  ), h = v3(f, n, {
    ease: Array.isArray(l) ? l : S3(n, l)
  });
  return {
    calculatedDuration: e,
    next: (m) => (u.value = h(m), u.done = m >= e, u)
  };
}
const w3 = (e) => e !== null;
function wm(e, { repeat: n, repeatType: i = "loop" }, s, l = 1) {
  const u = e.filter(w3), h = l < 0 || n && i !== "loop" && n % 2 === 1 ? 0 : u.length - 1;
  return !h || s === void 0 ? u[h] : s;
}
const E3 = {
  decay: wh,
  inertia: wh,
  tween: Eo,
  keyframes: Eo,
  spring: ju
};
function gS(e) {
  typeof e.type == "string" && (e.type = E3[e.type]);
}
class Em {
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
  then(n, i) {
    return this.finished.then(n, i);
  }
}
const T3 = (e) => e / 100;
class Tm extends Em {
  constructor(n) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: i } = this.options;
      i && i.updatedAt !== vn.now() && this.tick(vn.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = n, this.initAnimation(), this.play(), n.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: n } = this;
    gS(n);
    const { type: i = Eo, repeat: s = 0, repeatDelay: l = 0, repeatType: u, velocity: f = 0 } = n;
    let { keyframes: h } = n;
    const m = i || Eo;
    m !== Eo && typeof h[0] != "number" && (this.mixKeyframes = Po(T3, hS(h[0], h[1])), h = [0, 100]);
    const p = m({ ...n, keyframes: h });
    u === "mirror" && (this.mirroredGenerator = m({
      ...n,
      keyframes: [...h].reverse(),
      velocity: -f
    })), p.calculatedDuration === null && (p.calculatedDuration = Sm(p));
    const { calculatedDuration: g } = p;
    this.calculatedDuration = g, this.resolvedDuration = g + l, this.totalDuration = this.resolvedDuration * (s + 1) - l, this.generator = p;
  }
  updateTime(n) {
    const i = Math.round(n - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i;
  }
  tick(n, i = !1) {
    const { generator: s, totalDuration: l, mixKeyframes: u, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: m } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: p = 0, keyframes: g, repeat: v, repeatType: b, repeatDelay: E, type: _, onUpdate: M, finalKeyframe: N } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - l / this.speed, this.startTime)), i ? this.currentTime = n : this.updateTime(n);
    const L = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), z = this.playbackSpeed >= 0 ? L < 0 : L > l;
    this.currentTime = Math.max(L, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let Z = this.currentTime, ee = s;
    if (v) {
      const Y = Math.min(this.currentTime, l) / h;
      let de = Math.floor(Y), ve = Y % 1;
      !ve && Y >= 1 && (ve = 1), ve === 1 && de--, de = Math.min(de, v + 1), !!(de % 2) && (b === "reverse" ? (ve = 1 - ve, E && (ve -= E / h)) : b === "mirror" && (ee = f)), Z = $a(0, 1, ve) * h;
    }
    const I = z ? { done: !1, value: g[0] } : ee.next(Z);
    u && (I.value = u(I.value));
    let { done: k } = I;
    !z && m !== null && (k = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const W = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return W && _ !== wh && (I.value = wm(g, this.options, N, this.speed)), M && M(I.value), W && this.finish(), I;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(n, i) {
    return this.finished.then(n, i);
  }
  get duration() {
    return /* @__PURE__ */ ua(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ ua(this.currentTime);
  }
  set time(n) {
    n = /* @__PURE__ */ la(n), this.currentTime = n, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(n) {
    this.updateTime(vn.now());
    const i = this.playbackSpeed !== n;
    this.playbackSpeed = n, i && (this.time = /* @__PURE__ */ ua(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: n = o3, startTime: i } = this.options;
    this.driver || (this.driver = n((l) => this.tick(l))), this.options.onPlay?.();
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = i ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(vn.now()), this.holdTime = this.currentTime;
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
function A3(e) {
  for (let n = 1; n < e.length; n++)
    e[n] ?? (e[n] = e[n - 1]);
}
const Gi = (e) => e * 180 / Math.PI, Eh = (e) => {
  const n = Gi(Math.atan2(e[1], e[0]));
  return Th(n);
}, _3 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Eh,
  rotateZ: Eh,
  skewX: (e) => Gi(Math.atan(e[1])),
  skewY: (e) => Gi(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Th = (e) => (e = e % 360, e < 0 && (e += 360), e), O0 = Eh, V0 = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), $0 = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), C3 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: V0,
  scaleY: $0,
  scale: (e) => (V0(e) + $0(e)) / 2,
  rotateX: (e) => Th(Gi(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Th(Gi(Math.atan2(-e[2], e[0]))),
  rotateZ: O0,
  rotate: O0,
  skewX: (e) => Gi(Math.atan(e[4])),
  skewY: (e) => Gi(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Ah(e) {
  return e.includes("scale") ? 1 : 0;
}
function _h(e, n) {
  if (!e || e === "none")
    return Ah(n);
  const i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, l;
  if (i)
    s = C3, l = i;
  else {
    const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = _3, l = h;
  }
  if (!l)
    return Ah(n);
  const u = s[n], f = l[1].split(",").map(D3);
  return typeof u == "function" ? u(f) : f[u];
}
const M3 = (e, n) => {
  const { transform: i = "none" } = getComputedStyle(e);
  return _h(i, n);
};
function D3(e) {
  return parseFloat(e.trim());
}
const fs = [
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
], ds = new Set(fs), N0 = (e) => e === cs || e === ze, R3 = /* @__PURE__ */ new Set(["x", "y", "z"]), z3 = fs.filter((e) => !R3.has(e));
function k3(e) {
  const n = [];
  return z3.forEach((i) => {
    const s = e.getValue(i);
    s !== void 0 && (n.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
  }), n;
}
const Fi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: n = "0", paddingRight: i = "0" }) => e.max - e.min - parseFloat(n) - parseFloat(i),
  height: ({ y: e }, { paddingTop: n = "0", paddingBottom: i = "0" }) => e.max - e.min - parseFloat(n) - parseFloat(i),
  top: (e, { top: n }) => parseFloat(n),
  left: (e, { left: n }) => parseFloat(n),
  bottom: ({ y: e }, { top: n }) => parseFloat(n) + (e.max - e.min),
  right: ({ x: e }, { left: n }) => parseFloat(n) + (e.max - e.min),
  // Transform
  x: (e, { transform: n }) => _h(n, "x"),
  y: (e, { transform: n }) => _h(n, "y")
};
Fi.translateX = Fi.x;
Fi.translateY = Fi.y;
const qi = /* @__PURE__ */ new Set();
let Ch = !1, Mh = !1, Dh = !1;
function vS() {
  if (Mh) {
    const e = Array.from(qi).filter((s) => s.needsMeasurement), n = new Set(e.map((s) => s.element)), i = /* @__PURE__ */ new Map();
    n.forEach((s) => {
      const l = k3(s);
      l.length && (i.set(s, l), s.render());
    }), e.forEach((s) => s.measureInitialState()), n.forEach((s) => {
      s.render();
      const l = i.get(s);
      l && l.forEach(([u, f]) => {
        s.getValue(u)?.set(f);
      });
    }), e.forEach((s) => s.measureEndState()), e.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  Mh = !1, Ch = !1, qi.forEach((e) => e.complete(Dh)), qi.clear();
}
function yS() {
  qi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Mh = !0);
  });
}
function O3() {
  Dh = !0, yS(), vS(), Dh = !1;
}
class Am {
  constructor(n, i, s, l, u, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...n], this.onComplete = i, this.name = s, this.motionValue = l, this.element = u, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (qi.add(this), Ch || (Ch = !0, st.read(yS), st.resolveKeyframes(vS))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, name: i, element: s, motionValue: l } = this;
    if (n[0] === null) {
      const u = l?.get(), f = n[n.length - 1];
      if (u !== void 0)
        n[0] = u;
      else if (s && i) {
        const h = s.readValue(i, f);
        h != null && (n[0] = h);
      }
      n[0] === void 0 && (n[0] = f), l && u === void 0 && l.set(n[0]);
    }
    A3(n);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n), qi.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (qi.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const V3 = (e) => e.startsWith("--");
function $3(e, n, i) {
  V3(n) ? e.style.setProperty(n, i) : e.style[n] = i;
}
const N3 = /* @__PURE__ */ tm(() => window.ScrollTimeline !== void 0), j3 = {};
function L3(e, n) {
  const i = /* @__PURE__ */ tm(e);
  return () => j3[n] ?? i();
}
const bS = /* @__PURE__ */ L3(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), xo = ([e, n, i, s]) => `cubic-bezier(${e}, ${n}, ${i}, ${s})`, j0 = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ xo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ xo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ xo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ xo([0.33, 1.53, 0.69, 0.99])
};
function xS(e, n) {
  if (e)
    return typeof e == "function" ? bS() ? mS(e, n) : "ease-out" : nx(e) ? xo(e) : Array.isArray(e) ? e.map((i) => xS(i, n) || j0.easeOut) : j0[e];
}
function U3(e, n, i, { delay: s = 0, duration: l = 300, repeat: u = 0, repeatType: f = "loop", ease: h = "easeOut", times: m } = {}, p = void 0) {
  const g = {
    [n]: i
  };
  m && (g.offset = m);
  const v = xS(h, l);
  Array.isArray(v) && (g.easing = v);
  const b = {
    delay: s,
    duration: l,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: u + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return p && (b.pseudoElement = p), e.animate(g, b);
}
function SS(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function B3({ type: e, ...n }) {
  return SS(e) && bS() ? e.applyToOptions(n) : (n.duration ?? (n.duration = 300), n.ease ?? (n.ease = "easeOut"), n);
}
class P3 extends Em {
  constructor(n) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !n)
      return;
    const { element: i, name: s, keyframes: l, pseudoElement: u, allowFlatten: f = !1, finalKeyframe: h, onComplete: m } = n;
    this.isPseudoElement = !!u, this.allowFlatten = f, this.options = n;
    const p = B3(n);
    this.animation = U3(i, s, l, p, u), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !u) {
        const g = wm(l, this.options, h, this.speed);
        this.updateMotionValue ? this.updateMotionValue(g) : $3(i, s, g), this.animation.cancel();
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
    return /* @__PURE__ */ ua(Number(n));
  }
  get time() {
    return /* @__PURE__ */ ua(Number(this.animation.currentTime) || 0);
  }
  set time(n) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ la(n);
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
  attachTimeline({ timeline: n, observe: i }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, n && N3() ? (this.animation.timeline = n, Gn) : i(this);
  }
}
const wS = {
  anticipate: J1,
  backInOut: Q1,
  circInOut: ex
};
function H3(e) {
  return e in wS;
}
function Z3(e) {
  typeof e.ease == "string" && H3(e.ease) && (e.ease = wS[e.ease]);
}
const L0 = 10;
class G3 extends P3 {
  constructor(n) {
    Z3(n), gS(n), super(n), n.startTime && (this.startTime = n.startTime), this.options = n;
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
    const { motionValue: i, onUpdate: s, onComplete: l, element: u, ...f } = this.options;
    if (!i)
      return;
    if (n !== void 0) {
      i.set(n);
      return;
    }
    const h = new Tm({
      ...f,
      autoplay: !1
    }), m = /* @__PURE__ */ la(this.finishedTime ?? this.time);
    i.setWithVelocity(h.sample(m - L0).value, h.sample(m).value, L0), h.stop();
  }
}
const U0 = (e, n) => n === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(pi.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Y3(e) {
  const n = e[0];
  if (e.length === 1)
    return !0;
  for (let i = 0; i < e.length; i++)
    if (e[i] !== n)
      return !0;
}
function F3(e, n, i, s) {
  const l = e[0];
  if (l === null)
    return !1;
  if (n === "display" || n === "visibility")
    return !0;
  const u = e[e.length - 1], f = U0(l, n), h = U0(u, n);
  return !f || !h ? !1 : Y3(e) || (i === "spring" || SS(i)) && s;
}
function Rh(e) {
  e.duration = 0;
}
const q3 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), K3 = /* @__PURE__ */ tm(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function I3(e) {
  const { motionValue: n, name: i, repeatDelay: s, repeatType: l, damping: u, type: f } = e;
  if (!(n?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: m, transformTemplate: p } = n.owner.getProps();
  return K3() && i && q3.has(i) && (i !== "transform" || !p) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !m && !s && l !== "mirror" && u !== 0 && f !== "inertia";
}
const X3 = 40;
class Q3 extends Em {
  constructor({ autoplay: n = !0, delay: i = 0, type: s = "keyframes", repeat: l = 0, repeatDelay: u = 0, repeatType: f = "loop", keyframes: h, name: m, motionValue: p, element: g, ...v }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = vn.now();
    const b = {
      autoplay: n,
      delay: i,
      type: s,
      repeat: l,
      repeatDelay: u,
      repeatType: f,
      name: m,
      motionValue: p,
      element: g,
      ...v
    }, E = g?.KeyframeResolver || Am;
    this.keyframeResolver = new E(h, (_, M, N) => this.onKeyframesResolved(_, M, b, !N), m, p, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(n, i, s, l) {
    this.keyframeResolver = void 0;
    const { name: u, type: f, velocity: h, delay: m, isHandoff: p, onUpdate: g } = s;
    this.resolvedAt = vn.now(), F3(n, u, f, h) || ((fa.instantAnimations || !m) && g?.(wm(n, s, i)), n[0] = n[n.length - 1], Rh(s), s.repeat = 0);
    const b = {
      startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > X3 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: i,
      ...s,
      keyframes: n
    }, E = !p && I3(b) ? new G3({
      ...b,
      element: b.motionValue.owner.current
    }) : new Tm(b);
    E.finished.then(() => this.notifyFinished()).catch(Gn), this.pendingTimeline && (this.stopTimeline = E.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = E;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(n, i) {
    return this.finished.finally(n).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), O3()), this._animation;
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
const J3 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function W3(e) {
  const n = J3.exec(e);
  if (!n)
    return [,];
  const [, i, s, l] = n;
  return [`--${i ?? s}`, l];
}
function ES(e, n, i = 1) {
  const [s, l] = W3(e);
  if (!s)
    return;
  const u = window.getComputedStyle(n).getPropertyValue(s);
  if (u) {
    const f = u.trim();
    return Z1(f) ? parseFloat(f) : f;
  }
  return vm(l) ? ES(l, n, i + 1) : l;
}
function _m(e, n) {
  return e?.[n] ?? e?.default ?? e;
}
const TS = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...fs
]), e6 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, AS = (e) => (n) => n.test(e), _S = [cs, ze, ca, ci, Y4, G4, e6], B0 = (e) => _S.find(AS(e));
function t6(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Y1(e) : !0;
}
const n6 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function a6(e) {
  const [n, i] = e.slice(0, -1).split("(");
  if (n === "drop-shadow")
    return e;
  const [s] = i.match(ym) || [];
  if (!s)
    return e;
  const l = i.replace(s, "");
  let u = n6.has(n) ? 1 : 0;
  return s !== i && (u *= 100), n + "(" + u + l + ")";
}
const i6 = /\b([a-z-]*)\(.*?\)/gu, zh = {
  ...pi,
  getAnimatableNone: (e) => {
    const n = e.match(i6);
    return n ? n.map(a6).join(" ") : e;
  }
}, P0 = {
  ...cs,
  transform: Math.round
}, r6 = {
  rotate: ci,
  rotateX: ci,
  rotateY: ci,
  rotateZ: ci,
  scale: pu,
  scaleX: pu,
  scaleY: pu,
  scaleZ: pu,
  skew: ci,
  skewX: ci,
  skewY: ci,
  distance: ze,
  translateX: ze,
  translateY: ze,
  translateZ: ze,
  x: ze,
  y: ze,
  z: ze,
  perspective: ze,
  transformPerspective: ze,
  opacity: Vo,
  originX: M0,
  originY: M0,
  originZ: ze
}, Cm = {
  // Border props
  borderWidth: ze,
  borderTopWidth: ze,
  borderRightWidth: ze,
  borderBottomWidth: ze,
  borderLeftWidth: ze,
  borderRadius: ze,
  radius: ze,
  borderTopLeftRadius: ze,
  borderTopRightRadius: ze,
  borderBottomRightRadius: ze,
  borderBottomLeftRadius: ze,
  // Positioning props
  width: ze,
  maxWidth: ze,
  height: ze,
  maxHeight: ze,
  top: ze,
  right: ze,
  bottom: ze,
  left: ze,
  // Spacing props
  padding: ze,
  paddingTop: ze,
  paddingRight: ze,
  paddingBottom: ze,
  paddingLeft: ze,
  margin: ze,
  marginTop: ze,
  marginRight: ze,
  marginBottom: ze,
  marginLeft: ze,
  // Misc
  backgroundPositionX: ze,
  backgroundPositionY: ze,
  ...r6,
  zIndex: P0,
  // SVG
  fillOpacity: Vo,
  strokeOpacity: Vo,
  numOctaves: P0
}, s6 = {
  ...Cm,
  // Color props
  color: Rt,
  backgroundColor: Rt,
  outlineColor: Rt,
  fill: Rt,
  stroke: Rt,
  // Border props
  borderColor: Rt,
  borderTopColor: Rt,
  borderRightColor: Rt,
  borderBottomColor: Rt,
  borderLeftColor: Rt,
  filter: zh,
  WebkitFilter: zh
}, CS = (e) => s6[e];
function MS(e, n) {
  let i = CS(e);
  return i !== zh && (i = pi), i.getAnimatableNone ? i.getAnimatableNone(n) : void 0;
}
const o6 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function l6(e, n, i) {
  let s = 0, l;
  for (; s < e.length && !l; ) {
    const u = e[s];
    typeof u == "string" && !o6.has(u) && $o(u).values.length && (l = e[s]), s++;
  }
  if (l && i)
    for (const u of n)
      e[u] = MS(i, l);
}
class u6 extends Am {
  constructor(n, i, s, l, u) {
    super(n, i, s, l, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, element: i, name: s } = this;
    if (!i || !i.current)
      return;
    super.readKeyframes();
    for (let m = 0; m < n.length; m++) {
      let p = n[m];
      if (typeof p == "string" && (p = p.trim(), vm(p))) {
        const g = ES(p, i.current);
        g !== void 0 && (n[m] = g), m === n.length - 1 && (this.finalKeyframe = p);
      }
    }
    if (this.resolveNoneKeyframes(), !TS.has(s) || n.length !== 2)
      return;
    const [l, u] = n, f = B0(l), h = B0(u);
    if (f !== h)
      if (N0(f) && N0(h))
        for (let m = 0; m < n.length; m++) {
          const p = n[m];
          typeof p == "string" && (n[m] = parseFloat(p));
        }
      else Fi[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: n, name: i } = this, s = [];
    for (let l = 0; l < n.length; l++)
      (n[l] === null || t6(n[l])) && s.push(l);
    s.length && l6(n, s, i);
  }
  measureInitialState() {
    const { element: n, unresolvedKeyframes: i, name: s } = this;
    if (!n || !n.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Fi[s](n.measureViewportBox(), window.getComputedStyle(n.current)), i[0] = this.measuredOrigin;
    const l = i[i.length - 1];
    l !== void 0 && n.getValue(s, l).jump(l, !1);
  }
  measureEndState() {
    const { element: n, name: i, unresolvedKeyframes: s } = this;
    if (!n || !n.current)
      return;
    const l = n.getValue(i);
    l && l.jump(this.measuredOrigin, !1);
    const u = s.length - 1, f = s[u];
    s[u] = Fi[i](n.measureViewportBox(), window.getComputedStyle(n.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([h, m]) => {
      n.getValue(h).set(m);
    }), this.resolveNoneKeyframes();
  }
}
function c6(e, n, i) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let s = document;
    const l = i?.[e] ?? s.querySelectorAll(e);
    return l ? Array.from(l) : [];
  }
  return Array.from(e);
}
const DS = (e, n) => n && typeof e == "number" ? n.transform(e) : e;
function RS(e) {
  return G1(e) && "offsetHeight" in e;
}
const H0 = 30, f6 = (e) => !isNaN(parseFloat(e));
class d6 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(n, i = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      const l = vn.now();
      if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const u of this.dependents)
          u.dirty();
    }, this.hasAnimated = !1, this.setCurrent(n), this.owner = i.owner;
  }
  setCurrent(n) {
    this.current = n, this.updatedAt = vn.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = f6(this.current));
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
  on(n, i) {
    this.events[n] || (this.events[n] = new nm());
    const s = this.events[n].add(i);
    return n === "change" ? () => {
      s(), st.read(() => {
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
  attach(n, i) {
    this.passiveEffect = n, this.stopPassiveEffect = i;
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
  setWithVelocity(n, i, s) {
    this.set(i), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(n, i = !0) {
    this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
    const n = vn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > H0)
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, H0);
    return F1(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
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
    return this.stop(), new Promise((i) => {
      this.hasAnimated = !0, this.animation = n(i), this.events.animationStart && this.events.animationStart.notify();
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
function is(e, n) {
  return new d6(e, n);
}
const { schedule: Mm } = /* @__PURE__ */ rS(queueMicrotask, !1), In = {
  x: !1,
  y: !1
};
function zS() {
  return In.x || In.y;
}
function h6(e) {
  return e === "x" || e === "y" ? In[e] ? null : (In[e] = !0, () => {
    In[e] = !1;
  }) : In.x || In.y ? null : (In.x = In.y = !0, () => {
    In.x = In.y = !1;
  });
}
function kS(e, n) {
  const i = c6(e), s = new AbortController(), l = {
    passive: !0,
    ...n,
    signal: s.signal
  };
  return [i, l, () => s.abort()];
}
function Z0(e) {
  return !(e.pointerType === "touch" || zS());
}
function m6(e, n, i = {}) {
  const [s, l, u] = kS(e, i), f = (h) => {
    if (!Z0(h))
      return;
    const { target: m } = h, p = n(m, h);
    if (typeof p != "function" || !m)
      return;
    const g = (v) => {
      Z0(v) && (p(v), m.removeEventListener("pointerleave", g));
    };
    m.addEventListener("pointerleave", g, l);
  };
  return s.forEach((h) => {
    h.addEventListener("pointerenter", f, l);
  }), u;
}
const OS = (e, n) => n ? e === n ? !0 : OS(e, n.parentElement) : !1, Dm = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, p6 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function g6(e) {
  return p6.has(e.tagName) || e.tabIndex !== -1;
}
const Mu = /* @__PURE__ */ new WeakSet();
function G0(e) {
  return (n) => {
    n.key === "Enter" && e(n);
  };
}
function Nd(e, n) {
  e.dispatchEvent(new PointerEvent("pointer" + n, { isPrimary: !0, bubbles: !0 }));
}
const v6 = (e, n) => {
  const i = e.currentTarget;
  if (!i)
    return;
  const s = G0(() => {
    if (Mu.has(i))
      return;
    Nd(i, "down");
    const l = G0(() => {
      Nd(i, "up");
    }), u = () => Nd(i, "cancel");
    i.addEventListener("keyup", l, n), i.addEventListener("blur", u, n);
  });
  i.addEventListener("keydown", s, n), i.addEventListener("blur", () => i.removeEventListener("keydown", s), n);
};
function Y0(e) {
  return Dm(e) && !zS();
}
function y6(e, n, i = {}) {
  const [s, l, u] = kS(e, i), f = (h) => {
    const m = h.currentTarget;
    if (!Y0(h))
      return;
    Mu.add(m);
    const p = n(m, h), g = (E, _) => {
      window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", b), Mu.has(m) && Mu.delete(m), Y0(E) && typeof p == "function" && p(E, { success: _ });
    }, v = (E) => {
      g(E, m === window || m === document || i.useGlobalTarget || OS(m, E.target));
    }, b = (E) => {
      g(E, !1);
    };
    window.addEventListener("pointerup", v, l), window.addEventListener("pointercancel", b, l);
  };
  return s.forEach((h) => {
    (i.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l), RS(h) && (h.addEventListener("focus", (p) => v6(p, l)), !g6(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), u;
}
function VS(e) {
  return G1(e) && "ownerSVGElement" in e;
}
function b6(e) {
  return VS(e) && e.tagName === "svg";
}
const Wt = (e) => !!(e && e.getVelocity), x6 = [..._S, Rt, pi], S6 = (e) => x6.find(AS(e)), Rm = A.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class w6 extends A.Component {
  getSnapshotBeforeUpdate(n) {
    const i = this.props.childRef.current;
    if (i && n.isPresent && !this.props.isPresent) {
      const s = i.offsetParent, l = RS(s) && s.offsetWidth || 0, u = this.props.sizeRef.current;
      u.height = i.offsetHeight || 0, u.width = i.offsetWidth || 0, u.top = i.offsetTop, u.left = i.offsetLeft, u.right = l - u.width - u.left;
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
function E6({ children: e, isPresent: n, anchorX: i, root: s }) {
  const l = A.useId(), u = A.useRef(null), f = A.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: h } = A.useContext(Rm);
  return A.useInsertionEffect(() => {
    const { width: m, height: p, top: g, left: v, right: b } = f.current;
    if (n || !u.current || !m || !p)
      return;
    const E = i === "left" ? `left: ${v}` : `right: ${b}`;
    u.current.dataset.motionPopId = l;
    const _ = document.createElement("style");
    h && (_.nonce = h);
    const M = s ?? document.head;
    return M.appendChild(_), _.sheet && _.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${p}px !important;
            ${E}px !important;
            top: ${g}px !important;
          }
        `), () => {
      M.contains(_) && M.removeChild(_);
    };
  }, [n]), $.jsx(w6, { isPresent: n, childRef: u, sizeRef: f, children: A.cloneElement(e, { ref: u }) });
}
const T6 = ({ children: e, initial: n, isPresent: i, onExitComplete: s, custom: l, presenceAffectsLayout: u, mode: f, anchorX: h, root: m }) => {
  const p = mm(A6), g = A.useId();
  let v = !0, b = A.useMemo(() => (v = !1, {
    id: g,
    initial: n,
    isPresent: i,
    custom: l,
    onExitComplete: (E) => {
      p.set(E, !0);
      for (const _ of p.values())
        if (!_)
          return;
      s && s();
    },
    register: (E) => (p.set(E, !1), () => p.delete(E))
  }), [i, p, s]);
  return u && v && (b = { ...b }), A.useMemo(() => {
    p.forEach((E, _) => p.set(_, !1));
  }, [i]), A.useEffect(() => {
    !i && !p.size && s && s();
  }, [i]), f === "popLayout" && (e = $.jsx(E6, { isPresent: i, anchorX: h, root: m, children: e })), $.jsx(Xu.Provider, { value: b, children: e });
};
function A6() {
  return /* @__PURE__ */ new Map();
}
function $S(e = !0) {
  const n = A.useContext(Xu);
  if (n === null)
    return [!0, null];
  const { isPresent: i, onExitComplete: s, register: l } = n, u = A.useId();
  A.useEffect(() => {
    if (e)
      return l(u);
  }, [e]);
  const f = A.useCallback(() => e && s && s(u), [u, s, e]);
  return !i && s ? [!1, f] : [!0];
}
const gu = (e) => e.key || "";
function F0(e) {
  const n = [];
  return A.Children.forEach(e, (i) => {
    A.isValidElement(i) && n.push(i);
  }), n;
}
const NS = ({ children: e, custom: n, initial: i = !0, onExitComplete: s, presenceAffectsLayout: l = !0, mode: u = "sync", propagate: f = !1, anchorX: h = "left", root: m }) => {
  const [p, g] = $S(f), v = A.useMemo(() => F0(e), [e]), b = f && !p ? [] : v.map(gu), E = A.useRef(!0), _ = A.useRef(v), M = mm(() => /* @__PURE__ */ new Map()), [N, L] = A.useState(v), [z, Z] = A.useState(v);
  iS(() => {
    E.current = !1, _.current = v;
    for (let k = 0; k < z.length; k++) {
      const W = gu(z[k]);
      b.includes(W) ? M.delete(W) : M.get(W) !== !0 && M.set(W, !1);
    }
  }, [z, b.length, b.join("-")]);
  const ee = [];
  if (v !== N) {
    let k = [...v];
    for (let W = 0; W < z.length; W++) {
      const Y = z[W], de = gu(Y);
      b.includes(de) || (k.splice(W, 0, Y), ee.push(Y));
    }
    return u === "wait" && ee.length && (k = ee), Z(F0(k)), L(v), null;
  }
  const { forceRender: I } = A.useContext(hm);
  return $.jsx($.Fragment, { children: z.map((k) => {
    const W = gu(k), Y = f && !p ? !1 : v === z || b.includes(W), de = () => {
      if (M.has(W))
        M.set(W, !0);
      else
        return;
      let ve = !0;
      M.forEach((K) => {
        K || (ve = !1);
      }), ve && (I?.(), Z(_.current), f && g?.(), s && s());
    };
    return $.jsx(T6, { isPresent: Y, initial: !E.current || i ? void 0 : !1, custom: n, presenceAffectsLayout: l, mode: u, root: m, onExitComplete: Y ? void 0 : de, anchorX: h, children: k }, W);
  }) });
}, jS = A.createContext({ strict: !1 }), q0 = {
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
}, rs = {};
for (const e in q0)
  rs[e] = {
    isEnabled: (n) => q0[e].some((i) => !!n[i])
  };
function _6(e) {
  for (const n in e)
    rs[n] = {
      ...rs[n],
      ...e[n]
    };
}
const C6 = /* @__PURE__ */ new Set([
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
function Lu(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || C6.has(e);
}
let LS = (e) => !Lu(e);
function M6(e) {
  typeof e == "function" && (LS = (n) => n.startsWith("on") ? !Lu(n) : e(n));
}
try {
  M6(require("@emotion/is-prop-valid").default);
} catch {
}
function D6(e, n, i) {
  const s = {};
  for (const l in e)
    l === "values" && typeof e.values == "object" || (LS(l) || i === !0 && Lu(l) || !n && !Lu(l) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && l.startsWith("onDrag")) && (s[l] = e[l]);
  return s;
}
const Qu = /* @__PURE__ */ A.createContext({});
function Ju(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function No(e) {
  return typeof e == "string" || Array.isArray(e);
}
const zm = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], km = ["initial", ...zm];
function Wu(e) {
  return Ju(e.animate) || km.some((n) => No(e[n]));
}
function US(e) {
  return !!(Wu(e) || e.variants);
}
function R6(e, n) {
  if (Wu(e)) {
    const { initial: i, animate: s } = e;
    return {
      initial: i === !1 || No(i) ? i : void 0,
      animate: No(s) ? s : void 0
    };
  }
  return e.inherit !== !1 ? n : {};
}
function z6(e) {
  const { initial: n, animate: i } = R6(e, A.useContext(Qu));
  return A.useMemo(() => ({ initial: n, animate: i }), [K0(n), K0(i)]);
}
function K0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const jo = {};
function k6(e) {
  for (const n in e)
    jo[n] = e[n], gm(n) && (jo[n].isCSSVariable = !0);
}
function BS(e, { layout: n, layoutId: i }) {
  return ds.has(e) || e.startsWith("origin") || (n || i !== void 0) && (!!jo[e] || e === "opacity");
}
const O6 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, V6 = fs.length;
function $6(e, n, i) {
  let s = "", l = !0;
  for (let u = 0; u < V6; u++) {
    const f = fs[u], h = e[f];
    if (h === void 0)
      continue;
    let m = !0;
    if (typeof h == "number" ? m = h === (f.startsWith("scale") ? 1 : 0) : m = parseFloat(h) === 0, !m || i) {
      const p = DS(h, Cm[f]);
      if (!m) {
        l = !1;
        const g = O6[f] || f;
        s += `${g}(${p}) `;
      }
      i && (n[f] = p);
    }
  }
  return s = s.trim(), i ? s = i(n, l ? "" : s) : l && (s = "none"), s;
}
function Om(e, n, i) {
  const { style: s, vars: l, transformOrigin: u } = e;
  let f = !1, h = !1;
  for (const m in n) {
    const p = n[m];
    if (ds.has(m)) {
      f = !0;
      continue;
    } else if (gm(m)) {
      l[m] = p;
      continue;
    } else {
      const g = DS(p, Cm[m]);
      m.startsWith("origin") ? (h = !0, u[m] = g) : s[m] = g;
    }
  }
  if (n.transform || (f || i ? s.transform = $6(n, e.transform, i) : s.transform && (s.transform = "none")), h) {
    const { originX: m = "50%", originY: p = "50%", originZ: g = 0 } = u;
    s.transformOrigin = `${m} ${p} ${g}`;
  }
}
const Vm = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function PS(e, n, i) {
  for (const s in n)
    !Wt(n[s]) && !BS(s, i) && (e[s] = n[s]);
}
function N6({ transformTemplate: e }, n) {
  return A.useMemo(() => {
    const i = Vm();
    return Om(i, n, e), Object.assign({}, i.vars, i.style);
  }, [n]);
}
function j6(e, n) {
  const i = e.style || {}, s = {};
  return PS(s, i, e), Object.assign(s, N6(e, n)), s;
}
function L6(e, n) {
  const i = {}, s = j6(e, n);
  return e.drag && e.dragListener !== !1 && (i.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = s, i;
}
const U6 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, B6 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function P6(e, n, i = 1, s = 0, l = !0) {
  e.pathLength = 1;
  const u = l ? U6 : B6;
  e[u.offset] = ze.transform(-s);
  const f = ze.transform(n), h = ze.transform(i);
  e[u.array] = `${f} ${h}`;
}
function HS(e, {
  attrX: n,
  attrY: i,
  attrScale: s,
  pathLength: l,
  pathSpacing: u = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, m, p, g) {
  if (Om(e, h, p), m) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: v, style: b } = e;
  v.transform && (b.transform = v.transform, delete v.transform), (b.transform || v.transformOrigin) && (b.transformOrigin = v.transformOrigin ?? "50% 50%", delete v.transformOrigin), b.transform && (b.transformBox = g?.transformBox ?? "fill-box", delete v.transformBox), n !== void 0 && (v.x = n), i !== void 0 && (v.y = i), s !== void 0 && (v.scale = s), l !== void 0 && P6(v, l, u, f, !1);
}
const ZS = () => ({
  ...Vm(),
  attrs: {}
}), GS = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function H6(e, n, i, s) {
  const l = A.useMemo(() => {
    const u = ZS();
    return HS(u, n, GS(s), e.transformTemplate, e.style), {
      ...u.attrs,
      style: { ...u.style }
    };
  }, [n]);
  if (e.style) {
    const u = {};
    PS(u, e.style, e), l.style = { ...u, ...l.style };
  }
  return l;
}
const Z6 = [
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
function $m(e) {
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
      !!(Z6.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function G6(e, n, i, { latestValues: s }, l, u = !1) {
  const h = ($m(e) ? H6 : L6)(n, s, l, e), m = D6(n, typeof e == "string", u), p = e !== A.Fragment ? { ...m, ...h, ref: i } : {}, { children: g } = n, v = A.useMemo(() => Wt(g) ? g.get() : g, [g]);
  return A.createElement(e, {
    ...p,
    children: v
  });
}
function I0(e) {
  const n = [{}, {}];
  return e?.values.forEach((i, s) => {
    n[0][s] = i.get(), n[1][s] = i.getVelocity();
  }), n;
}
function Nm(e, n, i, s) {
  if (typeof n == "function") {
    const [l, u] = I0(s);
    n = n(i !== void 0 ? i : e.custom, l, u);
  }
  if (typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function") {
    const [l, u] = I0(s);
    n = n(i !== void 0 ? i : e.custom, l, u);
  }
  return n;
}
function Du(e) {
  return Wt(e) ? e.get() : e;
}
function Y6({ scrapeMotionValuesFromProps: e, createRenderState: n }, i, s, l) {
  return {
    latestValues: F6(i, s, l, e),
    renderState: n()
  };
}
function F6(e, n, i, s) {
  const l = {}, u = s(e, {});
  for (const b in u)
    l[b] = Du(u[b]);
  let { initial: f, animate: h } = e;
  const m = Wu(e), p = US(e);
  n && p && !m && e.inherit !== !1 && (f === void 0 && (f = n.initial), h === void 0 && (h = n.animate));
  let g = i ? i.initial === !1 : !1;
  g = g || f === !1;
  const v = g ? h : f;
  if (v && typeof v != "boolean" && !Ju(v)) {
    const b = Array.isArray(v) ? v : [v];
    for (let E = 0; E < b.length; E++) {
      const _ = Nm(e, b[E]);
      if (_) {
        const { transitionEnd: M, transition: N, ...L } = _;
        for (const z in L) {
          let Z = L[z];
          if (Array.isArray(Z)) {
            const ee = g ? Z.length - 1 : 0;
            Z = Z[ee];
          }
          Z !== null && (l[z] = Z);
        }
        for (const z in M)
          l[z] = M[z];
      }
    }
  }
  return l;
}
const YS = (e) => (n, i) => {
  const s = A.useContext(Qu), l = A.useContext(Xu), u = () => Y6(e, n, s, l);
  return i ? u() : mm(u);
};
function jm(e, n, i) {
  const { style: s } = e, l = {};
  for (const u in s)
    (Wt(s[u]) || n.style && Wt(n.style[u]) || BS(u, e) || i?.getValue(u)?.liveStyle !== void 0) && (l[u] = s[u]);
  return l;
}
const q6 = /* @__PURE__ */ YS({
  scrapeMotionValuesFromProps: jm,
  createRenderState: Vm
});
function FS(e, n, i) {
  const s = jm(e, n, i);
  for (const l in e)
    if (Wt(e[l]) || Wt(n[l])) {
      const u = fs.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
      s[u] = e[l];
    }
  return s;
}
const K6 = /* @__PURE__ */ YS({
  scrapeMotionValuesFromProps: FS,
  createRenderState: ZS
}), I6 = Symbol.for("motionComponentSymbol");
function Xr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function X6(e, n, i) {
  return A.useCallback(
    (s) => {
      s && e.onMount && e.onMount(s), n && (s ? n.mount(s) : n.unmount()), i && (typeof i == "function" ? i(s) : Xr(i) && (i.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [n]
  );
}
const Lm = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Q6 = "framerAppearId", qS = "data-" + Lm(Q6), KS = A.createContext({});
function J6(e, n, i, s, l) {
  const { visualElement: u } = A.useContext(Qu), f = A.useContext(jS), h = A.useContext(Xu), m = A.useContext(Rm).reducedMotion, p = A.useRef(null);
  s = s || f.renderer, !p.current && s && (p.current = s(e, {
    visualState: n,
    parent: u,
    props: i,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: m
  }));
  const g = p.current, v = A.useContext(KS);
  g && !g.projection && l && (g.type === "html" || g.type === "svg") && W6(p.current, i, l, v);
  const b = A.useRef(!1);
  A.useInsertionEffect(() => {
    g && b.current && g.update(i, h);
  });
  const E = i[qS], _ = A.useRef(!!E && !window.MotionHandoffIsComplete?.(E) && window.MotionHasOptimisedAnimation?.(E));
  return iS(() => {
    g && (b.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), g.scheduleRenderMicrotask(), _.current && g.animationState && g.animationState.animateChanges());
  }), A.useEffect(() => {
    g && (!_.current && g.animationState && g.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(E);
    }), _.current = !1), g.enteringChildren = void 0);
  }), g;
}
function W6(e, n, i, s) {
  const { layoutId: l, layout: u, drag: f, dragConstraints: h, layoutScroll: m, layoutRoot: p, layoutCrossfade: g } = n;
  e.projection = new i(e.latestValues, n["data-framer-portal-id"] ? void 0 : IS(e.parent)), e.projection.setOptions({
    layoutId: l,
    layout: u,
    alwaysMeasureLayout: !!f || h && Xr(h),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof u == "string" ? u : "both",
    initialPromotionConfig: s,
    crossfade: g,
    layoutScroll: m,
    layoutRoot: p
  });
}
function IS(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : IS(e.parent);
}
function jd(e, { forwardMotionProps: n = !1 } = {}, i, s) {
  i && _6(i);
  const l = $m(e) ? K6 : q6;
  function u(h, m) {
    let p;
    const g = {
      ...A.useContext(Rm),
      ...h,
      layoutId: e5(h)
    }, { isStatic: v } = g, b = z6(h), E = l(h, v);
    if (!v && pm) {
      t5();
      const _ = n5(g);
      p = _.MeasureLayout, b.visualElement = J6(e, E, g, s, _.ProjectionNode);
    }
    return $.jsxs(Qu.Provider, { value: b, children: [p && b.visualElement ? $.jsx(p, { visualElement: b.visualElement, ...g }) : null, G6(e, h, X6(E, b.visualElement, m), E, v, n)] });
  }
  u.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const f = A.forwardRef(u);
  return f[I6] = e, f;
}
function e5({ layoutId: e }) {
  const n = A.useContext(hm).id;
  return n && e !== void 0 ? n + "-" + e : e;
}
function t5(e, n) {
  A.useContext(jS).strict;
}
function n5(e) {
  const { drag: n, layout: i } = rs;
  if (!n && !i)
    return {};
  const s = { ...n, ...i };
  return {
    MeasureLayout: n?.isEnabled(e) || i?.isEnabled(e) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
function a5(e, n) {
  if (typeof Proxy > "u")
    return jd;
  const i = /* @__PURE__ */ new Map(), s = (u, f) => jd(u, f, e, n), l = (u, f) => s(u, f);
  return new Proxy(l, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (u, f) => f === "create" ? s : (i.has(f) || i.set(f, jd(f, void 0, e, n)), i.get(f))
  });
}
function XS({ top: e, left: n, right: i, bottom: s }) {
  return {
    x: { min: n, max: i },
    y: { min: e, max: s }
  };
}
function i5({ x: e, y: n }) {
  return { top: n.min, right: e.max, bottom: n.max, left: e.min };
}
function r5(e, n) {
  if (!n)
    return e;
  const i = n({ x: e.left, y: e.top }), s = n({ x: e.right, y: e.bottom });
  return {
    top: i.y,
    left: i.x,
    bottom: s.y,
    right: s.x
  };
}
function Ld(e) {
  return e === void 0 || e === 1;
}
function kh({ scale: e, scaleX: n, scaleY: i }) {
  return !Ld(e) || !Ld(n) || !Ld(i);
}
function Hi(e) {
  return kh(e) || QS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function QS(e) {
  return X0(e.x) || X0(e.y);
}
function X0(e) {
  return e && e !== "0%";
}
function Uu(e, n, i) {
  const s = e - i, l = n * s;
  return i + l;
}
function Q0(e, n, i, s, l) {
  return l !== void 0 && (e = Uu(e, l, s)), Uu(e, i, s) + n;
}
function Oh(e, n = 0, i = 1, s, l) {
  e.min = Q0(e.min, n, i, s, l), e.max = Q0(e.max, n, i, s, l);
}
function JS(e, { x: n, y: i }) {
  Oh(e.x, n.translate, n.scale, n.originPoint), Oh(e.y, i.translate, i.scale, i.originPoint);
}
const J0 = 0.999999999999, W0 = 1.0000000000001;
function s5(e, n, i, s = !1) {
  const l = i.length;
  if (!l)
    return;
  n.x = n.y = 1;
  let u, f;
  for (let h = 0; h < l; h++) {
    u = i[h], f = u.projectionDelta;
    const { visualElement: m } = u.options;
    m && m.props.style && m.props.style.display === "contents" || (s && u.options.layoutScroll && u.scroll && u !== u.root && Jr(e, {
      x: -u.scroll.offset.x,
      y: -u.scroll.offset.y
    }), f && (n.x *= f.x.scale, n.y *= f.y.scale, JS(e, f)), s && Hi(u.latestValues) && Jr(e, u.latestValues));
  }
  n.x < W0 && n.x > J0 && (n.x = 1), n.y < W0 && n.y > J0 && (n.y = 1);
}
function Qr(e, n) {
  e.min = e.min + n, e.max = e.max + n;
}
function eb(e, n, i, s, l = 0.5) {
  const u = ct(e.min, e.max, l);
  Oh(e, n, i, u, s);
}
function Jr(e, n) {
  eb(e.x, n.x, n.scaleX, n.scale, n.originX), eb(e.y, n.y, n.scaleY, n.scale, n.originY);
}
function WS(e, n) {
  return XS(r5(e.getBoundingClientRect(), n));
}
function o5(e, n, i) {
  const s = WS(e, i), { scroll: l } = n;
  return l && (Qr(s.x, l.offset.x), Qr(s.y, l.offset.y)), s;
}
const tb = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Wr = () => ({
  x: tb(),
  y: tb()
}), nb = () => ({ min: 0, max: 0 }), xt = () => ({
  x: nb(),
  y: nb()
}), Vh = { current: null }, ew = { current: !1 };
function l5() {
  if (ew.current = !0, !!pm)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), n = () => Vh.current = e.matches;
      e.addEventListener("change", n), n();
    } else
      Vh.current = !1;
}
const u5 = /* @__PURE__ */ new WeakMap();
function c5(e, n, i) {
  for (const s in n) {
    const l = n[s], u = i[s];
    if (Wt(l))
      e.addValue(s, l);
    else if (Wt(u))
      e.addValue(s, is(l, { owner: e }));
    else if (u !== l)
      if (e.hasValue(s)) {
        const f = e.getValue(s);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = e.getStaticValue(s);
        e.addValue(s, is(f !== void 0 ? f : l, { owner: e }));
      }
  }
  for (const s in i)
    n[s] === void 0 && e.removeValue(s);
  return n;
}
const ab = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class f5 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(n, i, s) {
    return {};
  }
  constructor({ parent: n, props: i, presenceContext: s, reducedMotionConfig: l, blockInitialAnimation: u, visualState: f }, h = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Am, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const b = vn.now();
      this.renderScheduledAt < b && (this.renderScheduledAt = b, st.render(this.render, !1, !0));
    };
    const { latestValues: m, renderState: p } = f;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = i.initial ? { ...m } : {}, this.renderState = p, this.parent = n, this.props = i, this.presenceContext = s, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = l, this.options = h, this.blockInitialAnimation = !!u, this.isControllingVariants = Wu(i), this.isVariantNode = US(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
    const { willChange: g, ...v } = this.scrapeMotionValuesFromProps(i, {}, this);
    for (const b in v) {
      const E = v[b];
      m[b] !== void 0 && Wt(E) && E.set(m[b]);
    }
  }
  mount(n) {
    this.current = n, u5.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, s) => this.bindToMotionValue(s, i)), ew.current || l5(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Vh.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), mi(this.notifyUpdate), mi(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const i = this.features[n];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(n) {
    this.children.add(n), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(n);
  }
  removeChild(n) {
    this.children.delete(n), this.enteringChildren && this.enteringChildren.delete(n);
  }
  bindToMotionValue(n, i) {
    this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
    const s = ds.has(n);
    s && this.onBindTransform && this.onBindTransform();
    const l = i.on("change", (f) => {
      this.latestValues[n] = f, this.props.onUpdate && st.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let u;
    window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, n, i)), this.valueSubscriptions.set(n, () => {
      l(), u && u(), i.owner && i.stop();
    });
  }
  sortNodePosition(n) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current);
  }
  updateFeatures() {
    let n = "animation";
    for (n in rs) {
      const i = rs[n];
      if (!i)
        continue;
      const { isEnabled: s, Feature: l } = i;
      if (!this.features[n] && l && s(this.props) && (this.features[n] = new l(this)), this.features[n]) {
        const u = this.features[n];
        u.isMounted ? u.update() : (u.mount(), u.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : xt();
  }
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, i) {
    this.latestValues[n] = i;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(n, i) {
    (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let s = 0; s < ab.length; s++) {
      const l = ab[s];
      this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
      const u = "on" + l, f = n[u];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    this.prevMotionValues = c5(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    const i = this.getClosestVariantNode();
    if (i)
      return i.variantChildren && i.variantChildren.add(n), () => i.variantChildren.delete(n);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(n, i) {
    const s = this.values.get(n);
    i !== s && (s && this.removeValue(n), this.bindToMotionValue(n, i), this.values.set(n, i), this.latestValues[n] = i.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(n) {
    this.values.delete(n);
    const i = this.valueSubscriptions.get(n);
    i && (i(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, i) {
    if (this.props.values && this.props.values[n])
      return this.props.values[n];
    let s = this.values.get(n);
    return s === void 0 && i !== void 0 && (s = is(i === null ? void 0 : i, { owner: this }), this.addValue(n, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(n, i) {
    let s = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options);
    return s != null && (typeof s == "string" && (Z1(s) || Y1(s)) ? s = parseFloat(s) : !S6(s) && pi.test(i) && (s = MS(n, i)), this.setBaseTarget(n, Wt(s) ? s.get() : s)), Wt(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(n, i) {
    this.baseTarget[n] = i;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(n) {
    const { initial: i } = this.props;
    let s;
    if (typeof i == "string" || typeof i == "object") {
      const u = Nm(this.props, i, this.presenceContext?.custom);
      u && (s = u[n]);
    }
    if (i && s !== void 0)
      return s;
    const l = this.getBaseTargetFromProps(this.props, n);
    return l !== void 0 && !Wt(l) ? l : this.initialValues[n] !== void 0 && s === void 0 ? void 0 : this.baseTarget[n];
  }
  on(n, i) {
    return this.events[n] || (this.events[n] = new nm()), this.events[n].add(i);
  }
  notify(n, ...i) {
    this.events[n] && this.events[n].notify(...i);
  }
  scheduleRenderMicrotask() {
    Mm.render(this.render);
  }
}
class tw extends f5 {
  constructor() {
    super(...arguments), this.KeyframeResolver = u6;
  }
  sortInstanceNodePosition(n, i) {
    return n.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, i) {
    return n.style ? n.style[i] : void 0;
  }
  removeValueFromRenderState(n, { vars: i, style: s }) {
    delete i[n], delete s[n];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    Wt(n) && (this.childSubscription = n.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
}
function nw(e, { style: n, vars: i }, s, l) {
  const u = e.style;
  let f;
  for (f in n)
    u[f] = n[f];
  l?.applyProjectionStyles(u, s);
  for (f in i)
    u.setProperty(f, i[f]);
}
function d5(e) {
  return window.getComputedStyle(e);
}
class h5 extends tw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = nw;
  }
  readValueFromInstance(n, i) {
    if (ds.has(i))
      return this.projection?.isProjecting ? Ah(i) : M3(n, i);
    {
      const s = d5(n), l = (gm(i) ? s.getPropertyValue(i) : s[i]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: i }) {
    return WS(n, i);
  }
  build(n, i, s) {
    Om(n, i, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, i, s) {
    return jm(n, i, s);
  }
}
const aw = /* @__PURE__ */ new Set([
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
function m5(e, n, i, s) {
  nw(e, n, void 0, s);
  for (const l in n.attrs)
    e.setAttribute(aw.has(l) ? l : Lm(l), n.attrs[l]);
}
class p5 extends tw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = xt;
  }
  getBaseTargetFromProps(n, i) {
    return n[i];
  }
  readValueFromInstance(n, i) {
    if (ds.has(i)) {
      const s = CS(i);
      return s && s.default || 0;
    }
    return i = aw.has(i) ? i : Lm(i), n.getAttribute(i);
  }
  scrapeMotionValuesFromProps(n, i, s) {
    return FS(n, i, s);
  }
  build(n, i, s) {
    HS(n, i, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(n, i, s, l) {
    m5(n, i, s, l);
  }
  mount(n) {
    this.isSVGTag = GS(n.tagName), super.mount(n);
  }
}
const g5 = (e, n) => $m(e) ? new p5(n) : new h5(n, {
  allowProjection: e !== A.Fragment
});
function ns(e, n, i) {
  const s = e.getProps();
  return Nm(s, n, i !== void 0 ? i : s.custom, e);
}
const $h = (e) => Array.isArray(e);
function v5(e, n, i) {
  e.hasValue(n) ? e.getValue(n).set(i) : e.addValue(n, is(i));
}
function y5(e) {
  return $h(e) ? e[e.length - 1] || 0 : e;
}
function b5(e, n) {
  const i = ns(e, n);
  let { transitionEnd: s = {}, transition: l = {}, ...u } = i || {};
  u = { ...u, ...s };
  for (const f in u) {
    const h = y5(u[f]);
    v5(e, f, h);
  }
}
function x5(e) {
  return !!(Wt(e) && e.add);
}
function Nh(e, n) {
  const i = e.getValue("willChange");
  if (x5(i))
    return i.add(n);
  if (!i && fa.WillChange) {
    const s = new fa.WillChange("auto");
    e.addValue("willChange", s), s.add(n);
  }
}
function iw(e) {
  return e.props[qS];
}
const S5 = (e) => e !== null;
function w5(e, { repeat: n, repeatType: i = "loop" }, s) {
  const l = e.filter(S5), u = n && i !== "loop" && n % 2 === 1 ? 0 : l.length - 1;
  return l[u];
}
const E5 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, T5 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), A5 = {
  type: "keyframes",
  duration: 0.8
}, _5 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, C5 = (e, { keyframes: n }) => n.length > 2 ? A5 : ds.has(e) ? e.startsWith("scale") ? T5(n[1]) : E5 : _5;
function M5({ when: e, delay: n, delayChildren: i, staggerChildren: s, staggerDirection: l, repeat: u, repeatType: f, repeatDelay: h, from: m, elapsed: p, ...g }) {
  return !!Object.keys(g).length;
}
const Um = (e, n, i, s = {}, l, u) => (f) => {
  const h = _m(s, e) || {}, m = h.delay || s.delay || 0;
  let { elapsed: p = 0 } = s;
  p = p - /* @__PURE__ */ la(m);
  const g = {
    keyframes: Array.isArray(i) ? i : [null, i],
    ease: "easeOut",
    velocity: n.getVelocity(),
    ...h,
    delay: -p,
    onUpdate: (b) => {
      n.set(b), h.onUpdate && h.onUpdate(b);
    },
    onComplete: () => {
      f(), h.onComplete && h.onComplete();
    },
    name: e,
    motionValue: n,
    element: u ? void 0 : l
  };
  M5(h) || Object.assign(g, C5(e, g)), g.duration && (g.duration = /* @__PURE__ */ la(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ la(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let v = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Rh(g), g.delay === 0 && (v = !0)), (fa.instantAnimations || fa.skipAnimations) && (v = !0, Rh(g), g.delay = 0), g.allowFlatten = !h.type && !h.ease, v && !u && n.get() !== void 0) {
    const b = w5(g.keyframes, h);
    if (b !== void 0) {
      st.update(() => {
        g.onUpdate(b), g.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new Tm(g) : new Q3(g);
};
function D5({ protectedKeys: e, needsAnimating: n }, i) {
  const s = e.hasOwnProperty(i) && n[i] !== !0;
  return n[i] = !1, s;
}
function rw(e, n, { delay: i = 0, transitionOverride: s, type: l } = {}) {
  let { transition: u = e.getDefaultTransition(), transitionEnd: f, ...h } = n;
  s && (u = s);
  const m = [], p = l && e.animationState && e.animationState.getState()[l];
  for (const g in h) {
    const v = e.getValue(g, e.latestValues[g] ?? null), b = h[g];
    if (b === void 0 || p && D5(p, g))
      continue;
    const E = {
      delay: i,
      ..._m(u || {}, g)
    }, _ = v.get();
    if (_ !== void 0 && !v.isAnimating && !Array.isArray(b) && b === _ && !E.velocity)
      continue;
    let M = !1;
    if (window.MotionHandoffAnimation) {
      const L = iw(e);
      if (L) {
        const z = window.MotionHandoffAnimation(L, g, st);
        z !== null && (E.startTime = z, M = !0);
      }
    }
    Nh(e, g), v.start(Um(g, v, b, e.shouldReduceMotion && TS.has(g) ? { type: !1 } : E, e, M));
    const N = v.animation;
    N && m.push(N);
  }
  return f && Promise.all(m).then(() => {
    st.update(() => {
      f && b5(e, f);
    });
  }), m;
}
function sw(e, n, i, s = 0, l = 1) {
  const u = Array.from(e).sort((p, g) => p.sortNodePosition(g)).indexOf(n), f = e.size, h = (f - 1) * s;
  return typeof i == "function" ? i(u, f) : l === 1 ? u * s : h - u * s;
}
function jh(e, n, i = {}) {
  const s = ns(e, n, i.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: l = e.getDefaultTransition() || {} } = s || {};
  i.transitionOverride && (l = i.transitionOverride);
  const u = s ? () => Promise.all(rw(e, s, i)) : () => Promise.resolve(), f = e.variantChildren && e.variantChildren.size ? (m = 0) => {
    const { delayChildren: p = 0, staggerChildren: g, staggerDirection: v } = l;
    return R5(e, n, m, p, g, v, i);
  } : () => Promise.resolve(), { when: h } = l;
  if (h) {
    const [m, p] = h === "beforeChildren" ? [u, f] : [f, u];
    return m().then(() => p());
  } else
    return Promise.all([u(), f(i.delay)]);
}
function R5(e, n, i = 0, s = 0, l = 0, u = 1, f) {
  const h = [];
  for (const m of e.variantChildren)
    m.notify("AnimationStart", n), h.push(jh(m, n, {
      ...f,
      delay: i + (typeof s == "function" ? 0 : s) + sw(e.variantChildren, m, s, l, u)
    }).then(() => m.notify("AnimationComplete", n)));
  return Promise.all(h);
}
function z5(e, n, i = {}) {
  e.notify("AnimationStart", n);
  let s;
  if (Array.isArray(n)) {
    const l = n.map((u) => jh(e, u, i));
    s = Promise.all(l);
  } else if (typeof n == "string")
    s = jh(e, n, i);
  else {
    const l = typeof n == "function" ? ns(e, n, i.custom) : n;
    s = Promise.all(rw(e, l, i));
  }
  return s.then(() => {
    e.notify("AnimationComplete", n);
  });
}
function ow(e, n) {
  if (!Array.isArray(n))
    return !1;
  const i = n.length;
  if (i !== e.length)
    return !1;
  for (let s = 0; s < i; s++)
    if (n[s] !== e[s])
      return !1;
  return !0;
}
const k5 = km.length;
function lw(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const i = e.parent ? lw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (i.initial = e.props.initial), i;
  }
  const n = {};
  for (let i = 0; i < k5; i++) {
    const s = km[i], l = e.props[s];
    (No(l) || l === !1) && (n[s] = l);
  }
  return n;
}
const O5 = [...zm].reverse(), V5 = zm.length;
function $5(e) {
  return (n) => Promise.all(n.map(({ animation: i, options: s }) => z5(e, i, s)));
}
function N5(e) {
  let n = $5(e), i = ib(), s = !0;
  const l = (m) => (p, g) => {
    const v = ns(e, g, m === "exit" ? e.presenceContext?.custom : void 0);
    if (v) {
      const { transition: b, transitionEnd: E, ..._ } = v;
      p = { ...p, ..._, ...E };
    }
    return p;
  };
  function u(m) {
    n = m(e);
  }
  function f(m) {
    const { props: p } = e, g = lw(e.parent) || {}, v = [], b = /* @__PURE__ */ new Set();
    let E = {}, _ = 1 / 0;
    for (let N = 0; N < V5; N++) {
      const L = O5[N], z = i[L], Z = p[L] !== void 0 ? p[L] : g[L], ee = No(Z), I = L === m ? z.isActive : null;
      I === !1 && (_ = N);
      let k = Z === g[L] && Z !== p[L] && ee;
      if (k && s && e.manuallyAnimateOnMount && (k = !1), z.protectedKeys = { ...E }, // If it isn't active and hasn't *just* been set as inactive
      !z.isActive && I === null || // If we didn't and don't have any defined prop for this animation type
      !Z && !z.prevProp || // Or if the prop doesn't define an animation
      Ju(Z) || typeof Z == "boolean")
        continue;
      const W = j5(z.prevProp, Z);
      let Y = W || // If we're making this variant active, we want to always make it active
      L === m && z.isActive && !k && ee || // If we removed a higher-priority variant (i is in reverse order)
      N > _ && ee, de = !1;
      const ve = Array.isArray(Z) ? Z : [Z];
      let K = ve.reduce(l(L), {});
      I === !1 && (K = {});
      const { prevResolvedValues: q = {} } = z, ne = {
        ...q,
        ...K
      }, H = (O) => {
        Y = !0, b.has(O) && (de = !0, b.delete(O)), z.needsAnimating[O] = !0;
        const R = e.getValue(O);
        R && (R.liveStyle = !1);
      };
      for (const O in ne) {
        const R = K[O], ue = q[O];
        if (E.hasOwnProperty(O))
          continue;
        let w = !1;
        $h(R) && $h(ue) ? w = !ow(R, ue) : w = R !== ue, w ? R != null ? H(O) : b.add(O) : R !== void 0 && b.has(O) ? H(O) : z.protectedKeys[O] = !0;
      }
      z.prevProp = Z, z.prevResolvedValues = K, z.isActive && (E = { ...E, ...K }), s && e.blockInitialAnimation && (Y = !1);
      const ie = k && W;
      Y && (!ie || de) && v.push(...ve.map((O) => {
        const R = { type: L };
        if (typeof O == "string" && s && !ie && e.manuallyAnimateOnMount && e.parent) {
          const { parent: ue } = e, w = ns(ue, O);
          if (ue.enteringChildren && w) {
            const { delayChildren: J } = w.transition || {};
            R.delay = sw(ue.enteringChildren, e, J);
          }
        }
        return {
          animation: O,
          options: R
        };
      }));
    }
    if (b.size) {
      const N = {};
      if (typeof p.initial != "boolean") {
        const L = ns(e, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        L && L.transition && (N.transition = L.transition);
      }
      b.forEach((L) => {
        const z = e.getBaseTarget(L), Z = e.getValue(L);
        Z && (Z.liveStyle = !0), N[L] = z ?? null;
      }), v.push({ animation: N });
    }
    let M = !!v.length;
    return s && (p.initial === !1 || p.initial === p.animate) && !e.manuallyAnimateOnMount && (M = !1), s = !1, M ? n(v) : Promise.resolve();
  }
  function h(m, p) {
    if (i[m].isActive === p)
      return Promise.resolve();
    e.variantChildren?.forEach((v) => v.animationState?.setActive(m, p)), i[m].isActive = p;
    const g = f(m);
    for (const v in i)
      i[v].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: f,
    setActive: h,
    setAnimateFunction: u,
    getState: () => i,
    reset: () => {
      i = ib(), s = !0;
    }
  };
}
function j5(e, n) {
  return typeof n == "string" ? n !== e : Array.isArray(n) ? !ow(n, e) : !1;
}
function Pi(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function ib() {
  return {
    animate: Pi(!0),
    whileInView: Pi(),
    whileHover: Pi(),
    whileTap: Pi(),
    whileDrag: Pi(),
    whileFocus: Pi(),
    exit: Pi()
  };
}
class yi {
  constructor(n) {
    this.isMounted = !1, this.node = n;
  }
  update() {
  }
}
class L5 extends yi {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(n) {
    super(n), n.animationState || (n.animationState = N5(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    Ju(n) && (this.unmountControls = n.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    n !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let U5 = 0;
class B5 extends yi {
  constructor() {
    super(...arguments), this.id = U5++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: n, onExitComplete: i } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === s)
      return;
    const l = this.node.animationState.setActive("exit", !n);
    i && !n && l.then(() => {
      i(this.id);
    });
  }
  mount() {
    const { register: n, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), n && (this.unmount = n(this.id));
  }
  unmount() {
  }
}
const P5 = {
  animation: {
    Feature: L5
  },
  exit: {
    Feature: B5
  }
};
function Lo(e, n, i, s = { passive: !0 }) {
  return e.addEventListener(n, i, s), () => e.removeEventListener(n, i);
}
function Go(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const H5 = (e) => (n) => Dm(n) && e(n, Go(n));
function To(e, n, i, s) {
  return Lo(e, n, H5(i), s);
}
const uw = 1e-4, Z5 = 1 - uw, G5 = 1 + uw, cw = 0.01, Y5 = 0 - cw, F5 = 0 + cw;
function ln(e) {
  return e.max - e.min;
}
function q5(e, n, i) {
  return Math.abs(e - n) <= i;
}
function rb(e, n, i, s = 0.5) {
  e.origin = s, e.originPoint = ct(n.min, n.max, e.origin), e.scale = ln(i) / ln(n), e.translate = ct(i.min, i.max, e.origin) - e.originPoint, (e.scale >= Z5 && e.scale <= G5 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Y5 && e.translate <= F5 || isNaN(e.translate)) && (e.translate = 0);
}
function Ao(e, n, i, s) {
  rb(e.x, n.x, i.x, s ? s.originX : void 0), rb(e.y, n.y, i.y, s ? s.originY : void 0);
}
function sb(e, n, i) {
  e.min = i.min + n.min, e.max = e.min + ln(n);
}
function K5(e, n, i) {
  sb(e.x, n.x, i.x), sb(e.y, n.y, i.y);
}
function ob(e, n, i) {
  e.min = n.min - i.min, e.max = e.min + ln(n);
}
function _o(e, n, i) {
  ob(e.x, n.x, i.x), ob(e.y, n.y, i.y);
}
function Hn(e) {
  return [e("x"), e("y")];
}
const fw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, lb = (e, n) => Math.abs(e - n);
function I5(e, n) {
  const i = lb(e.x, n.x), s = lb(e.y, n.y);
  return Math.sqrt(i ** 2 + s ** 2);
}
class dw {
  constructor(n, i, { transformPagePoint: s, contextWindow: l = window, dragSnapToOrigin: u = !1, distanceThreshold: f = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = Bd(this.lastMoveEventInfo, this.history), E = this.startEvent !== null, _ = I5(b.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!E && !_)
        return;
      const { point: M } = b, { timestamp: N } = Xt;
      this.history.push({ ...M, timestamp: N });
      const { onStart: L, onMove: z } = this.handlers;
      E || (L && L(this.lastMoveEvent, b), this.startEvent = this.lastMoveEvent), z && z(this.lastMoveEvent, b);
    }, this.handlePointerMove = (b, E) => {
      this.lastMoveEvent = b, this.lastMoveEventInfo = Ud(E, this.transformPagePoint), st.update(this.updatePoint, !0);
    }, this.handlePointerUp = (b, E) => {
      this.end();
      const { onEnd: _, onSessionEnd: M, resumeAnimation: N } = this.handlers;
      if (this.dragSnapToOrigin && N && N(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const L = Bd(b.type === "pointercancel" ? this.lastMoveEventInfo : Ud(E, this.transformPagePoint), this.history);
      this.startEvent && _ && _(b, L), M && M(b, L);
    }, !Dm(n))
      return;
    this.dragSnapToOrigin = u, this.handlers = i, this.transformPagePoint = s, this.distanceThreshold = f, this.contextWindow = l || window;
    const h = Go(n), m = Ud(h, this.transformPagePoint), { point: p } = m, { timestamp: g } = Xt;
    this.history = [{ ...p, timestamp: g }];
    const { onSessionStart: v } = i;
    v && v(n, Bd(m, this.history)), this.removeListeners = Po(To(this.contextWindow, "pointermove", this.handlePointerMove), To(this.contextWindow, "pointerup", this.handlePointerUp), To(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), mi(this.updatePoint);
  }
}
function Ud(e, n) {
  return n ? { point: n(e.point) } : e;
}
function ub(e, n) {
  return { x: e.x - n.x, y: e.y - n.y };
}
function Bd({ point: e }, n) {
  return {
    point: e,
    delta: ub(e, hw(n)),
    offset: ub(e, X5(n)),
    velocity: Q5(n, 0.1)
  };
}
function X5(e) {
  return e[0];
}
function hw(e) {
  return e[e.length - 1];
}
function Q5(e, n) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let i = e.length - 1, s = null;
  const l = hw(e);
  for (; i >= 0 && (s = e[i], !(l.timestamp - s.timestamp > /* @__PURE__ */ la(n))); )
    i--;
  if (!s)
    return { x: 0, y: 0 };
  const u = /* @__PURE__ */ ua(l.timestamp - s.timestamp);
  if (u === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (l.x - s.x) / u,
    y: (l.y - s.y) / u
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function J5(e, { min: n, max: i }, s) {
  return n !== void 0 && e < n ? e = s ? ct(n, e, s.min) : Math.max(e, n) : i !== void 0 && e > i && (e = s ? ct(i, e, s.max) : Math.min(e, i)), e;
}
function cb(e, n, i) {
  return {
    min: n !== void 0 ? e.min + n : void 0,
    max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0
  };
}
function W5(e, { top: n, left: i, bottom: s, right: l }) {
  return {
    x: cb(e.x, i, l),
    y: cb(e.y, n, s)
  };
}
function fb(e, n) {
  let i = n.min - e.min, s = n.max - e.max;
  return n.max - n.min < e.max - e.min && ([i, s] = [s, i]), { min: i, max: s };
}
function eM(e, n) {
  return {
    x: fb(e.x, n.x),
    y: fb(e.y, n.y)
  };
}
function tM(e, n) {
  let i = 0.5;
  const s = ln(e), l = ln(n);
  return l > s ? i = /* @__PURE__ */ ko(n.min, n.max - s, e.min) : s > l && (i = /* @__PURE__ */ ko(e.min, e.max - l, n.min)), $a(0, 1, i);
}
function nM(e, n) {
  const i = {};
  return n.min !== void 0 && (i.min = n.min - e.min), n.max !== void 0 && (i.max = n.max - e.min), i;
}
const Lh = 0.35;
function aM(e = Lh) {
  return e === !1 ? e = 0 : e === !0 && (e = Lh), {
    x: db(e, "left", "right"),
    y: db(e, "top", "bottom")
  };
}
function db(e, n, i) {
  return {
    min: hb(e, n),
    max: hb(e, i)
  };
}
function hb(e, n) {
  return typeof e == "number" ? e : e[n] || 0;
}
const iM = /* @__PURE__ */ new WeakMap();
class rM {
  constructor(n) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = xt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = n;
  }
  start(n, { snapToCursor: i = !1, distanceThreshold: s } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1)
      return;
    const u = (v) => {
      const { dragSnapToOrigin: b } = this.getProps();
      b ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(Go(v).point);
    }, f = (v, b) => {
      const { drag: E, dragPropagation: _, onDragStart: M } = this.getProps();
      if (E && !_ && (this.openDragLock && this.openDragLock(), this.openDragLock = h6(E), !this.openDragLock))
        return;
      this.latestPointerEvent = v, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Hn((L) => {
        let z = this.getAxisMotionValue(L).get() || 0;
        if (ca.test(z)) {
          const { projection: Z } = this.visualElement;
          if (Z && Z.layout) {
            const ee = Z.layout.layoutBox[L];
            ee && (z = ln(ee) * (parseFloat(z) / 100));
          }
        }
        this.originPoint[L] = z;
      }), M && st.postRender(() => M(v, b)), Nh(this.visualElement, "transform");
      const { animationState: N } = this.visualElement;
      N && N.setActive("whileDrag", !0);
    }, h = (v, b) => {
      this.latestPointerEvent = v, this.latestPanInfo = b;
      const { dragPropagation: E, dragDirectionLock: _, onDirectionLock: M, onDrag: N } = this.getProps();
      if (!E && !this.openDragLock)
        return;
      const { offset: L } = b;
      if (_ && this.currentDirection === null) {
        this.currentDirection = sM(L), this.currentDirection !== null && M && M(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, L), this.updateAxis("y", b.point, L), this.visualElement.render(), N && N(v, b);
    }, m = (v, b) => {
      this.latestPointerEvent = v, this.latestPanInfo = b, this.stop(v, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, p = () => Hn((v) => this.getAnimationState(v) === "paused" && this.getAxisMotionValue(v).animation?.play()), { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new dw(n, {
      onSessionStart: u,
      onStart: f,
      onMove: h,
      onSessionEnd: m,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: s,
      contextWindow: fw(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(n, i) {
    const s = n || this.latestPointerEvent, l = i || this.latestPanInfo, u = this.isDragging;
    if (this.cancel(), !u || !l || !s)
      return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && st.postRender(() => h(s, l));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: i } = this.visualElement;
    n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1);
  }
  updateAxis(n, i, s) {
    const { drag: l } = this.getProps();
    if (!s || !vu(n, l, this.currentDirection))
      return;
    const u = this.getAxisMotionValue(n);
    let f = this.originPoint[n] + s[n];
    this.constraints && this.constraints[n] && (f = J5(f, this.constraints[n], this.elastic[n])), u.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: n, dragElastic: i } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints;
    n && Xr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = W5(s.layoutBox, n) : this.constraints = !1, this.elastic = aM(i), l !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Hn((u) => {
      this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = nM(s.layoutBox[u], this.constraints[u]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: i } = this.getProps();
    if (!n || !Xr(n))
      return !1;
    const s = n.current, { projection: l } = this.visualElement;
    if (!l || !l.layout)
      return !1;
    const u = o5(s, l.root, this.visualElement.getTransformPagePoint());
    let f = eM(l.layout.layoutBox, u);
    if (i) {
      const h = i(i5(f));
      this.hasMutatedConstraints = !!h, h && (f = XS(h));
    }
    return f;
  }
  startAnimation(n) {
    const { drag: i, dragMomentum: s, dragElastic: l, dragTransition: u, dragSnapToOrigin: f, onDragTransitionEnd: h } = this.getProps(), m = this.constraints || {}, p = Hn((g) => {
      if (!vu(g, i, this.currentDirection))
        return;
      let v = m && m[g] || {};
      f && (v = { min: 0, max: 0 });
      const b = l ? 200 : 1e6, E = l ? 40 : 1e7, _ = {
        type: "inertia",
        velocity: s ? n[g] : 0,
        bounceStiffness: b,
        bounceDamping: E,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...u,
        ...v
      };
      return this.startAxisValueAnimation(g, _);
    });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(n, i) {
    const s = this.getAxisMotionValue(n);
    return Nh(this.visualElement, n), s.start(Um(n, s, 0, i, this.visualElement, !1));
  }
  stopAnimation() {
    Hn((n) => this.getAxisMotionValue(n).stop());
  }
  pauseAnimation() {
    Hn((n) => this.getAxisMotionValue(n).animation?.pause());
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
    const i = `_drag${n.toUpperCase()}`, s = this.visualElement.getProps(), l = s[i];
    return l || this.visualElement.getValue(n, (s.initial ? s.initial[n] : void 0) || 0);
  }
  snapToCursor(n) {
    Hn((i) => {
      const { drag: s } = this.getProps();
      if (!vu(i, s, this.currentDirection))
        return;
      const { projection: l } = this.visualElement, u = this.getAxisMotionValue(i);
      if (l && l.layout) {
        const { min: f, max: h } = l.layout.layoutBox[i];
        u.set(n[i] - ct(f, h, 0.5));
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
    const { drag: n, dragConstraints: i } = this.getProps(), { projection: s } = this.visualElement;
    if (!Xr(i) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    Hn((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const m = h.get();
        l[f] = tM({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    this.visualElement.current.style.transform = u ? u({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), Hn((f) => {
      if (!vu(f, n, null))
        return;
      const h = this.getAxisMotionValue(f), { min: m, max: p } = this.constraints[f];
      h.set(ct(m, p, l[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    iM.set(this.visualElement, this);
    const n = this.visualElement.current, i = To(n, "pointerdown", (m) => {
      const { drag: p, dragListener: g = !0 } = this.getProps();
      p && g && this.start(m);
    }), s = () => {
      const { dragConstraints: m } = this.getProps();
      Xr(m) && m.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: l } = this.visualElement, u = l.addEventListener("measure", s);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()), st.read(s);
    const f = Lo(window, "resize", () => this.scalePositionWithinConstraints()), h = l.addEventListener("didUpdate", ({ delta: m, hasLayoutChanged: p }) => {
      this.isDragging && p && (Hn((g) => {
        const v = this.getAxisMotionValue(g);
        v && (this.originPoint[g] += m[g].translate, v.set(v.get() + m[g].translate));
      }), this.visualElement.render());
    });
    return () => {
      f(), i(), u(), h && h();
    };
  }
  getProps() {
    const n = this.visualElement.getProps(), { drag: i = !1, dragDirectionLock: s = !1, dragPropagation: l = !1, dragConstraints: u = !1, dragElastic: f = Lh, dragMomentum: h = !0 } = n;
    return {
      ...n,
      drag: i,
      dragDirectionLock: s,
      dragPropagation: l,
      dragConstraints: u,
      dragElastic: f,
      dragMomentum: h
    };
  }
}
function vu(e, n, i) {
  return (n === !0 || n === e) && (i === null || i === e);
}
function sM(e, n = 10) {
  let i = null;
  return Math.abs(e.y) > n ? i = "y" : Math.abs(e.x) > n && (i = "x"), i;
}
class oM extends yi {
  constructor(n) {
    super(n), this.removeGroupControls = Gn, this.removeListeners = Gn, this.controls = new rM(n);
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Gn;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const mb = (e) => (n, i) => {
  e && st.postRender(() => e(n, i));
};
class lM extends yi {
  constructor() {
    super(...arguments), this.removePointerDownListener = Gn;
  }
  onPointerDown(n) {
    this.session = new dw(n, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: fw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: n, onPanStart: i, onPan: s, onPanEnd: l } = this.node.getProps();
    return {
      onSessionStart: mb(n),
      onStart: mb(i),
      onMove: s,
      onEnd: (u, f) => {
        delete this.session, l && st.postRender(() => l(u, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = To(this.node.current, "pointerdown", (n) => this.onPointerDown(n));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ru = {
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
function pb(e, n) {
  return n.max === n.min ? 0 : e / (n.max - n.min) * 100;
}
const mo = {
  correct: (e, n) => {
    if (!n.target)
      return e;
    if (typeof e == "string")
      if (ze.test(e))
        e = parseFloat(e);
      else
        return e;
    const i = pb(e, n.target.x), s = pb(e, n.target.y);
    return `${i}% ${s}%`;
  }
}, uM = {
  correct: (e, { treeScale: n, projectionDelta: i }) => {
    const s = e, l = pi.parse(e);
    if (l.length > 5)
      return s;
    const u = pi.createTransformer(e), f = typeof l[0] != "number" ? 1 : 0, h = i.x.scale * n.x, m = i.y.scale * n.y;
    l[0 + f] /= h, l[1 + f] /= m;
    const p = ct(h, m, 0.5);
    return typeof l[2 + f] == "number" && (l[2 + f] /= p), typeof l[3 + f] == "number" && (l[3 + f] /= p), u(l);
  }
};
let Pd = !1;
class cM extends A.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: n, layoutGroup: i, switchLayoutGroup: s, layoutId: l } = this.props, { projection: u } = n;
    k6(fM), u && (i.group && i.group.add(u), s && s.register && l && s.register(u), Pd && u.root.didUpdate(), u.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), u.setOptions({
      ...u.options,
      onExitComplete: () => this.safeToRemove()
    })), Ru.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(n) {
    const { layoutDependency: i, visualElement: s, drag: l, isPresent: u } = this.props, { projection: f } = s;
    return f && (f.isPresent = u, Pd = !0, l || n.layoutDependency !== i || i === void 0 || n.isPresent !== u ? f.willUpdate() : this.safeToRemove(), n.isPresent !== u && (u ? f.promote() : f.relegate() || st.postRender(() => {
      const h = f.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n && (n.root.didUpdate(), Mm.postRender(() => {
      !n.currentAnimation && n.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: n, layoutGroup: i, switchLayoutGroup: s } = this.props, { projection: l } = n;
    Pd = !0, l && (l.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(l), s && s.deregister && s.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: n } = this.props;
    n && n();
  }
  render() {
    return null;
  }
}
function mw(e) {
  const [n, i] = $S(), s = A.useContext(hm);
  return $.jsx(cM, { ...e, layoutGroup: s, switchLayoutGroup: A.useContext(KS), isPresent: n, safeToRemove: i });
}
const fM = {
  borderRadius: {
    ...mo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: mo,
  borderTopRightRadius: mo,
  borderBottomLeftRadius: mo,
  borderBottomRightRadius: mo,
  boxShadow: uM
};
function dM(e, n, i) {
  const s = Wt(e) ? e : is(e);
  return s.start(Um("", s, n, i)), s.animation;
}
const hM = (e, n) => e.depth - n.depth;
class mM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(n) {
    Wh(this.children, n), this.isDirty = !0;
  }
  remove(n) {
    em(this.children, n), this.isDirty = !0;
  }
  forEach(n) {
    this.isDirty && this.children.sort(hM), this.isDirty = !1, this.children.forEach(n);
  }
}
function pM(e, n) {
  const i = vn.now(), s = ({ timestamp: l }) => {
    const u = l - i;
    u >= n && (mi(s), e(u - n));
  };
  return st.setup(s, !0), () => mi(s);
}
const pw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], gM = pw.length, gb = (e) => typeof e == "string" ? parseFloat(e) : e, vb = (e) => typeof e == "number" || ze.test(e);
function vM(e, n, i, s, l, u) {
  l ? (e.opacity = ct(0, i.opacity ?? 1, yM(s)), e.opacityExit = ct(n.opacity ?? 1, 0, bM(s))) : u && (e.opacity = ct(n.opacity ?? 1, i.opacity ?? 1, s));
  for (let f = 0; f < gM; f++) {
    const h = `border${pw[f]}Radius`;
    let m = yb(n, h), p = yb(i, h);
    if (m === void 0 && p === void 0)
      continue;
    m || (m = 0), p || (p = 0), m === 0 || p === 0 || vb(m) === vb(p) ? (e[h] = Math.max(ct(gb(m), gb(p), s), 0), (ca.test(p) || ca.test(m)) && (e[h] += "%")) : e[h] = p;
  }
  (n.rotate || i.rotate) && (e.rotate = ct(n.rotate || 0, i.rotate || 0, s));
}
function yb(e, n) {
  return e[n] !== void 0 ? e[n] : e.borderRadius;
}
const yM = /* @__PURE__ */ gw(0, 0.5, W1), bM = /* @__PURE__ */ gw(0.5, 0.95, Gn);
function gw(e, n, i) {
  return (s) => s < e ? 0 : s > n ? 1 : i(/* @__PURE__ */ ko(e, n, s));
}
function bb(e, n) {
  e.min = n.min, e.max = n.max;
}
function Bn(e, n) {
  bb(e.x, n.x), bb(e.y, n.y);
}
function xb(e, n) {
  e.translate = n.translate, e.scale = n.scale, e.originPoint = n.originPoint, e.origin = n.origin;
}
function Sb(e, n, i, s, l) {
  return e -= n, e = Uu(e, 1 / i, s), l !== void 0 && (e = Uu(e, 1 / l, s)), e;
}
function xM(e, n = 0, i = 1, s = 0.5, l, u = e, f = e) {
  if (ca.test(n) && (n = parseFloat(n), n = ct(f.min, f.max, n / 100) - f.min), typeof n != "number")
    return;
  let h = ct(u.min, u.max, s);
  e === u && (h -= n), e.min = Sb(e.min, n, i, h, l), e.max = Sb(e.max, n, i, h, l);
}
function wb(e, n, [i, s, l], u, f) {
  xM(e, n[i], n[s], n[l], n.scale, u, f);
}
const SM = ["x", "scaleX", "originX"], wM = ["y", "scaleY", "originY"];
function Eb(e, n, i, s) {
  wb(e.x, n, SM, i ? i.x : void 0, s ? s.x : void 0), wb(e.y, n, wM, i ? i.y : void 0, s ? s.y : void 0);
}
function Tb(e) {
  return e.translate === 0 && e.scale === 1;
}
function vw(e) {
  return Tb(e.x) && Tb(e.y);
}
function Ab(e, n) {
  return e.min === n.min && e.max === n.max;
}
function EM(e, n) {
  return Ab(e.x, n.x) && Ab(e.y, n.y);
}
function _b(e, n) {
  return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max);
}
function yw(e, n) {
  return _b(e.x, n.x) && _b(e.y, n.y);
}
function Cb(e) {
  return ln(e.x) / ln(e.y);
}
function Mb(e, n) {
  return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint;
}
class TM {
  constructor() {
    this.members = [];
  }
  add(n) {
    Wh(this.members, n), n.scheduleRender();
  }
  remove(n) {
    if (em(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(n) {
    const i = this.members.findIndex((l) => n === l);
    if (i === 0)
      return !1;
    let s;
    for (let l = i; l >= 0; l--) {
      const u = this.members[l];
      if (u.isPresent !== !1) {
        s = u;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(n, i) {
    const s = this.lead;
    if (n !== s && (this.prevLead = s, this.lead = n, n.show(), s)) {
      s.instance && s.scheduleRender(), n.scheduleRender(), n.resumeFrom = s, i && (n.resumeFrom.preserveOpacity = !0), s.snapshot && (n.snapshot = s.snapshot, n.snapshot.latestValues = s.animationValues || s.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
      const { crossfade: l } = n.options;
      l === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((n) => {
      const { options: i, resumingFrom: s } = n;
      i.onExitComplete && i.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
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
function AM(e, n, i) {
  let s = "";
  const l = e.x.translate / n.x, u = e.y.translate / n.y, f = i?.z || 0;
  if ((l || u || f) && (s = `translate3d(${l}px, ${u}px, ${f}px) `), (n.x !== 1 || n.y !== 1) && (s += `scale(${1 / n.x}, ${1 / n.y}) `), i) {
    const { transformPerspective: p, rotate: g, rotateX: v, rotateY: b, skewX: E, skewY: _ } = i;
    p && (s = `perspective(${p}px) ${s}`), g && (s += `rotate(${g}deg) `), v && (s += `rotateX(${v}deg) `), b && (s += `rotateY(${b}deg) `), E && (s += `skewX(${E}deg) `), _ && (s += `skewY(${_}deg) `);
  }
  const h = e.x.scale * n.x, m = e.y.scale * n.y;
  return (h !== 1 || m !== 1) && (s += `scale(${h}, ${m})`), s || "none";
}
const Hd = ["", "X", "Y", "Z"], _M = 1e3;
let CM = 0;
function Zd(e, n, i, s) {
  const { latestValues: l } = n;
  l[e] && (i[e] = l[e], n.setStaticValue(e, 0), s && (s[e] = 0));
}
function bw(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: n } = e.options;
  if (!n)
    return;
  const i = iw(n);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: l, layoutId: u } = e.options;
    window.MotionCancelOptimisedAnimation(i, "transform", st, !(l || u));
  }
  const { parent: s } = e;
  s && !s.hasCheckedOptimisedAppear && bw(s);
}
function xw({ attachResizeListener: e, defaultParent: n, measureScroll: i, checkIsScrollRoot: s, resetTransform: l }) {
  return class {
    constructor(f = {}, h = n?.()) {
      this.id = CM++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(RM), this.nodes.forEach(VM), this.nodes.forEach($M), this.nodes.forEach(zM);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new mM());
    }
    addEventListener(f, h) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new nm()), this.eventHandlers.get(f).add(h);
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
      this.isSVG = VS(f) && !b6(f), this.instance = f;
      const { layoutId: h, layout: m, visualElement: p } = this.options;
      if (p && !p.current && p.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (m || h) && (this.isLayoutDirty = !0), e) {
        let g, v = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        st.read(() => {
          v = window.innerWidth;
        }), e(f, () => {
          const E = window.innerWidth;
          E !== v && (v = E, this.root.updateBlockedByResize = !0, g && g(), g = pM(b, 250), Ru.hasAnimatedSinceResize && (Ru.hasAnimatedSinceResize = !1, this.nodes.forEach(zb)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && p && (h || m) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: v, hasRelativeLayoutChanged: b, layout: E }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const _ = this.options.transition || p.getDefaultTransition() || BM, { onLayoutAnimationStart: M, onLayoutAnimationComplete: N } = p.getProps(), L = !this.targetLayout || !yw(this.targetLayout, E), z = !v && b;
        if (this.options.layoutRoot || this.resumeFrom || z || v && (L || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const Z = {
            ..._m(_, "layout"),
            onPlay: M,
            onComplete: N
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (Z.delay = 0, Z.type = !1), this.startAnimation(Z), this.setAnimationOrigin(g, z);
        } else
          v || zb(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = E;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), mi(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(NM), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && bw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: h, layout: m } = this.options;
      if (h === void 0 && !m)
        return;
      const p = this.getTransformTemplate();
      this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Db);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Rb);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(OM), this.nodes.forEach(MM), this.nodes.forEach(DM)) : this.nodes.forEach(Rb), this.clearAllSnapshots();
      const h = vn.now();
      Xt.delta = $a(0, 1e3 / 60, h - Xt.timestamp), Xt.timestamp = h, Xt.isProcessing = !0, zd.update.process(Xt), zd.preRender.process(Xt), zd.render.process(Xt), Xt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Mm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(kM), this.sharedNodes.forEach(jM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, st.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      st.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ln(this.snapshot.measuredBox.x) && !ln(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++)
          this.path[m].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = xt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m
        };
      }
    }
    resetTransform() {
      if (!l)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !vw(this.projectionDelta), m = this.getTransformTemplate(), p = m ? m(this.latestValues, "") : void 0, g = p !== this.prevTransformTemplateValue;
      f && this.instance && (h || Hi(this.latestValues) || g) && (l(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let m = this.removeElementScroll(h);
      return f && (m = this.removeTransform(m)), PM(m), {
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
        return xt();
      const h = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(HM))) {
        const { scroll: p } = this.root;
        p && (Qr(h.x, p.offset.x), Qr(h.y, p.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      const h = xt();
      if (Bn(h, f), this.scroll?.wasRoot)
        return h;
      for (let m = 0; m < this.path.length; m++) {
        const p = this.path[m], { scroll: g, options: v } = p;
        p !== this.root && g && v.layoutScroll && (g.wasRoot && Bn(h, f), Qr(h.x, g.offset.x), Qr(h.y, g.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1) {
      const m = xt();
      Bn(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        !h && g.options.layoutScroll && g.scroll && g !== g.root && Jr(m, {
          x: -g.scroll.offset.x,
          y: -g.scroll.offset.y
        }), Hi(g.latestValues) && Jr(m, g.latestValues);
      }
      return Hi(this.latestValues) && Jr(m, this.latestValues), m;
    }
    removeTransform(f) {
      const h = xt();
      Bn(h, f);
      for (let m = 0; m < this.path.length; m++) {
        const p = this.path[m];
        if (!p.instance || !Hi(p.latestValues))
          continue;
        kh(p.latestValues) && p.updateSnapshot();
        const g = xt(), v = p.measurePageBox();
        Bn(g, v), Eb(h, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g);
      }
      return Hi(this.latestValues) && Eb(h, this.latestValues), h;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Xt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== h;
      if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: v } = this.options;
      if (!(!this.layout || !(g || v))) {
        if (this.resolvedRelativeTargetAt = Xt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const b = this.getClosestProjectingParent();
          b && b.layout && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = xt(), this.relativeTargetOrigin = xt(), _o(this.relativeTargetOrigin, this.layout.layoutBox, b.layout.layoutBox), Bn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = xt(), this.targetWithTransforms = xt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), K5(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Bn(this.target, this.layout.layoutBox), JS(this.target, this.targetDelta)) : Bn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const b = this.getClosestProjectingParent();
          b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = xt(), this.relativeTargetOrigin = xt(), _o(this.relativeTargetOrigin, this.target, b.target), Bn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || kh(this.parent.latestValues) || QS(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const f = this.getLead(), h = !!this.resumingFrom || this !== f;
      let m = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === Xt.timestamp && (m = !1), m)
        return;
      const { layout: p, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || g))
        return;
      Bn(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x, b = this.treeScale.y;
      s5(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = xt());
      const { target: E } = f;
      if (!E) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (xb(this.prevProjectionDelta.x, this.projectionDelta.x), xb(this.prevProjectionDelta.y, this.projectionDelta.y)), Ao(this.projectionDelta, this.layoutCorrected, E, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== b || !Mb(this.projectionDelta.x, this.prevProjectionDelta.x) || !Mb(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", E));
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
      this.prevProjectionDelta = Wr(), this.projectionDelta = Wr(), this.projectionDeltaWithTransform = Wr();
    }
    setAnimationOrigin(f, h = !1) {
      const m = this.snapshot, p = m ? m.latestValues : {}, g = { ...this.latestValues }, v = Wr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const b = xt(), E = m ? m.source : void 0, _ = this.layout ? this.layout.source : void 0, M = E !== _, N = this.getStack(), L = !N || N.members.length <= 1, z = !!(M && !L && this.options.crossfade === !0 && !this.path.some(UM));
      this.animationProgress = 0;
      let Z;
      this.mixTargetDelta = (ee) => {
        const I = ee / 1e3;
        kb(v.x, f.x, I), kb(v.y, f.y, I), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_o(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox), LM(this.relativeTarget, this.relativeTargetOrigin, b, I), Z && EM(this.relativeTarget, Z) && (this.isProjectionDirty = !1), Z || (Z = xt()), Bn(Z, this.relativeTarget)), M && (this.animationValues = g, vM(g, p, this.latestValues, I, z, L)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = I;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (mi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = st.update(() => {
        Ru.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = is(0)), this.currentAnimation = dM(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_M), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: h, target: m, layout: p, latestValues: g } = f;
      if (!(!h || !m || !p)) {
        if (this !== f && this.layout && p && Sw(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          m = this.target || xt();
          const v = ln(this.layout.layoutBox.x);
          m.x.min = f.target.x.min, m.x.max = m.x.min + v;
          const b = ln(this.layout.layoutBox.y);
          m.y.min = f.target.y.min, m.y.max = m.y.min + b;
        }
        Bn(h, m), Jr(h, g), Ao(this.projectionDeltaWithTransform, this.layoutCorrected, h, g);
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new TM()), this.sharedNodes.get(f).add(h);
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
      m.z && Zd("z", f, p, this.animationValues);
      for (let g = 0; g < Hd.length; g++)
        Zd(`rotate${Hd[g]}`, f, p, this.animationValues), Zd(`skew${Hd[g]}`, f, p, this.animationValues);
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
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = Du(h?.pointerEvents) || "", f.transform = m ? m(this.latestValues, "") : "none";
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = Du(h?.pointerEvents) || ""), this.hasProjected && !Hi(this.latestValues) && (f.transform = m ? m({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const g = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let v = AM(this.projectionDeltaWithTransform, this.treeScale, g);
      m && (v = m(g, v)), f.transform = v;
      const { x: b, y: E } = this.projectionDelta;
      f.transformOrigin = `${b.origin * 100}% ${E.origin * 100}% 0`, p.animationValues ? f.opacity = p === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = p === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const _ in jo) {
        if (g[_] === void 0)
          continue;
        const { correct: M, applyTo: N, isCSSVariable: L } = jo[_], z = v === "none" ? g[_] : M(g[_], p);
        if (N) {
          const Z = N.length;
          for (let ee = 0; ee < Z; ee++)
            f[N[ee]] = z;
        } else
          L ? this.options.visualElement.renderState.vars[_] = z : f[_] = z;
      }
      this.options.layoutId && (f.pointerEvents = p === this ? Du(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(Db), this.root.sharedNodes.clear();
    }
  };
}
function MM(e) {
  e.updateLayout();
}
function DM(e) {
  const n = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = e.layout, { animationType: l } = e.options, u = n.source !== e.layout.source;
    l === "size" ? Hn((g) => {
      const v = u ? n.measuredBox[g] : n.layoutBox[g], b = ln(v);
      v.min = i[g].min, v.max = v.min + b;
    }) : Sw(l, n.layoutBox, i) && Hn((g) => {
      const v = u ? n.measuredBox[g] : n.layoutBox[g], b = ln(i[g]);
      v.max = v.min + b, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[g].max = e.relativeTarget[g].min + b);
    });
    const f = Wr();
    Ao(f, i, n.layoutBox);
    const h = Wr();
    u ? Ao(h, e.applyTransform(s, !0), n.measuredBox) : Ao(h, i, n.layoutBox);
    const m = !vw(f);
    let p = !1;
    if (!e.resumeFrom) {
      const g = e.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: v, layout: b } = g;
        if (v && b) {
          const E = xt();
          _o(E, n.layoutBox, v.layoutBox);
          const _ = xt();
          _o(_, i, b.layoutBox), yw(E, _) || (p = !0), g.options.layoutRoot && (e.relativeTarget = _, e.relativeTargetOrigin = E, e.relativeParent = g);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: i,
      snapshot: n,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: p
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function RM(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function zM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function kM(e) {
  e.clearSnapshot();
}
function Db(e) {
  e.clearMeasurements();
}
function Rb(e) {
  e.isLayoutDirty = !1;
}
function OM(e) {
  const { visualElement: n } = e.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function zb(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function VM(e) {
  e.resolveTargetDelta();
}
function $M(e) {
  e.calcProjection();
}
function NM(e) {
  e.resetSkewAndRotation();
}
function jM(e) {
  e.removeLeadSnapshot();
}
function kb(e, n, i) {
  e.translate = ct(n.translate, 0, i), e.scale = ct(n.scale, 1, i), e.origin = n.origin, e.originPoint = n.originPoint;
}
function Ob(e, n, i, s) {
  e.min = ct(n.min, i.min, s), e.max = ct(n.max, i.max, s);
}
function LM(e, n, i, s) {
  Ob(e.x, n.x, i.x, s), Ob(e.y, n.y, i.y, s);
}
function UM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const BM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Vb = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), $b = Vb("applewebkit/") && !Vb("chrome/") ? Math.round : Gn;
function Nb(e) {
  e.min = $b(e.min), e.max = $b(e.max);
}
function PM(e) {
  Nb(e.x), Nb(e.y);
}
function Sw(e, n, i) {
  return e === "position" || e === "preserve-aspect" && !q5(Cb(n), Cb(i), 0.2);
}
function HM(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const ZM = xw({
  attachResizeListener: (e, n) => Lo(e, "resize", n),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Gd = {
  current: void 0
}, ww = xw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Gd.current) {
      const e = new ZM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Gd.current = e;
    }
    return Gd.current;
  },
  resetTransform: (e, n) => {
    e.style.transform = n !== void 0 ? n : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), GM = {
  pan: {
    Feature: lM
  },
  drag: {
    Feature: oM,
    ProjectionNode: ww,
    MeasureLayout: mw
  }
};
function jb(e, n, i) {
  const { props: s } = e;
  e.animationState && s.whileHover && e.animationState.setActive("whileHover", i === "Start");
  const l = "onHover" + i, u = s[l];
  u && st.postRender(() => u(n, Go(n)));
}
class YM extends yi {
  mount() {
    const { current: n } = this.node;
    n && (this.unmount = m6(n, (i, s) => (jb(this.node, s, "Start"), (l) => jb(this.node, l, "End"))));
  }
  unmount() {
  }
}
class FM extends yi {
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
    this.unmount = Po(Lo(this.node.current, "focus", () => this.onFocus()), Lo(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Lb(e, n, i) {
  const { props: s } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && s.whileTap && e.animationState.setActive("whileTap", i === "Start");
  const l = "onTap" + (i === "End" ? "" : i), u = s[l];
  u && st.postRender(() => u(n, Go(n)));
}
class qM extends yi {
  mount() {
    const { current: n } = this.node;
    n && (this.unmount = y6(n, (i, s) => (Lb(this.node, s, "Start"), (l, { success: u }) => Lb(this.node, l, u ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Uh = /* @__PURE__ */ new WeakMap(), Yd = /* @__PURE__ */ new WeakMap(), KM = (e) => {
  const n = Uh.get(e.target);
  n && n(e);
}, IM = (e) => {
  e.forEach(KM);
};
function XM({ root: e, ...n }) {
  const i = e || document;
  Yd.has(i) || Yd.set(i, {});
  const s = Yd.get(i), l = JSON.stringify(n);
  return s[l] || (s[l] = new IntersectionObserver(IM, { root: e, ...n })), s[l];
}
function QM(e, n, i) {
  const s = XM(n);
  return Uh.set(e, i), s.observe(e), () => {
    Uh.delete(e), s.unobserve(e);
  };
}
const JM = {
  some: 0,
  all: 1
};
class WM extends yi {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(), { root: i, margin: s, amount: l = "some", once: u } = n, f = {
      root: i ? i.current : void 0,
      rootMargin: s,
      threshold: typeof l == "number" ? l : JM[l]
    }, h = (m) => {
      const { isIntersecting: p } = m;
      if (this.isInView === p || (this.isInView = p, u && !p && this.hasEnteredView))
        return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(), b = p ? g : v;
      b && b(m);
    };
    return QM(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: n, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(eD(n, i)) && this.startObserver();
  }
  unmount() {
  }
}
function eD({ viewport: e = {} }, { viewport: n = {} } = {}) {
  return (i) => e[i] !== n[i];
}
const tD = {
  inView: {
    Feature: WM
  },
  tap: {
    Feature: qM
  },
  focus: {
    Feature: FM
  },
  hover: {
    Feature: YM
  }
}, nD = {
  layout: {
    ProjectionNode: ww,
    MeasureLayout: mw
  }
}, aD = {
  ...P5,
  ...tD,
  ...GM,
  ...nD
}, Ze = /* @__PURE__ */ a5(aD, g5), Bh = ({
  size: e = 24,
  className: n,
  ...i
}) => /* @__PURE__ */ $.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    ...i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: vi("animate-spin", n),
    children: /* @__PURE__ */ $.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
  }
);
function se(e, n, i) {
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
  const l = i?.Parent ?? Object;
  class u extends l {
  }
  Object.defineProperty(u, "name", { value: e });
  function f(h) {
    var m;
    const p = i?.Parent ? new u() : this;
    s(p, h), (m = p._zod).deferred ?? (m.deferred = []);
    for (const g of p._zod.deferred)
      g();
    return p;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (h) => i?.Parent && h instanceof i.Parent ? !0 : h?._zod?.traits?.has(e)
  }), Object.defineProperty(f, "name", { value: e }), f;
}
class Uo extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const Ew = {};
function Xi(e) {
  return Ew;
}
function iD(e) {
  const n = Object.values(e).filter((s) => typeof s == "number");
  return Object.entries(e).filter(([s, l]) => n.indexOf(+s) === -1).map(([s, l]) => l);
}
function Ph(e, n) {
  return typeof n == "bigint" ? n.toString() : n;
}
function Tw(e) {
  return {
    get value() {
      {
        const n = e();
        return Object.defineProperty(this, "value", { value: n }), n;
      }
    }
  };
}
function Bm(e) {
  return e == null;
}
function Pm(e) {
  const n = e.startsWith("^") ? 1 : 0, i = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(n, i);
}
const Ub = Symbol("evaluating");
function at(e, n, i) {
  let s;
  Object.defineProperty(e, n, {
    get() {
      if (s !== Ub)
        return s === void 0 && (s = Ub, s = i()), s;
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
function rD(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function Wi(e, n, i) {
  Object.defineProperty(e, n, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function hs(...e) {
  const n = {};
  for (const i of e) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(n, s);
  }
  return Object.defineProperties({}, n);
}
function Bb(e) {
  return JSON.stringify(e);
}
const Aw = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Hh(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const sD = Tw(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Bu(e) {
  if (Hh(e) === !1)
    return !1;
  const n = e.constructor;
  if (n === void 0)
    return !0;
  const i = n.prototype;
  return !(Hh(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function _w(e) {
  return Bu(e) ? { ...e } : e;
}
const oD = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ec(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function er(e, n, i) {
  const s = new e._zod.constr(n ?? e._zod.def);
  return (!n || i?.parent) && (s._zod.parent = e), s;
}
function ke(e) {
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
function lD(e) {
  return Object.keys(e).filter((n) => e[n]._zod.optin === "optional" && e[n]._zod.optout === "optional");
}
function uD(e, n) {
  const i = e._zod.def, s = hs(e._zod.def, {
    get shape() {
      const l = {};
      for (const u in n) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        n[u] && (l[u] = i.shape[u]);
      }
      return Wi(this, "shape", l), l;
    },
    checks: []
  });
  return er(e, s);
}
function cD(e, n) {
  const i = e._zod.def, s = hs(e._zod.def, {
    get shape() {
      const l = { ...e._zod.def.shape };
      for (const u in n) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        n[u] && delete l[u];
      }
      return Wi(this, "shape", l), l;
    },
    checks: []
  });
  return er(e, s);
}
function fD(e, n) {
  if (!Bu(n))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = hs(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...n };
      return Wi(this, "shape", s), s;
    },
    checks: []
  });
  return er(e, i);
}
function dD(e, n) {
  const i = hs(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...n._zod.def.shape };
      return Wi(this, "shape", s), s;
    },
    get catchall() {
      return n._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return er(e, i);
}
function hD(e, n, i) {
  const s = hs(n._zod.def, {
    get shape() {
      const l = n._zod.def.shape, u = { ...l };
      if (i)
        for (const f in i) {
          if (!(f in l))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = e ? new e({
            type: "optional",
            innerType: l[f]
          }) : l[f]);
        }
      else
        for (const f in l)
          u[f] = e ? new e({
            type: "optional",
            innerType: l[f]
          }) : l[f];
      return Wi(this, "shape", u), u;
    },
    checks: []
  });
  return er(n, s);
}
function mD(e, n, i) {
  const s = hs(n._zod.def, {
    get shape() {
      const l = n._zod.def.shape, u = { ...l };
      if (i)
        for (const f in i) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = new e({
            type: "nonoptional",
            innerType: l[f]
          }));
        }
      else
        for (const f in l)
          u[f] = new e({
            type: "nonoptional",
            innerType: l[f]
          });
      return Wi(this, "shape", u), u;
    },
    checks: []
  });
  return er(n, s);
}
function Co(e, n = 0) {
  for (let i = n; i < e.issues.length; i++)
    if (e.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function Cw(e, n) {
  return n.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(e), i;
  });
}
function yu(e) {
  return typeof e == "string" ? e : e?.message;
}
function Qi(e, n, i) {
  const s = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const l = yu(e.inst?._zod.def?.error?.(e)) ?? yu(n?.error?.(e)) ?? yu(i.customError?.(e)) ?? yu(i.localeError?.(e)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, n?.reportInput || delete s.input, s;
}
function Hm(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Bo(...e) {
  const [n, i, s] = e;
  return typeof n == "string" ? {
    message: n,
    code: "custom",
    input: i,
    inst: s
  } : { ...n };
}
const Mw = (e, n) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: n,
    enumerable: !1
  }), e.message = JSON.stringify(n, Ph, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Zm = se("$ZodError", Mw), tc = se("$ZodError", Mw, { Parent: Error });
function pD(e, n = (i) => i.message) {
  const i = {}, s = [];
  for (const l of e.issues)
    l.path.length > 0 ? (i[l.path[0]] = i[l.path[0]] || [], i[l.path[0]].push(n(l))) : s.push(n(l));
  return { formErrors: s, fieldErrors: i };
}
function gD(e, n) {
  const i = n || function(u) {
    return u.message;
  }, s = { _errors: [] }, l = (u) => {
    for (const f of u.issues)
      if (f.code === "invalid_union" && f.errors.length)
        f.errors.map((h) => l({ issues: h }));
      else if (f.code === "invalid_key")
        l({ issues: f.issues });
      else if (f.code === "invalid_element")
        l({ issues: f.issues });
      else if (f.path.length === 0)
        s._errors.push(i(f));
      else {
        let h = s, m = 0;
        for (; m < f.path.length; ) {
          const p = f.path[m];
          m === f.path.length - 1 ? (h[p] = h[p] || { _errors: [] }, h[p]._errors.push(i(f))) : h[p] = h[p] || { _errors: [] }, h = h[p], m++;
        }
      }
  };
  return l(e), s;
}
const Dw = (e) => (n, i, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = n._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new Uo();
  if (f.issues.length) {
    const h = new (l?.Err ?? e)(f.issues.map((m) => Qi(m, u, Xi())));
    throw Aw(h, l?.callee), h;
  }
  return f.value;
}, vD = /* @__PURE__ */ Dw(tc), Rw = (e) => async (n, i, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = n._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const h = new (l?.Err ?? e)(f.issues.map((m) => Qi(m, u, Xi())));
    throw Aw(h, l?.callee), h;
  }
  return f.value;
}, yD = /* @__PURE__ */ Rw(tc), zw = (e) => (n, i, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = n._zod.run({ value: i, issues: [] }, l);
  if (u instanceof Promise)
    throw new Uo();
  return u.issues.length ? {
    success: !1,
    error: new (e ?? Zm)(u.issues.map((f) => Qi(f, l, Xi())))
  } : { success: !0, data: u.value };
}, bD = /* @__PURE__ */ zw(tc), kw = (e) => async (n, i, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = n._zod.run({ value: i, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new e(u.issues.map((f) => Qi(f, l, Xi())))
  } : { success: !0, data: u.value };
}, xD = /* @__PURE__ */ kw(tc), SD = /^[cC][^\s-]{8,}$/, wD = /^[0-9a-z]+$/, ED = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, TD = /^[0-9a-vA-V]{20}$/, AD = /^[A-Za-z0-9]{27}$/, _D = /^[a-zA-Z0-9_-]{21}$/, CD = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, MD = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Pb = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/, DD = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, RD = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function zD() {
  return new RegExp(RD, "u");
}
const kD = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, OD = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/, VD = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, $D = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ND = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ow = /^[A-Za-z0-9_-]*$/, jD = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, LD = /^\+(?:[0-9]){6,14}[0-9]$/, Vw = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", UD = /* @__PURE__ */ new RegExp(`^${Vw}$`);
function $w(e) {
  const n = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${n}` : e.precision === 0 ? `${n}:[0-5]\\d` : `${n}:[0-5]\\d\\.\\d{${e.precision}}` : `${n}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function BD(e) {
  return new RegExp(`^${$w(e)}$`);
}
function PD(e) {
  const n = $w({ precision: e.precision }), i = ["Z"];
  e.local && i.push(""), e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${n}(?:${i.join("|")})`;
  return new RegExp(`^${Vw}T(?:${s})$`);
}
const HD = (e) => {
  const n = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${n}$`);
}, ZD = /^[^A-Z]*$/, GD = /^[^a-z]*$/, da = /* @__PURE__ */ se("$ZodCheck", (e, n) => {
  var i;
  e._zod ?? (e._zod = {}), e._zod.def = n, (i = e._zod).onattach ?? (i.onattach = []);
}), YD = /* @__PURE__ */ se("$ZodCheckMaxLength", (e, n) => {
  var i;
  da.init(e, n), (i = e._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !Bm(l) && l.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    n.maximum < l && (s._zod.bag.maximum = n.maximum);
  }), e._zod.check = (s) => {
    const l = s.value;
    if (l.length <= n.maximum)
      return;
    const f = Hm(l);
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
}), FD = /* @__PURE__ */ se("$ZodCheckMinLength", (e, n) => {
  var i;
  da.init(e, n), (i = e._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !Bm(l) && l.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    n.minimum > l && (s._zod.bag.minimum = n.minimum);
  }), e._zod.check = (s) => {
    const l = s.value;
    if (l.length >= n.minimum)
      return;
    const f = Hm(l);
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
}), qD = /* @__PURE__ */ se("$ZodCheckLengthEquals", (e, n) => {
  var i;
  da.init(e, n), (i = e._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !Bm(l) && l.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = n.length, l.maximum = n.length, l.length = n.length;
  }), e._zod.check = (s) => {
    const l = s.value, u = l.length;
    if (u === n.length)
      return;
    const f = Hm(l), h = u > n.length;
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
}), nc = /* @__PURE__ */ se("$ZodCheckStringFormat", (e, n) => {
  var i, s;
  da.init(e, n), e._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.format = n.format, n.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(n.pattern));
  }), n.pattern ? (i = e._zod).check ?? (i.check = (l) => {
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
}), KD = /* @__PURE__ */ se("$ZodCheckRegex", (e, n) => {
  nc.init(e, n), e._zod.check = (i) => {
    n.pattern.lastIndex = 0, !n.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: n.pattern.toString(),
      inst: e,
      continue: !n.abort
    });
  };
}), ID = /* @__PURE__ */ se("$ZodCheckLowerCase", (e, n) => {
  n.pattern ?? (n.pattern = ZD), nc.init(e, n);
}), XD = /* @__PURE__ */ se("$ZodCheckUpperCase", (e, n) => {
  n.pattern ?? (n.pattern = GD), nc.init(e, n);
}), QD = /* @__PURE__ */ se("$ZodCheckIncludes", (e, n) => {
  da.init(e, n);
  const i = ec(n.includes), s = new RegExp(typeof n.position == "number" ? `^.{${n.position}}${i}` : i);
  n.pattern = s, e._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
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
}), JD = /* @__PURE__ */ se("$ZodCheckStartsWith", (e, n) => {
  da.init(e, n);
  const i = new RegExp(`^${ec(n.prefix)}.*`);
  n.pattern ?? (n.pattern = i), e._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(i);
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
}), WD = /* @__PURE__ */ se("$ZodCheckEndsWith", (e, n) => {
  da.init(e, n);
  const i = new RegExp(`.*${ec(n.suffix)}$`);
  n.pattern ?? (n.pattern = i), e._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(i);
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
}), eR = /* @__PURE__ */ se("$ZodCheckOverwrite", (e, n) => {
  da.init(e, n), e._zod.check = (i) => {
    i.value = n.tx(i.value);
  };
});
class tR {
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
`).filter((f) => f), l = Math.min(...s.map((f) => f.length - f.trimStart().length)), u = s.map((f) => f.slice(l)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of u)
      this.content.push(f);
  }
  compile() {
    const n = Function, i = this?.args, l = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new n(...i, l.join(`
`));
  }
}
const nR = {
  major: 4,
  minor: 0,
  patch: 17
}, Nt = /* @__PURE__ */ se("$ZodType", (e, n) => {
  var i;
  e ?? (e = {}), e._zod.def = n, e._zod.bag = e._zod.bag || {}, e._zod.version = nR;
  const s = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && s.unshift(e);
  for (const l of s)
    for (const u of l._zod.onattach)
      u(e);
  if (s.length === 0)
    (i = e._zod).deferred ?? (i.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const l = (u, f, h) => {
      let m = Co(u), p;
      for (const g of f) {
        if (g._zod.def.when) {
          if (!g._zod.def.when(u))
            continue;
        } else if (m)
          continue;
        const v = u.issues.length, b = g._zod.check(u);
        if (b instanceof Promise && h?.async === !1)
          throw new Uo();
        if (p || b instanceof Promise)
          p = (p ?? Promise.resolve()).then(async () => {
            await b, u.issues.length !== v && (m || (m = Co(u, v)));
          });
        else {
          if (u.issues.length === v)
            continue;
          m || (m = Co(u, v));
        }
      }
      return p ? p.then(() => u) : u;
    };
    e._zod.run = (u, f) => {
      const h = e._zod.parse(u, f);
      if (h instanceof Promise) {
        if (f.async === !1)
          throw new Uo();
        return h.then((m) => l(m, s, f));
      }
      return l(h, s, f);
    };
  }
  e["~standard"] = {
    validate: (l) => {
      try {
        const u = bD(e, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return xD(e, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Gm = /* @__PURE__ */ se("$ZodString", (e, n) => {
  Nt.init(e, n), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? HD(e._zod.bag), e._zod.parse = (i, s) => {
    if (n.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: e
    }), i;
  };
}), ot = /* @__PURE__ */ se("$ZodStringFormat", (e, n) => {
  nc.init(e, n), Gm.init(e, n);
}), aR = /* @__PURE__ */ se("$ZodGUID", (e, n) => {
  n.pattern ?? (n.pattern = MD), ot.init(e, n);
}), iR = /* @__PURE__ */ se("$ZodUUID", (e, n) => {
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
    n.pattern ?? (n.pattern = Pb(s));
  } else
    n.pattern ?? (n.pattern = Pb());
  ot.init(e, n);
}), rR = /* @__PURE__ */ se("$ZodEmail", (e, n) => {
  n.pattern ?? (n.pattern = DD), ot.init(e, n);
}), sR = /* @__PURE__ */ se("$ZodURL", (e, n) => {
  ot.init(e, n), e._zod.check = (i) => {
    try {
      const s = i.value.trim(), l = new URL(s);
      n.hostname && (n.hostname.lastIndex = 0, n.hostname.test(l.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: jD.source,
        input: i.value,
        inst: e,
        continue: !n.abort
      })), n.protocol && (n.protocol.lastIndex = 0, n.protocol.test(l.protocol.endsWith(":") ? l.protocol.slice(0, -1) : l.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: n.protocol.source,
        input: i.value,
        inst: e,
        continue: !n.abort
      })), n.normalize ? i.value = l.href : i.value = s;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), oR = /* @__PURE__ */ se("$ZodEmoji", (e, n) => {
  n.pattern ?? (n.pattern = zD()), ot.init(e, n);
}), lR = /* @__PURE__ */ se("$ZodNanoID", (e, n) => {
  n.pattern ?? (n.pattern = _D), ot.init(e, n);
}), uR = /* @__PURE__ */ se("$ZodCUID", (e, n) => {
  n.pattern ?? (n.pattern = SD), ot.init(e, n);
}), cR = /* @__PURE__ */ se("$ZodCUID2", (e, n) => {
  n.pattern ?? (n.pattern = wD), ot.init(e, n);
}), fR = /* @__PURE__ */ se("$ZodULID", (e, n) => {
  n.pattern ?? (n.pattern = ED), ot.init(e, n);
}), dR = /* @__PURE__ */ se("$ZodXID", (e, n) => {
  n.pattern ?? (n.pattern = TD), ot.init(e, n);
}), hR = /* @__PURE__ */ se("$ZodKSUID", (e, n) => {
  n.pattern ?? (n.pattern = AD), ot.init(e, n);
}), mR = /* @__PURE__ */ se("$ZodISODateTime", (e, n) => {
  n.pattern ?? (n.pattern = PD(n)), ot.init(e, n);
}), pR = /* @__PURE__ */ se("$ZodISODate", (e, n) => {
  n.pattern ?? (n.pattern = UD), ot.init(e, n);
}), gR = /* @__PURE__ */ se("$ZodISOTime", (e, n) => {
  n.pattern ?? (n.pattern = BD(n)), ot.init(e, n);
}), vR = /* @__PURE__ */ se("$ZodISODuration", (e, n) => {
  n.pattern ?? (n.pattern = CD), ot.init(e, n);
}), yR = /* @__PURE__ */ se("$ZodIPv4", (e, n) => {
  n.pattern ?? (n.pattern = kD), ot.init(e, n), e._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), bR = /* @__PURE__ */ se("$ZodIPv6", (e, n) => {
  n.pattern ?? (n.pattern = OD), ot.init(e, n), e._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv6";
  }), e._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), xR = /* @__PURE__ */ se("$ZodCIDRv4", (e, n) => {
  n.pattern ?? (n.pattern = VD), ot.init(e, n);
}), SR = /* @__PURE__ */ se("$ZodCIDRv6", (e, n) => {
  n.pattern ?? (n.pattern = $D), ot.init(e, n), e._zod.check = (i) => {
    const [s, l] = i.value.split("/");
    try {
      if (!l)
        throw new Error();
      const u = Number(l);
      if (`${u}` !== l)
        throw new Error();
      if (u < 0 || u > 128)
        throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
});
function Nw(e) {
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
const wR = /* @__PURE__ */ se("$ZodBase64", (e, n) => {
  n.pattern ?? (n.pattern = ND), ot.init(e, n), e._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (i) => {
    Nw(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: e,
      continue: !n.abort
    });
  };
});
function ER(e) {
  if (!Ow.test(e))
    return !1;
  const n = e.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = n.padEnd(Math.ceil(n.length / 4) * 4, "=");
  return Nw(i);
}
const TR = /* @__PURE__ */ se("$ZodBase64URL", (e, n) => {
  n.pattern ?? (n.pattern = Ow), ot.init(e, n), e._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (i) => {
    ER(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: e,
      continue: !n.abort
    });
  };
}), AR = /* @__PURE__ */ se("$ZodE164", (e, n) => {
  n.pattern ?? (n.pattern = LD), ot.init(e, n);
});
function _R(e, n = null) {
  try {
    const i = e.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const l = JSON.parse(atob(s));
    return !("typ" in l && l?.typ !== "JWT" || !l.alg || n && (!("alg" in l) || l.alg !== n));
  } catch {
    return !1;
  }
}
const CR = /* @__PURE__ */ se("$ZodJWT", (e, n) => {
  ot.init(e, n), e._zod.check = (i) => {
    _R(i.value, n.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: e,
      continue: !n.abort
    });
  };
}), MR = /* @__PURE__ */ se("$ZodUnknown", (e, n) => {
  Nt.init(e, n), e._zod.parse = (i) => i;
}), DR = /* @__PURE__ */ se("$ZodNever", (e, n) => {
  Nt.init(e, n), e._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: e
  }), i);
});
function Hb(e, n, i) {
  e.issues.length && n.issues.push(...Cw(i, e.issues)), n.value[i] = e.value;
}
const RR = /* @__PURE__ */ se("$ZodArray", (e, n) => {
  Nt.init(e, n), e._zod.parse = (i, s) => {
    const l = i.value;
    if (!Array.isArray(l))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: e
      }), i;
    i.value = Array(l.length);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      const h = l[f], m = n.element._zod.run({
        value: h,
        issues: []
      }, s);
      m instanceof Promise ? u.push(m.then((p) => Hb(p, i, f))) : Hb(m, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function bu(e, n, i, s) {
  e.issues.length && n.issues.push(...Cw(i, e.issues)), e.value === void 0 ? i in s && (n.value[i] = void 0) : n.value[i] = e.value;
}
const zR = /* @__PURE__ */ se("$ZodObject", (e, n) => {
  Nt.init(e, n);
  const i = Tw(() => {
    const v = Object.keys(n.shape);
    for (const E of v)
      if (!n.shape[E]._zod.traits.has("$ZodType"))
        throw new Error(`Invalid element at key "${E}": expected a Zod schema`);
    const b = lD(n.shape);
    return {
      shape: n.shape,
      keys: v,
      keySet: new Set(v),
      numKeys: v.length,
      optionalKeys: new Set(b)
    };
  });
  at(e._zod, "propValues", () => {
    const v = n.shape, b = {};
    for (const E in v) {
      const _ = v[E]._zod;
      if (_.values) {
        b[E] ?? (b[E] = /* @__PURE__ */ new Set());
        for (const M of _.values)
          b[E].add(M);
      }
    }
    return b;
  });
  const s = (v) => {
    const b = new tR(["shape", "payload", "ctx"]), E = i.value, _ = (z) => {
      const Z = Bb(z);
      return `shape[${Z}]._zod.run({ value: input[${Z}], issues: [] }, ctx)`;
    };
    b.write("const input = payload.value;");
    const M = /* @__PURE__ */ Object.create(null);
    let N = 0;
    for (const z of E.keys)
      M[z] = `key_${N++}`;
    b.write("const newResult = {}");
    for (const z of E.keys) {
      const Z = M[z], ee = Bb(z);
      b.write(`const ${Z} = ${_(z)};`), b.write(`
        if (${Z}.issues.length) {
          payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${ee}, ...iss.path] : [${ee}]
          })));
        }
        
        if (${Z}.value === undefined) {
          if (${ee} in input) {
            newResult[${ee}] = undefined;
          }
        } else {
          newResult[${ee}] = ${Z}.value;
        }
      `);
    }
    b.write("payload.value = newResult;"), b.write("return payload;");
    const L = b.compile();
    return (z, Z) => L(v, z, Z);
  };
  let l;
  const u = Hh, f = !Ew.jitless, m = f && sD.value, p = n.catchall;
  let g;
  e._zod.parse = (v, b) => {
    g ?? (g = i.value);
    const E = v.value;
    if (!u(E))
      return v.issues.push({
        expected: "object",
        code: "invalid_type",
        input: E,
        inst: e
      }), v;
    const _ = [];
    if (f && m && b?.async === !1 && b.jitless !== !0)
      l || (l = s(n.shape)), v = l(v, b);
    else {
      v.value = {};
      const Z = g.shape;
      for (const ee of g.keys) {
        const k = Z[ee]._zod.run({ value: E[ee], issues: [] }, b);
        k instanceof Promise ? _.push(k.then((W) => bu(W, v, ee, E))) : bu(k, v, ee, E);
      }
    }
    if (!p)
      return _.length ? Promise.all(_).then(() => v) : v;
    const M = [], N = g.keySet, L = p._zod, z = L.def.type;
    for (const Z of Object.keys(E)) {
      if (N.has(Z))
        continue;
      if (z === "never") {
        M.push(Z);
        continue;
      }
      const ee = L.run({ value: E[Z], issues: [] }, b);
      ee instanceof Promise ? _.push(ee.then((I) => bu(I, v, Z, E))) : bu(ee, v, Z, E);
    }
    return M.length && v.issues.push({
      code: "unrecognized_keys",
      keys: M,
      input: E,
      inst: e
    }), _.length ? Promise.all(_).then(() => v) : v;
  };
});
function Zb(e, n, i, s) {
  for (const u of e)
    if (u.issues.length === 0)
      return n.value = u.value, n;
  const l = e.filter((u) => !Co(u));
  return l.length === 1 ? (n.value = l[0].value, l[0]) : (n.issues.push({
    code: "invalid_union",
    input: n.value,
    inst: i,
    errors: e.map((u) => u.issues.map((f) => Qi(f, s, Xi())))
  }), n);
}
const kR = /* @__PURE__ */ se("$ZodUnion", (e, n) => {
  Nt.init(e, n), at(e._zod, "optin", () => n.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), at(e._zod, "optout", () => n.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), at(e._zod, "values", () => {
    if (n.options.every((l) => l._zod.values))
      return new Set(n.options.flatMap((l) => Array.from(l._zod.values)));
  }), at(e._zod, "pattern", () => {
    if (n.options.every((l) => l._zod.pattern)) {
      const l = n.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => Pm(u.source)).join("|")})$`);
    }
  });
  const i = n.options.length === 1, s = n.options[0]._zod.run;
  e._zod.parse = (l, u) => {
    if (i)
      return s(l, u);
    let f = !1;
    const h = [];
    for (const m of n.options) {
      const p = m._zod.run({
        value: l.value,
        issues: []
      }, u);
      if (p instanceof Promise)
        h.push(p), f = !0;
      else {
        if (p.issues.length === 0)
          return p;
        h.push(p);
      }
    }
    return f ? Promise.all(h).then((m) => Zb(m, l, e, u)) : Zb(h, l, e, u);
  };
}), OR = /* @__PURE__ */ se("$ZodIntersection", (e, n) => {
  Nt.init(e, n), e._zod.parse = (i, s) => {
    const l = i.value, u = n.left._zod.run({ value: l, issues: [] }, s), f = n.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([m, p]) => Gb(i, m, p)) : Gb(i, u, f);
  };
});
function Zh(e, n) {
  if (e === n)
    return { valid: !0, data: e };
  if (e instanceof Date && n instanceof Date && +e == +n)
    return { valid: !0, data: e };
  if (Bu(e) && Bu(n)) {
    const i = Object.keys(n), s = Object.keys(e).filter((u) => i.indexOf(u) !== -1), l = { ...e, ...n };
    for (const u of s) {
      const f = Zh(e[u], n[u]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...f.mergeErrorPath]
        };
      l[u] = f.data;
    }
    return { valid: !0, data: l };
  }
  if (Array.isArray(e) && Array.isArray(n)) {
    if (e.length !== n.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < e.length; s++) {
      const l = e[s], u = n[s], f = Zh(l, u);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...f.mergeErrorPath]
        };
      i.push(f.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Gb(e, n, i) {
  if (n.issues.length && e.issues.push(...n.issues), i.issues.length && e.issues.push(...i.issues), Co(e))
    return e;
  const s = Zh(n.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const VR = /* @__PURE__ */ se("$ZodEnum", (e, n) => {
  Nt.init(e, n);
  const i = iD(n.entries), s = new Set(i);
  e._zod.values = s, e._zod.pattern = new RegExp(`^(${i.filter((l) => oD.has(typeof l)).map((l) => typeof l == "string" ? ec(l) : l.toString()).join("|")})$`), e._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: e
    }), l;
  };
}), $R = /* @__PURE__ */ se("$ZodTransform", (e, n) => {
  Nt.init(e, n), e._zod.parse = (i, s) => {
    const l = n.transform(i.value, i);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (i.value = f, i));
    if (l instanceof Promise)
      throw new Uo();
    return i.value = l, i;
  };
});
function Yb(e, n) {
  return e.issues.length && n === void 0 ? { issues: [], value: void 0 } : e;
}
const NR = /* @__PURE__ */ se("$ZodOptional", (e, n) => {
  Nt.init(e, n), e._zod.optin = "optional", e._zod.optout = "optional", at(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, void 0]) : void 0), at(e._zod, "pattern", () => {
    const i = n.innerType._zod.pattern;
    return i ? new RegExp(`^(${Pm(i.source)})?$`) : void 0;
  }), e._zod.parse = (i, s) => {
    if (n.innerType._zod.optin === "optional") {
      const l = n.innerType._zod.run(i, s);
      return l instanceof Promise ? l.then((u) => Yb(u, i.value)) : Yb(l, i.value);
    }
    return i.value === void 0 ? i : n.innerType._zod.run(i, s);
  };
}), jR = /* @__PURE__ */ se("$ZodNullable", (e, n) => {
  Nt.init(e, n), at(e._zod, "optin", () => n.innerType._zod.optin), at(e._zod, "optout", () => n.innerType._zod.optout), at(e._zod, "pattern", () => {
    const i = n.innerType._zod.pattern;
    return i ? new RegExp(`^(${Pm(i.source)}|null)$`) : void 0;
  }), at(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, null]) : void 0), e._zod.parse = (i, s) => i.value === null ? i : n.innerType._zod.run(i, s);
}), LR = /* @__PURE__ */ se("$ZodDefault", (e, n) => {
  Nt.init(e, n), e._zod.optin = "optional", at(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (i, s) => {
    if (i.value === void 0)
      return i.value = n.defaultValue, i;
    const l = n.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => Fb(u, n)) : Fb(l, n);
  };
});
function Fb(e, n) {
  return e.value === void 0 && (e.value = n.defaultValue), e;
}
const UR = /* @__PURE__ */ se("$ZodPrefault", (e, n) => {
  Nt.init(e, n), e._zod.optin = "optional", at(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (i, s) => (i.value === void 0 && (i.value = n.defaultValue), n.innerType._zod.run(i, s));
}), BR = /* @__PURE__ */ se("$ZodNonOptional", (e, n) => {
  Nt.init(e, n), at(e._zod, "values", () => {
    const i = n.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), e._zod.parse = (i, s) => {
    const l = n.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => qb(u, e)) : qb(l, e);
  };
});
function qb(e, n) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: n
  }), e;
}
const PR = /* @__PURE__ */ se("$ZodCatch", (e, n) => {
  Nt.init(e, n), at(e._zod, "optin", () => n.innerType._zod.optin), at(e._zod, "optout", () => n.innerType._zod.optout), at(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (i, s) => {
    const l = n.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => (i.value = u.value, u.issues.length && (i.value = n.catchValue({
      ...i,
      error: {
        issues: u.issues.map((f) => Qi(f, s, Xi()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = l.value, l.issues.length && (i.value = n.catchValue({
      ...i,
      error: {
        issues: l.issues.map((u) => Qi(u, s, Xi()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), HR = /* @__PURE__ */ se("$ZodPipe", (e, n) => {
  Nt.init(e, n), at(e._zod, "values", () => n.in._zod.values), at(e._zod, "optin", () => n.in._zod.optin), at(e._zod, "optout", () => n.out._zod.optout), at(e._zod, "propValues", () => n.in._zod.propValues), e._zod.parse = (i, s) => {
    const l = n.in._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => Kb(u, n, s)) : Kb(l, n, s);
  };
});
function Kb(e, n, i) {
  return e.issues.length ? e : n.out._zod.run({ value: e.value, issues: e.issues }, i);
}
const ZR = /* @__PURE__ */ se("$ZodReadonly", (e, n) => {
  Nt.init(e, n), at(e._zod, "propValues", () => n.innerType._zod.propValues), at(e._zod, "values", () => n.innerType._zod.values), at(e._zod, "optin", () => n.innerType._zod.optin), at(e._zod, "optout", () => n.innerType._zod.optout), e._zod.parse = (i, s) => {
    const l = n.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then(Ib) : Ib(l);
  };
});
function Ib(e) {
  return e.value = Object.freeze(e.value), e;
}
const GR = /* @__PURE__ */ se("$ZodCustom", (e, n) => {
  da.init(e, n), Nt.init(e, n), e._zod.parse = (i, s) => i, e._zod.check = (i) => {
    const s = i.value, l = n.fn(s);
    if (l instanceof Promise)
      return l.then((u) => Xb(u, i, s, e));
    Xb(l, i, s, e);
  };
});
function Xb(e, n, i, s) {
  if (!e) {
    const l = {
      code: "custom",
      input: i,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (l.params = s._zod.def.params), n.issues.push(Bo(l));
  }
}
class YR {
  constructor() {
    this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(n, ...i) {
    const s = i[0];
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
    const i = this._map.get(n);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(n), this;
  }
  get(n) {
    const i = n._zod.parent;
    if (i) {
      const s = { ...this.get(i) ?? {} };
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
function FR() {
  return new YR();
}
const xu = /* @__PURE__ */ FR();
function qR(e, n) {
  return new e({
    type: "string",
    ...ke(n)
  });
}
function jw(e, n) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function Qb(e, n) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function KR(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function IR(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ke(n)
  });
}
function XR(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ke(n)
  });
}
function QR(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ke(n)
  });
}
function JR(e, n) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function WR(e, n) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function ez(e, n) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function tz(e, n) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function nz(e, n) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function az(e, n) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function iz(e, n) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function rz(e, n) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function sz(e, n) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function oz(e, n) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function lz(e, n) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function uz(e, n) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function cz(e, n) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function fz(e, n) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function dz(e, n) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function hz(e, n) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
function mz(e, n) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ke(n)
  });
}
function pz(e, n) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...ke(n)
  });
}
function gz(e, n) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ke(n)
  });
}
function vz(e, n) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ke(n)
  });
}
function yz(e) {
  return new e({
    type: "unknown"
  });
}
function bz(e, n) {
  return new e({
    type: "never",
    ...ke(n)
  });
}
function Lw(e, n) {
  return new YD({
    check: "max_length",
    ...ke(n),
    maximum: e
  });
}
function Pu(e, n) {
  return new FD({
    check: "min_length",
    ...ke(n),
    minimum: e
  });
}
function Uw(e, n) {
  return new qD({
    check: "length_equals",
    ...ke(n),
    length: e
  });
}
function xz(e, n) {
  return new KD({
    check: "string_format",
    format: "regex",
    ...ke(n),
    pattern: e
  });
}
function Sz(e) {
  return new ID({
    check: "string_format",
    format: "lowercase",
    ...ke(e)
  });
}
function wz(e) {
  return new XD({
    check: "string_format",
    format: "uppercase",
    ...ke(e)
  });
}
function Ez(e, n) {
  return new QD({
    check: "string_format",
    format: "includes",
    ...ke(n),
    includes: e
  });
}
function Tz(e, n) {
  return new JD({
    check: "string_format",
    format: "starts_with",
    ...ke(n),
    prefix: e
  });
}
function Az(e, n) {
  return new WD({
    check: "string_format",
    format: "ends_with",
    ...ke(n),
    suffix: e
  });
}
function Yo(e) {
  return new eR({
    check: "overwrite",
    tx: e
  });
}
function _z(e) {
  return Yo((n) => n.normalize(e));
}
function Cz() {
  return Yo((e) => e.trim());
}
function Mz() {
  return Yo((e) => e.toLowerCase());
}
function Dz() {
  return Yo((e) => e.toUpperCase());
}
function Rz(e, n, i) {
  return new e({
    type: "array",
    element: n,
    // get element() {
    //   return element;
    // },
    ...ke(i)
  });
}
function zz(e, n, i) {
  return new e({
    type: "custom",
    check: "custom",
    fn: n,
    ...ke(i)
  });
}
function kz(e) {
  const n = Oz((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(Bo(s, i.value, n._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = i.value), l.inst ?? (l.inst = n), l.continue ?? (l.continue = !n._zod.def.abort), i.issues.push(Bo(l));
    }
  }, e(i.value, i)));
  return n;
}
function Oz(e, n) {
  const i = new da({
    check: "custom",
    ...ke(n)
  });
  return i._zod.check = e, i;
}
const Vz = /* @__PURE__ */ se("ZodISODateTime", (e, n) => {
  mR.init(e, n), ft.init(e, n);
});
function $z(e) {
  return mz(Vz, e);
}
const Nz = /* @__PURE__ */ se("ZodISODate", (e, n) => {
  pR.init(e, n), ft.init(e, n);
});
function jz(e) {
  return pz(Nz, e);
}
const Lz = /* @__PURE__ */ se("ZodISOTime", (e, n) => {
  gR.init(e, n), ft.init(e, n);
});
function Uz(e) {
  return gz(Lz, e);
}
const Bz = /* @__PURE__ */ se("ZodISODuration", (e, n) => {
  vR.init(e, n), ft.init(e, n);
});
function Pz(e) {
  return vz(Bz, e);
}
const Hz = (e, n) => {
  Zm.init(e, n), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (i) => gD(e, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => pD(e, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        e.issues.push(i), e.message = JSON.stringify(e.issues, Ph, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        e.issues.push(...i), e.message = JSON.stringify(e.issues, Ph, 2);
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
}, ac = se("ZodError", Hz, {
  Parent: Error
}), Zz = /* @__PURE__ */ Dw(ac), Gz = /* @__PURE__ */ Rw(ac), Yz = /* @__PURE__ */ zw(ac), Fz = /* @__PURE__ */ kw(ac), Gt = /* @__PURE__ */ se("ZodType", (e, n) => (Nt.init(e, n), e.def = n, Object.defineProperty(e, "_def", { value: n }), e.check = (...i) => e.clone(
  {
    ...n,
    checks: [
      ...n.checks ?? [],
      ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
    ]
  }
  // { parent: true }
), e.clone = (i, s) => er(e, i, s), e.brand = () => e, e.register = (i, s) => (i.add(e, s), e), e.parse = (i, s) => Zz(e, i, s, { callee: e.parse }), e.safeParse = (i, s) => Yz(e, i, s), e.parseAsync = async (i, s) => Gz(e, i, s, { callee: e.parseAsync }), e.safeParseAsync = async (i, s) => Fz(e, i, s), e.spa = e.safeParseAsync, e.refine = (i, s) => e.check(Vk(i, s)), e.superRefine = (i) => e.check($k(i)), e.overwrite = (i) => e.check(Yo(i)), e.optional = () => e1(e), e.nullable = () => t1(e), e.nullish = () => e1(t1(e)), e.nonoptional = (i) => Mk(e, i), e.array = () => mk(e), e.or = (i) => vk([e, i]), e.and = (i) => bk(e, i), e.transform = (i) => n1(e, wk(i)), e.default = (i) => Ak(e, i), e.prefault = (i) => Ck(e, i), e.catch = (i) => Rk(e, i), e.pipe = (i) => n1(e, i), e.readonly = () => Ok(e), e.describe = (i) => {
  const s = e.clone();
  return xu.add(s, { description: i }), s;
}, Object.defineProperty(e, "description", {
  get() {
    return xu.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...i) => {
  if (i.length === 0)
    return xu.get(e);
  const s = e.clone();
  return xu.add(s, i[0]), s;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Bw = /* @__PURE__ */ se("_ZodString", (e, n) => {
  Gm.init(e, n), Gt.init(e, n);
  const i = e._zod.bag;
  e.format = i.format ?? null, e.minLength = i.minimum ?? null, e.maxLength = i.maximum ?? null, e.regex = (...s) => e.check(xz(...s)), e.includes = (...s) => e.check(Ez(...s)), e.startsWith = (...s) => e.check(Tz(...s)), e.endsWith = (...s) => e.check(Az(...s)), e.min = (...s) => e.check(Pu(...s)), e.max = (...s) => e.check(Lw(...s)), e.length = (...s) => e.check(Uw(...s)), e.nonempty = (...s) => e.check(Pu(1, ...s)), e.lowercase = (s) => e.check(Sz(s)), e.uppercase = (s) => e.check(wz(s)), e.trim = () => e.check(Cz()), e.normalize = (...s) => e.check(_z(...s)), e.toLowerCase = () => e.check(Mz()), e.toUpperCase = () => e.check(Dz());
}), qz = /* @__PURE__ */ se("ZodString", (e, n) => {
  Gm.init(e, n), Bw.init(e, n), e.email = (i) => e.check(jw(Pw, i)), e.url = (i) => e.check(JR(Kz, i)), e.jwt = (i) => e.check(hz(uk, i)), e.emoji = (i) => e.check(WR(Iz, i)), e.guid = (i) => e.check(Qb(Jb, i)), e.uuid = (i) => e.check(KR(Su, i)), e.uuidv4 = (i) => e.check(IR(Su, i)), e.uuidv6 = (i) => e.check(XR(Su, i)), e.uuidv7 = (i) => e.check(QR(Su, i)), e.nanoid = (i) => e.check(ez(Xz, i)), e.guid = (i) => e.check(Qb(Jb, i)), e.cuid = (i) => e.check(tz(Qz, i)), e.cuid2 = (i) => e.check(nz(Jz, i)), e.ulid = (i) => e.check(az(Wz, i)), e.base64 = (i) => e.check(cz(sk, i)), e.base64url = (i) => e.check(fz(ok, i)), e.xid = (i) => e.check(iz(ek, i)), e.ksuid = (i) => e.check(rz(tk, i)), e.ipv4 = (i) => e.check(sz(nk, i)), e.ipv6 = (i) => e.check(oz(ak, i)), e.cidrv4 = (i) => e.check(lz(ik, i)), e.cidrv6 = (i) => e.check(uz(rk, i)), e.e164 = (i) => e.check(dz(lk, i)), e.datetime = (i) => e.check($z(i)), e.date = (i) => e.check(jz(i)), e.time = (i) => e.check(Uz(i)), e.duration = (i) => e.check(Pz(i));
});
function Gh(e) {
  return qR(qz, e);
}
const ft = /* @__PURE__ */ se("ZodStringFormat", (e, n) => {
  ot.init(e, n), Bw.init(e, n);
}), Pw = /* @__PURE__ */ se("ZodEmail", (e, n) => {
  rR.init(e, n), ft.init(e, n);
});
function Hw(e) {
  return jw(Pw, e);
}
const Jb = /* @__PURE__ */ se("ZodGUID", (e, n) => {
  aR.init(e, n), ft.init(e, n);
}), Su = /* @__PURE__ */ se("ZodUUID", (e, n) => {
  iR.init(e, n), ft.init(e, n);
}), Kz = /* @__PURE__ */ se("ZodURL", (e, n) => {
  sR.init(e, n), ft.init(e, n);
}), Iz = /* @__PURE__ */ se("ZodEmoji", (e, n) => {
  oR.init(e, n), ft.init(e, n);
}), Xz = /* @__PURE__ */ se("ZodNanoID", (e, n) => {
  lR.init(e, n), ft.init(e, n);
}), Qz = /* @__PURE__ */ se("ZodCUID", (e, n) => {
  uR.init(e, n), ft.init(e, n);
}), Jz = /* @__PURE__ */ se("ZodCUID2", (e, n) => {
  cR.init(e, n), ft.init(e, n);
}), Wz = /* @__PURE__ */ se("ZodULID", (e, n) => {
  fR.init(e, n), ft.init(e, n);
}), ek = /* @__PURE__ */ se("ZodXID", (e, n) => {
  dR.init(e, n), ft.init(e, n);
}), tk = /* @__PURE__ */ se("ZodKSUID", (e, n) => {
  hR.init(e, n), ft.init(e, n);
}), nk = /* @__PURE__ */ se("ZodIPv4", (e, n) => {
  yR.init(e, n), ft.init(e, n);
}), ak = /* @__PURE__ */ se("ZodIPv6", (e, n) => {
  bR.init(e, n), ft.init(e, n);
}), ik = /* @__PURE__ */ se("ZodCIDRv4", (e, n) => {
  xR.init(e, n), ft.init(e, n);
}), rk = /* @__PURE__ */ se("ZodCIDRv6", (e, n) => {
  SR.init(e, n), ft.init(e, n);
}), sk = /* @__PURE__ */ se("ZodBase64", (e, n) => {
  wR.init(e, n), ft.init(e, n);
}), ok = /* @__PURE__ */ se("ZodBase64URL", (e, n) => {
  TR.init(e, n), ft.init(e, n);
}), lk = /* @__PURE__ */ se("ZodE164", (e, n) => {
  AR.init(e, n), ft.init(e, n);
}), uk = /* @__PURE__ */ se("ZodJWT", (e, n) => {
  CR.init(e, n), ft.init(e, n);
}), ck = /* @__PURE__ */ se("ZodUnknown", (e, n) => {
  MR.init(e, n), Gt.init(e, n);
});
function Wb() {
  return yz(ck);
}
const fk = /* @__PURE__ */ se("ZodNever", (e, n) => {
  DR.init(e, n), Gt.init(e, n);
});
function dk(e) {
  return bz(fk, e);
}
const hk = /* @__PURE__ */ se("ZodArray", (e, n) => {
  RR.init(e, n), Gt.init(e, n), e.element = n.element, e.min = (i, s) => e.check(Pu(i, s)), e.nonempty = (i) => e.check(Pu(1, i)), e.max = (i, s) => e.check(Lw(i, s)), e.length = (i, s) => e.check(Uw(i, s)), e.unwrap = () => e.element;
});
function mk(e, n) {
  return Rz(hk, e, n);
}
const pk = /* @__PURE__ */ se("ZodObject", (e, n) => {
  zR.init(e, n), Gt.init(e, n), at(e, "shape", () => n.shape), e.keyof = () => xk(Object.keys(e._zod.def.shape)), e.catchall = (i) => e.clone({ ...e._zod.def, catchall: i }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Wb() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Wb() }), e.strict = () => e.clone({ ...e._zod.def, catchall: dk() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (i) => fD(e, i), e.merge = (i) => dD(e, i), e.pick = (i) => uD(e, i), e.omit = (i) => cD(e, i), e.partial = (...i) => hD(Gw, e, i[0]), e.required = (...i) => mD(Yw, e, i[0]);
});
function Zw(e, n) {
  const i = {
    type: "object",
    get shape() {
      return Wi(this, "shape", e ? rD(e) : {}), this.shape;
    },
    ...ke(n)
  };
  return new pk(i);
}
const gk = /* @__PURE__ */ se("ZodUnion", (e, n) => {
  kR.init(e, n), Gt.init(e, n), e.options = n.options;
});
function vk(e, n) {
  return new gk({
    type: "union",
    options: e,
    ...ke(n)
  });
}
const yk = /* @__PURE__ */ se("ZodIntersection", (e, n) => {
  OR.init(e, n), Gt.init(e, n);
});
function bk(e, n) {
  return new yk({
    type: "intersection",
    left: e,
    right: n
  });
}
const Yh = /* @__PURE__ */ se("ZodEnum", (e, n) => {
  VR.init(e, n), Gt.init(e, n), e.enum = n.entries, e.options = Object.values(n.entries);
  const i = new Set(Object.keys(n.entries));
  e.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = n.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Yh({
      ...n,
      checks: [],
      ...ke(l),
      entries: u
    });
  }, e.exclude = (s, l) => {
    const u = { ...n.entries };
    for (const f of s)
      if (i.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Yh({
      ...n,
      checks: [],
      ...ke(l),
      entries: u
    });
  };
});
function xk(e, n) {
  const i = Array.isArray(e) ? Object.fromEntries(e.map((s) => [s, s])) : e;
  return new Yh({
    type: "enum",
    entries: i,
    ...ke(n)
  });
}
const Sk = /* @__PURE__ */ se("ZodTransform", (e, n) => {
  $R.init(e, n), Gt.init(e, n), e._zod.parse = (i, s) => {
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(Bo(u, i.value, n));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = e), i.issues.push(Bo(f));
      }
    };
    const l = n.transform(i.value, i);
    return l instanceof Promise ? l.then((u) => (i.value = u, i)) : (i.value = l, i);
  };
});
function wk(e) {
  return new Sk({
    type: "transform",
    transform: e
  });
}
const Gw = /* @__PURE__ */ se("ZodOptional", (e, n) => {
  NR.init(e, n), Gt.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function e1(e) {
  return new Gw({
    type: "optional",
    innerType: e
  });
}
const Ek = /* @__PURE__ */ se("ZodNullable", (e, n) => {
  jR.init(e, n), Gt.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function t1(e) {
  return new Ek({
    type: "nullable",
    innerType: e
  });
}
const Tk = /* @__PURE__ */ se("ZodDefault", (e, n) => {
  LR.init(e, n), Gt.init(e, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ak(e, n) {
  return new Tk({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : _w(n);
    }
  });
}
const _k = /* @__PURE__ */ se("ZodPrefault", (e, n) => {
  UR.init(e, n), Gt.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function Ck(e, n) {
  return new _k({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : _w(n);
    }
  });
}
const Yw = /* @__PURE__ */ se("ZodNonOptional", (e, n) => {
  BR.init(e, n), Gt.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function Mk(e, n) {
  return new Yw({
    type: "nonoptional",
    innerType: e,
    ...ke(n)
  });
}
const Dk = /* @__PURE__ */ se("ZodCatch", (e, n) => {
  PR.init(e, n), Gt.init(e, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Rk(e, n) {
  return new Dk({
    type: "catch",
    innerType: e,
    catchValue: typeof n == "function" ? n : () => n
  });
}
const zk = /* @__PURE__ */ se("ZodPipe", (e, n) => {
  HR.init(e, n), Gt.init(e, n), e.in = n.in, e.out = n.out;
});
function n1(e, n) {
  return new zk({
    type: "pipe",
    in: e,
    out: n
    // ...util.normalizeParams(params),
  });
}
const kk = /* @__PURE__ */ se("ZodReadonly", (e, n) => {
  ZR.init(e, n), Gt.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function Ok(e) {
  return new kk({
    type: "readonly",
    innerType: e
  });
}
const Fw = /* @__PURE__ */ se("ZodCustom", (e, n) => {
  GR.init(e, n), Gt.init(e, n);
});
function Vk(e, n = {}) {
  return zz(Fw, e, n);
}
function $k(e) {
  return kz(e);
}
function Nk(e, n = {
  error: `Input not instance of ${e.name}`
}) {
  const i = new Fw({
    type: "custom",
    check: "custom",
    fn: (s) => s instanceof e,
    abort: !0,
    ...ke(n)
  });
  return i._zod.bag.Class = e, i;
}
var Fo = (e) => e.type === "checkbox", Yi = (e) => e instanceof Date, sn = (e) => e == null;
const qw = (e) => typeof e == "object";
var wt = (e) => !sn(e) && !Array.isArray(e) && qw(e) && !Yi(e), Kw = (e) => wt(e) && e.target ? Fo(e.target) ? e.target.checked : e.target.value : e, jk = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Iw = (e, n) => e.has(jk(n)), Lk = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return wt(n) && n.hasOwnProperty("isPrototypeOf");
}, Ym = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function $t(e) {
  let n;
  const i = Array.isArray(e), s = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(Ym && (e instanceof Blob || s)) && (i || wt(e)))
    if (n = i ? [] : Object.create(Object.getPrototypeOf(e)), !i && !Lk(e))
      n = e;
    else
      for (const l in e)
        e.hasOwnProperty(l) && (n[l] = $t(e[l]));
  else
    return e;
  return n;
}
var ic = (e) => /^\w*$/.test(e), St = (e) => e === void 0, Fm = (e) => Array.isArray(e) ? e.filter(Boolean) : [], qm = (e) => Fm(e.replace(/["|']|\]/g, "").split(/\.|\[/)), pe = (e, n, i) => {
  if (!n || !wt(e))
    return i;
  const s = (ic(n) ? [n] : qm(n)).reduce((l, u) => sn(l) ? l : l[u], e);
  return St(s) || s === e ? St(e[n]) ? i : e[n] : s;
}, _n = (e) => typeof e == "boolean", Ie = (e, n, i) => {
  let s = -1;
  const l = ic(n) ? [n] : qm(n), u = l.length, f = u - 1;
  for (; ++s < u; ) {
    const h = l[s];
    let m = i;
    if (s !== f) {
      const p = e[h];
      m = wt(p) || Array.isArray(p) ? p : isNaN(+l[s + 1]) ? {} : [];
    }
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return;
    e[h] = m, e = e[h];
  }
};
const Hu = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Xn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, ka = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Km = j.createContext(null);
Km.displayName = "HookFormContext";
const rc = () => j.useContext(Km), Uk = (e) => {
  const { children: n, ...i } = e;
  return j.createElement(Km.Provider, { value: i }, n);
};
var Xw = (e, n, i, s = !0) => {
  const l = {
    defaultValues: n._defaultValues
  };
  for (const u in e)
    Object.defineProperty(l, u, {
      get: () => {
        const f = u;
        return n._proxyFormState[f] !== Xn.all && (n._proxyFormState[f] = !s || Xn.all), i && (i[f] = !0), e[f];
      }
    });
  return l;
};
const Im = typeof window < "u" ? j.useLayoutEffect : j.useEffect;
function Qw(e) {
  const n = rc(), { control: i = n.control, disabled: s, name: l, exact: u } = e || {}, [f, h] = j.useState(i._formState), m = j.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Im(() => i._subscribe({
    name: l,
    formState: m.current,
    exact: u,
    callback: (p) => {
      !s && h({
        ...i._formState,
        ...p
      });
    }
  }), [l, s, u]), j.useEffect(() => {
    m.current.isValid && i._setValid(!0);
  }, [i]), j.useMemo(() => Xw(f, i, m.current, !1), [f, i]);
}
var oa = (e) => typeof e == "string", Jw = (e, n, i, s, l) => oa(e) ? (s && n.watch.add(e), pe(i, e, l)) : Array.isArray(e) ? e.map((u) => (s && n.watch.add(u), pe(i, u))) : (s && (n.watchAll = !0), i), Fh = (e) => sn(e) || !qw(e);
function Va(e, n, i = /* @__PURE__ */ new WeakSet()) {
  if (Fh(e) || Fh(n))
    return e === n;
  if (Yi(e) && Yi(n))
    return e.getTime() === n.getTime();
  const s = Object.keys(e), l = Object.keys(n);
  if (s.length !== l.length)
    return !1;
  if (i.has(e) || i.has(n))
    return !0;
  i.add(e), i.add(n);
  for (const u of s) {
    const f = e[u];
    if (!l.includes(u))
      return !1;
    if (u !== "ref") {
      const h = n[u];
      if (Yi(f) && Yi(h) || wt(f) && wt(h) || Array.isArray(f) && Array.isArray(h) ? !Va(f, h, i) : f !== h)
        return !1;
    }
  }
  return !0;
}
function Bk(e) {
  const n = rc(), { control: i = n.control, name: s, defaultValue: l, disabled: u, exact: f, compute: h } = e || {}, m = j.useRef(l), p = j.useRef(h), g = j.useRef(void 0);
  p.current = h;
  const v = j.useMemo(() => i._getWatch(s, m.current), [i, s]), [b, E] = j.useState(p.current ? p.current(v) : v);
  return Im(() => i._subscribe({
    name: s,
    formState: {
      values: !0
    },
    exact: f,
    callback: (_) => {
      if (!u) {
        const M = Jw(s, i._names, _.values || i._formValues, !1, m.current);
        if (p.current) {
          const N = p.current(M);
          Va(N, g.current) || (E(N), g.current = N);
        } else
          E(M);
      }
    }
  }), [i, u, s, f]), j.useEffect(() => i._removeUnmounted()), b;
}
function Pk(e) {
  const n = rc(), { name: i, disabled: s, control: l = n.control, shouldUnregister: u, defaultValue: f } = e, h = Iw(l._names.array, i), m = j.useMemo(() => pe(l._formValues, i, pe(l._defaultValues, i, f)), [l, i, f]), p = Bk({
    control: l,
    name: i,
    defaultValue: m,
    exact: !0
  }), g = Qw({
    control: l,
    name: i,
    exact: !0
  }), v = j.useRef(e), b = j.useRef(l.register(i, {
    ...e.rules,
    value: p,
    ..._n(e.disabled) ? { disabled: e.disabled } : {}
  }));
  v.current = e;
  const E = j.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!pe(g.errors, i)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!pe(g.dirtyFields, i)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!pe(g.touchedFields, i)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!pe(g.validatingFields, i)
    },
    error: {
      enumerable: !0,
      get: () => pe(g.errors, i)
    }
  }), [g, i]), _ = j.useCallback((z) => b.current.onChange({
    target: {
      value: Kw(z),
      name: i
    },
    type: Hu.CHANGE
  }), [i]), M = j.useCallback(() => b.current.onBlur({
    target: {
      value: pe(l._formValues, i),
      name: i
    },
    type: Hu.BLUR
  }), [i, l._formValues]), N = j.useCallback((z) => {
    const Z = pe(l._fields, i);
    Z && z && (Z._f.ref = {
      focus: () => z.focus && z.focus(),
      select: () => z.select && z.select(),
      setCustomValidity: (ee) => z.setCustomValidity(ee),
      reportValidity: () => z.reportValidity()
    });
  }, [l._fields, i]), L = j.useMemo(() => ({
    name: i,
    value: p,
    ..._n(s) || g.disabled ? { disabled: g.disabled || s } : {},
    onChange: _,
    onBlur: M,
    ref: N
  }), [i, s, g.disabled, _, M, N, p]);
  return j.useEffect(() => {
    const z = l._options.shouldUnregister || u;
    l.register(i, {
      ...v.current.rules,
      ..._n(v.current.disabled) ? { disabled: v.current.disabled } : {}
    });
    const Z = (ee, I) => {
      const k = pe(l._fields, ee);
      k && k._f && (k._f.mount = I);
    };
    if (Z(i, !0), z) {
      const ee = $t(pe(l._options.defaultValues, i));
      Ie(l._defaultValues, i, ee), St(pe(l._formValues, i)) && Ie(l._formValues, i, ee);
    }
    return !h && l.register(i), () => {
      (h ? z && !l._state.action : z) ? l.unregister(i) : Z(i, !1);
    };
  }, [i, l, h, u]), j.useEffect(() => {
    l._setDisabledField({
      disabled: s,
      name: i
    });
  }, [s, i, l]), j.useMemo(() => ({
    field: L,
    formState: g,
    fieldState: E
  }), [L, g, E]);
}
const Hk = (e) => e.render(Pk(e));
var Xm = (e, n, i, s, l) => n ? {
  ...i[e],
  types: {
    ...i[e] && i[e].types ? i[e].types : {},
    [s]: l || !0
  }
} : {}, Mo = (e) => Array.isArray(e) ? e : [e], a1 = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const u of e)
        u.next && u.next(l);
    },
    subscribe: (l) => (e.push(l), {
      unsubscribe: () => {
        e = e.filter((u) => u !== l);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, pn = (e) => wt(e) && !Object.keys(e).length, Qm = (e) => e.type === "file", Qn = (e) => typeof e == "function", Zu = (e) => {
  if (!Ym)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, Ww = (e) => e.type === "select-multiple", Jm = (e) => e.type === "radio", Zk = (e) => Jm(e) || Fo(e), Fd = (e) => Zu(e) && e.isConnected;
function Gk(e, n) {
  const i = n.slice(0, -1).length;
  let s = 0;
  for (; s < i; )
    e = St(e) ? s++ : e[n[s++]];
  return e;
}
function Yk(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !St(e[n]))
      return !1;
  return !0;
}
function Dt(e, n) {
  const i = Array.isArray(n) ? n : ic(n) ? [n] : qm(n), s = i.length === 1 ? e : Gk(e, i), l = i.length - 1, u = i[l];
  return s && delete s[u], l !== 0 && (wt(s) && pn(s) || Array.isArray(s) && Yk(s)) && Dt(e, i.slice(0, -1)), e;
}
var eE = (e) => {
  for (const n in e)
    if (Qn(e[n]))
      return !0;
  return !1;
};
function Gu(e, n = {}) {
  const i = Array.isArray(e);
  if (wt(e) || i)
    for (const s in e)
      Array.isArray(e[s]) || wt(e[s]) && !eE(e[s]) ? (n[s] = Array.isArray(e[s]) ? [] : {}, Gu(e[s], n[s])) : sn(e[s]) || (n[s] = !0);
  return n;
}
function tE(e, n, i) {
  const s = Array.isArray(e);
  if (wt(e) || s)
    for (const l in e)
      Array.isArray(e[l]) || wt(e[l]) && !eE(e[l]) ? St(n) || Fh(i[l]) ? i[l] = Array.isArray(e[l]) ? Gu(e[l], []) : { ...Gu(e[l]) } : tE(e[l], sn(n) ? {} : n[l], i[l]) : i[l] = !Va(e[l], n[l]);
  return i;
}
var po = (e, n) => tE(e, n, Gu(n));
const i1 = {
  value: !1,
  isValid: !1
}, r1 = { value: !0, isValid: !0 };
var nE = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((i) => i && i.checked && !i.disabled).map((i) => i.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !St(e[0].attributes.value) ? St(e[0].value) || e[0].value === "" ? r1 : { value: e[0].value, isValid: !0 } : r1
    ) : i1;
  }
  return i1;
}, aE = (e, { valueAsNumber: n, valueAsDate: i, setValueAs: s }) => St(e) ? e : n ? e === "" ? NaN : e && +e : i && oa(e) ? new Date(e) : s ? s(e) : e;
const s1 = {
  isValid: !1,
  value: null
};
var iE = (e) => Array.isArray(e) ? e.reduce((n, i) => i && i.checked && !i.disabled ? {
  isValid: !0,
  value: i.value
} : n, s1) : s1;
function o1(e) {
  const n = e.ref;
  return Qm(n) ? n.files : Jm(n) ? iE(e.refs).value : Ww(n) ? [...n.selectedOptions].map(({ value: i }) => i) : Fo(n) ? nE(e.refs).value : aE(St(n.value) ? e.ref.value : n.value, e);
}
var Fk = (e, n, i, s) => {
  const l = {};
  for (const u of e) {
    const f = pe(n, u);
    f && Ie(l, u, f._f);
  }
  return {
    criteriaMode: i,
    names: [...e],
    fields: l,
    shouldUseNativeValidation: s
  };
}, Yu = (e) => e instanceof RegExp, go = (e) => St(e) ? e : Yu(e) ? e.source : wt(e) ? Yu(e.value) ? e.value.source : e.value : e, l1 = (e) => ({
  isOnSubmit: !e || e === Xn.onSubmit,
  isOnBlur: e === Xn.onBlur,
  isOnChange: e === Xn.onChange,
  isOnAll: e === Xn.all,
  isOnTouch: e === Xn.onTouched
});
const u1 = "AsyncFunction";
var qk = (e) => !!e && !!e.validate && !!(Qn(e.validate) && e.validate.constructor.name === u1 || wt(e.validate) && Object.values(e.validate).find((n) => n.constructor.name === u1)), Kk = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), c1 = (e, n, i) => !i && (n.watchAll || n.watch.has(e) || [...n.watch].some((s) => e.startsWith(s) && /^\.\w+/.test(e.slice(s.length))));
const Do = (e, n, i, s) => {
  for (const l of i || Object.keys(e)) {
    const u = pe(e, l);
    if (u) {
      const { _f: f, ...h } = u;
      if (f) {
        if (f.refs && f.refs[0] && n(f.refs[0], l) && !s)
          return !0;
        if (f.ref && n(f.ref, f.name) && !s)
          return !0;
        if (Do(h, n))
          break;
      } else if (wt(h) && Do(h, n))
        break;
    }
  }
};
function f1(e, n, i) {
  const s = pe(e, i);
  if (s || ic(i))
    return {
      error: s,
      name: i
    };
  const l = i.split(".");
  for (; l.length; ) {
    const u = l.join("."), f = pe(n, u), h = pe(e, u);
    if (f && !Array.isArray(f) && i !== u)
      return { name: i };
    if (h && h.type)
      return {
        name: u,
        error: h
      };
    if (h && h.root && h.root.type)
      return {
        name: `${u}.root`,
        error: h.root
      };
    l.pop();
  }
  return {
    name: i
  };
}
var Ik = (e, n, i, s) => {
  i(e);
  const { name: l, ...u } = e;
  return pn(u) || Object.keys(u).length >= Object.keys(n).length || Object.keys(u).find((f) => n[f] === (!s || Xn.all));
}, Xk = (e, n, i) => !e || !n || e === n || Mo(e).some((s) => s && (i ? s === n : s.startsWith(n) || n.startsWith(s))), Qk = (e, n, i, s, l) => l.isOnAll ? !1 : !i && l.isOnTouch ? !(n || e) : (i ? s.isOnBlur : l.isOnBlur) ? !e : (i ? s.isOnChange : l.isOnChange) ? e : !0, Jk = (e, n) => !Fm(pe(e, n)).length && Dt(e, n), Wk = (e, n, i) => {
  const s = Mo(pe(e, i));
  return Ie(s, "root", n[i]), Ie(e, i, s), e;
}, zu = (e) => oa(e);
function d1(e, n, i = "validate") {
  if (zu(e) || Array.isArray(e) && e.every(zu) || _n(e) && !e)
    return {
      type: i,
      message: zu(e) ? e : "",
      ref: n
    };
}
var Zr = (e) => wt(e) && !Yu(e) ? e : {
  value: e,
  message: ""
}, h1 = async (e, n, i, s, l, u) => {
  const { ref: f, refs: h, required: m, maxLength: p, minLength: g, min: v, max: b, pattern: E, validate: _, name: M, valueAsNumber: N, mount: L } = e._f, z = pe(i, M);
  if (!L || n.has(M))
    return {};
  const Z = h ? h[0] : f, ee = (q) => {
    l && Z.reportValidity && (Z.setCustomValidity(_n(q) ? "" : q || ""), Z.reportValidity());
  }, I = {}, k = Jm(f), W = Fo(f), Y = k || W, de = (N || Qm(f)) && St(f.value) && St(z) || Zu(f) && f.value === "" || z === "" || Array.isArray(z) && !z.length, ve = Xm.bind(null, M, s, I), K = (q, ne, H, ie = ka.maxLength, S = ka.minLength) => {
    const O = q ? ne : H;
    I[M] = {
      type: q ? ie : S,
      message: O,
      ref: f,
      ...ve(q ? ie : S, O)
    };
  };
  if (u ? !Array.isArray(z) || !z.length : m && (!Y && (de || sn(z)) || _n(z) && !z || W && !nE(h).isValid || k && !iE(h).isValid)) {
    const { value: q, message: ne } = zu(m) ? { value: !!m, message: m } : Zr(m);
    if (q && (I[M] = {
      type: ka.required,
      message: ne,
      ref: Z,
      ...ve(ka.required, ne)
    }, !s))
      return ee(ne), I;
  }
  if (!de && (!sn(v) || !sn(b))) {
    let q, ne;
    const H = Zr(b), ie = Zr(v);
    if (!sn(z) && !isNaN(z)) {
      const S = f.valueAsNumber || z && +z;
      sn(H.value) || (q = S > H.value), sn(ie.value) || (ne = S < ie.value);
    } else {
      const S = f.valueAsDate || new Date(z), O = (w) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + w), R = f.type == "time", ue = f.type == "week";
      oa(H.value) && z && (q = R ? O(z) > O(H.value) : ue ? z > H.value : S > new Date(H.value)), oa(ie.value) && z && (ne = R ? O(z) < O(ie.value) : ue ? z < ie.value : S < new Date(ie.value));
    }
    if ((q || ne) && (K(!!q, H.message, ie.message, ka.max, ka.min), !s))
      return ee(I[M].message), I;
  }
  if ((p || g) && !de && (oa(z) || u && Array.isArray(z))) {
    const q = Zr(p), ne = Zr(g), H = !sn(q.value) && z.length > +q.value, ie = !sn(ne.value) && z.length < +ne.value;
    if ((H || ie) && (K(H, q.message, ne.message), !s))
      return ee(I[M].message), I;
  }
  if (E && !de && oa(z)) {
    const { value: q, message: ne } = Zr(E);
    if (Yu(q) && !z.match(q) && (I[M] = {
      type: ka.pattern,
      message: ne,
      ref: f,
      ...ve(ka.pattern, ne)
    }, !s))
      return ee(ne), I;
  }
  if (_) {
    if (Qn(_)) {
      const q = await _(z, i), ne = d1(q, Z);
      if (ne && (I[M] = {
        ...ne,
        ...ve(ka.validate, ne.message)
      }, !s))
        return ee(ne.message), I;
    } else if (wt(_)) {
      let q = {};
      for (const ne in _) {
        if (!pn(q) && !s)
          break;
        const H = d1(await _[ne](z, i), Z, ne);
        H && (q = {
          ...H,
          ...ve(ne, H.message)
        }, ee(H.message), s && (I[M] = q));
      }
      if (!pn(q) && (I[M] = {
        ref: Z,
        ...q
      }, !s))
        return I;
    }
  }
  return ee(!0), I;
};
const e8 = {
  mode: Xn.onSubmit,
  reValidateMode: Xn.onChange,
  shouldFocusError: !0
};
function t8(e = {}) {
  let n = {
    ...e8,
    ...e
  }, i = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: Qn(n.defaultValues),
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
  }, s = {}, l = wt(n.defaultValues) || wt(n.values) ? $t(n.defaultValues || n.values) || {} : {}, u = n.shouldUnregister ? {} : $t(l), f = {
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
  let v = {
    ...g
  };
  const b = {
    array: a1(),
    state: a1()
  }, E = n.criteriaMode === Xn.all, _ = (C) => (B) => {
    clearTimeout(p), p = setTimeout(C, B);
  }, M = async (C) => {
    if (!n.disabled && (g.isValid || v.isValid || C)) {
      const B = n.resolver ? pn((await W()).errors) : await de(s, !0);
      B !== i.isValid && b.state.next({
        isValid: B
      });
    }
  }, N = (C, B) => {
    !n.disabled && (g.isValidating || g.validatingFields || v.isValidating || v.validatingFields) && ((C || Array.from(h.mount)).forEach((X) => {
      X && (B ? Ie(i.validatingFields, X, B) : Dt(i.validatingFields, X));
    }), b.state.next({
      validatingFields: i.validatingFields,
      isValidating: !pn(i.validatingFields)
    }));
  }, L = (C, B = [], X, he, fe = !0, ce = !0) => {
    if (he && X && !n.disabled) {
      if (f.action = !0, ce && Array.isArray(pe(s, C))) {
        const ye = X(pe(s, C), he.argA, he.argB);
        fe && Ie(s, C, ye);
      }
      if (ce && Array.isArray(pe(i.errors, C))) {
        const ye = X(pe(i.errors, C), he.argA, he.argB);
        fe && Ie(i.errors, C, ye), Jk(i.errors, C);
      }
      if ((g.touchedFields || v.touchedFields) && ce && Array.isArray(pe(i.touchedFields, C))) {
        const ye = X(pe(i.touchedFields, C), he.argA, he.argB);
        fe && Ie(i.touchedFields, C, ye);
      }
      (g.dirtyFields || v.dirtyFields) && (i.dirtyFields = po(l, u)), b.state.next({
        name: C,
        isDirty: K(C, B),
        dirtyFields: i.dirtyFields,
        errors: i.errors,
        isValid: i.isValid
      });
    } else
      Ie(u, C, B);
  }, z = (C, B) => {
    Ie(i.errors, C, B), b.state.next({
      errors: i.errors
    });
  }, Z = (C) => {
    i.errors = C, b.state.next({
      errors: i.errors,
      isValid: !1
    });
  }, ee = (C, B, X, he) => {
    const fe = pe(s, C);
    if (fe) {
      const ce = pe(u, C, St(X) ? pe(l, C) : X);
      St(ce) || he && he.defaultChecked || B ? Ie(u, C, B ? ce : o1(fe._f)) : H(C, ce), f.mount && M();
    }
  }, I = (C, B, X, he, fe) => {
    let ce = !1, ye = !1;
    const De = {
      name: C
    };
    if (!n.disabled) {
      if (!X || he) {
        (g.isDirty || v.isDirty) && (ye = i.isDirty, i.isDirty = De.isDirty = K(), ce = ye !== De.isDirty);
        const Ve = Va(pe(l, C), B);
        ye = !!pe(i.dirtyFields, C), Ve ? Dt(i.dirtyFields, C) : Ie(i.dirtyFields, C, !0), De.dirtyFields = i.dirtyFields, ce = ce || (g.dirtyFields || v.dirtyFields) && ye !== !Ve;
      }
      if (X) {
        const Ve = pe(i.touchedFields, C);
        Ve || (Ie(i.touchedFields, C, X), De.touchedFields = i.touchedFields, ce = ce || (g.touchedFields || v.touchedFields) && Ve !== X);
      }
      ce && fe && b.state.next(De);
    }
    return ce ? De : {};
  }, k = (C, B, X, he) => {
    const fe = pe(i.errors, C), ce = (g.isValid || v.isValid) && _n(B) && i.isValid !== B;
    if (n.delayError && X ? (m = _(() => z(C, X)), m(n.delayError)) : (clearTimeout(p), m = null, X ? Ie(i.errors, C, X) : Dt(i.errors, C)), (X ? !Va(fe, X) : fe) || !pn(he) || ce) {
      const ye = {
        ...he,
        ...ce && _n(B) ? { isValid: B } : {},
        errors: i.errors,
        name: C
      };
      i = {
        ...i,
        ...ye
      }, b.state.next(ye);
    }
  }, W = async (C) => {
    N(C, !0);
    const B = await n.resolver(u, n.context, Fk(C || h.mount, s, n.criteriaMode, n.shouldUseNativeValidation));
    return N(C), B;
  }, Y = async (C) => {
    const { errors: B } = await W(C);
    if (C)
      for (const X of C) {
        const he = pe(B, X);
        he ? Ie(i.errors, X, he) : Dt(i.errors, X);
      }
    else
      i.errors = B;
    return B;
  }, de = async (C, B, X = {
    valid: !0
  }) => {
    for (const he in C) {
      const fe = C[he];
      if (fe) {
        const { _f: ce, ...ye } = fe;
        if (ce) {
          const De = h.array.has(ce.name), Ve = fe._f && qk(fe._f);
          Ve && g.validatingFields && N([he], !0);
          const Ge = await h1(fe, h.disabled, u, E, n.shouldUseNativeValidation && !B, De);
          if (Ve && g.validatingFields && N([he]), Ge[ce.name] && (X.valid = !1, B))
            break;
          !B && (pe(Ge, ce.name) ? De ? Wk(i.errors, Ge, ce.name) : Ie(i.errors, ce.name, Ge[ce.name]) : Dt(i.errors, ce.name));
        }
        !pn(ye) && await de(ye, B, X);
      }
    }
    return X.valid;
  }, ve = () => {
    for (const C of h.unMount) {
      const B = pe(s, C);
      B && (B._f.refs ? B._f.refs.every((X) => !Fd(X)) : !Fd(B._f.ref)) && _e(C);
    }
    h.unMount = /* @__PURE__ */ new Set();
  }, K = (C, B) => !n.disabled && (C && B && Ie(u, C, B), !Va(w(), l)), q = (C, B, X) => Jw(C, h, {
    ...f.mount ? u : St(B) ? l : oa(C) ? { [C]: B } : B
  }, X, B), ne = (C) => Fm(pe(f.mount ? u : l, C, n.shouldUnregister ? pe(l, C, []) : [])), H = (C, B, X = {}) => {
    const he = pe(s, C);
    let fe = B;
    if (he) {
      const ce = he._f;
      ce && (!ce.disabled && Ie(u, C, aE(B, ce)), fe = Zu(ce.ref) && sn(B) ? "" : B, Ww(ce.ref) ? [...ce.ref.options].forEach((ye) => ye.selected = fe.includes(ye.value)) : ce.refs ? Fo(ce.ref) ? ce.refs.forEach((ye) => {
        (!ye.defaultChecked || !ye.disabled) && (Array.isArray(fe) ? ye.checked = !!fe.find((De) => De === ye.value) : ye.checked = fe === ye.value || !!fe);
      }) : ce.refs.forEach((ye) => ye.checked = ye.value === fe) : Qm(ce.ref) ? ce.ref.value = "" : (ce.ref.value = fe, ce.ref.type || b.state.next({
        name: C,
        values: $t(u)
      })));
    }
    (X.shouldDirty || X.shouldTouch) && I(C, fe, X.shouldTouch, X.shouldDirty, !0), X.shouldValidate && ue(C);
  }, ie = (C, B, X) => {
    for (const he in B) {
      if (!B.hasOwnProperty(he))
        return;
      const fe = B[he], ce = C + "." + he, ye = pe(s, ce);
      (h.array.has(C) || wt(fe) || ye && !ye._f) && !Yi(fe) ? ie(ce, fe, X) : H(ce, fe, X);
    }
  }, S = (C, B, X = {}) => {
    const he = pe(s, C), fe = h.array.has(C), ce = $t(B);
    Ie(u, C, ce), fe ? (b.array.next({
      name: C,
      values: $t(u)
    }), (g.isDirty || g.dirtyFields || v.isDirty || v.dirtyFields) && X.shouldDirty && b.state.next({
      name: C,
      dirtyFields: po(l, u),
      isDirty: K(C, ce)
    })) : he && !he._f && !sn(ce) ? ie(C, ce, X) : H(C, ce, X), c1(C, h) && b.state.next({ ...i, name: C }), b.state.next({
      name: f.mount ? C : void 0,
      values: $t(u)
    });
  }, O = async (C) => {
    f.mount = !0;
    const B = C.target;
    let X = B.name, he = !0;
    const fe = pe(s, X), ce = (Ve) => {
      he = Number.isNaN(Ve) || Yi(Ve) && isNaN(Ve.getTime()) || Va(Ve, pe(u, X, Ve));
    }, ye = l1(n.mode), De = l1(n.reValidateMode);
    if (fe) {
      let Ve, Ge;
      const en = B.type ? o1(fe._f) : Kw(C), tn = C.type === Hu.BLUR || C.type === Hu.FOCUS_OUT, Mn = !Kk(fe._f) && !n.resolver && !pe(i.errors, X) && !fe._f.deps || Qk(tn, pe(i.touchedFields, X), i.isSubmitted, De, ye), Dn = c1(X, h, tn);
      Ie(u, X, en), tn ? (!B || !B.readOnly) && (fe._f.onBlur && fe._f.onBlur(C), m && m(0)) : fe._f.onChange && fe._f.onChange(C);
      const At = I(X, en, tn), Rn = !pn(At) || Dn;
      if (!tn && b.state.next({
        name: X,
        type: C.type,
        values: $t(u)
      }), Mn)
        return (g.isValid || v.isValid) && (n.mode === "onBlur" ? tn && M() : tn || M()), Rn && b.state.next({ name: X, ...Dn ? {} : At });
      if (!tn && Dn && b.state.next({ ...i }), n.resolver) {
        const { errors: Jn } = await W([X]);
        if (ce(en), he) {
          const ha = f1(i.errors, s, X), La = f1(Jn, s, ha.name || X);
          Ve = La.error, X = La.name, Ge = pn(Jn);
        }
      } else
        N([X], !0), Ve = (await h1(fe, h.disabled, u, E, n.shouldUseNativeValidation))[X], N([X]), ce(en), he && (Ve ? Ge = !1 : (g.isValid || v.isValid) && (Ge = await de(s, !0)));
      he && (fe._f.deps && ue(fe._f.deps), k(X, Ge, Ve, At));
    }
  }, R = (C, B) => {
    if (pe(i.errors, B) && C.focus)
      return C.focus(), 1;
  }, ue = async (C, B = {}) => {
    let X, he;
    const fe = Mo(C);
    if (n.resolver) {
      const ce = await Y(St(C) ? C : fe);
      X = pn(ce), he = C ? !fe.some((ye) => pe(ce, ye)) : X;
    } else C ? (he = (await Promise.all(fe.map(async (ce) => {
      const ye = pe(s, ce);
      return await de(ye && ye._f ? { [ce]: ye } : ye);
    }))).every(Boolean), !(!he && !i.isValid) && M()) : he = X = await de(s);
    return b.state.next({
      ...!oa(C) || (g.isValid || v.isValid) && X !== i.isValid ? {} : { name: C },
      ...n.resolver || !C ? { isValid: X } : {},
      errors: i.errors
    }), B.shouldFocus && !he && Do(s, R, C ? fe : h.mount), he;
  }, w = (C) => {
    const B = {
      ...f.mount ? u : l
    };
    return St(C) ? B : oa(C) ? pe(B, C) : C.map((X) => pe(B, X));
  }, J = (C, B) => ({
    invalid: !!pe((B || i).errors, C),
    isDirty: !!pe((B || i).dirtyFields, C),
    error: pe((B || i).errors, C),
    isValidating: !!pe(i.validatingFields, C),
    isTouched: !!pe((B || i).touchedFields, C)
  }), oe = (C) => {
    C && Mo(C).forEach((B) => Dt(i.errors, B)), b.state.next({
      errors: C ? i.errors : {}
    });
  }, Q = (C, B, X) => {
    const he = (pe(s, C, { _f: {} })._f || {}).ref, fe = pe(i.errors, C) || {}, { ref: ce, message: ye, type: De, ...Ve } = fe;
    Ie(i.errors, C, {
      ...Ve,
      ...B,
      ref: he
    }), b.state.next({
      name: C,
      errors: i.errors,
      isValid: !1
    }), X && X.shouldFocus && he && he.focus && he.focus();
  }, le = (C, B) => Qn(C) ? b.state.subscribe({
    next: (X) => "values" in X && C(q(void 0, B), X)
  }) : q(C, B, !0), me = (C) => b.state.subscribe({
    next: (B) => {
      Xk(C.name, B.name, C.exact) && Ik(B, C.formState || g, Tt, C.reRenderRoot) && C.callback({
        values: { ...u },
        ...i,
        ...B,
        defaultValues: l
      });
    }
  }).unsubscribe, ge = (C) => (f.mount = !0, v = {
    ...v,
    ...C.formState
  }, me({
    ...C,
    formState: v
  })), _e = (C, B = {}) => {
    for (const X of C ? Mo(C) : h.mount)
      h.mount.delete(X), h.array.delete(X), B.keepValue || (Dt(s, X), Dt(u, X)), !B.keepError && Dt(i.errors, X), !B.keepDirty && Dt(i.dirtyFields, X), !B.keepTouched && Dt(i.touchedFields, X), !B.keepIsValidating && Dt(i.validatingFields, X), !n.shouldUnregister && !B.keepDefaultValue && Dt(l, X);
    b.state.next({
      values: $t(u)
    }), b.state.next({
      ...i,
      ...B.keepDirty ? { isDirty: K() } : {}
    }), !B.keepIsValid && M();
  }, Te = ({ disabled: C, name: B }) => {
    (_n(C) && f.mount || C || h.disabled.has(B)) && (C ? h.disabled.add(B) : h.disabled.delete(B));
  }, We = (C, B = {}) => {
    let X = pe(s, C);
    const he = _n(B.disabled) || _n(n.disabled);
    return Ie(s, C, {
      ...X || {},
      _f: {
        ...X && X._f ? X._f : { ref: { name: C } },
        name: C,
        mount: !0,
        ...B
      }
    }), h.mount.add(C), X ? Te({
      disabled: _n(B.disabled) ? B.disabled : n.disabled,
      name: C
    }) : ee(C, !0, B.value), {
      ...he ? { disabled: B.disabled || n.disabled } : {},
      ...n.progressive ? {
        required: !!B.required,
        min: go(B.min),
        max: go(B.max),
        minLength: go(B.minLength),
        maxLength: go(B.maxLength),
        pattern: go(B.pattern)
      } : {},
      name: C,
      onChange: O,
      onBlur: O,
      ref: (fe) => {
        if (fe) {
          We(C, B), X = pe(s, C);
          const ce = St(fe.value) && fe.querySelectorAll && fe.querySelectorAll("input,select,textarea")[0] || fe, ye = Zk(ce), De = X._f.refs || [];
          if (ye ? De.find((Ve) => Ve === ce) : ce === X._f.ref)
            return;
          Ie(s, C, {
            _f: {
              ...X._f,
              ...ye ? {
                refs: [
                  ...De.filter(Fd),
                  ce,
                  ...Array.isArray(pe(l, C)) ? [{}] : []
                ],
                ref: { type: ce.type, name: C }
              } : { ref: ce }
            }
          }), ee(C, !1, void 0, ce);
        } else
          X = pe(s, C, {}), X._f && (X._f.mount = !1), (n.shouldUnregister || B.shouldUnregister) && !(Iw(h.array, C) && f.action) && h.unMount.add(C);
      }
    };
  }, Et = () => n.shouldFocusError && Do(s, R, h.mount), lt = (C) => {
    _n(C) && (b.state.next({ disabled: C }), Do(s, (B, X) => {
      const he = pe(s, X);
      he && (B.disabled = he._f.disabled || C, Array.isArray(he._f.refs) && he._f.refs.forEach((fe) => {
        fe.disabled = he._f.disabled || C;
      }));
    }, 0, !1));
  }, it = (C, B) => async (X) => {
    let he;
    X && (X.preventDefault && X.preventDefault(), X.persist && X.persist());
    let fe = $t(u);
    if (b.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: ce, values: ye } = await W();
      i.errors = ce, fe = $t(ye);
    } else
      await de(s);
    if (h.disabled.size)
      for (const ce of h.disabled)
        Dt(fe, ce);
    if (Dt(i.errors, "root"), pn(i.errors)) {
      b.state.next({
        errors: {}
      });
      try {
        await C(fe, X);
      } catch (ce) {
        he = ce;
      }
    } else
      B && await B({ ...i.errors }, X), Et(), setTimeout(Et);
    if (b.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: pn(i.errors) && !he,
      submitCount: i.submitCount + 1,
      errors: i.errors
    }), he)
      throw he;
  }, Yt = (C, B = {}) => {
    pe(s, C) && (St(B.defaultValue) ? S(C, $t(pe(l, C))) : (S(C, B.defaultValue), Ie(l, C, $t(B.defaultValue))), B.keepTouched || Dt(i.touchedFields, C), B.keepDirty || (Dt(i.dirtyFields, C), i.isDirty = B.defaultValue ? K(C, $t(pe(l, C))) : K()), B.keepError || (Dt(i.errors, C), g.isValid && M()), b.state.next({ ...i }));
  }, un = (C, B = {}) => {
    const X = C ? $t(C) : l, he = $t(X), fe = pn(C), ce = fe ? l : he;
    if (B.keepDefaultValues || (l = X), !B.keepValues) {
      if (B.keepDirtyValues) {
        const ye = /* @__PURE__ */ new Set([
          ...h.mount,
          ...Object.keys(po(l, u))
        ]);
        for (const De of Array.from(ye))
          pe(i.dirtyFields, De) ? Ie(ce, De, pe(u, De)) : S(De, pe(ce, De));
      } else {
        if (Ym && St(C))
          for (const ye of h.mount) {
            const De = pe(s, ye);
            if (De && De._f) {
              const Ve = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
              if (Zu(Ve)) {
                const Ge = Ve.closest("form");
                if (Ge) {
                  Ge.reset();
                  break;
                }
              }
            }
          }
        if (B.keepFieldsRef)
          for (const ye of h.mount)
            S(ye, pe(ce, ye));
        else
          s = {};
      }
      u = n.shouldUnregister ? B.keepDefaultValues ? $t(l) : {} : $t(ce), b.array.next({
        values: { ...ce }
      }), b.state.next({
        values: { ...ce }
      });
    }
    h = {
      mount: B.keepDirtyValues ? h.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, f.mount = !g.isValid || !!B.keepIsValid || !!B.keepDirtyValues, f.watch = !!n.shouldUnregister, b.state.next({
      submitCount: B.keepSubmitCount ? i.submitCount : 0,
      isDirty: fe ? !1 : B.keepDirty ? i.isDirty : !!(B.keepDefaultValues && !Va(C, l)),
      isSubmitted: B.keepIsSubmitted ? i.isSubmitted : !1,
      dirtyFields: fe ? {} : B.keepDirtyValues ? B.keepDefaultValues && u ? po(l, u) : i.dirtyFields : B.keepDefaultValues && C ? po(l, C) : B.keepDirty ? i.dirtyFields : {},
      touchedFields: B.keepTouched ? i.touchedFields : {},
      errors: B.keepErrors ? i.errors : {},
      isSubmitSuccessful: B.keepIsSubmitSuccessful ? i.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: l
    });
  }, Na = (C, B) => un(Qn(C) ? C(u) : C, B), ja = (C, B = {}) => {
    const X = pe(s, C), he = X && X._f;
    if (he) {
      const fe = he.refs ? he.refs[0] : he.ref;
      fe.focus && (fe.focus(), B.shouldSelect && Qn(fe.select) && fe.select());
    }
  }, Tt = (C) => {
    i = {
      ...i,
      ...C
    };
  }, jt = {
    control: {
      register: We,
      unregister: _e,
      getFieldState: J,
      handleSubmit: it,
      setError: Q,
      _subscribe: me,
      _runSchema: W,
      _focusError: Et,
      _getWatch: q,
      _getDirty: K,
      _setValid: M,
      _setFieldArray: L,
      _setDisabledField: Te,
      _setErrors: Z,
      _getFieldArray: ne,
      _reset: un,
      _resetDefaultValues: () => Qn(n.defaultValues) && n.defaultValues().then((C) => {
        Na(C, n.resetOptions), b.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: ve,
      _disableForm: lt,
      _subjects: b,
      _proxyFormState: g,
      get _fields() {
        return s;
      },
      get _formValues() {
        return u;
      },
      get _state() {
        return f;
      },
      set _state(C) {
        f = C;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return h;
      },
      set _names(C) {
        h = C;
      },
      get _formState() {
        return i;
      },
      get _options() {
        return n;
      },
      set _options(C) {
        n = {
          ...n,
          ...C
        };
      }
    },
    subscribe: ge,
    trigger: ue,
    register: We,
    handleSubmit: it,
    watch: le,
    setValue: S,
    getValues: w,
    reset: Na,
    resetField: Yt,
    clearErrors: oe,
    unregister: _e,
    setError: Q,
    setFocus: ja,
    getFieldState: J
  };
  return {
    ...jt,
    formControl: jt
  };
}
function m1(e = {}) {
  const n = j.useRef(void 0), i = j.useRef(void 0), [s, l] = j.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Qn(e.defaultValues),
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
    defaultValues: Qn(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!n.current)
    if (e.formControl)
      n.current = {
        ...e.formControl,
        formState: s
      }, e.defaultValues && !Qn(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: f, ...h } = t8(e);
      n.current = {
        ...h,
        formState: s
      };
    }
  const u = n.current.control;
  return u._options = e, Im(() => {
    const f = u._subscribe({
      formState: u._proxyFormState,
      callback: () => l({ ...u._formState }),
      reRenderRoot: !0
    });
    return l((h) => ({
      ...h,
      isReady: !0
    })), u._formState.isReady = !0, f;
  }, [u]), j.useEffect(() => u._disableForm(e.disabled), [u, e.disabled]), j.useEffect(() => {
    e.mode && (u._options.mode = e.mode), e.reValidateMode && (u._options.reValidateMode = e.reValidateMode);
  }, [u, e.mode, e.reValidateMode]), j.useEffect(() => {
    e.errors && (u._setErrors(e.errors), u._focusError());
  }, [u, e.errors]), j.useEffect(() => {
    e.shouldUnregister && u._subjects.state.next({
      values: u._getWatch()
    });
  }, [u, e.shouldUnregister]), j.useEffect(() => {
    if (u._proxyFormState.isDirty) {
      const f = u._getDirty();
      f !== s.isDirty && u._subjects.state.next({
        isDirty: f
      });
    }
  }, [u, s.isDirty]), j.useEffect(() => {
    e.values && !Va(e.values, i.current) ? (u._reset(e.values, {
      keepFieldsRef: !0,
      ...u._options.resetOptions
    }), i.current = e.values, l((f) => ({ ...f }))) : u._resetDefaultValues();
  }, [u, e.values]), j.useEffect(() => {
    u._state.mount || (u._setValid(), u._state.mount = !0), u._state.watch && (u._state.watch = !1, u._subjects.state.next({ ...u._formState })), u._removeUnmounted();
  }), n.current.formState = Xw(s, u), n.current;
}
const p1 = (e, n, i) => {
  if (e && "reportValidity" in e) {
    const s = pe(i, n);
    e.setCustomValidity(s && s.message || ""), e.reportValidity();
  }
}, qh = (e, n) => {
  for (const i in n.fields) {
    const s = n.fields[i];
    s && s.ref && "reportValidity" in s.ref ? p1(s.ref, i, e) : s && s.refs && s.refs.forEach((l) => p1(l, i, e));
  }
}, g1 = (e, n) => {
  n.shouldUseNativeValidation && qh(e, n);
  const i = {};
  for (const s in e) {
    const l = pe(n.fields, s), u = Object.assign(e[s] || {}, { ref: l && l.ref });
    if (n8(n.names || Object.keys(e), s)) {
      const f = Object.assign({}, pe(i, s));
      Ie(f, "root", u), Ie(i, s, f);
    } else Ie(i, s, u);
  }
  return i;
}, n8 = (e, n) => {
  const i = v1(n);
  return e.some((s) => v1(s).match(`^${i}\\.\\d+`));
};
function v1(e) {
  return e.replace(/\]|\[/g, "");
}
function y1(e, n) {
  try {
    var i = e();
  } catch (s) {
    return n(s);
  }
  return i && i.then ? i.then(void 0, n) : i;
}
function a8(e, n) {
  for (var i = {}; e.length; ) {
    var s = e[0], l = s.code, u = s.message, f = s.path.join(".");
    if (!i[f]) if ("unionErrors" in s) {
      var h = s.unionErrors[0].errors[0];
      i[f] = { message: h.message, type: h.code };
    } else i[f] = { message: u, type: l };
    if ("unionErrors" in s && s.unionErrors.forEach(function(g) {
      return g.errors.forEach(function(v) {
        return e.push(v);
      });
    }), n) {
      var m = i[f].types, p = m && m[s.code];
      i[f] = Xm(f, n, i, l, p ? [].concat(p, s.message) : s.message);
    }
    e.shift();
  }
  return i;
}
function i8(e, n) {
  for (var i = {}; e.length; ) {
    var s = e[0], l = s.code, u = s.message, f = s.path.join(".");
    if (!i[f]) if (s.code === "invalid_union" && s.errors.length > 0) {
      var h = s.errors[0][0];
      i[f] = { message: h.message, type: h.code };
    } else i[f] = { message: u, type: l };
    if (s.code === "invalid_union" && s.errors.forEach(function(g) {
      return g.forEach(function(v) {
        return e.push(v);
      });
    }), n) {
      var m = i[f].types, p = m && m[s.code];
      i[f] = Xm(f, n, i, l, p ? [].concat(p, s.message) : s.message);
    }
    e.shift();
  }
  return i;
}
function b1(e, n, i) {
  if (i === void 0 && (i = {}), function(s) {
    return "_def" in s && typeof s._def == "object" && "typeName" in s._def;
  }(e)) return function(s, l, u) {
    try {
      return Promise.resolve(y1(function() {
        return Promise.resolve(e[i.mode === "sync" ? "parse" : "parseAsync"](s, n)).then(function(f) {
          return u.shouldUseNativeValidation && qh({}, u), { errors: {}, values: i.raw ? Object.assign({}, s) : f };
        });
      }, function(f) {
        if (function(h) {
          return Array.isArray(h?.issues);
        }(f)) return { values: {}, errors: g1(a8(f.errors, !u.shouldUseNativeValidation && u.criteriaMode === "all"), u) };
        throw f;
      }));
    } catch (f) {
      return Promise.reject(f);
    }
  };
  if (function(s) {
    return "_zod" in s && typeof s._zod == "object";
  }(e)) return function(s, l, u) {
    try {
      return Promise.resolve(y1(function() {
        return Promise.resolve((i.mode === "sync" ? vD : yD)(e, s, n)).then(function(f) {
          return u.shouldUseNativeValidation && qh({}, u), { errors: {}, values: i.raw ? Object.assign({}, s) : f };
        });
      }, function(f) {
        if (function(h) {
          return h instanceof Zm;
        }(f)) return { values: {}, errors: g1(i8(f.issues, !u.shouldUseNativeValidation && u.criteriaMode === "all"), u) };
        throw f;
      }));
    } catch (f) {
      return Promise.reject(f);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
const x1 = Uk, rE = A.createContext(
  {}
), Gr = ({
  ...e
}) => /* @__PURE__ */ $.jsx(rE.Provider, { value: { name: e.name }, children: /* @__PURE__ */ $.jsx(Hk, { ...e }) }), r8 = () => {
  const e = A.useContext(rE), n = A.useContext(sE), { getFieldState: i } = rc(), s = Qw({ name: e.name }), l = i(e.name, s);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: u } = n;
  return {
    id: u,
    name: e.name,
    formItemId: `${u}-form-item`,
    formDescriptionId: `${u}-form-item-description`,
    formMessageId: `${u}-form-item-message`,
    ...l
  };
}, sE = A.createContext(
  {}
);
function Yr({ className: e, ...n }) {
  const i = A.useId();
  return /* @__PURE__ */ $.jsx(sE.Provider, { value: { id: i }, children: /* @__PURE__ */ $.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: vi("grid gap-2", e),
      ...n
    }
  ) });
}
function Fr({ ...e }) {
  const { error: n, formItemId: i, formDescriptionId: s, formMessageId: l } = r8();
  return /* @__PURE__ */ $.jsx(
    Lx,
    {
      "data-slot": "form-control",
      id: i,
      "aria-describedby": n ? `${s} ${l}` : `${s}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function s8(e) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
  i.type = "text/css", n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
}
const o8 = (e) => {
  switch (e) {
    case "success":
      return c8;
    case "info":
      return d8;
    case "warning":
      return f8;
    case "error":
      return h8;
    default:
      return null;
  }
}, l8 = Array(12).fill(0), u8 = ({ visible: e, className: n }) => /* @__PURE__ */ j.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    n
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ j.createElement("div", {
  className: "sonner-spinner"
}, l8.map((i, s) => /* @__PURE__ */ j.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${s}`
})))), c8 = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ j.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), f8 = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ j.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), d8 = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ j.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), h8 = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ j.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), m8 = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ j.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ j.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), p8 = () => {
  const [e, n] = j.useState(document.hidden);
  return j.useEffect(() => {
    const i = () => {
      n(document.hidden);
    };
    return document.addEventListener("visibilitychange", i), () => window.removeEventListener("visibilitychange", i);
  }, []), e;
};
let Kh = 1;
class g8 {
  constructor() {
    this.subscribe = (n) => (this.subscribers.push(n), () => {
      const i = this.subscribers.indexOf(n);
      this.subscribers.splice(i, 1);
    }), this.publish = (n) => {
      this.subscribers.forEach((i) => i(n));
    }, this.addToast = (n) => {
      this.publish(n), this.toasts = [
        ...this.toasts,
        n
      ];
    }, this.create = (n) => {
      var i;
      const { message: s, ...l } = n, u = typeof n?.id == "number" || ((i = n.id) == null ? void 0 : i.length) > 0 ? n.id : Kh++, f = this.toasts.find((m) => m.id === u), h = n.dismissible === void 0 ? !0 : n.dismissible;
      return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((m) => m.id === u ? (this.publish({
        ...m,
        ...n,
        id: u,
        title: s
      }), {
        ...m,
        ...n,
        id: u,
        dismissible: h,
        title: s
      }) : m) : this.addToast({
        title: s,
        ...l,
        dismissible: h,
        id: u
      }), u;
    }, this.dismiss = (n) => (n ? (this.dismissedToasts.add(n), requestAnimationFrame(() => this.subscribers.forEach((i) => i({
      id: n,
      dismiss: !0
    })))) : this.toasts.forEach((i) => {
      this.subscribers.forEach((s) => s({
        id: i.id,
        dismiss: !0
      }));
    }), n), this.message = (n, i) => this.create({
      ...i,
      message: n
    }), this.error = (n, i) => this.create({
      ...i,
      message: n,
      type: "error"
    }), this.success = (n, i) => this.create({
      ...i,
      type: "success",
      message: n
    }), this.info = (n, i) => this.create({
      ...i,
      type: "info",
      message: n
    }), this.warning = (n, i) => this.create({
      ...i,
      type: "warning",
      message: n
    }), this.loading = (n, i) => this.create({
      ...i,
      type: "loading",
      message: n
    }), this.promise = (n, i) => {
      if (!i)
        return;
      let s;
      i.loading !== void 0 && (s = this.create({
        ...i,
        promise: n,
        type: "loading",
        message: i.loading,
        description: typeof i.description != "function" ? i.description : void 0
      }));
      const l = Promise.resolve(n instanceof Function ? n() : n);
      let u = s !== void 0, f;
      const h = l.then(async (p) => {
        if (f = [
          "resolve",
          p
        ], j.isValidElement(p))
          u = !1, this.create({
            id: s,
            type: "default",
            message: p
          });
        else if (y8(p) && !p.ok) {
          u = !1;
          const v = typeof i.error == "function" ? await i.error(`HTTP error! status: ${p.status}`) : i.error, b = typeof i.description == "function" ? await i.description(`HTTP error! status: ${p.status}`) : i.description, _ = typeof v == "object" && !j.isValidElement(v) ? v : {
            message: v
          };
          this.create({
            id: s,
            type: "error",
            description: b,
            ..._
          });
        } else if (p instanceof Error) {
          u = !1;
          const v = typeof i.error == "function" ? await i.error(p) : i.error, b = typeof i.description == "function" ? await i.description(p) : i.description, _ = typeof v == "object" && !j.isValidElement(v) ? v : {
            message: v
          };
          this.create({
            id: s,
            type: "error",
            description: b,
            ..._
          });
        } else if (i.success !== void 0) {
          u = !1;
          const v = typeof i.success == "function" ? await i.success(p) : i.success, b = typeof i.description == "function" ? await i.description(p) : i.description, _ = typeof v == "object" && !j.isValidElement(v) ? v : {
            message: v
          };
          this.create({
            id: s,
            type: "success",
            description: b,
            ..._
          });
        }
      }).catch(async (p) => {
        if (f = [
          "reject",
          p
        ], i.error !== void 0) {
          u = !1;
          const g = typeof i.error == "function" ? await i.error(p) : i.error, v = typeof i.description == "function" ? await i.description(p) : i.description, E = typeof g == "object" && !j.isValidElement(g) ? g : {
            message: g
          };
          this.create({
            id: s,
            type: "error",
            description: v,
            ...E
          });
        }
      }).finally(() => {
        u && (this.dismiss(s), s = void 0), i.finally == null || i.finally.call(i);
      }), m = () => new Promise((p, g) => h.then(() => f[0] === "reject" ? g(f[1]) : p(f[1])).catch(g));
      return typeof s != "string" && typeof s != "number" ? {
        unwrap: m
      } : Object.assign(s, {
        unwrap: m
      });
    }, this.custom = (n, i) => {
      const s = i?.id || Kh++;
      return this.create({
        jsx: n(s),
        id: s,
        ...i
      }), s;
    }, this.getActiveToasts = () => this.toasts.filter((n) => !this.dismissedToasts.has(n.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const gn = new g8(), v8 = (e, n) => {
  const i = n?.id || Kh++;
  return gn.addToast({
    title: e,
    ...n,
    id: i
  }), i;
}, y8 = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", b8 = v8, x8 = () => gn.toasts, S8 = () => gn.getActiveToasts(), rn = Object.assign(b8, {
  success: gn.success,
  info: gn.info,
  warning: gn.warning,
  error: gn.error,
  custom: gn.custom,
  message: gn.message,
  promise: gn.promise,
  dismiss: gn.dismiss,
  loading: gn.loading
}, {
  getHistory: x8,
  getToasts: S8
});
s8("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function wu(e) {
  return e.label !== void 0;
}
const w8 = 3, E8 = "24px", T8 = "16px", S1 = 4e3, A8 = 356, _8 = 14, C8 = 45, M8 = 200;
function ra(...e) {
  return e.filter(Boolean).join(" ");
}
function D8(e) {
  const [n, i] = e.split("-"), s = [];
  return n && s.push(n), i && s.push(i), s;
}
const R8 = (e) => {
  var n, i, s, l, u, f, h, m, p;
  const { invert: g, toast: v, unstyled: b, interacting: E, setHeights: _, visibleToasts: M, heights: N, index: L, toasts: z, expanded: Z, removeToast: ee, defaultRichColors: I, closeButton: k, style: W, cancelButtonStyle: Y, actionButtonStyle: de, className: ve = "", descriptionClassName: K = "", duration: q, position: ne, gap: H, expandByDefault: ie, classNames: S, icons: O, closeButtonAriaLabel: R = "Close toast" } = e, [ue, w] = j.useState(null), [J, oe] = j.useState(null), [Q, le] = j.useState(!1), [me, ge] = j.useState(!1), [_e, Te] = j.useState(!1), [We, Et] = j.useState(!1), [lt, it] = j.useState(!1), [Yt, un] = j.useState(0), [Na, ja] = j.useState(0), Tt = j.useRef(v.duration || q || S1), Cn = j.useRef(null), jt = j.useRef(null), C = L === 0, B = L + 1 <= M, X = v.type, he = v.dismissible !== !1, fe = v.className || "", ce = v.descriptionClassName || "", ye = j.useMemo(() => N.findIndex((Oe) => Oe.toastId === v.id) || 0, [
    N,
    v.id
  ]), De = j.useMemo(() => {
    var Oe;
    return (Oe = v.closeButton) != null ? Oe : k;
  }, [
    v.closeButton,
    k
  ]), Ve = j.useMemo(() => v.duration || q || S1, [
    v.duration,
    q
  ]), Ge = j.useRef(0), en = j.useRef(0), tn = j.useRef(0), Mn = j.useRef(null), [Dn, At] = ne.split("-"), Rn = j.useMemo(() => N.reduce((Oe, pt, _t) => _t >= ye ? Oe : Oe + pt.height, 0), [
    N,
    ye
  ]), Jn = p8(), ha = v.invert || g, La = X === "loading";
  en.current = j.useMemo(() => ye * H + Rn, [
    ye,
    Rn
  ]), j.useEffect(() => {
    Tt.current = Ve;
  }, [
    Ve
  ]), j.useEffect(() => {
    le(!0);
  }, []), j.useEffect(() => {
    const Oe = jt.current;
    if (Oe) {
      const pt = Oe.getBoundingClientRect().height;
      return ja(pt), _((_t) => [
        {
          toastId: v.id,
          height: pt,
          position: v.position
        },
        ..._t
      ]), () => _((_t) => _t.filter((Ft) => Ft.toastId !== v.id));
    }
  }, [
    _,
    v.id
  ]), j.useLayoutEffect(() => {
    if (!Q) return;
    const Oe = jt.current, pt = Oe.style.height;
    Oe.style.height = "auto";
    const _t = Oe.getBoundingClientRect().height;
    Oe.style.height = pt, ja(_t), _((Ft) => Ft.find((zt) => zt.toastId === v.id) ? Ft.map((zt) => zt.toastId === v.id ? {
      ...zt,
      height: _t
    } : zt) : [
      {
        toastId: v.id,
        height: _t,
        position: v.position
      },
      ...Ft
    ]);
  }, [
    Q,
    v.title,
    v.description,
    _,
    v.id,
    v.jsx,
    v.action,
    v.cancel
  ]);
  const Yn = j.useCallback(() => {
    ge(!0), un(en.current), _((Oe) => Oe.filter((pt) => pt.toastId !== v.id)), setTimeout(() => {
      ee(v);
    }, M8);
  }, [
    v,
    ee,
    _,
    en
  ]);
  j.useEffect(() => {
    if (v.promise && X === "loading" || v.duration === 1 / 0 || v.type === "loading") return;
    let Oe;
    return Z || E || Jn ? (() => {
      if (tn.current < Ge.current) {
        const Ft = (/* @__PURE__ */ new Date()).getTime() - Ge.current;
        Tt.current = Tt.current - Ft;
      }
      tn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      Tt.current !== 1 / 0 && (Ge.current = (/* @__PURE__ */ new Date()).getTime(), Oe = setTimeout(() => {
        v.onAutoClose == null || v.onAutoClose.call(v, v), Yn();
      }, Tt.current));
    })(), () => clearTimeout(Oe);
  }, [
    Z,
    E,
    v,
    X,
    Jn,
    Yn
  ]), j.useEffect(() => {
    v.delete && (Yn(), v.onDismiss == null || v.onDismiss.call(v, v));
  }, [
    Yn,
    v.delete
  ]);
  function qo() {
    var Oe;
    if (O?.loading) {
      var pt;
      return /* @__PURE__ */ j.createElement("div", {
        className: ra(S?.loader, v == null || (pt = v.classNames) == null ? void 0 : pt.loader, "sonner-loader"),
        "data-visible": X === "loading"
      }, O.loading);
    }
    return /* @__PURE__ */ j.createElement(u8, {
      className: ra(S?.loader, v == null || (Oe = v.classNames) == null ? void 0 : Oe.loader),
      visible: X === "loading"
    });
  }
  const ms = v.icon || O?.[X] || o8(X);
  var Ua, Ko;
  return /* @__PURE__ */ j.createElement("li", {
    tabIndex: 0,
    ref: jt,
    className: ra(ve, fe, S?.toast, v == null || (n = v.classNames) == null ? void 0 : n.toast, S?.default, S?.[X], v == null || (i = v.classNames) == null ? void 0 : i[X]),
    "data-sonner-toast": "",
    "data-rich-colors": (Ua = v.richColors) != null ? Ua : I,
    "data-styled": !(v.jsx || v.unstyled || b),
    "data-mounted": Q,
    "data-promise": !!v.promise,
    "data-swiped": lt,
    "data-removed": me,
    "data-visible": B,
    "data-y-position": Dn,
    "data-x-position": At,
    "data-index": L,
    "data-front": C,
    "data-swiping": _e,
    "data-dismissible": he,
    "data-type": X,
    "data-invert": ha,
    "data-swipe-out": We,
    "data-swipe-direction": J,
    "data-expanded": !!(Z || ie && Q),
    "data-testid": v.testId,
    style: {
      "--index": L,
      "--toasts-before": L,
      "--z-index": z.length - L,
      "--offset": `${me ? Yt : en.current}px`,
      "--initial-height": ie ? "auto" : `${Na}px`,
      ...W,
      ...v.style
    },
    onDragEnd: () => {
      Te(!1), w(null), Mn.current = null;
    },
    onPointerDown: (Oe) => {
      Oe.button !== 2 && (La || !he || (Cn.current = /* @__PURE__ */ new Date(), un(en.current), Oe.target.setPointerCapture(Oe.pointerId), Oe.target.tagName !== "BUTTON" && (Te(!0), Mn.current = {
        x: Oe.clientX,
        y: Oe.clientY
      })));
    },
    onPointerUp: () => {
      var Oe, pt, _t;
      if (We || !he) return;
      Mn.current = null;
      const Ft = Number(((Oe = jt.current) == null ? void 0 : Oe.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), bi = Number(((pt = jt.current) == null ? void 0 : pt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), zt = (/* @__PURE__ */ new Date()).getTime() - ((_t = Cn.current) == null ? void 0 : _t.getTime()), gt = ue === "x" ? Ft : bi, vt = Math.abs(gt) / zt;
      if (Math.abs(gt) >= C8 || vt > 0.11) {
        un(en.current), v.onDismiss == null || v.onDismiss.call(v, v), oe(ue === "x" ? Ft > 0 ? "right" : "left" : bi > 0 ? "down" : "up"), Yn(), Et(!0);
        return;
      } else {
        var tt, Lt;
        (tt = jt.current) == null || tt.style.setProperty("--swipe-amount-x", "0px"), (Lt = jt.current) == null || Lt.style.setProperty("--swipe-amount-y", "0px");
      }
      it(!1), Te(!1), w(null);
    },
    onPointerMove: (Oe) => {
      var pt, _t, Ft;
      if (!Mn.current || !he || ((pt = window.getSelection()) == null ? void 0 : pt.toString().length) > 0) return;
      const zt = Oe.clientY - Mn.current.y, gt = Oe.clientX - Mn.current.x;
      var vt;
      const tt = (vt = e.swipeDirections) != null ? vt : D8(ne);
      !ue && (Math.abs(gt) > 1 || Math.abs(zt) > 1) && w(Math.abs(gt) > Math.abs(zt) ? "x" : "y");
      let Lt = {
        x: 0,
        y: 0
      };
      const tr = (ma) => 1 / (1.5 + Math.abs(ma) / 20);
      if (ue === "y") {
        if (tt.includes("top") || tt.includes("bottom"))
          if (tt.includes("top") && zt < 0 || tt.includes("bottom") && zt > 0)
            Lt.y = zt;
          else {
            const ma = zt * tr(zt);
            Lt.y = Math.abs(ma) < Math.abs(zt) ? ma : zt;
          }
      } else if (ue === "x" && (tt.includes("left") || tt.includes("right")))
        if (tt.includes("left") && gt < 0 || tt.includes("right") && gt > 0)
          Lt.x = gt;
        else {
          const ma = gt * tr(gt);
          Lt.x = Math.abs(ma) < Math.abs(gt) ? ma : gt;
        }
      (Math.abs(Lt.x) > 0 || Math.abs(Lt.y) > 0) && it(!0), (_t = jt.current) == null || _t.style.setProperty("--swipe-amount-x", `${Lt.x}px`), (Ft = jt.current) == null || Ft.style.setProperty("--swipe-amount-y", `${Lt.y}px`);
    }
  }, De && !v.jsx && X !== "loading" ? /* @__PURE__ */ j.createElement("button", {
    "aria-label": R,
    "data-disabled": La,
    "data-close-button": !0,
    onClick: La || !he ? () => {
    } : () => {
      Yn(), v.onDismiss == null || v.onDismiss.call(v, v);
    },
    className: ra(S?.closeButton, v == null || (s = v.classNames) == null ? void 0 : s.closeButton)
  }, (Ko = O?.close) != null ? Ko : m8) : null, (X || v.icon || v.promise) && v.icon !== null && (O?.[X] !== null || v.icon) ? /* @__PURE__ */ j.createElement("div", {
    "data-icon": "",
    className: ra(S?.icon, v == null || (l = v.classNames) == null ? void 0 : l.icon)
  }, v.promise || v.type === "loading" && !v.icon ? v.icon || qo() : null, v.type !== "loading" ? ms : null) : null, /* @__PURE__ */ j.createElement("div", {
    "data-content": "",
    className: ra(S?.content, v == null || (u = v.classNames) == null ? void 0 : u.content)
  }, /* @__PURE__ */ j.createElement("div", {
    "data-title": "",
    className: ra(S?.title, v == null || (f = v.classNames) == null ? void 0 : f.title)
  }, v.jsx ? v.jsx : typeof v.title == "function" ? v.title() : v.title), v.description ? /* @__PURE__ */ j.createElement("div", {
    "data-description": "",
    className: ra(K, ce, S?.description, v == null || (h = v.classNames) == null ? void 0 : h.description)
  }, typeof v.description == "function" ? v.description() : v.description) : null), /* @__PURE__ */ j.isValidElement(v.cancel) ? v.cancel : v.cancel && wu(v.cancel) ? /* @__PURE__ */ j.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: v.cancelButtonStyle || Y,
    onClick: (Oe) => {
      wu(v.cancel) && he && (v.cancel.onClick == null || v.cancel.onClick.call(v.cancel, Oe), Yn());
    },
    className: ra(S?.cancelButton, v == null || (m = v.classNames) == null ? void 0 : m.cancelButton)
  }, v.cancel.label) : null, /* @__PURE__ */ j.isValidElement(v.action) ? v.action : v.action && wu(v.action) ? /* @__PURE__ */ j.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: v.actionButtonStyle || de,
    onClick: (Oe) => {
      wu(v.action) && (v.action.onClick == null || v.action.onClick.call(v.action, Oe), !Oe.defaultPrevented && Yn());
    },
    className: ra(S?.actionButton, v == null || (p = v.classNames) == null ? void 0 : p.actionButton)
  }, v.action.label) : null);
};
function w1() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function z8(e, n) {
  const i = {};
  return [
    e,
    n
  ].forEach((s, l) => {
    const u = l === 1, f = u ? "--mobile-offset" : "--offset", h = u ? T8 : E8;
    function m(p) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((g) => {
        i[`${f}-${g}`] = typeof p == "number" ? `${p}px` : p;
      });
    }
    typeof s == "number" || typeof s == "string" ? m(s) : typeof s == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((p) => {
      s[p] === void 0 ? i[`${f}-${p}`] = h : i[`${f}-${p}`] = typeof s[p] == "number" ? `${s[p]}px` : s[p];
    }) : m(h);
  }), i;
}
const k8 = /* @__PURE__ */ j.forwardRef(function(n, i) {
  const { id: s, invert: l, position: u = "bottom-right", hotkey: f = [
    "altKey",
    "KeyT"
  ], expand: h, closeButton: m, className: p, offset: g, mobileOffset: v, theme: b = "light", richColors: E, duration: _, style: M, visibleToasts: N = w8, toastOptions: L, dir: z = w1(), gap: Z = _8, icons: ee, containerAriaLabel: I = "Notifications" } = n, [k, W] = j.useState([]), Y = j.useMemo(() => s ? k.filter((Q) => Q.toasterId === s) : k.filter((Q) => !Q.toasterId), [
    k,
    s
  ]), de = j.useMemo(() => Array.from(new Set([
    u
  ].concat(Y.filter((Q) => Q.position).map((Q) => Q.position)))), [
    Y,
    u
  ]), [ve, K] = j.useState([]), [q, ne] = j.useState(!1), [H, ie] = j.useState(!1), [S, O] = j.useState(b !== "system" ? b : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), R = j.useRef(null), ue = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = j.useRef(null), J = j.useRef(!1), oe = j.useCallback((Q) => {
    W((le) => {
      var me;
      return (me = le.find((ge) => ge.id === Q.id)) != null && me.delete || gn.dismiss(Q.id), le.filter(({ id: ge }) => ge !== Q.id);
    });
  }, []);
  return j.useEffect(() => gn.subscribe((Q) => {
    if (Q.dismiss) {
      requestAnimationFrame(() => {
        W((le) => le.map((me) => me.id === Q.id ? {
          ...me,
          delete: !0
        } : me));
      });
      return;
    }
    setTimeout(() => {
      wA.flushSync(() => {
        W((le) => {
          const me = le.findIndex((ge) => ge.id === Q.id);
          return me !== -1 ? [
            ...le.slice(0, me),
            {
              ...le[me],
              ...Q
            },
            ...le.slice(me + 1)
          ] : [
            Q,
            ...le
          ];
        });
      });
    });
  }), [
    k
  ]), j.useEffect(() => {
    if (b !== "system") {
      O(b);
      return;
    }
    if (b === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? O("dark") : O("light")), typeof window > "u") return;
    const Q = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      Q.addEventListener("change", ({ matches: le }) => {
        O(le ? "dark" : "light");
      });
    } catch {
      Q.addListener(({ matches: me }) => {
        try {
          O(me ? "dark" : "light");
        } catch (ge) {
          console.error(ge);
        }
      });
    }
  }, [
    b
  ]), j.useEffect(() => {
    k.length <= 1 && ne(!1);
  }, [
    k
  ]), j.useEffect(() => {
    const Q = (le) => {
      var me;
      if (f.every((Te) => le[Te] || le.code === Te)) {
        var _e;
        ne(!0), (_e = R.current) == null || _e.focus();
      }
      le.code === "Escape" && (document.activeElement === R.current || (me = R.current) != null && me.contains(document.activeElement)) && ne(!1);
    };
    return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
  }, [
    f
  ]), j.useEffect(() => {
    if (R.current)
      return () => {
        w.current && (w.current.focus({
          preventScroll: !0
        }), w.current = null, J.current = !1);
      };
  }, [
    R.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ j.createElement("section", {
    ref: i,
    "aria-label": `${I} ${ue}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, de.map((Q, le) => {
    var me;
    const [ge, _e] = Q.split("-");
    return Y.length ? /* @__PURE__ */ j.createElement("ol", {
      key: Q,
      dir: z === "auto" ? w1() : z,
      tabIndex: -1,
      ref: R,
      className: p,
      "data-sonner-toaster": !0,
      "data-sonner-theme": S,
      "data-y-position": ge,
      "data-x-position": _e,
      style: {
        "--front-toast-height": `${((me = ve[0]) == null ? void 0 : me.height) || 0}px`,
        "--width": `${A8}px`,
        "--gap": `${Z}px`,
        ...M,
        ...z8(g, v)
      },
      onBlur: (Te) => {
        J.current && !Te.currentTarget.contains(Te.relatedTarget) && (J.current = !1, w.current && (w.current.focus({
          preventScroll: !0
        }), w.current = null));
      },
      onFocus: (Te) => {
        Te.target instanceof HTMLElement && Te.target.dataset.dismissible === "false" || J.current || (J.current = !0, w.current = Te.relatedTarget);
      },
      onMouseEnter: () => ne(!0),
      onMouseMove: () => ne(!0),
      onMouseLeave: () => {
        H || ne(!1);
      },
      onDragEnd: () => ne(!1),
      onPointerDown: (Te) => {
        Te.target instanceof HTMLElement && Te.target.dataset.dismissible === "false" || ie(!0);
      },
      onPointerUp: () => ie(!1)
    }, Y.filter((Te) => !Te.position && le === 0 || Te.position === Q).map((Te, We) => {
      var Et, lt;
      return /* @__PURE__ */ j.createElement(R8, {
        key: Te.id,
        icons: ee,
        index: We,
        toast: Te,
        defaultRichColors: E,
        duration: (Et = L?.duration) != null ? Et : _,
        className: L?.className,
        descriptionClassName: L?.descriptionClassName,
        invert: l,
        visibleToasts: N,
        closeButton: (lt = L?.closeButton) != null ? lt : m,
        interacting: H,
        position: Q,
        style: L?.style,
        unstyled: L?.unstyled,
        classNames: L?.classNames,
        cancelButtonStyle: L?.cancelButtonStyle,
        actionButtonStyle: L?.actionButtonStyle,
        closeButtonAriaLabel: L?.closeButtonAriaLabel,
        removeToast: oe,
        toasts: Y.filter((it) => it.position == Te.position),
        heights: ve.filter((it) => it.position == Te.position),
        setHeights: K,
        expandByDefault: h,
        gap: Z,
        expanded: q,
        swipeDirections: n.swipeDirections
      });
    })) : null;
  }));
}), O8 = "/bg_alt.jpeg", V8 = "/nightlogo.png", $8 = Zw({
  email: Hw("Invalid email address"),
  password: Gh().min(8, "Password must be at least 8 characters")
}), N8 = Zw({
  username: Gh().min(4, "Username must be at least 4 characters"),
  email: Hw("Invalid email address"),
  password: Gh().min(8, "Password must be at least 8 characters"),
  avatar: Nk(File).refine((e) => {
    if (!e) return !1;
    const n = 2 * 1024 * 1024, i = 1024;
    if (e.size > n) return !1;
    const s = new Image();
    return s.src = URL.createObjectURL(e), new Promise((l) => {
      s.onload = () => {
        l(s.width <= i && s.height <= i);
      }, s.onerror = () => l(!1);
    });
  }, "Avatar image must be smaller than 2MB and not exceed 1024x1024 pixels")
}), j8 = {
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
}, L8 = {
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
}, An = {
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
function E1({ service: e = "", visible: n = !0, onLogin: i, onCancel: s, API_URL: l = "https://jwtauth-srv-api.night-x.com" }) {
  const [u, f] = A.useState(!1), [h, m] = A.useState(!1), [p, g] = A.useState(!1), [v, b] = A.useState(null), [E, _] = A.useState(""), [M, N] = A.useState("");
  console.log(s);
  const L = m1({
    resolver: b1($8),
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onSubmit"
  }), z = m1({
    resolver: b1(N8),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      avatar: void 0
    },
    mode: "onSubmit"
  });
  A.useEffect(() => {
    n || g(!1);
  }, [n]), A.useEffect(() => {
    (async () => {
      if (localStorage.getItem("access_token")) {
        const W = await fetch(`${l}/get_user`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_token: localStorage.getItem("access_token")
          })
        });
        if (!W.ok) {
          const de = setTimeout(() => {
            g(!0);
          }, 800);
          return () => clearTimeout(de);
        }
        const Y = await W.json();
        b(Y), i && i();
      } else {
        const W = await fetch(`${l}/refresh`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        if (!W.ok) {
          const de = setTimeout(() => {
            g(!0);
          }, 800);
          return () => clearTimeout(de);
        }
        const Y = await W.json();
        localStorage.setItem("access_token", Y.access_token), i && i();
      }
    })();
  }, [v]);
  const Z = () => {
    m(!h);
  }, ee = async (k) => {
    try {
      f(!0);
      const W = await fetch(`${l}/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(k)
      }), Y = await W.json();
      if (!W.ok) {
        rn.error(Y.error || "Login failed"), f(!1);
        return;
      }
      localStorage.setItem("access_token", Y.access_token), rn.success("Welcome back!", {
        description: "Please consent to share your basic profile info with " + e
      }), f(!1), g(!1), setTimeout(function() {
        i && i();
      }, 1e3);
    } catch (W) {
      rn.error("Network error: " + W), f(!1);
    }
  }, I = async (k) => {
    f(!0);
    try {
      const W = k.avatar;
      if (!W) {
        rn.error("Avatar is required; please upload one."), f(!1);
        return;
      }
      const Y = 2 * 1024 * 1024, de = 1024;
      if (W.size > Y) {
        rn.error("Avatar image must be smaller than 2MB."), f(!1);
        return;
      }
      const ve = new Image(), K = URL.createObjectURL(W);
      await new Promise((ie, S) => {
        ve.onload = () => {
          if (ve.width > de || ve.height > de) {
            rn.error(
              "Avatar image resolution must not exceed 1024x1024 pixels."
            ), URL.revokeObjectURL(K), S(new Error("Invalid image dimensions"));
            return;
          }
          ie(null);
        }, ve.onerror = () => {
          rn.error("Invalid image file."), URL.revokeObjectURL(K), S(new Error("Invalid image file"));
        }, ve.src = K;
      }), URL.revokeObjectURL(K);
      const q = await W.arrayBuffer(), ne = await fetch(`${l}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: k.username,
          password: k.password,
          email: k.email,
          avatar: Array.from(new Uint8Array(q))
        })
      }), H = await ne.json();
      if (!ne.ok) {
        rn.error(H.error || "Registration failed"), f(!1);
        return;
      }
      rn.success("Account created successfully!", {
        description: "You can login with your new account if you want to redeem a Night+ subscription."
      }), f(!1), m(!1);
    } catch (W) {
      rn.error("Network error: " + W), f(!1);
    }
  };
  return /* @__PURE__ */ $.jsx("div", { className: "font flex flex-col items-center justify-center min-h-screen text-foreground", children: /* @__PURE__ */ $.jsxs(
    Ze.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: p ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
      variants: L8,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      className: "relative z-0 h-[calc(67vh+64px)] p-[24px] w-[60vw] rounded-[54px] flex flex-row bg-card border-x-[1.5px] border-t border-b border-border overflow-hidden",
      children: [
        /* @__PURE__ */ $.jsx(
          Ze.div,
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
            children: /* @__PURE__ */ $.jsx(
              Ze.img,
              {
                src: O8,
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
        /* @__PURE__ */ $.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center z-10 mt-[-20px] p-0", children: [
          /* @__PURE__ */ $.jsxs(
            Ze.div,
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
                /* @__PURE__ */ $.jsx(
                  Ze.div,
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
                    children: /* @__PURE__ */ $.jsxs(tS, { className: "w-7 h-7", children: [
                      /* @__PURE__ */ $.jsx(nS, { src: V8, alt: "Logo" }),
                      /* @__PURE__ */ $.jsx(aS, { children: "NG" })
                    ] })
                  }
                ),
                /* @__PURE__ */ $.jsx(
                  Ze.p,
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
          /* @__PURE__ */ $.jsx(NS, { mode: "wait", children: /* @__PURE__ */ $.jsxs(
            Ze.div,
            {
              variants: j8,
              initial: "hidden",
              animate: p ? "visible" : "hidden",
              exit: "hidden",
              transition: { delay: 0.6 },
              className: "w-[70%] text-center",
              children: [
                !h && /* @__PURE__ */ $.jsxs(
                  Ze.div,
                  {
                    variants: An,
                    className: "translate-y-[15px] mb-4",
                    children: [
                      /* @__PURE__ */ $.jsx(vh, { className: "text-3xl scale-[0.9]", children: h ? "Create Account" : "Welcome back!" }),
                      /* @__PURE__ */ $.jsx(ts, { className: "text-sm mt-1", children: h ? "Get started with Night!" : `Continue to ${e} with Night` })
                    ]
                  }
                ),
                h && /* @__PURE__ */ $.jsxs(
                  Ze.div,
                  {
                    variants: An,
                    className: "translate-y-[15px] mb-2",
                    children: [
                      /* @__PURE__ */ $.jsx(vh, { className: "text-3xl scale-[0.9]", children: h ? "Create Account" : "Welcome back!" }),
                      /* @__PURE__ */ $.jsx(ts, { className: "text-sm mt-1", children: h ? "Get started with Night!" : `Continue to ${e} with Night` })
                    ]
                  }
                ),
                h ? /* @__PURE__ */ $.jsx(x1, { ...z, children: /* @__PURE__ */ $.jsxs(
                  "form",
                  {
                    onSubmit: z.handleSubmit(
                      I,
                      (k) => {
                        Object.entries(k).map(
                          ([Y, de]) => ({
                            field: Y.charAt(0).toUpperCase() + Y.slice(1),
                            message: de?.message
                          })
                        ).forEach((Y) => {
                          rn.error(Y.field, {
                            description: Y.message
                          });
                        });
                      }
                    ),
                    className: "flex flex-col space-y-4 transform scale-[0.85] -translate-y-2",
                    children: [
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        Gr,
                        {
                          control: z.control,
                          name: "username",
                          render: ({ field: k }) => /* @__PURE__ */ $.jsx(Yr, { children: /* @__PURE__ */ $.jsx(Fr, { children: /* @__PURE__ */ $.jsx(
                            Br,
                            {
                              label: "Username",
                              placeholder: "Your username...",
                              ...k,
                              onChange: (W) => {
                                k.onChange(W), _(W.target.value);
                              }
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        Gr,
                        {
                          control: z.control,
                          name: "email",
                          render: ({ field: k }) => /* @__PURE__ */ $.jsx(Yr, { children: /* @__PURE__ */ $.jsx(Fr, { children: /* @__PURE__ */ $.jsx(
                            Br,
                            {
                              label: "Email address",
                              type: "email",
                              placeholder: "Your email...",
                              ...k,
                              onChange: (W) => {
                                k.onChange(W), N(W.target.value);
                              }
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        Gr,
                        {
                          control: z.control,
                          name: "password",
                          render: ({ field: k }) => /* @__PURE__ */ $.jsx(Yr, { children: /* @__PURE__ */ $.jsx(Fr, { children: /* @__PURE__ */ $.jsx(
                            Br,
                            {
                              label: "Password",
                              type: "password",
                              placeholder: "Your password...",
                              ...k
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        Gr,
                        {
                          control: z.control,
                          name: "avatar",
                          render: ({ field: { onChange: k, ...W } }) => /* @__PURE__ */ $.jsx(Yr, { children: /* @__PURE__ */ $.jsx(Fr, { children: /* @__PURE__ */ $.jsx(
                            Br,
                            {
                              label: "Avatar",
                              type: "file",
                              previewUsername: E,
                              previewEmail: M,
                              onChange: (Y) => {
                                const de = Y.target.files?.[0];
                                de && de.type.startsWith("image/") && k(de);
                              },
                              ...W,
                              value: W.value ? "" : void 0
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        di,
                        {
                          className: "w-full rounded-full hover:cursor-pointer p-[23px]",
                          type: "submit",
                          disabled: u,
                          children: u ? /* @__PURE__ */ $.jsxs($.Fragment, { children: [
                            /* @__PURE__ */ $.jsx(Bh, { size: 18, className: "" }),
                            "Loading..."
                          ] }) : "Create Account"
                        }
                      ) })
                    ]
                  }
                ) }) : /* @__PURE__ */ $.jsx(x1, { ...L, children: /* @__PURE__ */ $.jsxs(
                  "form",
                  {
                    onSubmit: L.handleSubmit(ee, (k) => {
                      Object.entries(k).map(
                        ([Y, de]) => ({
                          field: Y.charAt(0).toUpperCase() + Y.slice(1),
                          message: de?.message
                        })
                      ).forEach((Y) => {
                        rn.error(Y.field, {
                          description: Y.message
                        });
                      });
                    }),
                    className: "flex flex-col space-y-3 transform scale-[0.85] -translate-y-2",
                    children: [
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        Gr,
                        {
                          control: L.control,
                          name: "email",
                          render: ({ field: k }) => /* @__PURE__ */ $.jsx(Yr, { children: /* @__PURE__ */ $.jsx(Fr, { children: /* @__PURE__ */ $.jsx(
                            Br,
                            {
                              label: "Email address",
                              type: "email",
                              placeholder: "Your email...",
                              ...k
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        Gr,
                        {
                          control: L.control,
                          name: "password",
                          render: ({ field: k }) => /* @__PURE__ */ $.jsx(Yr, { children: /* @__PURE__ */ $.jsx(Fr, { children: /* @__PURE__ */ $.jsx(
                            Br,
                            {
                              label: "Password",
                              type: "password",
                              placeholder: "Your password...",
                              ...k
                            }
                          ) }) })
                        }
                      ) }),
                      /* @__PURE__ */ $.jsxs(
                        Ze.div,
                        {
                          variants: An,
                          className: "flex flex-row translate-y-[-13px]",
                          children: [
                            /* @__PURE__ */ $.jsx(
                              zC,
                              {
                                defaultSelected: !0,
                                radius: "full",
                                className: "pl-0 pt-0 whitespace-nowrap",
                                style: { transform: "scale(0.65) translate(-20px)" },
                                children: "Remember me"
                              }
                            ),
                            /* @__PURE__ */ $.jsx(
                              di,
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
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        di,
                        {
                          className: "w-full rounded-full hover:cursor-pointer p-[23px]",
                          type: "submit",
                          disabled: u,
                          children: u ? /* @__PURE__ */ $.jsxs($.Fragment, { children: [
                            /* @__PURE__ */ $.jsx(Bh, { size: 18, className: "" }),
                            "Loading..."
                          ] }) : "Sign In"
                        }
                      ) }),
                      /* @__PURE__ */ $.jsx(Ze.div, { variants: An, children: /* @__PURE__ */ $.jsx(
                        di,
                        {
                          className: "w-full rounded-full hover:cursor-pointer p-[23px]",
                          variant: "outline",
                          children: "Sign in with..."
                        }
                      ) })
                    ]
                  }
                ) }),
                /* @__PURE__ */ $.jsx(
                  Ze.div,
                  {
                    variants: An,
                    className: "mt-2 transform scale-[0.85]",
                    children: /* @__PURE__ */ $.jsxs(ts, { className: "text-muted-foreground text-xs mt-[-25px]", children: [
                      h ? "Already have an account?" : "Don't have an account?",
                      " ",
                      /* @__PURE__ */ $.jsx(
                        di,
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
const U8 = "/bg_alt.jpeg", B8 = "/nightlogo.png", T1 = {
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
}, P8 = {
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
}, vo = {
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
function A1({
  service: e,
  onCancel: n,
  visible: i,
  onContinue: s
}) {
  const [l, u] = A.useState(!1), [f, h] = A.useState(!1);
  A.useEffect(() => {
    const v = setTimeout(() => h(!0), 180);
    return () => clearTimeout(v);
  }, []), A.useEffect(() => {
    i === !1 && h(!1);
  }, [i]);
  const m = [
    "email",
    "username",
    "avatar",
    "night+ status",
    "night+ sub code"
  ], p = async () => {
    u(!0);
    try {
      if (localStorage.getItem("access_token")) {
        rn.success("Connected successfully!"), u(!1), s && s();
        return;
      }
      rn.error("Unexpected response.");
    } catch (v) {
      rn.error("Network error: " + (v?.message ?? v));
    } finally {
      u(!1);
    }
  }, g = () => {
    n && n();
  };
  return /* @__PURE__ */ $.jsx("div", { className: "font flex flex-col items-center justify-center min-h-screen text-foreground", children: /* @__PURE__ */ $.jsxs(
    Ze.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: f ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
      variants: P8,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      className: "relative z-0 h-[calc(67vh+64px)] p-[24px] w-[60vw] rounded-[54px] flex flex-row bg-card border-x-[1.5px] border-t border-b border-border overflow-hidden",
      children: [
        /* @__PURE__ */ $.jsx(
          Ze.div,
          {
            initial: {
              scale: 1,
              rotateY: 0,
              perspective: 800,
              transformStyle: "preserve-3d",
              filter: "blur(25px) brightness(1)",
              x: 15
            },
            animate: f ? {
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
            children: /* @__PURE__ */ $.jsx(
              Ze.img,
              {
                src: U8,
                alt: "Visual background",
                initial: { scale: 1.1, x: 15 },
                animate: f ? { scale: 1.15, x: 0 } : { scale: 1.1, x: 15 },
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
        /* @__PURE__ */ $.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center z-10 mt-[-20px] p-0", children: [
          /* @__PURE__ */ $.jsxs(
            Ze.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: f ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
              transition: {
                duration: 0.4,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1]
              },
              className: "logo_parent flex flex-row items-center justify-center space-x-2 pt-[30px]",
              children: [
                /* @__PURE__ */ $.jsx(
                  Ze.div,
                  {
                    initial: { scale: 0.3, opacity: 0 },
                    animate: f ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 0.55,
                      type: "spring",
                      bounce: 0.6,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    children: /* @__PURE__ */ $.jsxs(tS, { className: "w-7 h-7", children: [
                      /* @__PURE__ */ $.jsx(nS, { src: B8, alt: "Logo" }),
                      /* @__PURE__ */ $.jsx(aS, { children: "NG" })
                    ] })
                  }
                ),
                /* @__PURE__ */ $.jsx(
                  Ze.p,
                  {
                    initial: { opacity: 0, x: -30 },
                    animate: f ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
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
          /* @__PURE__ */ $.jsx(NS, { mode: "wait", children: /* @__PURE__ */ $.jsxs(
            Ze.div,
            {
              variants: T1,
              initial: "hidden",
              animate: f ? "visible" : "hidden",
              exit: "hidden",
              transition: { delay: 0.6 },
              className: "w-[70%] text-center",
              children: [
                /* @__PURE__ */ $.jsxs(Ze.div, { variants: vo, className: "translate-y-[15px] mb-4", children: [
                  /* @__PURE__ */ $.jsx(vh, { className: "text-3xl scale-[0.9]", children: `Continue to ${e}` }),
                  /* @__PURE__ */ $.jsx(ts, { className: "text-sm mt-1", children: `Provide ${e} with your Night info?` })
                ] }),
                /* @__PURE__ */ $.jsxs(Ze.div, { variants: vo, className: "mt-4 mb-2", children: [
                  /* @__PURE__ */ $.jsxs(ts, { className: "text-left text-sm mb-2 font-medium", children: [
                    "The following will be shared with ",
                    e,
                    ":"
                  ] }),
                  /* @__PURE__ */ $.jsx(Ze.ul, { variants: T1, className: "text-left list-disc ml-5 space-y-1", children: m.map((v) => /* @__PURE__ */ $.jsx(Ze.li, { variants: vo, className: "text-sm text-muted-foreground", children: v }, v)) })
                ] }),
                /* @__PURE__ */ $.jsxs(Ze.div, { variants: vo, className: "mt-6 flex gap-3", children: [
                  /* @__PURE__ */ $.jsx(
                    di,
                    {
                      className: "w-[55%] rounded-full hover:cursor-pointer p-[16px] flex justify-center items-center",
                      onClick: p,
                      disabled: l,
                      children: l ? /* @__PURE__ */ $.jsxs($.Fragment, { children: [
                        /* @__PURE__ */ $.jsx(Bh, { size: 18 }),
                        /* @__PURE__ */ $.jsx("span", { className: "ml-2", children: "Connecting…" })
                      ] }) : "Continue"
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    di,
                    {
                      className: "w-[45%] rounded-full hover:cursor-pointer p-[16px]",
                      variant: "outline",
                      onClick: g,
                      children: "Cancel"
                    }
                  )
                ] }),
                /* @__PURE__ */ $.jsx(Ze.div, { variants: vo, className: "mt-4", children: /* @__PURE__ */ $.jsxs(ts, { className: "text-xs text-muted-foreground", children: [
                  "By continuing you agree to share the above Night account details with ",
                  e,
                  "."
                ] }) })
              ]
            },
            "oauth-consent"
          ) })
        ] })
      ]
    }
  ) });
}
const H8 = {
  theme: "system",
  setTheme: () => null
}, Z8 = A.createContext(H8);
function Eu({
  children: e,
  defaultTheme: n = "system",
  storageKey: i = "vite-ui-theme",
  ...s
}) {
  const [l, u] = A.useState(
    () => localStorage.getItem(i) || n
  );
  A.useEffect(() => {
    const h = window.document.documentElement;
    if (h.classList.remove("light", "dark"), l === "system") {
      const m = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      h.classList.add(m);
      return;
    }
    h.classList.add(l);
  }, [l]);
  const f = {
    theme: l,
    setTheme: (h) => {
      localStorage.setItem(i, h), u(h);
    }
  };
  return /* @__PURE__ */ $.jsx(Z8.Provider, { ...s, value: f, children: e });
}
var G8 = (e, n, i, s, l, u, f, h) => {
  let m = document.documentElement, p = ["light", "dark"];
  function g(E) {
    (Array.isArray(e) ? e : [e]).forEach((_) => {
      let M = _ === "class", N = M && u ? l.map((L) => u[L] || L) : l;
      M ? (m.classList.remove(...N), m.classList.add(u && u[E] ? u[E] : E)) : m.setAttribute(_, E);
    }), v(E);
  }
  function v(E) {
    h && p.includes(E) && (m.style.colorScheme = E);
  }
  function b() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (s) g(s);
  else try {
    let E = localStorage.getItem(n) || i, _ = f && E === "system" ? b() : E;
    g(_);
  } catch {
  }
}, Y8 = A.createContext(void 0), F8 = { setTheme: (e) => {
}, themes: [] }, q8 = () => {
  var e;
  return (e = A.useContext(Y8)) != null ? e : F8;
};
A.memo(({ forcedTheme: e, storageKey: n, attribute: i, enableSystem: s, enableColorScheme: l, defaultTheme: u, value: f, themes: h, nonce: m, scriptProps: p }) => {
  let g = JSON.stringify([i, n, u, e, h, f, s, l]).slice(1, -1);
  return A.createElement("script", { ...p, suppressHydrationWarning: !0, nonce: typeof window > "u" ? m : "", dangerouslySetInnerHTML: { __html: `(${G8.toString()})(${g})` } });
});
const Tu = ({ ...e }) => {
  const { theme: n = "system" } = q8();
  return /* @__PURE__ */ $.jsx(
    k8,
    {
      theme: n,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "items-start text-left",
          title: "text-left onest",
          description: "text-left onest text-xxs"
        }
      },
      position: "bottom-right",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...e
    }
  );
};
function K8({ size: e = 24, color: n = "currentColor", ...i }) {
  return /* @__PURE__ */ $.jsx(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...i,
      children: /* @__PURE__ */ $.jsx(
        "path",
        {
          d: "M11.2051 0.0263672C8.11696 1.59471 6 4.79931 6 8.5C6 13.7467 10.2533 18 15.5 18C19.2008 18 22.4044 15.8823 23.9727 12.7939C23.5639 19.0512 18.3606 24 12 24C5.37258 24 0 18.6274 0 12C0 5.6397 4.94827 0.435567 11.2051 0.0263672ZM16.2236 3.80762C16.5223 3.80762 16.763 3.8403 16.9443 3.9043C17.1361 3.95765 17.2691 4.05381 17.3438 4.19238C17.4397 4.39504 17.4883 4.6884 17.4883 5.07227V6.35156H18.7842C19.1572 6.35158 19.429 6.40021 19.5996 6.49609C19.7703 6.58143 19.8822 6.71515 19.9355 6.89648C19.9995 7.07776 20.0322 7.32274 20.0322 7.63184C20.0322 7.93026 20.0054 8.17028 19.9521 8.35156C19.8988 8.5329 19.8077 8.66166 19.6797 8.73633C19.4878 8.83218 19.2159 8.87986 18.8643 8.87988H17.4883V10.1758C17.4883 10.5491 17.4398 10.8215 17.3438 10.9922C17.2585 11.1626 17.1254 11.2798 16.9443 11.3438C16.763 11.3971 16.5173 11.4238 16.208 11.4238C15.9094 11.4238 15.6696 11.397 15.4883 11.3438C15.3069 11.2797 15.1782 11.1787 15.1035 11.04C15.0076 10.8374 14.96 10.544 14.96 10.1602V8.87988H13.5684C13.2164 8.87988 12.9598 8.83729 12.7998 8.75195C12.6399 8.66662 12.5338 8.53283 12.4805 8.35156C12.4272 8.15965 12.4004 7.91463 12.4004 7.61621C12.4004 7.31772 12.4272 7.07778 12.4805 6.89648C12.5444 6.70457 12.6506 6.57078 12.7998 6.49609C13.0024 6.40012 13.2958 6.35159 13.6797 6.35156H14.96V5.05566C14.96 4.68267 15.0027 4.41086 15.0879 4.24023C15.1732 4.06957 15.3069 3.95763 15.4883 3.9043C15.6802 3.84036 15.9252 3.80764 16.2236 3.80762Z",
          fill: i.fill ?? n
        }
      )
    }
  );
}
function I8() {
  const e = A.useId();
  return /* @__PURE__ */ $.jsxs(
    di,
    {
      variant: "night",
      id: e,
      className: "signInWithNight border-solid border-2 border-sign-with-night-border rounded-full font p-[1rem] w-[17.5rem] transition-shadow duration-300 ease-out shadow-[inset_0_0_0_0_rgba(203,166,247,0)] hover:shadow-[inset_0_4px_12px_-4px_rgba(203,166,247,0.65)]",
      children: [
        /* @__PURE__ */ $.jsx(K8, { size: 18, className: "mr-1" }),
        " Sign in with Night"
      ]
    }
  );
}
const qd = ({
  isOpen: e,
  backdropBlur: n = "8px",
  onClick: i,
  className: s = ""
}) => /* @__PURE__ */ $.jsx(
  "div",
  {
    className: `fixed inset-0 transition-opacity duration-400 ${e ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${s}`,
    style: {
      // transparent background so backdrop-filter can take effect without adding a tint
      backgroundColor: "transparent",
      backdropFilter: e && n ? `blur(${n})` : "none",
      WebkitBackdropFilter: e && n ? `blur(${n})` : "none",
      transition: "opacity 400ms ease, backdrop-filter 400ms ease"
    },
    onClick: i,
    "aria-hidden": !e
  }
);
class X8 {
  constructor(n) {
    this.options = n, this.modalVisible = null;
  }
  modalVisible;
  options;
  parentEl = null;
  modalChildEl = null;
  contentEl = null;
  root = void 0;
  renderTrigger(n) {
    const s = {
      defaultTheme: "dark",
      storageKey: "vite-ui-theme",
      children: j.createElement(
        j.Fragment,
        null,
        j.createElement(I8, null),
        j.createElement(Tu, { richColors: !0 })
      )
    }, l = document.getElementById(n);
    if (!l)
      throw new Error(`renderTrigger: element "${n}" not found`);
    bd.createRoot(l).render(
      j.createElement(
        A.StrictMode,
        null,
        j.createElement(Eu, s)
      )
    );
  }
  /**
   * hide(child) will render the given child modal in a "closed" state (visible: false)
   * and render the backdrop with isOpen: false so exit animations run for both,
   * then it will call close() after the animation delay.
   *
   * @param child 'login' | 'oauth' - which modal to animate out
   */
  hide(n = "login") {
    if (!this.root || !this.parentEl) return;
    this.modalVisible = !1;
    const i = j.createElement(
      "div",
      { style: { position: "fixed", inset: "0", pointerEvents: "auto" } },
      j.createElement(qd, {
        isOpen: !1,
        backdropBlur: this.options?.backdropBlur,
        onClick: () => {
        }
        // Prevent additional callbacks during hide animation
      })
    );
    let s;
    n === "login" ? s = j.createElement(E1, {
      service: this.options.service,
      visible: !1,
      onCancel: () => {
      },
      // Prevent additional callbacks during hide animation
      API_URL: this.options.API_URL
    }) : s = j.createElement(A1, {
      visible: !1,
      service: this.options.service,
      onContinue: () => {
      },
      // Prevent additional callbacks during hide animation
      onCancel: () => {
      }
      // Prevent additional callbacks during hide animation
    });
    const l = j.createElement(
      "div",
      {
        style: {
          position: "fixed",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }
      },
      j.createElement(
        "div",
        {
          style: {
            pointerEvents: "auto",
            zIndex: this.options && this.options.zIndex ? Number(this.options.zIndex) + 1 : 1e6
          }
        },
        s
      )
    ), f = {
      defaultTheme: "dark",
      storageKey: "vite-ui-theme",
      children: j.createElement(
        Ed,
        null,
        i,
        l,
        j.createElement(Tu, { richColors: !0 })
      )
    };
    try {
      this.root.render(
        j.createElement(A.StrictMode, null, j.createElement(Eu, f))
      );
    } catch {
      this.close();
      return;
    }
    setTimeout(() => this.close(), 400);
  }
  /**
   * Handles successful OAuth flow - triggers success callback and hides modal
   */
  handleSuccess() {
    const n = localStorage.getItem("access_token");
    this.hide("oauth"), this.options.onSuccess && this.options.onSuccess(n);
  }
  /**
   * Handles cancelled OAuth flow - triggers cancel callback and hides modal
   */
  handleCancel() {
    localStorage.removeItem("access_token"), this.hide("oauth"), this.options.onCancel && this.options.onCancel();
  }
  /**
   * Handles cancelled login flow - triggers cancel callback and hides modal
   */
  handleLoginCancel() {
    localStorage.removeItem("access_token"), this.hide("login"), this.options.onCancel && this.options.onCancel();
  }
  /**
   * Switches the modal content to OAuth while keeping the same backdrop in place.
   * If a root already exists we'll reuse it (so backdrop does not get torn down).
   */
  oauth() {
    this.modalVisible = !0;
    let n = document.getElementById("night-login-overlay");
    n || (n = document.createElement("div"), n.id = "night-login-overlay", n.style.position = "fixed", n.style.inset = "0", n.style.zIndex = String(this.options && this.options.zIndex || 999999), n.style.pointerEvents = "none", document.body.appendChild(n));
    const i = j.createElement(
      "div",
      { style: { position: "fixed", inset: "0", pointerEvents: "auto" } },
      j.createElement(qd, {
        isOpen: !0,
        backdropBlur: this.options?.backdropBlur,
        onClick: () => this.handleCancel()
      })
    ), s = j.createElement(
      "div",
      {
        style: {
          position: "fixed",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }
      },
      j.createElement(
        "div",
        {
          style: {
            pointerEvents: "auto",
            zIndex: this.options && this.options.zIndex ? Number(this.options.zIndex) + 1 : 1e6
          }
        },
        j.createElement(A1, {
          service: this.options.service,
          onContinue: () => this.handleSuccess(),
          onCancel: () => this.handleCancel()
        })
      )
    ), u = { defaultTheme: "dark", storageKey: "vite-ui-theme", children: j.createElement(Ed, null, i, s, j.createElement(Tu, { richColors: !0 })) }, f = j.createElement(Eu, u);
    this.parentEl = n, this.root || (this.root = bd.createRoot(n)), this.root.render(j.createElement(A.StrictMode, null, f));
  }
  show(n) {
    this.modalVisible = !0;
    let i = document.getElementById("night-login-overlay");
    i || (i = document.createElement("div"), i.id = "night-login-overlay", i.style.position = "fixed", i.style.inset = "0", i.style.zIndex = String(this.options && this.options.zIndex || 999999), i.style.pointerEvents = "none", document.body.appendChild(i));
    const s = j.createElement(
      "div",
      { style: { position: "fixed", inset: "0", pointerEvents: "auto" } },
      j.createElement(qd, {
        isOpen: !0,
        backdropBlur: this.options?.backdropBlur,
        onClick: () => this.handleLoginCancel()
      })
    ), l = j.createElement(
      "div",
      {
        style: {
          position: "fixed",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }
      },
      j.createElement(
        "div",
        {
          style: {
            pointerEvents: "auto",
            zIndex: this.options && this.options.zIndex ? Number(this.options.zIndex) + 1 : 1e6
          }
        },
        j.createElement(E1, {
          service: this.options.service,
          visible: this.modalVisible,
          onCancel: () => this.handleLoginCancel(),
          onLogin: () => this.oauth(),
          API_URL: this.options.API_URL
        })
      )
    ), f = { defaultTheme: "dark", storageKey: "vite-ui-theme", children: j.createElement(Ed, null, s, l, j.createElement(Tu, { richColors: !0 })) }, h = j.createElement(Eu, f);
    this.parentEl = i, this.root = bd.createRoot(i), this.root.render(j.createElement(A.StrictMode, null, h));
  }
  close() {
    if (this.root && this.parentEl) {
      try {
        this.root.unmount();
      } catch {
      }
      this.parentEl.parentNode && this.parentEl.parentNode.removeChild(this.parentEl), this.root = void 0, this.parentEl = null;
    }
  }
}
window.NightLogin = window.NightLogin || X8;
export {
  X8 as default
};
//# sourceMappingURL=night-login.es.js.map
