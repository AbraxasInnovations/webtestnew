/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper domain handling
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Enable image optimization for your domain
  images: {
    domains: ['abraxasinnovations.com'],
  },
};

export default nextConfig;
