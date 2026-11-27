import type { NextConfig } from "next";

// The site lives at https://www.tum-ai.com/momentum: tum-ai.com proxies /momentum/* here,
// and summit.tum-ai.com redirects there (vercel.json). Build with NEXT_PUBLIC_BASE_PATH=
// (empty) to serve from the root instead.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/momentum";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // lib/asset.ts reads this to prefix public files.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
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
