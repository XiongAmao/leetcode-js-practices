import { describe, expect, test } from '@jest/globals';
import { <%= funcName %> } from '.';

const testFn = (fn: typeof <%= funcName %>) => {
  test.each([
    []
  ])('Case: %#', (input, expected) => {
    expect(fn(input)).toEqual(expected);
  });
};

describe(`<%= title %>`, () => {
  describe('fn 1', () => testFn(<%= funcName %>));
});
