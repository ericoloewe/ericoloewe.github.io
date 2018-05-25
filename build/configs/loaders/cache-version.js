/**
 * Cache version loader
 * @param {string} source 
 */
const ACTUAL_VERSION = Date.now()

export default function (source) {
  return source.replace(/v=\$cache/g, `v=${ACTUAL_VERSION}`);
};
