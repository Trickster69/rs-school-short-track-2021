/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const final = [];
  const sort = arr.filter((key) => key !== -1).sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      final.push(arr[i]);
    } else {
      final.push(Math.min(...sort));
      sort.splice(sort.indexOf(Math.min(...sort)), 1);
    }
  }
  return final;
}

module.exports = sortByHeight;
