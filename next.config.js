/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "github.com" },
      { hostname: "assets.adidas.com" },
      { hostname: "static.nike.com" },
    ],
  },
};

module.exports = nextConfig;
