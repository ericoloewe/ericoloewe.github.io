/**
 * Server task
 */
import gulp from "gulp"
import path from "path"
import { buildConfig, EnvConfig } from "../configs"
import { serverTask } from "."

class WatchTask {
  create() {
    this._watchComponents()
    this._watchScripts()
    this._watchViews()
    this._watchStyles()
    this._watchFonts()
    this._watchImages()

    gulp.task('watch', gulp.parallel(
      'watch:components',
      'watch:scripts',
      'watch:views',
      'watch:styles',
      'watch:fonts',
      'watch:images'
    ))
  }

  _watchComponents() {
    gulp.task('watch:components', () => new Promise((resolve, reject) => {
      try {
        gulp.watch('src/components/**/*.js')
          .on('change', gulp.series(
            gulp.parallel(
              'scripts',
              'views'
            ),
            serverTask.reload
          ))
        resolve()
      } catch (ex) {
        reject(ex)
      }
    }))
  }

  _watchScripts() {
    gulp.task('watch:scripts', () => new Promise((resolve, reject) => {
      try {
        gulp.watch('src/scripts/**/*.js')
          .on('change', gulp.series('scripts', serverTask.reload))
        resolve()
      } catch (ex) {
        reject(ex)
      }
    }))
  }

  _watchViews() {
    gulp.task('watch:views', () => new Promise((resolve, reject) => {
      try {
        gulp.watch([
          'src/views/**/*.js',
          'src/views/**/*.jsx'
        ]).on('change', gulp.series('views', serverTask.reload))
        resolve()
      } catch (ex) {
        reject(ex)
      }
    }))
  }

  _watchStyles() {
    gulp.task('watch:styles', () => new Promise((resolve, reject) => {
      try {
        gulp.watch('src/styles/**/*.scss')
          .on('change', gulp.series('styles'))
        resolve()
      } catch (ex) {
        reject(ex)
      }
    }))
  }

  _watchFonts() {
    gulp.task('watch:fonts', () => new Promise((resolve, reject) => {
      try {
        gulp.watch('src/fonts/**/*.*')
          .on('change', gulp.series('fonts', serverTask.reload))
        resolve()
      } catch (ex) {
        reject(ex)
      }
    }))
  }

  _watchImages() {
    gulp.task('watch:images', () => new Promise((resolve, reject) => {
      try {
        gulp.watch('src/images/**/*.*')
          .on('change', gulp.series('images', serverTask.reload))
        resolve()
      } catch (ex) {
        reject(ex)
      }
    }))
  }
}

export const watchTask = new WatchTask()
