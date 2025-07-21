'use client'

import React from 'react'
import { 
  MainLayout, 
  MainContent, 
  Header, 
  HeaderContainer, 
  HeaderBrand, 
  HeaderNav, 
  HeaderNavLink,
  Toaster 
} from './index'


interface RootLayoutProps {
  children: React.ReactNode
  brandName: string
  brandHref?: string
  navLinks?: Array<{
    href: string
    label: string
  }>
}

export function RootLayout({ 
  children, 
  brandName, 
  brandHref = '/main',
  navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/checkout', label: 'Checkout' }
  ]
}: RootLayoutProps) {
  return (
    <>
      <MainLayout>
        <Header>
          <HeaderContainer>
            <div className="mr-4 flex">
              <HeaderBrand href={brandHref}>
                <span className="font-bold">{brandName}</span>
              </HeaderBrand>
              <HeaderNav>
                {navLinks.map((link) => (
                  <HeaderNavLink key={link.href} href={link.href}>
                    {link.label}
                  </HeaderNavLink>
                ))}
              </HeaderNav>
            </div>
          </HeaderContainer>
        </Header>
        <MainContent>{children}</MainContent>
      </MainLayout>
      <Toaster />
    </>
  )
}

interface RootLayoutWrapperProps {
  children: React.ReactNode
  brandName: string
  brandHref?: string
  navLinks?: Array<{
    href: string
    label: string
  }>
  className?: string
}

export function RootLayoutWrapper({ 
  children, 
  className,
  ...props 
}: RootLayoutWrapperProps) {
  return (
    <html lang="en">
      <body className={className}>
        <RootLayout {...props}>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}