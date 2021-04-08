/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let b = n;
  while (b >= 10) {
    b = String(b).split('').reduce((akk, key) => +akk + (+key));
  }
  return b;
}

module.exports = getSumOfDigits;
