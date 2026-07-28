import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict Mode's dev-only double-invoke of mount effects creates and disposes the
  // Three.js avatar's WebGL context twice in rapid succession (Phase 7); some GPU
  // drivers can't recover from that and the canvas is left permanently blank with a
  // "Context Lost" error. No effect on production builds — double-invoke is dev-only.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arielbehar-portfolio.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
