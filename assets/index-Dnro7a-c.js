var Sd = e => {
    throw TypeError(e)
}
;
var Zs = (e, t, n) => t.has(e) || Sd("Cannot " + n);
var P = (e, t, n) => (Zs(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? Sd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , W = (e, t, n, r) => (Zs(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Te = (e, t, n) => (Zs(e, t, "access private method"),
n);
var Ua = (e, t, n, r) => ({
    set _(o) {
        W(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});
function Wy(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const a = Object.getOwnPropertyDescriptor(r, o);
                    a && Object.defineProperty(e, o, a.get ? a : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const a of o)
            if (a.type === "childList")
                for (const i of a.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const a = {};
        return o.integrity && (a.integrity = o.integrity),
        o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const a = n(o);
        fetch(o.href, a)
    }
}
)();
function Gp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Kp = {
    exports: {}
}
  , fs = {}
  , Xp = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa = Symbol.for("react.element")
  , Vy = Symbol.for("react.portal")
  , Uy = Symbol.for("react.fragment")
  , Hy = Symbol.for("react.strict_mode")
  , Qy = Symbol.for("react.profiler")
  , qy = Symbol.for("react.provider")
  , Yy = Symbol.for("react.context")
  , Gy = Symbol.for("react.forward_ref")
  , Ky = Symbol.for("react.suspense")
  , Xy = Symbol.for("react.memo")
  , Jy = Symbol.for("react.lazy")
  , Ed = Symbol.iterator;
function Zy(e) {
    return e === null || typeof e != "object" ? null : (e = Ed && e[Ed] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Jp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Zp = Object.assign
  , eh = {};
function So(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = eh,
    this.updater = n || Jp
}
So.prototype.isReactComponent = {};
So.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
So.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function th() {}
th.prototype = So.prototype;
function Ju(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = eh,
    this.updater = n || Jp
}
var Zu = Ju.prototype = new th;
Zu.constructor = Ju;
Zp(Zu, So.prototype);
Zu.isPureReactComponent = !0;
var Cd = Array.isArray
  , nh = Object.prototype.hasOwnProperty
  , ec = {
    current: null
}
  , rh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function oh(e, t, n) {
    var r, o = {}, a = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (a = "" + t.key),
        t)
            nh.call(t, r) && !rh.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        o.children = n;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: Oa,
        type: e,
        key: a,
        ref: i,
        props: o,
        _owner: ec.current
    }
}
function e0(e, t) {
    return {
        $$typeof: Oa,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function tc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Oa
}
function t0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var kd = /\/+/g;
function el(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? t0("" + e.key) : t.toString(36)
}
function vi(e, t, n, r, o) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (a) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Oa:
            case Vy:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + el(i, 0) : r,
        Cd(o) ? (n = "",
        e != null && (n = e.replace(kd, "$&/") + "/"),
        vi(o, t, n, "", function(u) {
            return u
        })) : o != null && (tc(o) && (o = e0(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(kd, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Cd(e))
        for (var s = 0; s < e.length; s++) {
            a = e[s];
            var l = r + el(a, s);
            i += vi(a, t, n, l, o)
        }
    else if (l = Zy(e),
    typeof l == "function")
        for (e = l.call(e),
        s = 0; !(a = e.next()).done; )
            a = a.value,
            l = r + el(a, s++),
            i += vi(a, t, n, l, o);
    else if (a === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Ha(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return vi(e, r, "", "", function(a) {
        return t.call(n, a, o++)
    }),
    r
}
function n0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var $e = {
    current: null
}
  , yi = {
    transition: null
}
  , r0 = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: yi,
    ReactCurrentOwner: ec
};
function ah() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: Ha,
    forEach: function(e, t, n) {
        Ha(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ha(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ha(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!tc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = So;
Y.Fragment = Uy;
Y.Profiler = Qy;
Y.PureComponent = Ju;
Y.StrictMode = Hy;
Y.Suspense = Ky;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0;
Y.act = ah;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Zp({}, e.props)
      , o = e.key
      , a = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref,
        i = ec.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (l in t)
            nh.call(t, l) && !rh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++)
            s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: Oa,
        type: e.type,
        key: o,
        ref: a,
        props: r,
        _owner: i
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: Yy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: qy,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = oh;
Y.createFactory = function(e) {
    var t = oh.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: Gy,
        render: e
    }
}
;
Y.isValidElement = tc;
Y.lazy = function(e) {
    return {
        $$typeof: Jy,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: n0
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: Xy,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = yi.transition;
    yi.transition = {};
    try {
        e()
    } finally {
        yi.transition = t
    }
}
;
Y.unstable_act = ah;
Y.useCallback = function(e, t) {
    return $e.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return $e.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return $e.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return $e.current.useEffect(e, t)
}
;
Y.useId = function() {
    return $e.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return $e.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return $e.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return $e.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return $e.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return $e.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return $e.current.useRef(e)
}
;
Y.useState = function(e) {
    return $e.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return $e.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return $e.current.useTransition()
}
;
Y.version = "18.3.1";
Xp.exports = Y;
var v = Xp.exports;
const j = Gp(v)
  , nc = Wy({
    __proto__: null,
    default: j
}, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o0 = v
  , a0 = Symbol.for("react.element")
  , i0 = Symbol.for("react.fragment")
  , s0 = Object.prototype.hasOwnProperty
  , l0 = o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , u0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ih(e, t, n) {
    var r, o = {}, a = null, i = null;
    n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        s0.call(t, r) && !u0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: a0,
        type: e,
        key: a,
        ref: i,
        props: o,
        _owner: l0.current
    }
}
fs.Fragment = i0;
fs.jsx = ih;
fs.jsxs = ih;
Kp.exports = fs;
var y = Kp.exports
  , sh = {
    exports: {}
}
  , tt = {}
  , lh = {
    exports: {}
}
  , uh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, T) {
        var L = N.length;
        N.push(T);
        e: for (; 0 < L; ) {
            var U = L - 1 >>> 1
              , F = N[U];
            if (0 < o(F, T))
                N[U] = T,
                N[L] = F,
                L = U;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var T = N[0]
          , L = N.pop();
        if (L !== T) {
            N[0] = L;
            e: for (var U = 0, F = N.length, q = F >>> 1; U < q; ) {
                var K = 2 * (U + 1) - 1
                  , ge = N[K]
                  , Ne = K + 1
                  , Z = N[Ne];
                if (0 > o(ge, L))
                    Ne < F && 0 > o(Z, ge) ? (N[U] = Z,
                    N[Ne] = L,
                    U = Ne) : (N[U] = ge,
                    N[K] = L,
                    U = K);
                else if (Ne < F && 0 > o(Z, L))
                    N[U] = Z,
                    N[Ne] = L,
                    U = Ne;
                else
                    break e
            }
        }
        return T
    }
    function o(N, T) {
        var L = N.sortIndex - T.sortIndex;
        return L !== 0 ? L : N.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var i = Date
          , s = i.now();
        e.unstable_now = function() {
            return i.now() - s
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , h = 3
      , f = !1
      , b = !1
      , g = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function w(N) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= N)
                r(u),
                T.sortIndex = T.expirationTime,
                t(l, T);
            else
                break;
            T = n(u)
        }
    }
    function S(N) {
        if (g = !1,
        w(N),
        !b)
            if (n(l) !== null)
                b = !0,
                $(E);
            else {
                var T = n(u);
                T !== null && V(S, T.startTime - N)
            }
    }
    function E(N, T) {
        b = !1,
        g && (g = !1,
        m(R),
        R = -1),
        f = !0;
        var L = h;
        try {
            for (w(T),
            d = n(l); d !== null && (!(d.expirationTime > T) || N && !z()); ) {
                var U = d.callback;
                if (typeof U == "function") {
                    d.callback = null,
                    h = d.priorityLevel;
                    var F = U(d.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof F == "function" ? d.callback = F : d === n(l) && r(l),
                    w(T)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var q = !0;
            else {
                var K = n(u);
                K !== null && V(S, K.startTime - T),
                q = !1
            }
            return q
        } finally {
            d = null,
            h = L,
            f = !1
        }
    }
    var C = !1
      , k = null
      , R = -1
      , A = 5
      , M = -1;
    function z() {
        return !(e.unstable_now() - M < A)
    }
    function I() {
        if (k !== null) {
            var N = e.unstable_now();
            M = N;
            var T = !0;
            try {
                T = k(!0, N)
            } finally {
                T ? Q() : (C = !1,
                k = null)
            }
        } else
            C = !1
    }
    var Q;
    if (typeof p == "function")
        Q = function() {
            p(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , G = D.port2;
        D.port1.onmessage = I,
        Q = function() {
            G.postMessage(null)
        }
    } else
        Q = function() {
            x(I, 0)
        }
        ;
    function $(N) {
        k = N,
        C || (C = !0,
        Q())
    }
    function V(N, T) {
        R = x(function() {
            N(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        b || f || (b = !0,
        $(E))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(N) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = h
        }
        var L = h;
        h = T;
        try {
            return N()
        } finally {
            h = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, T) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var L = h;
        h = N;
        try {
            return T()
        } finally {
            h = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, T, L) {
        var U = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? U + L : U) : L = U,
        N) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = L + F,
        N = {
            id: c++,
            callback: T,
            priorityLevel: N,
            startTime: L,
            expirationTime: F,
            sortIndex: -1
        },
        L > U ? (N.sortIndex = L,
        t(u, N),
        n(l) === null && N === n(u) && (g ? (m(R),
        R = -1) : g = !0,
        V(S, L - U))) : (N.sortIndex = F,
        t(l, N),
        b || f || (b = !0,
        $(E))),
        N
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(N) {
        var T = h;
        return function() {
            var L = h;
            h = T;
            try {
                return N.apply(this, arguments)
            } finally {
                h = L
            }
        }
    }
}
)(uh);
lh.exports = uh;
var c0 = lh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d0 = v
  , et = c0;
function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ch = new Set
  , ra = {};
function Sr(e, t) {
    po(e, t),
    po(e + "Capture", t)
}
function po(e, t) {
    for (ra[e] = t,
    e = 0; e < t.length; e++)
        ch.add(t[e])
}
var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Vl = Object.prototype.hasOwnProperty
  , f0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Pd = {}
  , Nd = {};
function p0(e) {
    return Vl.call(Nd, e) ? !0 : Vl.call(Pd, e) ? !1 : f0.test(e) ? Nd[e] = !0 : (Pd[e] = !0,
    !1)
}
function h0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function m0(e, t, n, r) {
    if (t === null || typeof t > "u" || h0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Be(e, t, n, r, o, a, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = a,
    this.removeEmptyString = i
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Pe[e] = new Be(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Pe[t] = new Be(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Pe[e] = new Be(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Pe[e] = new Be(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Pe[e] = new Be(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Pe[e] = new Be(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Pe[e] = new Be(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Pe[e] = new Be(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Pe[e] = new Be(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var rc = /[\-:]([a-z])/g;
function oc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(rc, oc);
    Pe[t] = new Be(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(rc, oc);
    Pe[t] = new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(rc, oc);
    Pe[t] = new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Pe[e] = new Be(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Pe.xlinkHref = new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Pe[e] = new Be(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ac(e, t, n, r) {
    var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (m0(t, n, o, r) && (n = null),
    r || o === null ? p0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ln = d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Qa = Symbol.for("react.element")
  , _r = Symbol.for("react.portal")
  , Ir = Symbol.for("react.fragment")
  , ic = Symbol.for("react.strict_mode")
  , Ul = Symbol.for("react.profiler")
  , dh = Symbol.for("react.provider")
  , fh = Symbol.for("react.context")
  , sc = Symbol.for("react.forward_ref")
  , Hl = Symbol.for("react.suspense")
  , Ql = Symbol.for("react.suspense_list")
  , lc = Symbol.for("react.memo")
  , bn = Symbol.for("react.lazy")
  , ph = Symbol.for("react.offscreen")
  , Td = Symbol.iterator;
function Mo(e) {
    return e === null || typeof e != "object" ? null : (e = Td && e[Td] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var fe = Object.assign, tl;
function Wo(e) {
    if (tl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            tl = t && t[1] || ""
        }
    return `
` + tl + e
}
var nl = !1;
function rl(e, t) {
    if (!e || nl)
        return "";
    nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), a = r.stack.split(`
`), i = o.length - 1, s = a.length - 1; 1 <= i && 0 <= s && o[i] !== a[s]; )
                s--;
            for (; 1 <= i && 0 <= s; i--,
            s--)
                if (o[i] !== a[s]) {
                    if (i !== 1 || s !== 1)
                        do
                            if (i--,
                            s--,
                            0 > s || o[i] !== a[s]) {
                                var l = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= i && 0 <= s);
                    break
                }
        }
    } finally {
        nl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Wo(e) : ""
}
function g0(e) {
    switch (e.tag) {
    case 5:
        return Wo(e.type);
    case 16:
        return Wo("Lazy");
    case 13:
        return Wo("Suspense");
    case 19:
        return Wo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = rl(e.type, !1),
        e;
    case 11:
        return e = rl(e.type.render, !1),
        e;
    case 1:
        return e = rl(e.type, !0),
        e;
    default:
        return ""
    }
}
function ql(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ir:
        return "Fragment";
    case _r:
        return "Portal";
    case Ul:
        return "Profiler";
    case ic:
        return "StrictMode";
    case Hl:
        return "Suspense";
    case Ql:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case fh:
            return (e.displayName || "Context") + ".Consumer";
        case dh:
            return (e._context.displayName || "Context") + ".Provider";
        case sc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case lc:
            return t = e.displayName || null,
            t !== null ? t : ql(e.type) || "Memo";
        case bn:
            t = e._payload,
            e = e._init;
            try {
                return ql(e(t))
            } catch {}
        }
    return null
}
function v0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ql(t);
    case 8:
        return t === ic ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Wn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function hh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function y0(e) {
    var t = hh(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                a.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function qa(e) {
    e._valueTracker || (e._valueTracker = y0(e))
}
function mh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = hh(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Di(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Yl(e, t) {
    var n = t.checked;
    return fe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Rd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Wn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function gh(e, t) {
    t = t.checked,
    t != null && ac(e, "checked", t, !1)
}
function Gl(e, t) {
    gh(e, t);
    var n = Wn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Kl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Kl(e, t.type, Wn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Od(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Kl(e, t, n) {
    (t !== "number" || Di(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Vo = Array.isArray;
function Yr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Wn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Xl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(O(91));
    return fe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function jd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(O(92));
            if (Vo(n)) {
                if (1 < n.length)
                    throw Error(O(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Wn(n)
    }
}
function vh(e, t) {
    var n = Wn(t.value)
      , r = Wn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Md(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function yh(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Jl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? yh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ya, wh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ya = Ya || document.createElement("div"),
        Ya.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ya.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function oa(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var qo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , w0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(qo).forEach(function(e) {
    w0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        qo[t] = qo[e]
    })
});
function xh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qo.hasOwnProperty(e) && qo[e] ? ("" + t).trim() : t + "px"
}
function bh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = xh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var x0 = fe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Zl(e, t) {
    if (t) {
        if (x0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(O(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(O(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(O(62))
    }
}
function eu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
        return !0
    }
}
var tu = null;
function uc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var nu = null
  , Gr = null
  , Kr = null;
function Ad(e) {
    if (e = Aa(e)) {
        if (typeof nu != "function")
            throw Error(O(280));
        var t = e.stateNode;
        t && (t = vs(t),
        nu(e.stateNode, e.type, t))
    }
}
function Sh(e) {
    Gr ? Kr ? Kr.push(e) : Kr = [e] : Gr = e
}
function Eh() {
    if (Gr) {
        var e = Gr
          , t = Kr;
        if (Kr = Gr = null,
        Ad(e),
        t)
            for (e = 0; e < t.length; e++)
                Ad(t[e])
    }
}
function Ch(e, t) {
    return e(t)
}
function kh() {}
var ol = !1;
function Ph(e, t, n) {
    if (ol)
        return e(t, n);
    ol = !0;
    try {
        return Ch(e, t, n)
    } finally {
        ol = !1,
        (Gr !== null || Kr !== null) && (kh(),
        Eh())
    }
}
function aa(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = vs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(O(231, t, typeof n));
    return n
}
var ru = !1;
if (en)
    try {
        var Ao = {};
        Object.defineProperty(Ao, "passive", {
            get: function() {
                ru = !0
            }
        }),
        window.addEventListener("test", Ao, Ao),
        window.removeEventListener("test", Ao, Ao)
    } catch {
        ru = !1
    }
function b0(e, t, n, r, o, a, i, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Yo = !1
  , Li = null
  , _i = !1
  , ou = null
  , S0 = {
    onError: function(e) {
        Yo = !0,
        Li = e
    }
};
function E0(e, t, n, r, o, a, i, s, l) {
    Yo = !1,
    Li = null,
    b0.apply(S0, arguments)
}
function C0(e, t, n, r, o, a, i, s, l) {
    if (E0.apply(this, arguments),
    Yo) {
        if (Yo) {
            var u = Li;
            Yo = !1,
            Li = null
        } else
            throw Error(O(198));
        _i || (_i = !0,
        ou = u)
    }
}
function Er(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Nh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Dd(e) {
    if (Er(e) !== e)
        throw Error(O(188))
}
function k0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Er(e),
        t === null)
            throw Error(O(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var a = o.alternate;
        if (a === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === a.child) {
            for (a = o.child; a; ) {
                if (a === n)
                    return Dd(o),
                    e;
                if (a === r)
                    return Dd(o),
                    t;
                a = a.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return)
            n = o,
            r = a;
        else {
            for (var i = !1, s = o.child; s; ) {
                if (s === n) {
                    i = !0,
                    n = o,
                    r = a;
                    break
                }
                if (s === r) {
                    i = !0,
                    r = o,
                    n = a;
                    break
                }
                s = s.sibling
            }
            if (!i) {
                for (s = a.child; s; ) {
                    if (s === n) {
                        i = !0,
                        n = a,
                        r = o;
                        break
                    }
                    if (s === r) {
                        i = !0,
                        r = a,
                        n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!i)
                    throw Error(O(189))
            }
        }
        if (n.alternate !== r)
            throw Error(O(190))
    }
    if (n.tag !== 3)
        throw Error(O(188));
    return n.stateNode.current === n ? e : t
}
function Th(e) {
    return e = k0(e),
    e !== null ? Rh(e) : null
}
function Rh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Rh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Oh = et.unstable_scheduleCallback
  , Ld = et.unstable_cancelCallback
  , P0 = et.unstable_shouldYield
  , N0 = et.unstable_requestPaint
  , me = et.unstable_now
  , T0 = et.unstable_getCurrentPriorityLevel
  , cc = et.unstable_ImmediatePriority
  , jh = et.unstable_UserBlockingPriority
  , Ii = et.unstable_NormalPriority
  , R0 = et.unstable_LowPriority
  , Mh = et.unstable_IdlePriority
  , ps = null
  , $t = null;
function O0(e) {
    if ($t && typeof $t.onCommitFiberRoot == "function")
        try {
            $t.onCommitFiberRoot(ps, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Et = Math.clz32 ? Math.clz32 : A0
  , j0 = Math.log
  , M0 = Math.LN2;
function A0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (j0(e) / M0 | 0) | 0
}
var Ga = 64
  , Ka = 4194304;
function Uo(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Fi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , a = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var s = i & ~o;
        s !== 0 ? r = Uo(s) : (a &= i,
        a !== 0 && (r = Uo(a)))
    } else
        i = n & ~o,
        i !== 0 ? r = Uo(i) : a !== 0 && (r = Uo(a));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    a = t & -t,
    o >= a || o === 16 && (a & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Et(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function D0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function L0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var i = 31 - Et(a)
          , s = 1 << i
          , l = o[i];
        l === -1 ? (!(s & n) || s & r) && (o[i] = D0(s, t)) : l <= t && (e.expiredLanes |= s),
        a &= ~s
    }
}
function au(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ah() {
    var e = Ga;
    return Ga <<= 1,
    !(Ga & 4194240) && (Ga = 64),
    e
}
function al(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ja(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Et(t),
    e[t] = n
}
function _0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Et(n)
          , a = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~a
    }
}
function dc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Et(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var te = 0;
function Dh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Lh, fc, _h, Ih, Fh, iu = !1, Xa = [], Dn = null, Ln = null, _n = null, ia = new Map, sa = new Map, En = [], I0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function _d(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Dn = null;
        break;
    case "dragenter":
    case "dragleave":
        Ln = null;
        break;
    case "mouseover":
    case "mouseout":
        _n = null;
        break;
    case "pointerover":
    case "pointerout":
        ia.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        sa.delete(t.pointerId)
    }
}
function Do(e, t, n, r, o, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [o]
    },
    t !== null && (t = Aa(t),
    t !== null && fc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function F0(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Dn = Do(Dn, e, t, n, r, o),
        !0;
    case "dragenter":
        return Ln = Do(Ln, e, t, n, r, o),
        !0;
    case "mouseover":
        return _n = Do(_n, e, t, n, r, o),
        !0;
    case "pointerover":
        var a = o.pointerId;
        return ia.set(a, Do(ia.get(a) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return a = o.pointerId,
        sa.set(a, Do(sa.get(a) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function zh(e) {
    var t = rr(e.target);
    if (t !== null) {
        var n = Er(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Nh(n),
                t !== null) {
                    e.blockedOn = t,
                    Fh(e.priority, function() {
                        _h(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function wi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            tu = r,
            n.target.dispatchEvent(r),
            tu = null
        } else
            return t = Aa(n),
            t !== null && fc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Id(e, t, n) {
    wi(e) && n.delete(t)
}
function z0() {
    iu = !1,
    Dn !== null && wi(Dn) && (Dn = null),
    Ln !== null && wi(Ln) && (Ln = null),
    _n !== null && wi(_n) && (_n = null),
    ia.forEach(Id),
    sa.forEach(Id)
}
function Lo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    iu || (iu = !0,
    et.unstable_scheduleCallback(et.unstable_NormalPriority, z0)))
}
function la(e) {
    function t(o) {
        return Lo(o, e)
    }
    if (0 < Xa.length) {
        Lo(Xa[0], e);
        for (var n = 1; n < Xa.length; n++) {
            var r = Xa[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Dn !== null && Lo(Dn, e),
    Ln !== null && Lo(Ln, e),
    _n !== null && Lo(_n, e),
    ia.forEach(t),
    sa.forEach(t),
    n = 0; n < En.length; n++)
        r = En[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < En.length && (n = En[0],
    n.blockedOn === null); )
        zh(n),
        n.blockedOn === null && En.shift()
}
var Xr = ln.ReactCurrentBatchConfig
  , zi = !0;
function $0(e, t, n, r) {
    var o = te
      , a = Xr.transition;
    Xr.transition = null;
    try {
        te = 1,
        pc(e, t, n, r)
    } finally {
        te = o,
        Xr.transition = a
    }
}
function B0(e, t, n, r) {
    var o = te
      , a = Xr.transition;
    Xr.transition = null;
    try {
        te = 4,
        pc(e, t, n, r)
    } finally {
        te = o,
        Xr.transition = a
    }
}
function pc(e, t, n, r) {
    if (zi) {
        var o = su(e, t, n, r);
        if (o === null)
            ml(e, t, r, $i, n),
            _d(e, r);
        else if (F0(o, e, t, n, r))
            r.stopPropagation();
        else if (_d(e, r),
        t & 4 && -1 < I0.indexOf(e)) {
            for (; o !== null; ) {
                var a = Aa(o);
                if (a !== null && Lh(a),
                a = su(e, t, n, r),
                a === null && ml(e, t, r, $i, n),
                a === o)
                    break;
                o = a
            }
            o !== null && r.stopPropagation()
        } else
            ml(e, t, r, null, n)
    }
}
var $i = null;
function su(e, t, n, r) {
    if ($i = null,
    e = uc(r),
    e = rr(e),
    e !== null)
        if (t = Er(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Nh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return $i = e,
    null
}
function $h(e) {
    switch (e) {
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
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (T0()) {
        case cc:
            return 1;
        case jh:
            return 4;
        case Ii:
        case R0:
            return 16;
        case Mh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var On = null
  , hc = null
  , xi = null;
function Bh() {
    if (xi)
        return xi;
    var e, t = hc, n = t.length, r, o = "value"in On ? On.value : On.textContent, a = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[a - r]; r++)
        ;
    return xi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function bi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ja() {
    return !0
}
function Fd() {
    return !1
}
function nt(e) {
    function t(n, r, o, a, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = a,
        this.target = i,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(a) : a[s]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Ja : Fd,
        this.isPropagationStopped = Fd,
        this
    }
    return fe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ja)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ja)
        },
        persist: function() {},
        isPersistent: Ja
    }),
    t
}
var Eo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, mc = nt(Eo), Ma = fe({}, Eo, {
    view: 0,
    detail: 0
}), W0 = nt(Ma), il, sl, _o, hs = fe({}, Ma, {
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
    getModifierState: gc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== _o && (_o && e.type === "mousemove" ? (il = e.screenX - _o.screenX,
        sl = e.screenY - _o.screenY) : sl = il = 0,
        _o = e),
        il)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : sl
    }
}), zd = nt(hs), V0 = fe({}, hs, {
    dataTransfer: 0
}), U0 = nt(V0), H0 = fe({}, Ma, {
    relatedTarget: 0
}), ll = nt(H0), Q0 = fe({}, Eo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), q0 = nt(Q0), Y0 = fe({}, Eo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), G0 = nt(Y0), K0 = fe({}, Eo, {
    data: 0
}), $d = nt(K0), X0 = {
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
}, J0 = {
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
}, Z0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function ew(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Z0[e]) ? !!t[e] : !1
}
function gc() {
    return ew
}
var tw = fe({}, Ma, {
    key: function(e) {
        if (e.key) {
            var t = X0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = bi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gc,
    charCode: function(e) {
        return e.type === "keypress" ? bi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , nw = nt(tw)
  , rw = fe({}, hs, {
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
})
  , Bd = nt(rw)
  , ow = fe({}, Ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gc
})
  , aw = nt(ow)
  , iw = fe({}, Eo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , sw = nt(iw)
  , lw = fe({}, hs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , uw = nt(lw)
  , cw = [9, 13, 27, 32]
  , vc = en && "CompositionEvent"in window
  , Go = null;
en && "documentMode"in document && (Go = document.documentMode);
var dw = en && "TextEvent"in window && !Go
  , Wh = en && (!vc || Go && 8 < Go && 11 >= Go)
  , Wd = " "
  , Vd = !1;
function Vh(e, t) {
    switch (e) {
    case "keyup":
        return cw.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Uh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Fr = !1;
function fw(e, t) {
    switch (e) {
    case "compositionend":
        return Uh(t);
    case "keypress":
        return t.which !== 32 ? null : (Vd = !0,
        Wd);
    case "textInput":
        return e = t.data,
        e === Wd && Vd ? null : e;
    default:
        return null
    }
}
function pw(e, t) {
    if (Fr)
        return e === "compositionend" || !vc && Vh(e, t) ? (e = Bh(),
        xi = hc = On = null,
        Fr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Wh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var hw = {
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
function Ud(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hw[e.type] : t === "textarea"
}
function Hh(e, t, n, r) {
    Sh(r),
    t = Bi(t, "onChange"),
    0 < t.length && (n = new mc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ko = null
  , ua = null;
function mw(e) {
    nm(e, 0)
}
function ms(e) {
    var t = Br(e);
    if (mh(t))
        return e
}
function gw(e, t) {
    if (e === "change")
        return t
}
var Qh = !1;
if (en) {
    var ul;
    if (en) {
        var cl = "oninput"in document;
        if (!cl) {
            var Hd = document.createElement("div");
            Hd.setAttribute("oninput", "return;"),
            cl = typeof Hd.oninput == "function"
        }
        ul = cl
    } else
        ul = !1;
    Qh = ul && (!document.documentMode || 9 < document.documentMode)
}
function Qd() {
    Ko && (Ko.detachEvent("onpropertychange", qh),
    ua = Ko = null)
}
function qh(e) {
    if (e.propertyName === "value" && ms(ua)) {
        var t = [];
        Hh(t, ua, e, uc(e)),
        Ph(mw, t)
    }
}
function vw(e, t, n) {
    e === "focusin" ? (Qd(),
    Ko = t,
    ua = n,
    Ko.attachEvent("onpropertychange", qh)) : e === "focusout" && Qd()
}
function yw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ms(ua)
}
function ww(e, t) {
    if (e === "click")
        return ms(t)
}
function xw(e, t) {
    if (e === "input" || e === "change")
        return ms(t)
}
function bw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var kt = typeof Object.is == "function" ? Object.is : bw;
function ca(e, t) {
    if (kt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Vl.call(t, o) || !kt(e[o], t[o]))
            return !1
    }
    return !0
}
function qd(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Yd(e, t) {
    var n = qd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = qd(n)
    }
}
function Yh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Gh() {
    for (var e = window, t = Di(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Di(e.document)
    }
    return t
}
function yc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Sw(e) {
    var t = Gh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Yh(n.ownerDocument.documentElement, n)) {
        if (r !== null && yc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , a = Math.min(r.start, o);
                r = r.end === void 0 ? a : Math.min(r.end, o),
                !e.extend && a > r && (o = r,
                r = a,
                a = o),
                o = Yd(n, a);
                var i = Yd(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                a > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Ew = en && "documentMode"in document && 11 >= document.documentMode
  , zr = null
  , lu = null
  , Xo = null
  , uu = !1;
function Gd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    uu || zr == null || zr !== Di(r) || (r = zr,
    "selectionStart"in r && yc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Xo && ca(Xo, r) || (Xo = r,
    r = Bi(lu, "onSelect"),
    0 < r.length && (t = new mc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = zr)))
}
function Za(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var $r = {
    animationend: Za("Animation", "AnimationEnd"),
    animationiteration: Za("Animation", "AnimationIteration"),
    animationstart: Za("Animation", "AnimationStart"),
    transitionend: Za("Transition", "TransitionEnd")
}
  , dl = {}
  , Kh = {};
en && (Kh = document.createElement("div").style,
"AnimationEvent"in window || (delete $r.animationend.animation,
delete $r.animationiteration.animation,
delete $r.animationstart.animation),
"TransitionEvent"in window || delete $r.transitionend.transition);
function gs(e) {
    if (dl[e])
        return dl[e];
    if (!$r[e])
        return e;
    var t = $r[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Kh)
            return dl[e] = t[n];
    return e
}
var Xh = gs("animationend")
  , Jh = gs("animationiteration")
  , Zh = gs("animationstart")
  , em = gs("transitionend")
  , tm = new Map
  , Kd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qn(e, t) {
    tm.set(e, t),
    Sr(t, [e])
}
for (var fl = 0; fl < Kd.length; fl++) {
    var pl = Kd[fl]
      , Cw = pl.toLowerCase()
      , kw = pl[0].toUpperCase() + pl.slice(1);
    qn(Cw, "on" + kw)
}
qn(Xh, "onAnimationEnd");
qn(Jh, "onAnimationIteration");
qn(Zh, "onAnimationStart");
qn("dblclick", "onDoubleClick");
qn("focusin", "onFocus");
qn("focusout", "onBlur");
qn(em, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
Sr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Sr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Pw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));
function Xd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    C0(r, t, void 0, e),
    e.currentTarget = null
}
function nm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var s = r[i]
                      , l = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    l !== a && o.isPropagationStopped())
                        break e;
                    Xd(o, s, u),
                    a = l
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (s = r[i],
                    l = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    l !== a && o.isPropagationStopped())
                        break e;
                    Xd(o, s, u),
                    a = l
                }
        }
    }
    if (_i)
        throw e = ou,
        _i = !1,
        ou = null,
        e
}
function ae(e, t) {
    var n = t[hu];
    n === void 0 && (n = t[hu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (rm(t, e, 2, !1),
    n.add(r))
}
function hl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    rm(n, e, r, t)
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function da(e) {
    if (!e[ei]) {
        e[ei] = !0,
        ch.forEach(function(n) {
            n !== "selectionchange" && (Pw.has(n) || hl(n, !1, e),
            hl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ei] || (t[ei] = !0,
        hl("selectionchange", !1, t))
    }
}
function rm(e, t, n, r) {
    switch ($h(t)) {
    case 1:
        var o = $0;
        break;
    case 4:
        o = B0;
        break;
    default:
        o = pc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !ru || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function ml(e, t, n, r, o) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var s = r.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; s !== null; ) {
                    if (i = rr(s),
                    i === null)
                        return;
                    if (l = i.tag,
                    l === 5 || l === 6) {
                        r = a = i;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Ph(function() {
        var u = a
          , c = uc(n)
          , d = [];
        e: {
            var h = tm.get(e);
            if (h !== void 0) {
                var f = mc
                  , b = e;
                switch (e) {
                case "keypress":
                    if (bi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    f = nw;
                    break;
                case "focusin":
                    b = "focus",
                    f = ll;
                    break;
                case "focusout":
                    b = "blur",
                    f = ll;
                    break;
                case "beforeblur":
                case "afterblur":
                    f = ll;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    f = zd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    f = U0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    f = aw;
                    break;
                case Xh:
                case Jh:
                case Zh:
                    f = q0;
                    break;
                case em:
                    f = sw;
                    break;
                case "scroll":
                    f = W0;
                    break;
                case "wheel":
                    f = uw;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    f = G0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    f = Bd
                }
                var g = (t & 4) !== 0
                  , x = !g && e === "scroll"
                  , m = g ? h !== null ? h + "Capture" : null : h;
                g = [];
                for (var p = u, w; p !== null; ) {
                    w = p;
                    var S = w.stateNode;
                    if (w.tag === 5 && S !== null && (w = S,
                    m !== null && (S = aa(p, m),
                    S != null && g.push(fa(p, S, w)))),
                    x)
                        break;
                    p = p.return
                }
                0 < g.length && (h = new f(h,b,null,n,c),
                d.push({
                    event: h,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                f = e === "mouseout" || e === "pointerout",
                h && n !== tu && (b = n.relatedTarget || n.fromElement) && (rr(b) || b[tn]))
                    break e;
                if ((f || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window,
                f ? (b = n.relatedTarget || n.toElement,
                f = u,
                b = b ? rr(b) : null,
                b !== null && (x = Er(b),
                b !== x || b.tag !== 5 && b.tag !== 6) && (b = null)) : (f = null,
                b = u),
                f !== b)) {
                    if (g = zd,
                    S = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Bd,
                    S = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    x = f == null ? h : Br(f),
                    w = b == null ? h : Br(b),
                    h = new g(S,p + "leave",f,n,c),
                    h.target = x,
                    h.relatedTarget = w,
                    S = null,
                    rr(c) === u && (g = new g(m,p + "enter",b,n,c),
                    g.target = w,
                    g.relatedTarget = x,
                    S = g),
                    x = S,
                    f && b)
                        t: {
                            for (g = f,
                            m = b,
                            p = 0,
                            w = g; w; w = jr(w))
                                p++;
                            for (w = 0,
                            S = m; S; S = jr(S))
                                w++;
                            for (; 0 < p - w; )
                                g = jr(g),
                                p--;
                            for (; 0 < w - p; )
                                m = jr(m),
                                w--;
                            for (; p--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = jr(g),
                                m = jr(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    f !== null && Jd(d, h, f, g, !1),
                    b !== null && x !== null && Jd(d, x, b, g, !0)
                }
            }
            e: {
                if (h = u ? Br(u) : window,
                f = h.nodeName && h.nodeName.toLowerCase(),
                f === "select" || f === "input" && h.type === "file")
                    var E = gw;
                else if (Ud(h))
                    if (Qh)
                        E = xw;
                    else {
                        E = yw;
                        var C = vw
                    }
                else
                    (f = h.nodeName) && f.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = ww);
                if (E && (E = E(e, u))) {
                    Hh(d, E, n, c);
                    break e
                }
                C && C(e, h, u),
                e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && Kl(h, "number", h.value)
            }
            switch (C = u ? Br(u) : window,
            e) {
            case "focusin":
                (Ud(C) || C.contentEditable === "true") && (zr = C,
                lu = u,
                Xo = null);
                break;
            case "focusout":
                Xo = lu = zr = null;
                break;
            case "mousedown":
                uu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                uu = !1,
                Gd(d, n, c);
                break;
            case "selectionchange":
                if (Ew)
                    break;
            case "keydown":
            case "keyup":
                Gd(d, n, c)
            }
            var k;
            if (vc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                    }
                    R = void 0
                }
            else
                Fr ? Vh(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
            R && (Wh && n.locale !== "ko" && (Fr || R !== "onCompositionStart" ? R === "onCompositionEnd" && Fr && (k = Bh()) : (On = c,
            hc = "value"in On ? On.value : On.textContent,
            Fr = !0)),
            C = Bi(u, R),
            0 < C.length && (R = new $d(R,e,null,n,c),
            d.push({
                event: R,
                listeners: C
            }),
            k ? R.data = k : (k = Uh(n),
            k !== null && (R.data = k)))),
            (k = dw ? fw(e, n) : pw(e, n)) && (u = Bi(u, "onBeforeInput"),
            0 < u.length && (c = new $d("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = k))
        }
        nm(d, t)
    })
}
function fa(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Bi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , a = o.stateNode;
        o.tag === 5 && a !== null && (o = a,
        a = aa(e, n),
        a != null && r.unshift(fa(e, a, o)),
        a = aa(e, t),
        a != null && r.push(fa(e, a, o))),
        e = e.return
    }
    return r
}
function jr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Jd(e, t, n, r, o) {
    for (var a = t._reactName, i = []; n !== null && n !== r; ) {
        var s = n
          , l = s.alternate
          , u = s.stateNode;
        if (l !== null && l === r)
            break;
        s.tag === 5 && u !== null && (s = u,
        o ? (l = aa(n, a),
        l != null && i.unshift(fa(n, l, s))) : o || (l = aa(n, a),
        l != null && i.push(fa(n, l, s)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Nw = /\r\n?/g
  , Tw = /\u0000|\uFFFD/g;
function Zd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Nw, `
`).replace(Tw, "")
}
function ti(e, t, n) {
    if (t = Zd(t),
    Zd(e) !== t && n)
        throw Error(O(425))
}
function Wi() {}
var cu = null
  , du = null;
function fu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var pu = typeof setTimeout == "function" ? setTimeout : void 0
  , Rw = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ef = typeof Promise == "function" ? Promise : void 0
  , Ow = typeof queueMicrotask == "function" ? queueMicrotask : typeof ef < "u" ? function(e) {
    return ef.resolve(null).then(e).catch(jw)
}
: pu;
function jw(e) {
    setTimeout(function() {
        throw e
    })
}
function gl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    la(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    la(t)
}
function In(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function tf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Co = Math.random().toString(36).slice(2)
  , Dt = "__reactFiber$" + Co
  , pa = "__reactProps$" + Co
  , tn = "__reactContainer$" + Co
  , hu = "__reactEvents$" + Co
  , Mw = "__reactListeners$" + Co
  , Aw = "__reactHandles$" + Co;
function rr(e) {
    var t = e[Dt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[tn] || n[Dt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = tf(e); e !== null; ) {
                    if (n = e[Dt])
                        return n;
                    e = tf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Aa(e) {
    return e = e[Dt] || e[tn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Br(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(O(33))
}
function vs(e) {
    return e[pa] || null
}
var mu = []
  , Wr = -1;
function Yn(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > Wr || (e.current = mu[Wr],
    mu[Wr] = null,
    Wr--)
}
function re(e, t) {
    Wr++,
    mu[Wr] = e.current,
    e.current = t
}
var Vn = {}
  , Ae = Yn(Vn)
  , Qe = Yn(!1)
  , mr = Vn;
function ho(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Vn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, a;
    for (a in n)
        o[a] = t[a];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function qe(e) {
    return e = e.childContextTypes,
    e != null
}
function Vi() {
    ie(Qe),
    ie(Ae)
}
function nf(e, t, n) {
    if (Ae.current !== Vn)
        throw Error(O(168));
    re(Ae, t),
    re(Qe, n)
}
function om(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(O(108, v0(e) || "Unknown", o));
    return fe({}, n, r)
}
function Ui(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vn,
    mr = Ae.current,
    re(Ae, e),
    re(Qe, Qe.current),
    !0
}
function rf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(O(169));
    n ? (e = om(e, t, mr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(Qe),
    ie(Ae),
    re(Ae, e)) : ie(Qe),
    re(Qe, n)
}
var Gt = null
  , ys = !1
  , vl = !1;
function am(e) {
    Gt === null ? Gt = [e] : Gt.push(e)
}
function Dw(e) {
    ys = !0,
    am(e)
}
function Gn() {
    if (!vl && Gt !== null) {
        vl = !0;
        var e = 0
          , t = te;
        try {
            var n = Gt;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Gt = null,
            ys = !1
        } catch (o) {
            throw Gt !== null && (Gt = Gt.slice(e + 1)),
            Oh(cc, Gn),
            o
        } finally {
            te = t,
            vl = !1
        }
    }
    return null
}
var Vr = []
  , Ur = 0
  , Hi = null
  , Qi = 0
  , at = []
  , it = 0
  , gr = null
  , Xt = 1
  , Jt = "";
function er(e, t) {
    Vr[Ur++] = Qi,
    Vr[Ur++] = Hi,
    Hi = e,
    Qi = t
}
function im(e, t, n) {
    at[it++] = Xt,
    at[it++] = Jt,
    at[it++] = gr,
    gr = e;
    var r = Xt;
    e = Jt;
    var o = 32 - Et(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var a = 32 - Et(t) + o;
    if (30 < a) {
        var i = o - o % 5;
        a = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        Xt = 1 << 32 - Et(t) + o | n << o | r,
        Jt = a + e
    } else
        Xt = 1 << a | n << o | r,
        Jt = e
}
function wc(e) {
    e.return !== null && (er(e, 1),
    im(e, 1, 0))
}
function xc(e) {
    for (; e === Hi; )
        Hi = Vr[--Ur],
        Vr[Ur] = null,
        Qi = Vr[--Ur],
        Vr[Ur] = null;
    for (; e === gr; )
        gr = at[--it],
        at[it] = null,
        Jt = at[--it],
        at[it] = null,
        Xt = at[--it],
        at[it] = null
}
var Je = null
  , Xe = null
  , le = !1
  , St = null;
function sm(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function of(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Xe = In(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Xe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = gr !== null ? {
            id: Xt,
            overflow: Jt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = st(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Je = e,
        Xe = null,
        !0) : !1;
    default:
        return !1
    }
}
function gu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function vu(e) {
    if (le) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!of(e, t)) {
                if (gu(e))
                    throw Error(O(418));
                t = In(n.nextSibling);
                var r = Je;
                t && of(e, t) ? sm(r, n) : (e.flags = e.flags & -4097 | 2,
                le = !1,
                Je = e)
            }
        } else {
            if (gu(e))
                throw Error(O(418));
            e.flags = e.flags & -4097 | 2,
            le = !1,
            Je = e
        }
    }
}
function af(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Je = e
}
function ni(e) {
    if (e !== Je)
        return !1;
    if (!le)
        return af(e),
        le = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !fu(e.type, e.memoizedProps)),
    t && (t = Xe)) {
        if (gu(e))
            throw lm(),
            Error(O(418));
        for (; t; )
            sm(e, t),
            t = In(t.nextSibling)
    }
    if (af(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(O(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = In(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else
        Xe = Je ? In(e.stateNode.nextSibling) : null;
    return !0
}
function lm() {
    for (var e = Xe; e; )
        e = In(e.nextSibling)
}
function mo() {
    Xe = Je = null,
    le = !1
}
function bc(e) {
    St === null ? St = [e] : St.push(e)
}
var Lw = ln.ReactCurrentBatchConfig;
function Io(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(O(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(O(147, e));
            var o = r
              , a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
                var s = o.refs;
                i === null ? delete s[a] : s[a] = i
            }
            ,
            t._stringRef = a,
            t)
        }
        if (typeof e != "string")
            throw Error(O(284));
        if (!n._owner)
            throw Error(O(290, e))
    }
    return e
}
function ri(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function sf(e) {
    var t = e._init;
    return t(e._payload)
}
function um(e) {
    function t(m, p) {
        if (e) {
            var w = m.deletions;
            w === null ? (m.deletions = [p],
            m.flags |= 16) : w.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function o(m, p) {
        return m = Bn(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function a(m, p, w) {
        return m.index = w,
        e ? (w = m.alternate,
        w !== null ? (w = w.index,
        w < p ? (m.flags |= 2,
        p) : w) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function i(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function s(m, p, w, S) {
        return p === null || p.tag !== 6 ? (p = Cl(w, m.mode, S),
        p.return = m,
        p) : (p = o(p, w),
        p.return = m,
        p)
    }
    function l(m, p, w, S) {
        var E = w.type;
        return E === Ir ? c(m, p, w.props.children, S, w.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === bn && sf(E) === p.type) ? (S = o(p, w.props),
        S.ref = Io(m, p, w),
        S.return = m,
        S) : (S = Ti(w.type, w.key, w.props, null, m.mode, S),
        S.ref = Io(m, p, w),
        S.return = m,
        S)
    }
    function u(m, p, w, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== w.containerInfo || p.stateNode.implementation !== w.implementation ? (p = kl(w, m.mode, S),
        p.return = m,
        p) : (p = o(p, w.children || []),
        p.return = m,
        p)
    }
    function c(m, p, w, S, E) {
        return p === null || p.tag !== 7 ? (p = pr(w, m.mode, S, E),
        p.return = m,
        p) : (p = o(p, w),
        p.return = m,
        p)
    }
    function d(m, p, w) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Cl("" + p, m.mode, w),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Qa:
                return w = Ti(p.type, p.key, p.props, null, m.mode, w),
                w.ref = Io(m, null, p),
                w.return = m,
                w;
            case _r:
                return p = kl(p, m.mode, w),
                p.return = m,
                p;
            case bn:
                var S = p._init;
                return d(m, S(p._payload), w)
            }
            if (Vo(p) || Mo(p))
                return p = pr(p, m.mode, w, null),
                p.return = m,
                p;
            ri(m, p)
        }
        return null
    }
    function h(m, p, w, S) {
        var E = p !== null ? p.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return E !== null ? null : s(m, p, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Qa:
                return w.key === E ? l(m, p, w, S) : null;
            case _r:
                return w.key === E ? u(m, p, w, S) : null;
            case bn:
                return E = w._init,
                h(m, p, E(w._payload), S)
            }
            if (Vo(w) || Mo(w))
                return E !== null ? null : c(m, p, w, S, null);
            ri(m, w)
        }
        return null
    }
    function f(m, p, w, S, E) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return m = m.get(w) || null,
            s(p, m, "" + S, E);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Qa:
                return m = m.get(S.key === null ? w : S.key) || null,
                l(p, m, S, E);
            case _r:
                return m = m.get(S.key === null ? w : S.key) || null,
                u(p, m, S, E);
            case bn:
                var C = S._init;
                return f(m, p, w, C(S._payload), E)
            }
            if (Vo(S) || Mo(S))
                return m = m.get(w) || null,
                c(p, m, S, E, null);
            ri(p, S)
        }
        return null
    }
    function b(m, p, w, S) {
        for (var E = null, C = null, k = p, R = p = 0, A = null; k !== null && R < w.length; R++) {
            k.index > R ? (A = k,
            k = null) : A = k.sibling;
            var M = h(m, k, w[R], S);
            if (M === null) {
                k === null && (k = A);
                break
            }
            e && k && M.alternate === null && t(m, k),
            p = a(M, p, R),
            C === null ? E = M : C.sibling = M,
            C = M,
            k = A
        }
        if (R === w.length)
            return n(m, k),
            le && er(m, R),
            E;
        if (k === null) {
            for (; R < w.length; R++)
                k = d(m, w[R], S),
                k !== null && (p = a(k, p, R),
                C === null ? E = k : C.sibling = k,
                C = k);
            return le && er(m, R),
            E
        }
        for (k = r(m, k); R < w.length; R++)
            A = f(k, m, R, w[R], S),
            A !== null && (e && A.alternate !== null && k.delete(A.key === null ? R : A.key),
            p = a(A, p, R),
            C === null ? E = A : C.sibling = A,
            C = A);
        return e && k.forEach(function(z) {
            return t(m, z)
        }),
        le && er(m, R),
        E
    }
    function g(m, p, w, S) {
        var E = Mo(w);
        if (typeof E != "function")
            throw Error(O(150));
        if (w = E.call(w),
        w == null)
            throw Error(O(151));
        for (var C = E = null, k = p, R = p = 0, A = null, M = w.next(); k !== null && !M.done; R++,
        M = w.next()) {
            k.index > R ? (A = k,
            k = null) : A = k.sibling;
            var z = h(m, k, M.value, S);
            if (z === null) {
                k === null && (k = A);
                break
            }
            e && k && z.alternate === null && t(m, k),
            p = a(z, p, R),
            C === null ? E = z : C.sibling = z,
            C = z,
            k = A
        }
        if (M.done)
            return n(m, k),
            le && er(m, R),
            E;
        if (k === null) {
            for (; !M.done; R++,
            M = w.next())
                M = d(m, M.value, S),
                M !== null && (p = a(M, p, R),
                C === null ? E = M : C.sibling = M,
                C = M);
            return le && er(m, R),
            E
        }
        for (k = r(m, k); !M.done; R++,
        M = w.next())
            M = f(k, m, R, M.value, S),
            M !== null && (e && M.alternate !== null && k.delete(M.key === null ? R : M.key),
            p = a(M, p, R),
            C === null ? E = M : C.sibling = M,
            C = M);
        return e && k.forEach(function(I) {
            return t(m, I)
        }),
        le && er(m, R),
        E
    }
    function x(m, p, w, S) {
        if (typeof w == "object" && w !== null && w.type === Ir && w.key === null && (w = w.props.children),
        typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Qa:
                e: {
                    for (var E = w.key, C = p; C !== null; ) {
                        if (C.key === E) {
                            if (E = w.type,
                            E === Ir) {
                                if (C.tag === 7) {
                                    n(m, C.sibling),
                                    p = o(C, w.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === bn && sf(E) === C.type) {
                                n(m, C.sibling),
                                p = o(C, w.props),
                                p.ref = Io(m, C, w),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    w.type === Ir ? (p = pr(w.props.children, m.mode, S, w.key),
                    p.return = m,
                    m = p) : (S = Ti(w.type, w.key, w.props, null, m.mode, S),
                    S.ref = Io(m, p, w),
                    S.return = m,
                    m = S)
                }
                return i(m);
            case _r:
                e: {
                    for (C = w.key; p !== null; ) {
                        if (p.key === C)
                            if (p.tag === 4 && p.stateNode.containerInfo === w.containerInfo && p.stateNode.implementation === w.implementation) {
                                n(m, p.sibling),
                                p = o(p, w.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = kl(w, m.mode, S),
                    p.return = m,
                    m = p
                }
                return i(m);
            case bn:
                return C = w._init,
                x(m, p, C(w._payload), S)
            }
            if (Vo(w))
                return b(m, p, w, S);
            if (Mo(w))
                return g(m, p, w, S);
            ri(m, w)
        }
        return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = o(p, w),
        p.return = m,
        m = p) : (n(m, p),
        p = Cl(w, m.mode, S),
        p.return = m,
        m = p),
        i(m)) : n(m, p)
    }
    return x
}
var go = um(!0)
  , cm = um(!1)
  , qi = Yn(null)
  , Yi = null
  , Hr = null
  , Sc = null;
function Ec() {
    Sc = Hr = Yi = null
}
function Cc(e) {
    var t = qi.current;
    ie(qi),
    e._currentValue = t
}
function yu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Jr(e, t) {
    Yi = e,
    Sc = Hr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (He = !0),
    e.firstContext = null)
}
function ut(e) {
    var t = e._currentValue;
    if (Sc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Hr === null) {
            if (Yi === null)
                throw Error(O(308));
            Hr = e,
            Yi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Hr = Hr.next = e;
    return t
}
var or = null;
function kc(e) {
    or === null ? or = [e] : or.push(e)
}
function dm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    kc(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    nn(e, r)
}
function nn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Sn = !1;
function Pc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function fm(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Zt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Fn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        nn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    kc(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    nn(e, n)
}
function Si(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        dc(e, n)
    }
}
function lf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , a = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? o = a = i : a = a.next = i,
                n = n.next
            } while (n !== null);
            a === null ? o = a = t : a = a.next = t
        } else
            o = a = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Gi(e, t, n, r) {
    var o = e.updateQueue;
    Sn = !1;
    var a = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var l = s
          , u = l.next;
        l.next = null,
        i === null ? a = u : i.next = u,
        i = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        s = c.lastBaseUpdate,
        s !== i && (s === null ? c.firstBaseUpdate = u : s.next = u,
        c.lastBaseUpdate = l))
    }
    if (a !== null) {
        var d = o.baseState;
        i = 0,
        c = u = l = null,
        s = a;
        do {
            var h = s.lane
              , f = s.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: f,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var b = e
                      , g = s;
                    switch (h = t,
                    f = n,
                    g.tag) {
                    case 1:
                        if (b = g.payload,
                        typeof b == "function") {
                            d = b.call(f, d, h);
                            break e
                        }
                        d = b;
                        break e;
                    case 3:
                        b.flags = b.flags & -65537 | 128;
                    case 0:
                        if (b = g.payload,
                        h = typeof b == "function" ? b.call(f, d, h) : b,
                        h == null)
                            break e;
                        d = fe({}, d, h);
                        break e;
                    case 2:
                        Sn = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                h = o.effects,
                h === null ? o.effects = [s] : h.push(s))
            } else
                f = {
                    eventTime: f,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                c === null ? (u = c = f,
                l = d) : c = c.next = f,
                i |= h;
            if (s = s.next,
            s === null) {
                if (s = o.shared.pending,
                s === null)
                    break;
                h = s,
                s = h.next,
                h.next = null,
                o.lastBaseUpdate = h,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            a === null && (o.shared.lanes = 0);
        yr |= i,
        e.lanes = i,
        e.memoizedState = d
    }
}
function uf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(O(191, o));
                o.call(r)
            }
        }
}
var Da = {}
  , Bt = Yn(Da)
  , ha = Yn(Da)
  , ma = Yn(Da);
function ar(e) {
    if (e === Da)
        throw Error(O(174));
    return e
}
function Nc(e, t) {
    switch (re(ma, t),
    re(ha, e),
    re(Bt, Da),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Jl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Jl(t, e)
    }
    ie(Bt),
    re(Bt, t)
}
function vo() {
    ie(Bt),
    ie(ha),
    ie(ma)
}
function pm(e) {
    ar(ma.current);
    var t = ar(Bt.current)
      , n = Jl(t, e.type);
    t !== n && (re(ha, e),
    re(Bt, n))
}
function Tc(e) {
    ha.current === e && (ie(Bt),
    ie(ha))
}
var ce = Yn(0);
function Ki(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var yl = [];
function Rc() {
    for (var e = 0; e < yl.length; e++)
        yl[e]._workInProgressVersionPrimary = null;
    yl.length = 0
}
var Ei = ln.ReactCurrentDispatcher
  , wl = ln.ReactCurrentBatchConfig
  , vr = 0
  , de = null
  , xe = null
  , Se = null
  , Xi = !1
  , Jo = !1
  , ga = 0
  , _w = 0;
function Re() {
    throw Error(O(321))
}
function Oc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!kt(e[n], t[n]))
            return !1;
    return !0
}
function jc(e, t, n, r, o, a) {
    if (vr = a,
    de = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ei.current = e === null || e.memoizedState === null ? $w : Bw,
    e = n(r, o),
    Jo) {
        a = 0;
        do {
            if (Jo = !1,
            ga = 0,
            25 <= a)
                throw Error(O(301));
            a += 1,
            Se = xe = null,
            t.updateQueue = null,
            Ei.current = Ww,
            e = n(r, o)
        } while (Jo)
    }
    if (Ei.current = Ji,
    t = xe !== null && xe.next !== null,
    vr = 0,
    Se = xe = de = null,
    Xi = !1,
    t)
        throw Error(O(300));
    return e
}
function Mc() {
    var e = ga !== 0;
    return ga = 0,
    e
}
function Ot() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Se === null ? de.memoizedState = Se = e : Se = Se.next = e,
    Se
}
function ct() {
    if (xe === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = xe.next;
    var t = Se === null ? de.memoizedState : Se.next;
    if (t !== null)
        Se = t,
        xe = e;
    else {
        if (e === null)
            throw Error(O(310));
        xe = e,
        e = {
            memoizedState: xe.memoizedState,
            baseState: xe.baseState,
            baseQueue: xe.baseQueue,
            queue: xe.queue,
            next: null
        },
        Se === null ? de.memoizedState = Se = e : Se = Se.next = e
    }
    return Se
}
function va(e, t) {
    return typeof t == "function" ? t(e) : t
}
function xl(e) {
    var t = ct()
      , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = xe
      , o = r.baseQueue
      , a = n.pending;
    if (a !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = a.next,
            a.next = i
        }
        r.baseQueue = o = a,
        n.pending = null
    }
    if (o !== null) {
        a = o.next,
        r = r.baseState;
        var s = i = null
          , l = null
          , u = a;
        do {
            var c = u.lane;
            if ((vr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (s = l = d,
                i = r) : l = l.next = d,
                de.lanes |= c,
                yr |= c
            }
            u = u.next
        } while (u !== null && u !== a);
        l === null ? i = r : l.next = s,
        kt(r, t.memoizedState) || (He = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            a = o.lane,
            de.lanes |= a,
            yr |= a,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function bl(e) {
    var t = ct()
      , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , a = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            a = e(a, i.action),
            i = i.next;
        while (i !== o);
        kt(a, t.memoizedState) || (He = !0),
        t.memoizedState = a,
        t.baseQueue === null && (t.baseState = a),
        n.lastRenderedState = a
    }
    return [a, r]
}
function hm() {}
function mm(e, t) {
    var n = de
      , r = ct()
      , o = t()
      , a = !kt(r.memoizedState, o);
    if (a && (r.memoizedState = o,
    He = !0),
    r = r.queue,
    Ac(ym.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || Se !== null && Se.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ya(9, vm.bind(null, n, r, o, t), void 0, null),
        Ee === null)
            throw Error(O(349));
        vr & 30 || gm(n, t, o)
    }
    return o
}
function gm(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function vm(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    wm(t) && xm(e)
}
function ym(e, t, n) {
    return n(function() {
        wm(t) && xm(e)
    })
}
function wm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !kt(e, n)
    } catch {
        return !0
    }
}
function xm(e) {
    var t = nn(e, 1);
    t !== null && Ct(t, e, 1, -1)
}
function cf(e) {
    var t = Ot();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = zw.bind(null, de, e),
    [t.memoizedState, e]
}
function ya(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function bm() {
    return ct().memoizedState
}
function Ci(e, t, n, r) {
    var o = Ot();
    de.flags |= e,
    o.memoizedState = ya(1 | t, n, void 0, r === void 0 ? null : r)
}
function ws(e, t, n, r) {
    var o = ct();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (xe !== null) {
        var i = xe.memoizedState;
        if (a = i.destroy,
        r !== null && Oc(r, i.deps)) {
            o.memoizedState = ya(t, n, a, r);
            return
        }
    }
    de.flags |= e,
    o.memoizedState = ya(1 | t, n, a, r)
}
function df(e, t) {
    return Ci(8390656, 8, e, t)
}
function Ac(e, t) {
    return ws(2048, 8, e, t)
}
function Sm(e, t) {
    return ws(4, 2, e, t)
}
function Em(e, t) {
    return ws(4, 4, e, t)
}
function Cm(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function km(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ws(4, 4, Cm.bind(null, t, e), n)
}
function Dc() {}
function Pm(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Oc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Nm(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Oc(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Tm(e, t, n) {
    return vr & 21 ? (kt(n, t) || (n = Ah(),
    de.lanes |= n,
    yr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    He = !0),
    e.memoizedState = n)
}
function Iw(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = wl.transition;
    wl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        te = n,
        wl.transition = r
    }
}
function Rm() {
    return ct().memoizedState
}
function Fw(e, t, n) {
    var r = $n(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Om(e))
        jm(t, n);
    else if (n = dm(e, t, n, r),
    n !== null) {
        var o = Fe();
        Ct(n, e, r, o),
        Mm(n, t, r)
    }
}
function zw(e, t, n) {
    var r = $n(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Om(e))
        jm(t, o);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
        a !== null))
            try {
                var i = t.lastRenderedState
                  , s = a(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = s,
                kt(s, i)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    kc(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = dm(e, t, o, r),
        n !== null && (o = Fe(),
        Ct(n, e, r, o),
        Mm(n, t, r))
    }
}
function Om(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de
}
function jm(e, t) {
    Jo = Xi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Mm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        dc(e, n)
    }
}
var Ji = {
    readContext: ut,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1
}
  , $w = {
    readContext: ut,
    useCallback: function(e, t) {
        return Ot().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ut,
    useEffect: df,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ci(4194308, 4, Cm.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ci(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ci(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ot();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ot();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Fw.bind(null, de, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ot();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: cf,
    useDebugValue: Dc,
    useDeferredValue: function(e) {
        return Ot().memoizedState = e
    },
    useTransition: function() {
        var e = cf(!1)
          , t = e[0];
        return e = Iw.bind(null, e[1]),
        Ot().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = de
          , o = Ot();
        if (le) {
            if (n === void 0)
                throw Error(O(407));
            n = n()
        } else {
            if (n = t(),
            Ee === null)
                throw Error(O(349));
            vr & 30 || gm(r, t, n)
        }
        o.memoizedState = n;
        var a = {
            value: n,
            getSnapshot: t
        };
        return o.queue = a,
        df(ym.bind(null, r, a, e), [e]),
        r.flags |= 2048,
        ya(9, vm.bind(null, r, a, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ot()
          , t = Ee.identifierPrefix;
        if (le) {
            var n = Jt
              , r = Xt;
            n = (r & ~(1 << 32 - Et(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ga++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = _w++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Bw = {
    readContext: ut,
    useCallback: Pm,
    useContext: ut,
    useEffect: Ac,
    useImperativeHandle: km,
    useInsertionEffect: Sm,
    useLayoutEffect: Em,
    useMemo: Nm,
    useReducer: xl,
    useRef: bm,
    useState: function() {
        return xl(va)
    },
    useDebugValue: Dc,
    useDeferredValue: function(e) {
        var t = ct();
        return Tm(t, xe.memoizedState, e)
    },
    useTransition: function() {
        var e = xl(va)[0]
          , t = ct().memoizedState;
        return [e, t]
    },
    useMutableSource: hm,
    useSyncExternalStore: mm,
    useId: Rm,
    unstable_isNewReconciler: !1
}
  , Ww = {
    readContext: ut,
    useCallback: Pm,
    useContext: ut,
    useEffect: Ac,
    useImperativeHandle: km,
    useInsertionEffect: Sm,
    useLayoutEffect: Em,
    useMemo: Nm,
    useReducer: bl,
    useRef: bm,
    useState: function() {
        return bl(va)
    },
    useDebugValue: Dc,
    useDeferredValue: function(e) {
        var t = ct();
        return xe === null ? t.memoizedState = e : Tm(t, xe.memoizedState, e)
    },
    useTransition: function() {
        var e = bl(va)[0]
          , t = ct().memoizedState;
        return [e, t]
    },
    useMutableSource: hm,
    useSyncExternalStore: mm,
    useId: Rm,
    unstable_isNewReconciler: !1
};
function vt(e, t) {
    if (e && e.defaultProps) {
        t = fe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function wu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : fe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var xs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Er(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Fe()
          , o = $n(e)
          , a = Zt(r, o);
        a.payload = t,
        n != null && (a.callback = n),
        t = Fn(e, a, o),
        t !== null && (Ct(t, e, o, r),
        Si(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Fe()
          , o = $n(e)
          , a = Zt(r, o);
        a.tag = 1,
        a.payload = t,
        n != null && (a.callback = n),
        t = Fn(e, a, o),
        t !== null && (Ct(t, e, o, r),
        Si(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Fe()
          , r = $n(e)
          , o = Zt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Fn(e, o, r),
        t !== null && (Ct(t, e, r, n),
        Si(t, e, r))
    }
};
function ff(e, t, n, r, o, a, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, i) : t.prototype && t.prototype.isPureReactComponent ? !ca(n, r) || !ca(o, a) : !0
}
function Am(e, t, n) {
    var r = !1
      , o = Vn
      , a = t.contextType;
    return typeof a == "object" && a !== null ? a = ut(a) : (o = qe(t) ? mr : Ae.current,
    r = t.contextTypes,
    a = (r = r != null) ? ho(e, o) : Vn),
    t = new t(n,a),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = xs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = a),
    t
}
function pf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xs.enqueueReplaceState(t, t.state, null)
}
function xu(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Pc(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? o.context = ut(a) : (a = qe(t) ? mr : Ae.current,
    o.context = ho(e, a)),
    o.state = e.memoizedState,
    a = t.getDerivedStateFromProps,
    typeof a == "function" && (wu(e, t, a, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && xs.enqueueReplaceState(o, o.state, null),
    Gi(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function yo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += g0(r),
            r = r.return;
        while (r);
        var o = n
    } catch (a) {
        o = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Sl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function bu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Vw = typeof WeakMap == "function" ? WeakMap : Map;
function Dm(e, t, n) {
    n = Zt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        es || (es = !0,
        ju = r),
        bu(e, t)
    }
    ,
    n
}
function Lm(e, t, n) {
    n = Zt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            bu(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        bu(e, t),
        typeof r != "function" && (zn === null ? zn = new Set([this]) : zn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function hf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Vw;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = rx.bind(null, e, t, n),
    t.then(e, e))
}
function mf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function gf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Zt(-1, 1),
    t.tag = 2,
    Fn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Uw = ln.ReactCurrentOwner
  , He = !1;
function _e(e, t, n, r) {
    t.child = e === null ? cm(t, null, n, r) : go(t, e.child, n, r)
}
function vf(e, t, n, r, o) {
    n = n.render;
    var a = t.ref;
    return Jr(t, o),
    r = jc(e, t, n, r, a, o),
    n = Mc(),
    e !== null && !He ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    rn(e, t, o)) : (le && n && wc(t),
    t.flags |= 1,
    _e(e, t, r, o),
    t.child)
}
function yf(e, t, n, r, o) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !Wc(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = a,
        _m(e, t, a, r, o)) : (e = Ti(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (a = e.child,
    !(e.lanes & o)) {
        var i = a.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ca,
        n(i, r) && e.ref === t.ref)
            return rn(e, t, o)
    }
    return t.flags |= 1,
    e = Bn(a, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function _m(e, t, n, r, o) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (ca(a, r) && e.ref === t.ref)
            if (He = !1,
            t.pendingProps = r = a,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (He = !0);
            else
                return t.lanes = e.lanes,
                rn(e, t, o)
    }
    return Su(e, t, n, r, o)
}
function Im(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            re(qr, Ge),
            Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = a !== null ? a.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                re(qr, Ge),
                Ge |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = a !== null ? a.baseLanes : n,
            re(qr, Ge),
            Ge |= r
        }
    else
        a !== null ? (r = a.baseLanes | n,
        t.memoizedState = null) : r = n,
        re(qr, Ge),
        Ge |= r;
    return _e(e, t, o, n),
    t.child
}
function Fm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Su(e, t, n, r, o) {
    var a = qe(n) ? mr : Ae.current;
    return a = ho(t, a),
    Jr(t, o),
    n = jc(e, t, n, r, a, o),
    r = Mc(),
    e !== null && !He ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    rn(e, t, o)) : (le && r && wc(t),
    t.flags |= 1,
    _e(e, t, n, o),
    t.child)
}
function wf(e, t, n, r, o) {
    if (qe(n)) {
        var a = !0;
        Ui(t)
    } else
        a = !1;
    if (Jr(t, o),
    t.stateNode === null)
        ki(e, t),
        Am(t, n, r),
        xu(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , s = t.memoizedProps;
        i.props = s;
        var l = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = ut(u) : (u = qe(n) ? mr : Ae.current,
        u = ho(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || l !== u) && pf(t, i, r, u),
        Sn = !1;
        var h = t.memoizedState;
        i.state = h,
        Gi(t, r, i, o),
        l = t.memoizedState,
        s !== r || h !== l || Qe.current || Sn ? (typeof c == "function" && (wu(t, n, c, r),
        l = t.memoizedState),
        (s = Sn || ff(t, n, s, r, h, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        i.props = r,
        i.state = l,
        i.context = u,
        r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        fm(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : vt(t.type, s),
        i.props = u,
        d = t.pendingProps,
        h = i.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = ut(l) : (l = qe(n) ? mr : Ae.current,
        l = ho(t, l));
        var f = n.getDerivedStateFromProps;
        (c = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== d || h !== l) && pf(t, i, r, l),
        Sn = !1,
        h = t.memoizedState,
        i.state = h,
        Gi(t, r, i, o);
        var b = t.memoizedState;
        s !== d || h !== b || Qe.current || Sn ? (typeof f == "function" && (wu(t, n, f, r),
        b = t.memoizedState),
        (u = Sn || ff(t, n, u, r, h, b, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, b, l),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, b, l)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = b),
        i.props = r,
        i.state = b,
        i.context = l,
        r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Eu(e, t, n, r, a, o)
}
function Eu(e, t, n, r, o, a) {
    Fm(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && rf(t, n, !1),
        rn(e, t, a);
    r = t.stateNode,
    Uw.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = go(t, e.child, null, a),
    t.child = go(t, null, s, a)) : _e(e, t, s, a),
    t.memoizedState = r.state,
    o && rf(t, n, !0),
    t.child
}
function zm(e) {
    var t = e.stateNode;
    t.pendingContext ? nf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nf(e, t.context, !1),
    Nc(e, t.containerInfo)
}
function xf(e, t, n, r, o) {
    return mo(),
    bc(o),
    t.flags |= 256,
    _e(e, t, n, r),
    t.child
}
var Cu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ku(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function $m(e, t, n) {
    var r = t.pendingProps, o = ce.current, a = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? (a = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    re(ce, o & 1),
    e === null)
        return vu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        a ? (r = t.mode,
        a = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && a !== null ? (a.childLanes = 0,
        a.pendingProps = i) : a = Es(i, r, 0, null),
        e = pr(e, r, n, null),
        a.return = t,
        e.return = t,
        a.sibling = e,
        t.child = a,
        t.child.memoizedState = ku(n),
        t.memoizedState = Cu,
        e) : Lc(t, i));
    if (o = e.memoizedState,
    o !== null && (s = o.dehydrated,
    s !== null))
        return Hw(e, t, i, r, s, o, n);
    if (a) {
        a = r.fallback,
        i = t.mode,
        o = e.child,
        s = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Bn(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        s !== null ? a = Bn(s, a) : (a = pr(a, i, n, null),
        a.flags |= 2),
        a.return = t,
        r.return = t,
        r.sibling = a,
        t.child = r,
        r = a,
        a = t.child,
        i = e.child.memoizedState,
        i = i === null ? ku(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        a.memoizedState = i,
        a.childLanes = e.childLanes & ~n,
        t.memoizedState = Cu,
        r
    }
    return a = e.child,
    e = a.sibling,
    r = Bn(a, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Lc(e, t) {
    return t = Es({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function oi(e, t, n, r) {
    return r !== null && bc(r),
    go(t, e.child, null, n),
    e = Lc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Hw(e, t, n, r, o, a, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Sl(Error(O(422))),
        oi(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (a = r.fallback,
        o = t.mode,
        r = Es({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        a = pr(a, o, i, null),
        a.flags |= 2,
        r.return = t,
        a.return = t,
        r.sibling = a,
        t.child = r,
        t.mode & 1 && go(t, e.child, null, i),
        t.child.memoizedState = ku(i),
        t.memoizedState = Cu,
        a);
    if (!(t.mode & 1))
        return oi(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        a = Error(O(419)),
        r = Sl(a, r, void 0),
        oi(e, t, i, r)
    }
    if (s = (i & e.childLanes) !== 0,
    He || s) {
        if (r = Ee,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== a.retryLane && (a.retryLane = o,
            nn(e, o),
            Ct(r, e, o, -1))
        }
        return Bc(),
        r = Sl(Error(O(421))),
        oi(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = ox.bind(null, e),
    o._reactRetry = t,
    null) : (e = a.treeContext,
    Xe = In(o.nextSibling),
    Je = t,
    le = !0,
    St = null,
    e !== null && (at[it++] = Xt,
    at[it++] = Jt,
    at[it++] = gr,
    Xt = e.id,
    Jt = e.overflow,
    gr = t),
    t = Lc(t, r.children),
    t.flags |= 4096,
    t)
}
function bf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    yu(e.return, t, n)
}
function El(e, t, n, r, o) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (a.isBackwards = t,
    a.rendering = null,
    a.renderingStartTime = 0,
    a.last = r,
    a.tail = n,
    a.tailMode = o)
}
function Bm(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , a = r.tail;
    if (_e(e, t, r.children, n),
    r = ce.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && bf(e, n, t);
                else if (e.tag === 19)
                    bf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (re(ce, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ki(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            El(t, !1, o, n, a);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ki(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            El(t, !0, n, null, a);
            break;
        case "together":
            El(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ki(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function rn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    yr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Bn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Bn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Qw(e, t, n) {
    switch (t.tag) {
    case 3:
        zm(t),
        mo();
        break;
    case 5:
        pm(t);
        break;
    case 1:
        qe(t.type) && Ui(t);
        break;
    case 4:
        Nc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        re(qi, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (re(ce, ce.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? $m(e, t, n) : (re(ce, ce.current & 1),
            e = rn(e, t, n),
            e !== null ? e.sibling : null);
        re(ce, ce.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Bm(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        re(ce, ce.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Im(e, t, n)
    }
    return rn(e, t, n)
}
var Wm, Pu, Vm, Um;
Wm = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Pu = function() {}
;
Vm = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        ar(Bt.current);
        var a = null;
        switch (n) {
        case "input":
            o = Yl(e, o),
            r = Yl(e, r),
            a = [];
            break;
        case "select":
            o = fe({}, o, {
                value: void 0
            }),
            r = fe({}, r, {
                value: void 0
            }),
            a = [];
            break;
        case "textarea":
            o = Xl(e, o),
            r = Xl(e, r),
            a = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wi)
        }
        Zl(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var s = o[u];
                    for (i in s)
                        s.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ra.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (s = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== s && (l != null || s != null))
                if (u === "style")
                    if (s) {
                        for (i in s)
                            !s.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in l)
                            l.hasOwnProperty(i) && s[i] !== l[i] && (n || (n = {}),
                            n[i] = l[i])
                    } else
                        n || (a || (a = []),
                        a.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    s = s ? s.__html : void 0,
                    l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ra.hasOwnProperty(u) ? (l != null && u === "onScroll" && ae("scroll", e),
                    a || s === l || (a = [])) : (a = a || []).push(u, l))
        }
        n && (a = a || []).push("style", n);
        var u = a;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Um = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Fo(e, t) {
    if (!le)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function qw(e, t, n) {
    var r = t.pendingProps;
    switch (xc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Oe(t),
        null;
    case 1:
        return qe(t.type) && Vi(),
        Oe(t),
        null;
    case 3:
        return r = t.stateNode,
        vo(),
        ie(Qe),
        ie(Ae),
        Rc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        St !== null && (Du(St),
        St = null))),
        Pu(e, t),
        Oe(t),
        null;
    case 5:
        Tc(t);
        var o = ar(ma.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Vm(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(O(166));
                return Oe(t),
                null
            }
            if (e = ar(Bt.current),
            ni(t)) {
                r = t.stateNode,
                n = t.type;
                var a = t.memoizedProps;
                switch (r[Dt] = t,
                r[pa] = a,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ae("cancel", r),
                    ae("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ae("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Ho.length; o++)
                        ae(Ho[o], r);
                    break;
                case "source":
                    ae("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ae("error", r),
                    ae("load", r);
                    break;
                case "details":
                    ae("toggle", r);
                    break;
                case "input":
                    Rd(r, a),
                    ae("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!a.multiple
                    },
                    ae("invalid", r);
                    break;
                case "textarea":
                    jd(r, a),
                    ae("invalid", r)
                }
                Zl(n, a),
                o = null;
                for (var i in a)
                    if (a.hasOwnProperty(i)) {
                        var s = a[i];
                        i === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== !0 && ti(r.textContent, s, e),
                        o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && ti(r.textContent, s, e),
                        o = ["children", "" + s]) : ra.hasOwnProperty(i) && s != null && i === "onScroll" && ae("scroll", r)
                    }
                switch (n) {
                case "input":
                    qa(r),
                    Od(r, a, !0);
                    break;
                case "textarea":
                    qa(r),
                    Md(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof a.onClick == "function" && (r.onclick = Wi)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = yh(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Dt] = t,
                e[pa] = r,
                Wm(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = eu(n, r),
                    n) {
                    case "dialog":
                        ae("cancel", e),
                        ae("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ae("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Ho.length; o++)
                            ae(Ho[o], e);
                        o = r;
                        break;
                    case "source":
                        ae("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ae("error", e),
                        ae("load", e),
                        o = r;
                        break;
                    case "details":
                        ae("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Rd(e, r),
                        o = Yl(e, r),
                        ae("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = fe({}, r, {
                            value: void 0
                        }),
                        ae("invalid", e);
                        break;
                    case "textarea":
                        jd(e, r),
                        o = Xl(e, r),
                        ae("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Zl(n, o),
                    s = o;
                    for (a in s)
                        if (s.hasOwnProperty(a)) {
                            var l = s[a];
                            a === "style" ? bh(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && wh(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && oa(e, l) : typeof l == "number" && oa(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ra.hasOwnProperty(a) ? l != null && a === "onScroll" && ae("scroll", e) : l != null && ac(e, a, l, i))
                        }
                    switch (n) {
                    case "input":
                        qa(e),
                        Od(e, r, !1);
                        break;
                    case "textarea":
                        qa(e),
                        Md(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Wn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        a = r.value,
                        a != null ? Yr(e, !!r.multiple, a, !1) : r.defaultValue != null && Yr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Wi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Oe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Um(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(O(166));
            if (n = ar(ma.current),
            ar(Bt.current),
            ni(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Dt] = t,
                (a = r.nodeValue !== n) && (e = Je,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ti(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                a && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Dt] = t,
                t.stateNode = r
        }
        return Oe(t),
        null;
    case 13:
        if (ie(ce),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (le && Xe !== null && t.mode & 1 && !(t.flags & 128))
                lm(),
                mo(),
                t.flags |= 98560,
                a = !1;
            else if (a = ni(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(O(318));
                    if (a = t.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(O(317));
                    a[Dt] = t
                } else
                    mo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Oe(t),
                a = !1
            } else
                St !== null && (Du(St),
                St = null),
                a = !0;
            if (!a)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ce.current & 1 ? be === 0 && (be = 3) : Bc())),
        t.updateQueue !== null && (t.flags |= 4),
        Oe(t),
        null);
    case 4:
        return vo(),
        Pu(e, t),
        e === null && da(t.stateNode.containerInfo),
        Oe(t),
        null;
    case 10:
        return Cc(t.type._context),
        Oe(t),
        null;
    case 17:
        return qe(t.type) && Vi(),
        Oe(t),
        null;
    case 19:
        if (ie(ce),
        a = t.memoizedState,
        a === null)
            return Oe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = a.rendering,
        i === null)
            if (r)
                Fo(a, !1);
            else {
                if (be !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = Ki(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Fo(a, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                a = n,
                                e = r,
                                a.flags &= 14680066,
                                i = a.alternate,
                                i === null ? (a.childLanes = 0,
                                a.lanes = e,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null) : (a.childLanes = i.childLanes,
                                a.lanes = i.lanes,
                                a.child = i.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = i.memoizedProps,
                                a.memoizedState = i.memoizedState,
                                a.updateQueue = i.updateQueue,
                                a.type = i.type,
                                e = i.dependencies,
                                a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return re(ce, ce.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                a.tail !== null && me() > wo && (t.flags |= 128,
                r = !0,
                Fo(a, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ki(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Fo(a, !0),
                    a.tail === null && a.tailMode === "hidden" && !i.alternate && !le)
                        return Oe(t),
                        null
                } else
                    2 * me() - a.renderingStartTime > wo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Fo(a, !1),
                    t.lanes = 4194304);
            a.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = a.last,
            n !== null ? n.sibling = i : t.child = i,
            a.last = i)
        }
        return a.tail !== null ? (t = a.tail,
        a.rendering = t,
        a.tail = t.sibling,
        a.renderingStartTime = me(),
        t.sibling = null,
        n = ce.current,
        re(ce, r ? n & 1 | 2 : n & 1),
        t) : (Oe(t),
        null);
    case 22:
    case 23:
        return $c(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (Oe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(O(156, t.tag))
}
function Yw(e, t) {
    switch (xc(t),
    t.tag) {
    case 1:
        return qe(t.type) && Vi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return vo(),
        ie(Qe),
        ie(Ae),
        Rc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Tc(t),
        null;
    case 13:
        if (ie(ce),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(O(340));
            mo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ce),
        null;
    case 4:
        return vo(),
        null;
    case 10:
        return Cc(t.type._context),
        null;
    case 22:
    case 23:
        return $c(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ai = !1
  , Me = !1
  , Gw = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function Qr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                he(e, t, r)
            }
        else
            n.current = null
}
function Nu(e, t, n) {
    try {
        n()
    } catch (r) {
        he(e, t, r)
    }
}
var Sf = !1;
function Kw(e, t) {
    if (cu = zi,
    e = Gh(),
    yc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , a = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        a.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , s = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , h = null;
                    t: for (; ; ) {
                        for (var f; d !== n || o !== 0 && d.nodeType !== 3 || (s = i + o),
                        d !== a || r !== 0 && d.nodeType !== 3 || (l = i + r),
                        d.nodeType === 3 && (i += d.nodeValue.length),
                        (f = d.firstChild) !== null; )
                            h = d,
                            d = f;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (h === n && ++u === o && (s = i),
                            h === a && ++c === r && (l = i),
                            (f = d.nextSibling) !== null)
                                break;
                            d = h,
                            h = d.parentNode
                        }
                        d = f
                    }
                    n = s === -1 || l === -1 ? null : {
                        start: s,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (du = {
        focusedElem: e,
        selectionRange: n
    },
    zi = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (b !== null) {
                                var g = b.memoizedProps
                                  , x = b.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : vt(t.type, g), x);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var w = t.stateNode.containerInfo;
                            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(O(163))
                        }
                } catch (S) {
                    he(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return b = Sf,
    Sf = !1,
    b
}
function Zo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var a = o.destroy;
                o.destroy = void 0,
                a !== void 0 && Nu(t, n, a)
            }
            o = o.next
        } while (o !== r)
    }
}
function bs(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Tu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Hm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Hm(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Dt],
    delete t[pa],
    delete t[hu],
    delete t[Mw],
    delete t[Aw])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Qm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ef(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Qm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ru(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Wi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ru(e, t, n),
        e = e.sibling; e !== null; )
            Ru(e, t, n),
            e = e.sibling
}
function Ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ou(e, t, n),
        e = e.sibling; e !== null; )
            Ou(e, t, n),
            e = e.sibling
}
var Ce = null
  , bt = !1;
function mn(e, t, n) {
    for (n = n.child; n !== null; )
        qm(e, t, n),
        n = n.sibling
}
function qm(e, t, n) {
    if ($t && typeof $t.onCommitFiberUnmount == "function")
        try {
            $t.onCommitFiberUnmount(ps, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Me || Qr(n, t);
    case 6:
        var r = Ce
          , o = bt;
        Ce = null,
        mn(e, t, n),
        Ce = r,
        bt = o,
        Ce !== null && (bt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
        break;
    case 18:
        Ce !== null && (bt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? gl(e.parentNode, n) : e.nodeType === 1 && gl(e, n),
        la(e)) : gl(Ce, n.stateNode));
        break;
    case 4:
        r = Ce,
        o = bt,
        Ce = n.stateNode.containerInfo,
        bt = !0,
        mn(e, t, n),
        Ce = r,
        bt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Me && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var a = o
                  , i = a.destroy;
                a = a.tag,
                i !== void 0 && (a & 2 || a & 4) && Nu(n, t, i),
                o = o.next
            } while (o !== r)
        }
        mn(e, t, n);
        break;
    case 1:
        if (!Me && (Qr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                he(n, t, s)
            }
        mn(e, t, n);
        break;
    case 21:
        mn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null,
        mn(e, t, n),
        Me = r) : mn(e, t, n);
        break;
    default:
        mn(e, t, n)
    }
}
function Cf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Gw),
        t.forEach(function(r) {
            var o = ax.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var a = e
                  , i = t
                  , s = i;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        Ce = s.stateNode,
                        bt = !1;
                        break e;
                    case 3:
                        Ce = s.stateNode.containerInfo,
                        bt = !0;
                        break e;
                    case 4:
                        Ce = s.stateNode.containerInfo,
                        bt = !0;
                        break e
                    }
                    s = s.return
                }
                if (Ce === null)
                    throw Error(O(160));
                qm(a, i, o),
                Ce = null,
                bt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                he(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ym(t, e),
            t = t.sibling
}
function Ym(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (mt(t, e),
        Rt(e),
        r & 4) {
            try {
                Zo(3, e, e.return),
                bs(3, e)
            } catch (g) {
                he(e, e.return, g)
            }
            try {
                Zo(5, e, e.return)
            } catch (g) {
                he(e, e.return, g)
            }
        }
        break;
    case 1:
        mt(t, e),
        Rt(e),
        r & 512 && n !== null && Qr(n, n.return);
        break;
    case 5:
        if (mt(t, e),
        Rt(e),
        r & 512 && n !== null && Qr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                oa(o, "")
            } catch (g) {
                he(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var a = e.memoizedProps
              , i = n !== null ? n.memoizedProps : a
              , s = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    s === "input" && a.type === "radio" && a.name != null && gh(o, a),
                    eu(s, i);
                    var u = eu(s, a);
                    for (i = 0; i < l.length; i += 2) {
                        var c = l[i]
                          , d = l[i + 1];
                        c === "style" ? bh(o, d) : c === "dangerouslySetInnerHTML" ? wh(o, d) : c === "children" ? oa(o, d) : ac(o, c, d, u)
                    }
                    switch (s) {
                    case "input":
                        Gl(o, a);
                        break;
                    case "textarea":
                        vh(o, a);
                        break;
                    case "select":
                        var h = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var f = a.value;
                        f != null ? Yr(o, !!a.multiple, f, !1) : h !== !!a.multiple && (a.defaultValue != null ? Yr(o, !!a.multiple, a.defaultValue, !0) : Yr(o, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    o[pa] = a
                } catch (g) {
                    he(e, e.return, g)
                }
        }
        break;
    case 6:
        if (mt(t, e),
        Rt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(O(162));
            o = e.stateNode,
            a = e.memoizedProps;
            try {
                o.nodeValue = a
            } catch (g) {
                he(e, e.return, g)
            }
        }
        break;
    case 3:
        if (mt(t, e),
        Rt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                la(t.containerInfo)
            } catch (g) {
                he(e, e.return, g)
            }
        break;
    case 4:
        mt(t, e),
        Rt(e);
        break;
    case 13:
        mt(t, e),
        Rt(e),
        o = e.child,
        o.flags & 8192 && (a = o.memoizedState !== null,
        o.stateNode.isHidden = a,
        !a || o.alternate !== null && o.alternate.memoizedState !== null || (Fc = me())),
        r & 4 && Cf(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Me = (u = Me) || c,
        mt(t, e),
        Me = u) : mt(t, e),
        Rt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (_ = e,
                c = e.child; c !== null; ) {
                    for (d = _ = c; _ !== null; ) {
                        switch (h = _,
                        f = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Zo(4, h, h.return);
                            break;
                        case 1:
                            Qr(h, h.return);
                            var b = h.stateNode;
                            if (typeof b.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    b.props = t.memoizedProps,
                                    b.state = t.memoizedState,
                                    b.componentWillUnmount()
                                } catch (g) {
                                    he(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            Qr(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                Pf(d);
                                continue
                            }
                        }
                        f !== null ? (f.return = h,
                        _ = f) : Pf(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (a = o.style,
                            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = d.stateNode,
                            l = d.memoizedProps.style,
                            i = l != null && l.hasOwnProperty("display") ? l.display : null,
                            s.style.display = xh("display", i))
                        } catch (g) {
                            he(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            he(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        mt(t, e),
        Rt(e),
        r & 4 && Cf(e);
        break;
    case 21:
        break;
    default:
        mt(t, e),
        Rt(e)
    }
}
function Rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Qm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (oa(o, ""),
                r.flags &= -33);
                var a = Ef(e);
                Ou(e, a, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , s = Ef(e);
                Ru(e, s, i);
                break;
            default:
                throw Error(O(161))
            }
        } catch (l) {
            he(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Xw(e, t, n) {
    _ = e,
    Gm(e)
}
function Gm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var o = _
          , a = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || ai;
            if (!i) {
                var s = o.alternate
                  , l = s !== null && s.memoizedState !== null || Me;
                s = ai;
                var u = Me;
                if (ai = i,
                (Me = l) && !u)
                    for (_ = o; _ !== null; )
                        i = _,
                        l = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Nf(o) : l !== null ? (l.return = i,
                        _ = l) : Nf(o);
                for (; a !== null; )
                    _ = a,
                    Gm(a),
                    a = a.sibling;
                _ = o,
                ai = s,
                Me = u
            }
            kf(e)
        } else
            o.subtreeFlags & 8772 && a !== null ? (a.return = o,
            _ = a) : kf(e)
    }
}
function kf(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Me || bs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Me)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && uf(t, a, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            uf(t, i, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && la(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(O(163))
                    }
                Me || t.flags & 512 && Tu(t)
            } catch (h) {
                he(t, t.return, h)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function Pf(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function Nf(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    bs(4, t)
                } catch (l) {
                    he(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        he(t, o, l)
                    }
                }
                var a = t.return;
                try {
                    Tu(t)
                } catch (l) {
                    he(t, a, l)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Tu(t)
                } catch (l) {
                    he(t, i, l)
                }
            }
        } catch (l) {
            he(t, t.return, l)
        }
        if (t === e) {
            _ = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            _ = s;
            break
        }
        _ = t.return
    }
}
var Jw = Math.ceil
  , Zi = ln.ReactCurrentDispatcher
  , _c = ln.ReactCurrentOwner
  , lt = ln.ReactCurrentBatchConfig
  , X = 0
  , Ee = null
  , ve = null
  , ke = 0
  , Ge = 0
  , qr = Yn(0)
  , be = 0
  , wa = null
  , yr = 0
  , Ss = 0
  , Ic = 0
  , ea = null
  , Ue = null
  , Fc = 0
  , wo = 1 / 0
  , Yt = null
  , es = !1
  , ju = null
  , zn = null
  , ii = !1
  , jn = null
  , ts = 0
  , ta = 0
  , Mu = null
  , Pi = -1
  , Ni = 0;
function Fe() {
    return X & 6 ? me() : Pi !== -1 ? Pi : Pi = me()
}
function $n(e) {
    return e.mode & 1 ? X & 2 && ke !== 0 ? ke & -ke : Lw.transition !== null ? (Ni === 0 && (Ni = Ah()),
    Ni) : (e = te,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : $h(e.type)),
    e) : 1
}
function Ct(e, t, n, r) {
    if (50 < ta)
        throw ta = 0,
        Mu = null,
        Error(O(185));
    ja(e, n, r),
    (!(X & 2) || e !== Ee) && (e === Ee && (!(X & 2) && (Ss |= n),
    be === 4 && Cn(e, ke)),
    Ye(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (wo = me() + 500,
    ys && Gn()))
}
function Ye(e, t) {
    var n = e.callbackNode;
    L0(e, t);
    var r = Fi(e, e === Ee ? ke : 0);
    if (r === 0)
        n !== null && Ld(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ld(n),
        t === 1)
            e.tag === 0 ? Dw(Tf.bind(null, e)) : am(Tf.bind(null, e)),
            Ow(function() {
                !(X & 6) && Gn()
            }),
            n = null;
        else {
            switch (Dh(r)) {
            case 1:
                n = cc;
                break;
            case 4:
                n = jh;
                break;
            case 16:
                n = Ii;
                break;
            case 536870912:
                n = Mh;
                break;
            default:
                n = Ii
            }
            n = rg(n, Km.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Km(e, t) {
    if (Pi = -1,
    Ni = 0,
    X & 6)
        throw Error(O(327));
    var n = e.callbackNode;
    if (Zr() && e.callbackNode !== n)
        return null;
    var r = Fi(e, e === Ee ? ke : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ns(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var a = Jm();
        (Ee !== e || ke !== t) && (Yt = null,
        wo = me() + 500,
        fr(e, t));
        do
            try {
                tx();
                break
            } catch (s) {
                Xm(e, s)
            }
        while (!0);
        Ec(),
        Zi.current = a,
        X = o,
        ve !== null ? t = 0 : (Ee = null,
        ke = 0,
        t = be)
    }
    if (t !== 0) {
        if (t === 2 && (o = au(e),
        o !== 0 && (r = o,
        t = Au(e, o))),
        t === 1)
            throw n = wa,
            fr(e, 0),
            Cn(e, r),
            Ye(e, me()),
            n;
        if (t === 6)
            Cn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !Zw(o) && (t = ns(e, r),
            t === 2 && (a = au(e),
            a !== 0 && (r = a,
            t = Au(e, a))),
            t === 1))
                throw n = wa,
                fr(e, 0),
                Cn(e, r),
                Ye(e, me()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(O(345));
            case 2:
                tr(e, Ue, Yt);
                break;
            case 3:
                if (Cn(e, r),
                (r & 130023424) === r && (t = Fc + 500 - me(),
                10 < t)) {
                    if (Fi(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Fe(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = pu(tr.bind(null, e, Ue, Yt), t);
                    break
                }
                tr(e, Ue, Yt);
                break;
            case 4:
                if (Cn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - Et(r);
                    a = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~a
                }
                if (r = o,
                r = me() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jw(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = pu(tr.bind(null, e, Ue, Yt), r);
                    break
                }
                tr(e, Ue, Yt);
                break;
            case 5:
                tr(e, Ue, Yt);
                break;
            default:
                throw Error(O(329))
            }
        }
    }
    return Ye(e, me()),
    e.callbackNode === n ? Km.bind(null, e) : null
}
function Au(e, t) {
    var n = ea;
    return e.current.memoizedState.isDehydrated && (fr(e, t).flags |= 256),
    e = ns(e, t),
    e !== 2 && (t = Ue,
    Ue = n,
    t !== null && Du(t)),
    e
}
function Du(e) {
    Ue === null ? Ue = e : Ue.push.apply(Ue, e)
}
function Zw(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , a = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!kt(a(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Cn(e, t) {
    for (t &= ~Ic,
    t &= ~Ss,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Et(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Tf(e) {
    if (X & 6)
        throw Error(O(327));
    Zr();
    var t = Fi(e, 0);
    if (!(t & 1))
        return Ye(e, me()),
        null;
    var n = ns(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = au(e);
        r !== 0 && (t = r,
        n = Au(e, r))
    }
    if (n === 1)
        throw n = wa,
        fr(e, 0),
        Cn(e, t),
        Ye(e, me()),
        n;
    if (n === 6)
        throw Error(O(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    tr(e, Ue, Yt),
    Ye(e, me()),
    null
}
function zc(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (wo = me() + 500,
        ys && Gn())
    }
}
function wr(e) {
    jn !== null && jn.tag === 0 && !(X & 6) && Zr();
    var t = X;
    X |= 1;
    var n = lt.transition
      , r = te;
    try {
        if (lt.transition = null,
        te = 1,
        e)
            return e()
    } finally {
        te = r,
        lt.transition = n,
        X = t,
        !(X & 6) && Gn()
    }
}
function $c() {
    Ge = qr.current,
    ie(qr)
}
function fr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Rw(n)),
    ve !== null)
        for (n = ve.return; n !== null; ) {
            var r = n;
            switch (xc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Vi();
                break;
            case 3:
                vo(),
                ie(Qe),
                ie(Ae),
                Rc();
                break;
            case 5:
                Tc(r);
                break;
            case 4:
                vo();
                break;
            case 13:
                ie(ce);
                break;
            case 19:
                ie(ce);
                break;
            case 10:
                Cc(r.type._context);
                break;
            case 22:
            case 23:
                $c()
            }
            n = n.return
        }
    if (Ee = e,
    ve = e = Bn(e.current, null),
    ke = Ge = t,
    be = 0,
    wa = null,
    Ic = Ss = yr = 0,
    Ue = ea = null,
    or !== null) {
        for (t = 0; t < or.length; t++)
            if (n = or[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , a = n.pending;
                if (a !== null) {
                    var i = a.next;
                    a.next = o,
                    r.next = i
                }
                n.pending = r
            }
        or = null
    }
    return e
}
function Xm(e, t) {
    do {
        var n = ve;
        try {
            if (Ec(),
            Ei.current = Ji,
            Xi) {
                for (var r = de.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Xi = !1
            }
            if (vr = 0,
            Se = xe = de = null,
            Jo = !1,
            ga = 0,
            _c.current = null,
            n === null || n.return === null) {
                be = 1,
                wa = t,
                ve = null;
                break
            }
            e: {
                var a = e
                  , i = n.return
                  , s = n
                  , l = t;
                if (t = ke,
                s.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = s
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue,
                        c.memoizedState = h.memoizedState,
                        c.lanes = h.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var f = mf(i);
                    if (f !== null) {
                        f.flags &= -257,
                        gf(f, i, s, a, t),
                        f.mode & 1 && hf(a, u, t),
                        t = f,
                        l = u;
                        var b = t.updateQueue;
                        if (b === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            b.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            hf(a, u, t),
                            Bc();
                            break e
                        }
                        l = Error(O(426))
                    }
                } else if (le && s.mode & 1) {
                    var x = mf(i);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        gf(x, i, s, a, t),
                        bc(yo(l, s));
                        break e
                    }
                }
                a = l = yo(l, s),
                be !== 4 && (be = 2),
                ea === null ? ea = [a] : ea.push(a),
                a = i;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        t &= -t,
                        a.lanes |= t;
                        var m = Dm(a, l, t);
                        lf(a, m);
                        break e;
                    case 1:
                        s = l;
                        var p = a.type
                          , w = a.stateNode;
                        if (!(a.flags & 128) && (typeof p.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (zn === null || !zn.has(w)))) {
                            a.flags |= 65536,
                            t &= -t,
                            a.lanes |= t;
                            var S = Lm(a, s, t);
                            lf(a, S);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            eg(n)
        } catch (E) {
            t = E,
            ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Jm() {
    var e = Zi.current;
    return Zi.current = Ji,
    e === null ? Ji : e
}
function Bc() {
    (be === 0 || be === 3 || be === 2) && (be = 4),
    Ee === null || !(yr & 268435455) && !(Ss & 268435455) || Cn(Ee, ke)
}
function ns(e, t) {
    var n = X;
    X |= 2;
    var r = Jm();
    (Ee !== e || ke !== t) && (Yt = null,
    fr(e, t));
    do
        try {
            ex();
            break
        } catch (o) {
            Xm(e, o)
        }
    while (!0);
    if (Ec(),
    X = n,
    Zi.current = r,
    ve !== null)
        throw Error(O(261));
    return Ee = null,
    ke = 0,
    be
}
function ex() {
    for (; ve !== null; )
        Zm(ve)
}
function tx() {
    for (; ve !== null && !P0(); )
        Zm(ve)
}
function Zm(e) {
    var t = ng(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
    t === null ? eg(e) : ve = t,
    _c.current = null
}
function eg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Yw(n, t),
            n !== null) {
                n.flags &= 32767,
                ve = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                be = 6,
                ve = null;
                return
            }
        } else if (n = qw(n, t, Ge),
        n !== null) {
            ve = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ve = t;
            return
        }
        ve = t = e
    } while (t !== null);
    be === 0 && (be = 5)
}
function tr(e, t, n) {
    var r = te
      , o = lt.transition;
    try {
        lt.transition = null,
        te = 1,
        nx(e, t, n, r)
    } finally {
        lt.transition = o,
        te = r
    }
    return null
}
function nx(e, t, n, r) {
    do
        Zr();
    while (jn !== null);
    if (X & 6)
        throw Error(O(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(O(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (_0(e, a),
    e === Ee && (ve = Ee = null,
    ke = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ii || (ii = !0,
    rg(Ii, function() {
        return Zr(),
        null
    })),
    a = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || a) {
        a = lt.transition,
        lt.transition = null;
        var i = te;
        te = 1;
        var s = X;
        X |= 4,
        _c.current = null,
        Kw(e, n),
        Ym(n, e),
        Sw(du),
        zi = !!cu,
        du = cu = null,
        e.current = n,
        Xw(n),
        N0(),
        X = s,
        te = i,
        lt.transition = a
    } else
        e.current = n;
    if (ii && (ii = !1,
    jn = e,
    ts = o),
    a = e.pendingLanes,
    a === 0 && (zn = null),
    O0(n.stateNode),
    Ye(e, me()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (es)
        throw es = !1,
        e = ju,
        ju = null,
        e;
    return ts & 1 && e.tag !== 0 && Zr(),
    a = e.pendingLanes,
    a & 1 ? e === Mu ? ta++ : (ta = 0,
    Mu = e) : ta = 0,
    Gn(),
    null
}
function Zr() {
    if (jn !== null) {
        var e = Dh(ts)
          , t = lt.transition
          , n = te;
        try {
            if (lt.transition = null,
            te = 16 > e ? 16 : e,
            jn === null)
                var r = !1;
            else {
                if (e = jn,
                jn = null,
                ts = 0,
                X & 6)
                    throw Error(O(331));
                var o = X;
                for (X |= 4,
                _ = e.current; _ !== null; ) {
                    var a = _
                      , i = a.child;
                    if (_.flags & 16) {
                        var s = a.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (_ = u; _ !== null; ) {
                                    var c = _;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Zo(8, c, a)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        _ = d;
                                    else
                                        for (; _ !== null; ) {
                                            c = _;
                                            var h = c.sibling
                                              , f = c.return;
                                            if (Hm(c),
                                            c === u) {
                                                _ = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = f,
                                                _ = h;
                                                break
                                            }
                                            _ = f
                                        }
                                }
                            }
                            var b = a.alternate;
                            if (b !== null) {
                                var g = b.child;
                                if (g !== null) {
                                    b.child = null;
                                    do {
                                        var x = g.sibling;
                                        g.sibling = null,
                                        g = x
                                    } while (g !== null)
                                }
                            }
                            _ = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && i !== null)
                        i.return = a,
                        _ = i;
                    else
                        e: for (; _ !== null; ) {
                            if (a = _,
                            a.flags & 2048)
                                switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Zo(9, a, a.return)
                                }
                            var m = a.sibling;
                            if (m !== null) {
                                m.return = a.return,
                                _ = m;
                                break e
                            }
                            _ = a.return
                        }
                }
                var p = e.current;
                for (_ = p; _ !== null; ) {
                    i = _;
                    var w = i.child;
                    if (i.subtreeFlags & 2064 && w !== null)
                        w.return = i,
                        _ = w;
                    else
                        e: for (i = p; _ !== null; ) {
                            if (s = _,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        bs(9, s)
                                    }
                                } catch (E) {
                                    he(s, s.return, E)
                                }
                            if (s === i) {
                                _ = null;
                                break e
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return,
                                _ = S;
                                break e
                            }
                            _ = s.return
                        }
                }
                if (X = o,
                Gn(),
                $t && typeof $t.onPostCommitFiberRoot == "function")
                    try {
                        $t.onPostCommitFiberRoot(ps, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            te = n,
            lt.transition = t
        }
    }
    return !1
}
function Rf(e, t, n) {
    t = yo(n, t),
    t = Dm(e, t, 1),
    e = Fn(e, t, 1),
    t = Fe(),
    e !== null && (ja(e, 1, t),
    Ye(e, t))
}
function he(e, t, n) {
    if (e.tag === 3)
        Rf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Rf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zn === null || !zn.has(r))) {
                    e = yo(n, e),
                    e = Lm(t, e, 1),
                    t = Fn(t, e, 1),
                    e = Fe(),
                    t !== null && (ja(t, 1, e),
                    Ye(t, e));
                    break
                }
            }
            t = t.return
        }
}
function rx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Fe(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ee === e && (ke & n) === n && (be === 4 || be === 3 && (ke & 130023424) === ke && 500 > me() - Fc ? fr(e, 0) : Ic |= n),
    Ye(e, t)
}
function tg(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ka,
    Ka <<= 1,
    !(Ka & 130023424) && (Ka = 4194304)) : t = 1);
    var n = Fe();
    e = nn(e, t),
    e !== null && (ja(e, t, n),
    Ye(e, n))
}
function ox(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    tg(e, n)
}
function ax(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(O(314))
    }
    r !== null && r.delete(t),
    tg(e, n)
}
var ng;
ng = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            He = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return He = !1,
                Qw(e, t, n);
            He = !!(e.flags & 131072)
        }
    else
        He = !1,
        le && t.flags & 1048576 && im(t, Qi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ki(e, t),
        e = t.pendingProps;
        var o = ho(t, Ae.current);
        Jr(t, n),
        o = jc(null, t, r, e, o, n);
        var a = Mc();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        qe(r) ? (a = !0,
        Ui(t)) : a = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Pc(t),
        o.updater = xs,
        t.stateNode = o,
        o._reactInternals = t,
        xu(t, r, e, n),
        t = Eu(null, t, r, !0, a, n)) : (t.tag = 0,
        le && a && wc(t),
        _e(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ki(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = sx(r),
            e = vt(r, e),
            o) {
            case 0:
                t = Su(null, t, r, e, n);
                break e;
            case 1:
                t = wf(null, t, r, e, n);
                break e;
            case 11:
                t = vf(null, t, r, e, n);
                break e;
            case 14:
                t = yf(null, t, r, vt(r.type, e), n);
                break e
            }
            throw Error(O(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vt(r, o),
        Su(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vt(r, o),
        wf(e, t, r, o, n);
    case 3:
        e: {
            if (zm(t),
            e === null)
                throw Error(O(387));
            r = t.pendingProps,
            a = t.memoizedState,
            o = a.element,
            fm(e, t),
            Gi(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            a.isDehydrated)
                if (a = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = a,
                t.memoizedState = a,
                t.flags & 256) {
                    o = yo(Error(O(423)), t),
                    t = xf(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = yo(Error(O(424)), t),
                    t = xf(e, t, r, n, o);
                    break e
                } else
                    for (Xe = In(t.stateNode.containerInfo.firstChild),
                    Je = t,
                    le = !0,
                    St = null,
                    n = cm(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (mo(),
                r === o) {
                    t = rn(e, t, n);
                    break e
                }
                _e(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return pm(t),
        e === null && vu(t),
        r = t.type,
        o = t.pendingProps,
        a = e !== null ? e.memoizedProps : null,
        i = o.children,
        fu(r, o) ? i = null : a !== null && fu(r, a) && (t.flags |= 32),
        Fm(e, t),
        _e(e, t, i, n),
        t.child;
    case 6:
        return e === null && vu(t),
        null;
    case 13:
        return $m(e, t, n);
    case 4:
        return Nc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = go(t, null, r, n) : _e(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vt(r, o),
        vf(e, t, r, o, n);
    case 7:
        return _e(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return _e(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return _e(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            a = t.memoizedProps,
            i = o.value,
            re(qi, r._currentValue),
            r._currentValue = i,
            a !== null)
                if (kt(a.value, i)) {
                    if (a.children === o.children && !Qe.current) {
                        t = rn(e, t, n);
                        break e
                    }
                } else
                    for (a = t.child,
                    a !== null && (a.return = t); a !== null; ) {
                        var s = a.dependencies;
                        if (s !== null) {
                            i = a.child;
                            for (var l = s.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (a.tag === 1) {
                                        l = Zt(-1, n & -n),
                                        l.tag = 2;
                                        var u = a.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    a.lanes |= n,
                                    l = a.alternate,
                                    l !== null && (l.lanes |= n),
                                    yu(a.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (a.tag === 10)
                            i = a.type === t.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (i = a.return,
                            i === null)
                                throw Error(O(341));
                            i.lanes |= n,
                            s = i.alternate,
                            s !== null && (s.lanes |= n),
                            yu(i, n, t),
                            i = a.sibling
                        } else
                            i = a.child;
                        if (i !== null)
                            i.return = a;
                        else
                            for (i = a; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (a = i.sibling,
                                a !== null) {
                                    a.return = i.return,
                                    i = a;
                                    break
                                }
                                i = i.return
                            }
                        a = i
                    }
            _e(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Jr(t, n),
        o = ut(o),
        r = r(o),
        t.flags |= 1,
        _e(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = vt(r, t.pendingProps),
        o = vt(r.type, o),
        yf(e, t, r, o, n);
    case 15:
        return _m(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vt(r, o),
        ki(e, t),
        t.tag = 1,
        qe(r) ? (e = !0,
        Ui(t)) : e = !1,
        Jr(t, n),
        Am(t, r, o),
        xu(t, r, o, n),
        Eu(null, t, r, !0, e, n);
    case 19:
        return Bm(e, t, n);
    case 22:
        return Im(e, t, n)
    }
    throw Error(O(156, t.tag))
}
;
function rg(e, t) {
    return Oh(e, t)
}
function ix(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function st(e, t, n, r) {
    return new ix(e,t,n,r)
}
function Wc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function sx(e) {
    if (typeof e == "function")
        return Wc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === sc)
            return 11;
        if (e === lc)
            return 14
    }
    return 2
}
function Bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ti(e, t, n, r, o, a) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Wc(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Ir:
            return pr(n.children, o, a, t);
        case ic:
            i = 8,
            o |= 8;
            break;
        case Ul:
            return e = st(12, n, t, o | 2),
            e.elementType = Ul,
            e.lanes = a,
            e;
        case Hl:
            return e = st(13, n, t, o),
            e.elementType = Hl,
            e.lanes = a,
            e;
        case Ql:
            return e = st(19, n, t, o),
            e.elementType = Ql,
            e.lanes = a,
            e;
        case ph:
            return Es(n, o, a, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case dh:
                    i = 10;
                    break e;
                case fh:
                    i = 9;
                    break e;
                case sc:
                    i = 11;
                    break e;
                case lc:
                    i = 14;
                    break e;
                case bn:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(O(130, e == null ? e : typeof e, ""))
        }
    return t = st(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = a,
    t
}
function pr(e, t, n, r) {
    return e = st(7, e, r, t),
    e.lanes = n,
    e
}
function Es(e, t, n, r) {
    return e = st(22, e, r, t),
    e.elementType = ph,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Cl(e, t, n) {
    return e = st(6, e, null, t),
    e.lanes = n,
    e
}
function kl(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function lx(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = al(0),
    this.expirationTimes = al(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = al(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Vc(e, t, n, r, o, a, i, s, l) {
    return e = new lx(e,t,n,s,l),
    t === 1 ? (t = 1,
    a === !0 && (t |= 8)) : t = 0,
    a = st(3, null, null, t),
    e.current = a,
    a.stateNode = e,
    a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Pc(a),
    e
}
function ux(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: _r,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function og(e) {
    if (!e)
        return Vn;
    e = e._reactInternals;
    e: {
        if (Er(e) !== e || e.tag !== 1)
            throw Error(O(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (qe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(O(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (qe(n))
            return om(e, n, t)
    }
    return t
}
function ag(e, t, n, r, o, a, i, s, l) {
    return e = Vc(n, r, !0, e, o, a, i, s, l),
    e.context = og(null),
    n = e.current,
    r = Fe(),
    o = $n(n),
    a = Zt(r, o),
    a.callback = t ?? null,
    Fn(n, a, o),
    e.current.lanes = o,
    ja(e, o, r),
    Ye(e, r),
    e
}
function Cs(e, t, n, r) {
    var o = t.current
      , a = Fe()
      , i = $n(o);
    return n = og(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Zt(a, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Fn(o, t, i),
    e !== null && (Ct(e, o, i, a),
    Si(e, o, i)),
    i
}
function rs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Of(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Uc(e, t) {
    Of(e, t),
    (e = e.alternate) && Of(e, t)
}
function cx() {
    return null
}
var ig = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Hc(e) {
    this._internalRoot = e
}
ks.prototype.render = Hc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(O(409));
    Cs(e, t, null, null)
}
;
ks.prototype.unmount = Hc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wr(function() {
            Cs(null, e, null, null)
        }),
        t[tn] = null
    }
}
;
function ks(e) {
    this._internalRoot = e
}
ks.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ih();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++)
            ;
        En.splice(n, 0, e),
        n === 0 && zh(e)
    }
}
;
function Qc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ps(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function jf() {}
function dx(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var u = rs(i);
                a.call(u)
            }
        }
        var i = ag(t, r, e, 0, null, !1, !1, "", jf);
        return e._reactRootContainer = i,
        e[tn] = i.current,
        da(e.nodeType === 8 ? e.parentNode : e),
        wr(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = rs(l);
            s.call(u)
        }
    }
    var l = Vc(e, 0, !1, null, null, !1, !1, "", jf);
    return e._reactRootContainer = l,
    e[tn] = l.current,
    da(e.nodeType === 8 ? e.parentNode : e),
    wr(function() {
        Cs(t, l, n, r)
    }),
    l
}
function Ns(e, t, n, r, o) {
    var a = n._reactRootContainer;
    if (a) {
        var i = a;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var l = rs(i);
                s.call(l)
            }
        }
        Cs(t, i, e, o)
    } else
        i = dx(n, t, e, o, r);
    return rs(i)
}
Lh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Uo(t.pendingLanes);
            n !== 0 && (dc(t, n | 1),
            Ye(t, me()),
            !(X & 6) && (wo = me() + 500,
            Gn()))
        }
        break;
    case 13:
        wr(function() {
            var r = nn(e, 1);
            if (r !== null) {
                var o = Fe();
                Ct(r, e, 1, o)
            }
        }),
        Uc(e, 1)
    }
}
;
fc = function(e) {
    if (e.tag === 13) {
        var t = nn(e, 134217728);
        if (t !== null) {
            var n = Fe();
            Ct(t, e, 134217728, n)
        }
        Uc(e, 134217728)
    }
}
;
_h = function(e) {
    if (e.tag === 13) {
        var t = $n(e)
          , n = nn(e, t);
        if (n !== null) {
            var r = Fe();
            Ct(n, e, t, r)
        }
        Uc(e, t)
    }
}
;
Ih = function() {
    return te
}
;
Fh = function(e, t) {
    var n = te;
    try {
        return te = e,
        t()
    } finally {
        te = n
    }
}
;
nu = function(e, t, n) {
    switch (t) {
    case "input":
        if (Gl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = vs(r);
                    if (!o)
                        throw Error(O(90));
                    mh(r),
                    Gl(r, o)
                }
            }
        }
        break;
    case "textarea":
        vh(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Yr(e, !!n.multiple, t, !1)
    }
}
;
Ch = zc;
kh = wr;
var fx = {
    usingClientEntryPoint: !1,
    Events: [Aa, Br, vs, Sh, Eh, zc]
}
  , zo = {
    findFiberByHostInstance: rr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , px = {
    bundleType: zo.bundleType,
    version: zo.version,
    rendererPackageName: zo.rendererPackageName,
    rendererConfig: zo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ln.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Th(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: zo.findFiberByHostInstance || cx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!si.isDisabled && si.supportsFiber)
        try {
            ps = si.inject(px),
            $t = si
        } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fx;
tt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qc(t))
        throw Error(O(200));
    return ux(e, t, null, n)
}
;
tt.createRoot = function(e, t) {
    if (!Qc(e))
        throw Error(O(299));
    var n = !1
      , r = ""
      , o = ig;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Vc(e, 1, !1, null, null, n, !1, r, o),
    e[tn] = t.current,
    da(e.nodeType === 8 ? e.parentNode : e),
    new Hc(t)
}
;
tt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","),
        Error(O(268, e)));
    return e = Th(t),
    e = e === null ? null : e.stateNode,
    e
}
;
tt.flushSync = function(e) {
    return wr(e)
}
;
tt.hydrate = function(e, t, n) {
    if (!Ps(t))
        throw Error(O(200));
    return Ns(null, e, t, !0, n)
}
;
tt.hydrateRoot = function(e, t, n) {
    if (!Qc(e))
        throw Error(O(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , a = ""
      , i = ig;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = ag(t, null, e, 1, n ?? null, o, !1, a, i),
    e[tn] = t.current,
    da(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new ks(t)
}
;
tt.render = function(e, t, n) {
    if (!Ps(t))
        throw Error(O(200));
    return Ns(null, e, t, !1, n)
}
;
tt.unmountComponentAtNode = function(e) {
    if (!Ps(e))
        throw Error(O(40));
    return e._reactRootContainer ? (wr(function() {
        Ns(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[tn] = null
        })
    }),
    !0) : !1
}
;
tt.unstable_batchedUpdates = zc;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ps(n))
        throw Error(O(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(O(38));
    return Ns(e, t, n, !1, r)
}
;
tt.version = "18.3.1-next-f1338f8080-20240426";
function sg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sg)
        } catch (e) {
            console.error(e)
        }
}
sg(),
sh.exports = tt;
var La = sh.exports;
const lg = Gp(La);
var ug, Mf = La;
ug = Mf.createRoot,
Mf.hydrateRoot;
const hx = 1
  , mx = 1e6;
let Pl = 0;
function gx() {
    return Pl = (Pl + 1) % Number.MAX_SAFE_INTEGER,
    Pl.toString()
}
const Nl = new Map
  , Af = e => {
    if (Nl.has(e))
        return;
    const t = setTimeout( () => {
        Nl.delete(e),
        na({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , mx);
    Nl.set(e, t)
}
  , vx = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, hx)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Af(n) : e.toasts.forEach(r => {
                Af(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ri = [];
let Oi = {
    toasts: []
};
function na(e) {
    Oi = vx(Oi, e),
    Ri.forEach(t => {
        t(Oi)
    }
    )
}
function yx({...e}) {
    const t = gx()
      , n = o => na({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => na({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return na({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function cg() {
    const [e,t] = v.useState(Oi);
    return v.useEffect( () => (Ri.push(t),
    () => {
        const n = Ri.indexOf(t);
        n > -1 && Ri.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: yx,
        dismiss: n => na({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ue(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Df(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function dg(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const a = Df(o, t);
            return !n && typeof a == "function" && (n = !0),
            a
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const a = r[o];
                    typeof a == "function" ? a() : Df(e[o], null)
                }
            }
    }
}
function ze(...e) {
    return v.useCallback(dg(...e), e)
}
function wx(e, t) {
    const n = v.createContext(t)
      , r = a => {
        const {children: i, ...s} = a
          , l = v.useMemo( () => s, Object.values(s));
        return y.jsx(n.Provider, {
            value: l,
            children: i
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(a) {
        const i = v.useContext(n);
        if (i)
            return i;
        if (t !== void 0)
            return t;
        throw new Error(`\`${a}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function _a(e, t=[]) {
    let n = [];
    function r(a, i) {
        const s = v.createContext(i)
          , l = n.length;
        n = [...n, i];
        const u = d => {
            var m;
            const {scope: h, children: f, ...b} = d
              , g = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || s
              , x = v.useMemo( () => b, Object.values(b));
            return y.jsx(g.Provider, {
                value: x,
                children: f
            })
        }
        ;
        u.displayName = a + "Provider";
        function c(d, h) {
            var g;
            const f = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[l]) || s
              , b = v.useContext(f);
            if (b)
                return b;
            if (i !== void 0)
                return i;
            throw new Error(`\`${d}\` must be used within \`${a}\``)
        }
        return [u, c]
    }
    const o = () => {
        const a = n.map(i => v.createContext(i));
        return function(s) {
            const l = (s == null ? void 0 : s[e]) || a;
            return v.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: l
                }
            }), [s, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, xx(o, ...t)]
}
function xx(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(a) {
            const i = r.reduce( (s, {useScope: l, scopeName: u}) => {
                const d = l(a)[`__scope${u}`];
                return {
                    ...s,
                    ...d
                }
            }
            , {});
            return v.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function xa(e) {
    const t = Sx(e)
      , n = v.forwardRef( (r, o) => {
        const {children: a, ...i} = r
          , s = v.Children.toArray(a)
          , l = s.find(Cx);
        if (l) {
            const u = l.props.children
              , c = s.map(d => d === l ? v.Children.count(u) > 1 ? v.Children.only(null) : v.isValidElement(u) ? u.props.children : null : d);
            return y.jsx(t, {
                ...i,
                ref: o,
                children: v.isValidElement(u) ? v.cloneElement(u, void 0, c) : null
            })
        }
        return y.jsx(t, {
            ...i,
            ref: o,
            children: a
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var bx = xa("Slot");
function Sx(e) {
    const t = v.forwardRef( (n, r) => {
        const {children: o, ...a} = n;
        if (v.isValidElement(o)) {
            const i = Px(o)
              , s = kx(a, o.props);
            return o.type !== v.Fragment && (s.ref = r ? dg(r, i) : i),
            v.cloneElement(o, s)
        }
        return v.Children.count(o) > 1 ? v.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var fg = Symbol("radix.slottable");
function Ex(e) {
    const t = ({children: n}) => y.jsx(y.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = fg,
    t
}
function Cx(e) {
    return v.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === fg
}
function kx(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , a = t[r];
        /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
            const l = a(...s);
            return o(...s),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...a
        } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Px(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Nx(e) {
    const t = e + "CollectionProvider"
      , [n,r] = _a(t)
      , [o,a] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = g => {
        const {scope: x, children: m} = g
          , p = j.useRef(null)
          , w = j.useRef(new Map).current;
        return y.jsx(o, {
            scope: x,
            itemMap: w,
            collectionRef: p,
            children: m
        })
    }
    ;
    i.displayName = t;
    const s = e + "CollectionSlot"
      , l = xa(s)
      , u = j.forwardRef( (g, x) => {
        const {scope: m, children: p} = g
          , w = a(s, m)
          , S = ze(x, w.collectionRef);
        return y.jsx(l, {
            ref: S,
            children: p
        })
    }
    );
    u.displayName = s;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , h = xa(c)
      , f = j.forwardRef( (g, x) => {
        const {scope: m, children: p, ...w} = g
          , S = j.useRef(null)
          , E = ze(x, S)
          , C = a(c, m);
        return j.useEffect( () => (C.itemMap.set(S, {
            ref: S,
            ...w
        }),
        () => void C.itemMap.delete(S))),
        y.jsx(h, {
            [d]: "",
            ref: E,
            children: p
        })
    }
    );
    f.displayName = c;
    function b(g) {
        const x = a(e + "CollectionConsumer", g);
        return j.useCallback( () => {
            const p = x.collectionRef.current;
            if (!p)
                return [];
            const w = Array.from(p.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort( (C, k) => w.indexOf(C.ref.current) - w.indexOf(k.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: f
    }, b, r]
}
var Tx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , we = Tx.reduce( (e, t) => {
    const n = xa(`Primitive.${t}`)
      , r = v.forwardRef( (o, a) => {
        const {asChild: i, ...s} = o
          , l = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        y.jsx(l, {
            ...s,
            ref: a
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function pg(e, t) {
    e && La.flushSync( () => e.dispatchEvent(t))
}
function Vt(e) {
    const t = v.useRef(e);
    return v.useEffect( () => {
        t.current = e
    }
    ),
    v.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Rx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Vt(e);
    v.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Ox = "DismissableLayer", Lu = "dismissableLayer.update", jx = "dismissableLayer.pointerDownOutside", Mx = "dismissableLayer.focusOutside", Lf, hg = v.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Ts = v.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: i, onDismiss: s, ...l} = e
      , u = v.useContext(hg)
      , [c,d] = v.useState(null)
      , h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,f] = v.useState({})
      , b = ze(t, k => d(k))
      , g = Array.from(u.layers)
      , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = g.indexOf(x)
      , p = c ? g.indexOf(c) : -1
      , w = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = p >= m
      , E = Dx(k => {
        const R = k.target
          , A = [...u.branches].some(M => M.contains(R));
        !S || A || (o == null || o(k),
        i == null || i(k),
        k.defaultPrevented || s == null || s())
    }
    , h)
      , C = Lx(k => {
        const R = k.target;
        [...u.branches].some(M => M.contains(R)) || (a == null || a(k),
        i == null || i(k),
        k.defaultPrevented || s == null || s())
    }
    , h);
    return Rx(k => {
        p === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && s && (k.preventDefault(),
        s()))
    }
    , h),
    v.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Lf = h.body.style.pointerEvents,
            h.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            _f(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Lf)
            }
    }
    , [c, h, n, u]),
    v.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        _f())
    }
    , [c, u]),
    v.useEffect( () => {
        const k = () => f({});
        return document.addEventListener(Lu, k),
        () => document.removeEventListener(Lu, k)
    }
    , []),
    y.jsx(we.div, {
        ...l,
        ref: b,
        style: {
            pointerEvents: w ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ue(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ue(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ue(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
Ts.displayName = Ox;
var Ax = "DismissableLayerBranch"
  , mg = v.forwardRef( (e, t) => {
    const n = v.useContext(hg)
      , r = v.useRef(null)
      , o = ze(t, r);
    return v.useEffect( () => {
        const a = r.current;
        if (a)
            return n.branches.add(a),
            () => {
                n.branches.delete(a)
            }
    }
    , [n.branches]),
    y.jsx(we.div, {
        ...e,
        ref: o
    })
}
);
mg.displayName = Ax;
function Dx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Vt(e)
      , r = v.useRef(!1)
      , o = v.useRef( () => {}
    );
    return v.useEffect( () => {
        const a = s => {
            if (s.target && !r.current) {
                let l = function() {
                    gg(jx, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: s
                };
                s.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", a)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", a),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Lx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Vt(e)
      , r = v.useRef(!1);
    return v.useEffect( () => {
        const o = a => {
            a.target && !r.current && gg(Mx, n, {
                originalEvent: a
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function _f() {
    const e = new CustomEvent(Lu);
    document.dispatchEvent(e)
}
function gg(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , a = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? pg(o, a) : o.dispatchEvent(a)
}
var _x = Ts
  , Ix = mg
  , on = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {}
  , Fx = "Portal"
  , qc = v.forwardRef( (e, t) => {
    var s;
    const {container: n, ...r} = e
      , [o,a] = v.useState(!1);
    on( () => a(!0), []);
    const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
    return i ? lg.createPortal(y.jsx(we.div, {
        ...r,
        ref: t
    }), i) : null
}
);
qc.displayName = Fx;
function zx(e, t) {
    return v.useReducer( (n, r) => t[n][r] ?? n, e)
}
var ko = e => {
    const {present: t, children: n} = e
      , r = $x(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : v.Children.only(n)
      , a = ze(r.ref, Bx(o));
    return typeof n == "function" || r.isPresent ? v.cloneElement(o, {
        ref: a
    }) : null
}
;
ko.displayName = "Presence";
function $x(e) {
    const [t,n] = v.useState()
      , r = v.useRef(null)
      , o = v.useRef(e)
      , a = v.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [s,l] = zx(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return v.useEffect( () => {
        const u = li(r.current);
        a.current = s === "mounted" ? u : "none"
    }
    , [s]),
    on( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const h = a.current
              , f = li(u);
            e ? l("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && h !== f ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    on( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = f => {
                const g = li(r.current).includes(f.animationName);
                if (f.target === t && g && (l("ANIMATION_END"),
                !o.current)) {
                    const x = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                    }
                    )
                }
            }
              , h = f => {
                f.target === t && (a.current = li(r.current))
            }
            ;
            return t.addEventListener("animationstart", h),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", h),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: v.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function li(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Bx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Wx = nc[" useInsertionEffect ".trim().toString()] || on;
function vg({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,a,i] = Vx({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0
      , l = s ? e : o;
    {
        const c = v.useRef(e !== void 0);
        v.useEffect( () => {
            const d = c.current;
            d !== s && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = s
        }
        , [s, r])
    }
    const u = v.useCallback(c => {
        var d;
        if (s) {
            const h = Ux(c) ? c(e) : c;
            h !== e && ((d = i.current) == null || d.call(i, h))
        } else
            a(c)
    }
    , [s, e, a, i]);
    return [l, u]
}
function Vx({defaultProp: e, onChange: t}) {
    const [n,r] = v.useState(e)
      , o = v.useRef(n)
      , a = v.useRef(t);
    return Wx( () => {
        a.current = t
    }
    , [t]),
    v.useEffect( () => {
        var i;
        o.current !== n && ((i = a.current) == null || i.call(a, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, a]
}
function Ux(e) {
    return typeof e == "function"
}
var Hx = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Qx = "VisuallyHidden"
  , Rs = v.forwardRef( (e, t) => y.jsx(we.span, {
    ...e,
    ref: t,
    style: {
        ...Hx,
        ...e.style
    }
}));
Rs.displayName = Qx;
var qx = Rs
  , Yc = "ToastProvider"
  , [Gc,Yx,Gx] = Nx("Toast")
  , [yg,DT] = _a("Toast", [Gx])
  , [Kx,Os] = yg(Yc)
  , wg = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: a=50, children: i} = e
      , [s,l] = v.useState(null)
      , [u,c] = v.useState(0)
      , d = v.useRef(!1)
      , h = v.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Yc}\`. Expected non-empty \`string\`.`),
    y.jsx(Gc.Provider, {
        scope: t,
        children: y.jsx(Kx, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: a,
            toastCount: u,
            viewport: s,
            onViewportChange: l,
            onToastAdd: v.useCallback( () => c(f => f + 1), []),
            onToastRemove: v.useCallback( () => c(f => f - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: h,
            children: i
        })
    })
}
;
wg.displayName = Yc;
var xg = "ToastViewport"
  , Xx = ["F8"]
  , _u = "toast.viewportPause"
  , Iu = "toast.viewportResume"
  , bg = v.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Xx, label: o="Notifications ({hotkey})", ...a} = e
      , i = Os(xg, n)
      , s = Yx(n)
      , l = v.useRef(null)
      , u = v.useRef(null)
      , c = v.useRef(null)
      , d = v.useRef(null)
      , h = ze(t, d, i.onViewportChange)
      , f = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = i.toastCount > 0;
    v.useEffect( () => {
        const x = m => {
            var w;
            r.length !== 0 && r.every(S => m[S] || m.code === S) && ((w = d.current) == null || w.focus())
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [r]),
    v.useEffect( () => {
        const x = l.current
          , m = d.current;
        if (b && x && m) {
            const p = () => {
                if (!i.isClosePausedRef.current) {
                    const C = new CustomEvent(_u);
                    m.dispatchEvent(C),
                    i.isClosePausedRef.current = !0
                }
            }
              , w = () => {
                if (i.isClosePausedRef.current) {
                    const C = new CustomEvent(Iu);
                    m.dispatchEvent(C),
                    i.isClosePausedRef.current = !1
                }
            }
              , S = C => {
                !x.contains(C.relatedTarget) && w()
            }
              , E = () => {
                x.contains(document.activeElement) || w()
            }
            ;
            return x.addEventListener("focusin", p),
            x.addEventListener("focusout", S),
            x.addEventListener("pointermove", p),
            x.addEventListener("pointerleave", E),
            window.addEventListener("blur", p),
            window.addEventListener("focus", w),
            () => {
                x.removeEventListener("focusin", p),
                x.removeEventListener("focusout", S),
                x.removeEventListener("pointermove", p),
                x.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", w)
            }
        }
    }
    , [b, i.isClosePausedRef]);
    const g = v.useCallback( ({tabbingDirection: x}) => {
        const p = s().map(w => {
            const S = w.ref.current
              , E = [S, ...c1(S)];
            return x === "forwards" ? E : E.reverse()
        }
        );
        return (x === "forwards" ? p.reverse() : p).flat()
    }
    , [s]);
    return v.useEffect( () => {
        const x = d.current;
        if (x) {
            const m = p => {
                var E, C, k;
                const w = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !w) {
                    const R = document.activeElement
                      , A = p.shiftKey;
                    if (p.target === x && A) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const I = g({
                        tabbingDirection: A ? "backwards" : "forwards"
                    })
                      , Q = I.findIndex(D => D === R);
                    Tl(I.slice(Q + 1)) ? p.preventDefault() : A ? (C = u.current) == null || C.focus() : (k = c.current) == null || k.focus()
                }
            }
            ;
            return x.addEventListener("keydown", m),
            () => x.removeEventListener("keydown", m)
        }
    }
    , [s, g]),
    y.jsxs(Ix, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", f),
        tabIndex: -1,
        style: {
            pointerEvents: b ? void 0 : "none"
        },
        children: [b && y.jsx(Fu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "forwards"
                });
                Tl(x)
            }
        }), y.jsx(Gc.Slot, {
            scope: n,
            children: y.jsx(we.ol, {
                tabIndex: -1,
                ...a,
                ref: h
            })
        }), b && y.jsx(Fu, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "backwards"
                });
                Tl(x)
            }
        })]
    })
}
);
bg.displayName = xg;
var Sg = "ToastFocusProxy"
  , Fu = v.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , a = Os(Sg, n);
    return y.jsx(Rs, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const s = i.relatedTarget;
            !((u = a.viewport) != null && u.contains(s)) && r()
        }
    })
}
);
Fu.displayName = Sg;
var Ia = "Toast"
  , Jx = "toast.swipeStart"
  , Zx = "toast.swipeMove"
  , e1 = "toast.swipeCancel"
  , t1 = "toast.swipeEnd"
  , Eg = v.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...i} = e
      , [s,l] = vg({
        prop: r,
        defaultProp: o ?? !0,
        onChange: a,
        caller: Ia
    });
    return y.jsx(ko, {
        present: n || s,
        children: y.jsx(o1, {
            open: s,
            ...i,
            ref: t,
            onClose: () => l(!1),
            onPause: Vt(e.onPause),
            onResume: Vt(e.onResume),
            onSwipeStart: ue(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ue(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: ue(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ue(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
Eg.displayName = Ia;
var [n1,r1] = yg(Ia, {
    onClose() {}
})
  , o1 = v.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: a, onClose: i, onEscapeKeyDown: s, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: h, onSwipeEnd: f, ...b} = e
      , g = Os(Ia, n)
      , [x,m] = v.useState(null)
      , p = ze(t, D => m(D))
      , w = v.useRef(null)
      , S = v.useRef(null)
      , E = o || g.duration
      , C = v.useRef(0)
      , k = v.useRef(E)
      , R = v.useRef(0)
      , {onToastAdd: A, onToastRemove: M} = g
      , z = Vt( () => {
        var G;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((G = g.viewport) == null || G.focus()),
        i()
    }
    )
      , I = v.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(R.current),
        C.current = new Date().getTime(),
        R.current = window.setTimeout(z, D))
    }
    , [z]);
    v.useEffect( () => {
        const D = g.viewport;
        if (D) {
            const G = () => {
                I(k.current),
                u == null || u()
            }
              , $ = () => {
                const V = new Date().getTime() - C.current;
                k.current = k.current - V,
                window.clearTimeout(R.current),
                l == null || l()
            }
            ;
            return D.addEventListener(_u, $),
            D.addEventListener(Iu, G),
            () => {
                D.removeEventListener(_u, $),
                D.removeEventListener(Iu, G)
            }
        }
    }
    , [g.viewport, E, l, u, I]),
    v.useEffect( () => {
        a && !g.isClosePausedRef.current && I(E)
    }
    , [a, E, g.isClosePausedRef, I]),
    v.useEffect( () => (A(),
    () => M()), [A, M]);
    const Q = v.useMemo( () => x ? Og(x) : null, [x]);
    return g.viewport ? y.jsxs(y.Fragment, {
        children: [Q && y.jsx(a1, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), y.jsx(n1, {
            scope: n,
            onClose: z,
            children: La.createPortal(y.jsx(Gc.ItemSlot, {
                scope: n,
                children: y.jsx(_x, {
                    asChild: !0,
                    onEscapeKeyDown: ue(s, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || z(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: y.jsx(we.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": a ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...b,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ue(e.onKeyDown, D => {
                            D.key === "Escape" && (s == null || s(D.nativeEvent),
                            D.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: ue(e.onPointerDown, D => {
                            D.button === 0 && (w.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }
                        ),
                        onPointerMove: ue(e.onPointerMove, D => {
                            if (!w.current)
                                return;
                            const G = D.clientX - w.current.x
                              , $ = D.clientY - w.current.y
                              , V = !!S.current
                              , N = ["left", "right"].includes(g.swipeDirection)
                              , T = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , L = N ? T(0, G) : 0
                              , U = N ? 0 : T(0, $)
                              , F = D.pointerType === "touch" ? 10 : 2
                              , q = {
                                x: L,
                                y: U
                            }
                              , K = {
                                originalEvent: D,
                                delta: q
                            };
                            V ? (S.current = q,
                            ui(Zx, d, K, {
                                discrete: !1
                            })) : If(q, g.swipeDirection, F) ? (S.current = q,
                            ui(Jx, c, K, {
                                discrete: !1
                            }),
                            D.target.setPointerCapture(D.pointerId)) : (Math.abs(G) > F || Math.abs($) > F) && (w.current = null)
                        }
                        ),
                        onPointerUp: ue(e.onPointerUp, D => {
                            const G = S.current
                              , $ = D.target;
                            if ($.hasPointerCapture(D.pointerId) && $.releasePointerCapture(D.pointerId),
                            S.current = null,
                            w.current = null,
                            G) {
                                const V = D.currentTarget
                                  , N = {
                                    originalEvent: D,
                                    delta: G
                                };
                                If(G, g.swipeDirection, g.swipeThreshold) ? ui(t1, f, N, {
                                    discrete: !0
                                }) : ui(e1, h, N, {
                                    discrete: !0
                                }),
                                V.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , a1 = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Os(Ia, t)
      , [a,i] = v.useState(!1)
      , [s,l] = v.useState(!1);
    return l1( () => i(!0)),
    v.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    s ? null : y.jsx(qc, {
        asChild: !0,
        children: y.jsx(Rs, {
            ...r,
            children: a && y.jsxs(y.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , i1 = "ToastTitle"
  , Cg = v.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return y.jsx(we.div, {
        ...r,
        ref: t
    })
}
);
Cg.displayName = i1;
var s1 = "ToastDescription"
  , kg = v.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return y.jsx(we.div, {
        ...r,
        ref: t
    })
}
);
kg.displayName = s1;
var Pg = "ToastAction"
  , Ng = v.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? y.jsx(Rg, {
        altText: n,
        asChild: !0,
        children: y.jsx(Kc, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Pg}\`. Expected non-empty \`string\`.`),
    null)
}
);
Ng.displayName = Pg;
var Tg = "ToastClose"
  , Kc = v.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = r1(Tg, n);
    return y.jsx(Rg, {
        asChild: !0,
        children: y.jsx(we.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ue(e.onClick, o.onClose)
        })
    })
}
);
Kc.displayName = Tg;
var Rg = v.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return y.jsx(we.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Og(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        u1(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , a = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (a) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...Og(r))
        }
    }
    ),
    t
}
function ui(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , a = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? pg(o, a) : o.dispatchEvent(a)
}
var If = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , a = r > o;
    return t === "left" || t === "right" ? a && r > n : !a && o > n
}
;
function l1(e= () => {}
) {
    const t = Vt(e);
    on( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function u1(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function c1(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Tl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var d1 = wg
  , jg = bg
  , Mg = Eg
  , Ag = Cg
  , Dg = kg
  , Lg = Ng
  , _g = Kc;
function Ig(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Ig(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Fg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Ig(e)) && (r && (r += " "),
        r += t);
    return r
}
const Ff = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , zf = Fg
  , Xc = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return zf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: a} = t
      , i = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = a == null ? void 0 : a[u];
        if (c === null)
            return null;
        const h = Ff(c) || Ff(d);
        return o[u][h]
    }
    )
      , s = n && Object.entries(n).reduce( (u, c) => {
        let[d,h] = c;
        return h === void 0 || (u[d] = h),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: h, ...f} = c;
        return Object.entries(f).every(b => {
            let[g,x] = b;
            return Array.isArray(x) ? x.includes({
                ...a,
                ...s
            }[g]) : {
                ...a,
                ...s
            }[g] === x
        }
        ) ? [...u, d, h] : u
    }
    , []);
    return zf(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , zg = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var p1 = {
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
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = v.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: a, iconNode: i, ...s}, l) => v.createElement("svg", {
    ref: l,
    ...p1,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: zg("lucide", o),
    ...s
}, [...i.map( ([u,c]) => v.createElement(u, c)), ...Array.isArray(a) ? a : [a]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = (e, t) => {
    const n = v.forwardRef( ({className: r, ...o}, a) => v.createElement(h1, {
        ref: a,
        iconNode: t,
        className: zg(`lucide-${f1(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = De("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = De("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = De("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = De("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = De("Ellipsis", [["circle", {
    cx: "12",
    cy: "12",
    r: "1",
    key: "41hilf"
}], ["circle", {
    cx: "19",
    cy: "12",
    r: "1",
    key: "1wjl8i"
}], ["circle", {
    cx: "5",
    cy: "12",
    r: "1",
    key: "1pcz8c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = De("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = De("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = De("Share2", [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = De("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = De("ShoppingCart", [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = De("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = De("Store", [["path", {
    d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
    key: "ztvudi"
}], ["path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    key: "1b2hhj"
}], ["path", {
    d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",
    key: "2ebpfo"
}], ["path", {
    d: "M2 7h20",
    key: "1fcdvo"
}], ["path", {
    d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
    key: "6c3vgh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = De("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = De("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = De("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zu = De("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Jc = "-"
  , N1 = e => {
    const t = R1(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const s = i.split(Jc);
            return s[0] === "" && s.length !== 1 && s.shift(),
            Wg(s, t) || T1(i)
        }
        ,
        getConflictingClassGroupIds: (i, s) => {
            const l = n[i] || [];
            return s && r[i] ? [...l, ...r[i]] : l
        }
    }
}
  , Wg = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Wg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const a = e.join(Jc);
    return (i = t.validators.find( ({validator: s}) => s(a))) == null ? void 0 : i.classGroupId
}
  , $f = /^\[(.+)\]$/
  , T1 = e => {
    if ($f.test(e)) {
        const t = $f.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , R1 = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return j1(Object.entries(e.classGroups), n).forEach( ([a,i]) => {
        $u(i, r, a, t)
    }
    ),
    r
}
  , $u = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const a = o === "" ? t : Bf(t, o);
            a.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (O1(o)) {
                $u(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([a,i]) => {
            $u(i, Bf(t, a), n, r)
        }
        )
    }
    )
}
  , Bf = (e, t) => {
    let n = e;
    return t.split(Jc).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , O1 = e => e.isThemeGetter
  , j1 = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(a => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map( ([i,s]) => [t + i, s])) : a);
    return [n, o]
}
) : e
  , M1 = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (a, i) => {
        n.set(a, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(a) {
            let i = n.get(a);
            if (i !== void 0)
                return i;
            if ((i = r.get(a)) !== void 0)
                return o(a, i),
                i
        },
        set(a, i) {
            n.has(a) ? n.set(a, i) : o(a, i)
        }
    }
}
  , Vg = "!"
  , A1 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , a = t.length
      , i = s => {
        const l = [];
        let u = 0, c = 0, d;
        for (let x = 0; x < s.length; x++) {
            let m = s[x];
            if (u === 0) {
                if (m === o && (r || s.slice(x, x + a) === t)) {
                    l.push(s.slice(c, x)),
                    c = x + a;
                    continue
                }
                if (m === "/") {
                    d = x;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const h = l.length === 0 ? s : s.substring(c)
          , f = h.startsWith(Vg)
          , b = f ? h.substring(1) : h
          , g = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: f,
            baseClassName: b,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? s => n({
        className: s,
        parseClassName: i
    }) : i
}
  , D1 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , L1 = e => ({
    cache: M1(e.cacheSize),
    parseClassName: A1(e),
    ...N1(e)
})
  , _1 = /\s+/
  , I1 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , a = []
      , i = e.trim().split(_1);
    let s = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
        const u = i[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: h, maybePostfixModifierPosition: f} = n(u);
        let b = !!f
          , g = r(b ? h.substring(0, f) : h);
        if (!g) {
            if (!b) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            if (g = r(h),
            !g) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            b = !1
        }
        const x = D1(c).join(":")
          , m = d ? x + Vg : x
          , p = m + g;
        if (a.includes(p))
            continue;
        a.push(p);
        const w = o(g, b);
        for (let S = 0; S < w.length; ++S) {
            const E = w[S];
            a.push(m + E)
        }
        s = u + (s.length > 0 ? " " + s : s)
    }
    return s
}
;
function F1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Ug(t)) && (r && (r += " "),
        r += n);
    return r
}
const Ug = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Ug(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function z1(e, ...t) {
    let n, r, o, a = i;
    function i(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = L1(u),
        r = n.cache.get,
        o = n.cache.set,
        a = s,
        s(l)
    }
    function s(l) {
        const u = r(l);
        if (u)
            return u;
        const c = I1(l, n);
        return o(l, c),
        c
    }
    return function() {
        return a(F1.apply(null, arguments))
    }
}
const oe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Hg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , $1 = /^\d+\/\d+$/
  , B1 = new Set(["px", "full", "screen"])
  , W1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , V1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , U1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , H1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Q1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Qt = e => eo(e) || B1.has(e) || $1.test(e)
  , gn = e => Po(e, "length", eb)
  , eo = e => !!e && !Number.isNaN(Number(e))
  , Rl = e => Po(e, "number", eo)
  , $o = e => !!e && Number.isInteger(Number(e))
  , q1 = e => e.endsWith("%") && eo(e.slice(0, -1))
  , H = e => Hg.test(e)
  , vn = e => W1.test(e)
  , Y1 = new Set(["length", "size", "percentage"])
  , G1 = e => Po(e, Y1, Qg)
  , K1 = e => Po(e, "position", Qg)
  , X1 = new Set(["image", "url"])
  , J1 = e => Po(e, X1, nb)
  , Z1 = e => Po(e, "", tb)
  , Bo = () => !0
  , Po = (e, t, n) => {
    const r = Hg.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , eb = e => V1.test(e) && !U1.test(e)
  , Qg = () => !1
  , tb = e => H1.test(e)
  , nb = e => Q1.test(e)
  , rb = () => {
    const e = oe("colors")
      , t = oe("spacing")
      , n = oe("blur")
      , r = oe("brightness")
      , o = oe("borderColor")
      , a = oe("borderRadius")
      , i = oe("borderSpacing")
      , s = oe("borderWidth")
      , l = oe("contrast")
      , u = oe("grayscale")
      , c = oe("hueRotate")
      , d = oe("invert")
      , h = oe("gap")
      , f = oe("gradientColorStops")
      , b = oe("gradientColorStopPositions")
      , g = oe("inset")
      , x = oe("margin")
      , m = oe("opacity")
      , p = oe("padding")
      , w = oe("saturate")
      , S = oe("scale")
      , E = oe("sepia")
      , C = oe("skew")
      , k = oe("space")
      , R = oe("translate")
      , A = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", H, t]
      , I = () => [H, t]
      , Q = () => ["", Qt, gn]
      , D = () => ["auto", eo, H]
      , G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", H]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , U = () => [eo, H];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Bo],
            spacing: [Qt, gn],
            blur: ["none", "", vn, H],
            brightness: U(),
            borderColor: [e],
            borderRadius: ["none", "", "full", vn, H],
            borderSpacing: I(),
            borderWidth: Q(),
            contrast: U(),
            grayscale: T(),
            hueRotate: U(),
            invert: T(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [q1, gn],
            inset: z(),
            margin: z(),
            opacity: U(),
            padding: I(),
            saturate: U(),
            scale: U(),
            sepia: T(),
            skew: U(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", H]
            }],
            container: ["container"],
            columns: [{
                columns: [vn]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...G(), H]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", $o, H]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", H]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", $o, H]
            }],
            "grid-cols": [{
                "grid-cols": [Bo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", $o, H]
                }, H]
            }],
            "col-start": [{
                "col-start": D()
            }],
            "col-end": [{
                "col-end": D()
            }],
            "grid-rows": [{
                "grid-rows": [Bo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [$o, H]
                }, H]
            }],
            "row-start": [{
                "row-start": D()
            }],
            "row-end": [{
                "row-end": D()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", H]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", H]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
            }],
            "min-w": [{
                "min-w": [H, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [vn]
                }, vn]
            }],
            h: [{
                h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [H, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", vn, gn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Rl]
            }],
            "font-family": [{
                font: [Bo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
            }],
            "line-clamp": [{
                "line-clamp": ["none", eo, Rl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qt, H]
            }],
            "list-image": [{
                "list-image": ["none", H]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", H]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Qt, gn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Qt, H]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", H]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...G(), K1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", G1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, J1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [b]
            }],
            "gradient-via-pos": [{
                via: [b]
            }],
            "gradient-to-pos": [{
                to: [b]
            }],
            "gradient-from": [{
                from: [f]
            }],
            "gradient-via": [{
                via: [f]
            }],
            "gradient-to": [{
                to: [f]
            }],
            rounded: [{
                rounded: [a]
            }],
            "rounded-s": [{
                "rounded-s": [a]
            }],
            "rounded-e": [{
                "rounded-e": [a]
            }],
            "rounded-t": [{
                "rounded-t": [a]
            }],
            "rounded-r": [{
                "rounded-r": [a]
            }],
            "rounded-b": [{
                "rounded-b": [a]
            }],
            "rounded-l": [{
                "rounded-l": [a]
            }],
            "rounded-ss": [{
                "rounded-ss": [a]
            }],
            "rounded-se": [{
                "rounded-se": [a]
            }],
            "rounded-ee": [{
                "rounded-ee": [a]
            }],
            "rounded-es": [{
                "rounded-es": [a]
            }],
            "rounded-tl": [{
                "rounded-tl": [a]
            }],
            "rounded-tr": [{
                "rounded-tr": [a]
            }],
            "rounded-br": [{
                "rounded-br": [a]
            }],
            "rounded-bl": [{
                "rounded-bl": [a]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [Qt, H]
            }],
            "outline-w": [{
                outline: [Qt, gn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Q()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [Qt, gn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", vn, Z1]
            }],
            "shadow-color": [{
                shadow: [Bo]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", vn, H]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [w]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [w]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", H]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", H]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [$o, H]
            }],
            "translate-x": [{
                "translate-x": [R]
            }],
            "translate-y": [{
                "translate-y": [R]
            }],
            "skew-x": [{
                "skew-x": [C]
            }],
            "skew-y": [{
                "skew-y": [C]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", H]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Qt, gn, Rl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
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
        }
    }
}
  , ob = z1(rb);
function We(...e) {
    return ob(Fg(e))
}
const ab = d1
  , qg = v.forwardRef( ({className: e, ...t}, n) => y.jsx(jg, {
    ref: n,
    className: We("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
qg.displayName = jg.displayName;
const ib = Xc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Yg = v.forwardRef( ({className: e, variant: t, ...n}, r) => y.jsx(Mg, {
    ref: r,
    className: We(ib({
        variant: t
    }), e),
    ...n
}));
Yg.displayName = Mg.displayName;
const sb = v.forwardRef( ({className: e, ...t}, n) => y.jsx(Lg, {
    ref: n,
    className: We("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
sb.displayName = Lg.displayName;
const Gg = v.forwardRef( ({className: e, ...t}, n) => y.jsx(_g, {
    ref: n,
    className: We("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: y.jsx(js, {
        className: "h-4 w-4"
    })
}));
Gg.displayName = _g.displayName;
const Kg = v.forwardRef( ({className: e, ...t}, n) => y.jsx(Ag, {
    ref: n,
    className: We("text-sm font-semibold", e),
    ...t
}));
Kg.displayName = Ag.displayName;
const Xg = v.forwardRef( ({className: e, ...t}, n) => y.jsx(Dg, {
    ref: n,
    className: We("text-sm opacity-90", e),
    ...t
}));
Xg.displayName = Dg.displayName;
function lb() {
    const {toasts: e} = cg();
    return y.jsxs(ab, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...a}) {
            return y.jsxs(Yg, {
                ...a,
                children: [y.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && y.jsx(Kg, {
                        children: n
                    }), r && y.jsx(Xg, {
                        children: r
                    })]
                }), o, y.jsx(Gg, {})]
            }, t)
        }), y.jsx(qg, {})]
    })
}
var Wf = ["light", "dark"]
  , ub = "(prefers-color-scheme: dark)"
  , cb = v.createContext(void 0)
  , db = {
    setTheme: e => {}
    ,
    themes: []
}
  , fb = () => {
    var e;
    return (e = v.useContext(cb)) != null ? e : db
}
;
v.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: i, attrs: s, nonce: l}) => {
    let u = a === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map(b => `'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? Wf.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , h = (b, g=!1, x=!0) => {
        let m = i ? i[b] : b
          , p = g ? b + "|| ''" : `'${m}'`
          , w = "";
        return o && x && !g && Wf.includes(b) && (w += `d.style.colorScheme = '${b}';`),
        n === "class" ? g || m ? w += `c.add(${p})` : w += "null" : m && (w += `d[s](n,${p})`),
        w
    }
      , f = e ? `!function(){${c}${h(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${ub}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${h(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(a, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${h(i ? "x[e]" : "e", !0)}}else{${h(a, !1, !1)};}${d}}catch(t){}}();`;
    return v.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
}
);
var pb = e => {
    switch (e) {
    case "success":
        return gb;
    case "info":
        return yb;
    case "warning":
        return vb;
    case "error":
        return wb;
    default:
        return null
    }
}
  , hb = Array(12).fill(0)
  , mb = ({visible: e, className: t}) => j.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, j.createElement("div", {
    className: "sonner-spinner"
}, hb.map( (n, r) => j.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , gb = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , vb = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , yb = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , wb = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , xb = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, j.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), j.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , bb = () => {
    let[e,t] = j.useState(document.hidden);
    return j.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Bu = 1
  , Sb = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Bu++
              , a = this.toasts.find(s => s.id === o)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            a ? this.toasts = this.toasts.map(s => s.id === o ? (this.publish({
                ...s,
                ...e,
                id: o,
                title: n
            }),
            {
                ...s,
                ...e,
                id: o,
                dismissible: i,
                title: n
            }) : s) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, a, i = r.then(async l => {
                if (a = ["resolve", l],
                j.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (Cb(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (a = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), s = () => new Promise( (l, u) => i.then( () => a[0] === "reject" ? u(a[1]) : l(a[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: s
            } : Object.assign(n, {
                unwrap: s
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Bu++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Ve = new Sb
  , Eb = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Bu++;
    return Ve.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , Cb = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , kb = Eb
  , Pb = () => Ve.toasts
  , Nb = () => Ve.getActiveToasts();
Object.assign(kb, {
    success: Ve.success,
    info: Ve.info,
    warning: Ve.warning,
    error: Ve.error,
    custom: Ve.custom,
    message: Ve.message,
    promise: Ve.promise,
    dismiss: Ve.dismiss,
    loading: Ve.loading
}, {
    getHistory: Pb,
    getToasts: Nb
});
function Tb(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
Tb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ci(e) {
    return e.label !== void 0
}
var Rb = 3
  , Ob = "32px"
  , jb = "16px"
  , Vf = 4e3
  , Mb = 356
  , Ab = 14
  , Db = 20
  , Lb = 200;
function gt(...e) {
    return e.filter(Boolean).join(" ")
}
function _b(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var Ib = e => {
    var t, n, r, o, a, i, s, l, u, c, d;
    let {invert: h, toast: f, unstyled: b, interacting: g, setHeights: x, visibleToasts: m, heights: p, index: w, toasts: S, expanded: E, removeToast: C, defaultRichColors: k, closeButton: R, style: A, cancelButtonStyle: M, actionButtonStyle: z, className: I="", descriptionClassName: Q="", duration: D, position: G, gap: $, loadingIcon: V, expandByDefault: N, classNames: T, icons: L, closeButtonAriaLabel: U="Close toast", pauseWhenPageIsHidden: F} = e
      , [q,K] = j.useState(null)
      , [ge,Ne] = j.useState(null)
      , [Z,kr] = j.useState(!1)
      , [un,Xn] = j.useState(!1)
      , [cn,Pr] = j.useState(!1)
      , [dn,Ba] = j.useState(!1)
      , [Gs,Wa] = j.useState(!1)
      , [Ks,Oo] = j.useState(0)
      , [Nr,gd] = j.useState(0)
      , jo = j.useRef(f.duration || D || Vf)
      , vd = j.useRef(null)
      , Jn = j.useRef(null)
      , Ay = w === 0
      , Dy = w + 1 <= m
      , rt = f.type
      , Tr = f.dismissible !== !1
      , Ly = f.className || ""
      , _y = f.descriptionClassName || ""
      , Va = j.useMemo( () => p.findIndex(B => B.toastId === f.id) || 0, [p, f.id])
      , Iy = j.useMemo( () => {
        var B;
        return (B = f.closeButton) != null ? B : R
    }
    , [f.closeButton, R])
      , yd = j.useMemo( () => f.duration || D || Vf, [f.duration, D])
      , Xs = j.useRef(0)
      , Rr = j.useRef(0)
      , wd = j.useRef(0)
      , Or = j.useRef(null)
      , [Fy,zy] = G.split("-")
      , xd = j.useMemo( () => p.reduce( (B, ne, se) => se >= Va ? B : B + ne.height, 0), [p, Va])
      , bd = bb()
      , $y = f.invert || h
      , Js = rt === "loading";
    Rr.current = j.useMemo( () => Va * $ + xd, [Va, xd]),
    j.useEffect( () => {
        jo.current = yd
    }
    , [yd]),
    j.useEffect( () => {
        kr(!0)
    }
    , []),
    j.useEffect( () => {
        let B = Jn.current;
        if (B) {
            let ne = B.getBoundingClientRect().height;
            return gd(ne),
            x(se => [{
                toastId: f.id,
                height: ne,
                position: f.position
            }, ...se]),
            () => x(se => se.filter(ft => ft.toastId !== f.id))
        }
    }
    , [x, f.id]),
    j.useLayoutEffect( () => {
        if (!Z)
            return;
        let B = Jn.current
          , ne = B.style.height;
        B.style.height = "auto";
        let se = B.getBoundingClientRect().height;
        B.style.height = ne,
        gd(se),
        x(ft => ft.find(pt => pt.toastId === f.id) ? ft.map(pt => pt.toastId === f.id ? {
            ...pt,
            height: se
        } : pt) : [{
            toastId: f.id,
            height: se,
            position: f.position
        }, ...ft])
    }
    , [Z, f.title, f.description, x, f.id]);
    let fn = j.useCallback( () => {
        Xn(!0),
        Oo(Rr.current),
        x(B => B.filter(ne => ne.toastId !== f.id)),
        setTimeout( () => {
            C(f)
        }
        , Lb)
    }
    , [f, C, x, Rr]);
    j.useEffect( () => {
        if (f.promise && rt === "loading" || f.duration === 1 / 0 || f.type === "loading")
            return;
        let B;
        return E || g || F && bd ? ( () => {
            if (wd.current < Xs.current) {
                let ne = new Date().getTime() - Xs.current;
                jo.current = jo.current - ne
            }
            wd.current = new Date().getTime()
        }
        )() : jo.current !== 1 / 0 && (Xs.current = new Date().getTime(),
        B = setTimeout( () => {
            var ne;
            (ne = f.onAutoClose) == null || ne.call(f, f),
            fn()
        }
        , jo.current)),
        () => clearTimeout(B)
    }
    , [E, g, f, rt, F, bd, fn]),
    j.useEffect( () => {
        f.delete && fn()
    }
    , [fn, f.delete]);
    function By() {
        var B, ne, se;
        return L != null && L.loading ? j.createElement("div", {
            className: gt(T == null ? void 0 : T.loader, (B = f == null ? void 0 : f.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": rt === "loading"
        }, L.loading) : V ? j.createElement("div", {
            className: gt(T == null ? void 0 : T.loader, (ne = f == null ? void 0 : f.classNames) == null ? void 0 : ne.loader, "sonner-loader"),
            "data-visible": rt === "loading"
        }, V) : j.createElement(mb, {
            className: gt(T == null ? void 0 : T.loader, (se = f == null ? void 0 : f.classNames) == null ? void 0 : se.loader),
            visible: rt === "loading"
        })
    }
    return j.createElement("li", {
        tabIndex: 0,
        ref: Jn,
        className: gt(I, Ly, T == null ? void 0 : T.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[rt], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[rt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = f.richColors) != null ? r : k,
        "data-styled": !(f.jsx || f.unstyled || b),
        "data-mounted": Z,
        "data-promise": !!f.promise,
        "data-swiped": Gs,
        "data-removed": un,
        "data-visible": Dy,
        "data-y-position": Fy,
        "data-x-position": zy,
        "data-index": w,
        "data-front": Ay,
        "data-swiping": cn,
        "data-dismissible": Tr,
        "data-type": rt,
        "data-invert": $y,
        "data-swipe-out": dn,
        "data-swipe-direction": ge,
        "data-expanded": !!(E || N && Z),
        style: {
            "--index": w,
            "--toasts-before": w,
            "--z-index": S.length - w,
            "--offset": `${un ? Ks : Rr.current}px`,
            "--initial-height": N ? "auto" : `${Nr}px`,
            ...A,
            ...f.style
        },
        onDragEnd: () => {
            Pr(!1),
            K(null),
            Or.current = null
        }
        ,
        onPointerDown: B => {
            Js || !Tr || (vd.current = new Date,
            Oo(Rr.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (Pr(!0),
            Or.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, ne, se, ft;
            if (dn || !Tr)
                return;
            Or.current = null;
            let pt = Number(((B = Jn.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , pn = Number(((ne = Jn.current) == null ? void 0 : ne.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Zn = new Date().getTime() - ((se = vd.current) == null ? void 0 : se.getTime())
              , ht = q === "x" ? pt : pn
              , hn = Math.abs(ht) / Zn;
            if (Math.abs(ht) >= Db || hn > .11) {
                Oo(Rr.current),
                (ft = f.onDismiss) == null || ft.call(f, f),
                Ne(q === "x" ? pt > 0 ? "right" : "left" : pn > 0 ? "down" : "up"),
                fn(),
                Ba(!0),
                Wa(!1);
                return
            }
            Pr(!1),
            K(null)
        }
        ,
        onPointerMove: B => {
            var ne, se, ft, pt;
            if (!Or.current || !Tr || ((ne = window.getSelection()) == null ? void 0 : ne.toString().length) > 0)
                return;
            let pn = B.clientY - Or.current.y
              , Zn = B.clientX - Or.current.x
              , ht = (se = e.swipeDirections) != null ? se : _b(G);
            !q && (Math.abs(Zn) > 1 || Math.abs(pn) > 1) && K(Math.abs(Zn) > Math.abs(pn) ? "x" : "y");
            let hn = {
                x: 0,
                y: 0
            };
            q === "y" ? (ht.includes("top") || ht.includes("bottom")) && (ht.includes("top") && pn < 0 || ht.includes("bottom") && pn > 0) && (hn.y = pn) : q === "x" && (ht.includes("left") || ht.includes("right")) && (ht.includes("left") && Zn < 0 || ht.includes("right") && Zn > 0) && (hn.x = Zn),
            (Math.abs(hn.x) > 0 || Math.abs(hn.y) > 0) && Wa(!0),
            (ft = Jn.current) == null || ft.style.setProperty("--swipe-amount-x", `${hn.x}px`),
            (pt = Jn.current) == null || pt.style.setProperty("--swipe-amount-y", `${hn.y}px`)
        }
    }, Iy && !f.jsx ? j.createElement("button", {
        "aria-label": U,
        "data-disabled": Js,
        "data-close-button": !0,
        onClick: Js || !Tr ? () => {}
        : () => {
            var B;
            fn(),
            (B = f.onDismiss) == null || B.call(f, f)
        }
        ,
        className: gt(T == null ? void 0 : T.closeButton, (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.closeButton)
    }, (a = L == null ? void 0 : L.close) != null ? a : xb) : null, f.jsx || v.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : j.createElement(j.Fragment, null, rt || f.icon || f.promise ? j.createElement("div", {
        "data-icon": "",
        className: gt(T == null ? void 0 : T.icon, (i = f == null ? void 0 : f.classNames) == null ? void 0 : i.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || By() : null, f.type !== "loading" ? f.icon || (L == null ? void 0 : L[rt]) || pb(rt) : null) : null, j.createElement("div", {
        "data-content": "",
        className: gt(T == null ? void 0 : T.content, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.content)
    }, j.createElement("div", {
        "data-title": "",
        className: gt(T == null ? void 0 : T.title, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? j.createElement("div", {
        "data-description": "",
        className: gt(Q, _y, T == null ? void 0 : T.description, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), v.isValidElement(f.cancel) ? f.cancel : f.cancel && ci(f.cancel) ? j.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || M,
        onClick: B => {
            var ne, se;
            ci(f.cancel) && Tr && ((se = (ne = f.cancel).onClick) == null || se.call(ne, B),
            fn())
        }
        ,
        className: gt(T == null ? void 0 : T.cancelButton, (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.cancelButton)
    }, f.cancel.label) : null, v.isValidElement(f.action) ? f.action : f.action && ci(f.action) ? j.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || z,
        onClick: B => {
            var ne, se;
            ci(f.action) && ((se = (ne = f.action).onClick) == null || se.call(ne, B),
            !B.defaultPrevented && fn())
        }
        ,
        className: gt(T == null ? void 0 : T.actionButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.actionButton)
    }, f.action.label) : null))
}
;
function Uf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function Fb(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let a = o === 1
          , i = a ? "--mobile-offset" : "--offset"
          , s = a ? jb : Ob;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${i}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${i}-${u}`] = s : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(s)
    }
    ),
    n
}
var zb = v.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: a, closeButton: i, className: s, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: h, style: f, visibleToasts: b=Rb, toastOptions: g, dir: x=Uf(), gap: m=Ab, loadingIcon: p, icons: w, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: E} = e
      , [C,k] = j.useState([])
      , R = j.useMemo( () => Array.from(new Set([r].concat(C.filter(F => F.position).map(F => F.position)))), [C, r])
      , [A,M] = j.useState([])
      , [z,I] = j.useState(!1)
      , [Q,D] = j.useState(!1)
      , [G,$] = j.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , V = j.useRef(null)
      , N = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = j.useRef(null)
      , L = j.useRef(!1)
      , U = j.useCallback(F => {
        k(q => {
            var K;
            return (K = q.find(ge => ge.id === F.id)) != null && K.delete || Ve.dismiss(F.id),
            q.filter( ({id: ge}) => ge !== F.id)
        }
        )
    }
    , []);
    return j.useEffect( () => Ve.subscribe(F => {
        if (F.dismiss) {
            k(q => q.map(K => K.id === F.id ? {
                ...K,
                delete: !0
            } : K));
            return
        }
        setTimeout( () => {
            lg.flushSync( () => {
                k(q => {
                    let K = q.findIndex(ge => ge.id === F.id);
                    return K !== -1 ? [...q.slice(0, K), {
                        ...q[K],
                        ...F
                    }, ...q.slice(K + 1)] : [F, ...q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    j.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({matches: q}) => {
                $(q ? "dark" : "light")
            }
            )
        } catch {
            F.addListener( ({matches: K}) => {
                try {
                    $(K ? "dark" : "light")
                } catch (ge) {
                    console.error(ge)
                }
            }
            )
        }
    }
    , [c]),
    j.useEffect( () => {
        C.length <= 1 && I(!1)
    }
    , [C]),
    j.useEffect( () => {
        let F = q => {
            var K, ge;
            o.every(Ne => q[Ne] || q.code === Ne) && (I(!0),
            (K = V.current) == null || K.focus()),
            q.code === "Escape" && (document.activeElement === V.current || (ge = V.current) != null && ge.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
    }
    , [o]),
    j.useEffect( () => {
        if (V.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                L.current = !1)
            }
    }
    , [V.current]),
    j.createElement("section", {
        ref: t,
        "aria-label": `${S} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map( (F, q) => {
        var K;
        let[ge,Ne] = F.split("-");
        return C.length ? j.createElement("ol", {
            key: F,
            dir: x === "auto" ? Uf() : x,
            tabIndex: -1,
            ref: V,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": G,
            "data-y-position": ge,
            "data-lifted": z && C.length > 1 && !a,
            "data-x-position": Ne,
            style: {
                "--front-toast-height": `${((K = A[0]) == null ? void 0 : K.height) || 0}px`,
                "--width": `${Mb}px`,
                "--gap": `${m}px`,
                ...f,
                ...Fb(l, u)
            },
            onBlur: Z => {
                L.current && !Z.currentTarget.contains(Z.relatedTarget) && (L.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || L.current || (L.current = !0,
                T.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                Q || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || D(!0)
            }
            ,
            onPointerUp: () => D(!1)
        }, C.filter(Z => !Z.position && q === 0 || Z.position === F).map( (Z, kr) => {
            var un, Xn;
            return j.createElement(Ib, {
                key: Z.id,
                icons: w,
                index: kr,
                toast: Z,
                defaultRichColors: d,
                duration: (un = g == null ? void 0 : g.duration) != null ? un : h,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: b,
                closeButton: (Xn = g == null ? void 0 : g.closeButton) != null ? Xn : i,
                interacting: Q,
                position: F,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: U,
                toasts: C.filter(cn => cn.position == Z.position),
                heights: A.filter(cn => cn.position == Z.position),
                setHeights: M,
                expandByDefault: a,
                gap: m,
                loadingIcon: p,
                expanded: z,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const $b = ({...e}) => {
    const {theme: t="system"} = fb();
    return y.jsx(zb, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var Bb = nc[" useId ".trim().toString()] || ( () => {}
)
  , Wb = 0;
function Ol(e) {
    const [t,n] = v.useState(Bb());
    return on( () => {
        n(r => r ?? String(Wb++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const Vb = ["top", "right", "bottom", "left"]
  , Un = Math.min
  , Ke = Math.max
  , os = Math.round
  , di = Math.floor
  , Wt = e => ({
    x: e,
    y: e
})
  , Ub = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Hb = {
    start: "end",
    end: "start"
};
function Wu(e, t, n) {
    return Ke(e, Un(t, n))
}
function an(e, t) {
    return typeof e == "function" ? e(t) : e
}
function sn(e) {
    return e.split("-")[0]
}
function No(e) {
    return e.split("-")[1]
}
function Zc(e) {
    return e === "x" ? "y" : "x"
}
function ed(e) {
    return e === "y" ? "height" : "width"
}
const Qb = new Set(["top", "bottom"]);
function Ft(e) {
    return Qb.has(sn(e)) ? "y" : "x"
}
function td(e) {
    return Zc(Ft(e))
}
function qb(e, t, n) {
    n === void 0 && (n = !1);
    const r = No(e)
      , o = td(e)
      , a = ed(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (i = as(i)),
    [i, as(i)]
}
function Yb(e) {
    const t = as(e);
    return [Vu(e), t, Vu(t)]
}
function Vu(e) {
    return e.replace(/start|end/g, t => Hb[t])
}
const Hf = ["left", "right"]
  , Qf = ["right", "left"]
  , Gb = ["top", "bottom"]
  , Kb = ["bottom", "top"];
function Xb(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Qf : Hf : t ? Hf : Qf;
    case "left":
    case "right":
        return t ? Gb : Kb;
    default:
        return []
    }
}
function Jb(e, t, n, r) {
    const o = No(e);
    let a = Xb(sn(e), n === "start", r);
    return o && (a = a.map(i => i + "-" + o),
    t && (a = a.concat(a.map(Vu)))),
    a
}
function as(e) {
    return e.replace(/left|right|bottom|top/g, t => Ub[t])
}
function Zb(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Jg(e) {
    return typeof e != "number" ? Zb(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function is(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function qf(e, t, n) {
    let {reference: r, floating: o} = e;
    const a = Ft(t)
      , i = td(t)
      , s = ed(i)
      , l = sn(t)
      , u = a === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , h = r[s] / 2 - o[s] / 2;
    let f;
    switch (l) {
    case "top":
        f = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        f = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        f = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        f = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        f = {
            x: r.x,
            y: r.y
        }
    }
    switch (No(t)) {
    case "start":
        f[i] -= h * (n && u ? -1 : 1);
        break;
    case "end":
        f[i] += h * (n && u ? -1 : 1);
        break
    }
    return f
}
const eS = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: a=[], platform: i} = n
      , s = a.filter(Boolean)
      , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: d} = qf(u, r, l)
      , h = r
      , f = {}
      , b = 0;
    for (let g = 0; g < s.length; g++) {
        const {name: x, fn: m} = s[g]
          , {x: p, y: w, data: S, reset: E} = await m({
            x: c,
            y: d,
            initialPlacement: r,
            placement: h,
            strategy: o,
            middlewareData: f,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = p ?? c,
        d = w ?? d,
        f = {
            ...f,
            [x]: {
                ...f[x],
                ...S
            }
        },
        E && b <= 50 && (b++,
        typeof E == "object" && (E.placement && (h = E.placement),
        E.rects && (u = E.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects),
        {x: c, y: d} = qf(u, h, l)),
        g = -1)
    }
    return {
        x: c,
        y: d,
        placement: h,
        strategy: o,
        middlewareData: f
    }
}
;
async function ba(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: a, rects: i, elements: s, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: h=!1, padding: f=0} = an(t, e)
      , b = Jg(f)
      , x = s[h ? d === "floating" ? "reference" : "floating" : d]
      , m = is(await a.getClippingRect({
        element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , p = d === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating))
      , S = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = is(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: p,
        offsetParent: w,
        strategy: l
    }) : p);
    return {
        top: (m.top - E.top + b.top) / S.y,
        bottom: (E.bottom - m.bottom + b.bottom) / S.y,
        left: (m.left - E.left + b.left) / S.x,
        right: (E.right - m.right + b.right) / S.x
    }
}
const tS = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: a, platform: i, elements: s, middlewareData: l} = t
          , {element: u, padding: c=0} = an(e, t) || {};
        if (u == null)
            return {};
        const d = Jg(c)
          , h = {
            x: n,
            y: r
        }
          , f = td(o)
          , b = ed(f)
          , g = await i.getDimensions(u)
          , x = f === "y"
          , m = x ? "top" : "left"
          , p = x ? "bottom" : "right"
          , w = x ? "clientHeight" : "clientWidth"
          , S = a.reference[b] + a.reference[f] - h[f] - a.floating[b]
          , E = h[f] - a.reference[f]
          , C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let k = C ? C[w] : 0;
        (!k || !await (i.isElement == null ? void 0 : i.isElement(C))) && (k = s.floating[w] || a.floating[b]);
        const R = S / 2 - E / 2
          , A = k / 2 - g[b] / 2 - 1
          , M = Un(d[m], A)
          , z = Un(d[p], A)
          , I = M
          , Q = k - g[b] - z
          , D = k / 2 - g[b] / 2 + R
          , G = Wu(I, D, Q)
          , $ = !l.arrow && No(o) != null && D !== G && a.reference[b] / 2 - (D < I ? M : z) - g[b] / 2 < 0
          , V = $ ? D < I ? D - I : D - Q : 0;
        return {
            [f]: h[f] + V,
            data: {
                [f]: G,
                centerOffset: D - G - V,
                ...$ && {
                    alignmentOffset: V
                }
            },
            reset: $
        }
    }
})
  , nS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: a, rects: i, initialPlacement: s, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: h, fallbackStrategy: f="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: g=!0, ...x} = an(e, t);
            if ((n = a.arrow) != null && n.alignmentOffset)
                return {};
            const m = sn(o)
              , p = Ft(s)
              , w = sn(s) === s
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , E = h || (w || !g ? [as(s)] : Yb(s))
              , C = b !== "none";
            !h && C && E.push(...Jb(s, g, b, S));
            const k = [s, ...E]
              , R = await ba(t, x)
              , A = [];
            let M = ((r = a.flip) == null ? void 0 : r.overflows) || [];
            if (c && A.push(R[m]),
            d) {
                const D = qb(o, i, S);
                A.push(R[D[0]], R[D[1]])
            }
            if (M = [...M, {
                placement: o,
                overflows: A
            }],
            !A.every(D => D <= 0)) {
                var z, I;
                const D = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1
                  , G = k[D];
                if (G && (!(d === "alignment" ? p !== Ft(G) : !1) || M.every(N => N.overflows[0] > 0 && Ft(N.placement) === p)))
                    return {
                        data: {
                            index: D,
                            overflows: M
                        },
                        reset: {
                            placement: G
                        }
                    };
                let $ = (I = M.filter(V => V.overflows[0] <= 0).sort( (V, N) => V.overflows[1] - N.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!$)
                    switch (f) {
                    case "bestFit":
                        {
                            var Q;
                            const V = (Q = M.filter(N => {
                                if (C) {
                                    const T = Ft(N.placement);
                                    return T === p || T === "y"
                                }
                                return !0
                            }
                            ).map(N => [N.placement, N.overflows.filter(T => T > 0).reduce( (T, L) => T + L, 0)]).sort( (N, T) => N[1] - T[1])[0]) == null ? void 0 : Q[0];
                            V && ($ = V);
                            break
                        }
                    case "initialPlacement":
                        $ = s;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function Yf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Gf(e) {
    return Vb.some(t => e[t] >= 0)
}
const rS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = an(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const a = await ba(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = Yf(a, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Gf(i)
                        }
                    }
                }
            case "escaped":
                {
                    const a = await ba(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = Yf(a, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Gf(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Zg = new Set(["left", "top"]);
async function oS(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , i = sn(n)
      , s = No(n)
      , l = Ft(n) === "y"
      , u = Zg.has(i) ? -1 : 1
      , c = a && l ? -1 : 1
      , d = an(t, e);
    let {mainAxis: h, crossAxis: f, alignmentAxis: b} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return s && typeof b == "number" && (f = s === "end" ? b * -1 : b),
    l ? {
        x: f * c,
        y: h * u
    } : {
        x: h * u,
        y: f * c
    }
}
const aS = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: a, placement: i, middlewareData: s} = t
              , l = await oS(t, e);
            return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: a + l.y,
                data: {
                    ...l,
                    placement: i
                }
            }
        }
    }
}
  , iS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: a=!0, crossAxis: i=!1, limiter: s={
                fn: x => {
                    let {x: m, y: p} = x;
                    return {
                        x: m,
                        y: p
                    }
                }
            }, ...l} = an(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await ba(t, l)
              , d = Ft(sn(o))
              , h = Zc(d);
            let f = u[h]
              , b = u[d];
            if (a) {
                const x = h === "y" ? "top" : "left"
                  , m = h === "y" ? "bottom" : "right"
                  , p = f + c[x]
                  , w = f - c[m];
                f = Wu(p, f, w)
            }
            if (i) {
                const x = d === "y" ? "top" : "left"
                  , m = d === "y" ? "bottom" : "right"
                  , p = b + c[x]
                  , w = b - c[m];
                b = Wu(p, b, w)
            }
            const g = s.fn({
                ...t,
                [h]: f,
                [d]: b
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [h]: a,
                        [d]: i
                    }
                }
            }
        }
    }
}
  , sS = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: a, middlewareData: i} = t
              , {offset: s=0, mainAxis: l=!0, crossAxis: u=!0} = an(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = Ft(o)
              , h = Zc(d);
            let f = c[h]
              , b = c[d];
            const g = an(s, t)
              , x = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const w = h === "y" ? "height" : "width"
                  , S = a.reference[h] - a.floating[w] + x.mainAxis
                  , E = a.reference[h] + a.reference[w] - x.mainAxis;
                f < S ? f = S : f > E && (f = E)
            }
            if (u) {
                var m, p;
                const w = h === "y" ? "width" : "height"
                  , S = Zg.has(sn(o))
                  , E = a.reference[d] - a.floating[w] + (S && ((m = i.offset) == null ? void 0 : m[d]) || 0) + (S ? 0 : x.crossAxis)
                  , C = a.reference[d] + a.reference[w] + (S ? 0 : ((p = i.offset) == null ? void 0 : p[d]) || 0) - (S ? x.crossAxis : 0);
                b < E ? b = E : b > C && (b = C)
            }
            return {
                [h]: f,
                [d]: b
            }
        }
    }
}
  , lS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: a, platform: i, elements: s} = t
              , {apply: l= () => {}
            , ...u} = an(e, t)
              , c = await ba(t, u)
              , d = sn(o)
              , h = No(o)
              , f = Ft(o) === "y"
              , {width: b, height: g} = a.floating;
            let x, m;
            d === "top" || d === "bottom" ? (x = d,
            m = h === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = d,
            x = h === "end" ? "top" : "bottom");
            const p = g - c.top - c.bottom
              , w = b - c.left - c.right
              , S = Un(g - c[x], p)
              , E = Un(b - c[m], w)
              , C = !t.middlewareData.shift;
            let k = S
              , R = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = p),
            C && !h) {
                const M = Ke(c.left, 0)
                  , z = Ke(c.right, 0)
                  , I = Ke(c.top, 0)
                  , Q = Ke(c.bottom, 0);
                f ? R = b - 2 * (M !== 0 || z !== 0 ? M + z : Ke(c.left, c.right)) : k = g - 2 * (I !== 0 || Q !== 0 ? I + Q : Ke(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: R,
                availableHeight: k
            });
            const A = await i.getDimensions(s.floating);
            return b !== A.width || g !== A.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Ms() {
    return typeof window < "u"
}
function To(e) {
    return ev(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Ht(e) {
    var t;
    return (t = (ev(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function ev(e) {
    return Ms() ? e instanceof Node || e instanceof Ze(e).Node : !1
}
function Pt(e) {
    return Ms() ? e instanceof Element || e instanceof Ze(e).Element : !1
}
function Ut(e) {
    return Ms() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}
function Kf(e) {
    return !Ms() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
const uS = new Set(["inline", "contents"]);
function Fa(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Nt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !uS.has(o)
}
const cS = new Set(["table", "td", "th"]);
function dS(e) {
    return cS.has(To(e))
}
const fS = [":popover-open", ":modal"];
function As(e) {
    return fS.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const pS = ["transform", "translate", "scale", "rotate", "perspective"]
  , hS = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , mS = ["paint", "layout", "strict", "content"];
function nd(e) {
    const t = rd()
      , n = Pt(e) ? Nt(e) : e;
    return pS.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || hS.some(r => (n.willChange || "").includes(r)) || mS.some(r => (n.contain || "").includes(r))
}
function gS(e) {
    let t = Hn(e);
    for (; Ut(t) && !xo(t); ) {
        if (nd(t))
            return t;
        if (As(t))
            return null;
        t = Hn(t)
    }
    return null
}
function rd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const vS = new Set(["html", "body", "#document"]);
function xo(e) {
    return vS.has(To(e))
}
function Nt(e) {
    return Ze(e).getComputedStyle(e)
}
function Ds(e) {
    return Pt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Hn(e) {
    if (To(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Kf(e) && e.host || Ht(e);
    return Kf(t) ? t.host : t
}
function tv(e) {
    const t = Hn(e);
    return xo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ut(t) && Fa(t) ? t : tv(t)
}
function Sa(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = tv(e)
      , a = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = Ze(o);
    if (a) {
        const s = Uu(i);
        return t.concat(i, i.visualViewport || [], Fa(o) ? o : [], s && n ? Sa(s) : [])
    }
    return t.concat(o, Sa(o, [], n))
}
function Uu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function nv(e) {
    const t = Nt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Ut(e)
      , a = o ? e.offsetWidth : n
      , i = o ? e.offsetHeight : r
      , s = os(n) !== a || os(r) !== i;
    return s && (n = a,
    r = i),
    {
        width: n,
        height: r,
        $: s
    }
}
function od(e) {
    return Pt(e) ? e : e.contextElement
}
function to(e) {
    const t = od(e);
    if (!Ut(t))
        return Wt(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: a} = nv(t);
    let i = (a ? os(n.width) : n.width) / r
      , s = (a ? os(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: i,
        y: s
    }
}
const yS = Wt(0);
function rv(e) {
    const t = Ze(e);
    return !rd() || !t.visualViewport ? yS : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function wS(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ze(e) ? !1 : t
}
function xr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , a = od(e);
    let i = Wt(1);
    t && (r ? Pt(r) && (i = to(r)) : i = to(e));
    const s = wS(a, n, r) ? rv(a) : Wt(0);
    let l = (o.left + s.x) / i.x
      , u = (o.top + s.y) / i.y
      , c = o.width / i.x
      , d = o.height / i.y;
    if (a) {
        const h = Ze(a)
          , f = r && Pt(r) ? Ze(r) : r;
        let b = h
          , g = Uu(b);
        for (; g && r && f !== b; ) {
            const x = to(g)
              , m = g.getBoundingClientRect()
              , p = Nt(g)
              , w = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * x.x
              , S = m.top + (g.clientTop + parseFloat(p.paddingTop)) * x.y;
            l *= x.x,
            u *= x.y,
            c *= x.x,
            d *= x.y,
            l += w,
            u += S,
            b = Ze(g),
            g = Uu(b)
        }
    }
    return is({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function ad(e, t) {
    const n = Ds(e).scrollLeft;
    return t ? t.left + n : xr(Ht(e)).left + n
}
function ov(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : ad(e, r))
      , a = r.top + t.scrollTop;
    return {
        x: o,
        y: a
    }
}
function xS(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const a = o === "fixed"
      , i = Ht(r)
      , s = t ? As(t.floating) : !1;
    if (r === i || s && a)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Wt(1);
    const c = Wt(0)
      , d = Ut(r);
    if ((d || !d && !a) && ((To(r) !== "body" || Fa(i)) && (l = Ds(r)),
    Ut(r))) {
        const f = xr(r);
        u = to(r),
        c.x = f.x + r.clientLeft,
        c.y = f.y + r.clientTop
    }
    const h = i && !d && !a ? ov(i, l, !0) : Wt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + h.y
    }
}
function bS(e) {
    return Array.from(e.getClientRects())
}
function SS(e) {
    const t = Ht(e)
      , n = Ds(e)
      , r = e.ownerDocument.body
      , o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , a = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + ad(e);
    const s = -n.scrollTop;
    return Nt(r).direction === "rtl" && (i += Ke(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: a,
        x: i,
        y: s
    }
}
function ES(e, t) {
    const n = Ze(e)
      , r = Ht(e)
      , o = n.visualViewport;
    let a = r.clientWidth
      , i = r.clientHeight
      , s = 0
      , l = 0;
    if (o) {
        a = o.width,
        i = o.height;
        const u = rd();
        (!u || u && t === "fixed") && (s = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: a,
        height: i,
        x: s,
        y: l
    }
}
const CS = new Set(["absolute", "fixed"]);
function kS(e, t) {
    const n = xr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , a = Ut(e) ? to(e) : Wt(1)
      , i = e.clientWidth * a.x
      , s = e.clientHeight * a.y
      , l = o * a.x
      , u = r * a.y;
    return {
        width: i,
        height: s,
        x: l,
        y: u
    }
}
function Xf(e, t, n) {
    let r;
    if (t === "viewport")
        r = ES(e, n);
    else if (t === "document")
        r = SS(Ht(e));
    else if (Pt(t))
        r = kS(t, n);
    else {
        const o = rv(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return is(r)
}
function av(e, t) {
    const n = Hn(e);
    return n === t || !Pt(n) || xo(n) ? !1 : Nt(n).position === "fixed" || av(n, t)
}
function PS(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Sa(e, [], !1).filter(s => Pt(s) && To(s) !== "body")
      , o = null;
    const a = Nt(e).position === "fixed";
    let i = a ? Hn(e) : e;
    for (; Pt(i) && !xo(i); ) {
        const s = Nt(i)
          , l = nd(i);
        !l && s.position === "fixed" && (o = null),
        (a ? !l && !o : !l && s.position === "static" && !!o && CS.has(o.position) || Fa(i) && !l && av(e, i)) ? r = r.filter(c => c !== i) : o = s,
        i = Hn(i)
    }
    return t.set(e, r),
    r
}
function NS(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const i = [...n === "clippingAncestors" ? As(t) ? [] : PS(t, this._c) : [].concat(n), r]
      , s = i[0]
      , l = i.reduce( (u, c) => {
        const d = Xf(t, c, o);
        return u.top = Ke(d.top, u.top),
        u.right = Un(d.right, u.right),
        u.bottom = Un(d.bottom, u.bottom),
        u.left = Ke(d.left, u.left),
        u
    }
    , Xf(t, s, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function TS(e) {
    const {width: t, height: n} = nv(e);
    return {
        width: t,
        height: n
    }
}
function RS(e, t, n) {
    const r = Ut(t)
      , o = Ht(t)
      , a = n === "fixed"
      , i = xr(e, !0, a, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Wt(0);
    function u() {
        l.x = ad(o)
    }
    if (r || !r && !a)
        if ((To(t) !== "body" || Fa(o)) && (s = Ds(t)),
        r) {
            const f = xr(t, !0, a, t);
            l.x = f.x + t.clientLeft,
            l.y = f.y + t.clientTop
        } else
            o && u();
    a && !r && o && u();
    const c = o && !r && !a ? ov(o, s) : Wt(0)
      , d = i.left + s.scrollLeft - l.x - c.x
      , h = i.top + s.scrollTop - l.y - c.y;
    return {
        x: d,
        y: h,
        width: i.width,
        height: i.height
    }
}
function jl(e) {
    return Nt(e).position === "static"
}
function Jf(e, t) {
    if (!Ut(e) || Nt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Ht(e) === n && (n = n.ownerDocument.body),
    n
}
function iv(e, t) {
    const n = Ze(e);
    if (As(e))
        return n;
    if (!Ut(e)) {
        let o = Hn(e);
        for (; o && !xo(o); ) {
            if (Pt(o) && !jl(o))
                return o;
            o = Hn(o)
        }
        return n
    }
    let r = Jf(e, t);
    for (; r && dS(r) && jl(r); )
        r = Jf(r, t);
    return r && xo(r) && jl(r) && !nd(r) ? n : r || gS(e) || n
}
const OS = async function(e) {
    const t = this.getOffsetParent || iv
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: RS(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function jS(e) {
    return Nt(e).direction === "rtl"
}
const MS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: xS,
    getDocumentElement: Ht,
    getClippingRect: NS,
    getOffsetParent: iv,
    getElementRects: OS,
    getClientRects: bS,
    getDimensions: TS,
    getScale: to,
    isElement: Pt,
    isRTL: jS
};
function sv(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function AS(e, t) {
    let n = null, r;
    const o = Ht(e);
    function a() {
        var s;
        clearTimeout(r),
        (s = n) == null || s.disconnect(),
        n = null
    }
    function i(s, l) {
        s === void 0 && (s = !1),
        l === void 0 && (l = 1),
        a();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: h, height: f} = u;
        if (s || t(),
        !h || !f)
            return;
        const b = di(d)
          , g = di(o.clientWidth - (c + h))
          , x = di(o.clientHeight - (d + f))
          , m = di(c)
          , w = {
            rootMargin: -b + "px " + -g + "px " + -x + "px " + -m + "px",
            threshold: Ke(0, Un(1, l)) || 1
        };
        let S = !0;
        function E(C) {
            const k = C[0].intersectionRatio;
            if (k !== l) {
                if (!S)
                    return i();
                k ? i(!1, k) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            k === 1 && !sv(u, e.getBoundingClientRect()) && i(),
            S = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...w,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,w)
        }
        n.observe(e)
    }
    return i(!0),
    a
}
function DS(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: a=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: s=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = od(e)
      , c = o || a ? [...u ? Sa(u) : [], ...Sa(t)] : [];
    c.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }),
        a && m.addEventListener("resize", n)
    }
    );
    const d = u && s ? AS(u, n) : null;
    let h = -1
      , f = null;
    i && (f = new ResizeObserver(m => {
        let[p] = m;
        p && p.target === u && f && (f.unobserve(t),
        cancelAnimationFrame(h),
        h = requestAnimationFrame( () => {
            var w;
            (w = f) == null || w.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && f.observe(u),
    f.observe(t));
    let b, g = l ? xr(e) : null;
    l && x();
    function x() {
        const m = xr(e);
        g && !sv(g, m) && n(),
        g = m,
        b = requestAnimationFrame(x)
    }
    return n(),
    () => {
        var m;
        c.forEach(p => {
            o && p.removeEventListener("scroll", n),
            a && p.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (m = f) == null || m.disconnect(),
        f = null,
        l && cancelAnimationFrame(b)
    }
}
const LS = aS
  , _S = iS
  , IS = nS
  , FS = lS
  , zS = rS
  , Zf = tS
  , $S = sS
  , BS = (e, t, n) => {
    const r = new Map
      , o = {
        platform: MS,
        ...n
    }
      , a = {
        ...o.platform,
        _c: r
    };
    return eS(e, t, {
        ...o,
        platform: a
    })
}
;
var WS = typeof document < "u"
  , VS = function() {}
  , ji = WS ? v.useLayoutEffect : VS;
function ss(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!ss(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const a = o[r];
            if (!(a === "_owner" && e.$$typeof) && !ss(e[a], t[a]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function lv(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function ep(e, t) {
    const n = lv(e);
    return Math.round(t * n) / n
}
function Ml(e) {
    const t = v.useRef(e);
    return ji( () => {
        t.current = e
    }
    ),
    t
}
function US(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: a, floating: i}={}, transform: s=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = v.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [h,f] = v.useState(r);
    ss(h, r) || f(r);
    const [b,g] = v.useState(null)
      , [x,m] = v.useState(null)
      , p = v.useCallback(N => {
        N !== C.current && (C.current = N,
        g(N))
    }
    , [])
      , w = v.useCallback(N => {
        N !== k.current && (k.current = N,
        m(N))
    }
    , [])
      , S = a || b
      , E = i || x
      , C = v.useRef(null)
      , k = v.useRef(null)
      , R = v.useRef(c)
      , A = l != null
      , M = Ml(l)
      , z = Ml(o)
      , I = Ml(u)
      , Q = v.useCallback( () => {
        if (!C.current || !k.current)
            return;
        const N = {
            placement: t,
            strategy: n,
            middleware: h
        };
        z.current && (N.platform = z.current),
        BS(C.current, k.current, N).then(T => {
            const L = {
                ...T,
                isPositioned: I.current !== !1
            };
            D.current && !ss(R.current, L) && (R.current = L,
            La.flushSync( () => {
                d(L)
            }
            ))
        }
        )
    }
    , [h, t, n, z, I]);
    ji( () => {
        u === !1 && R.current.isPositioned && (R.current.isPositioned = !1,
        d(N => ({
            ...N,
            isPositioned: !1
        })))
    }
    , [u]);
    const D = v.useRef(!1);
    ji( () => (D.current = !0,
    () => {
        D.current = !1
    }
    ), []),
    ji( () => {
        if (S && (C.current = S),
        E && (k.current = E),
        S && E) {
            if (M.current)
                return M.current(S, E, Q);
            Q()
        }
    }
    , [S, E, Q, M, A]);
    const G = v.useMemo( () => ({
        reference: C,
        floating: k,
        setReference: p,
        setFloating: w
    }), [p, w])
      , $ = v.useMemo( () => ({
        reference: S,
        floating: E
    }), [S, E])
      , V = v.useMemo( () => {
        const N = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return N;
        const T = ep($.floating, c.x)
          , L = ep($.floating, c.y);
        return s ? {
            ...N,
            transform: "translate(" + T + "px, " + L + "px)",
            ...lv($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: T,
            top: L
        }
    }
    , [n, s, $.floating, c.x, c.y]);
    return v.useMemo( () => ({
        ...c,
        update: Q,
        refs: G,
        elements: $,
        floatingStyles: V
    }), [c, Q, G, $, V])
}
const HS = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Zf({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Zf({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , QS = (e, t) => ({
    ...LS(e),
    options: [e, t]
})
  , qS = (e, t) => ({
    ..._S(e),
    options: [e, t]
})
  , YS = (e, t) => ({
    ...$S(e),
    options: [e, t]
})
  , GS = (e, t) => ({
    ...IS(e),
    options: [e, t]
})
  , KS = (e, t) => ({
    ...FS(e),
    options: [e, t]
})
  , XS = (e, t) => ({
    ...zS(e),
    options: [e, t]
})
  , JS = (e, t) => ({
    ...HS(e),
    options: [e, t]
});
var ZS = "Arrow"
  , uv = v.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...a} = e;
    return y.jsx(we.svg, {
        ...a,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : y.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
uv.displayName = ZS;
var eE = uv;
function tE(e) {
    const [t,n] = v.useState(void 0);
    return on( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const a = o[0];
                let i, s;
                if ("borderBoxSize"in a) {
                    const l = a.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize,
                    s = u.blockSize
                } else
                    i = e.offsetWidth,
                    s = e.offsetHeight;
                n({
                    width: i,
                    height: s
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var cv = "Popper"
  , [dv,fv] = _a(cv)
  , [LT,pv] = dv(cv)
  , hv = "PopperAnchor"
  , mv = v.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , a = pv(hv, n)
      , i = v.useRef(null)
      , s = ze(t, i);
    return v.useEffect( () => {
        a.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : y.jsx(we.div, {
        ...o,
        ref: s
    })
}
);
mv.displayName = hv;
var id = "PopperContent"
  , [nE,rE] = dv(id)
  , gv = v.forwardRef( (e, t) => {
    var Z, kr, un, Xn, cn, Pr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: a="center", alignOffset: i=0, arrowPadding: s=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: h=!1, updatePositionStrategy: f="optimized", onPlaced: b, ...g} = e
      , x = pv(id, n)
      , [m,p] = v.useState(null)
      , w = ze(t, dn => p(dn))
      , [S,E] = v.useState(null)
      , C = tE(S)
      , k = (C == null ? void 0 : C.width) ?? 0
      , R = (C == null ? void 0 : C.height) ?? 0
      , A = r + (a !== "center" ? "-" + a : "")
      , M = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , I = z.length > 0
      , Q = {
        padding: M,
        boundary: z.filter(aE),
        altBoundary: I
    }
      , {refs: D, floatingStyles: G, placement: $, isPositioned: V, middlewareData: N} = US({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...dn) => DS(...dn, {
            animationFrame: f === "always"
        }),
        elements: {
            reference: x.anchor
        },
        middleware: [QS({
            mainAxis: o + R,
            alignmentAxis: i
        }), l && qS({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? YS() : void 0,
            ...Q
        }), l && GS({
            ...Q
        }), KS({
            ...Q,
            apply: ({elements: dn, rects: Ba, availableWidth: Gs, availableHeight: Wa}) => {
                const {width: Ks, height: Oo} = Ba.reference
                  , Nr = dn.floating.style;
                Nr.setProperty("--radix-popper-available-width", `${Gs}px`),
                Nr.setProperty("--radix-popper-available-height", `${Wa}px`),
                Nr.setProperty("--radix-popper-anchor-width", `${Ks}px`),
                Nr.setProperty("--radix-popper-anchor-height", `${Oo}px`)
            }
        }), S && JS({
            element: S,
            padding: s
        }), iE({
            arrowWidth: k,
            arrowHeight: R
        }), h && XS({
            strategy: "referenceHidden",
            ...Q
        })]
    })
      , [T,L] = wv($)
      , U = Vt(b);
    on( () => {
        V && (U == null || U())
    }
    , [V, U]);
    const F = (Z = N.arrow) == null ? void 0 : Z.x
      , q = (kr = N.arrow) == null ? void 0 : kr.y
      , K = ((un = N.arrow) == null ? void 0 : un.centerOffset) !== 0
      , [ge,Ne] = v.useState();
    return on( () => {
        m && Ne(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    y.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...G,
            transform: V ? G.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ge,
            "--radix-popper-transform-origin": [(Xn = N.transformOrigin) == null ? void 0 : Xn.x, (cn = N.transformOrigin) == null ? void 0 : cn.y].join(" "),
            ...((Pr = N.hide) == null ? void 0 : Pr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: y.jsx(nE, {
            scope: n,
            placedSide: T,
            onArrowChange: E,
            arrowX: F,
            arrowY: q,
            shouldHideArrow: K,
            children: y.jsx(we.div, {
                "data-side": T,
                "data-align": L,
                ...g,
                ref: w,
                style: {
                    ...g.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
gv.displayName = id;
var vv = "PopperArrow"
  , oE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , yv = v.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , a = rE(vv, r)
      , i = oE[a.placedSide];
    return y.jsx("span", {
        ref: a.onArrowChange,
        style: {
            position: "absolute",
            left: a.arrowX,
            top: a.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[a.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[a.placedSide],
            visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: y.jsx(eE, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
yv.displayName = vv;
function aE(e) {
    return e !== null
}
var iE = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, m, p;
        const {placement: n, rects: r, middlewareData: o} = t
          , i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0
          , s = i ? 0 : e.arrowWidth
          , l = i ? 0 : e.arrowHeight
          , [u,c] = wv(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + s / 2
          , f = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let b = ""
          , g = "";
        return u === "bottom" ? (b = i ? d : `${h}px`,
        g = `${-l}px`) : u === "top" ? (b = i ? d : `${h}px`,
        g = `${r.floating.height + l}px`) : u === "right" ? (b = `${-l}px`,
        g = i ? d : `${f}px`) : u === "left" && (b = `${r.floating.width + l}px`,
        g = i ? d : `${f}px`),
        {
            data: {
                x: b,
                y: g
            }
        }
    }
});
function wv(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var sE = mv
  , lE = gv
  , uE = yv
  , [Ls,_T] = _a("Tooltip", [fv])
  , sd = fv()
  , xv = "TooltipProvider"
  , cE = 700
  , tp = "tooltip.open"
  , [dE,bv] = Ls(xv)
  , Sv = e => {
    const {__scopeTooltip: t, delayDuration: n=cE, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: a} = e
      , i = v.useRef(!0)
      , s = v.useRef(!1)
      , l = v.useRef(0);
    return v.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    y.jsx(dE, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: v.useCallback( () => {
            window.clearTimeout(l.current),
            i.current = !1
        }
        , []),
        onClose: v.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => i.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: v.useCallback(u => {
            s.current = u
        }
        , []),
        disableHoverableContent: o,
        children: a
    })
}
;
Sv.displayName = xv;
var Ev = "Tooltip"
  , [IT,_s] = Ls(Ev)
  , Hu = "TooltipTrigger"
  , fE = v.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = _s(Hu, n)
      , a = bv(Hu, n)
      , i = sd(n)
      , s = v.useRef(null)
      , l = ze(t, s, o.onTriggerChange)
      , u = v.useRef(!1)
      , c = v.useRef(!1)
      , d = v.useCallback( () => u.current = !1, []);
    return v.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    y.jsx(sE, {
        asChild: !0,
        ...i,
        children: y.jsx(we.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: ue(e.onPointerMove, h => {
                h.pointerType !== "touch" && !c.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: ue(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: ue(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: ue(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ue(e.onBlur, o.onClose),
            onClick: ue(e.onClick, o.onClose)
        })
    })
}
);
fE.displayName = Hu;
var pE = "TooltipPortal"
  , [FT,hE] = Ls(pE, {
    forceMount: void 0
})
  , bo = "TooltipContent"
  , Cv = v.forwardRef( (e, t) => {
    const n = hE(bo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...a} = e
      , i = _s(bo, e.__scopeTooltip);
    return y.jsx(ko, {
        present: r || i.open,
        children: i.disableHoverableContent ? y.jsx(kv, {
            side: o,
            ...a,
            ref: t
        }) : y.jsx(mE, {
            side: o,
            ...a,
            ref: t
        })
    })
}
)
  , mE = v.forwardRef( (e, t) => {
    const n = _s(bo, e.__scopeTooltip)
      , r = bv(bo, e.__scopeTooltip)
      , o = v.useRef(null)
      , a = ze(t, o)
      , [i,s] = v.useState(null)
      , {trigger: l, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: d} = r
      , h = v.useCallback( () => {
        s(null),
        d(!1)
    }
    , [d])
      , f = v.useCallback( (b, g) => {
        const x = b.currentTarget
          , m = {
            x: b.clientX,
            y: b.clientY
        }
          , p = xE(m, x.getBoundingClientRect())
          , w = bE(m, p)
          , S = SE(g.getBoundingClientRect())
          , E = CE([...w, ...S]);
        s(E),
        d(!0)
    }
    , [d]);
    return v.useEffect( () => () => h(), [h]),
    v.useEffect( () => {
        if (l && c) {
            const b = x => f(x, c)
              , g = x => f(x, l);
            return l.addEventListener("pointerleave", b),
            c.addEventListener("pointerleave", g),
            () => {
                l.removeEventListener("pointerleave", b),
                c.removeEventListener("pointerleave", g)
            }
        }
    }
    , [l, c, f, h]),
    v.useEffect( () => {
        if (i) {
            const b = g => {
                const x = g.target
                  , m = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , p = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x))
                  , w = !EE(m, i);
                p ? h() : w && (h(),
                u())
            }
            ;
            return document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
        }
    }
    , [l, c, i, u, h]),
    y.jsx(kv, {
        ...e,
        ref: a
    })
}
)
  , [gE,vE] = Ls(Ev, {
    isInside: !1
})
  , yE = Ex("TooltipContent")
  , kv = v.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: i, ...s} = e
      , l = _s(bo, n)
      , u = sd(n)
      , {onClose: c} = l;
    return v.useEffect( () => (document.addEventListener(tp, c),
    () => document.removeEventListener(tp, c)), [c]),
    v.useEffect( () => {
        if (l.trigger) {
            const d = h => {
                const f = h.target;
                f != null && f.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    y.jsx(Ts, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: y.jsxs(lE, {
            "data-state": l.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [y.jsx(yE, {
                children: r
            }), y.jsx(gE, {
                scope: n,
                isInside: !0,
                children: y.jsx(qx, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Cv.displayName = bo;
var Pv = "TooltipArrow"
  , wE = v.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = sd(n);
    return vE(Pv, n).isInside ? null : y.jsx(uE, {
        ...o,
        ...r,
        ref: t
    })
}
);
wE.displayName = Pv;
function xE(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , a = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, a)) {
    case a:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function bE(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function SE(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function EE(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
        const s = t[a]
          , l = t[i]
          , u = s.x
          , c = s.y
          , d = l.x
          , h = l.y;
        c > r != h > r && n < (d - u) * (r - c) / (h - c) + u && (o = !o)
    }
    return o
}
function CE(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    kE(t)
}
function kE(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const a = t[t.length - 1]
              , i = t[t.length - 2];
            if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const a = n[n.length - 1]
              , i = n[n.length - 2];
            if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var PE = Sv
  , Nv = Cv;
const NE = PE
  , TE = v.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => y.jsx(Nv, {
    ref: r,
    sideOffset: t,
    className: We("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
TE.displayName = Nv.displayName;
var Is = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Fs = typeof window > "u" || "Deno"in globalThis;
function yt() {}
function RE(e, t) {
    return typeof e == "function" ? e(t) : e
}
function OE(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function jE(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Qu(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ME(e, t) {
    return typeof e == "function" ? e(t) : e
}
function np(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: a, queryKey: i, stale: s} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== ld(i, t.options))
                return !1
        } else if (!Ca(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof s == "boolean" && t.isStale() !== s || o && o !== t.state.fetchStatus || a && !a(t))
}
function rp(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: a} = e;
    if (a) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Ea(t.options.mutationKey) !== Ea(a))
                return !1
        } else if (!Ca(t.options.mutationKey, a))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function ld(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ea)(e)
}
function Ea(e) {
    return JSON.stringify(e, (t, n) => qu(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Ca(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Ca(e[n], t[n])) : !1
}
function Tv(e, t) {
    if (e === t)
        return e;
    const n = op(e) && op(t);
    if (n || qu(e) && qu(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , a = n ? t : Object.keys(t)
          , i = a.length
          , s = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < i; c++) {
            const d = n ? c : a[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (s[d] = void 0,
            u++) : (s[d] = Tv(e[d], t[d]),
            s[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === i && u === o ? e : s
    }
    return t
}
function op(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function qu(e) {
    if (!ap(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!ap(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function ap(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function AE(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function DE(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Tv(e, t) : t
}
function LE(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function _E(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var ud = Symbol();
function Rv(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ud ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var ir, kn, oo, Bp, IE = (Bp = class extends Is {
    constructor() {
        super();
        J(this, ir);
        J(this, kn);
        J(this, oo);
        W(this, oo, t => {
            if (!Fs && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, kn) || this.setEventListener(P(this, oo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, kn)) == null || t.call(this),
        W(this, kn, void 0))
    }
    setEventListener(t) {
        var n;
        W(this, oo, t),
        (n = P(this, kn)) == null || n.call(this),
        W(this, kn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        P(this, ir) !== t && (W(this, ir, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof P(this, ir) == "boolean" ? P(this, ir) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
ir = new WeakMap,
kn = new WeakMap,
oo = new WeakMap,
Bp), Ov = new IE, ao, Pn, io, Wp, FE = (Wp = class extends Is {
    constructor() {
        super();
        J(this, ao, !0);
        J(this, Pn);
        J(this, io);
        W(this, io, t => {
            if (!Fs && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, Pn) || this.setEventListener(P(this, io))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, Pn)) == null || t.call(this),
        W(this, Pn, void 0))
    }
    setEventListener(t) {
        var n;
        W(this, io, t),
        (n = P(this, Pn)) == null || n.call(this),
        W(this, Pn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        P(this, ao) !== t && (W(this, ao, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return P(this, ao)
    }
}
,
ao = new WeakMap,
Pn = new WeakMap,
io = new WeakMap,
Wp), ls = new FE;
function zE() {
    let e, t;
    const n = new Promise( (o, a) => {
        e = o,
        t = a
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function $E(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function jv(e) {
    return (e ?? "online") === "online" ? ls.isOnline() : !0
}
var Mv = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Al(e) {
    return e instanceof Mv
}
function Av(e) {
    let t = !1, n = 0, r = !1, o;
    const a = zE()
      , i = g => {
        var x;
        r || (h(new Mv(g)),
        (x = e.abort) == null || x.call(e))
    }
      , s = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => Ov.isFocused() && (e.networkMode === "always" || ls.isOnline()) && e.canRun()
      , c = () => jv(e.networkMode) && e.canRun()
      , d = g => {
        var x;
        r || (r = !0,
        (x = e.onSuccess) == null || x.call(e, g),
        o == null || o(),
        a.resolve(g))
    }
      , h = g => {
        var x;
        r || (r = !0,
        (x = e.onError) == null || x.call(e, g),
        o == null || o(),
        a.reject(g))
    }
      , f = () => new Promise(g => {
        var x;
        o = m => {
            (r || u()) && g(m)
        }
        ,
        (x = e.onPause) == null || x.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , b = () => {
        if (r)
            return;
        let g;
        const x = n === 0 ? e.initialPromise : void 0;
        try {
            g = x ?? e.fn()
        } catch (m) {
            g = Promise.reject(m)
        }
        Promise.resolve(g).then(d).catch(m => {
            var C;
            if (r)
                return;
            const p = e.retry ?? (Fs ? 0 : 3)
              , w = e.retryDelay ?? $E
              , S = typeof w == "function" ? w(n, m) : w
              , E = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, m);
            if (t || !E) {
                h(m);
                return
            }
            n++,
            (C = e.onFail) == null || C.call(e, n, m),
            AE(S).then( () => u() ? void 0 : f()).then( () => {
                t ? h(m) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        cancel: i,
        continue: () => (o == null || o(),
        a),
        cancelRetry: s,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? b() : f().then(b),
        a)
    }
}
var BE = e => setTimeout(e, 0);
function WE() {
    let e = []
      , t = 0
      , n = s => {
        s()
    }
      , r = s => {
        s()
    }
      , o = BE;
    const a = s => {
        t ? e.push(s) : o( () => {
            n(s)
        }
        )
    }
      , i = () => {
        const s = e;
        e = [],
        s.length && o( () => {
            r( () => {
                s.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: s => {
            let l;
            t++;
            try {
                l = s()
            } finally {
                t--,
                t || i()
            }
            return l
        }
        ,
        batchCalls: s => (...l) => {
            a( () => {
                s(...l)
            }
            )
        }
        ,
        schedule: a,
        setNotifyFunction: s => {
            n = s
        }
        ,
        setBatchNotifyFunction: s => {
            r = s
        }
        ,
        setScheduler: s => {
            o = s
        }
    }
}
var Ie = WE(), sr, Vp, Dv = (Vp = class {
    constructor() {
        J(this, sr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        OE(this.gcTime) && W(this, sr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Fs ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        P(this, sr) && (clearTimeout(P(this, sr)),
        W(this, sr, void 0))
    }
}
,
sr = new WeakMap,
Vp), so, lr, ot, ur, je, Ta, cr, wt, qt, Up, VE = (Up = class extends Dv {
    constructor(t) {
        super();
        J(this, wt);
        J(this, so);
        J(this, lr);
        J(this, ot);
        J(this, ur);
        J(this, je);
        J(this, Ta);
        J(this, cr);
        W(this, cr, !1),
        W(this, Ta, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        W(this, ur, t.client),
        W(this, ot, P(this, ur).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        W(this, so, HE(this.options)),
        this.state = t.state ?? P(this, so),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = P(this, je)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...P(this, Ta),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, ot).remove(this)
    }
    setData(t, n) {
        const r = DE(this.state.data, t, this.options);
        return Te(this, wt, qt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Te(this, wt, qt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = P(this, je)) == null ? void 0 : r.promise;
        return (o = P(this, je)) == null || o.cancel(t),
        n ? n.then(yt).catch(yt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, so))
    }
    isActive() {
        return this.observers.some(t => ME(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ud || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Qu(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !jE(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, je)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, je)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        P(this, ot).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (P(this, je) && (P(this, cr) ? P(this, je).cancel({
            revert: !0
        }) : P(this, je).cancelRetry()),
        this.scheduleGc()),
        P(this, ot).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Te(this, wt, qt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, je))
                return P(this, je).continueRetry(),
                P(this, je).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const h = this.observers.find(f => f.options.queryFn);
            h && this.setOptions(h.options)
        }
        const r = new AbortController
          , o = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (W(this, cr, !0),
                r.signal)
            })
        }
          , a = () => {
            const h = Rv(this.options, n)
              , b = ( () => {
                const g = {
                    client: P(this, ur),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(g),
                g
            }
            )();
            return W(this, cr, !1),
            this.options.persister ? this.options.persister(h, b, this) : h(b)
        }
          , s = ( () => {
            const h = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: P(this, ur),
                state: this.state,
                fetchFn: a
            };
            return o(h),
            h
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(s, this),
        W(this, lr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = s.fetchOptions) == null ? void 0 : c.meta)) && Te(this, wt, qt).call(this, {
            type: "fetch",
            meta: (d = s.fetchOptions) == null ? void 0 : d.meta
        });
        const l = h => {
            var f, b, g, x;
            Al(h) && h.silent || Te(this, wt, qt).call(this, {
                type: "error",
                error: h
            }),
            Al(h) || ((b = (f = P(this, ot).config).onError) == null || b.call(f, h, this),
            (x = (g = P(this, ot).config).onSettled) == null || x.call(g, this.state.data, h, this)),
            this.scheduleGc()
        }
        ;
        return W(this, je, Av({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: h => {
                var f, b, g, x;
                if (h === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(h)
                } catch (m) {
                    l(m);
                    return
                }
                (b = (f = P(this, ot).config).onSuccess) == null || b.call(f, h, this),
                (x = (g = P(this, ot).config).onSettled) == null || x.call(g, h, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (h, f) => {
                Te(this, wt, qt).call(this, {
                    type: "failed",
                    failureCount: h,
                    error: f
                })
            }
            ,
            onPause: () => {
                Te(this, wt, qt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Te(this, wt, qt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        P(this, je).start()
    }
}
,
so = new WeakMap,
lr = new WeakMap,
ot = new WeakMap,
ur = new WeakMap,
je = new WeakMap,
Ta = new WeakMap,
cr = new WeakMap,
wt = new WeakSet,
qt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...UE(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return W(this, lr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Al(o) && o.revert && P(this, lr) ? {
                ...P(this, lr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Ie.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        P(this, ot).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Up);
function UE(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: jv(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function HE(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var jt, Hp, QE = (Hp = class extends Is {
    constructor(t={}) {
        super();
        J(this, jt);
        this.config = t,
        W(this, jt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , a = n.queryHash ?? ld(o, n);
        let i = this.get(a);
        return i || (i = new VE({
            client: t,
            queryKey: o,
            queryHash: a,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        P(this, jt).has(t.queryHash) || (P(this, jt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = P(this, jt).get(t.queryHash);
        n && (t.destroy(),
        n === t && P(this, jt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Ie.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, jt).get(t)
    }
    getAll() {
        return [...P(this, jt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => np(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => np(t, r)) : n
    }
    notify(t) {
        Ie.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ie.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ie.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
jt = new WeakMap,
Hp), Mt, Le, dr, At, wn, Qp, qE = (Qp = class extends Dv {
    constructor(t) {
        super();
        J(this, At);
        J(this, Mt);
        J(this, Le);
        J(this, dr);
        this.mutationId = t.mutationId,
        W(this, Le, t.mutationCache),
        W(this, Mt, []),
        this.state = t.state || YE(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        P(this, Mt).includes(t) || (P(this, Mt).push(t),
        this.clearGcTimeout(),
        P(this, Le).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        W(this, Mt, P(this, Mt).filter(n => n !== t)),
        this.scheduleGc(),
        P(this, Le).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        P(this, Mt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Le).remove(this))
    }
    continue() {
        var t;
        return ((t = P(this, dr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var a, i, s, l, u, c, d, h, f, b, g, x, m, p, w, S, E, C, k, R;
        const n = () => {
            Te(this, At, wn).call(this, {
                type: "continue"
            })
        }
        ;
        W(this, dr, Av({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, M) => {
                Te(this, At, wn).call(this, {
                    type: "failed",
                    failureCount: A,
                    error: M
                })
            }
            ,
            onPause: () => {
                Te(this, At, wn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Le).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !P(this, dr).canStart();
        try {
            if (r)
                n();
            else {
                Te(this, At, wn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((i = (a = P(this, Le).config).onMutate) == null ? void 0 : i.call(a, t, this));
                const M = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                M !== this.state.context && Te(this, At, wn).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: o
                })
            }
            const A = await P(this, dr).start();
            return await ((c = (u = P(this, Le).config).onSuccess) == null ? void 0 : c.call(u, A, t, this.state.context, this)),
            await ((h = (d = this.options).onSuccess) == null ? void 0 : h.call(d, A, t, this.state.context)),
            await ((b = (f = P(this, Le).config).onSettled) == null ? void 0 : b.call(f, A, null, this.state.variables, this.state.context, this)),
            await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, A, null, t, this.state.context)),
            Te(this, At, wn).call(this, {
                type: "success",
                data: A
            }),
            A
        } catch (A) {
            try {
                throw await ((p = (m = P(this, Le).config).onError) == null ? void 0 : p.call(m, A, t, this.state.context, this)),
                await ((S = (w = this.options).onError) == null ? void 0 : S.call(w, A, t, this.state.context)),
                await ((C = (E = P(this, Le).config).onSettled) == null ? void 0 : C.call(E, void 0, A, this.state.variables, this.state.context, this)),
                await ((R = (k = this.options).onSettled) == null ? void 0 : R.call(k, void 0, A, t, this.state.context)),
                A
            } finally {
                Te(this, At, wn).call(this, {
                    type: "error",
                    error: A
                })
            }
        } finally {
            P(this, Le).runNext(this)
        }
    }
}
,
Mt = new WeakMap,
Le = new WeakMap,
dr = new WeakMap,
At = new WeakSet,
wn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Ie.batch( () => {
        P(this, Mt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        P(this, Le).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Qp);
function YE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Kt, xt, Ra, qp, GE = (qp = class extends Is {
    constructor(t={}) {
        super();
        J(this, Kt);
        J(this, xt);
        J(this, Ra);
        this.config = t,
        W(this, Kt, new Set),
        W(this, xt, new Map),
        W(this, Ra, 0)
    }
    build(t, n, r) {
        const o = new qE({
            mutationCache: this,
            mutationId: ++Ua(this, Ra)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        P(this, Kt).add(t);
        const n = fi(t);
        if (typeof n == "string") {
            const r = P(this, xt).get(n);
            r ? r.push(t) : P(this, xt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (P(this, Kt).delete(t)) {
            const n = fi(t);
            if (typeof n == "string") {
                const r = P(this, xt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && P(this, xt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = fi(t);
        if (typeof n == "string") {
            const r = P(this, xt).get(n)
              , o = r == null ? void 0 : r.find(a => a.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = fi(t);
        if (typeof n == "string") {
            const o = (r = P(this, xt).get(n)) == null ? void 0 : r.find(a => a !== t && a.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Ie.batch( () => {
            P(this, Kt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            P(this, Kt).clear(),
            P(this, xt).clear()
        }
        )
    }
    getAll() {
        return Array.from(P(this, Kt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => rp(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => rp(t, n))
    }
    notify(t) {
        Ie.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ie.batch( () => Promise.all(t.map(n => n.continue().catch(yt))))
    }
}
,
Kt = new WeakMap,
xt = new WeakMap,
Ra = new WeakMap,
qp);
function fi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function ip(e) {
    return {
        onFetch: (t, n) => {
            var c, d, h, f, b;
            const r = t.options
              , o = (h = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : h.direction
              , a = ((f = t.state.data) == null ? void 0 : f.pages) || []
              , i = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let s = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let g = !1;
                const x = w => {
                    Object.defineProperty(w, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = Rv(t.options, t.fetchOptions)
                  , p = async (w, S, E) => {
                    if (g)
                        return Promise.reject();
                    if (S == null && w.pages.length)
                        return Promise.resolve(w);
                    const k = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return x(z),
                        z
                    }
                    )()
                      , R = await m(k)
                      , {maxPages: A} = t.options
                      , M = E ? _E : LE;
                    return {
                        pages: M(w.pages, R, A),
                        pageParams: M(w.pageParams, S, A)
                    }
                }
                ;
                if (o && a.length) {
                    const w = o === "backward"
                      , S = w ? KE : sp
                      , E = {
                        pages: a,
                        pageParams: i
                    }
                      , C = S(r, E);
                    s = await p(E, C, w)
                } else {
                    const w = e ?? a.length;
                    do {
                        const S = l === 0 ? i[0] ?? r.initialPageParam : sp(r, s);
                        if (l > 0 && S == null)
                            break;
                        s = await p(s, S),
                        l++
                    } while (l < w)
                }
                return s
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, x;
                return (x = (g = t.options).persister) == null ? void 0 : x.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function sp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function KE(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var pe, Nn, Tn, lo, uo, Rn, co, fo, Yp, XE = (Yp = class {
    constructor(e={}) {
        J(this, pe);
        J(this, Nn);
        J(this, Tn);
        J(this, lo);
        J(this, uo);
        J(this, Rn);
        J(this, co);
        J(this, fo);
        W(this, pe, e.queryCache || new QE),
        W(this, Nn, e.mutationCache || new GE),
        W(this, Tn, e.defaultOptions || {}),
        W(this, lo, new Map),
        W(this, uo, new Map),
        W(this, Rn, 0)
    }
    mount() {
        Ua(this, Rn)._++,
        P(this, Rn) === 1 && (W(this, co, Ov.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, pe).onFocus())
        }
        )),
        W(this, fo, ls.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, pe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Ua(this, Rn)._--,
        P(this, Rn) === 0 && ((e = P(this, co)) == null || e.call(this),
        W(this, co, void 0),
        (t = P(this, fo)) == null || t.call(this),
        W(this, fo, void 0))
    }
    isFetching(e) {
        return P(this, pe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, Nn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, pe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = P(this, pe).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Qu(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return P(this, pe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = P(this, pe).get(r.queryHash)
          , a = o == null ? void 0 : o.state.data
          , i = RE(t, a);
        if (i !== void 0)
            return P(this, pe).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Ie.batch( () => P(this, pe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, pe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, pe);
        Ie.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, pe);
        return Ie.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Ie.batch( () => P(this, pe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(yt).catch(yt)
    }
    invalidateQueries(e, t={}) {
        return Ie.batch( () => (P(this, pe).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Ie.batch( () => P(this, pe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let a = o.fetch(void 0, n);
            return n.throwOnError || (a = a.catch(yt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : a
        }
        ));
        return Promise.all(r).then(yt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, pe).build(this, t);
        return n.isStaleByTime(Qu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(yt).catch(yt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = ip(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(yt).catch(yt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = ip(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return ls.isOnline() ? P(this, Nn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, pe)
    }
    getMutationCache() {
        return P(this, Nn)
    }
    getDefaultOptions() {
        return P(this, Tn)
    }
    setDefaultOptions(e) {
        W(this, Tn, e)
    }
    setQueryDefaults(e, t) {
        P(this, lo).set(Ea(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, lo).values()]
          , n = {};
        return t.forEach(r => {
            Ca(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        P(this, uo).set(Ea(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, uo).values()]
          , n = {};
        return t.forEach(r => {
            Ca(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, Tn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = ld(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === ud && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, Tn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, pe).clear(),
        P(this, Nn).clear()
    }
}
,
pe = new WeakMap,
Nn = new WeakMap,
Tn = new WeakMap,
lo = new WeakMap,
uo = new WeakMap,
Rn = new WeakMap,
co = new WeakMap,
fo = new WeakMap,
Yp), JE = v.createContext(void 0), ZE = ({client: e, children: t}) => (v.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
y.jsx(JE.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ka() {
    return ka = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ka.apply(this, arguments)
}
var Mn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Mn || (Mn = {}));
const lp = "popstate";
function eC(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: a, search: i, hash: s} = r.location;
        return Yu("", {
            pathname: a,
            search: i,
            hash: s
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : _v(o)
    }
    return nC(t, n, null, e)
}
function ye(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Lv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function tC() {
    return Math.random().toString(36).substr(2, 8)
}
function up(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Yu(e, t, n, r) {
    return n === void 0 && (n = null),
    ka({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ro(t) : t, {
        state: n,
        key: t && t.key || r || tC()
    })
}
function _v(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ro(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function nC(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: a=!1} = r
      , i = o.history
      , s = Mn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    i.replaceState(ka({}, i.state, {
        idx: u
    }), ""));
    function c() {
        return (i.state || {
            idx: null
        }).idx
    }
    function d() {
        s = Mn.Pop;
        let x = c()
          , m = x == null ? null : x - u;
        u = x,
        l && l({
            action: s,
            location: g.location,
            delta: m
        })
    }
    function h(x, m) {
        s = Mn.Push;
        let p = Yu(g.location, x, m);
        u = c() + 1;
        let w = up(p, u)
          , S = g.createHref(p);
        try {
            i.pushState(w, "", S)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            o.location.assign(S)
        }
        a && l && l({
            action: s,
            location: g.location,
            delta: 1
        })
    }
    function f(x, m) {
        s = Mn.Replace;
        let p = Yu(g.location, x, m);
        u = c();
        let w = up(p, u)
          , S = g.createHref(p);
        i.replaceState(w, "", S),
        a && l && l({
            action: s,
            location: g.location,
            delta: 0
        })
    }
    function b(x) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , p = typeof x == "string" ? x : _v(x);
        return p = p.replace(/ $/, "%20"),
        ye(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let g = {
        get action() {
            return s
        },
        get location() {
            return e(o, i)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(lp, d),
            l = x,
            () => {
                o.removeEventListener(lp, d),
                l = null
            }
        },
        createHref(x) {
            return t(o, x)
        },
        createURL: b,
        encodeLocation(x) {
            let m = b(x);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: f,
        go(x) {
            return i.go(x)
        }
    };
    return g
}
var cp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(cp || (cp = {}));
function rC(e, t, n) {
    return n === void 0 && (n = "/"),
    oC(e, t, n, !1)
}
function oC(e, t, n, r) {
    let o = typeof t == "string" ? Ro(t) : t
      , a = zv(o.pathname || "/", n);
    if (a == null)
        return null;
    let i = Iv(e);
    aC(i);
    let s = null;
    for (let l = 0; s == null && l < i.length; ++l) {
        let u = gC(a);
        s = hC(i[l], u, r)
    }
    return s
}
function Iv(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (a, i, s) => {
        let l = {
            relativePath: s === void 0 ? a.path || "" : s,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: i,
            route: a
        };
        l.relativePath.startsWith("/") && (ye(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = hr([r, l.relativePath])
          , c = n.concat(l);
        a.children && a.children.length > 0 && (ye(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Iv(a.children, t, c, u)),
        !(a.path == null && !a.index) && t.push({
            path: u,
            score: fC(u, a.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (a, i) => {
        var s;
        if (a.path === "" || !((s = a.path) != null && s.includes("?")))
            o(a, i);
        else
            for (let l of Fv(a.path))
                o(a, i, l)
    }
    ),
    t
}
function Fv(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , a = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [a, ""] : [a];
    let i = Fv(r.join("/"))
      , s = [];
    return s.push(...i.map(l => l === "" ? a : [a, l].join("/"))),
    o && s.push(...i),
    s.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function aC(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : pC(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const iC = /^:[\w-]+$/
  , sC = 3
  , lC = 2
  , uC = 1
  , cC = 10
  , dC = -2
  , dp = e => e === "*";
function fC(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(dp) && (r += dC),
    t && (r += lC),
    n.filter(o => !dp(o)).reduce( (o, a) => o + (iC.test(a) ? sC : a === "" ? uC : cC), r)
}
function pC(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function hC(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , a = "/"
      , i = [];
    for (let s = 0; s < r.length; ++s) {
        let l = r[s]
          , u = s === r.length - 1
          , c = a === "/" ? t : t.slice(a.length) || "/"
          , d = fp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , h = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = fp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(o, d.params),
        i.push({
            params: o,
            pathname: hr([a, d.pathname]),
            pathnameBase: xC(hr([a, d.pathnameBase])),
            route: h
        }),
        d.pathnameBase !== "/" && (a = hr([a, d.pathnameBase]))
    }
    return i
}
function fp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = mC(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let a = o[0]
      , i = a.replace(/(.)\/+$/, "$1")
      , s = o.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: h, isOptional: f} = c;
            if (h === "*") {
                let g = s[d] || "";
                i = a.slice(0, a.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const b = s[d];
            return f && !b ? u[h] = void 0 : u[h] = (b || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: a,
        pathnameBase: i,
        pattern: e
    }
}
function mC(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Lv(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, s, l) => (r.push({
        paramName: s,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function gC(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Lv(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function zv(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function vC(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? Ro(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : yC(n, t) : t,
        search: bC(r),
        hash: SC(o)
    }
}
function yC(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Dl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function wC(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function $v(e, t) {
    let n = wC(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Bv(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Ro(e) : (o = ka({}, e),
    ye(!o.pathname || !o.pathname.includes("?"), Dl("?", "pathname", "search", o)),
    ye(!o.pathname || !o.pathname.includes("#"), Dl("#", "pathname", "hash", o)),
    ye(!o.search || !o.search.includes("#"), Dl("#", "search", "hash", o)));
    let a = e === "" || o.pathname === "", i = a ? "/" : o.pathname, s;
    if (i == null)
        s = n;
    else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let h = i.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                d -= 1;
            o.pathname = h.join("/")
        }
        s = d >= 0 ? t[d] : "/"
    }
    let l = vC(o, s)
      , u = i && i !== "/" && i.endsWith("/")
      , c = (a || i === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const hr = e => e.join("/").replace(/\/\/+/g, "/")
  , xC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , bC = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , SC = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function EC(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Wv = ["post", "put", "patch", "delete"];
new Set(Wv);
const CC = ["get", ...Wv];
new Set(CC);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Pa() {
    return Pa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Pa.apply(this, arguments)
}
const cd = v.createContext(null)
  , kC = v.createContext(null)
  , za = v.createContext(null)
  , zs = v.createContext(null)
  , Kn = v.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Vv = v.createContext(null);
function $a() {
    return v.useContext(zs) != null
}
function $s() {
    return $a() || ye(!1),
    v.useContext(zs).location
}
function Uv(e) {
    v.useContext(za).static || v.useLayoutEffect(e)
}
function dd() {
    let {isDataRoute: e} = v.useContext(Kn);
    return e ? zC() : PC()
}
function PC() {
    $a() || ye(!1);
    let e = v.useContext(cd)
      , {basename: t, future: n, navigator: r} = v.useContext(za)
      , {matches: o} = v.useContext(Kn)
      , {pathname: a} = $s()
      , i = JSON.stringify($v(o, n.v7_relativeSplatPath))
      , s = v.useRef(!1);
    return Uv( () => {
        s.current = !0
    }
    ),
    v.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !s.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = Bv(u, JSON.parse(i), a, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : hr([t, d.pathname])),
        (c.replace ? r.replace : r.push)(d, c.state, c)
    }, [t, r, i, a, e])
}
function NC() {
    let {matches: e} = v.useContext(Kn)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function TC(e, t) {
    return RC(e, t)
}
function RC(e, t, n, r) {
    $a() || ye(!1);
    let {navigator: o} = v.useContext(za)
      , {matches: a} = v.useContext(Kn)
      , i = a[a.length - 1]
      , s = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = $s(), c;
    if (t) {
        var d;
        let x = typeof t == "string" ? Ro(t) : t;
        l === "/" || (d = x.pathname) != null && d.startsWith(l) || ye(!1),
        c = x
    } else
        c = u;
    let h = c.pathname || "/"
      , f = h;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        f = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let b = rC(e, {
        pathname: f
    })
      , g = DC(b && b.map(x => Object.assign({}, x, {
        params: Object.assign({}, s, x.params),
        pathname: hr([l, o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? l : hr([l, o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), a, n, r);
    return t && g ? v.createElement(zs.Provider, {
        value: {
            location: Pa({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Mn.Pop
        }
    }, g) : g
}
function OC() {
    let e = FC()
      , t = EC(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? v.createElement("pre", {
        style: o
    }, n) : null, null)
}
const jC = v.createElement(OC, null);
class MC extends v.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? v.createElement(Kn.Provider, {
            value: this.props.routeContext
        }, v.createElement(Vv.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function AC(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = v.useContext(cd);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(Kn.Provider, {
        value: t
    }, r)
}
function DC(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var a;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((a = r) != null && a.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , s = (o = n) == null ? void 0 : o.errors;
    if (s != null) {
        let c = i.findIndex(d => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0);
        c >= 0 || ye(!1),
        i = i.slice(0, Math.min(i.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let d = i[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: h, errors: f} = n
                  , b = d.route.loader && h[d.route.id] === void 0 && (!f || f[d.route.id] === void 0);
                if (d.route.lazy || b) {
                    l = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (c, d, h) => {
        let f, b = !1, g = null, x = null;
        n && (f = s && d.route.id ? s[d.route.id] : void 0,
        g = d.route.errorElement || jC,
        l && (u < 0 && h === 0 ? (b = !0,
        x = null) : u === h && (b = !0,
        x = d.route.hydrateFallbackElement || null)));
        let m = t.concat(i.slice(0, h + 1))
          , p = () => {
            let w;
            return f ? w = g : b ? w = x : d.route.Component ? w = v.createElement(d.route.Component, null) : d.route.element ? w = d.route.element : w = c,
            v.createElement(AC, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: m,
                    isDataRoute: n != null
                },
                children: w
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? v.createElement(MC, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: f,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Hv = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Hv || {})
  , us = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(us || {});
function LC(e) {
    let t = v.useContext(cd);
    return t || ye(!1),
    t
}
function _C(e) {
    let t = v.useContext(kC);
    return t || ye(!1),
    t
}
function IC(e) {
    let t = v.useContext(Kn);
    return t || ye(!1),
    t
}
function Qv(e) {
    let t = IC()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || ye(!1),
    n.route.id
}
function FC() {
    var e;
    let t = v.useContext(Vv)
      , n = _C(us.UseRouteError)
      , r = Qv(us.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function zC() {
    let {router: e} = LC(Hv.UseNavigateStable)
      , t = Qv(us.UseNavigateStable)
      , n = v.useRef(!1);
    return Uv( () => {
        n.current = !0
    }
    ),
    v.useCallback(function(o, a) {
        a === void 0 && (a = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Pa({
            fromRouteId: t
        }, a)))
    }, [e, t])
}
function $C(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Gu(e) {
    let {to: t, replace: n, state: r, relative: o} = e;
    $a() || ye(!1);
    let {future: a, static: i} = v.useContext(za)
      , {matches: s} = v.useContext(Kn)
      , {pathname: l} = $s()
      , u = dd()
      , c = Bv(t, $v(s, a.v7_relativeSplatPath), l, o === "path")
      , d = JSON.stringify(c);
    return v.useEffect( () => u(JSON.parse(d), {
        replace: n,
        state: r,
        relative: o
    }), [u, d, o, n, r]),
    null
}
function Qo(e) {
    ye(!1)
}
function BC(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Mn.Pop, navigator: a, static: i=!1, future: s} = e;
    $a() && ye(!1);
    let l = t.replace(/^\/*/, "/")
      , u = v.useMemo( () => ({
        basename: l,
        navigator: a,
        static: i,
        future: Pa({
            v7_relativeSplatPath: !1
        }, s)
    }), [l, s, a, i]);
    typeof r == "string" && (r = Ro(r));
    let {pathname: c="/", search: d="", hash: h="", state: f=null, key: b="default"} = r
      , g = v.useMemo( () => {
        let x = zv(c, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: d,
                hash: h,
                state: f,
                key: b
            },
            navigationType: o
        }
    }
    , [l, c, d, h, f, b, o]);
    return g == null ? null : v.createElement(za.Provider, {
        value: u
    }, v.createElement(zs.Provider, {
        children: n,
        value: g
    }))
}
function WC(e) {
    let {children: t, location: n} = e;
    return TC(Ku(t), n)
}
new Promise( () => {}
);
function Ku(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return v.Children.forEach(e, (r, o) => {
        if (!v.isValidElement(r))
            return;
        let a = [...t, o];
        if (r.type === v.Fragment) {
            n.push.apply(n, Ku(r.props.children, a));
            return
        }
        r.type !== Qo && ye(!1),
        !r.props.index || !r.props.children || ye(!1);
        let i = {
            id: r.props.id || a.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Ku(r.props.children, a)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const VC = "6";
try {
    window.__reactRouterVersion = VC
} catch {}
const UC = "startTransition"
  , pp = nc[UC];
function HC(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , a = v.useRef();
    a.current == null && (a.current = eC({
        window: o,
        v5Compat: !0
    }));
    let i = a.current
      , [s,l] = v.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: u} = r || {}
      , c = v.useCallback(d => {
        u && pp ? pp( () => l(d)) : l(d)
    }
    , [l, u]);
    return v.useLayoutEffect( () => i.listen(c), [i, c]),
    v.useEffect( () => $C(r), [r]),
    v.createElement(BC, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: i,
        future: r
    })
}
var hp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(hp || (hp = {}));
var mp;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(mp || (mp = {}));
const QC = "/assets/slide-7-BUB93GrL.webp"
  , qC = () => {
    const e = dd()
      , [t,n] = v.useState(!1)
      , [r,o] = v.useState(!1)
      , a = () => {
        t || (n(!0),
        o(!0),
        setTimeout( () => {
            e("/produto/ar-condicionado-portatil")
        }
        , 1500))
    }
    ;
    return y.jsx("div", {
        className: "min-h-screen bg-muted/50 flex items-center justify-center p-4",
        children: y.jsxs("div", {
            className: "bg-card rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md",
            children: [y.jsx("div", {
                className: "flex justify-center mb-4",
                children: y.jsx("div", {
                    className: "w-full max-w-[200px] aspect-[4/3]",
                    children: y.jsx("img", {
                        src: QC,
                        alt: "Ar Condicionado",
                        className: "w-full h-full object-contain"
                    })
                })
            }), y.jsx("h1", {
                className: "text-xl sm:text-2xl font-bold text-foreground text-center mb-2",
                children: t ? "Verificado!" : "Verificação de Segurança"
            }), y.jsx("p", {
                className: "text-muted-foreground text-center text-sm sm:text-base mb-8",
                children: t ? "Aguarde, você está sendo redirecionado..." : "Clique no botão abaixo para acessar a oferta."
            }), y.jsxs("div", {
                className: "flex items-center gap-3 mb-6 p-4 rounded-xl bg-muted/50 border border-border",
                children: [y.jsx("button", {
                    onClick: a,
                    disabled: t,
                    className: `w-7 h-7 rounded-md flex items-center justify-center transition-all border-2 ${t ? "bg-success border-success text-success-foreground" : "bg-card border-primary/50 hover:border-primary cursor-pointer"}`,
                    children: t && y.jsx($g, {
                        className: "w-4 h-4"
                    })
                }), y.jsx("span", {
                    className: "text-sm text-foreground",
                    children: t ? "Verificado com sucesso!" : "Não sou um robô"
                })]
            }), y.jsx("button", {
                onClick: a,
                disabled: t,
                className: `w-full h-12 rounded-full font-semibold text-base transition-all duration-300 ${t ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"}`,
                children: t ? "Redirecionando..." : "Verificar"
            }), y.jsx("p", {
                className: "text-center text-xs text-muted-foreground mt-6",
                children: "Esta verificação ajuda a combater acessos automatizados."
            }), r && y.jsx("div", {
                className: "flex justify-center mt-4",
                children: y.jsxs("div", {
                    className: "flex gap-1",
                    children: [y.jsx("div", {
                        className: "w-2 h-2 bg-primary rounded-full animate-bounce",
                        style: {
                            animationDelay: "0ms"
                        }
                    }), y.jsx("div", {
                        className: "w-2 h-2 bg-primary rounded-full animate-bounce",
                        style: {
                            animationDelay: "150ms"
                        }
                    }), y.jsx("div", {
                        className: "w-2 h-2 bg-primary rounded-full animate-bounce",
                        style: {
                            animationDelay: "300ms"
                        }
                    })]
                })
            })]
        })
    })
}
  , YC = "modulepreload"
  , GC = function(e) {
    return "/" + e
}
  , gp = {}
  , Cr = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const i = document.querySelector("meta[property=csp-nonce]")
          , s = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        o = Promise.allSettled(n.map(l => {
            if (l = GC(l),
            l in gp)
                return;
            gp[l] = !0;
            const u = l.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const d = document.createElement("link");
            if (d.rel = u ? "stylesheet" : YC,
            u || (d.as = "script"),
            d.crossOrigin = "",
            d.href = l,
            s && d.setAttribute("nonce", s),
            document.head.appendChild(d),
            u)
                return new Promise( (h, f) => {
                    d.addEventListener("load", h),
                    d.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function a(i) {
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (s.payload = i,
        window.dispatchEvent(s),
        !s.defaultPrevented)
            throw i
    }
    return o.then(i => {
        for (const s of i || [])
            s.status === "rejected" && a(s.reason);
        return t().catch(a)
    }
    )
};
function dt(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function Qn(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t)
}
function vp(e, t) {
    const n = dt(e);
    return isNaN(t) ? Qn(e, NaN) : (t && n.setDate(n.getDate() + t),
    n)
}
const qv = 6048e5
  , KC = 864e5;
let XC = {};
function Bs() {
    return XC
}
function Na(e, t) {
    var s, l, u, c;
    const n = Bs()
      , r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0
      , o = dt(e)
      , a = o.getDay()
      , i = (a < r ? 7 : 0) + a - r;
    return o.setDate(o.getDate() - i),
    o.setHours(0, 0, 0, 0),
    o
}
function cs(e) {
    return Na(e, {
        weekStartsOn: 1
    })
}
function Yv(e) {
    const t = dt(e)
      , n = t.getFullYear()
      , r = Qn(e, 0);
    r.setFullYear(n + 1, 0, 4),
    r.setHours(0, 0, 0, 0);
    const o = cs(r)
      , a = Qn(e, 0);
    a.setFullYear(n, 0, 4),
    a.setHours(0, 0, 0, 0);
    const i = cs(a);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
}
function yp(e) {
    const t = dt(e);
    return t.setHours(0, 0, 0, 0),
    t
}
function wp(e) {
    const t = dt(e)
      , n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return n.setUTCFullYear(t.getFullYear()),
    +e - +n
}
function JC(e, t) {
    const n = yp(e)
      , r = yp(t)
      , o = +n - wp(n)
      , a = +r - wp(r);
    return Math.round((o - a) / KC)
}
function ZC(e) {
    const t = Yv(e)
      , n = Qn(e, 0);
    return n.setFullYear(t, 0, 4),
    n.setHours(0, 0, 0, 0),
    cs(n)
}
function e2(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function t2(e) {
    if (!e2(e) && typeof e != "number")
        return !1;
    const t = dt(e);
    return !isNaN(Number(t))
}
function n2(e) {
    const t = dt(e)
      , n = Qn(e, 0);
    return n.setFullYear(t.getFullYear(), 0, 1),
    n.setHours(0, 0, 0, 0),
    n
}
const r2 = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , o2 = (e, t, n) => {
    let r;
    const o = r2[e];
    return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function no(e) {
    return (t={}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth]
    }
}
const a2 = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , i2 = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , s2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , l2 = {
    date: no({
        formats: a2,
        defaultWidth: "full"
    }),
    time: no({
        formats: i2,
        defaultWidth: "full"
    }),
    dateTime: no({
        formats: s2,
        defaultWidth: "full"
    })
}
  , u2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , c2 = (e, t, n, r) => u2[e];
function Lt(e) {
    return (t, n) => {
        const r = n != null && n.context ? String(n.context) : "standalone";
        let o;
        if (r === "formatting" && e.formattingValues) {
            const i = e.defaultFormattingWidth || e.defaultWidth
              , s = n != null && n.width ? String(n.width) : i;
            o = e.formattingValues[s] || e.formattingValues[i]
        } else {
            const i = e.defaultWidth
              , s = n != null && n.width ? String(n.width) : e.defaultWidth;
            o = e.values[s] || e.values[i]
        }
        const a = e.argumentCallback ? e.argumentCallback(t) : t;
        return o[a]
    }
}
const d2 = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , f2 = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , p2 = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , h2 = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , m2 = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , g2 = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , v2 = (e, t) => {
    const n = Number(e)
      , r = n % 100;
    if (r > 20 || r < 10)
        switch (r % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd"
        }
    return n + "th"
}
  , y2 = {
    ordinalNumber: v2,
    era: Lt({
        values: d2,
        defaultWidth: "wide"
    }),
    quarter: Lt({
        values: f2,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: Lt({
        values: p2,
        defaultWidth: "wide"
    }),
    day: Lt({
        values: h2,
        defaultWidth: "wide"
    }),
    dayPeriod: Lt({
        values: m2,
        defaultWidth: "wide",
        formattingValues: g2,
        defaultFormattingWidth: "wide"
    })
};
function _t(e) {
    return (t, n={}) => {
        const r = n.width
          , o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth]
          , a = t.match(o);
        if (!a)
            return null;
        const i = a[0]
          , s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth]
          , l = Array.isArray(s) ? x2(s, d => d.test(i)) : w2(s, d => d.test(i));
        let u;
        u = e.valueCallback ? e.valueCallback(l) : l,
        u = n.valueCallback ? n.valueCallback(u) : u;
        const c = t.slice(i.length);
        return {
            value: u,
            rest: c
        }
    }
}
function w2(e, t) {
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
            return n
}
function x2(e, t) {
    for (let n = 0; n < e.length; n++)
        if (t(e[n]))
            return n
}
function Gv(e) {
    return (t, n={}) => {
        const r = t.match(e.matchPattern);
        if (!r)
            return null;
        const o = r[0]
          , a = t.match(e.parsePattern);
        if (!a)
            return null;
        let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
        i = n.valueCallback ? n.valueCallback(i) : i;
        const s = t.slice(o.length);
        return {
            value: i,
            rest: s
        }
    }
}
const b2 = /^(\d+)(th|st|nd|rd)?/i
  , S2 = /\d+/i
  , E2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , C2 = {
    any: [/^b/i, /^(a|c)/i]
}
  , k2 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , P2 = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , N2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , T2 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , R2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , O2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , j2 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , M2 = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , A2 = {
    ordinalNumber: Gv({
        matchPattern: b2,
        parsePattern: S2,
        valueCallback: e => parseInt(e, 10)
    }),
    era: _t({
        matchPatterns: E2,
        defaultMatchWidth: "wide",
        parsePatterns: C2,
        defaultParseWidth: "any"
    }),
    quarter: _t({
        matchPatterns: k2,
        defaultMatchWidth: "wide",
        parsePatterns: P2,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: _t({
        matchPatterns: N2,
        defaultMatchWidth: "wide",
        parsePatterns: T2,
        defaultParseWidth: "any"
    }),
    day: _t({
        matchPatterns: R2,
        defaultMatchWidth: "wide",
        parsePatterns: O2,
        defaultParseWidth: "any"
    }),
    dayPeriod: _t({
        matchPatterns: j2,
        defaultMatchWidth: "any",
        parsePatterns: M2,
        defaultParseWidth: "any"
    })
}
  , D2 = {
    code: "en-US",
    formatDistance: o2,
    formatLong: l2,
    formatRelative: c2,
    localize: y2,
    match: A2,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function L2(e) {
    const t = dt(e);
    return JC(t, n2(t)) + 1
}
function _2(e) {
    const t = dt(e)
      , n = +cs(t) - +ZC(t);
    return Math.round(n / qv) + 1
}
function Kv(e, t) {
    var c, d, h, f;
    const n = dt(e)
      , r = n.getFullYear()
      , o = Bs()
      , a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((f = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1
      , i = Qn(e, 0);
    i.setFullYear(r + 1, 0, a),
    i.setHours(0, 0, 0, 0);
    const s = Na(i, t)
      , l = Qn(e, 0);
    l.setFullYear(r, 0, a),
    l.setHours(0, 0, 0, 0);
    const u = Na(l, t);
    return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1
}
function I2(e, t) {
    var s, l, u, c;
    const n = Bs()
      , r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1
      , o = Kv(e, t)
      , a = Qn(e, 0);
    return a.setFullYear(o, 0, r),
    a.setHours(0, 0, 0, 0),
    Na(a, t)
}
function F2(e, t) {
    const n = dt(e)
      , r = +Na(n, t) - +I2(n, t);
    return Math.round(r / qv) + 1
}
function ee(e, t) {
    const n = e < 0 ? "-" : ""
      , r = Math.abs(e).toString().padStart(t, "0");
    return n + r
}
const yn = {
    y(e, t) {
        const n = e.getFullYear()
          , r = n > 0 ? n : 1 - n;
        return ee(t === "yy" ? r % 100 : r, t.length)
    },
    M(e, t) {
        const n = e.getMonth();
        return t === "M" ? String(n + 1) : ee(n + 1, 2)
    },
    d(e, t) {
        return ee(e.getDate(), t.length)
    },
    a(e, t) {
        const n = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.toUpperCase();
        case "aaa":
            return n;
        case "aaaaa":
            return n[0];
        case "aaaa":
        default:
            return n === "am" ? "a.m." : "p.m."
        }
    },
    h(e, t) {
        return ee(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
        return ee(e.getHours(), t.length)
    },
    m(e, t) {
        return ee(e.getMinutes(), t.length)
    },
    s(e, t) {
        return ee(e.getSeconds(), t.length)
    },
    S(e, t) {
        const n = t.length
          , r = e.getMilliseconds()
          , o = Math.trunc(r * Math.pow(10, n - 3));
        return ee(o, t.length)
    }
}
  , Mr = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , xp = {
    G: function(e, t, n) {
        const r = e.getFullYear() > 0 ? 1 : 0;
        switch (t) {
        case "G":
        case "GG":
        case "GGG":
            return n.era(r, {
                width: "abbreviated"
            });
        case "GGGGG":
            return n.era(r, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return n.era(r, {
                width: "wide"
            })
        }
    },
    y: function(e, t, n) {
        if (t === "yo") {
            const r = e.getFullYear()
              , o = r > 0 ? r : 1 - r;
            return n.ordinalNumber(o, {
                unit: "year"
            })
        }
        return yn.y(e, t)
    },
    Y: function(e, t, n, r) {
        const o = Kv(e, r)
          , a = o > 0 ? o : 1 - o;
        if (t === "YY") {
            const i = a % 100;
            return ee(i, 2)
        }
        return t === "Yo" ? n.ordinalNumber(a, {
            unit: "year"
        }) : ee(a, t.length)
    },
    R: function(e, t) {
        const n = Yv(e);
        return ee(n, t.length)
    },
    u: function(e, t) {
        const n = e.getFullYear();
        return ee(n, t.length)
    },
    Q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "Q":
            return String(r);
        case "QQ":
            return ee(r, 2);
        case "Qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "QQQ":
            return n.quarter(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return n.quarter(r, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "q":
            return String(r);
        case "qq":
            return ee(r, 2);
        case "qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "qqq":
            return n.quarter(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return n.quarter(r, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "M":
        case "MM":
            return yn.M(e, t);
        case "Mo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "MMM":
            return n.month(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return n.month(r, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return n.month(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "L":
            return String(r + 1);
        case "LL":
            return ee(r + 1, 2);
        case "Lo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "LLL":
            return n.month(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return n.month(r, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return n.month(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(e, t, n, r) {
        const o = F2(e, r);
        return t === "wo" ? n.ordinalNumber(o, {
            unit: "week"
        }) : ee(o, t.length)
    },
    I: function(e, t, n) {
        const r = _2(e);
        return t === "Io" ? n.ordinalNumber(r, {
            unit: "week"
        }) : ee(r, t.length)
    },
    d: function(e, t, n) {
        return t === "do" ? n.ordinalNumber(e.getDate(), {
            unit: "date"
        }) : yn.d(e, t)
    },
    D: function(e, t, n) {
        const r = L2(e);
        return t === "Do" ? n.ordinalNumber(r, {
            unit: "dayOfYear"
        }) : ee(r, t.length)
    },
    E: function(e, t, n) {
        const r = e.getDay();
        switch (t) {
        case "E":
        case "EE":
        case "EEE":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(e, t, n, r) {
        const o = e.getDay()
          , a = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "e":
            return String(a);
        case "ee":
            return ee(a, 2);
        case "eo":
            return n.ordinalNumber(a, {
                unit: "day"
            });
        case "eee":
            return n.day(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return n.day(o, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return n.day(o, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return n.day(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(e, t, n, r) {
        const o = e.getDay()
          , a = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "c":
            return String(a);
        case "cc":
            return ee(a, t.length);
        case "co":
            return n.ordinalNumber(a, {
                unit: "day"
            });
        case "ccc":
            return n.day(o, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return n.day(o, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return n.day(o, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return n.day(o, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(e, t, n) {
        const r = e.getDay()
          , o = r === 0 ? 7 : r;
        switch (t) {
        case "i":
            return String(o);
        case "ii":
            return ee(o, t.length);
        case "io":
            return n.ordinalNumber(o, {
                unit: "day"
            });
        case "iii":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(e, t, n) {
        const o = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(e, t, n) {
        const r = e.getHours();
        let o;
        switch (r === 12 ? o = Mr.noon : r === 0 ? o = Mr.midnight : o = r / 12 >= 1 ? "pm" : "am",
        t) {
        case "b":
        case "bb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(e, t, n) {
        const r = e.getHours();
        let o;
        switch (r >= 17 ? o = Mr.evening : r >= 12 ? o = Mr.afternoon : r >= 4 ? o = Mr.morning : o = Mr.night,
        t) {
        case "B":
        case "BB":
        case "BBB":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(e, t, n) {
        if (t === "ho") {
            let r = e.getHours() % 12;
            return r === 0 && (r = 12),
            n.ordinalNumber(r, {
                unit: "hour"
            })
        }
        return yn.h(e, t)
    },
    H: function(e, t, n) {
        return t === "Ho" ? n.ordinalNumber(e.getHours(), {
            unit: "hour"
        }) : yn.H(e, t)
    },
    K: function(e, t, n) {
        const r = e.getHours() % 12;
        return t === "Ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : ee(r, t.length)
    },
    k: function(e, t, n) {
        let r = e.getHours();
        return r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : ee(r, t.length)
    },
    m: function(e, t, n) {
        return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
            unit: "minute"
        }) : yn.m(e, t)
    },
    s: function(e, t, n) {
        return t === "so" ? n.ordinalNumber(e.getSeconds(), {
            unit: "second"
        }) : yn.s(e, t)
    },
    S: function(e, t) {
        return yn.S(e, t)
    },
    X: function(e, t, n) {
        const r = e.getTimezoneOffset();
        if (r === 0)
            return "Z";
        switch (t) {
        case "X":
            return Sp(r);
        case "XXXX":
        case "XX":
            return nr(r);
        case "XXXXX":
        case "XXX":
        default:
            return nr(r, ":")
        }
    },
    x: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "x":
            return Sp(r);
        case "xxxx":
        case "xx":
            return nr(r);
        case "xxxxx":
        case "xxx":
        default:
            return nr(r, ":")
        }
    },
    O: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + bp(r, ":");
        case "OOOO":
        default:
            return "GMT" + nr(r, ":")
        }
    },
    z: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + bp(r, ":");
        case "zzzz":
        default:
            return "GMT" + nr(r, ":")
        }
    },
    t: function(e, t, n) {
        const r = Math.trunc(e.getTime() / 1e3);
        return ee(r, t.length)
    },
    T: function(e, t, n) {
        const r = e.getTime();
        return ee(r, t.length)
    }
};
function bp(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , o = Math.trunc(r / 60)
      , a = r % 60;
    return a === 0 ? n + String(o) : n + String(o) + t + ee(a, 2)
}
function Sp(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + ee(Math.abs(e) / 60, 2) : nr(e, t)
}
function nr(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , o = ee(Math.trunc(r / 60), 2)
      , a = ee(r % 60, 2);
    return n + o + t + a
}
const Ep = (e, t) => {
    switch (e) {
    case "P":
        return t.date({
            width: "short"
        });
    case "PP":
        return t.date({
            width: "medium"
        });
    case "PPP":
        return t.date({
            width: "long"
        });
    case "PPPP":
    default:
        return t.date({
            width: "full"
        })
    }
}
  , Xv = (e, t) => {
    switch (e) {
    case "p":
        return t.time({
            width: "short"
        });
    case "pp":
        return t.time({
            width: "medium"
        });
    case "ppp":
        return t.time({
            width: "long"
        });
    case "pppp":
    default:
        return t.time({
            width: "full"
        })
    }
}
  , z2 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || []
      , r = n[1]
      , o = n[2];
    if (!o)
        return Ep(e, t);
    let a;
    switch (r) {
    case "P":
        a = t.dateTime({
            width: "short"
        });
        break;
    case "PP":
        a = t.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        a = t.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        a = t.dateTime({
            width: "full"
        });
        break
    }
    return a.replace("{{date}}", Ep(r, t)).replace("{{time}}", Xv(o, t))
}
  , $2 = {
    p: Xv,
    P: z2
}
  , B2 = /^D+$/
  , W2 = /^Y+$/
  , V2 = ["D", "DD", "YY", "YYYY"];
function U2(e) {
    return B2.test(e)
}
function H2(e) {
    return W2.test(e)
}
function Q2(e, t, n) {
    const r = q2(e, t, n);
    if (console.warn(r),
    V2.includes(e))
        throw new RangeError(r)
}
function q2(e, t, n) {
    const r = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const Y2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , G2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , K2 = /^'([^]*?)'?$/
  , X2 = /''/g
  , J2 = /[a-zA-Z]/;
function Cp(e, t, n) {
    var c, d, h, f, b, g, x, m;
    const r = Bs()
      , o = (n == null ? void 0 : n.locale) ?? r.locale ?? D2
      , a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1
      , i = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((m = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : m.weekStartsOn) ?? 0
      , s = dt(e);
    if (!t2(s))
        throw new RangeError("Invalid time value");
    let l = t.match(G2).map(p => {
        const w = p[0];
        if (w === "p" || w === "P") {
            const S = $2[w];
            return S(p, o.formatLong)
        }
        return p
    }
    ).join("").match(Y2).map(p => {
        if (p === "''")
            return {
                isToken: !1,
                value: "'"
            };
        const w = p[0];
        if (w === "'")
            return {
                isToken: !1,
                value: Z2(p)
            };
        if (xp[w])
            return {
                isToken: !0,
                value: p
            };
        if (w.match(J2))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + w + "`");
        return {
            isToken: !1,
            value: p
        }
    }
    );
    o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
    const u = {
        firstWeekContainsDate: a,
        weekStartsOn: i,
        locale: o
    };
    return l.map(p => {
        if (!p.isToken)
            return p.value;
        const w = p.value;
        (!(n != null && n.useAdditionalWeekYearTokens) && H2(w) || !(n != null && n.useAdditionalDayOfYearTokens) && U2(w)) && Q2(w, t, String(e));
        const S = xp[w[0]];
        return S(s, w, o.localize, u)
    }
    ).join("")
}
function Z2(e) {
    const t = e.match(K2);
    return t ? t[1].replace(X2, "'") : e
}
const ek = {
    lessThanXSeconds: {
        one: "menos de um segundo",
        other: "menos de {{count}} segundos"
    },
    xSeconds: {
        one: "1 segundo",
        other: "{{count}} segundos"
    },
    halfAMinute: "meio minuto",
    lessThanXMinutes: {
        one: "menos de um minuto",
        other: "menos de {{count}} minutos"
    },
    xMinutes: {
        one: "1 minuto",
        other: "{{count}} minutos"
    },
    aboutXHours: {
        one: "cerca de 1 hora",
        other: "cerca de {{count}} horas"
    },
    xHours: {
        one: "1 hora",
        other: "{{count}} horas"
    },
    xDays: {
        one: "1 dia",
        other: "{{count}} dias"
    },
    aboutXWeeks: {
        one: "cerca de 1 semana",
        other: "cerca de {{count}} semanas"
    },
    xWeeks: {
        one: "1 semana",
        other: "{{count}} semanas"
    },
    aboutXMonths: {
        one: "cerca de 1 mês",
        other: "cerca de {{count}} meses"
    },
    xMonths: {
        one: "1 mês",
        other: "{{count}} meses"
    },
    aboutXYears: {
        one: "cerca de 1 ano",
        other: "cerca de {{count}} anos"
    },
    xYears: {
        one: "1 ano",
        other: "{{count}} anos"
    },
    overXYears: {
        one: "mais de 1 ano",
        other: "mais de {{count}} anos"
    },
    almostXYears: {
        one: "quase 1 ano",
        other: "quase {{count}} anos"
    }
}
  , tk = (e, t, n) => {
    let r;
    const o = ek[e];
    return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", String(t)),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r
}
  , nk = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
}
  , rk = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
}
  , ok = {
    full: "{{date}} 'às' {{time}}",
    long: "{{date}} 'às' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , ak = {
    date: no({
        formats: nk,
        defaultWidth: "full"
    }),
    time: no({
        formats: rk,
        defaultWidth: "full"
    }),
    dateTime: no({
        formats: ok,
        defaultWidth: "full"
    })
}
  , ik = {
    lastWeek: e => {
        const t = e.getDay();
        return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p"
    }
    ,
    yesterday: "'ontem às' p",
    today: "'hoje às' p",
    tomorrow: "'amanhã às' p",
    nextWeek: "eeee 'às' p",
    other: "P"
}
  , sk = (e, t, n, r) => {
    const o = ik[e];
    return typeof o == "function" ? o(t) : o
}
  , lk = {
    narrow: ["AC", "DC"],
    abbreviated: ["AC", "DC"],
    wide: ["antes de cristo", "depois de cristo"]
}
  , uk = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}
  , ck = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
}
  , dk = {
    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
    abbreviated: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
    wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
}
  , fk = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    }
}
  , pk = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    }
}
  , hk = (e, t) => {
    const n = Number(e);
    return (t == null ? void 0 : t.unit) === "week" ? n + "ª" : n + "º"
}
  , mk = {
    ordinalNumber: hk,
    era: Lt({
        values: lk,
        defaultWidth: "wide"
    }),
    quarter: Lt({
        values: uk,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: Lt({
        values: ck,
        defaultWidth: "wide"
    }),
    day: Lt({
        values: dk,
        defaultWidth: "wide"
    }),
    dayPeriod: Lt({
        values: fk,
        defaultWidth: "wide",
        formattingValues: pk,
        defaultFormattingWidth: "wide"
    })
}
  , gk = /^(\d+)[ºªo]?/i
  , vk = /\d+/i
  , yk = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
    wide: /^(antes de cristo|depois de cristo)/i
}
  , wk = {
    any: [/^ac/i, /^dc/i],
    wide: [/^antes de cristo/i, /^depois de cristo/i]
}
  , xk = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º)? trimestre/i
}
  , bk = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , Sk = {
    narrow: /^[jfmajsond]/i,
    abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
    wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}
  , Ek = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
}
  , Ck = {
    narrow: /^(dom|[23456]ª?|s[aá]b)/i,
    short: /^(dom|[23456]ª?|s[aá]b)/i,
    abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
    wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}
  , kk = {
    short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}
  , Pk = {
    narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
    any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}
  , Nk = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mn|^meia[-\s]noite/i,
        noon: /^md|^meio[-\s]dia/i,
        morning: /manhã/i,
        afternoon: /tarde/i,
        evening: /tarde/i,
        night: /noite/i
    }
}
  , Tk = {
    ordinalNumber: Gv({
        matchPattern: gk,
        parsePattern: vk,
        valueCallback: e => parseInt(e, 10)
    }),
    era: _t({
        matchPatterns: yk,
        defaultMatchWidth: "wide",
        parsePatterns: wk,
        defaultParseWidth: "any"
    }),
    quarter: _t({
        matchPatterns: xk,
        defaultMatchWidth: "wide",
        parsePatterns: bk,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: _t({
        matchPatterns: Sk,
        defaultMatchWidth: "wide",
        parsePatterns: Ek,
        defaultParseWidth: "any"
    }),
    day: _t({
        matchPatterns: Ck,
        defaultMatchWidth: "wide",
        parsePatterns: kk,
        defaultParseWidth: "any"
    }),
    dayPeriod: _t({
        matchPatterns: Pk,
        defaultMatchWidth: "any",
        parsePatterns: Nk,
        defaultParseWidth: "any"
    })
}
  , kp = {
    code: "pt-BR",
    formatDistance: tk,
    formatLong: ak,
    formatRelative: sk,
    localize: mk,
    match: Tk,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
}
  , Rk = Xc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , zt = v.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, a) => {
    const i = r ? bx : "button";
    return y.jsx(i, {
        className: We(Rk({
            variant: t,
            size: n,
            className: e
        })),
        ref: a,
        ...o
    })
}
);
zt.displayName = "Button";
const Ok = ({onCartClick: e}) => y.jsxs("div", {
    className: "sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b border-border px-2 py-2 pt-[max(0.5rem,env(safe-area-inset-top))] flex items-center justify-between",
    children: [y.jsx(zt, {
        variant: "ghost",
        size: "icon",
        className: "active:scale-95 transition-transform",
        children: y.jsx(js, {
            className: "h-5 w-5"
        })
    }), y.jsxs("div", {
        className: "flex items-center gap-1",
        children: [y.jsx(zt, {
            variant: "ghost",
            size: "icon",
            className: "active:scale-95 transition-transform",
            children: y.jsx(x1, {
                className: "h-5 w-5"
            })
        }), y.jsx(zt, {
            variant: "ghost",
            size: "icon",
            onClick: e,
            className: "active:scale-95 transition-transform",
            children: y.jsx(S1, {
                className: "h-5 w-5"
            })
        }), y.jsx(zt, {
            variant: "ghost",
            size: "icon",
            className: "active:scale-95 transition-transform",
            children: y.jsx(v1, {
                className: "h-5 w-5"
            })
        })]
    })]
})
  , jk = e => new Promise( (t, n) => {
    const r = new Image;
    r.onload = () => t(),
    r.onerror = n,
    r.src = e
}
)
  , Pp = e => Promise.all(e.map(jk))
  , Mk = (e, t=3) => {
    v.useEffect( () => {
        const n = e.slice(0, t);
        Pp(n);
        const r = e.slice(t);
        if (r.length > 0) {
            const o = setTimeout( () => {
                Pp(r)
            }
            , 1e3);
            return () => clearTimeout(o)
        }
    }
    , [e, t])
}
  , Ak = v.memo( ({images: e, autoPlay: t=!1, autoPlayInterval: n=3e3}) => {
    const [r,o] = v.useState(0)
      , [a,i] = v.useState(0)
      , [s,l] = v.useState(0)
      , [u,c] = v.useState(new Set([0]));
    Mk(e, 3);
    const d = v.useCallback( () => {
        o(m => m === 0 ? e.length - 1 : m - 1)
    }
    , [e.length])
      , h = v.useCallback( () => {
        o(m => m === e.length - 1 ? 0 : m + 1)
    }
    , [e.length]);
    v.useEffect( () => {
        const m = [r, (r + 1) % e.length, r === 0 ? e.length - 1 : r - 1];
        c(p => {
            const w = new Set(p);
            return m.forEach(S => w.add(S)),
            w
        }
        )
    }
    , [r, e.length]),
    v.useEffect( () => {
        if (!t)
            return;
        const m = setInterval(h, n);
        return () => clearInterval(m)
    }
    , [t, n, h]);
    const f = v.useMemo( () => {
        const m = new Set;
        for (let p = -1; p <= 1; p++) {
            const w = (r + p + e.length) % e.length;
            m.add(w)
        }
        return m
    }
    , [r, e.length])
      , b = m => {
        i(m.targetTouches[0].clientX)
    }
      , g = m => {
        l(m.targetTouches[0].clientX)
    }
      , x = () => {
        a - s > 50 && h(),
        a - s < -50 && d()
    }
    ;
    return y.jsxs("div", {
        className: "relative w-full bg-white touch-action-pan-y",
        onTouchStart: b,
        onTouchMove: g,
        onTouchEnd: x,
        children: [y.jsx("div", {
            className: "overflow-hidden",
            children: y.jsx("div", {
                className: "flex transition-transform duration-300 ease-out will-change-transform gpu-accelerate",
                style: {
                    transform: `translateX(-${r * 100}%)`
                },
                children: e.map( (m, p) => y.jsx("div", {
                    className: "w-full flex-shrink-0 min-w-full flex items-center justify-center bg-white p-4",
                    style: {
                        height: "min(350px, 50vh)"
                    },
                    children: u.has(p) || f.has(p) || p < 3 ? y.jsx("img", {
                        src: m,
                        alt: `Produto ${p + 1}`,
                        className: "max-w-full max-h-full object-contain",
                        loading: p < 2 ? "eager" : "lazy",
                        decoding: "async",
                        fetchPriority: p === 0 || p === 1 ? "high" : "low",
                        width: "350",
                        height: "350",
                        style: {
                            contentVisibility: "auto"
                        }
                    }) : y.jsx("div", {
                        className: "w-full h-full bg-gray-100 animate-pulse rounded-lg"
                    })
                }, p))
            })
        }), y.jsx(zt, {
            variant: "ghost",
            size: "icon",
            className: "absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background",
            onClick: d,
            children: y.jsx(m1, {
                className: "h-6 w-6"
            })
        }), y.jsx(zt, {
            variant: "ghost",
            size: "icon",
            className: "absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background",
            onClick: h,
            children: y.jsx(Bg, {
                className: "h-6 w-6"
            })
        }), y.jsx("div", {
            className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
            children: e.map( (m, p) => y.jsx("button", {
                onClick: () => o(p),
                className: `w-2 h-2 rounded-full transition-all ${p === r ? "bg-primary w-4" : "bg-background/50"}`
            }, p))
        })]
    })
}
)
  , Dk = ({currentPrice: e, originalPrice: t, discount: n, couponDiscount: r, couponCode: o, countdown: a}) => {
    const [i,s] = v.useState({
        hours: 0,
        minutes: 38,
        seconds: 46
    });
    v.useEffect( () => {
        const u = setInterval( () => {
            s(c => {
                let {hours: d, minutes: h, seconds: f} = c;
                return f--,
                f < 0 && (f = 59,
                h--),
                h < 0 && (h = 59,
                d--),
                d < 0 && (d = 0,
                h = 0,
                f = 0),
                {
                    hours: d,
                    minutes: h,
                    seconds: f
                }
            }
            )
        }
        , 1e3);
        return () => clearInterval(u)
    }
    , []);
    const l = (u, c, d) => `${u.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
    return y.jsxs("div", {
        children: [y.jsx("div", {
            className: "bg-gradient-to-r from-[#ff6e36] to-[#ff8c42] text-white px-3 py-2.5",
            children: y.jsxs("div", {
                className: "flex items-center justify-between",
                children: [y.jsxs("div", {
                    className: "flex flex-col",
                    children: [y.jsxs("div", {
                        className: "flex items-center gap-2 mb-0.5",
                        children: [y.jsx("span", {
                            className: "bg-white text-[#ff2d55] text-xs font-bold px-1.5 py-0.5 rounded",
                            children: n
                        }), y.jsx("span", {
                            className: "text-white text-xl font-bold",
                            children: e
                        })]
                    }), y.jsx("span", {
                        className: "text-white/80 text-xs line-through",
                        children: t
                    })]
                }), y.jsxs("div", {
                    className: "flex flex-col items-end text-right",
                    children: [y.jsxs("div", {
                        className: "flex items-center gap-1 text-sm font-semibold",
                        children: [y.jsx(zu, {
                            className: "w-3.5 h-3.5 fill-white"
                        }), y.jsx("span", {
                            children: "Oferta Relâmpago"
                        })]
                    }), y.jsxs("span", {
                        className: "text-xs",
                        children: ["Termina em ", l(i.hours, i.minutes, i.seconds)]
                    })]
                })]
            })
        }), y.jsx("div", {
            className: "bg-white px-4 py-3 border-b border-gray-100",
            children: y.jsxs("div", {
                className: "flex items-center gap-2 text-sm",
                children: [y.jsx(g1, {
                    className: "w-4 h-4 text-gray-500"
                }), y.jsxs("span", {
                    className: "text-gray-700",
                    children: ["1x ", e]
                }), y.jsx("span", {
                    className: "text-[#e91e63] font-medium",
                    children: "sem juros"
                })]
            })
        })]
    })
}
  , Lk = ({title: e, rating: t, reviewCount: n, salesCount: r, badge: o, deliveryInfo: a, shippingNote: i}) => y.jsxs("div", {
    className: "p-4 space-y-3",
    children: [y.jsx("h1", {
        className: "text-lg font-semibold leading-tight",
        children: e
    }), y.jsxs("div", {
        className: "flex items-center gap-2 text-sm",
        children: [y.jsxs("div", {
            className: "flex items-center gap-1",
            children: [y.jsx(E1, {
                className: "h-4 w-4 fill-warning text-warning"
            }), y.jsx("span", {
                className: "font-semibold",
                children: t
            })]
        }), y.jsxs("span", {
            className: "text-muted-foreground",
            children: ["(", n, ")"]
        }), y.jsx("span", {
            className: "text-muted-foreground",
            children: "•"
        }), y.jsxs("span", {
            className: "text-muted-foreground",
            children: [r, " vendidos"]
        })]
    }), y.jsxs("div", {
        className: "space-y-1.5 text-sm",
        children: [y.jsxs("div", {
            className: "flex items-center gap-2",
            children: [y.jsx(P1, {
                className: "h-4 w-4 text-[#e91e63]"
            }), y.jsx("span", {
                className: "text-[#e91e63] font-medium",
                children: "Frete grátis"
            }), y.jsx("span", {
                className: "text-gray-600",
                children: "Receba até 6 de jan"
            })]
        }), y.jsxs("div", {
            className: "flex items-center gap-2 pl-6",
            children: [y.jsx("span", {
                className: "text-gray-500",
                children: "Taxa de envio:"
            }), y.jsx("span", {
                className: "text-gray-400 line-through",
                children: "R$ 14,60"
            })]
        })]
    })]
})
  , _k = ({onAddToCart: e, onBuy: t}) => y.jsxs("div", {
    className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50",
    children: [y.jsxs("button", {
        className: "flex flex-col items-center justify-center min-w-[45px] px-2 py-1 active:scale-95 transition-transform",
        children: [y.jsx(C1, {
            className: "h-5 w-5 text-gray-800 mb-0.5"
        }), y.jsx("span", {
            className: "text-[8px] text-gray-800",
            children: "Loja"
        })]
    }), y.jsxs("button", {
        className: "flex flex-col items-center justify-center min-w-[45px] px-2 py-1 active:scale-95 transition-transform",
        children: [y.jsx(w1, {
            className: "h-5 w-5 text-gray-800 mb-0.5"
        }), y.jsx("span", {
            className: "text-[8px] text-gray-800",
            children: "Chat"
        })]
    }), y.jsxs("button", {
        onClick: e,
        className: "flex-1 bg-gray-100 text-gray-800 font-bold text-[15px] py-3 rounded-[10px] flex flex-col items-center justify-center leading-tight active:scale-[0.98] transition-transform",
        children: [y.jsx("span", {
            children: "Adicionar"
        }), y.jsx("span", {
            children: "ao carrinho"
        })]
    }), y.jsxs("button", {
        onClick: t,
        className: "flex-1 bg-[#ff2d55] hover:bg-[#f02d53] active:bg-[#e0264a] active:scale-[0.98] text-white font-bold text-[15px] py-3 rounded-[10px] flex flex-col items-center justify-center leading-tight transition-all",
        children: [y.jsx("span", {
            children: "Comprar"
        }), y.jsx("span", {
            children: "com cupom"
        })]
    })]
});
var Ll = "focusScope.autoFocusOnMount"
  , _l = "focusScope.autoFocusOnUnmount"
  , Np = {
    bubbles: !1,
    cancelable: !0
}
  , Ik = "FocusScope"
  , Jv = v.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i} = e
      , [s,l] = v.useState(null)
      , u = Vt(o)
      , c = Vt(a)
      , d = v.useRef(null)
      , h = ze(t, g => l(g))
      , f = v.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    v.useEffect( () => {
        if (r) {
            let g = function(w) {
                if (f.paused || !s)
                    return;
                const S = w.target;
                s.contains(S) ? d.current = S : xn(d.current, {
                    select: !0
                })
            }
              , x = function(w) {
                if (f.paused || !s)
                    return;
                const S = w.relatedTarget;
                S !== null && (s.contains(S) || xn(d.current, {
                    select: !0
                }))
            }
              , m = function(w) {
                if (document.activeElement === document.body)
                    for (const E of w)
                        E.removedNodes.length > 0 && xn(s)
            };
            document.addEventListener("focusin", g),
            document.addEventListener("focusout", x);
            const p = new MutationObserver(m);
            return s && p.observe(s, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", g),
                document.removeEventListener("focusout", x),
                p.disconnect()
            }
        }
    }
    , [r, s, f.paused]),
    v.useEffect( () => {
        if (s) {
            Rp.add(f);
            const g = document.activeElement;
            if (!s.contains(g)) {
                const m = new CustomEvent(Ll,Np);
                s.addEventListener(Ll, u),
                s.dispatchEvent(m),
                m.defaultPrevented || (Fk(Vk(Zv(s)), {
                    select: !0
                }),
                document.activeElement === g && xn(s))
            }
            return () => {
                s.removeEventListener(Ll, u),
                setTimeout( () => {
                    const m = new CustomEvent(_l,Np);
                    s.addEventListener(_l, c),
                    s.dispatchEvent(m),
                    m.defaultPrevented || xn(g ?? document.body, {
                        select: !0
                    }),
                    s.removeEventListener(_l, c),
                    Rp.remove(f)
                }
                , 0)
            }
        }
    }
    , [s, u, c, f]);
    const b = v.useCallback(g => {
        if (!n && !r || f.paused)
            return;
        const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey
          , m = document.activeElement;
        if (x && m) {
            const p = g.currentTarget
              , [w,S] = zk(p);
            w && S ? !g.shiftKey && m === S ? (g.preventDefault(),
            n && xn(w, {
                select: !0
            })) : g.shiftKey && m === w && (g.preventDefault(),
            n && xn(S, {
                select: !0
            })) : m === p && g.preventDefault()
        }
    }
    , [n, r, f.paused]);
    return y.jsx(we.div, {
        tabIndex: -1,
        ...i,
        ref: h,
        onKeyDown: b
    })
}
);
Jv.displayName = Ik;
function Fk(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (xn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function zk(e) {
    const t = Zv(e)
      , n = Tp(t, e)
      , r = Tp(t.reverse(), e);
    return [n, r]
}
function Zv(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Tp(e, t) {
    for (const n of e)
        if (!$k(n, {
            upTo: t
        }))
            return n
}
function $k(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function Bk(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function xn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && Bk(e) && t && e.select()
    }
}
var Rp = Wk();
function Wk() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Op(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Op(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Op(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function Vk(e) {
    return e.filter(t => t.tagName !== "A")
}
var Il = 0;
function Uk() {
    v.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? jp()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? jp()),
        Il++,
        () => {
            Il === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            Il--
        }
    }
    , [])
}
function jp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var It = function() {
    return It = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
        }
        return t
    }
    ,
    It.apply(this, arguments)
};
function ey(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function Hk(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, a; r < o; r++)
            (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)),
            a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var Mi = "right-scroll-bar-position"
  , Ai = "width-before-scroll-bar"
  , Qk = "with-scroll-bars-hidden"
  , qk = "--removed-body-scroll-bar-size";
function Fl(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function Yk(e, t) {
    var n = v.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var Gk = typeof window < "u" ? v.useLayoutEffect : v.useEffect
  , Mp = new WeakMap;
function Kk(e, t) {
    var n = Yk(null, function(r) {
        return e.forEach(function(o) {
            return Fl(o, r)
        })
    });
    return Gk(function() {
        var r = Mp.get(n);
        if (r) {
            var o = new Set(r)
              , a = new Set(e)
              , i = n.current;
            o.forEach(function(s) {
                a.has(s) || Fl(s, null)
            }),
            a.forEach(function(s) {
                o.has(s) || Fl(s, i)
            })
        }
        Mp.set(n, e)
    }, [e]),
    n
}
function Xk(e) {
    return e
}
function Jk(e, t) {
    t === void 0 && (t = Xk);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(a) {
            var i = t(a, r);
            return n.push(i),
            function() {
                n = n.filter(function(s) {
                    return s !== i
                })
            }
        },
        assignSyncMedium: function(a) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(a)
            }
            n = {
                push: function(s) {
                    return a(s)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(a) {
            r = !0;
            var i = [];
            if (n.length) {
                var s = n;
                n = [],
                s.forEach(a),
                i = n
            }
            var l = function() {
                var c = i;
                i = [],
                c.forEach(a)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(c) {
                    i.push(c),
                    u()
                },
                filter: function(c) {
                    return i = i.filter(c),
                    n
                }
            }
        }
    };
    return o
}
function Zk(e) {
    e === void 0 && (e = {});
    var t = Jk(null);
    return t.options = It({
        async: !0,
        ssr: !1
    }, e),
    t
}
var ty = function(e) {
    var t = e.sideCar
      , n = ey(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return v.createElement(r, It({}, n))
};
ty.isSideCarExport = !0;
function eP(e, t) {
    return e.useMedium(t),
    ty
}
var ny = Zk()
  , zl = function() {}
  , Ws = v.forwardRef(function(e, t) {
    var n = v.useRef(null)
      , r = v.useState({
        onScrollCapture: zl,
        onWheelCapture: zl,
        onTouchMoveCapture: zl
    })
      , o = r[0]
      , a = r[1]
      , i = e.forwardProps
      , s = e.children
      , l = e.className
      , u = e.removeScrollBar
      , c = e.enabled
      , d = e.shards
      , h = e.sideCar
      , f = e.noRelative
      , b = e.noIsolation
      , g = e.inert
      , x = e.allowPinchZoom
      , m = e.as
      , p = m === void 0 ? "div" : m
      , w = e.gapMode
      , S = ey(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , E = h
      , C = Kk([n, t])
      , k = It(It({}, S), o);
    return v.createElement(v.Fragment, null, c && v.createElement(E, {
        sideCar: ny,
        removeScrollBar: u,
        shards: d,
        noRelative: f,
        noIsolation: b,
        inert: g,
        setCallbacks: a,
        allowPinchZoom: !!x,
        lockRef: n,
        gapMode: w
    }), i ? v.cloneElement(v.Children.only(s), It(It({}, k), {
        ref: C
    })) : v.createElement(p, It({}, k, {
        className: l,
        ref: C
    }), s))
});
Ws.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Ws.classNames = {
    fullWidth: Ai,
    zeroRight: Mi
};
var tP = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function nP() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = tP();
    return t && e.setAttribute("nonce", t),
    e
}
function rP(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function oP(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var aP = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = nP()) && (rP(t, n),
            oP(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , iP = function() {
    var e = aP();
    return function(t, n) {
        v.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , ry = function() {
    var e = iP()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , sP = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , $l = function(e) {
    return parseInt(e || "", 10) || 0
}
  , lP = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [$l(n), $l(r), $l(o)]
}
  , uP = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return sP;
    var t = lP(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , cP = ry()
  , ro = "data-scroll-locked"
  , dP = function(e, t, n, r) {
    var o = e.left
      , a = e.top
      , i = e.right
      , s = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(Qk, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(ro, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Mi, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ai, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Mi, " .").concat(Mi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ai, " .").concat(Ai, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ro, `] {
    `).concat(qk, ": ").concat(s, `px;
  }
`)
}
  , Ap = function() {
    var e = parseInt(document.body.getAttribute(ro) || "0", 10);
    return isFinite(e) ? e : 0
}
  , fP = function() {
    v.useEffect(function() {
        return document.body.setAttribute(ro, (Ap() + 1).toString()),
        function() {
            var e = Ap() - 1;
            e <= 0 ? document.body.removeAttribute(ro) : document.body.setAttribute(ro, e.toString())
        }
    }, [])
}
  , pP = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    fP();
    var a = v.useMemo(function() {
        return uP(o)
    }, [o]);
    return v.createElement(cP, {
        styles: dP(a, !t, o, n ? "" : "!important")
    })
}
  , Xu = !1;
if (typeof window < "u")
    try {
        var pi = Object.defineProperty({}, "passive", {
            get: function() {
                return Xu = !0,
                !0
            }
        });
        window.addEventListener("test", pi, pi),
        window.removeEventListener("test", pi, pi)
    } catch {
        Xu = !1
    }
var Ar = Xu ? {
    passive: !1
} : !1
  , hP = function(e) {
    return e.tagName === "TEXTAREA"
}
  , oy = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !hP(e) && n[t] === "visible")
}
  , mP = function(e) {
    return oy(e, "overflowY")
}
  , gP = function(e) {
    return oy(e, "overflowX")
}
  , Dp = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = ay(e, r);
        if (o) {
            var a = iy(e, r)
              , i = a[1]
              , s = a[2];
            if (i > s)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , vP = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , yP = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , ay = function(e, t) {
    return e === "v" ? mP(t) : gP(t)
}
  , iy = function(e, t) {
    return e === "v" ? vP(t) : yP(t)
}
  , wP = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , xP = function(e, t, n, r, o) {
    var a = wP(e, window.getComputedStyle(t).direction)
      , i = a * r
      , s = n.target
      , l = t.contains(s)
      , u = !1
      , c = i > 0
      , d = 0
      , h = 0;
    do {
        if (!s)
            break;
        var f = iy(e, s)
          , b = f[0]
          , g = f[1]
          , x = f[2]
          , m = g - x - a * b;
        (b || m) && ay(e, s) && (d += m,
        h += b);
        var p = s.parentNode;
        s = p && p.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? p.host : p
    } while (!l && s !== document.body || l && (t.contains(s) || t === s));
    return (c && (Math.abs(d) < 1 || !o) || !c && (Math.abs(h) < 1 || !o)) && (u = !0),
    u
}
  , hi = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Lp = function(e) {
    return [e.deltaX, e.deltaY]
}
  , _p = function(e) {
    return e && "current"in e ? e.current : e
}
  , bP = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , SP = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , EP = 0
  , Dr = [];
function CP(e) {
    var t = v.useRef([])
      , n = v.useRef([0, 0])
      , r = v.useRef()
      , o = v.useState(EP++)[0]
      , a = v.useState(ry)[0]
      , i = v.useRef(e);
    v.useEffect(function() {
        i.current = e
    }, [e]),
    v.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var g = Hk([e.lockRef.current], (e.shards || []).map(_p), !0).filter(Boolean);
            return g.forEach(function(x) {
                return x.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function(x) {
                    return x.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = v.useCallback(function(g, x) {
        if ("touches"in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
            return !i.current.allowPinchZoom;
        var m = hi(g), p = n.current, w = "deltaX"in g ? g.deltaX : p[0] - m[0], S = "deltaY"in g ? g.deltaY : p[1] - m[1], E, C = g.target, k = Math.abs(w) > Math.abs(S) ? "h" : "v";
        if ("touches"in g && k === "h" && C.type === "range")
            return !1;
        var R = Dp(k, C);
        if (!R)
            return !0;
        if (R ? E = k : (E = k === "v" ? "h" : "v",
        R = Dp(k, C)),
        !R)
            return !1;
        if (!r.current && "changedTouches"in g && (w || S) && (r.current = E),
        !E)
            return !0;
        var A = r.current || E;
        return xP(A, x, g, A === "h" ? w : S, !0)
    }, [])
      , l = v.useCallback(function(g) {
        var x = g;
        if (!(!Dr.length || Dr[Dr.length - 1] !== a)) {
            var m = "deltaY"in x ? Lp(x) : hi(x)
              , p = t.current.filter(function(E) {
                return E.name === x.type && (E.target === x.target || x.target === E.shadowParent) && bP(E.delta, m)
            })[0];
            if (p && p.should) {
                x.cancelable && x.preventDefault();
                return
            }
            if (!p) {
                var w = (i.current.shards || []).map(_p).filter(Boolean).filter(function(E) {
                    return E.contains(x.target)
                })
                  , S = w.length > 0 ? s(x, w[0]) : !i.current.noIsolation;
                S && x.cancelable && x.preventDefault()
            }
        }
    }, [])
      , u = v.useCallback(function(g, x, m, p) {
        var w = {
            name: g,
            delta: x,
            target: m,
            should: p,
            shadowParent: kP(m)
        };
        t.current.push(w),
        setTimeout(function() {
            t.current = t.current.filter(function(S) {
                return S !== w
            })
        }, 1)
    }, [])
      , c = v.useCallback(function(g) {
        n.current = hi(g),
        r.current = void 0
    }, [])
      , d = v.useCallback(function(g) {
        u(g.type, Lp(g), g.target, s(g, e.lockRef.current))
    }, [])
      , h = v.useCallback(function(g) {
        u(g.type, hi(g), g.target, s(g, e.lockRef.current))
    }, []);
    v.useEffect(function() {
        return Dr.push(a),
        e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: h
        }),
        document.addEventListener("wheel", l, Ar),
        document.addEventListener("touchmove", l, Ar),
        document.addEventListener("touchstart", c, Ar),
        function() {
            Dr = Dr.filter(function(g) {
                return g !== a
            }),
            document.removeEventListener("wheel", l, Ar),
            document.removeEventListener("touchmove", l, Ar),
            document.removeEventListener("touchstart", c, Ar)
        }
    }, []);
    var f = e.removeScrollBar
      , b = e.inert;
    return v.createElement(v.Fragment, null, b ? v.createElement(a, {
        styles: SP(o)
    }) : null, f ? v.createElement(pP, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function kP(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const PP = eP(ny, CP);
var sy = v.forwardRef(function(e, t) {
    return v.createElement(Ws, It({}, e, {
        ref: t,
        sideCar: PP
    }))
});
sy.classNames = Ws.classNames;
var NP = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Lr = new WeakMap
  , mi = new WeakMap
  , gi = {}
  , Bl = 0
  , ly = function(e) {
    return e && (e.host || ly(e.parentNode))
}
  , TP = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = ly(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , RP = function(e, t, n, r) {
    var o = TP(t, Array.isArray(e) ? e : [e]);
    gi[n] || (gi[n] = new WeakMap);
    var a = gi[n]
      , i = []
      , s = new Set
      , l = new Set(o)
      , u = function(d) {
        !d || s.has(d) || (s.add(d),
        u(d.parentNode))
    };
    o.forEach(u);
    var c = function(d) {
        !d || l.has(d) || Array.prototype.forEach.call(d.children, function(h) {
            if (s.has(h))
                c(h);
            else
                try {
                    var f = h.getAttribute(r)
                      , b = f !== null && f !== "false"
                      , g = (Lr.get(h) || 0) + 1
                      , x = (a.get(h) || 0) + 1;
                    Lr.set(h, g),
                    a.set(h, x),
                    i.push(h),
                    g === 1 && b && mi.set(h, !0),
                    x === 1 && h.setAttribute(n, "true"),
                    b || h.setAttribute(r, "true")
                } catch (m) {
                    console.error("aria-hidden: cannot operate on ", h, m)
                }
        })
    };
    return c(t),
    s.clear(),
    Bl++,
    function() {
        i.forEach(function(d) {
            var h = Lr.get(d) - 1
              , f = a.get(d) - 1;
            Lr.set(d, h),
            a.set(d, f),
            h || (mi.has(d) || d.removeAttribute(r),
            mi.delete(d)),
            f || d.removeAttribute(n)
        }),
        Bl--,
        Bl || (Lr = new WeakMap,
        Lr = new WeakMap,
        mi = new WeakMap,
        gi = {})
    }
}
  , OP = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = NP(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    RP(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Vs = "Dialog"
  , [uy,zT] = _a(Vs)
  , [jP,Tt] = uy(Vs)
  , cy = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i=!0} = e
      , s = v.useRef(null)
      , l = v.useRef(null)
      , [u,c] = vg({
        prop: r,
        defaultProp: o ?? !1,
        onChange: a,
        caller: Vs
    });
    return y.jsx(jP, {
        scope: t,
        triggerRef: s,
        contentRef: l,
        contentId: Ol(),
        titleId: Ol(),
        descriptionId: Ol(),
        open: u,
        onOpenChange: c,
        onOpenToggle: v.useCallback( () => c(d => !d), [c]),
        modal: i,
        children: n
    })
}
;
cy.displayName = Vs;
var dy = "DialogTrigger"
  , MP = v.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(dy, n)
      , a = ze(t, o.triggerRef);
    return y.jsx(we.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": hd(o.open),
        ...r,
        ref: a,
        onClick: ue(e.onClick, o.onOpenToggle)
    })
}
);
MP.displayName = dy;
var fd = "DialogPortal"
  , [AP,fy] = uy(fd, {
    forceMount: void 0
})
  , py = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , a = Tt(fd, t);
    return y.jsx(AP, {
        scope: t,
        forceMount: n,
        children: v.Children.map(r, i => y.jsx(ko, {
            present: n || a.open,
            children: y.jsx(qc, {
                asChild: !0,
                container: o,
                children: i
            })
        }))
    })
}
;
py.displayName = fd;
var ds = "DialogOverlay"
  , hy = v.forwardRef( (e, t) => {
    const n = fy(ds, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , a = Tt(ds, e.__scopeDialog);
    return a.modal ? y.jsx(ko, {
        present: r || a.open,
        children: y.jsx(LP, {
            ...o,
            ref: t
        })
    }) : null
}
);
hy.displayName = ds;
var DP = xa("DialogOverlay.RemoveScroll")
  , LP = v.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(ds, n);
    return y.jsx(sy, {
        as: DP,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: y.jsx(we.div, {
            "data-state": hd(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , br = "DialogContent"
  , my = v.forwardRef( (e, t) => {
    const n = fy(br, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , a = Tt(br, e.__scopeDialog);
    return y.jsx(ko, {
        present: r || a.open,
        children: a.modal ? y.jsx(_P, {
            ...o,
            ref: t
        }) : y.jsx(IP, {
            ...o,
            ref: t
        })
    })
}
);
my.displayName = br;
var _P = v.forwardRef( (e, t) => {
    const n = Tt(br, e.__scopeDialog)
      , r = v.useRef(null)
      , o = ze(t, n.contentRef, r);
    return v.useEffect( () => {
        const a = r.current;
        if (a)
            return OP(a)
    }
    , []),
    y.jsx(gy, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ue(e.onCloseAutoFocus, a => {
            var i;
            a.preventDefault(),
            (i = n.triggerRef.current) == null || i.focus()
        }
        ),
        onPointerDownOutside: ue(e.onPointerDownOutside, a => {
            const i = a.detail.originalEvent
              , s = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || s) && a.preventDefault()
        }
        ),
        onFocusOutside: ue(e.onFocusOutside, a => a.preventDefault())
    })
}
)
  , IP = v.forwardRef( (e, t) => {
    const n = Tt(br, e.__scopeDialog)
      , r = v.useRef(!1)
      , o = v.useRef(!1);
    return y.jsx(gy, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: a => {
            var i, s;
            (i = e.onCloseAutoFocus) == null || i.call(e, a),
            a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(),
            a.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: a => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, a),
            a.defaultPrevented || (r.current = !0,
            a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const i = a.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && a.preventDefault(),
            a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault()
        }
    })
}
)
  , gy = v.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i} = e
      , s = Tt(br, n)
      , l = v.useRef(null)
      , u = ze(t, l);
    return Uk(),
    y.jsxs(y.Fragment, {
        children: [y.jsx(Jv, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: y.jsx(Ts, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": hd(s.open),
                ...i,
                ref: u,
                onDismiss: () => s.onOpenChange(!1)
            })
        }), y.jsxs(y.Fragment, {
            children: [y.jsx(FP, {
                titleId: s.titleId
            }), y.jsx($P, {
                contentRef: l,
                descriptionId: s.descriptionId
            })]
        })]
    })
}
)
  , pd = "DialogTitle"
  , vy = v.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(pd, n);
    return y.jsx(we.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
vy.displayName = pd;
var yy = "DialogDescription"
  , wy = v.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(yy, n);
    return y.jsx(we.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
wy.displayName = yy;
var xy = "DialogClose"
  , by = v.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(xy, n);
    return y.jsx(we.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ue(e.onClick, () => o.onOpenChange(!1))
    })
}
);
by.displayName = xy;
function hd(e) {
    return e ? "open" : "closed"
}
var Sy = "DialogTitleWarning"
  , [$T,Ey] = wx(Sy, {
    contentName: br,
    titleName: pd,
    docsSlug: "dialog"
})
  , FP = ({titleId: e}) => {
    const t = Ey(Sy)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return v.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , zP = "DialogDescriptionWarning"
  , $P = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ey(zP).contentName}}.`;
    return v.useEffect( () => {
        var a;
        const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , BP = cy
  , WP = py
  , Cy = hy
  , ky = my
  , Py = vy
  , Ny = wy
  , VP = by;
const Ty = BP
  , UP = WP
  , Ry = v.forwardRef( ({className: e, ...t}, n) => y.jsx(Cy, {
    ref: n,
    className: We("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
Ry.displayName = Cy.displayName;
const md = v.forwardRef( ({className: e, children: t, ...n}, r) => y.jsxs(UP, {
    children: [y.jsx(Ry, {}), y.jsxs(ky, {
        ref: r,
        className: We("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, y.jsxs(VP, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [y.jsx(js, {
                className: "h-4 w-4"
            }), y.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
md.displayName = ky.displayName;
const Oy = ({className: e, ...t}) => y.jsx("div", {
    className: We("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
Oy.displayName = "DialogHeader";
const jy = v.forwardRef( ({className: e, ...t}, n) => y.jsx(Py, {
    ref: n,
    className: We("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
jy.displayName = Py.displayName;
const HP = v.forwardRef( ({className: e, ...t}, n) => y.jsx(Ny, {
    ref: n,
    className: We("text-sm text-muted-foreground", e),
    ...t
}));
HP.displayName = Ny.displayName;
const QP = Xc("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function qP({className: e, variant: t, ...n}) {
    return y.jsx("div", {
        className: We(QP({
            variant: t
        }), e),
        ...n
    })
}
const An = "/assets/slide-1-CluSy9NJ.webp"
  , My = "/assets/kit-limpeza-C_Z3MoIM.jpg"
  , Ip = {
    "ar-condicionado-portatil": {
        name: "Ar-Condicionado Split Inverter Hisense 9.000 BTUs Frio/Quente",
        mainImage: An,
        voltages: [{
            id: "110v",
            name: "110V",
            price: "R$ 81,57",
            originalPrice: "R$ 1.086,63"
        }, {
            id: "220v",
            name: "220V",
            price: "R$ 81,57",
            originalPrice: "R$ 1.086,63"
        }],
        paymentLinks: {
            "110v": "https://pay.mestredoar.online/N1nVZpYWX6mGlM6",
            "220v": "https://pay.mestredoar.online/kYL6geWMXwdZrKM"
        },
        discount: "92% OFF",
        gift: {
            image: My,
            title: "BRINDE EXCLUSIVO!",
            description: "Finalize agora e ganhe <strong>Kit de limpeza de filtros (escova + spray)</strong> de presente!"
        }
    }
}
  , YP = [An, My];
YP.forEach(e => {
    const t = document.createElement("link");
    t.rel = "preload",
    t.as = "image",
    t.href = e,
    document.head.appendChild(t)
}
);
const GP = ({open: e, onOpenChange: t, onConfirm: n, productSlug: r="ar-condicionado-portatil"}) => {
    var u;
    const o = Ip[r] || Ip["ar-condicionado-portatil"]
      , [a,i] = v.useState(((u = o.voltages[0]) == null ? void 0 : u.id) || "127v");
    v.useEffect( () => {
        var c;
        i(((c = o.voltages[0]) == null ? void 0 : c.id) || "127v")
    }
    , [r, o.voltages]);
    const s = o.voltages.find(c => c.id === a);
    v.useEffect( () => {
        const c = o.paymentLinks[a];
        if (c && e) {
            const d = document.createElement("link");
            return d.rel = "prefetch",
            d.href = c,
            d.as = "document",
            document.head.appendChild(d),
            () => {
                document.head.removeChild(d)
            }
        }
    }
    , [a, e, o.paymentLinks]);
    const l = () => {
        var b;
        const c = (s == null ? void 0 : s.name) || "127V"
          , d = (s == null ? void 0 : s.price) || ((b = o.voltages[0]) == null ? void 0 : b.price) || "R$ 61,93";
        n(o.name, c, d),
        t(!1);
        const h = o.paymentLinks[a] || Object.values(o.paymentLinks)[0]
          , f = window.location.search;
        window.location.href = h + f
    }
    ;
    return y.jsx(Ty, {
        open: e,
        onOpenChange: t,
        children: y.jsxs(md, {
            className: "max-w-md max-h-[85vh] overflow-hidden p-0 rounded-2xl sm:rounded-2xl flex flex-col",
            children: [y.jsx(Oy, {
                className: "p-2 sm:p-4 border-b bg-background z-10 flex-shrink-0",
                children: y.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [y.jsx(jy, {
                        className: "text-sm sm:text-lg",
                        children: "Selecione a voltagem"
                    }), y.jsx(zt, {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 -mr-2",
                        onClick: () => t(!1),
                        children: y.jsx(js, {
                            className: "h-4 w-4"
                        })
                    })]
                })
            }), y.jsxs("div", {
                className: "p-2 sm:p-4 space-y-3 sm:space-y-6 overflow-y-auto flex-1",
                style: {
                    paddingBottom: "70px"
                },
                children: [y.jsxs("div", {
                    className: "flex flex-col items-center gap-1",
                    children: [y.jsx("div", {
                        className: "w-24 h-24 sm:w-48 sm:h-48 flex items-center justify-center bg-white rounded-lg",
                        children: y.jsx("img", {
                            src: o.mainImage,
                            alt: o.name,
                            className: "max-w-full max-h-full object-contain transition-all duration-300",
                            loading: "eager",
                            decoding: "async"
                        })
                    }), y.jsxs("div", {
                        className: "text-center",
                        children: [y.jsx("h3", {
                            className: "font-semibold text-xs sm:text-sm mb-1",
                            children: o.name
                        }), y.jsx("div", {
                            className: "text-xl sm:text-3xl font-bold text-[#FF2D55] mb-0.5",
                            children: s == null ? void 0 : s.price
                        }), y.jsx("div", {
                            className: "text-[10px] sm:text-xs text-muted-foreground line-through mb-1",
                            children: s == null ? void 0 : s.originalPrice
                        }), y.jsx(qP, {
                            className: "text-[10px] sm:text-xs bg-red-100 text-[#FF2D55] border-red-300",
                            children: o.discount
                        })]
                    })]
                }), y.jsxs("div", {
                    children: [y.jsxs("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [y.jsx(zu, {
                            className: "h-3 w-3 sm:h-4 sm:w-4 text-yellow-500"
                        }), y.jsxs("span", {
                            className: "font-semibold text-xs sm:text-sm",
                            children: ["Voltagem: ", s == null ? void 0 : s.name]
                        })]
                    }), y.jsx("div", {
                        className: "grid grid-cols-2 gap-2 sm:gap-3",
                        children: o.voltages.map(c => y.jsxs("button", {
                            onClick: () => i(c.id),
                            className: `relative flex items-center justify-center gap-1.5 border-2 rounded-full py-2 sm:py-3 px-3 sm:px-4 transition-all ${a === c.id ? "border-[#FF2D55] bg-pink-50" : "border-gray-200 hover:border-gray-300"}`,
                            children: [a === c.id && y.jsx("div", {
                                className: "absolute -top-1.5 -right-1.5 bg-[#FF2D55] rounded-full p-0.5 z-10",
                                children: y.jsx($g, {
                                    className: "h-3 w-3 text-white"
                                })
                            }), y.jsx(zu, {
                                className: "h-3 w-3 sm:h-4 sm:w-4 text-yellow-500"
                            }), y.jsx("span", {
                                className: "font-medium text-xs sm:text-sm",
                                children: c.name
                            })]
                        }, c.id))
                    })]
                }), o.gift && y.jsxs("div", {
                    className: "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border border-blue-200 bg-blue-50",
                    children: [y.jsx("div", {
                        className: "w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center p-0.5 sm:p-1",
                        children: y.jsx("img", {
                            src: o.gift.image,
                            alt: "Brinde",
                            className: "w-full h-full object-contain",
                            loading: "eager",
                            decoding: "async",
                            fetchPriority: "high",
                            width: "56",
                            height: "56"
                        })
                    }), y.jsxs("div", {
                        className: "flex-1",
                        children: [y.jsxs("div", {
                            className: "flex items-center gap-1 text-orange-600 font-bold text-xs sm:text-sm mb-0.5",
                            children: [y.jsx(y1, {
                                className: "h-3 w-3 sm:h-4 sm:w-4"
                            }), o.gift.title]
                        }), y.jsx("p", {
                            className: "text-[10px] sm:text-xs text-gray-700",
                            dangerouslySetInnerHTML: {
                                __html: o.gift.description
                            }
                        })]
                    })]
                })]
            }), y.jsx("div", {
                className: "sticky bottom-0 left-0 right-0 w-full bg-white border-t border-border p-2 sm:p-4 flex-shrink-0",
                style: {
                    boxShadow: "0 -4px 16px rgba(0,0,0,0.08)",
                    zIndex: 999
                },
                role: "region",
                "aria-label": "Ações de compra",
                children: y.jsxs(zt, {
                    onClick: l,
                    disabled: !a,
                    className: "w-full text-white font-semibold py-3 sm:py-[14px] text-sm sm:text-lg rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-[#FF2D55] hover:bg-[#E52A4D]",
                    "aria-disabled": !a,
                    children: ["Confirmar - ", s == null ? void 0 : s.price]
                })
            })]
        })
    })
}
  , KP = ({open: e, onOpenChange: t, onBuyNow: n, onViewRecommendations: r}) => y.jsx(Ty, {
    open: e,
    onOpenChange: t,
    children: y.jsxs(md, {
        className: "max-w-md p-0 rounded-3xl overflow-hidden border-0 shadow-2xl gap-0",
        children: [y.jsxs("div", {
            className: "relative h-64 bg-white flex items-center justify-center overflow-hidden",
            children: [y.jsx("img", {
                src: An,
                alt: "Produto",
                className: "max-w-full max-h-full object-contain scale-110"
            }), y.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            }), y.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: y.jsx("div", {
                    className: "bg-destructive/95 backdrop-blur-sm p-4 rounded-full animate-pulse shadow-lg",
                    children: y.jsx(k1, {
                        className: "h-14 w-14 text-destructive-foreground"
                    })
                })
            })]
        }), y.jsxs("div", {
            className: "bg-gradient-to-br from-destructive via-destructive to-destructive/90 px-8 py-6 text-center space-y-2",
            children: [y.jsx("h2", {
                className: "text-3xl font-bold text-destructive-foreground tracking-tight",
                children: "Tempo Esgotado!"
            }), y.jsxs("p", {
                className: "text-base text-destructive-foreground/95 font-medium leading-relaxed",
                children: ["A oferta de ", y.jsx("span", {
                    className: "font-bold text-lg",
                    children: "92% OFF"
                }), " irá sair do ar em poucos minutos!"]
            })]
        }), y.jsx("div", {
            className: "bg-background p-6 space-y-3",
            children: y.jsx(zt, {
                onClick: n,
                size: "lg",
                className: "w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]",
                children: "Comprar Agora"
            })
        })]
    })
})
  , XP = () => y.jsxs("div", {
    className: "bg-[#FFF9F0] p-4 relative",
    children: [y.jsxs("div", {
        className: "flex items-center gap-2 mb-3",
        children: [y.jsx(b1, {
            className: "w-4 h-4 text-[#8B5A2B]"
        }), y.jsx("span", {
            className: "text-xs font-semibold text-[#8B5A2B]",
            children: "Proteção do cliente"
        })]
    }), y.jsxs("div", {
        className: "grid grid-cols-2 gap-y-2.5 gap-x-4",
        children: [y.jsxs("div", {
            className: "flex items-center gap-1.5 text-xs text-gray-700",
            children: [y.jsx("span", {
                className: "text-[#8B5A2B] font-bold",
                children: "✓"
            }), y.jsx("span", {
                children: "Devolução gratuita"
            })]
        }), y.jsxs("div", {
            className: "flex items-center gap-1.5 text-xs text-gray-700",
            children: [y.jsx("span", {
                className: "text-[#8B5A2B] font-bold",
                children: "✓"
            }), y.jsx("span", {
                children: "Cupom por perda ou dano"
            })]
        }), y.jsxs("div", {
            className: "flex items-center gap-1.5 text-xs text-gray-700",
            children: [y.jsx("span", {
                className: "text-[#8B5A2B] font-bold",
                children: "✓"
            }), y.jsx("span", {
                children: "Pagamento seguro"
            })]
        }), y.jsxs("div", {
            className: "flex items-center gap-1.5 text-xs text-gray-700",
            children: [y.jsx("span", {
                className: "text-[#8B5A2B] font-bold",
                children: "✓"
            }), y.jsx("span", {
                children: "Cupom por atraso na coleta"
            })]
        })]
    }), y.jsx(Bg, {
        className: "w-4 h-4 text-gray-400 absolute right-4 top-4"
    })]
})
  , Fp = {
    "ar-condicionado-portatil": {
        label: "Voltagem",
        options: [{
            id: "220v",
            name: "220v",
            image: An
        }, {
            id: "110v",
            name: "110v",
            image: An
        }]
    },
    default: {
        label: "Padrão",
        options: [{
            id: "220v",
            name: "220v",
            image: An
        }, {
            id: "110v",
            name: "110v",
            image: An
        }]
    }
}
  , JP = ({selectedPattern: e="220v", onPatternChange: t, onOpenModal: n, productSlug: r="ar-condicionado-portatil"}) => {
    const o = Fp[r] || Fp.default
      , a = i => {
        t == null || t(i),
        n == null || n()
    }
    ;
    return y.jsxs("div", {
        className: "bg-white px-4 py-3",
        children: [y.jsx("div", {
            className: "text-sm font-medium text-gray-800 mb-3",
            children: o.label
        }), y.jsx("div", {
            className: "flex gap-3",
            children: o.options.map(i => y.jsxs("button", {
                onClick: () => a(i.name),
                className: We("flex flex-col items-center gap-1 p-2 rounded-lg transition-all", e === i.name ? "ring-2 ring-[#e91e63]" : "hover:bg-gray-50"),
                children: [y.jsx("div", {
                    className: "w-16 h-16 flex items-center justify-center bg-white",
                    children: y.jsx("img", {
                        src: i.image,
                        alt: i.name,
                        className: "max-w-full max-h-full object-contain"
                    })
                }), y.jsx("span", {
                    className: "text-xs text-gray-700",
                    children: i.name
                })]
            }, i.id))
        })]
    })
}
  , ZP = "/assets/slide-3-DRpx5hRa.webp"
  , eN = "/assets/flip7-new-DQIPGENi.webp"
  , tN = "/assets/partybox-120-new-FH2zOn4S.png"
  , nN = "/assets/partybox-encore-PyXzNH8U.webp"
  , zp = "/assets/boombox3-DNxidueA.webp"
  , rN = "/assets/boombox4-camo-new-C2P38UYn.png"
  , $p = "/assets/partybox-club-BSS53Rdb.webp"
  , oN = "/assets/slide-1-QDF2IlVQ.webp"
  , aN = "/assets/slide-2-BZhaxzxc.webp"
  , iN = "/assets/slide-3-DRpx5hRa.webp"
  , sN = "/assets/cor-preta-CUpfRjRJ.webp"
  , lN = "/assets/cor-vermelha-lhWfcMAF.webp"
  , uN = "/assets/cor-vermelha-2-DJkluEn8.webp"
  , cN = "/assets/review-1-cXh5xEmN.webp"
  , dN = "/assets/review-2-BzfGOYjk.webp"
  , fN = "/assets/review-3-QJWpQPzp.webp"
  , pN = "/assets/review-4-DGqWG5ea.webp"
  , hN = "/assets/review-5-DdYXKRnG.webp"
  , mN = "/assets/review-6-DVA9lrln.webp"
  , gN = "/assets/review-7-ih-LoaBi.webp"
  , vN = "/assets/slide-6-BbUgR7YS.webp"
  , yN = "/assets/slide-7-B9Rv7UZj.webp"
  , wN = "/assets/slide-8-BkCfv2oV.webp"
  , xN = "/assets/slide-9-Cp5xdAlF.webp"
  , bN = "/assets/review-1-B3JYOSho.webp"
  , SN = "/assets/review-2-DS4UGNE0.webp"
  , EN = "/assets/review-3-CNVRXHXa.webp"
  , CN = "/assets/review-4-DmyUQndr.webp"
  , kN = "/assets/review-5-DcCWb1ul.webp"
  , PN = "/assets/slide-1-9MGIsVyQ.webp"
  , NN = "/assets/slide-2-H7U3ISJ6.webp"
  , TN = "/assets/slide-3-DDqyqyLa.webp"
  , RN = "/assets/slide-4-zwFOWpHi.webp"
  , ON = "/assets/review-1-wB_o0nmr.webp"
  , jN = "/assets/review-2-BaPIZnIQ.webp"
  , MN = "/assets/review-3-DR4z5RMy.webp"
  , AN = "/assets/review-4-C9USQH1M.webp"
  , DN = "/assets/review-5-BSXlt6fR.webp"
  , LN = "/assets/review-6-B9zDCSOv.webp"
  , _N = "/assets/slide-1-1Tmg0Z1E.webp"
  , IN = "/assets/slide-2-3oIJvr8M.webp"
  , FN = "/assets/slide-3-B30XFAwK.webp"
  , zN = "/assets/slide-4-CxVmmcSZ.webp"
  , $N = "/assets/review-1-COSqg80Q.webp"
  , BN = "/assets/review-2-CNiT0Jtx.webp"
  , WN = "/assets/review-3-CTgajiXJ.webp"
  , VN = "/assets/review-4-Cq2dunlb.webp"
  , UN = "/assets/review-5-fSkNbgbP.webp"
  , HN = "/assets/review-6-CL59CTjO.webp"
  , QN = "/assets/slide-3-CU3aHSDB.webp"
  , qN = "/assets/slide-4-BHMV5R-x.webp"
  , YN = "/assets/slide-5-BF64-V-Q.webp"
  , GN = "/assets/slide-6-BBhTrdZX.webp"
  , KN = "/assets/slide-7-BUB93GrL.webp"
  , XN = "/assets/review-1-m5_r5c-Z.webp"
  , JN = "/assets/review-2-C9nNbUmk.webp"
  , ZN = "/assets/review-3-C-w-CY5u.webp"
  , eT = "/assets/review-4-DIpGo-Sq.webp"
  , tT = "/assets/review-5-Z6n3j2Q3.webp"
  , nT = "/assets/review-6-CnlnVKQ9.webp"
  , rT = "/assets/review-7-JAvEW8tf.webp"
  , oT = "/assets/review-8-BKFFlqqr.webp"
  , aT = "/assets/avatar-1-Cxmj3x52.jpg"
  , iT = "/assets/avatar-2-0hMjYGkm.jpg"
  , sT = "/assets/avatar-3-B2gkm1KG.jpg"
  , lT = "/assets/avatar-4-B5PwZ94B.jpg"
  , uT = "/assets/avatar-5-IoNpAlPH.jpg"
  , cT = "/assets/avatar-6-CU-JvZ4p.jpg"
  , dT = "/assets/avatar-7-C9oPFmzq.jpg"
  , fT = "/assets/avatar-8-DT_dFkZR.jpg"
  , Us = "/assets/carlos-avatar-kcdP96L9.jpg"
  , Hs = "/assets/ana-avatar-BGb8pIa6.jpg"
  , Qs = "/assets/ricardo-avatar-CbpJrmeY.jpg"
  , qs = "/assets/juliana-avatar-DjWUHd64.jpg"
  , Ys = "/assets/fernando-avatar-DL9tqoIN.jpg"
  , Wl = [{
    author: "Marcos L.",
    avatar: fT,
    rating: 5,
    date: "2025-01-02 14:30",
    variation: "110V",
    text: "Excelente ar-condicionado! Instalado no quarto e gela muito rápido. O design é bonito e combina com a decoração. Super silencioso, dorme tranquilo!",
    images: [XN],
    helpful: 234
}, {
    author: "Fernanda C.",
    avatar: cT,
    rating: 5,
    date: "2025-01-02 12:15",
    variation: "220V",
    text: "Produto de qualidade! Chegou muito bem embalado e a instalação foi tranquila. Funciona perfeitamente, tanto no frio quanto no quente. Recomendo!",
    images: [JN],
    helpful: 189
}, {
    author: "Roberto S.",
    avatar: dT,
    rating: 5,
    date: "2025-01-02 09:45",
    variation: "110V",
    text: "Chegou antes do prazo! Unidade interna e externa vieram bem protegidas. Qualidade Hisense é top, já tinha outro dessa marca e não decepciona.",
    images: [ZN],
    helpful: 156
}, {
    author: "Juliana M.",
    avatar: uT,
    rating: 5,
    date: "2025-01-01 22:10",
    variation: "220V",
    text: "Comprei dois splits e estou muito satisfeita! Entrega perfeita, tudo lacrado e original. Já mandei instalar e funcionam perfeitamente!",
    images: [eT],
    helpful: 98
}, {
    author: "Pedro A.",
    avatar: lT,
    rating: 5,
    date: "2025-01-01 18:30",
    variation: "110V",
    text: "Selo Procel A, muito econômico! O consumo na conta de luz diminuiu comparado ao antigo. A etiqueta mostra tudo certinho, confiável demais!",
    images: [tT],
    helpful: 142
}, {
    author: "Carolina T.",
    avatar: iT,
    rating: 5,
    date: "2024-12-31 10:29",
    variation: "110V",
    text: "Lindo demais! Design moderno e elegante, combina com qualquer ambiente. Garantia de 10 anos no compressor, isso mostra a qualidade!",
    images: [nT],
    helpful: 87
}, {
    author: "Ricardo F.",
    avatar: sT,
    rating: 5,
    date: "2024-12-30 10:35",
    variation: "220V",
    text: "Instalei na sala e está funcionando perfeitamente! Gela muito bem e é super silencioso. A tecnologia inverter faz toda a diferença no consumo.",
    images: [rT],
    helpful: 76
}, {
    author: "Amanda O.",
    avatar: aT,
    rating: 5,
    date: "2024-12-29 15:28",
    variation: "110V",
    text: "Produto excelente! Ar bem gelado e potente. A parede ficou linda com ele instalado. Super recomendo a compra, vale cada centavo!",
    images: [oT],
    helpful: 54
}]
  , pT = [{
    author: "Marcos L.",
    avatar: Us,
    rating: 5,
    date: "há 30 minutos",
    text: "Que caixinha INCRÍVEL! Compacta mas o som é muito bom pra uma caixa tão pequena. Perfeita pra levar no dia a dia, cabe no bolso! O Bluetooth conecta rapidinho. Super recomendo! 🔊",
    images: [cN],
    helpful: 187
}, {
    author: "Bianca R.",
    avatar: Hs,
    rating: 5,
    date: "há 2 horas",
    text: "Amei! Peguei a vermelha e ficou muito bonita. O som surpreende pelo tamanho, uso pra ouvir música no banheiro e no quarto. Bateria dura bem! Vale muito a pena pelo preço.",
    images: [dN],
    helpful: 156
}, {
    author: "Lucas M.",
    avatar: Qs,
    rating: 5,
    date: "há 4 horas",
    text: "Comprei pra minha filha e ela adorou! Vermelha linda, som muito bom. Conecta fácil no celular e a bateria dura bastante. Chegou super bem embalado!",
    images: [fN, pN],
    helpful: 134
}, {
    author: "Pedro H.",
    avatar: Ys,
    rating: 5,
    date: "há 6 horas",
    text: "Peguei a preta e é muito elegante! Tamanho perfeito pra levar na mochila. O grave surpreende pelo tamanho da caixinha. JBL nunca decepciona! 👏",
    images: [hN, mN, gN],
    helpful: 98
}, {
    author: "Amanda S.",
    avatar: qs,
    rating: 4,
    date: "há 10 horas",
    text: "Muito boa pro preço! Claro que não é pra festa grande, mas pro uso pessoal é perfeita. Uso no escritório e em casa. Recomendo!",
    helpful: 112
}]
  , hT = [{
    author: "Rafael C.",
    avatar: Us,
    rating: 5,
    date: "há 20 minutos",
    text: "Que CAIXA! O som 360° é impressionante, toca pra todo lado igual! Peguei a preta e é muito elegante. Bateria dura o dia todo tranquilo. Melhor compra do ano! 🔥",
    images: [bN, SN],
    helpful: 245
}, {
    author: "Camila T.",
    avatar: Hs,
    rating: 5,
    date: "há 1 hora",
    text: "Amei demais! Levei pra praia e não deu problema nenhum, à prova d'água de verdade! O som é potente e o grave é incrível pro tamanho dela. Super recomendo!",
    images: [EN],
    helpful: 198
}, {
    author: "Bruno S.",
    avatar: Qs,
    rating: 5,
    date: "há 3 horas",
    text: "Chegou super rápido e bem embalado! O unboxing foi muito bom, veio com cabo USB-C e tudo certinho. Já testei o PartyBoost com a do meu amigo, ficou ANIMAL!",
    images: [CN, kN],
    helpful: 176
}, {
    author: "Larissa M.",
    avatar: qs,
    rating: 5,
    date: "há 5 horas",
    text: "Peguei a azul e é LINDA! O som é muito claro e os graves são potentes. Perfeita pra levar em qualquer lugar. Bluetooth conecta rapidinho!",
    helpful: 134
}, {
    author: "Diego R.",
    avatar: Ys,
    rating: 4,
    date: "há 8 horas",
    text: "Som excelente! Só tirei uma estrela porque queria mais opções de cor. Mas a qualidade é impecável, JBL não decepciona nunca!",
    helpful: 89
}]
  , mT = [{
    author: "Gustavo S.",
    avatar: Us,
    rating: 5,
    date: "há 25 minutos",
    text: "MONSTRO! Essa caixa é um absurdo de potente! As luzes LED são LINDAS, sincronizam perfeito com a música. Usei no churrasco aqui de casa e o pessoal pirou! 🔥",
    images: [ON, jN],
    helpful: 287
}, {
    author: "Fernanda M.",
    avatar: Hs,
    rating: 5,
    date: "há 1 hora",
    text: "Comprei pro aniversário do meu filho e foi sucesso TOTAL! O show de luzes deixou a festa incrível. Som potente demais, os vizinhos até vieram reclamar haha. Super recomendo!",
    images: [MN],
    helpful: 198
}, {
    author: "Roberto C.",
    avatar: Qs,
    rating: 5,
    date: "há 3 horas",
    text: "A bateria dura a festa toda! Levei pra um evento e ficou ligada 10 horas direto. O grave é absurdo, treme tudo! Melhor investimento que fiz.",
    images: [AN, DN],
    helpful: 176
}, {
    author: "Carla T.",
    avatar: qs,
    rating: 5,
    date: "há 5 horas",
    text: "Chegou super bem embalado! Lacrado, original, com nota fiscal. O som enche a casa toda. As luzes são um show à parte! Amei demais!",
    images: [LN],
    helpful: 145
}, {
    author: "Thiago R.",
    avatar: Ys,
    rating: 4,
    date: "há 7 horas",
    text: "Caixa excelente! Só achei um pouco pesada pra carregar sozinho, mas o som compensa tudo. Grave muito potente, perfeita pra festas!",
    helpful: 98
}]
  , gT = [{
    author: "Felipe M.",
    avatar: Us,
    rating: 5,
    date: "há 15 minutos",
    text: "Os microfones sem fio são SENSACIONAIS! Fizemos karaokê a noite toda e a bateria aguentou firme. O show de luzes deixou a festa INCRÍVEL! 🎤🔥",
    images: [$N, BN],
    helpful: 312
}, {
    author: "Patricia A.",
    avatar: Hs,
    rating: 5,
    date: "há 1 hora",
    text: "Comprei pra usar em festas de aniversário e foi a melhor compra! Os 2 microfones são perfeitos pra duetos. Som potente e as luzes são lindas demais!",
    images: [WN],
    helpful: 245
}, {
    author: "Rodrigo L.",
    avatar: Qs,
    rating: 5,
    date: "há 3 horas",
    text: "Chegou super bem embalado! Já testei o karaokê e os efeitos de voz são muito bons. O eco e reverb deixam a voz profissional. Recomendo muito!",
    images: [VN, UN],
    helpful: 189
}, {
    author: "Mariana S.",
    avatar: qs,
    rating: 5,
    date: "há 5 horas",
    text: "As luzes LED são um show à parte! Sincronizam perfeitamente com a música. Perfeita pra festas em casa, todo mundo adora fazer karaokê!",
    images: [HN],
    helpful: 156
}, {
    author: "Eduardo P.",
    avatar: Ys,
    rating: 4,
    date: "há 8 horas",
    text: "Som muito bom pro tamanho! Os microfones funcionam perfeitamente. Só queria que a bateria durasse um pouco mais, mas no geral é excelente!",
    helpful: 112
}]
  , vT = [{
    slug: "ar-condicionado-portatil",
    name: "Ar-Condicionado Split Inverter Hisense 9.000 BTUs",
    shortName: "Hisense 9000 BTUs",
    catalogImage: rN,
    carouselImages: [An, QN, qN, YN, GN, KN],
    currentPrice: "R$ 81,57",
    originalPrice: "R$ 1.086,63",
    discount: "-92%",
    rating: 5,
    reviewCount: 22,
    salesCount: 1641,
    badge: "OFERTA RELÂMPAGO",
    title: "Ar-Condicionado Split Inverter Hisense 9.000 BTUs Frio/Quente | Silencioso, Econômico, Fácil Instalação e Ligação Via Tomada",
    description: `• Múltiplas finalidades: Resfriamento no verão e aquecimento no inverno, ideal para uso doméstico
• Economize espaço: Design de instalação suspensa, economizando espaço no chão
• Proteção contra superaquecimento: Feito de materiais ABS de alta qualidade com boa durabilidade
• Controle fácil: Painel intuitivo permite ajustes fáceis de temperatura
• Temporizador: Função liga/desliga programada para controles convenientes
• Versátil: Perfeito para escritório, sala de estar ou quarto`,
    technicalSpecs: [{
        label: "Potência",
        value: "1800W"
    }, {
        label: "Voltagem",
        value: "110V / 220V"
    }, {
        label: "Área de Cobertura",
        value: "Até 30m²"
    }, {
        label: "Material",
        value: "ABS de alta qualidade"
    }, {
        label: "Funções",
        value: "Resfriamento e Aquecimento"
    }, {
        label: "Controle",
        value: "Painel digital com temporizador"
    }],
    features: [{
        icon: "check",
        text: "Múltiplas finalidades: Resfriamento no verão e aquecimento no inverno, ideal para uso doméstico"
    }, {
        icon: "check",
        text: "Economize espaço: Design de instalação suspensa, economizando espaço no chão"
    }, {
        icon: "check",
        text: "Proteção contra superaquecimento: Feito de materiais ABS de alta qualidade com boa durabilidade"
    }, {
        icon: "check",
        text: "Controle fácil: Painel intuitivo permite ajustes fáceis de temperatura"
    }, {
        icon: "check",
        text: "Temporizador: Função liga/desliga programada para controles convenientes"
    }, {
        icon: "check",
        text: "Versátil: Perfeito para escritório, sala de estar ou quarto"
    }],
    includedItems: [{
        icon: "check",
        text: "Ar Condicionado Portátil Split Max"
    }, {
        icon: "check",
        text: "Controle Remoto"
    }, {
        icon: "check",
        text: "Kit de Instalação"
    }, {
        icon: "check",
        text: "Manual de Instruções"
    }, {
        icon: "check",
        text: "Nota Fiscal"
    }],
    reviews: Wl
}, {
    slug: "go-essential",
    name: "Caixa De Som Bluetooth Portátil Go Es...",
    shortName: "JBL Go Essential",
    catalogImage: ZP,
    carouselImages: [oN, aN, iN, sN, lN, uN],
    currentPrice: "R$ 33,20",
    originalPrice: "R$ 163,35",
    discount: "92% OFF",
    rating: 4.7,
    reviewCount: 892,
    salesCount: 789,
    badge: "OFERTA RELÂMPAGO",
    title: "Caixa de Som Bluetooth JBL Go Essential – Ultra Portátil, Som Potente e Compacta",
    description: "JBL Go Essential - A caixa de som mais compacta e portátil da JBL. Perfeita para levar a qualquer lugar com som potente em um corpo ultra leve. Bateria de longa duração e design resistente.",
    technicalSpecs: [{
        label: "Potência",
        value: "3.1W RMS"
    }, {
        label: "Bateria",
        value: "Até 5 horas de reprodução"
    }, {
        label: "Proteção",
        value: "IPX7 (à prova d'água)"
    }, {
        label: "Bluetooth",
        value: "4.2"
    }, {
        label: "Dimensões",
        value: "8.6 x 7.1 x 3.2 cm"
    }, {
        label: "Peso",
        value: "180g"
    }],
    features: [{
        icon: "check",
        text: "Ultra Portátil: Cabe no bolso e leve para qualquer lugar"
    }, {
        icon: "check",
        text: "Som JBL Original: Qualidade de áudio reconhecida mundialmente"
    }, {
        icon: "check",
        text: "IPX7 À Prova d'Água: Use na piscina ou praia sem preocupações"
    }, {
        icon: "check",
        text: "Bateria de 5 Horas: Para curtir suas músicas o dia todo"
    }, {
        icon: "check",
        text: "Design Compacto: Perfeita para viagens e aventuras"
    }, {
        icon: "check",
        text: "3 Cores Disponíveis: Preta, Azul e Vermelha"
    }],
    includedItems: [{
        icon: "check",
        text: "JBL Go Essential"
    }, {
        icon: "check",
        text: "Cabo USB para carregamento"
    }, {
        icon: "check",
        text: "Guia de Início Rápido"
    }, {
        icon: "check",
        text: "Garantia JBL 1 ano"
    }, {
        icon: "check",
        text: "Nota Fiscal"
    }],
    reviews: pT
}, {
    slug: "flip-7",
    name: "Caixa De Som Flip7 Bluetooth Prova D...",
    shortName: "JBL Flip 7",
    catalogImage: eN,
    carouselImages: [vN, yN, wN, xN],
    currentPrice: "R$ 43,75",
    originalPrice: "R$ 466,95",
    discount: "92% OFF",
    rating: 4.9,
    reviewCount: 1234,
    salesCount: 388,
    badge: "OFERTA RELÂMPAGO",
    title: "Caixa de Som Bluetooth JBL Flip 7 – À Prova d'Água IP67, Som 360° e Bateria de Longa Duração",
    description: "JBL Flip 7 - Som potente em 360° com o design mais icônico da JBL. À prova d'água e poeira com IP67, bateria de até 12 horas e conectividade Bluetooth 5.3. Perfeita para aventuras.",
    technicalSpecs: [{
        label: "Potência",
        value: "30W RMS"
    }, {
        label: "Bateria",
        value: "Até 12 horas de reprodução"
    }, {
        label: "Proteção",
        value: "IP67 (água e poeira)"
    }, {
        label: "Bluetooth",
        value: "5.3"
    }, {
        label: "Dimensões",
        value: "17.8 x 6.8 x 7.2 cm"
    }, {
        label: "Peso",
        value: "540g"
    }],
    features: [{
        icon: "check",
        text: "Som 360°: Áudio imersivo em todas as direções"
    }, {
        icon: "check",
        text: "12 Horas de Bateria: Música o dia todo sem interrupções"
    }, {
        icon: "check",
        text: "IP67: Totalmente à prova d'água e poeira"
    }, {
        icon: "check",
        text: "PartyBoost: Conecte múltiplas caixas para som amplificado"
    }, {
        icon: "check",
        text: "4 Cores Disponíveis: Preta, Vermelha, Camuflada e Roxa"
    }],
    includedItems: [{
        icon: "check",
        text: "JBL Flip 7"
    }, {
        icon: "check",
        text: "Cabo USB-C"
    }, {
        icon: "check",
        text: "Guia de Início Rápido"
    }, {
        icon: "check",
        text: "Garantia JBL 1 ano"
    }, {
        icon: "check",
        text: "Nota Fiscal"
    }],
    reviews: hT
}, {
    slug: "partybox-120",
    name: "Caixa De Som Bluetooth Jbl Partybox 12...",
    shortName: "JBL Partybox 120",
    catalogImage: tN,
    carouselImages: [PN, NN, TN, RN],
    currentPrice: "R$ 85,75",
    originalPrice: "R$ 1.291,95",
    discount: "92% OFF",
    rating: 4.8,
    reviewCount: 567,
    salesCount: 327,
    badge: "OFERTA RELÂMPAGO",
    title: "Caixa de Som Bluetooth JBL Partybox 120 – Som Potente, Luzes LED e Bateria Integrada",
    description: "JBL Partybox 120 - A festa vai com você! Som poderoso de 160W com graves intensos, show de luzes LED sincronizadas e bateria integrada para festas em qualquer lugar.",
    technicalSpecs: [{
        label: "Potência",
        value: "160W RMS"
    }, {
        label: "Bateria",
        value: "Até 12 horas de reprodução"
    }, {
        label: "Proteção",
        value: "IPX4 (respingos)"
    }, {
        label: "Bluetooth",
        value: "5.1"
    }, {
        label: "Dimensões",
        value: "32.3 x 69.7 x 32.3 cm"
    }, {
        label: "Peso",
        value: "16.2 kg"
    }],
    features: [{
        icon: "check",
        text: "160W de Potência: Som absurdamente potente para suas festas"
    }, {
        icon: "check",
        text: "Show de Luzes LED: Iluminação sincronizada com a música"
    }, {
        icon: "check",
        text: "Bateria Integrada: Leve a festa para qualquer lugar"
    }, {
        icon: "check",
        text: "Entrada para Microfone: Karaokê com seus amigos"
    }, {
        icon: "check",
        text: "Rodinhas de Transporte: Fácil de mover"
    }],
    includedItems: [{
        icon: "check",
        text: "JBL Partybox 120"
    }, {
        icon: "check",
        text: "Cabo de Alimentação"
    }, {
        icon: "check",
        text: "Guia de Início Rápido"
    }, {
        icon: "check",
        text: "Garantia JBL 1 ano"
    }, {
        icon: "check",
        text: "Nota Fiscal"
    }],
    reviews: mT
}, {
    slug: "partybox-encore",
    name: "Caixa de som JBL Partybox Encore Blu...",
    shortName: "JBL Partybox Encore",
    catalogImage: nN,
    carouselImages: [_N, IN, FN, zN],
    currentPrice: "R$ 57,86",
    originalPrice: "R$ 1.016,95",
    discount: "92% OFF",
    rating: 4.9,
    reviewCount: 423,
    salesCount: 28,
    badge: "OFERTA RELÂMPAGO",
    title: "Caixa de Som Bluetooth JBL Partybox Encore – Com 2 Microfones Sem Fio, Karaokê Profissional",
    description: "JBL Partybox Encore - A caixa de som definitiva para karaokê! Vem com 2 microfones sem fio inclusos, 100W de potência, luzes LED e efeitos de voz para transformar qualquer festa.",
    technicalSpecs: [{
        label: "Potência",
        value: "100W RMS"
    }, {
        label: "Bateria",
        value: "Até 10 horas de reprodução"
    }, {
        label: "Proteção",
        value: "IPX4 (respingos)"
    }, {
        label: "Bluetooth",
        value: "5.1"
    }, {
        label: "Dimensões",
        value: "28.6 x 28.5 x 28.5 cm"
    }, {
        label: "Peso",
        value: "5.95 kg"
    }],
    features: [{
        icon: "check",
        text: "2 Microfones Sem Fio Inclusos: Karaokê pronto para usar"
    }, {
        icon: "check",
        text: "100W de Potência: Som potente e cristalino"
    }, {
        icon: "check",
        text: "Efeitos de Voz: Eco, reverb e muito mais"
    }, {
        icon: "check",
        text: "Luzes LED: Show de luzes sincronizado"
    }, {
        icon: "check",
        text: "Bateria Portátil: Leve para qualquer festa"
    }],
    includedItems: [{
        icon: "check",
        text: "JBL Partybox Encore"
    }, {
        icon: "check",
        text: "2 Microfones Sem Fio"
    }, {
        icon: "check",
        text: "Cabo de Alimentação"
    }, {
        icon: "check",
        text: "Guia de Início Rápido"
    }, {
        icon: "check",
        text: "Garantia JBL 1 ano"
    }, {
        icon: "check",
        text: "Nota Fiscal"
    }],
    reviews: gT
}, {
    slug: "boombox-3",
    name: "Caixa de Som JBL Boombox 3 JBLBOO...",
    shortName: "JBL Boombox 3",
    catalogImage: zp,
    carouselImages: [zp],
    currentPrice: "R$ 68,83",
    originalPrice: "R$ 1.994,00",
    discount: "92% OFF",
    rating: 4.8,
    reviewCount: 876,
    salesCount: 67,
    badge: "OFERTA RELÂMPAGO",
    title: "Caixa de Som Bluetooth JBL Boombox 3 – Som Monstruoso, IP67 e 24 Horas de Bateria",
    description: "JBL Boombox 3 - Som monstruoso com graves profundos e potentes. IP67 à prova d'água, bateria de até 24 horas e design robusto para as maiores festas.",
    technicalSpecs: [{
        label: "Potência",
        value: "180W RMS"
    }, {
        label: "Bateria",
        value: "Até 24 horas de reprodução"
    }, {
        label: "Proteção",
        value: "IP67 (água e poeira)"
    }, {
        label: "Bluetooth",
        value: "5.3"
    }, {
        label: "Dimensões",
        value: "48.2 x 25.5 x 19.5 cm"
    }, {
        label: "Peso",
        value: "5.9 kg"
    }],
    features: [{
        icon: "check",
        text: "180W de Potência: Som monstruoso para grandes festas"
    }, {
        icon: "check",
        text: "24 Horas de Bateria: Festa sem parar"
    }, {
        icon: "check",
        text: "IP67: À prova d'água e poeira"
    }, {
        icon: "check",
        text: "PartyBoost: Conecte várias caixas"
    }, {
        icon: "check",
        text: "Design Robusto: Feito para durar"
    }],
    includedItems: [{
        icon: "check",
        text: "JBL Boombox 3"
    }, {
        icon: "check",
        text: "Cabo de Alimentação"
    }, {
        icon: "check",
        text: "Guia de Início Rápido"
    }, {
        icon: "check",
        text: "Garantia JBL 1 ano"
    }, {
        icon: "check",
        text: "Nota Fiscal"
    }],
    reviews: Wl,
    outOfStock: !0
}, {
    slug: "partybox-club",
    name: "Caixa de som Bluetooth JBL PartyBox ...",
    shortName: "JBL Partybox Club 120",
    catalogImage: $p,
    carouselImages: [$p],
    currentPrice: "R$ 145,84",
    originalPrice: "R$ 2.849,00",
    discount: "92% OFF",
    rating: 4.8,
    reviewCount: 456,
    salesCount: 156,
    badge: "OFERTA RELÂMPAGO",
    title: "Caixa de Som Bluetooth JBL Partybox Club 120 – 160W, Luzes LED e Portátil",
    description: "JBL Partybox Club 120 - A festa na palma da mão! 160W de potência com graves intensos, show de luzes LED e bateria portátil para levar a festa para qualquer lugar.",
    technicalSpecs: [{
        label: "Potência",
        value: "160W RMS"
    }, {
        label: "Bateria",
        value: "Até 12 horas de reprodução"
    }, {
        label: "Proteção",
        value: "IPX4 (respingos)"
    }, {
        label: "Bluetooth",
        value: "5.3"
    }, {
        label: "Dimensões",
        value: "32.3 x 69.7 x 32.3 cm"
    }, {
        label: "Peso",
        value: "13.5 kg"
    }],
    features: [{
        icon: "check",
        text: "160W de Potência: Graves intensos e som potente"
    }, {
        icon: "check",
        text: "Luzes LED: Sincronizadas com a batida"
    }, {
        icon: "check",
        text: "12 Horas de Bateria: Portabilidade total"
    }, {
        icon: "check",
        text: "Entrada para Microfone: Karaokê incluso"
    }, {
        icon: "check",
        text: "Rodinhas: Fácil de transportar"
    }],
    includedItems: [{
        icon: "check",
        text: "JBL Partybox Club 120"
    }, {
        icon: "check",
        text: "Cabo de Alimentação"
    }, {
        icon: "check",
        text: "Guia de Início Rápido"
    }, {
        icon: "check",
        text: "Garantia JBL 1 ano"
    }, {
        icon: "check",
        text: "Nota Fiscal"
    }],
    reviews: Wl,
    outOfStock: !0
}]
  , yT = e => vT.find(t => t.slug === e)
  , wT = [{
    question: "O produto é original?",
    answer: "Sim! Todos os nossos produtos são 100% originais e vêm com garantia oficial do fabricante. Nota fiscal acompanha cada pedido."
}, {
    question: "Quanto tempo demora a entrega?",
    answer: "O prazo de entrega varia conforme sua localização. Geralmente entre 3 a 10 dias úteis. Você pode acompanhar seu pedido em tempo real após a compra."
}, {
    question: "O ar-condicionado é fácil de instalar?",
    answer: "Sim! O modelo Split Inverter Hisense possui instalação simplificada. Recomendamos um técnico especializado para garantir o funcionamento ideal e manter a garantia."
}, {
    question: "Qual a garantia do produto?",
    answer: "O produto possui 1 ano de garantia oficial do fabricante contra defeitos de fabricação. A garantia não cobre danos causados por mau uso ou instalação incorreta."
}, {
    question: "Posso trocar se não gostar?",
    answer: "Sim! Você tem 7 dias corridos após o recebimento para solicitar a troca ou devolução, conforme o Código de Defesa do Consumidor. O produto deve estar sem uso e na embalagem original."
}]
  , xT = [{
    stars: 5,
    count: 1268,
    percentage: 82
}, {
    stars: 4,
    count: 186,
    percentage: 12
}, {
    stars: 3,
    count: 62,
    percentage: 4
}, {
    stars: 2,
    count: 15,
    percentage: 1
}, {
    stars: 1,
    count: 16,
    percentage: 1
}]
  , bT = v.lazy( () => Cr( () => import("./ReviewsSection-CQUhWju2.js"), []).then(e => ({
    default: e.ReviewsSection
})))
  , ST = v.lazy( () => Cr( () => import("./StoreInfo-owazvrNn.js"), []).then(e => ({
    default: e.StoreInfo
})))
  , ET = v.lazy( () => Cr( () => import("./ProductDescription-DUEb7mk9.js"), []).then(e => ({
    default: e.ProductDescription
})))
  , CT = v.lazy( () => Cr( () => import("./TechnicalSpecs-CgT_lQXn.js"), []).then(e => ({
    default: e.TechnicalSpecs
})))
  , kT = v.lazy( () => Cr( () => import("./FeaturesList-BHbsK7sY.js"), []).then(e => ({
    default: e.FeaturesList
})))
  , PT = v.lazy( () => Cr( () => import("./FAQ-BtOToCwK.js"), []).then(e => ({
    default: e.FAQ
})))
  , NT = v.lazy( () => Cr( () => import("./OffersSection-D52-fwOD.js"), []).then(e => ({
    default: e.OffersSection
})))
  , TT = ({product: e}) => {
    const t = dd()
      , {toast: n} = cg()
      , [r,o] = v.useState(!1)
      , [a,i] = v.useState(!1)
      , [s,l] = v.useState("00:00:00")
      , u = v.useMemo( () => {
        const g = new Date
          , x = vp(g, 3)
          , m = vp(g, 10);
        return `Receba até ${Cp(x, "d 'de' MMM", {
            locale: kp
        })}. – ${Cp(m, "d 'de' MMM", {
            locale: kp
        })}.`
    }
    , []);
    v.useEffect( () => {
        const g = new Date().getTime() + 3e5
          , x = () => {
            const p = new Date().getTime()
              , w = g - p;
            if (w <= 0) {
                l("00:00:00"),
                a || i(!0);
                return
            }
            const S = Math.floor(w / (1e3 * 60 * 60))
              , E = Math.floor(w % (1e3 * 60 * 60) / (1e3 * 60))
              , C = Math.floor(w % (1e3 * 60) / 1e3);
            l(`${String(S).padStart(2, "0")}:${String(E).padStart(2, "0")}:${String(C).padStart(2, "0")}`)
        }
        ;
        x();
        const m = setInterval(x, 1e3);
        return () => clearInterval(m)
    }
    , [a]);
    const c = () => {
        n({
            title: "Adicionado ao carrinho",
            description: "Produto adicionado com sucesso!"
        })
    }
      , d = () => {
        o(!0)
    }
      , h = (g, x, m) => {
        n({
            title: "Processando compra",
            description: `${x} - ${g} - ${m}`
        })
    }
      , f = () => {
        i(!1),
        o(!0)
    }
      , b = () => {
        i(!1),
        t("/catalogo")
    }
    ;
    return y.jsxs("div", {
        className: "min-h-screen min-h-[100dvh] bg-background pb-24 overscroll-none",
        children: [y.jsx(Ok, {
            onCartClick: d
        }), y.jsx(Ak, {
            images: e.carouselImages
        }), y.jsx(Dk, {
            currentPrice: e.currentPrice,
            originalPrice: e.originalPrice,
            discount: e.discount,
            couponCode: e.originalPrice,
            countdown: s
        }), y.jsx(Lk, {
            badge: e.badge,
            title: e.title,
            rating: e.rating,
            reviewCount: e.reviewCount,
            salesCount: e.salesCount,
            deliveryInfo: u,
            shippingNote: "Taxa de envio: Grátis"
        }), y.jsx(JP, {
            selectedPattern: "Camuflada",
            onOpenModal: () => o(!0),
            productSlug: e.slug
        }), y.jsx(XP, {}), y.jsx(v.Suspense, {
            fallback: y.jsx("div", {
                className: "h-32 bg-muted animate-pulse"
            }),
            children: y.jsx(NT, {})
        }), y.jsx(v.Suspense, {
            fallback: y.jsx("div", {
                className: "h-96 bg-muted animate-pulse"
            }),
            children: y.jsx(bT, {
                rating: e.rating,
                totalReviews: e.reviewCount,
                breakdown: xT,
                reviews: e.reviews
            })
        }), y.jsx(v.Suspense, {
            fallback: y.jsx("div", {
                className: "h-24 bg-muted animate-pulse"
            }),
            children: y.jsx(ST, {
                name: "Hypertech",
                status: "Online • Responde rápido",
                rating: "98%",
                products: "128",
                followers: "3.2M"
            })
        }), y.jsx(v.Suspense, {
            fallback: y.jsx("div", {
                className: "h-32 bg-muted animate-pulse"
            }),
            children: y.jsx(ET, {
                description: e.description
            })
        }), y.jsx(v.Suspense, {
            fallback: y.jsx("div", {
                className: "h-48 bg-muted animate-pulse"
            }),
            children: y.jsx(CT, {
                specs: e.technicalSpecs
            })
        }), y.jsx(v.Suspense, {
            fallback: y.jsx("div", {
                className: "h-32 bg-muted animate-pulse"
            }),
            children: y.jsx(kT, {
                title: "Incluso na Caixa:",
                features: e.includedItems,
                variant: "includes"
            })
        }), y.jsx(v.Suspense, {
            fallback: y.jsx("div", {
                className: "h-64 bg-muted animate-pulse"
            }),
            children: y.jsx(PT, {
                items: wT
            })
        }), y.jsx(GP, {
            open: r,
            onOpenChange: o,
            onConfirm: h,
            productSlug: e.slug
        }), y.jsx(KP, {
            open: a,
            onOpenChange: i,
            onBuyNow: f,
            onViewRecommendations: b
        }), y.jsx(_k, {
            onAddToCart: c,
            onBuy: d
        })]
    })
}
;
function RT() {
    const {slug: e} = NC();
    if (!e)
        return y.jsx(Gu, {
            to: "/catalogo",
            replace: !0
        });
    const t = yT(e);
    return t ? y.jsx(TT, {
        product: t
    }) : y.jsx(Gu, {
        to: "/catalogo",
        replace: !0
    })
}
const OT = () => {
    const e = $s();
    return v.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    y.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: y.jsxs("div", {
            className: "text-center",
            children: [y.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), y.jsx("p", {
                className: "mb-4 text-xl text-gray-600",
                children: "Oops! Page not found"
            }), y.jsx("a", {
                href: "/",
                className: "text-blue-500 underline hover:text-blue-700",
                children: "Return to Home"
            })]
        })
    })
}
  , jT = new XE
  , MT = () => y.jsx(ZE, {
    client: jT,
    children: y.jsxs(NE, {
        children: [y.jsx(lb, {}), y.jsx($b, {}), y.jsx(HC, {
            children: y.jsxs(WC, {
                children: [y.jsx(Qo, {
                    path: "/",
                    element: y.jsx(qC, {})
                }), y.jsx(Qo, {
                    path: "/catalogo",
                    element: y.jsx(Gu, {
                        to: "/",
                        replace: !0
                    })
                }), y.jsx(Qo, {
                    path: "/produto/:slug",
                    element: y.jsx(RT, {})
                }), y.jsx(Qo, {
                    path: "*",
                    element: y.jsx(OT, {})
                })]
            })
        })]
    })
});
ug(document.getElementById("root")).render(y.jsx(MT, {}));
export {zt as B, $g as C, y1 as G, we as P, j as R, E1 as S, zu as Z, _a as a, on as b, De as c, We as d, vg as e, Ol as f, ue as g, ko as h, ze as i, y as j, Nx as k, v as r, Vt as u};
