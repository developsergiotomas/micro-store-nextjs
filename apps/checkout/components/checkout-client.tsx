'use client'

import { useState } from 'react'
import { CartItem } from '@microfrontends/shared'
import { CartSection } from './cart-section'
import { CheckoutForm } from './checkout-form'

export function CheckoutClient() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  const handleCartChange = (updatedCart: CartItem[], newTotal: number) => {
    setCart(updatedCart)
    setTotal(newTotal)
  }

  const handleCheckout = () => {
    alert('Checkout completed! Thank you for your purchase.')
    setCart([])
    setTotal(0)
    localStorage.removeItem('cart')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <CartSection onCartChange={handleCartChange} />
      </div>
      <div>
        <CheckoutForm 
          total={total} 
          cartLength={cart.length} 
          onCheckout={handleCheckout} 
        />
      </div>
    </div>
  )
}