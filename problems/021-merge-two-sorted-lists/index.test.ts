import { describe, expect, test } from '@jest/globals';
import { ListNode, mergeTwoLists } from '.';

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

const testFn = (fn: typeof mergeTwoLists) => {
  test.each([
    [
      [1, 2, 4],
      [1, 3, 4],
      [1, 1, 2, 3, 4, 4]
    ],
    [[1, 2, 3, 4, 5, 6, 7], null, [1, 2, 3, 4, 5, 6, 7]],
    [null, null, null], // testcase 208: [] [] => []
    [[], [0], [0]],
    [[], [], []]
  ])('Case: %#', (list1, list2, expected) => {
    const l1Node = createSinglyLinkedList(list1);
    const l2Node = createSinglyLinkedList(list2);
    const expectedNode = createSinglyLinkedList(expected);
    expect(fn(l1Node, l2Node)).toEqual(expectedNode);
  });
};

describe('021 merge two sorted lists', () => {
  describe('merge two lists 1', () => testFn(mergeTwoLists));
});
