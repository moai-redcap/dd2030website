import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Enable static image imports for Next.js Image component
  images: {
    unoptimized: true,
  },
  // Add trailingSlash for better compatibility with static file serving
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  output: 'export',
  distDir: 'out',
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
}

export default nextConfig
