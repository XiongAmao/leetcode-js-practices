/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let times = parseInt(s.length / 2);
  while (times) {
    [s[times - 1], s[s.length - times]] = [s[s.length - times], s[times - 1]];
    times--;
  }
};

module.exports = [reverseString];
