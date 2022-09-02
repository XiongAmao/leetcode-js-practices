export function containsDuplicate(nums: number[]): boolean {
  if (nums.length < 2) return false;
  return new Set(nums).size !== nums.length;
}

export function containsDuplicate2(nums: number[]): boolean {
  if (nums.length < 2) return false;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], true);
    }
  }
  return false;
}
