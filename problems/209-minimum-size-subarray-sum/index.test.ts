import { describe, expect, test } from '@jest/globals';
import { minSubArrayLenForLoop, minSubArrayLenSlidingWindow } from '.';

const testFn = (fn: typeof minSubArrayLenForLoop) => {
  test.each([
    [7, [2, 3, 1, 2, 4, 3], 2],
    [4, [1, 4, 4], 1],
    [11, [1, 1, 1, 1, 1, 1, 1, 1], 0]
  ])('Case: %#', (target, nums, expected) => {
    expect(fn(target, nums)).toEqual(expected);
  });
};

describe(`209 Minimum Size Subarray Sum`, () => {
  describe('for loop', () => testFn(minSubArrayLenForLoop));
  describe('sliding window', () => testFn(minSubArrayLenSlidingWindow));
});
