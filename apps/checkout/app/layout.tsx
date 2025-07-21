import { Inter } from 'next/font/google'
import './globals.css'
import { RootLayoutWrapper } from '@microfrontends/ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Checkout',
  description: 'Checkout microfrontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayoutWrapper
      brandName="MicroStore"
      brandHref="/"
      navLinks={[
        { href: '/products', label: 'Products' },
        { href: '/checkout', label: 'Checkout' }
      ]}
      className={inter.className}
    >
      {children}
    </RootLayoutWrapper>
  )
}