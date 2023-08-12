/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poly-screenshots.wellfound.com",
        port: "",
        pathname: "/Project/**",
      },
    ],
  },
};

module.exports = nextConfig;
