/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const min = String(n).split('').sort();
  const num = String(n).split('');
  num.splice(num.indexOf(min[0], 0), 1);
  return Number(num.join(''));
}

module.exports = deleteDigit;
