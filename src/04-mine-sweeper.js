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
  const arr = [];

  for (let i = 0; i < matrix.length; i++) {
    arr.push([0, 0, 0]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        // на уровень вверх
        if (i - 1 >= 0) {
          if (j - 1 >= 0) {
            arr[i - 1][j - 1] = matrix[i - 1][j - 1] ? arr[i - 1][j - 1] : arr[i - 1][j - 1] + 1;
          }
          arr[i - 1][j] = matrix[i - 1][j] ? arr[i - 1][j] : arr[i - 1][j] + 1;
          if (j + 1 <= matrix[i].length - 1) {
            arr[i - 1][j + 1] = matrix[i - 1][j + 1] ? arr[i - 1][j + 1] : arr[i - 1][j + 1] + 1;
          }
        }
        // текущий уровень
        if (j - 1 >= 0) {
          arr[i][j - 1] = matrix[i][j - 1] ? arr[i][j - 1] : arr[i][j - 1] + 1;
        }
        arr[i][j]++;
        if (j + 1 <= matrix[i].length - 1) {
          arr[i][j + 1] = matrix[i][j + 1] ? arr[i][j + 1] : arr[i][j + 1] + 1;
        }
        // на уровень вниз
        if (i + 1 <= matrix.length - 1) {
          if (j - 1 >= 0) {
            arr[i + 1][j - 1] = matrix[i + 1][j - 1] ? arr[i + 1][j - 1] : arr[i + 1][j - 1] + 1;
          }
          arr[i + 1][j] = matrix[i + 1][j] ? arr[i + 1][j] : arr[i + 1][j] + 1;
          if (j + 1 <= matrix[i].length - 1) {
            arr[i + 1][j + 1] = matrix[i + 1][j + 1] ? arr[i + 1][j + 1] : arr[i + 1][j + 1] + 1;
          }
        }
      }
    }
  }

  return arr;
}

module.exports = minesweeper;
