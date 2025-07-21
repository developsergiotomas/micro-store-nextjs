/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/checkout',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          basePath: false,
          destination: 'http://localhost:3000/main',
        },
        {
          source: '/products',
          basePath: false,
          destination: 'http://localhost:3000/main/products',
        },
        {
          source: '/products/:path*',
          basePath: false,
          destination: 'http://localhost:3000/main/products/:path*',
        },
        {
          source: '/main',
          destination: 'http://localhost:3000',
        },
        {
          source: '/main/:path*',
          destination: 'http://localhost:3000/:path*',
        },
      ],
    }
  },
}

export default nextConfig