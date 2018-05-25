/**
 * Images task
 */
import gifsicle from "imagemin-gifsicle"
import gulp from "gulp"
import imagemin from "gulp-imagemin"
import jpegtran from "imagemin-jpegtran"
import optipng from "imagemin-optipng"
import path from "path"
import svgo from "imagemin-svgo"

import { buildConfig, EnvConfig } from "../configs"

class ImagesTask {
  create() {
    gulp.task('images', gulp.parallel(
      this._copyImages.bind(this)
    ))
  }

  _copyImages() {
    let stream = gulp.src(path.resolve(buildConfig.SOURCE_PATH, 'images/**/*.*'))

    if (EnvConfig.isPrd()) {
      stream = stream.pipe(imagemin([
        gifsicle({ interlaced: true }),
        jpegtran({ progressive: true }),
        optipng({ optimizationLevel: 3 }),
        svgo({ plugins: [{ removeViewBox: true }] })
      ]))
    }

    return stream
      .pipe(gulp.dest(path.resolve(buildConfig.DIST_PATH, 'images')))
  }
}

export const imagesTask = new ImagesTask()
