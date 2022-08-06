export interface TwoSumFn {
  (nums: number[], target: number): number[] | undefined;
}

export const twoSum: TwoSumFn = (nums, target) => {
  let idx1;
  let idx2;

  if (nums.length === 2 && nums[0] + nums[1] === target) {
    return [0, 1];
  }

  for (let t = 0; t < nums.length; t++) {
    idx1 = t;

    for (let e = t + 1; e < nums.length; e++) {
      if (target - nums[t] - nums[e] === 0) {
        idx2 = e;
        return [idx1, idx2];
      }
    }
  }
};

export const twoSumHashMap: TwoSumFn = (nums, target) => {
  if (nums.length === 2 && nums[0] + nums[1] === target) {
    return [0, 1];
  }

  const hashMap: {
    [index: number]: number;
  } = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    hashMap[nums[i]] = i;
  }

  for (let t = 0; t < len; t++) {
    const diff = target - nums[t];

    if (hashMap[diff] && hashMap[diff] !== t) {
      return [t, hashMap[diff]];
    }
  }
};

export const twoSumOnePassHashTable: TwoSumFn = (nums, target) => {
  if (nums.length === 2 && nums[0] + nums[1] === target) {
    return [0, 1];
  }

  const hashMap: {
    [index: number]: number;
  } = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const diff = target - nums[i];

    if (hashMap[diff] !== undefined) {
      return [hashMap[diff], i];
    }

    hashMap[nums[i]] = i;
  }
};
