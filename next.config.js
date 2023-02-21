/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://ws-na1.spexlive.net ",
      },
    ];
  },
};

module.exports = nextConfig;
