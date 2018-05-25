/**
 * Webpack config
 */
import fs from 'fs'
import path from 'path'
import { buildConfig } from '../../../configs'

export const commonWebpackConfig = {
  context: buildConfig.SOURCE_PATH,
  entry: getEntry(),
  output: {
    filename: 'scripts/[name].bundle.js',
    path: buildConfig.DIST_PATH,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      },
      {
        test: /\.((json)|(js))$/,
        exclude: /(node_modules)/,
        loader: 'current-env'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../../../configs/loaders')
    ]
  }
}

function getEntry() {
  const entry = {}

  fs.readdirSync(buildConfig.SCRIPTS_PATH)
    .filter(file => file.endsWith('.js'))
    .forEach(filename => {
      const moduleName = filename.replace('.js', '')
      const filePath = path.resolve(buildConfig.SCRIPTS_PATH, filename)

      entry[moduleName] = [filePath]
    })

  return entry
}
