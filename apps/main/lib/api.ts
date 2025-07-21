import type { Product } from '@microfrontends/shared'

export type { Product }

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['products']
      },
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`)
    }
    
    return response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}