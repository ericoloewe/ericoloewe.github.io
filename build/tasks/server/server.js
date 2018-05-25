/**
 * Server task
 */
import browserSync from "browser-sync"
import gulp from "gulp"
import inquirer from "inquirer"
import path from "path"
import proxy from "proxy-middleware"
import url from "url"
import through2 from "through2"
import { buildConfig, Logger } from "../../configs"

const LOGGER = new Logger(ServerTask)

class ServerTask {
  constructor() {
    this.reload = this.reload.bind(this)
    this.stream = this.stream.bind(this)
  }

  create() {
    gulp.task('server:create', () => this._createServer())

    gulp.task('server', gulp.series(
      'build',
      'watch',
      'server:create'
    ))
  }

  reload() {
    return new Promise((resolve, reject) => {
      try {
        this.server.emitter.once('browser:reload', resolve)
        this.server.reload()
      } catch (ex) {
        reject(ex)
      }
    })
  }

  stream(props) {
    let stream = through2.obj()

    if (this.server != null) {
      stream = this.server.stream(props)
    }

    return stream
  }

  _createServer() {
    return new Promise((resolve, reject) => {
      const browserSyncServer = browserSync.create()

      browserSyncServer.init({
        open: false,
        server: {
          baseDir: './dist',
          index: 'views/home.html'
        }
      }, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })

      this.server = browserSyncServer
    })
  }
}

export const serverTask = new ServerTask()
