/**
 * Server task
 */
import gulp from "gulp"
import gulpStylelint from "gulp-stylelint"
import eslint from "gulp-eslint";
import path from "path"
import { buildConfig } from "../configs";

class HintsTask {
  create() {
    gulp.task('hints:scripts', this._esLint.bind(this))
    gulp.task('hints:views', this._esLint.bind(this))
    gulp.task('hints:styles', this._styleLint.bind(this))

    gulp.task('hints', gulp.parallel(
      'hints:scripts',
      'hints:views',
      'hints:styles'
    ))
  }

  _esLint() {
    return Promise.resolve()
    // return gulp.src(path.resolve(buildConfig.SOURCE_PATH, 'scripts/**/*.js'))
      // .pipe(eslint())
      // .pipe(eslint.format())
      // .pipe(eslint.failAfterError());
  }

  _esLintViews() {
    return Promise.resolve()
    // return gulp.src(path.resolve(buildConfig.SOURCE_PATH, 'views/**/*.js'))
      // .pipe(eslint())
      // .pipe(eslint.format())
      // .pipe(eslint.failAfterError());
  }

  _styleLint() {
    return Promise.resolve()
    // return gulp.src(path.resolve(buildConfig.SOURCE_PATH, 'styles/**/*.scss'))
      // .pipe(gulpStylelint({
      //   failAfterError: true,
      //   fix: true,
      //   reporters: [
      //     { formatter: 'string', console: true }
      //   ]
      // }))
  }
}

export const hintsTask = new HintsTask()
