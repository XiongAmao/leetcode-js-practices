import { describe, expect, test } from '@jest/globals';
import { containsDuplicate, containsDuplicate2 } from '.';

const testFn = (fn: (nums: number[]) => boolean) => {
  test.each([
    [[1, 2, 3, 1], true],
    [[1, 2, 3], false],
    [[], false],
    [[5], false],
    [[1, 1, 1], true]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toBe(expected);
  });
};

describe('217 contains duplicate', () => {
  describe('array de-duplication', () => testFn(containsDuplicate));
  describe('hashmap', () => testFn(containsDuplicate2));
});
