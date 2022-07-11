/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
};

module.exports = nextConfig;