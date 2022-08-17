import { describe, expect, test } from '@jest/globals';
import { removeDuplicates, removeDuplicates2 } from '.';

const testFn = (fn: (nums: number[]) => number) => {
  test.each([
    [[1, 1, 2], [1, 2], 2],
    [[0, 0, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4], 5]
  ])('Case: %#', (nums, expectedNums, k) => {
    const curNums = [...nums];
    expect(fn(curNums)).toEqual(k);

    // test if the array has changed
    expect(curNums).toEqual(expectedNums);
  });
};

describe('026 remove duplicates from sorted array', () => {
  describe('remove duplicates 1', () => testFn(removeDuplicates));
  describe('remove duplicates 2', () => testFn(removeDuplicates2));
});
