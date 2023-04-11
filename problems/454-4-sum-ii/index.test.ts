import { describe, expect, test } from '@jest/globals';
import { fourSumCount } from '.';

const testFn = (fn: typeof fourSumCount) => {
  test.each([
    [[1, 2], [-2, -1], [-1, 2], [0, 2], 2],
    [[0], [0], [0], [0], 1],
    [[-1, -1], [-1, 1], [-1, 1], [1, -1], 6]
  ])('Case: %#', (n1, n2, n3, n4, expected) => {
    expect(fn(n1, n2, n3, n4)).toEqual(expected);
  });
};

describe(`454 4 sum ii`, () => {
  describe('fn 1', () => testFn(fourSumCount));
});
