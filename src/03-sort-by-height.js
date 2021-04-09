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
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (res[i] !== -1 && res[j] !== -1) {
        if (Number(res[i]) < Number(res[j])) {
          const temp = res[j];
          res[j] = res[i];
          res[i] = temp;
        }
      }
    }
  }

  return res;
}

module.exports = sortByHeight;
