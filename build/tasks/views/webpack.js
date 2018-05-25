/**
 * Tasks > Webpack > Task
 */

import gulp from "gulp"
import webpack from "webpack"
import path from "path"
import { currentWebpackConfig } from "./config";
import { serverTask } from "../server/server";
import { EnvConfig, buildConfig } from "../../configs";

class ViewsTask {
  create() {
    let homeBuild

    gulp.task('views:build-home', () => this._buildHome())
    gulp.task('views:build', () => this._buildViews())
    gulp.task('views', gulp.parallel(
      gulp.series(
        'views:build',
        'views:build-home'
      ),
      'hints:views'
    ))
  }

  _buildViews() {
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

  _buildHome() {
    if (EnvConfig.isDev()) {
      return Promise.resolve()
    }

    return gulp.src(path.resolve(buildConfig.DIST_PATH, 'views/home.html'))
      .pipe(gulp.dest(path.resolve(buildConfig.DIST_PATH, '..')))
  }

  _getCompiler() {
    if (this.compiler == null) {
      this.compiler = webpack(currentWebpackConfig)
    }

    return this.compiler
  }
}

export const viewsTask = new ViewsTask()
