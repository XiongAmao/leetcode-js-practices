import { describe, expect, test } from '@jest/globals';
import { reverseWords, reverseWordsStringConcat } from '.';

const testFn = (fn: (input: string) => string) => {
  test.each([
    [`Let's take LeetCode contest`, `s'teL ekat edoCteeL tsetnoc`],
    [`Let'aaa1 take asf contest`, `1aaa'teL ekat fsa tsetnoc`]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toBe(expected);
  });
};

describe('557 reverse words in a string 3', () => {
  describe('array reverse', () => testFn(reverseWords));
  describe('string concat', () => testFn(reverseWordsStringConcat));
});
