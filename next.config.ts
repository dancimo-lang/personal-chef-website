import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  // Add static file handling
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/images/:path*',
      },
    ];
  },
};

export default nextConfig;
