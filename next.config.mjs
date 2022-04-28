/** @type {import('next').NextConfig} */

import i18nextConfig from "./next-i18next.config.js";
const { i18n } = i18nextConfig;

const nextConfig = {
  reactStrictMode: true,
  i18n,
};

export default nextConfig;
