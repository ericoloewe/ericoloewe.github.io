/**
 * Server task
 */
import gulp from "gulp"
import del from "del"
import { buildConfig } from "../configs";

class CleanTask {
  create() {
    gulp.task('clean', gulp.series(this._cleanDist.bind(this)))
  }

  _cleanDist() {
    return del(buildConfig.DIST_PATH)
  }
}

export const cleanTask = new CleanTask()
