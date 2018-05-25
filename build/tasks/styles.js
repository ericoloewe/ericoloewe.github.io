/**
 * Server task
 */
import gulp from "gulp"
import gulpAutoprefixer from "gulp-autoprefixer"
import gulpBase64 from "gulp-base64"
import gulpCsso from "gulp-csso"
import gulpReplace from "gulp-replace"
import gulpSass from "gulp-sass"
import gulpSourcemaps from "gulp-sourcemaps"
import path from "path"

import { buildConfig, EnvConfig, buildConstants } from "../configs";
import { serverTask } from "./server/server";

class StylesTask {
  create() {
    gulp.task('styles', gulp.parallel(
      this._buildStyles.bind(this),
      'hints:styles'
    ))
  }

  _buildStyles() {
    let stream = gulp
      .src(path.resolve(buildConfig.SOURCE_PATH, 'stylesheet/*.*'))
      .pipe(gulpSourcemaps.init())
      .pipe(gulpSass({ errLogToConsole: true }))
      .pipe(gulpAutoprefixer({ browsers: ['last 5 version'] }))

    this._replaceFakePaths(stream);

    if (EnvConfig.isPrd()) {
      stream = stream
        .pipe(gulpBase64({ extensions: ['svg'] }))
        .pipe(gulpCsso({ restructure: true, sourceMap: false }))
        .pipe(gulpReplace(/v=\$cache/g, `v=${Date.now()}`))
    } else if (EnvConfig.isDev()) {
      stream = stream
        .pipe(gulpSourcemaps.write())
        .pipe(serverTask.stream())
    }

    return stream
      .pipe(gulp.dest(path.resolve(buildConfig.DIST_PATH, 'styles')))
  }

  _replaceFakePaths(stream) {
    Object.keys(buildConstants.FILE_FAKE_PATH).forEach(k => (
      stream.pipe(gulpReplace(buildConstants.FILE_FAKE_PATH[k], buildConstants.FILE_REAL_PATH[k]))
    ))
  }
}

export const stylesTask = new StylesTask()
