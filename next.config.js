/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
