import { describe, expect, test } from '@jest/globals';
import { findContentChildren, findContentChildren2 } from '.';

const testFn = (fn: (g: number[], s: number[]) => number) => {
  test.each([
    [[1, 2, 3], [1, 1], 1],
    [[1, 2], [1, 2, 3], 2]
  ])('Case: %#', (g, s, ans) => {
    expect(fn(g, s)).toBe(ans);
  });
};

describe('455 assign cookies', () => {
  describe('find content children 1', () => testFn(findContentChildren));
  describe('find content children 2', () => testFn(findContentChildren2));
});
