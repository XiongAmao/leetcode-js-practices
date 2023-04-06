import { describe, expect, test } from '@jest/globals';
import { ListNode, removeElements } from '.';

const createSinglyLinkedList = (arr: number[]) => {
  const dummyHead = new ListNode();
  let cur = dummyHead;

  arr.forEach((num) => {
    cur.next = new ListNode(num);
    cur = cur.next;
  });

  return { head: dummyHead.next, end: cur };
};

const testFn = (fn: typeof removeElements) => {
  test.each([
    [[1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]],
    [[], 1, []],
    [[7, 7, 7, 7], 7, []],
    [[1, 2, 2, 1], 2, [1, 1]]
  ])('Case: %#', (headArray, target, expectedArray) => {
    const { head } = createSinglyLinkedList(headArray);
    const { head: expected } = createSinglyLinkedList(expectedArray);

    expect(fn(head, target)).toEqual(expected);
  });
};

describe(`203 remove linked list elements`, () => {
  describe('fn 1', () => testFn(removeElements));
});
