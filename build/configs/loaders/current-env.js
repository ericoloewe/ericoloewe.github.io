/**
 * Current env loader
 * @param {string} source 
 */
import { buildConstants } from "..";

export default function (source) {
  Object.keys(buildConstants.FILE_FAKE_PATH).forEach(k => {
    source = source.replace(new RegExp(`${buildConstants.FILE_FAKE_PATH[k]}`, 'g'), buildConstants.FILE_REAL_PATH[k])
  })

  return source
};
