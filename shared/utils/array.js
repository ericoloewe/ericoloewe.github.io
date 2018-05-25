/**
 * Utils > Array
 */

export class ArrayUtil {
  static isEmpty(array) {
    return array == null
      || (Array.isArray(array)
        && array.length === 0);
  }
}
