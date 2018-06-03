/**
 * Webpack prod
 */
import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';
import { commonWebpackConfig } from './webpack.common';

export const prodWebpackConfig = merge(commonWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js)|(svg)|(html)?$/,
        exclude: /node_modules/,
        loader: 'cache-version'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        sourceMap: false
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
