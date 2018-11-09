/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * example 1:
 * Input: 123
 * Output: 321
 *
 * example 2:
 * Input: -123
 * Output: -321
 *
 * example 3:
 * Input: 120
 * Output: 12
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function reverse(x) {
  if (x === 0) {
    return 0;
  }

  const max = (2 ** 31) - 1;
  const isMinus = x < 0;
  const temp = [];
  const arr = String(x).split('');
  const len = arr.length;
  const endIdx = isMinus ? 1 : 0;

  for (let i = len - 1; i > endIdx - 1; i--) {
    temp.push(arr[i]);
  }
  const result = Number(temp.join(''));

  if (result > max) {
    return 0;
  }
  return isMinus ? -result : result;
};

const reverseRemainder = function reverseRemainder(x) {
  if (x === 0) {
    return 0;
  }
  let res = 0;
  let absX = Math.abs(x);

  while (absX) {
    res = (res * 10) + (absX % 10);
    absX = parseInt(absX / 10, 10);
  }
  if (res > 2147483647) {
    return 0;
  }
  return x > 0 ? res : -res;
};

module.exports = [
  reverse,
  reverseRemainder
]
