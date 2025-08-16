/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === "production";
const repo = "great-river";

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
  basePath: isProd ? `/${repo}` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  env: { 
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
    NEXT_PUBLIC_SITE_ORIGIN: isProd ? "https://arthallj.github.io" : "http://localhost:3000"},
}

export default nextConfig
