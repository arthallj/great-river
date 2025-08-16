/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "",
  images: { unoptimized: true },
  trailingSlash: true,
  env: { 
    NEXT_PUBLIC_SITE_ORIGIN: isProd ? "https://gdkg.kr" : "http://localhost:3000"
  },
};

export default nextConfig
