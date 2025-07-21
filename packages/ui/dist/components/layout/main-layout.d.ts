import React from 'react';
interface MainLayoutProps {
    className?: string;
    children?: React.ReactNode;
}
export declare function MainLayout({ className, children }: MainLayoutProps): import("react/jsx-runtime").JSX.Element;
interface MainContentProps {
    className?: string;
    children?: React.ReactNode;
}
export declare function MainContent({ className, children }: MainContentProps): import("react/jsx-runtime").JSX.Element;
interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}
export declare function Container({ className, children }: ContainerProps): import("react/jsx-runtime").JSX.Element;
interface PageHeaderProps {
    className?: string;
    children?: React.ReactNode;
}
export declare function PageHeader({ className, children }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
