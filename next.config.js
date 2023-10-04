/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GETFORM_URL: process.env.GETFORM_URL,
  },
  experimental: {
    images: true,
  },
  output: {
    export: true,
  },
};

module.exports = nextConfig;
