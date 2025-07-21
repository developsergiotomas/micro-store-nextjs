import Link from 'next/link'
import { Container, PageHeader, Button } from '@microfrontends/ui'

export default function HomePage() {
  return (
    <Container>
      <PageHeader>Bem-vindo à Nossa Loja</PageHeader>
      <div className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Descubra nossos produtos incríveis
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore nossa seleção cuidadosamente escolhida de produtos de alta qualidade.
          Temos tudo o que você precisa para tornar sua vida mais fácil e agradável.
        </p>
        <Link href="/products">
          <Button size="lg">Ver Produtos</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Qualidade Garantida</h3>
          <p className="text-gray-600">Todos os nossos produtos passam por rigoroso controle de qualidade</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Entrega Rápida</h3>
          <p className="text-gray-600">Receba seus produtos em tempo recorde com nossa logística eficiente</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Suporte Dedicado</h3>
          <p className="text-gray-600">Nossa equipe está sempre pronta para ajudar você</p>
        </div>
      </div>
    </Container>
  )
}