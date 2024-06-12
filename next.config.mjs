//next.config.mjs

import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Enable SWC minification for faster builds
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default withPWA(nextConfig);
