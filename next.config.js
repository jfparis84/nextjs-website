/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    return cfg;
  },

  images: {
    unoptimized: true
  },
};

module.exports = nextConfig;
