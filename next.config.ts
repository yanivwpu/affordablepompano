import type { NextConfig } from "next";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-LPS1RR2ZFS";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: gaMeasurementId,
  },
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
