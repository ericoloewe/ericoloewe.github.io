/**
 * Server task
 */
import gulp from 'gulp'
import path from 'path'
import { buildConfig, EnvConfig } from '../configs'

class FontsTask {
  create() {
    gulp.task('fonts', gulp.parallel(
      this._copyFonts.bind(this)
    ))
  }

  _copyFonts() {
    return gulp.src(path.resolve(buildConfig.SOURCE_PATH, 'fonts/**/*.*'))
      .pipe(gulp.dest(path.resolve(buildConfig.DIST_PATH, 'fonts')))
  }
}

export const fontsTask = new FontsTask()
