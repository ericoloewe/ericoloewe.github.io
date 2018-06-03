/**
 * Webpack dev
 */
import merge from 'webpack-merge';
import webpack from 'webpack';
import { commonWebpackConfig } from './webpack.common';

export const devWebpackConfig = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})
