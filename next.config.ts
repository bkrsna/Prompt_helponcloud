import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Transpile packages to ensure compatibility
  transpilePackages: ["lucide-react", "framer-motion"],

  experimental: {
    // Optimize imports for heavy packages to reduce bundle size
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
