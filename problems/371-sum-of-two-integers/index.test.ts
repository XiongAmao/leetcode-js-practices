import { describe, expect, test } from '@jest/globals';
import { getSum } from '.';

const testFn = (fn: typeof getSum) => {
  test.each([
    [1, 4, 5],
    [12, 15, 27],
    [-1, -10, -11],
    [-1, 1, 0]
  ])('Case: %#', (a, b, expected) => {
    expect(fn(a, b)).toBe(expected);
  });
};

describe('371 sum of two Integers', () => {
  describe('fn 1', () => testFn(getSum));
});
