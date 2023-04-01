import { describe, expect, test } from '@jest/globals';
import { maxArea } from '.';

const testFn = (fn: typeof maxArea) => {
  test.each([
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
    [[1, 1], 1],
    [[2, 3, 4, 5, 18, 17, 6], 17]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`011 container with most water`, () => {
  describe('fn 1', () => testFn(maxArea));
});
