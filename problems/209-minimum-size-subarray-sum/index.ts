export function minSubArrayLenForLoop(target: number, nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let subLength = 0;

  for (let left = 0; left < nums.length; left++) {
    sum = 0;
    for (let right = left; right < nums.length; right++) {
      sum += nums[right];
      if (sum >= target) {
        // 相同索引下，当前也有一个元素，因此+1
        subLength = right - left + 1;
        result = Math.min(result, subLength);
        // 求最短，所以找到之后就移动左边指针+1，从头开始
        break;
      }
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

export function minSubArrayLenSlidingWindow(
  target: number,
  nums: number[]
): number {
  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      if (left === right) {
        return 1;
      }
      result = Math.min(result, right - left + 1);
      sum = sum - nums[left] - nums[right];
      // 由于每一轮都增加了nums[right]
      // 当右指针不动时，要在当前这一轮减去下一轮增加的
      left++;
    } else {
      right++;
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
