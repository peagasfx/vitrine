import {c as l, j as s, C as d} from "./index-Dnro7a-c.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x = l("Box", [["path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
    key: "hh9hay"
}], ["path", {
    d: "m3.3 7 8.7 5 8.7-5",
    key: "g66t2b"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t = l("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]])
  , i = ({title: c, features: r, variant: e="features"}) => s.jsxs("div", {
    className: "p-4 border-t border-border",
    children: [s.jsxs("div", {
        className: "flex items-center gap-2 mb-3",
        children: [e === "includes" && s.jsx(x, {
            className: "h-5 w-5 text-primary"
        }), e === "features" && s.jsx(t, {
            className: "h-5 w-5 text-warning"
        }), s.jsx("h2", {
            className: "font-bold text-lg",
            children: c
        })]
    }), s.jsx("div", {
        className: e === "includes" ? "bg-accent p-3 rounded-lg" : "",
        children: s.jsx("ul", {
            className: "space-y-2",
            children: r.map( (a, h) => s.jsxs("li", {
                className: "flex items-start gap-2 text-sm",
                children: [a.icon === "sparkles" ? s.jsx(t, {
                    className: "h-4 w-4 text-warning flex-shrink-0 mt-0.5"
                }) : s.jsx(d, {
                    className: "h-4 w-4 text-success flex-shrink-0 mt-0.5"
                }), s.jsx("span", {
                    children: a.text
                })]
            }, h))
        })
    })]
});
export {i as FeaturesList};
