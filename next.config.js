/** @type {import('next').NextConfig} */

const isExport = process.argv.some(a => a.includes('export'));
const isDev = process.argv.some(a => a.includes('dev'));
const basePath = isDev ? '' : '';

module.exports = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/index' },
    }
  },
  env: {
    BASE_PATH: basePath
  },
  images: isExport ? {
    loader: "imgix",
    path: "",
  } : undefined,
}
