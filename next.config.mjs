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
    ],
  },
  output: "standalone",
};

export default nextConfig;
