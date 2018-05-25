/**
 * Bootstrap file
 */
import { taskManager } from './task-manager'
import gulp from "gulp"

module.exports = class Bootstrap {
  static start() {
    new Bootstrap()
  }

  constructor() {
    this.create()
  }

  create() {
    taskManager.create()
    gulp.task('default', gulp.series('server'))
  }
}
