/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let b = 0;
  for (let i = array.length; i > 0; i--) {
    if (array[i] === value) {
      b = i;
      break;
    }
  }
  return b;
}

module.exports = findIndex;
