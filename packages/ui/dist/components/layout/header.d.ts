import React from 'react';
interface HeaderProps {
    className?: string;
    children?: React.ReactNode;
}
export declare function Header({ className, children }: HeaderProps): import("react/jsx-runtime").JSX.Element;
interface HeaderContainerProps {
    className?: string;
    children?: React.ReactNode;
}
export declare function HeaderContainer({ className, children }: HeaderContainerProps): import("react/jsx-runtime").JSX.Element;
interface HeaderBrandProps {
    href?: string;
    children?: React.ReactNode;
    className?: string;
}
export declare function HeaderBrand({ href, children, className }: HeaderBrandProps): import("react/jsx-runtime").JSX.Element;
interface HeaderNavProps {
    className?: string;
    children?: React.ReactNode;
}
export declare function HeaderNav({ className, children }: HeaderNavProps): import("react/jsx-runtime").JSX.Element;
interface HeaderNavLinkProps {
    href: string;
    children?: React.ReactNode;
    className?: string;
}
export declare function HeaderNavLink({ href, children, className }: HeaderNavLinkProps): import("react/jsx-runtime").JSX.Element;
export {};
