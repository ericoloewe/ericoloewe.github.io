/**
 * Build service
 */

import chalk from "chalk";
import { buildConfig, Logger } from "../configs";
import { IOUtil } from "../utils";

const LOGGER = new Logger(BuildService)

class BuildService {
  getDistStats() {
    let stats = ''

    try {
      // TODO: improve this filters
      const files = IOUtil.getAllFiles(buildConfig.DIST_PATH)
      const fonts = files.filter(f => f.indexOf('fonts') > 0)
      const images = files.filter(f => f.indexOf('images') > 0)
      const resources = files.filter(f => f.indexOf('resources') > 0)
      const scripts = files.filter(f => f.indexOf('scripts') > 0)
      const styles = files.filter(f => f.indexOf('styles') > 0)
      const views = files.filter(f => f.indexOf('views') > 0)

      stats = (`
There are ${chalk.cyan(files.length)} files to upload:
  • ${chalk.blue('fonts')}: ${chalk.cyan(fonts.length)}
  • ${chalk.blue('images')}: ${chalk.cyan(images.length)}
  • ${chalk.blue('resources')}: ${chalk.cyan(resources.length)}
  • ${chalk.blue('scripts')}: ${chalk.cyan(scripts.length)}
  • ${chalk.blue('styles')}: ${chalk.cyan(styles.length)}
  • ${chalk.blue('views')}: ${chalk.cyan(views.length)}
`)
    } catch (ex) {
      LOGGER.warn('There are some problem to load stats')
    }

    return stats;
  }
}

export const buildService = new BuildService()
