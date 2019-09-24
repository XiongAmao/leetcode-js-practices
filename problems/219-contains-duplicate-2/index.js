/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  if (nums.length < 2) return false;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const numIdxs = map.get(nums[i]);

      for (let j = 0; j < numIdxs.length; j++) {
        if (i - numIdxs[j] <= k) return true;
      }

      numIdxs.push(i);
    } else {
      map.set(nums[i], [i]);
    }
  }

  return false;
};

const containsNearbyDuplicate2 = function(nums, k) {
  if (nums.length < 2) return false;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = map.get(nums[i]);
    if (x === undefined) {
      map.set(nums[i], i);
    } else {
      if (i - x <= k) {
        return true;
      } else {
        map.set(nums[i], i);
      }
    }
  }

  return false;
};

module.exports = [containsNearbyDuplicate, containsNearbyDuplicate2];
