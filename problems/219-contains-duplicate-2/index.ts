export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length < 2) {
    return false;
  }
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (!map.has(val)) {
      map.set(val, [i]);
    } else {
      const arr = map.get(val);
      arr.push(i);
      for (let j = 0; j < arr.length - 1; j++) {
        if (Math.abs(arr[j] - arr[j + 1]) <= k) return true;
      }
    }
  }
  return false;
}

export function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  if (nums.length < 2) return false;
  const map = new Map<number, number[]>();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (!map.get(val)) {
      map.set(val, [i]);
    } else {
      map?.get(val)?.push(i);
    }
  }
  for (const arr of map) {
    const [, indexs] = arr;
    for (let i = 0; i < indexs.length - 1; i++) {
      if (Math.abs(indexs[i] - indexs[i + 1]) <= k) {
        return true;
      }
    }
  }
  return false;
}
export function containsNearbyDuplicateWithSet(
  nums: number[],
  k: number
): boolean {
  if (nums.length < 2) return false;
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if (set.size > k) {
      // 移除掉小于K的最近一个数
      set.delete(nums[i - k]);
    }
  }

  return false;
}
