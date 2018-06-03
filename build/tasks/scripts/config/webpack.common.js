/**
 * Webpack config
 */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { buildConfig } from '../../../configs';

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
      },
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commonModules: {
          chunks: "initial",
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minChunks: 2,
          minSize: 0, // This is example is too small to create commons chunks,
          name: "common-modules"
        },
        vendor: {
          chunks: "initial",
          enforce: true,
          name: "vendor",
          priority: 10,
          test: /[\\/]node_modules[\\/]/,
        }
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
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
