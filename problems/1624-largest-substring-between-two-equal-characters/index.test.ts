import { describe, expect, test } from '@jest/globals';
import { maxLengthBetweenEqualCharacters } from '.';

const testFn = (fn: typeof maxLengthBetweenEqualCharacters) => {
  test.each([
    ['aa', 0],
    ['abca', 2],
    ['cbzxy', -1],
    ['cabbac', 4]
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`1624 Largest Substring Between Two Equal Characters`, () => {
  describe('fn 1', () => testFn(maxLengthBetweenEqualCharacters));
});
