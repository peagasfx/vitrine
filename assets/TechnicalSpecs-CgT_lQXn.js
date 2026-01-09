import {c as r, j as e} from "./index-Dnro7a-c.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d = r("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]])
  , l = ({specs: a}) => e.jsxs("div", {
    className: "p-4 border-t border-border",
    children: [e.jsxs("div", {
        className: "flex items-center gap-2 mb-3",
        children: [e.jsx(d, {
            className: "h-5 w-5 text-muted-foreground"
        }), e.jsx("h2", {
            className: "font-bold text-lg",
            children: "Especificações Técnicas"
        })]
    }), e.jsx("div", {
        className: "space-y-3",
        children: a.map( (s, t) => e.jsxs("div", {
            className: "flex justify-between py-2 border-b border-border last:border-0",
            children: [e.jsx("span", {
                className: "text-sm text-muted-foreground",
                children: s.label
            }), e.jsx("span", {
                className: "text-sm font-medium text-right max-w-[60%]",
                children: s.value
            })]
        }, t))
    })]
});
export {l as TechnicalSpecs};
