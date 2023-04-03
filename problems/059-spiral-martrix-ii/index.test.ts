import { describe, expect, test } from '@jest/globals';
import { generateMatrix } from '.';

const testFn = (fn: typeof generateMatrix) => {
  test.each([
    [
      3,
      [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
      ]
    ]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`059 spiral martrix ii`, () => {
  describe('fn 1', () => testFn(generateMatrix));
});
