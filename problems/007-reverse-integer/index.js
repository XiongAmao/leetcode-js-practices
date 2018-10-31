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
 */
var reverse = function(x) {
  if (x === 0) {
    return 0
  }

  var max = Math.pow(2, 31) - 1;
  var isMinus = x < 0;
  var result;
  var temp = [];
  var arr = String(x).split('');
  var len = arr.length;
  var endIdx = isMinus ? 1 : 0;

  for(var i = len - 1; i > endIdx - 1; i--) {
    temp.push(arr[i])
  }
  result = Number(temp.join(''))

  if (result > max) {
      return 0
  }
  return isMinus ? -result : result
};

const reverse_remainder = function (x) {
  if (x === 0) {
    return 0
  }
  let res = 0
  let absX = Math.abs(x);

  while(absX) {
    res = res * 10 + absX % 10;
    absX = parseInt(absX/10);
  }
  if (res > 2147483647) {
    return 0;
  }
  return x > 0 ? res : -res;
}

module.exports = reverse
