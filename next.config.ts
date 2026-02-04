import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'final-build',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
