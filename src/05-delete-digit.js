/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    const arr2 = arr.slice();
    arr2.splice(i, 1);
    // console.log(arr2);
    if (+arr2.join('') > max) {
      max = +arr2.join('');
    }
  }
  return max;
}

module.exports = deleteDigit;
