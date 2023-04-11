import { describe, expect, test } from '@jest/globals';
import { canConstruct } from '.';

const testFn = (fn: typeof canConstruct) => {
  test.each([
    ['a', 'a', true],
    ['a', 'b', false],
    ['aa', 'ab', false],
    ['aa', 'aab', true]
  ])('Case: %#', (r, m, expected) => {
    expect(fn(r, m)).toEqual(expected);
  });
};

describe(`383 ransom note`, () => {
  describe('fn 1', () => testFn(canConstruct));
});
