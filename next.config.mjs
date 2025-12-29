/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ← THIS IS THE FIX
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
