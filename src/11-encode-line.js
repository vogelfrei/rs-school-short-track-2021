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
  const arr = str.split('');
  const res = [];
  let count = 1;
  let ch = '';

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      ch = arr[i];
    } else if (ch === arr[i]) {
      count++;
    } else {
      res.push((count === 1 ? '' : count) + ch);
      count = 1;
      ch = arr[i];
    }
  }
  res.push((count === 1 ? '' : count) + ch);
  return res.join('');
}

module.exports = encodeLine;
