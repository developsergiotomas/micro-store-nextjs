'use client'

import { useState, useMemo } from 'react'
import { Product } from '@microfrontends/shared'
import { ProductGrid } from './product-grid'
import { ProductSearch } from './product-search'

interface FilterableProductGridProps {
  products: Product[]
}

export function FilterableProductGrid({ products }: FilterableProductGridProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products
    }

    const query = searchQuery.toLowerCase()
    return products.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )
  }, [products, searchQuery])

  return (
    <>
      <ProductSearch onSearch={setSearchQuery} />
      <ProductGrid products={filteredProducts} />
    </>
  )
}