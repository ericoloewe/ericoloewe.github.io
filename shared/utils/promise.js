/**
 * Promise Util
 */

export class PromiseUtil {
  /**
   * @param {Function} check 
   * @param {number} intervalTime 
   * @param {number} maxTries 
   * @returns {Promise}
   */
  static async waitFor(check, intervalTime = 500, maxTries = 100) {
    let interval = null
    let tries = 0

    return new Promise((resolve, reject) => {
      checkFor()

      interval = setInterval(() => checkFor(), intervalTime)

      async function checkFor() {
        try {
          let checked = await Promise.resolve(check())

          if (checked) {
            resolve(checked)
            clearInterval(interval)
          } else if (tries === maxTries) {
            reject(checked)
            clearInterval(interval)
          }

          tries++
        } catch (ignore) {
          reject()
          clearInterval(interval)
        }
      }
    })
  }
}
