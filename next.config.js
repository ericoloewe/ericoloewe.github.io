const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isDev ? undefined : basePath,
  assetPrefix: isDev ? undefined : `${basePath}/`,
  env: {
    BASE_PATH: basePath
  },
  reactStrictMode: false,
  images: { unoptimized: true },
  experimental: { missingSuspenseWithCSRBailout: false, },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      fs: false,
      child_process: false,
    }

    config.resolve.alias = {
      ...config.resolve.alias,
    }

    return config;
  }
}

module.exports = nextConfig;