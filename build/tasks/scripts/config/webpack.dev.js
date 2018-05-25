/**
 * Webpack dev
 */
import webpack from 'webpack';
import merge from 'webpack-merge';
import { commonWebpackConfig } from './webpack.common';

export const devWebpackConfig = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map'
})
