import React from 'react'
import { cn } from '../../lib/utils'

interface MainLayoutProps {
  className?: string
  children?: React.ReactNode
}

export function MainLayout({ className, children }: MainLayoutProps) {
  return (
    <div className={cn("relative flex min-h-screen flex-col", className)}>
      {children}
    </div>
  )
}

interface MainContentProps {
  className?: string
  children?: React.ReactNode
}

export function MainContent({ className, children }: MainContentProps) {
  return (
    <main className={cn("flex-1", className)}>
      {children}
    </main>
  )
}

interface ContainerProps {
  className?: string
  children?: React.ReactNode
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("container py-8", className)}>
      {children}
    </div>
  )
}

interface PageHeaderProps {
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ className, children }: PageHeaderProps) {
  return (
    <h1 className={cn("text-3xl font-bold mb-8", className)}>
      {children}
    </h1>
  )
}