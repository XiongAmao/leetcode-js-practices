import { describe, expect, test } from '@jest/globals';
import { getRow, getRow2 } from '.';

const testFn = (fn: typeof getRow) => {
  test.each([
    [3, [1, 3, 3, 1]],
    [0, [1]],
    [1, [1, 1]]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`119 Pascal's Triangle II`, () => {
  describe('fn 1', () => testFn(getRow));
  describe('space O(1)', () => testFn(getRow2));
});
