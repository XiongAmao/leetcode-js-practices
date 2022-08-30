import { describe, expect, test } from '@jest/globals';
import { majorityElementHashMap, majorityElementVote } from '.';

const testFn = (fn: (num: number[]) => number) => {
  test.each([
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 1, 2, 2], 2]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toBe(expected);
  });
};

describe('169 majority element', () => {
  describe('hash map', () => testFn(majorityElementHashMap));
  describe('Boyer–Moore majority vote', () => testFn(majorityElementVote));
});
