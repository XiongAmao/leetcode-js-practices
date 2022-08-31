export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) return head;

  let prev = null;
  let cur: ListNode | null = null;

  while (head) {
    cur = head;
    head = head.next;
    cur.next = prev;
    prev = cur;
  }
  return cur;

  // let last = head;
  // let cur: ListNode | null = head.next;
  // head.next = null;

  // while (cur !== null) {
  //   const next: ListNode | null = cur.next;
  //   cur.next = prev;
  //   prev = cur;
  //   cur = next;
  // }
  // return cur;
}

export function reverseListRecurve(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const originalHead = head;
  let reverseHead: ListNode | null = null;

  function reverse(head: ListNode) {
    if (!head.next) {
      reverseHead = head;
      return head;
    } else {
      const curNode = reverse(head.next);
      if (curNode === null) return null;

      curNode.next = head;

      if (originalHead === head) {
        head.next = null;
        return reverseHead;
      } else {
        return head;
      }
    }
  }
  return reverse(head);
}
