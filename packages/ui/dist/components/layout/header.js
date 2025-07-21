import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../lib/utils';
export function Header({ className, children }) {
    return (_jsx("header", { className: cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className), children: children }));
}
export function HeaderContainer({ className, children }) {
    return (_jsx("div", { className: cn("container flex h-14 items-center", className), children: children }));
}
export function HeaderBrand({ href = "/", children, className }) {
    return (_jsx("a", { className: cn("mr-6 flex items-center space-x-2", className), href: href, children: children }));
}
export function HeaderNav({ className, children }) {
    return (_jsx("nav", { className: cn("flex items-center space-x-6 text-sm font-medium", className), children: children }));
}
export function HeaderNavLink({ href, children, className }) {
    return (_jsx("a", { href: href, className: cn("transition-colors hover:text-foreground/80", className), children: children }));
}
