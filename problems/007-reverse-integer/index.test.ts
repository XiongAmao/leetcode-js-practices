import { describe, expect, test } from '@jest/globals';
import { reverse, reverseRemainder } from '.';

const testFn = (fn: (num: number) => number) => {
  test.each([
    [120, 21],
    [-123, -321],
    [123, 321],
    [0, 0],
    [1463847412, 2147483641]
  ])('Case: %#', (num, expected) => {
    expect(fn(num)).toBe(expected);
  });
};

describe('007 reverse integer', () => {
  describe('reverse integer 1', () => testFn(reverse));
  describe('reverse integer 2', () => testFn(reverseRemainder));
});
