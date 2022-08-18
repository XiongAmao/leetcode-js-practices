import { describe, expect, test } from '@jest/globals';
import { maxSubArrayDP, maxSubArrayDP2 } from '.';

const testFn = (fn: (input: number[]) => number) => {
  test.each([
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
    [[1], 1],
    [[-2, 1], 1],
    [[-2, -1], -1]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toBe(expected);
  });
};

describe('053 maximum subarray', () => {
  describe('maxSubArray DP 1', () => testFn(maxSubArrayDP));

  describe('maxSubArray DP 2', () => testFn(maxSubArrayDP2));
});
