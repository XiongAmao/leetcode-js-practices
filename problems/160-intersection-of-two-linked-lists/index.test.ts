import { describe, expect, test } from '@jest/globals';
import {
  getIntersectionNodeHashMap,
  getIntersectionNodeTwoPointer,
  ListNode
} from '.';

type MaybeNode = ListNode | null;
type HeadEnd = {
  head: MaybeNode;
  end: MaybeNode;
};

const createIntersectionCase = (
  intersectVal: number,
  listA: number[],
  listB: number[]
): {
  a: HeadEnd;
  b: HeadEnd;
  intersectionNode: MaybeNode;
} => {
  const headA = new ListNode();
  const headB = new ListNode();
  let curA: ListNode = headA;
  let curB: ListNode = headB;
  let intersectionNode: MaybeNode = null;

  listA.forEach((val) => {
    const node = new ListNode(val);
    if (intersectVal !== 0 && val === intersectVal) {
      intersectionNode = node;
    }
    curA.next = node;
    curA = curA.next;
  });

  for (let i = 0; i < listB.length; i++) {
    if (intersectVal === listB[i]) {
      curB.next = intersectionNode;
      break;
    }
    curB.next = new ListNode(listB[i]);
    curB = curB.next;
  }

  return {
    a: {
      head: headA.next,
      end: curA
    },
    b: {
      head: headB.next,
      end: intersectVal === 0 ? curB : curA
    },
    intersectionNode
  };
};

const testFn = (
  fn: (headA: ListNode | null, headB: ListNode | null) => ListNode | null
) => {
  test.each([
    [8, [4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5]],
    [2, [1, 9, 1, 2, 4], [3, 2, 4]],
    [0, [2, 6, 4], [1, 5]],
    [1, [1], [1]]
  ])('Case: %#', (intersectVal, listA, listB) => {
    const { a, b, intersectionNode } = createIntersectionCase(
      intersectVal,
      listA,
      listB
    );
    expect(fn(a.head, b.head)).toEqual(intersectionNode);
  });
};

describe('160 intersection of two linked lists', () => {
  describe('hash map', () => testFn(getIntersectionNodeHashMap));
  describe('tow pointer', () => testFn(getIntersectionNodeTwoPointer));
});
