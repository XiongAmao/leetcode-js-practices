import { describe, expect, test } from '@jest/globals';
import { climbStairsDP, climbStairsMemo } from '.';

type DoneCallback = (reason?: string | Error) => void;

const testFn = (fn: (n: number) => number) => {
  test.each<(number | DoneCallback)[]>([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [6, 13],
    [30, 1346269],
    [44, 1134903170],
    [60, 2504730781961]
  ])('Case: %#', (input, expected, done) => {
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34617
    expect(fn(input as number)).toBe(expected);
    setTimeout(() => {
      (done as DoneCallback)();
    }, 10);
  });
};

describe('070 climbing stairs', () => {
  describe('recursion with memorization', () => testFn(climbStairsMemo));

  describe('dynamic programing', () => testFn(climbStairsDP));
});
