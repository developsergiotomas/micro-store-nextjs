import { Suspense } from 'react'
import { Container, PageHeader } from '@microfrontends/ui'
import { getProducts } from '@/lib/api'
import { FilterableProductGrid } from '@/components/filterable-product-grid'
import { LoadingSkeleton } from '@/components/loading-skeleton'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <Container>
      <PageHeader>Nossos Produtos</PageHeader>
      <div className="mb-8">
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Explore nossa coleção completa de produtos. Cada item foi cuidadosamente selecionado 
          para garantir a melhor qualidade e satisfação do cliente.
        </p>
      </div>
      <Suspense fallback={<LoadingSkeleton />}>
        <FilterableProductGrid products={products} />
      </Suspense>
    </Container>
  )
}