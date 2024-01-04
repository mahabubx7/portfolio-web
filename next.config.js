/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poly-screenshots.wellfound.com",
        port: "",
        pathname: "/Project/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/1200x720/**",
      },
    ],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB"],
  },
};

module.exports = nextConfig;
