/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify: true,
    images: {
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
        remotePatterns: []
      },
}

module.exports = nextConfig
