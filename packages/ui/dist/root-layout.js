'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { MainLayout, MainContent, Header, HeaderContainer, HeaderBrand, HeaderNav, HeaderNavLink, Toaster } from './index';
export function RootLayout({ children, brandName, brandHref = '/main', navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/checkout', label: 'Checkout' }
] }) {
    return (_jsxs(_Fragment, { children: [_jsxs(MainLayout, { children: [_jsx(Header, { children: _jsx(HeaderContainer, { children: _jsxs("div", { className: "mr-4 flex", children: [_jsx(HeaderBrand, { href: brandHref, children: _jsx("span", { className: "font-bold", children: brandName }) }), _jsx(HeaderNav, { children: navLinks.map((link) => (_jsx(HeaderNavLink, { href: link.href, children: link.label }, link.href))) })] }) }) }), _jsx(MainContent, { children: children })] }), _jsx(Toaster, {})] }));
}
export function RootLayoutWrapper({ children, className, ...props }) {
    return (_jsx("html", { lang: "en", children: _jsx("body", { className: className, children: _jsx(RootLayout, { ...props, children: children }) }) }));
}
