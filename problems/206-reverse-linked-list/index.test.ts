import { describe, expect, test } from '@jest/globals';
import { ListNode, reverseList, reverseListRecurve } from '.';

export const createSinglyLinkedList = (arr: number[]) => {
  const headNode = new ListNode();
  let cur = headNode;

  arr.forEach((num) => {
    cur.next = new ListNode(num);
    cur = cur.next;
  });

  return { head: headNode.next, end: cur };
};

const testFn = (fn: (head: ListNode | null) => ListNode | null) => {
  test.each([
    [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1]
    ],
    [[1], [1]]
  ])('Case: %#', (inputArr, reverseArr) => {
    const input = createSinglyLinkedList(inputArr);
    const result = createSinglyLinkedList(reverseArr);

    expect(fn(input.head)).toEqual(result.head);
  });
};

describe('206 reverse linked list', () => {
  describe('iteration', () => testFn(reverseList));
  describe('recurve', () => testFn(reverseListRecurve));
});
