export function majorityElementHashMap(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const map: {
    [index: number]: number;
  } = {
    [nums[0]]: 1
  };
  let major = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
      if (map[nums[i]] > map[major]) {
        major = nums[i];
      }
    }
  }
  return major;
}

export function majorityElementVote(nums: number[]): number {
  let canNum = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (canNum === nums[i]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      canNum = nums[i];
      count = 1;
    }
  }
  return canNum;
}
