export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function getIntersectionNodeHashMap(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const map = new Map();
  while (headA) {
    map.set(headA, 1);
    headA = headA.next;
  }
  while (headB) {
    if (map.get(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
}

export function getIntersectionNodeTwoPointer(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === headB) return headA;
  if (!headA || !headB) return null;

  let curA = headA;
  let curB = headB;
  let aDone = false;
  let BDone = false;

  while (true) {
    if (curA !== curB) {
      if (curA.next) {
        curA = curA.next;
      } else if (!aDone) {
        curA = headB;
        aDone = true;
      } else {
        return null;
      }

      if (curB.next) {
        curB = curB.next;
      } else if (!BDone) {
        curB = headA;
        BDone = true;
      } else {
        return null;
      }
    } else {
      return curA;
    }
  }
}
