'use client'

import { useEffect } from 'react'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Container, PageHeader } from '@microfrontends/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container>
      <PageHeader>Our Products</PageHeader>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Something went wrong!</CardTitle>
          <CardDescription>
            We had trouble loading the products. Please try again.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={reset} className="w-full">
            Try again
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}