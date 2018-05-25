/**
 * Download task
 */
import gulp from "gulp"
import path from "path"
import inquirer from "inquirer"
import { buildConfig, Logger, buildConstants } from "../configs";

const LOGGER = new Logger(DownloadTask)

class DownloadTask {
  create() {
    gulp.task('download', gulp.series(
      this._askDownload.bind(this),
      this._downloadTemplates.bind(this)
    ))
  }

  async _askDownload() {
    const answers = await inquirer.prompt([
      {
        message: 'Username: ',
        name: 'username',
        type: 'input'
      },
      {
        message: 'Password: ',
        name: 'password',
        type: 'password'
      }
    ])
  }

  async _downloadTemplates() {
    let response = null;

    try {
      // response = await download(buildConfig.TEMP_PATH)
    } catch (rejection) {
      throw rejection.error
    }

    return response
  }
}

export const downloadTask = new DownloadTask()
