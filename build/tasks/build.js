/**
 * Server task
 */
import gulp from "gulp"

class BuildTask {
  create() {
    gulp.task('build', gulp.series(
      'clean',
      gulp.parallel(
        'views',
        'scripts',
        'styles',
        'fonts',
        'images',
      )
    ))
  }
}

export const buildTask = new BuildTask()
