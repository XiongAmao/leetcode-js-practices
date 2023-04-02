export function sortedSquares(nums: number[]): number[] {
  const result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const l = Math.pow(nums[left], 2);
    const r = Math.pow(nums[right], 2);
    if (l > r) {
      result.unshift(l);
      left++;
    } else {
      result.unshift(r);
      right--;
    }
  }
  return result;
}

export function sortedSquares2(nums: number[]): number[] {
  const result = Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let k = right;

  while (left <= right) {
    const l = Math.pow(nums[left], 2);
    const r = Math.pow(nums[right], 2);
    if (l > r) {
      result[k] = l;
      left++;
    } else {
      result[k] = r;
      right--;
    }
    k--;
  }
  return result;
}
