import { describe, expect, test } from '@jest/globals';
import { twoSum, TwoSumFn, twoSumHashMap, twoSumOnePassHashTable } from '.';

const testCase = (fn: TwoSumFn) => {
  test.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[0, 4, 3, 0], 0, [0, 3]],
    [[1, 3, 1, 2, 0], 2, [0, 2]]
  ])('Case: %#', (num, target, expected) => {
    expect(fn(num, target)).toEqual(expected);
  });
};

describe('two sum', () => {
  describe('for loop', () => {
    testCase(twoSum);
  });

  describe('hash map', () => {
    testCase(twoSumHashMap);
  });

  describe('one pass hash table', () => {
    testCase(twoSumOnePassHashTable);
  });
});
