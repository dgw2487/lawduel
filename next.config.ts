import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "lawduel.com",
      "www.lawduel.com",
      "lawduel-assets.s3.amazonaws.com",
      "lawduel-assets.s3.us-west-2.amazonaws.com",
      "lawduel-assets.s3.us-east-1.amazonaws.com",
      "images.unsplash.com",
      "cdn.pixabay.com",
    ],
  }
};

export default nextConfig;
