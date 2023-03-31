import { describe, expect, test } from '@jest/globals';
import { LRUCache, LRUCacheWithMap } from '.';

const testFn = (LRUConstructor: typeof LRUCacheWithMap | typeof LRUCache) => {
  type Action = 'LRUCache' | 'put' | 'get';
  type EachTuple = [Action[], number[][], (null | number)[]];

  test.each<EachTuple>([
    [
      [
        'LRUCache',
        'put',
        'put',
        'get',
        'put',
        'get',
        'put',
        'get',
        'get',
        'get'
      ],
      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
      [null, null, null, 1, null, -1, null, -1, 3, 4]
    ],
    [
      [
        'LRUCache',
        'put',
        'put',
        'get',
        'put',
        'get',
        'put',
        'get',
        'get',
        'get'
      ],
      [[2], [1, 0], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
      [null, null, null, 0, null, -1, null, -1, 3, 4]
    ]
  ])('Case: %#', (actions, input, expected) => {
    const cache = new LRUConstructor(input[0][0]);
    actions.forEach((action, idx) => {
      const params = input[idx];
      if (action === 'get') {
        expect(cache.get(params[0])).toEqual(expected[idx]);
      } else if (action === 'put') {
        cache.put(params[0], params[1]);
      }
    });
  });
};

describe(`146 LRU Cache`, () => {
  describe('fn use js Map()', () => testFn(LRUCacheWithMap));
  describe('use list node & hash', () => testFn(LRUCache));
});
