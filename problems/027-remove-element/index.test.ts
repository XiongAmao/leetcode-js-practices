import { describe, expect, test } from '@jest/globals';
import { removeElement, removeElement2, RemoveElementFn } from '.';

const testCase = (fn: RemoveElementFn) => {
  test.each([
    [[3, 2, 2, 3], 3, 2],
    [[], 3, 0],
    [[1, 1, 2, 2, 3, 4, 4, 1, 2, 5, 4, 6], 1, 9]
  ])('Case: %#', (nums, val, resultLength) => {
    expect(fn(nums, val)).toBe(resultLength);
  });
};

describe('027 remove element', () => {
  describe('remove element', () => {
    testCase(removeElement);
  });

  describe('remove element 2', () => {
    testCase(removeElement2);
  });
});
