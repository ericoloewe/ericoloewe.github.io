/**
 * Webpack config
 */
import fs from 'fs'
import path from 'path'
import ReactToHtmlWebpackPlugin from "react-to-html-webpack-plugin"
import webpack from 'webpack';
import { buildConfig } from '../../../configs'

export const commonWebpackConfig = {
  context: buildConfig.SOURCE_PATH,
  entry: getEntry(),
  output: {
    path: buildConfig.DIST_PATH,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.((json)|(js))$/,
        exclude: /node_modules/,
        loader: 'current-env'
      },
      {
        test: /\.(html)|(svg)$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new ReactToHtmlWebpackPlugin({
      excludedChunks: ['containers']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
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

  fs.readdirSync(buildConfig.VIEWS_PATH)
    .filter(file => file.endsWith('.js'))
    .forEach(filename => {
      const moduleName = filename.replace('.js', '')
      const filePath = path.resolve(buildConfig.VIEWS_PATH, filename)

      entry[`views/${moduleName}`] = [filePath]
    })

  return entry
}
