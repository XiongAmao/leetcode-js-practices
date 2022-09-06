import { describe, expect, test } from '@jest/globals';
import { reverseString, reverseString2, reverseStringDualPointer } from '.';

const testFn = (fn: (s: string[]) => void) => {
  test.each([
    [
      ['h', 'e', 'l', 'l', 'o'],
      ['o', 'l', 'l', 'e', 'h']
    ],
    [
      ['H', 'a', 'n', 'n', 'a', 'h'],
      ['h', 'a', 'n', 'n', 'a', 'H']
    ],
    [
      ['a', '.'],
      ['.', 'a']
    ],
    [['a'], ['a']],
    [[], []]
  ])('Case: %#', (s, expected) => {
    fn(s);
    expect(s).toEqual(expected);
  });
};

describe('344 reverse string', () => {
  describe('fn 1', () => testFn(reverseString));
  describe('fn 2', () => testFn(reverseString2));
  describe('dual pointer', () => testFn(reverseStringDualPointer));
});
