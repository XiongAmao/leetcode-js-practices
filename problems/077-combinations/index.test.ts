import { describe, expect, test } from '@jest/globals';
import { combine } from '.';

const testFn = (fn: typeof combine) => {
  test.each([
    [
      4,
      2,
      [
        [2, 4],
        [3, 4],
        [2, 3],
        [1, 2],
        [1, 3],
        [1, 4]
      ]
    ]
  ])('Case: %#', (n, k, expected) => {
    const ans = fn(n, k);
    expect(ans.length === expected.length).toBeTruthy();
    ans.forEach((elem) => {
      expect(expected).toContainEqual(expect.arrayContaining(elem));
    });
  });
};

describe(`77 combinations`, () => {
  describe('fn 1', () => testFn(combine));
});
