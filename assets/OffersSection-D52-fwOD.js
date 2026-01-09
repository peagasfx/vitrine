import {j as s, G as t, C as l, Z as c} from "./index-Dnro7a-c.js";
const r = () => {
    const a = [{
        icon: c,
        title: "Primeiro Pedido com 92% OFF",
        description: "Desconto especial para novos clientes",
        badge: "Aplicado",
        bgColor: "bg-gradient-to-r from-pink-50 to-rose-50",
        iconColor: "text-pink-500",
        titleColor: "text-pink-600"
    }];
    return s.jsxs("div", {
        className: "py-4",
        children: [s.jsxs("div", {
            className: "px-4 pb-3 flex items-center gap-2",
            children: [s.jsx(t, {
                className: "h-5 w-5 text-pink-500"
            }), s.jsx("span", {
                className: "font-bold text-lg",
                children: "Ofertas Especiais"
            })]
        }), s.jsx("div", {
            className: "px-4 space-y-3",
            children: a.map( (e, i) => s.jsx("div", {
                className: `${e.bgColor} p-4 rounded-xl border border-gray-100 shadow-sm`,
                children: s.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [s.jsx("div", {
                        className: `${e.iconColor} bg-white p-2 rounded-lg shadow-sm`,
                        children: s.jsx(e.icon, {
                            className: "h-5 w-5"
                        })
                    }), s.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [s.jsx("h3", {
                                className: `${e.titleColor} font-bold text-sm`,
                                children: e.title
                            }), s.jsxs("div", {
                                className: "flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full whitespace-nowrap",
                                children: [s.jsx(l, {
                                    className: "h-3 w-3"
                                }), s.jsx("span", {
                                    className: "font-medium",
                                    children: e.badge
                                })]
                            })]
                        }), s.jsx("p", {
                            className: "text-xs text-gray-500 mt-0.5",
                            children: e.description
                        })]
                    })]
                })
            }, i))
        })]
    })
}
;
export {r as OffersSection};
