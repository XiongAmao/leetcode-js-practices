/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let i;

  for (i = 0; i <= strs.length; i++) {
    const char = strs[0][i];
    const isSame = strs.every((el) => {
      return char === el[i];
    });

    if (!isSame || i > strs[0].length) {
      break;
    }
  }

  if (i === 0) {
    return '';
  }

  return strs[0].slice(0, i);
};

const longestCommonPrefix2 = (strs) => {
  if (!strs || strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let max = strs[0];
  let min = strs[0];

  // compare string????
};

module.exports = [longestCommonPrefix];
