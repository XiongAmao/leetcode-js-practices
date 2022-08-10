import { describe, expect, test } from '@jest/globals';
import { longestCommonPrefix, longestCommonPrefix2 } from '.';

const testFn = (fn: (str: string[]) => string) => {
  test.each([
    [['flower', 'flow', 'flight'], 'fl'],
    [['dog', 'racecar', 'car'], ''],
    [['', ''], ''],
    [['c', 'c'], 'c']
  ])('Case: %#', (strs, expected) => {
    expect(fn(strs)).toBe(expected);
  });
};

describe('014 longest common prefix', () => {
  describe('longestCommonPrefix 1', () => {
    testFn(longestCommonPrefix);
  });

  describe('longestCommonPrefix 2', () => {
    testFn(longestCommonPrefix2);
  });
});
