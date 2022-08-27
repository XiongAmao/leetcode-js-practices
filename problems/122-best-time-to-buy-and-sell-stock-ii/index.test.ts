import { describe, expect, test } from '@jest/globals';
import { maxProfit } from '.';

const testFn = (fn: (prices: number[]) => number) => {
  test.each([
    [[7, 1, 5, 3, 6, 4], 7],
    [[1, 2, 3, 4, 5], 4],
    [[1, 2], 1]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toBe(expected);
  });
};

describe('122 best time to buy and sell stock 2', () => {
  describe('max profit greedy', () => testFn(maxProfit));
  // describe('max profit 2', () => testFn(maxProfit2));
});
