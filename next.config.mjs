/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',   // 🔴 THIS IS THE FIX
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
