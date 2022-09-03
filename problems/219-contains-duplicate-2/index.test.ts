import { describe, expect, test } from '@jest/globals';
import {
  containsNearbyDuplicate,
  containsNearbyDuplicate2,
  containsNearbyDuplicateWithSet
} from '.';

const testFn = (fn: (nums: number[], k: number) => boolean) => {
  test.each([
    [[1, 2, 3, 1], 3, true],
    [[1, 2, 3], 99, false],
    [[], 123, false],
    [[1, 2, 3, 1, 2, 3], 2, false],
    [[99, 99], 2, true]
  ])('Case: %#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected);
  });
};

describe('219 contains duplicate 2', () => {
  describe('map 1', () => testFn(containsNearbyDuplicate));
  describe('map 2', () => testFn(containsNearbyDuplicate2));
  describe('set', () => testFn(containsNearbyDuplicateWithSet));
});
