import { describe, expect, test } from '@jest/globals';
import { isHappy1, isHappy2 } from '.';

const testFn = (fn: typeof isHappy1) => {
  test.each([
    [19, true],
    [2, false],
    [3, false]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`202 happy number`, () => {
  describe('fn 1', () => testFn(isHappy1));
  describe('fn 2, while true', () => testFn(isHappy2));
});
