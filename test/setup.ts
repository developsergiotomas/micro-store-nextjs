import '@testing-library/jest-dom'

global.vi = globalThis.vi

globalThis.vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: globalThis.vi.fn(),
    replace: globalThis.vi.fn(),
    prefetch: globalThis.vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

globalThis.vi.mock('next/link', () => ({
  default: ({ children, href }: { children: any; href: string }) => {
    return {
      type: 'a',
      props: { href, children },
    }
  },
}))

globalThis.vi.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter-font',
  }),
}))