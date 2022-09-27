import { describe, expect, test } from '@jest/globals';
import { buddyStrings } from '.';

const testFn = (fn: typeof buddyStrings) => {
  test.each([
    ['ab', 'ba', true],
    ['ab', 'ab', false],
    ['aa', 'aa', true],
    ['aac', 'aac', true],
    ['abcd', 'cbad', true]
  ])('Case: %#', (s, goal, expected) => {
    expect(fn(s, goal)).toEqual(expected);
  });
};

describe(`859 buddy strings`, () => {
  describe('fn 1', () => testFn(buddyStrings));
});
