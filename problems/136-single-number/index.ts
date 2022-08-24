export const singleNumber = (nums: number[]): number => {
  const map: {
    [index: number]: number;
  } = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      delete map[nums[i]];
    }
  }
  return +Object.keys(map)[0];
};

/**
 * js ^ operator
 *
 * a = 5   1 0 1
 * b = 2   0 1 0
 *
 * a ^ a = 0
 *
 * 1 0 1
 * 1 0 1
 * -----
 * 0 0 0
 *
 * b ^ 0 = b
 *
 * 0 1 0
 * 0 0 0
 * -----
 * 0 1 0
 *
 * the integer ^ 0 equal to itself.
 *
 * after ^ every number, the result is single number
 */

export const xor = (nums: number[]): number => {
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = cur ^ nums[i];
  }
  return cur;
};

export const xor2 = (nums: number[]): number =>
  nums.reduce((cur, prev) => cur ^ prev);
