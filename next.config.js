module.exports = {
  reactStrictMode: false,
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    unoptimized: true,
  },
};