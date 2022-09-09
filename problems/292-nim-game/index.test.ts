import { describe, expect, test } from '@jest/globals';
import { canWinNim } from '.';

const testFn = (fn: (input: number) => boolean) => {
  test.each([
    [12, false],
    [3, true],
    [2, true],
    [1, true],
    [4, false],
    [5, true]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toBe(expected);
  });
};

describe('292 nim game', () => {
  describe('fn 1', () => testFn(canWinNim));
});
