import { describe, expect, test } from '@jest/globals';
import { longestPalindrome } from '.';

const testFn = (fn: typeof longestPalindrome) => {
  test.each([
    ['babad', 'bab'],
    ['cbbd', 'bb'],
    ['abba', 'abba']
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`005 longest palindromic substring`, () => {
  describe('fn 1', () => testFn(longestPalindrome));
});
