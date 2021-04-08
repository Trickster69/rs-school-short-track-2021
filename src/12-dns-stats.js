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
  const obj = {};
  const final = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.').reverse();
    for (let b = 0; b < domain.length; b++) {
      if (obj[domain[b]] !== undefined) {
        ++obj[domain[b]];
      } else {
        obj[domain[b]] = 1;
      }
    }
  }

  const arr = [];
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (i === 0) {
      arr.push(`.${Object.keys(obj)[0]}:${obj[Object.keys(obj)[i]]}`);
    } else if (i === 1) {
      arr.push(`.${Object.keys(obj)[0]}.${Object.keys(obj)[1]}:${obj[Object.keys(obj)[i]]}`);
    } else if (i === 2) {
      arr.push(`.${Object.keys(obj)[0]}.${Object.keys(obj)[1]}.${Object.keys(obj)[2]}:${obj[Object.keys(obj)[i]]}`);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i].split(':');
    for (let b = 0; b < str.length; b++) {
      final[str[0]] = +str[1];
    }
  }
  return final;
}

module.exports = getDNSStats;
