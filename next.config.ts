import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
