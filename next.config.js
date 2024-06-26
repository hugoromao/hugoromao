/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'media.dev.to' }
    ]
  }
};

module.exports = nextConfig;
