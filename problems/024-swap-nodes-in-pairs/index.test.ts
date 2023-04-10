import { describe, expect, test } from '@jest/globals';
import { ListNode, swapPairs } from '.';

const createSinglyLinkedList = (arr: number[] | null) => {
  if (arr === null || arr.length === 0) return null;

  const headNode = new ListNode();
  let cur = headNode;

  arr.forEach((num) => {
    cur.next = new ListNode(num);
    cur = cur.next;
  });

  return headNode.next;
};

const testFn = (fn: typeof swapPairs) => {
  test.each([
    [
      [1, 2, 3, 4],
      [2, 1, 4, 3]
    ],
    [[1], [1]],
    [[], []]
  ])('Case: %#', (list, expectedList) => {
    const head = createSinglyLinkedList(list);
    const expectedHead = createSinglyLinkedList(expectedList);
    expect(fn(head)).toEqual(expectedHead);
  });
};

describe(`024 swap nodes in pairs`, () => {
  describe('fn 1', () => testFn(swapPairs));
});
