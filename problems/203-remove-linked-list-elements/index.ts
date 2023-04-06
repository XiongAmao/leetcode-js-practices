export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (head === null) return null;

  const dummyHead = new ListNode();
  let cur: ListNode | null = dummyHead;

  dummyHead.next = head;

  while (cur !== null && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return dummyHead.next;
}
