/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 17) {
    return false;
  }
  const arr = n.split('-');
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (str.match(/[G-Z]/g) || (arr[i].length > 2)) {
      return false;
    }
  }
  return true;
}

module.exports = isMAC48Address;
