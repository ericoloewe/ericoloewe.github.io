/**
 * Environment configuration
 */

const VERBOSE = '-verbose'

export class EnvironmentConfiguration {
  static isDev() {
    const env = EnvironmentConfiguration._getCurrentEnv()

    return env == null
      || env === 'development'
  }

  static isPrd() {
    const env = EnvironmentConfiguration._getCurrentEnv()

    return env === 'production'
  }

  static isVerbose() {
    return process.argv.some(a => a.indexOf(VERBOSE) >= 0)
  }

  static _getCurrentEnv() {
    return process.env.NODE_ENV
  }
}

export { EnvironmentConfiguration as EnvConfig }
