'use client'

import { useState } from 'react'
import { Input } from '@microfrontends/ui'

interface ProductSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function ProductSearch({ onSearch, placeholder = "Buscar produtos..." }: ProductSearchProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full"
      />
    </div>
  )
}