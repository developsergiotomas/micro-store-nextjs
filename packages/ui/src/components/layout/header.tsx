import React from 'react'
import { cn } from '../../lib/utils'

interface HeaderProps {
  className?: string
  children?: React.ReactNode
}

export function Header({ className, children }: HeaderProps) {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      {children}
    </header>
  )
}

interface HeaderContainerProps {
  className?: string
  children?: React.ReactNode
}

export function HeaderContainer({ className, children }: HeaderContainerProps) {
  return (
    <div className={cn("container flex h-14 items-center", className)}>
      {children}
    </div>
  )
}

interface HeaderBrandProps {
  href?: string
  children?: React.ReactNode
  className?: string
}

export function HeaderBrand({ href = "/", children, className }: HeaderBrandProps) {
  return (
    <a className={cn("mr-6 flex items-center space-x-2", className)} href={href}>
      {children}
    </a>
  )
}

interface HeaderNavProps {
  className?: string
  children?: React.ReactNode
}

export function HeaderNav({ className, children }: HeaderNavProps) {
  return (
    <nav className={cn("flex items-center space-x-6 text-sm font-medium", className)}>
      {children}
    </nav>
  )
}

interface HeaderNavLinkProps {
  href: string
  children?: React.ReactNode
  className?: string
}

export function HeaderNavLink({ href, children, className }: HeaderNavLinkProps) {
  return (
    <a href={href} className={cn("transition-colors hover:text-foreground/80", className)}>
      {children}
    </a>
  )
}