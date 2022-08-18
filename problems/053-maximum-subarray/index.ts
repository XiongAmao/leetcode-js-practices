export const maxSubArrayDP = (nums: number[]): number => {
  if (nums.length <= 1) return nums.length ? nums[0] : 0;
  let max = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum = sum + nums[i];
    }
    // sum = sum < 0 ? nums[i] : sum + nums[i];
    // sum = Math.max(nums[i], sum + nums[i]);

    max = Math.max(sum, max);
  }
  return max;
};

export const maxSubArrayDP2 = (nums: number[]): number => {
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  nums.forEach((x) => {
    sum = Math.max(x, sum + x);
    max = Math.max(sum, max);
  });

  return max;
};
