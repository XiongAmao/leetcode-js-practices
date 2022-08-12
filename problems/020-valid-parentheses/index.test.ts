import { describe, expect, test } from '@jest/globals';
import { isValid } from '.';

const testFn = (fn: (str: string) => boolean) => {
  test.each([
    ['()', true],
    ['()[]{}', true],
    ['(]', false],
    ['(])]', false],
    ['{[]}', true],
    ['((', false],
    ['{[[]{}]}', true]
  ])('Case: %#', (str, expected) => {
    expect(fn(str)).toBe(expected);
  });
};

describe('020 valid parentheses', () => {
  describe('valid 1', () => testFn(isValid));
});
