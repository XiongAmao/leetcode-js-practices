/**
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var idx1;
  var idx2;

  if (nums.length === 2 && nums[0] + nums[1] === target) {
    return [0, 1]
  }

  for (var t = 0; t < nums.length; t++) {
    idx1 = t
    for (var e = t + 1; e < nums.length; e++) {
      if (target - nums[t] - nums[e] === 0) {
        idx2 = e
        return [idx1, idx2]
      }
    }
  }
};

module.exports = twoSum
