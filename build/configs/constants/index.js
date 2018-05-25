/**
 * Constants
 */
import { EnvConfig } from '..'
import { development } from './development'
import { production } from './production'
import { common } from './common'

let currentEnvironmentConstants = development

if (EnvConfig.isPrd()) {
  currentEnvironmentConstants = production
}

export const buildConstants = Object.assign(common, currentEnvironmentConstants)
