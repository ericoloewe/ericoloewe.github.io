/**
 * Webpack configuration
 */

import { commonWebpackConfig } from "./webpack.common";
import { prodWebpackConfig } from "./webpack.prod";
import { devWebpackConfig } from "./webpack.dev";
import { EnvConfig } from "../../../configs";

let currentWebpackConfig = devWebpackConfig;

if (EnvConfig.isPrd()) {
  currentWebpackConfig = prodWebpackConfig;
}

export { currentWebpackConfig };
