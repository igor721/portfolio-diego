import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-diego" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-diego/" : "",
  trailingSlash: true,
};

export default nextConfig;
