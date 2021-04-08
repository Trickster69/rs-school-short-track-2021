/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const obj = {};
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      if ((arr[i + 1] !== arr[i]) && arr[i - 1] !== arr[i]) {
        ++obj[arr[i].toUpperCase()];
      } else {
        ++obj[arr[i]];
      }
    } else {
      obj[arr[i]] = 1;
    }
  }

  const final = [];
  Object.keys(obj).forEach((key) => {
    if (obj[key] > 1) {
      final.push(`${obj[key]}${key}`);
    } else if (obj[key] <= 1) {
      final.push(key);
    } else {
      final.push(key);
    }
  });

  return final.join('').toLowerCase();
}

module.exports = encodeLine;
