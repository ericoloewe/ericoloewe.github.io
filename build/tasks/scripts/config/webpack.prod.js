/**
 * Webpack prod
 */
import merge from 'webpack-merge';
import { commonWebpackConfig } from './webpack.common';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export const prodWebpackConfig = merge(commonWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
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
  }
})
