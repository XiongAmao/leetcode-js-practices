import { describe, expect, test } from '@jest/globals';
import { singleNumber, xor, xor2 } from '.';

const testFn = (fn: (input: number[]) => number) => {
  test.each([
    [[2, 2, 1], 1],
    [[1, 1, 2], 2]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toBe(expected);
  });
};

describe('136 single number', () => {
  describe('hash map', () => testFn(singleNumber));
  describe('xor 1', () => testFn(xor));
  describe('xor 2', () => testFn(xor2));
});
