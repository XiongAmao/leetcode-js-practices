import { describe, expect, test } from '@jest/globals';
import { hasCycleByHashTables, hasCycleByTwoPointers, ListNode } from '.';

const createSinglyLinkedList = (arr: number[]) => {
  const headNode = new ListNode();
  let cur = headNode;

  arr.forEach((num) => {
    cur.next = new ListNode(num);
    cur = cur.next;
  });

  return { head: headNode.next, end: cur };
};

const mergeSinglyLinkedList = (...arrTable: number[][]) => {
  if (arrTable.length === 0) return { head: null, end: null };
  const { head, end } = createSinglyLinkedList(arrTable[0]);
  let lastEnd = end;

  for (let i = 1; i < arrTable.length; i++) {
    const { head: curHead, end: curEnd } = createSinglyLinkedList(arrTable[i]);
    lastEnd.next = curHead;
    lastEnd = curEnd;
  }

  lastEnd.next = head;
  return { head, end: lastEnd };
};

const createCycleWithPos = (arr: number[], pos = -1) => {
  const { head, end } = createSinglyLinkedList(arr);
  let cur = head;
  if (pos >= 0) {
    for (let i = pos; i >= 0 && i < arr.length - 1; i--) {
      if (i !== 0) {
        cur = cur?.next || null;
      } else {
        end.next = cur;
      }
    }
  }

  return {
    head,
    end
  };
};

const testFn = (fn: (head: ListNode | null) => boolean) => {
  test.each([
    [null, false],
    [createSinglyLinkedList([1, 2, 3, 4]).head, false],
    [mergeSinglyLinkedList([1, 2, 3, 4], [5, 6, 7, 8]).head, true],
    [createCycleWithPos([1, 2], 0).head, true],
    [createCycleWithPos([1], -1).head, false]
  ])('Case: %#', (head, expected) => {
    expect(fn(head)).toBe(expected);
  });
};

describe('141 linked list cycle', () => {
  describe('hash table', () => testFn(hasCycleByHashTables));

  describe('two pointers', () => testFn(hasCycleByTwoPointers));
});
