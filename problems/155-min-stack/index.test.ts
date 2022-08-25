import { describe, expect, test } from '@jest/globals';
import { MinStack } from '.';

const testMinStack = (MinStackConstructor: typeof MinStack) => {
  type Action = 'MinStack' | 'push' | 'getMin' | 'pop' | 'top';
  type EachTuple = [Action[], number[][], (null | number)[]];
  test.each<EachTuple>([
    [
      ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'],
      [[], [-2], [0], [-3], [], [], [], []],
      [null, null, null, null, -3, null, 0, -2]
    ],
    [
      ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'getMin'],
      [[], [0], [1], [0], [], [], []],
      [null, null, null, null, 0, null, 0]
    ]
  ])('Case: %#', (actions, params, expected) => {
    let stack = new MinStackConstructor();
    const result: (number | null)[] = [];
    actions.forEach((action, idx) => {
      if (action === 'MinStack') {
        stack = new MinStackConstructor();
        result[idx] = null;
      } else {
        const input = params[idx][0];
        const r = stack[action](input);
        result[idx] = r === undefined ? null : r;
      }
    });
    expect(result).toEqual(expected);
  });
};

describe('155 min stack', () => {
  testMinStack(MinStack);
});
