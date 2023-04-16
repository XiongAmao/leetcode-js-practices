import { describe, expect, test } from '@jest/globals';
import { MyQueue } from '.';

const testFn = (Ctor: typeof MyQueue) => {
  type Action = 'push' | 'pop' | 'peek' | 'empty';
  type EachTuple = [Action[], number[][], (number | undefined | boolean)[]];
  test.each<EachTuple>([
    [
      ['push', 'push', 'peek', 'pop', 'empty'],
      [[1], [2], [], [], []],
      [undefined, undefined, 1, 1, false]
    ]
  ])('Case: %#', (actions, input, expected) => {
    const queue = new Ctor();
    actions.forEach((action, idx) => {
      const params = input[idx];
      expect(queue[action](params[0])).toEqual(expected[idx]);
    });
  });
};

describe(`232 implement queue using stacks`, () => {
  describe('fn 1', () => testFn(MyQueue));
});
