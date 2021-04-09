/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;

  const s1arr = s1.split('').sort();
  const s2arr = s2.split('').sort();

  for (let i = 0; i < s1arr.length; i++) {
    if (i === 0) {
      const s1ch = s1arr.filter((item) => s1arr[i] === item).length;
      const s2ch = s2arr.filter((item) => s1arr[i] === item).length;
      res += s1ch < s2ch ? s1ch : s2ch;
    } else if (s1arr[i] !== s1arr[i - 1]) {
      const s1ch = s1arr.filter((item) => s1arr[i] === item).length;
      const s2ch = s2arr.filter((item) => s1arr[i] === item).length;
      res += s1ch < s2ch ? s1ch : s2ch;
    }
  }

  return res;
}

module.exports = getCommonCharacterCount;
