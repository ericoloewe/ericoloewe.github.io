/**
 * Utils > String
 */

export class StringUtil {
  static isEmpty(str) {
    return str == null
      || (typeof (str) === 'string'
        && str.length === 0)
  }

  /**
   * Check iso enconding
   * References:
   * http://www.ic.unicamp.br/~stolfi/EXPORT/www/ISO-8859-1-Encoding.html
   * https://stackoverflow.com/questions/32850898/how-to-check-if-a-string-has-any-non-iso-8859-1-characters-with-javascript
   *
   * @param {string} str
   */
  static isOfISOUnicode(str) {
    let strTest = /[^\u0000-\u00ff]/g.exec(str)

    return !Array.isArray(strTest) || strTest.length === 0
  }

  /**
   * Decode
   * From: https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
   */
  static decodeHtml(str) {
    var e = document.createElement('div')

    e.innerHTML = str

    // handle case of empty input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue
  }
}
