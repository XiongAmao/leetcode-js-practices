export const removeDuplicates = (nums: number[]): number => {
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

export const removeDuplicates2 = (nums: number[]): number => {
  let idx = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[idx] = nums[i];
      idx++;
    }
  }
  nums.splice(idx);
  return nums.length;
};
