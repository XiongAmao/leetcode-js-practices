import { describe, expect, test } from '@jest/globals';
import { romanToInt } from '.';

const testCase = (fn: (s: string) => number) => {
  test.each([
    ['III', 3],
    ['IV', 4],
    ['IX', 9],
    ['LVIII', 58],
    ['MCMXCIV', 1994]
  ])('Case: %#', (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
};

describe('013 roman to integer', () => {
  describe('roman to integer', () => {
    testCase(romanToInt);
  });
});
