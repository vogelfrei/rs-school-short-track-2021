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
  let res;
  res = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== 0) {
          res += matrix[i][j];
        }
      }
    } else {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i - 1][j] !== 0) {
          res += matrix[i][j];
        }
      }
    }
  }

  return res;
}

module.exports = getMatrixElementsSum;
