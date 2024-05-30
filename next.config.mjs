/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = true;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "microphone=(), browsing-topics=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

const globalConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  swcMinify: false,
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
  },
  env: {
    APP_MODE: process.env.APP_MODE,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const provideConfig = withPWA({
  disable: isDevelopment,
  dest: "public",
  register: true,
  buildExcludes: [/app-build-manifest.json$/],
})(globalConfig);

export default provideConfig;
