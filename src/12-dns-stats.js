/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.').reverse();
    let dom = '';
    for (let j = 0; j < arr.length; j++) {
      dom += `.${arr[j]}`;
      if (dom in res) {
        res[dom]++;
      } else {
        res[dom] = 1;
      }
    }
  }
  return res;
}

module.exports = getDNSStats;
