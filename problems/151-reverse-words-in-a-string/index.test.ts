import { describe, expect, test } from '@jest/globals';
import { reverseWords } from '.';

const testFn = (fn: typeof reverseWords) => {
  test.each([
    ['the sky is blue', 'blue is sky the'],
    ['  hello world  ', 'world hello'],
    ['a good   example', 'example good a']
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`151 reverse words in a string`, () => {
  describe('fn 1', () => testFn(reverseWords));
});
