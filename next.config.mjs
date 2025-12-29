const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        '**/node_modules/@swc/**',
        '**/node_modules/eslint/**',
        '**/node_modules/typescript/**',
      ],
    },
  },
};

export default nextConfig;
