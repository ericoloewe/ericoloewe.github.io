/**
 * Tasks > Webpack > Task
 */

import gulp from "gulp"
import webpack from "webpack"
import path from "path"
import { currentWebpackConfig } from "./config";

class ScriptsTask {
  create() {
    gulp.task('scripts', gulp.parallel(
      this._buildScripts.bind(this),
      'hints:scripts'
    ))
  }

  _buildScripts() {
    return new Promise((resolve, reject) => {
      const compiler = this._getCompiler()

      if (!compiler.isRunning) {
        compiler.isRunning = true;
        compiler.run((err, stats) => {
          compiler.isRunning = false;

          if (err || stats.hasErrors()) {
            reject(err || stats.toString({ colors: true }))
          } else {
            resolve(stats.toString({ colors: true }))
          }
        })
      }
    })
  }

  _getCompiler() {
    if (this.compiler == null) {
      this.compiler = webpack(currentWebpackConfig)
    }

    return this.compiler
  }
}

export const scriptsTask = new ScriptsTask()
