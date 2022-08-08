import { describe, expect, test } from '@jest/globals';
import { isPalindrome, isPalindrome2, isPalindromeRevertHalfNumber } from '.';

const testCase = (fn: (x: number) => boolean) => {
  test.each([
    [123, false],
    [-123, false],
    [121, true],
    [21, false],
    [12345654321, true],
    [0, true]
  ])('Case: %#', (input, result) => {
    expect(fn(input)).toBe(result);
  });
};

describe('palindrome number', () => {
  describe('for loop 1', () => {
    testCase(isPalindrome);
  });

  describe('for loop 2', () => {
    testCase(isPalindrome2);
  });

  describe('revert half number', () => {
    testCase(isPalindromeRevertHalfNumber);
  });
});
