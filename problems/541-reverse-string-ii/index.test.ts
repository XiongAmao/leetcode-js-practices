import { describe, expect, test } from '@jest/globals';
import { reverseStr } from '.';

const testFn = (fn: typeof reverseStr) => {
  test.each([
    ['abcdefg', 2, 'bacdfeg'],
    ['abcd', 2, 'bacd'],
    ['abcd', 4, 'dcba']
  ])('Case: %#', (s, k, expected) => {
    expect(fn(s, k)).toEqual(expected);
  });
};

describe(`541 reverse string ii`, () => {
  describe('fn 1', () => testFn(reverseStr));
});
