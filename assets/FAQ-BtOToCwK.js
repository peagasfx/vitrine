import {c as ve, a as K, r as d, e as k, j as t, f as z, P as N, g as B, h as Ce, i as U, b as be, k as ge, R as f, d as T} from "./index-Dnro7a-c.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = ve("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
var j = "Collapsible"
  , [Ae,Q] = K(j)
  , [Ie,M] = Ae(j)
  , Y = d.forwardRef( (e, n) => {
    const {__scopeCollapsible: o, open: r, defaultOpen: s, disabled: a, onOpenChange: c, ...l} = e
      , [p,u] = k({
        prop: r,
        defaultProp: s ?? !1,
        onChange: c,
        caller: j
    });
    return t.jsx(Ie, {
        scope: o,
        disabled: a,
        contentId: z(),
        open: p,
        onOpenToggle: d.useCallback( () => u(m => !m), [u]),
        children: t.jsx(N.div, {
            "data-state": L(p),
            "data-disabled": a ? "" : void 0,
            ...l,
            ref: n
        })
    })
}
);
Y.displayName = j;
var J = "CollapsibleTrigger"
  , W = d.forwardRef( (e, n) => {
    const {__scopeCollapsible: o, ...r} = e
      , s = M(J, o);
    return t.jsx(N.button, {
        type: "button",
        "aria-controls": s.contentId,
        "aria-expanded": s.open || !1,
        "data-state": L(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        disabled: s.disabled,
        ...r,
        ref: n,
        onClick: B(e.onClick, s.onOpenToggle)
    })
}
);
W.displayName = J;
var $ = "CollapsibleContent"
  , X = d.forwardRef( (e, n) => {
    const {forceMount: o, ...r} = e
      , s = M($, e.__scopeCollapsible);
    return t.jsx(Ce, {
        present: o || s.open,
        children: ({present: a}) => t.jsx(Ne, {
            ...r,
            ref: n,
            present: a
        })
    })
}
);
X.displayName = $;
var Ne = d.forwardRef( (e, n) => {
    const {__scopeCollapsible: o, present: r, children: s, ...a} = e
      , c = M($, o)
      , [l,p] = d.useState(r)
      , u = d.useRef(null)
      , m = U(n, u)
      , x = d.useRef(0)
      , A = x.current
      , C = d.useRef(0)
      , R = C.current
      , b = c.open || l
      , g = d.useRef(b)
      , h = d.useRef(void 0);
    return d.useEffect( () => {
        const i = requestAnimationFrame( () => g.current = !1);
        return () => cancelAnimationFrame(i)
    }
    , []),
    be( () => {
        const i = u.current;
        if (i) {
            h.current = h.current || {
                transitionDuration: i.style.transitionDuration,
                animationName: i.style.animationName
            },
            i.style.transitionDuration = "0s",
            i.style.animationName = "none";
            const I = i.getBoundingClientRect();
            x.current = I.height,
            C.current = I.width,
            g.current || (i.style.transitionDuration = h.current.transitionDuration,
            i.style.animationName = h.current.animationName),
            p(r)
        }
    }
    , [c.open, r]),
    t.jsx(N.div, {
        "data-state": L(c.open),
        "data-disabled": c.disabled ? "" : void 0,
        id: c.contentId,
        hidden: !b,
        ...a,
        ref: m,
        style: {
            "--radix-collapsible-content-height": A ? `${A}px` : void 0,
            "--radix-collapsible-content-width": R ? `${R}px` : void 0,
            ...e.style
        },
        children: b && s
    })
}
);
function L(e) {
    return e ? "open" : "closed"
}
var Re = Y
  , we = W
  , je = X
  , ye = d.createContext(void 0);
function _e(e) {
    const n = d.useContext(ye);
    return e || n || "ltr"
}
var v = "Accordion"
  , Pe = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [V,Ee,De] = ge(v)
  , [y,Ge] = K(v, [De, Q])
  , H = Q()
  , Z = f.forwardRef( (e, n) => {
    const {type: o, ...r} = e
      , s = r
      , a = r;
    return t.jsx(V.Provider, {
        scope: e.__scopeAccordion,
        children: o === "multiple" ? t.jsx(Te, {
            ...a,
            ref: n
        }) : t.jsx(ke, {
            ...s,
            ref: n
        })
    })
}
);
Z.displayName = v;
var [ee,Se] = y(v)
  , [oe,Oe] = y(v, {
    collapsible: !1
})
  , ke = f.forwardRef( (e, n) => {
    const {value: o, defaultValue: r, onValueChange: s= () => {}
    , collapsible: a=!1, ...c} = e
      , [l,p] = k({
        prop: o,
        defaultProp: r ?? "",
        onChange: s,
        caller: v
    });
    return t.jsx(ee, {
        scope: e.__scopeAccordion,
        value: f.useMemo( () => l ? [l] : [], [l]),
        onItemOpen: p,
        onItemClose: f.useCallback( () => a && p(""), [a, p]),
        children: t.jsx(oe, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: t.jsx(te, {
                ...c,
                ref: n
            })
        })
    })
}
)
  , Te = f.forwardRef( (e, n) => {
    const {value: o, defaultValue: r, onValueChange: s= () => {}
    , ...a} = e
      , [c,l] = k({
        prop: o,
        defaultProp: r ?? [],
        onChange: s,
        caller: v
    })
      , p = f.useCallback(m => l( (x=[]) => [...x, m]), [l])
      , u = f.useCallback(m => l( (x=[]) => x.filter(A => A !== m)), [l]);
    return t.jsx(ee, {
        scope: e.__scopeAccordion,
        value: c,
        onItemOpen: p,
        onItemClose: u,
        children: t.jsx(oe, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: t.jsx(te, {
                ...a,
                ref: n
            })
        })
    })
}
)
  , [Me,_] = y(v)
  , te = f.forwardRef( (e, n) => {
    const {__scopeAccordion: o, disabled: r, dir: s, orientation: a="vertical", ...c} = e
      , l = f.useRef(null)
      , p = U(l, n)
      , u = Ee(o)
      , x = _e(s) === "ltr"
      , A = B(e.onKeyDown, C => {
        var q;
        if (!Pe.includes(C.key))
            return;
        const R = C.target
          , b = u().filter(S => {
            var G;
            return !((G = S.ref.current) != null && G.disabled)
        }
        )
          , g = b.findIndex(S => S.ref.current === R)
          , h = b.length;
        if (g === -1)
            return;
        C.preventDefault();
        let i = g;
        const I = 0
          , P = h - 1
          , E = () => {
            i = g + 1,
            i > P && (i = I)
        }
          , D = () => {
            i = g - 1,
            i < I && (i = P)
        }
        ;
        switch (C.key) {
        case "Home":
            i = I;
            break;
        case "End":
            i = P;
            break;
        case "ArrowRight":
            a === "horizontal" && (x ? E() : D());
            break;
        case "ArrowDown":
            a === "vertical" && E();
            break;
        case "ArrowLeft":
            a === "horizontal" && (x ? D() : E());
            break;
        case "ArrowUp":
            a === "vertical" && D();
            break
        }
        const xe = i % h;
        (q = b[xe].ref.current) == null || q.focus()
    }
    );
    return t.jsx(Me, {
        scope: o,
        disabled: r,
        direction: s,
        orientation: a,
        children: t.jsx(V.Slot, {
            scope: o,
            children: t.jsx(N.div, {
                ...c,
                "data-orientation": a,
                ref: p,
                onKeyDown: r ? void 0 : A
            })
        })
    })
}
)
  , w = "AccordionItem"
  , [$e,F] = y(w)
  , ne = f.forwardRef( (e, n) => {
    const {__scopeAccordion: o, value: r, ...s} = e
      , a = _(w, o)
      , c = Se(w, o)
      , l = H(o)
      , p = z()
      , u = r && c.value.includes(r) || !1
      , m = a.disabled || e.disabled;
    return t.jsx($e, {
        scope: o,
        open: u,
        disabled: m,
        triggerId: p,
        children: t.jsx(Re, {
            "data-orientation": a.orientation,
            "data-state": le(u),
            ...l,
            ...s,
            ref: n,
            disabled: m,
            open: u,
            onOpenChange: x => {
                x ? c.onItemOpen(r) : c.onItemClose(r)
            }
        })
    })
}
);
ne.displayName = w;
var re = "AccordionHeader"
  , ae = f.forwardRef( (e, n) => {
    const {__scopeAccordion: o, ...r} = e
      , s = _(v, o)
      , a = F(re, o);
    return t.jsx(N.h3, {
        "data-orientation": s.orientation,
        "data-state": le(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: n
    })
}
);
ae.displayName = re;
var O = "AccordionTrigger"
  , se = f.forwardRef( (e, n) => {
    const {__scopeAccordion: o, ...r} = e
      , s = _(v, o)
      , a = F(O, o)
      , c = Oe(O, o)
      , l = H(o);
    return t.jsx(V.ItemSlot, {
        scope: o,
        children: t.jsx(we, {
            "aria-disabled": a.open && !c.collapsible || void 0,
            "data-orientation": s.orientation,
            id: a.triggerId,
            ...l,
            ...r,
            ref: n
        })
    })
}
);
se.displayName = O;
var ce = "AccordionContent"
  , ie = f.forwardRef( (e, n) => {
    const {__scopeAccordion: o, ...r} = e
      , s = _(v, o)
      , a = F(ce, o)
      , c = H(o);
    return t.jsx(je, {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": s.orientation,
        ...c,
        ...r,
        ref: n,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
        }
    })
}
);
ie.displayName = ce;
function le(e) {
    return e ? "open" : "closed"
}
var Le = Z
  , Ve = ne
  , He = ae
  , de = se
  , pe = ie;
const Fe = Le
  , ue = d.forwardRef( ({className: e, ...n}, o) => t.jsx(Ve, {
    ref: o,
    className: T("border-b", e),
    ...n
}));
ue.displayName = "AccordionItem";
const fe = d.forwardRef( ({className: e, children: n, ...o}, r) => t.jsx(He, {
    className: "flex",
    children: t.jsxs(de, {
        ref: r,
        className: T("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...o,
        children: [n, t.jsx(he, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
fe.displayName = de.displayName;
const me = d.forwardRef( ({className: e, children: n, ...o}, r) => t.jsx(pe, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...o,
    children: t.jsx("div", {
        className: T("pb-4 pt-0", e),
        children: n
    })
}));
me.displayName = pe.displayName;
const Ke = ({items: e}) => t.jsxs("div", {
    className: "p-4 border-t border-border",
    children: [t.jsx("h2", {
        className: "font-bold text-lg mb-3",
        children: "Perguntas Frequentes"
    }), t.jsx(Fe, {
        type: "single",
        collapsible: !0,
        className: "w-full",
        children: e.map( (n, o) => t.jsxs(ue, {
            value: `item-${o}`,
            children: [t.jsx(fe, {
                className: "text-left text-sm",
                children: n.question
            }), t.jsx(me, {
                className: "text-sm text-muted-foreground",
                children: n.answer
            })]
        }, o))
    })]
});
export {Ke as FAQ};
