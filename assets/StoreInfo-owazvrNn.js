import {j as e, B as l} from "./index-Dnro7a-c.js";
const c = "/assets/hypertech-logo-D5Zf8icC.png"
  , n = ({name: s, status: t, rating: d, products: r, followers: i}) => e.jsxs("div", {
    className: "p-4 border-y border-border",
    children: [e.jsx("h2", {
        className: "font-bold text-lg mb-3",
        children: "Informações da Loja"
    }), e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [e.jsx("img", {
                src: c,
                alt: "Hypertech",
                className: "h-12 w-12 object-contain rounded"
            }), e.jsxs("div", {
                children: [e.jsx("div", {
                    className: "font-semibold",
                    children: s
                }), e.jsx("div", {
                    className: "text-sm text-muted-foreground",
                    children: t
                })]
            })]
        }), e.jsx(l, {
            variant: "outline",
            size: "sm",
            children: "Seguir"
        })]
    }), e.jsxs("div", {
        className: "grid grid-cols-3 gap-4 mt-4 text-center",
        children: [e.jsxs("div", {
            children: [e.jsx("div", {
                className: "font-bold text-lg",
                children: d
            }), e.jsx("div", {
                className: "text-xs text-muted-foreground",
                children: "Avaliação"
            })]
        }), e.jsxs("div", {
            children: [e.jsx("div", {
                className: "font-bold text-lg",
                children: r
            }), e.jsx("div", {
                className: "text-xs text-muted-foreground",
                children: "Produtos"
            })]
        }), e.jsxs("div", {
            children: [e.jsx("div", {
                className: "font-bold text-lg",
                children: i
            }), e.jsx("div", {
                className: "text-xs text-muted-foreground",
                children: "Seguidores"
            })]
        })]
    })]
});
export {n as StoreInfo};
