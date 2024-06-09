/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/dep',
    output: 'export',
   distDir: 'dist',
   images: {
    unoptimized: true,
   }
}

module.exports = nextConfig
