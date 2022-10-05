export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const len = nums.length;
  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return res;
    }

    // left pointer remove duplication
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[right], nums[left]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}
