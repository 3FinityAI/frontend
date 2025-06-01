/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // This is important: set the source directory to 'src'
    experimental: {
      // Only if needed for very new Next.js features
    },
    // Tell Next.js where to find the source code
    distDir: '.next'
  };
  
  module.exports = nextConfig;