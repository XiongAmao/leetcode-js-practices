/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  if (nums.length < 2) return false;

  return new Set(nums).size !== nums.length;
};

const containsDuplicate2 = function(nums) {
  if (nums.length < 2) return false;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], true);
    }
  }
  return false;
};

module.exports = [containsDuplicate, containsDuplicate2];
