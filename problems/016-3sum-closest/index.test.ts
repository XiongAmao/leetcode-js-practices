import { describe, expect, test } from '@jest/globals';
import { threeSumClosest, threeSumClosestByTwoDualPointer } from '.';

const testFn = (fn: (nums: number[], target: number) => number) => {
  test.each([
    [[-1, 2, 1, -4], -1, -1],
    [[-1, 2, 1, -4], 1, 2],
    [[1, 1, 1, 0], -100, 2],
    [[1, 2, 4, 8, 16, 32, 64, 128], 82, 82]
  ])('Case: %#', (nums, target, expected) => {
    expect(fn(nums, target)).toEqual(expected);
  });
};

describe('016 3sum closest', () => {
  describe('threeSumClosest 1', () => testFn(threeSumClosest));
  describe('threeSumClosest 2', () => testFn(threeSumClosestByTwoDualPointer));
});
