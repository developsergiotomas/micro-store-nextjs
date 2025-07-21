import { Container, PageHeader } from '@microfrontends/ui'
import { CheckoutClient } from '@/components/checkout-client'

export default function CheckoutPage() {
  return (
    <Container>
      <PageHeader>Checkout</PageHeader>
      <CheckoutClient />
    </Container>
  )
}