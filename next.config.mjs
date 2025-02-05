/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "armancompany.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
