/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const final = [];
  let count = 0;
  if (matrix[0].includes(true)) {
    count = 1;
  }
  for (let i = 0; i < matrix.length; i++) {
    const arr = [];
    const str = matrix[i];
    for (let b = 0; b < str.length; b++) {
      if (i === 0) {
        if (b === 0) {
          if (str[b + 1] && matrix[i + 1][b]) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        } else if (b === 1) {
          if ((str[b - 1] || str[b + 1]) && (matrix[i + 1][b])) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        } else if (b === 2) {
          if (str[b - 1] && matrix[i + 1][b]) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        }
      } else if (i > 0 && i < matrix.length - 1) {
        if (b === 0) {
          if ((matrix[i - 1][b] || matrix[i + 1][b]) && (str[b + 1])) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        } else if (b === 1) {
          if ((matrix[i - 1][b] || matrix[i + 1][b]) && (str[b + 1] || str[b - 1])) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        } else if (b === 2) {
          if ((matrix[i - 1][b] || matrix[i + 1][b]) && (str[b - 1])) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        }
      } else if (i === matrix.length - 1) {
        if (b === 0) {
          if (str[b + 1] && matrix[i - 1][b]) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        } else if (b === 1) {
          if ((str[b - 1] || str[b + 1]) && (matrix[i - 1][b])) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        } else if (b === 2) {
          if (str[b - 1] && matrix[i - 1][b]) {
            arr.push(count + 1);
          } else {
            arr.push(count);
          }
        }
      }
    }
    final.push(arr);
  }
  return final;
}

module.exports = minesweeper;
