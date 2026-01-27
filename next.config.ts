import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  basePath: "mustafagumuss.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
