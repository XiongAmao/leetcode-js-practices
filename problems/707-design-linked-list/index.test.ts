import { describe, expect, test } from '@jest/globals';
import { MyLinkedList } from '.';

const testFn = (Ctor: typeof MyLinkedList) => {
  type Action =
    | 'new'
    | 'addAtHead'
    | 'addAtTail'
    | 'addAtIndex'
    | 'get'
    | 'deleteAtIndex';
  type EachTuple = [Action[], number[][], (number | null)[]];

  test.each<EachTuple>([
    [
      [
        'new',
        'addAtHead',
        'addAtTail',
        'addAtIndex',
        'get',
        'deleteAtIndex',
        'get'
      ],
      [[], [1], [3], [1, 2], [1], [1], [1]],
      [null, null, null, null, 2, null, 3]
    ]
  ])('Case: %#', (actions, input, expected) => {
    const linkedList = new Ctor();
    actions.forEach((action, idx) => {
      const params = input[idx];

      if (
        action === 'addAtHead' ||
        action === 'addAtTail' ||
        action === 'deleteAtIndex'
      ) {
        linkedList[action](params[0]);
      }
      if (action === 'addAtIndex') {
        linkedList.addAtIndex(params[0], params[1]);
      }
      if (action === 'get') {
        expect(linkedList.get(params[0])).toEqual(expected[idx]);
      }
    });
  });
};

describe(`707 design linked list`, () => {
  describe('fn 1', () => testFn(MyLinkedList));
});
