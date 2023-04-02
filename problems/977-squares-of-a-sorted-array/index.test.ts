import { describe, expect, test } from '@jest/globals';
import { sortedSquares } from '.';

const testFn = (fn: typeof sortedSquares) => {
  test.each([
    [
      [-4, -1, 0, 3, 10],
      [0, 1, 9, 16, 100]
    ],
    [
      [-7, -3, 2, 3, 11],
      [4, 9, 9, 49, 121]
    ]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`977 squares of a sorted array`, () => {
  describe('fn 1', () => testFn(sortedSquares));
});
