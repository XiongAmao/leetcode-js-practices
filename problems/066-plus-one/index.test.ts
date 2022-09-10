import { describe, expect, test } from '@jest/globals';
import { plusOne, plusOne2 } from '.';

const testFn = (fn: (input: number[]) => number[]) => {
  test.each([
    [
      [1, 2, 3],
      [1, 2, 4]
    ],
    [
      [4, 3, 2, 1],
      [4, 3, 2, 2]
    ],
    [[0], [1]],
    [[9], [1, 0]]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe('066 plus one', () => {
  describe('fn 1', () => testFn(plusOne));
  describe('fn 2', () => testFn(plusOne2));
});
