export type RemoveElementFn = (nums: number[], val: number) => number;

export const removeElement: RemoveElementFn = (nums, val) => {
  let idx = 0;

  while (idx < nums.length) {
    if (nums[idx] === val) {
      nums.splice(idx, 1);
    } else {
      idx++;
    }
  }

  return nums.length;
};

export const removeElement2: RemoveElementFn = (nums, val) => {
  let idx = nums.length - 1;

  while (idx >= 0) {
    if (nums[idx] === val) {
      nums.splice(idx, 1);
    } else {
      idx--;
    }
  }

  return nums.length;
};
