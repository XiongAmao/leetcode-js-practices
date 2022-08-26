import { describe, expect, test } from '@jest/globals';
import { maxProfit, maxProfitOnePass, maxProfitOnePass2 } from '.';

const testFn = (fn: (prices: number[]) => number) => {
  test.each([
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 5, 4, 3, 1], 0],
    [[1, 2], 1]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toBe(expected);
  });
};

describe('121 best time to buy and sell stock', () => {
  // overtime in leetcode test when there is too much test case
  describe('for loop', () => testFn(maxProfit));

  describe('one pass 1', () => testFn(maxProfitOnePass));
  describe('one pass 2', () => testFn(maxProfitOnePass2));
});
