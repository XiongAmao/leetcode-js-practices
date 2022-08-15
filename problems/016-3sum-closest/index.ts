export const threeSumClosest = (nums: number[], target: number): number => {
  // init
  let min = target - nums[0] - nums[1] - nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let t = j + 1; t < nums.length; t++) {
        const sum = nums[i] + nums[t] + nums[j];
        if (target - sum === 0) return sum;
        // get closest sum
        if (Math.abs(target - sum) < Math.abs(min)) {
          min = target - sum;
        }
      }
    }
  }

  return target - min;
};

export const threeSumClosestByTwoDualPointer = (
  nums: number[],
  target: number
): number => {
  nums.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;
  let minSum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const curSum = nums[i] + nums[left] + nums[right];
      const curDiff = Math.abs(target - curSum);

      if (curDiff < minDiff) {
        minSum = curSum;
        minDiff = curDiff;
      }
      if (curSum === target) return curSum;
      if (curSum > target) {
        right -= 1;
      } else if (curSum < target) {
        left += 1;
      }
    }
  }
  return minSum;
};
