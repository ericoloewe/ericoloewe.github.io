/**
 * @description logger
 */

import { EnvConfig, configConstants } from ".";
import chalk from "chalk";

const { ENABLED, COMPLEX, HARD } = configConstants.LOGGER;

export class Logger {
  constructor(actualInstance) {
    this.actualInstance = actualInstance
  }

  log() {
    this._logOfType("log", this._parseToArray(arguments));
  }

  debug() {
    if (EnvConfig.isVerbose() || HARD) {
      this._logOfType("debug", this._parseToArray(arguments));
    }
  }

  info() {
    this._logOfType("info", this._parseToArray(arguments));
  }

  warn() {
    this._logOfType("warn", this._parseToArray(arguments));
  }

  error() {
    this._logOfType("error", this._parseToArray(arguments));
  }

  _logOfType(type, args) {
    if (ENABLED) {
      let defaultLog = [];

      if (COMPLEX) {
        let instanceName = "Logger";

        if (typeof (this.actualInstance) === "object") {
          instanceName = this.actualInstance.name;
        } else if (typeof (this.actualInstance) === "string") {
          instanceName = this.actualInstance;
        }

        defaultLog = [
          ...defaultLog,
          `${chalk.blue(new Date().toISOString())}: ${this._parseTypeWithColor(type)}`,
          `${chalk.green(instanceName)}:`
        ];
      }

      if (type === "debug") {
        type = "log";
      }

      console[type].apply(console, defaultLog.concat(args));
    }
  }

  _parseToArray(args) {
    const array = [];

    for (let index = 0; index < args.length; index++) {
      array.push(args[index]);
    }

    return array;
  }

  _parseTypeWithColor(type = 'log') {
    let nextType = type.toUpperCase();

    switch (type.toLowerCase()) {
      case 'error': {
        nextType = chalk.red(nextType);
        break;
      }
      case 'warn': {
        nextType = chalk.yellow(nextType);
        break;
      }
      case 'debug': {
        nextType = chalk.magenta(nextType);
        break;
      }
      case 'info':
      case 'log': {
        nextType = chalk.cyan(nextType);
        break;
      }
    }

    return nextType;
  }
}
