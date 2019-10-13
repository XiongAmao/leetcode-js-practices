/**
 * At the beginning, if you get a multiple of 4, you will always lose, because another player can always make you a multiple of 4.
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return n % 4 !== 0;
};

module.exports = [canWinNim];
