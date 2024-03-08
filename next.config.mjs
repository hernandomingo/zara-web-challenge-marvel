/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
