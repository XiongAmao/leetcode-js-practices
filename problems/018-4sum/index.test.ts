import { describe, expect, test } from '@jest/globals';
import { fourSum } from '.';

const testFn = (fn: typeof fourSum) => {
  test.each([
    [
      [1, 0, -1, 0, -2, 2],
      0,
      [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1]
      ]
    ],
    [[2, 2, 2, 2, 2], 8, [[2, 2, 2, 2]]],
    [
      [1, 0, -1, 0, -2, 2],
      0,
      [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1]
      ]
    ]
  ])('Case: %#', (nums, target, expected) => {
    const ans = fn(nums, target);

    expect(ans.length === expected.length).toBeTruthy();
    ans.forEach((elem) => {
      expect(expected).toContainEqual(expect.arrayContaining(elem));
    });
  });
};

describe(`018 4sum`, () => {
  describe('fn 1', () => testFn(fourSum));
});
