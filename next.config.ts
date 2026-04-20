import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Mandatory for S3: generates the 'out' folder
  output: 'export', 

  // 2. Required for S3: S3 cannot resize images on-the-fly
  images: {
    unoptimized: true,
  },

  // 3. Recommended for S3/CloudFront:
  // This turns /about into /about/index.html instead of /about.html
  // S3 handles directory-style links much better than standalone .html files
  trailingSlash: true,

  // 4. Standard best practice
  reactStrictMode: true,
};

export default nextConfig;