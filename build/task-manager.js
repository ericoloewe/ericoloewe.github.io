/**
 * Task manager
 */
import { buildTask, cleanTask, fontsTask, scriptsTask, serverTask, viewsTask, imagesTask, watchTask, stylesTask, hintsTask, deployTask, downloadTask } from './tasks'

class TaskManager {
  create() {
    hintsTask.create()
    viewsTask.create()
    scriptsTask.create()
    cleanTask.create()
    fontsTask.create()
    imagesTask.create()
    stylesTask.create()
    buildTask.create()
    deployTask.create()
    downloadTask.create()
    watchTask.create()
    serverTask.create()
  }
}

export const taskManager = new TaskManager()
