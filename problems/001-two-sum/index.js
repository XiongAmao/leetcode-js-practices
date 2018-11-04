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
const twoSum = function twoSum(nums, target) {
  let idx1;
  let idx2;

  if (nums.length === 2 && nums[0] + nums[1] === target) {
    return [0, 1];
  }

  for (let t = 0; t < nums.length; t++) {
    idx1 = t;

    for (let e = t + 1; e < nums.length; e++) {
      if (target - nums[t] - nums[e] === 0) {
        idx2 = e;
        return [idx1, idx2];
      }
    }
  }
};

const twoSumHashMap = function twoSumHashMap(nums, target) {
  if (nums.length === 2 && nums[0] + nums[1] === target) {
    return [0, 1];
  }

  const hashMap = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    hashMap[nums[i]] = i;
  }

  for (let t = 0; t < len; t++) {
    const diff = target - nums[t];

    if (hashMap[diff] && hashMap[diff] !== t) {
      return [t, hashMap[diff]];
    }
  }
};

const twoSumOnePassHashTable = function twoSumOnePassHashTable(nums, target) {
  if (nums.length === 2 && nums[0] + nums[1] === target) {
    return [0, 1];
  }

  const hashMap = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const diff = target - nums[i];

    if (hashMap[diff] !== undefined) {
      return [hashMap[diff], i];
    }

    hashMap[nums[i]] = i;
  }
};

// module.exports = [
//   twoSum,
//   twoSumHashMap,
//   twoSumOnePassHashTable
// ];

module.exports = twoSum
