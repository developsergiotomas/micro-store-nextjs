/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/main',
  async rewrites() {
    return {
      afterFiles: [
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
      ],
      beforeFiles: [
        
        {
          source: '/checkout',
          basePath: false,
          destination: 'http://localhost:3001/checkout',
        },
        {
          source: '/checkout/:path*',
          basePath: false,
          destination: 'http://localhost:3001/checkout/:path*',
        },
        
      ],

    }
  },
}

export default nextConfig