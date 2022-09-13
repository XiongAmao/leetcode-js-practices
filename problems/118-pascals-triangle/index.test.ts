import { describe, expect, test } from '@jest/globals';
import { generate } from '.';

const testFn = (fn: (input: number) => number[][]) => {
  test.each([
    [1, [[1]]],
    [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe('118 pascals triangle', () => {
  describe('fn 1', () => testFn(generate));
});
