import { describe, expect, test } from '@jest/globals';
import { lemonadeChange } from '.';

const testFn = (fn: (bills: number[]) => boolean) => {
  test.each([
    [[5, 5, 5, 10, 20], true],
    [[5, 5, 10], true],
    [[10, 10], false],
    [[5, 5, 10, 10, 20], false]
  ])('Case: %#', (bills, ans) => {
    expect(fn(bills)).toBe(ans);
  });
};

describe('860 lemonade change', () => {
  describe('lemonade change', () => testFn(lemonadeChange));
});
