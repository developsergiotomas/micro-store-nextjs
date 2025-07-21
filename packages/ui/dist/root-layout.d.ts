import React from 'react';
interface RootLayoutProps {
    children: React.ReactNode;
    brandName: string;
    brandHref?: string;
    navLinks?: Array<{
        href: string;
        label: string;
    }>;
}
export declare function RootLayout({ children, brandName, brandHref, navLinks }: RootLayoutProps): import("react/jsx-runtime").JSX.Element;
interface RootLayoutWrapperProps {
    children: React.ReactNode;
    brandName: string;
    brandHref?: string;
    navLinks?: Array<{
        href: string;
        label: string;
    }>;
    className?: string;
}
export declare function RootLayoutWrapper({ children, className, ...props }: RootLayoutWrapperProps): import("react/jsx-runtime").JSX.Element;
export {};
