/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["v0.blob.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig

