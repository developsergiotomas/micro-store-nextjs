import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../lib/utils';
export function MainLayout({ className, children }) {
    return (_jsx("div", { className: cn("relative flex min-h-screen flex-col", className), children: children }));
}
export function MainContent({ className, children }) {
    return (_jsx("main", { className: cn("flex-1", className), children: children }));
}
export function Container({ className, children }) {
    return (_jsx("div", { className: cn("container py-8", className), children: children }));
}
export function PageHeader({ className, children }) {
    return (_jsx("h1", { className: cn("text-3xl font-bold mb-8", className), children: children }));
}
