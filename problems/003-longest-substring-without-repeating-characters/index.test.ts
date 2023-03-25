import { describe, expect, test } from '@jest/globals';
import { lengthOfLongestSubstring } from '.';

const testFn = (fn: typeof lengthOfLongestSubstring) => {
  test.each([
    ['abcabcbb', 3],
    ['bbbbb', 1],
    ['pwwkew', 3],
    ['abba', 2]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`003 Longest Substring Without Repeating Characters`, () => {
  describe('fn 1', () => testFn(lengthOfLongestSubstring));
});
