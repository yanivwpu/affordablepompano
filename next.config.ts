import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/food-and-eats",
        destination: "/food",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
