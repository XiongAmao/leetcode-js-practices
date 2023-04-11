import { describe, expect, test } from '@jest/globals';
import { intersection, intersection2 } from '.';

const testFn = (fn: typeof intersection) => {
  test.each([
    [[1, 2, 2, 1], [2, 2], [2]],
    [
      [4, 9, 5],
      [9, 4, 9, 8, 4],
      [9, 4]
    ]
  ])('Case: %#', (n1, n2, expected) => {
    const ans = fn(n1, n2);

    expect(ans.length).toEqual(expected.length);
    ans.forEach((n) => expect(expected).toContain(n));
    expected.forEach((n) => expect(ans).toContain(n));
  });
};

describe(`349 intersection of two arrays`, () => {
  describe('Set & filter', () => testFn(intersection));
  describe('2 Set', () => testFn(intersection2));
});
