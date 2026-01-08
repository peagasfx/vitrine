import {c as P, r as i, a as T, j as a, P as g, u as U, b as p, d as j, S as N, B} from "./index-Dnro7a-c.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H = P("ThumbsUp", [["path", {
    d: "M7 10v12",
    key: "1qc93n"
}], ["path", {
    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
    key: "emmmcr"
}]]);
var y = {
    exports: {}
}
  , w = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = i;
function q(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var z = typeof Object.is == "function" ? Object.is : q
  , D = f.useState
  , G = f.useEffect
  , K = f.useLayoutEffect
  , O = f.useDebugValue;
function W(e, t) {
    var s = t()
      , l = D({
        inst: {
            value: s,
            getSnapshot: t
        }
    })
      , o = l[0].inst
      , r = l[1];
    return K(function() {
        o.value = s,
        o.getSnapshot = t,
        v(o) && r({
            inst: o
        })
    }, [e, s, t]),
    G(function() {
        return v(o) && r({
            inst: o
        }),
        e(function() {
            v(o) && r({
                inst: o
            })
        })
    }, [e]),
    O(s),
    s
}
function v(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var s = t();
        return !z(e, s)
    } catch {
        return !0
    }
}
function Z(e, t) {
    return t()
}
var J = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Z : W;
w.useSyncExternalStore = f.useSyncExternalStore !== void 0 ? f.useSyncExternalStore : J;
y.exports = w;
var Q = y.exports;
function X() {
    return Q.useSyncExternalStore(Y, () => !0, () => !1)
}
function Y() {
    return () => {}
}
var S = "Avatar"
  , [ee,re] = T(S)
  , [ae,A] = ee(S)
  , E = i.forwardRef( (e, t) => {
    const {__scopeAvatar: s, ...l} = e
      , [o,r] = i.useState("idle");
    return a.jsx(ae, {
        scope: s,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: r,
        children: a.jsx(g.span, {
            ...l,
            ref: t
        })
    })
}
);
E.displayName = S;
var L = "AvatarImage"
  , R = i.forwardRef( (e, t) => {
    const {__scopeAvatar: s, src: l, onLoadingStatusChange: o= () => {}
    , ...r} = e
      , u = A(L, s)
      , c = te(l, r)
      , d = U(n => {
        o(n),
        u.onImageLoadingStatusChange(n)
    }
    );
    return p( () => {
        c !== "idle" && d(c)
    }
    , [c, d]),
    c === "loaded" ? a.jsx(g.img, {
        ...r,
        ref: t,
        src: l
    }) : null
}
);
R.displayName = L;
var I = "AvatarFallback"
  , C = i.forwardRef( (e, t) => {
    const {__scopeAvatar: s, delayMs: l, ...o} = e
      , r = A(I, s)
      , [u,c] = i.useState(l === void 0);
    return i.useEffect( () => {
        if (l !== void 0) {
            const d = window.setTimeout( () => c(!0), l);
            return () => window.clearTimeout(d)
        }
    }
    , [l]),
    u && r.imageLoadingStatus !== "loaded" ? a.jsx(g.span, {
        ...o,
        ref: t
    }) : null
}
);
C.displayName = I;
function b(e, t) {
    return e ? t ? (e.src !== t && (e.src = t),
    e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
}
function te(e, {referrerPolicy: t, crossOrigin: s}) {
    const l = X()
      , o = i.useRef(null)
      , r = l ? (o.current || (o.current = new window.Image),
    o.current) : null
      , [u,c] = i.useState( () => b(r, e));
    return p( () => {
        c(b(r, e))
    }
    , [r, e]),
    p( () => {
        const d = h => () => {
            c(h)
        }
        ;
        if (!r)
            return;
        const n = d("loaded")
          , m = d("error");
        return r.addEventListener("load", n),
        r.addEventListener("error", m),
        t && (r.referrerPolicy = t),
        typeof s == "string" && (r.crossOrigin = s),
        () => {
            r.removeEventListener("load", n),
            r.removeEventListener("error", m)
        }
    }
    , [r, s, t]),
    u
}
var _ = E
  , k = R
  , M = C;
const $ = i.forwardRef( ({className: e, ...t}, s) => a.jsx(_, {
    ref: s,
    className: j("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
$.displayName = _.displayName;
const F = i.forwardRef( ({className: e, ...t}, s) => a.jsx(k, {
    ref: s,
    className: j("aspect-square h-full w-full", e),
    ...t
}));
F.displayName = k.displayName;
const V = i.forwardRef( ({className: e, ...t}, s) => a.jsx(M, {
    ref: s,
    className: j("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
V.displayName = M.displayName;
const ne = ({rating: e, totalReviews: t, breakdown: s, reviews: l}) => {
    const [o,r] = i.useState(5)
      , u = l.length - o
      , c = l.slice(0, o)
      , d = () => {
        r(n => Math.min(n + 5, l.length))
    }
    ;
    return a.jsxs("div", {
        className: "p-4 border-t border-border",
        children: [a.jsx("div", {
            className: "flex items-center justify-between mb-4",
            children: a.jsxs("h2", {
                className: "font-bold text-lg",
                children: ["Avaliações dos clientes (", t.toLocaleString(), ")"]
            })
        }), a.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [a.jsxs("span", {
                className: "text-2xl font-bold",
                children: [e, "/5"]
            }), a.jsx("div", {
                className: "flex gap-0.5",
                children: [...Array(5)].map( (n, m) => a.jsx(N, {
                    className: `h-4 w-4 ${m < Math.floor(e) ? "fill-warning text-warning" : "text-muted"}`
                }, m))
            })]
        }), a.jsx("div", {
            className: "space-y-4",
            children: c.map( (n, m) => a.jsxs("div", {
                className: "border-t border-border pt-4",
                children: [a.jsxs("div", {
                    className: "flex items-start gap-3 mb-2",
                    children: [a.jsxs($, {
                        className: "h-8 w-8 border-0",
                        children: [a.jsx(F, {
                            src: n.avatar,
                            loading: "lazy",
                            className: "object-cover"
                        }), a.jsx(V, {
                            className: "bg-blue-500 text-white text-sm border-0",
                            children: n.author[0].toUpperCase()
                        })]
                    }), a.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [a.jsx("div", {
                            className: "font-medium text-sm",
                            children: n.author
                        }), a.jsx("div", {
                            className: "flex items-center gap-1",
                            children: [...Array(5)].map( (h, x) => a.jsx(N, {
                                className: `h-3 w-3 ${x < n.rating ? "fill-warning text-warning" : "text-muted"}`
                            }, x))
                        }), a.jsxs("div", {
                            className: "flex items-center gap-2 text-xs text-muted-foreground mt-0.5",
                            children: [a.jsx("span", {
                                children: n.date
                            }), n.variation && a.jsxs(a.Fragment, {
                                children: [a.jsx("span", {
                                    children: "|"
                                }), a.jsxs("span", {
                                    children: ["Variação: ", a.jsxs("span", {
                                        className: "text-green-600",
                                        children: ["🌳 ", n.variation]
                                    })]
                                })]
                            })]
                        })]
                    })]
                }), a.jsx("p", {
                    className: "text-sm leading-relaxed mb-2",
                    children: n.text
                }), n.images && n.images.length > 0 && a.jsx("div", {
                    className: "flex gap-2 mb-2",
                    children: n.images.map( (h, x) => a.jsx("img", {
                        src: h,
                        alt: `Review ${x + 1}`,
                        className: "w-20 h-20 object-cover rounded",
                        loading: "lazy",
                        decoding: "async"
                    }, x))
                }), n.helpful && a.jsxs("div", {
                    className: "flex items-center gap-1 text-xs text-muted-foreground",
                    children: [a.jsx(H, {
                        className: "h-3 w-3"
                    }), a.jsxs("span", {
                        children: ["Útil (", n.helpful, ")"]
                    })]
                })]
            }, m))
        }), u > 0 && a.jsx("div", {
            className: "mt-6",
            children: a.jsxs(B, {
                variant: "outline",
                className: "w-full py-3 text-sm font-medium border-gray-300",
                onClick: d,
                children: ["Ver mais avaliações (", u, " restantes)"]
            })
        })]
    })
}
;
export {ne as ReviewsSection};
