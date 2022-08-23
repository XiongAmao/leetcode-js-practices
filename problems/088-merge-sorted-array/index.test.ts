import { describe, expect, test } from '@jest/globals';
import { merge, MergeFunc } from '.';

const testFn = (fn: MergeFunc) => {
  test.each([
    [[0], 0, [1], 1, [1]],
    [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]]
  ])('Case: %#', (nums1, m, nums2, n, expected) => {
    fn(nums1, m, nums2, n);
    expect(nums1).toEqual(expected);
  });
};

describe('088 merge sorted array', () => {
  describe('merge 1', () => testFn(merge));
});
