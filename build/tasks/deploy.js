/**
 * Deploy task
 */
import gulp from "gulp"
import path from "path"
import inquirer from "inquirer"
import { buildConfig, Logger, buildConstants } from "../configs";
import { buildService } from "../services";

const LOGGER = new Logger(DeployTask)

class DeployTask {
  create() {
    this.answers = {}

    gulp.task('deploy', gulp.series(
      this._askEnvironmentConfigs.bind(this),
      'build',
      this._askConfirm.bind(this),
      this._publishDist.bind(this)
    ))
  }

  async _askConfirm() {
    this.answers = Object.assign(this.answers, await inquirer.prompt([{
      message: buildService.getDistStats(),
      name: 'confirmDeploy',
      type: 'confirm',
      default: true
    }]))
  }

  async _askEnvironmentConfigs() {
    this.answers = Object.assign(this.answers, await inquirer.prompt([
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
    ]))
  }

  async _publishDist() {
    let response = null;
    const { answers } = this

    if (answers.confirmDeploy) {
      try {
        // response = await publish(buildConfig.DIST_PATH)

        response
          .filter(f => f.error != null)
          .forEach(f => this._showErrorMessage(f.filePath, f.error))
        this._showStats(response)
      } catch (rejection) {
        rejection.files.forEach(this._showErrorMessage)
        this._showStats(response)
        throw rejection.error
      }
    } else {
      LOGGER.warn(chalk.yellow('Deploy not confirmed'))
    }

    return response
  }

  _showErrorMessage(f, error) {
    LOGGER.error(`There are some problem to upload the file: ${f}`, error)
  }

  _showStats(files = []) {
    const total = files.length
    const withProblemCount = files.filter(f => f.error != null).length
    const okFilesCount = total - withProblemCount

    LOGGER.info(`Try to upload ${total} files`)
    LOGGER.info(`${okFilesCount} files uploaded`)
    LOGGER.info(`${withProblemCount} had problem`)
  }
}

export const deployTask = new DeployTask()
