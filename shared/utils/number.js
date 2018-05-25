/**
 * Utils > Number
 */

export class NumberUtil {
  static togglePattern(price) {
    return `${price}`
      .replace(/(\,)+/g, '_')
      .replace(/(\.)+/g, ',')
      .replace(/(\_)+/g, '.')
  }
}
