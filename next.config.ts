import type { NextConfig } from "next";

// Optional sub-path for hosting under a prefix (e.g. "/momentum"). Unset on
// Vercel and locally, so the site is served from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // lib/asset.ts reads this to prefix public files.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  experimental: { agentUpgrade: "security" },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
