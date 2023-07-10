/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply this header to all routes in your application
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60',
          },
        ],
      },
    ];
  },
  // generateEtags: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
