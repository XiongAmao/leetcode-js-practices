export function searchInsert(nums: number[], target: number): number {
  let insertIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] < target) {
      insertIdx = i + 1;
    }
  }

  return insertIdx;
}
