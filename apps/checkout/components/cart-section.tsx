'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@microfrontends/ui'
import { CartItem } from '@microfrontends/shared'

interface CartSectionProps {
  onCartChange: (cart: CartItem[], total: number) => void
}

export function CartSection({ onCartChange }: CartSectionProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      const cartItems = JSON.parse(savedCart)
      setCart(cartItems)
      const cartTotal = cartItems.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)
      onCartChange(cartItems, cartTotal)
    }

    const handleCartUpdate = (event: any) => {
      const updatedCart = event.detail
      setCart(updatedCart)
      const cartTotal = updatedCart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)
      onCartChange(updatedCart, cartTotal)
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    return () => window.removeEventListener('cartUpdated', handleCartUpdate)
  }, [onCartChange])

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    const cartTotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    onCartChange(updatedCart, cartTotal)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Cart</CardTitle>
        <CardDescription>Review your selected items</CardDescription>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <p className="text-muted-foreground">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <img src={item.image} alt={item.title} className="size-16 object-contain" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  <p className="font-bold">${item.price.toFixed(2)}</p>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}