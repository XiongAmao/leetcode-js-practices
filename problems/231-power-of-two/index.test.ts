import { describe, expect, test } from '@jest/globals';
import { isPowerOfTwo, isPowerOfTwo2 } from '.';

const testFn = (fn: (n: number) => boolean) => {
  test.each([
    [1, true],
    [2, true],
    [3, false],
    [16, true],
    [218, false]
  ])('Case: %#', (n, expected) => {
    expect(fn(n)).toBe(expected);
  });
};

describe('231 power of two', () => {
  describe('bitwise AND', () => testFn(isPowerOfTwo));
  describe('iterative', () => testFn(isPowerOfTwo2));
});
