import { describe, expect, test } from '@jest/globals';
import { searchInsert } from '.';

const testFn = (fn: typeof searchInsert) => {
  test.each([
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
    [[1, 3, 5, 6], 0, 0]
  ])('Case: %#', (nums, target, expected) => {
    expect(fn(nums, target)).toEqual(expected);
  });
};

describe(`35 Search insert Position`, () => {
  describe('fn 1', () => testFn(searchInsert));
});
