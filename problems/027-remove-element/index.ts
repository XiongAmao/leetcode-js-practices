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

export const removeElementFastSlowPointer = (
  nums: number[],
  val: number
): number => {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  // 原题没有要求后续数组元素处理
  // nums.splice(storeIdx);

  // index 从0 开始，因此最后  slow) 位置等于已排好数组长
  return slow;
};
