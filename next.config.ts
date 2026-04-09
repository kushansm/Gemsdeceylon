import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Correcting the Turbopack root config if using Next.js 15+
  // Note: If 'turbopack' key is still flagged, we will remove it and rely on lockfile cleanup.
};

export default nextConfig;
