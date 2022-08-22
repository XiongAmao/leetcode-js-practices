import { describe, expect, test } from '@jest/globals';
import { detectCycle, ListNode } from '.';

const createSinglyLinkedList = (arr: number[]) => {
  const headNode = new ListNode();
  let cur = headNode;

  arr.forEach((num) => {
    cur.next = new ListNode(num);
    cur = cur.next;
  });

  return { head: headNode.next, end: cur };
};

const createCycleWithPos = (arr: number[], pos = -1) => {
  const { head, end } = createSinglyLinkedList(arr);
  let cur = head;

  // ensure pos cannot exceed array
  if (pos >= 0 && pos < arr.length) {
    for (let i = pos; i >= 0 && i < arr.length - 1; i--) {
      if (i > 0) {
        cur = cur?.next || null;
      } else {
        end.next = cur;
      }
    }
  }

  return {
    head,
    end,
    cycleNode: pos > 0 ? cur : null
  };
};

const testFn = (fn: (head: ListNode | null) => ListNode | null) => {
  test.each([
    [null, null],
    [[1, 2, 3, 4, 5], -1],
    [[1, 2, 3, 4], 2],
    [[3, 4, 5, 6, 7], 1]
  ])('Case: %#', (arr, pos) => {
    if (arr === null) {
      expect(fn(null)).toBe(null);
    } else {
      const { head, cycleNode } = createCycleWithPos(arr, pos);
      expect(fn(head)).toEqual(cycleNode);
    }
  });
};

describe('142 linked list cycle 2', () => {
  describe('detect cycle', () => testFn(detectCycle));
});
