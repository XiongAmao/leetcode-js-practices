import { describe, expect, test } from '@jest/globals';
import { threeSum } from '.';

const testFn = (fn: typeof threeSum) => {
  test.each([
    [[0, 0, 0], [[0, 0, 0]]],
    [[0, 1, 1], []],
    [
      [-1, 0, 1, 2, -1, -4],
      [
        [-1, -1, 2],
        [-1, 0, 1]
      ]
    ]
  ])('Case: %#', (input, expected) => {
    const ans = fn(input);

    expect(ans.length === expected.length).toBeTruthy();
    ans.forEach((elem) => {
      console.log(elem);
      expect(expected).toContainEqual(expect.arrayContaining(elem));
    });
  });
};

describe(`015 3 sum`, () => {
  describe('fn 1', () => testFn(threeSum));
});
