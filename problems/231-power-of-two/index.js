/**
 * @param {number} n
 * @return {boolean}
 */

// bitwise AND
const isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0;
};

// iterative
const isPowerOfTwo2 = function(n) {
  if (n <= 0) return false;

  while(n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      return false;
    }
  }
  return true;
};

module.exports = [isPowerOfTwo, isPowerOfTwo2];
