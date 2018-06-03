/**
 * Server task
 */
import del from "del"
import gulp from "gulp"
import path from "path"
import { buildConfig, EnvConfig } from "../configs";

class CleanTask {
  create() {
    gulp.task('clean', gulp.series(this._cleanDist.bind(this)))
  }

  async _cleanDist() {
    if (EnvConfig.isPrd()) {
      await del(path.resolve(buildConfig.ROOT_PATH, 'index.html'))
    }

    await del(buildConfig.DIST_PATH)
  }
}

export const cleanTask = new CleanTask()
