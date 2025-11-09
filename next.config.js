/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["v0.blob.com", "w0.peakpx.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v0.blob.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "w0.peakpx.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
