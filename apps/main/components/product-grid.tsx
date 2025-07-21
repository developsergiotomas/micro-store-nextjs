'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button, useToast } from '@microfrontends/ui'
import { Product } from '@microfrontends/shared'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { toast } = useToast()

  const addToCart = (product: Product) => {
    const existingCart = localStorage.getItem('cart')
    const cart = existingCart ? JSON.parse(existingCart) : []
    
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    }
    cart.push(cartItem)
    localStorage.setItem('cart', JSON.stringify(cart))
    
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }))
    
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart`,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader>
            <div className="aspect-square relative mb-4">
              <img 
                src={product.image} 
                alt={product.title}
                className="object-contain w-full h-full"
              />
            </div>
            <CardTitle className="line-clamp-2">{product.title}</CardTitle>
            <CardDescription className="line-clamp-3">{product.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
              <div className="text-sm text-muted-foreground">
                ⭐ {product.rating.rate} ({product.rating.count})
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => addToCart(product)} className="w-full">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}