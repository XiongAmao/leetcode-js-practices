import { describe, expect, test } from '@jest/globals';
import { findKthLargest } from '.';

const testFn = (fn: typeof findKthLargest) => {
  test.each([
    [[-1, 2, 0], 1, 2],
    [[3, 2, 1, 5, 6, 4], 2, 5],
    [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4]
  ])('Case: %#', (nums, k, expected) => {
    expect(fn(nums, k)).toEqual(expected);
  });
};

describe(`215 Kth Largest Element in an Array`, () => {
  describe('fn 1', () => testFn(findKthLargest));
});
