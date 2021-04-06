/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let final = 0;
  final += matrix[0].reduce((acc, key) => acc + key);
  for (let i = 1; i < matrix.length; i++) {
    const matrixElement = matrix[i];
    for (let b = 0; b < matrixElement.length; b++) {
      if (matrix[i - 1][b] !== 0) {
        final += matrixElement[b];
      }
    }
  }
  return final;
}

module.exports = getMatrixElementsSum;
