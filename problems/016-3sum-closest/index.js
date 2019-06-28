/**
 * Given an array nums of n integers and an integer target,
 * find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 *
 * Example:
 *
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let min = target - (nums[0] + nums[1] + nums[2]);

  for (let i = 0; i < nums.length - 2; i++) {
    for(let t = i + 1; t < nums.length - 1; t++) {
      for(let e = t + 1; e < nums.length; e++ ) {
        let count = nums[i] + nums[t] + nums[e];

        if ((target - count) === 0) {
          return count;
        }

        if (Math.abs(target - count) < Math.abs(min)) {
          min = target - count;
        }
      }
    }
  }
  return target - min;
};

const threeSumClosestByTwoDualPointer = (nums, target) => {
  nums.sort((a, b) => {
    return a - b;
  });

  let minDiff = Number.MAX_SAFE_INTEGER;
  let minSum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
      let tempSum = nums[i] + nums[left] + nums[right];
      let tempDiff = Math.abs(target - tempSum);

      if (tempDiff < minDiff) {
        minSum = tempSum;
        minDiff = tempDiff;
      }

      if (tempSum < target) {
        left++;
      } else if (tempSum > target) {
        right--;
      } else {
        return tempSum;
      }
    }
  }
  return minSum;
};

module.exports = [
  threeSumClosest,
  threeSumClosestByTwoDualPointer
];
