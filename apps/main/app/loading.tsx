import { Container, PageHeader } from '@microfrontends/ui'
import { LoadingSkeleton } from '@/components/loading-skeleton'

export default function Loading() {
  return (
    <Container>
      <PageHeader>Our Products</PageHeader>
      <LoadingSkeleton />
    </Container>
  )
}