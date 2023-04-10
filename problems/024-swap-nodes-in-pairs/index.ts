export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  const dummyHead = new ListNode(0, head);
  let cur = dummyHead;
  // 4指针，交换数+前后指针
  while (cur.next && cur.next.next) {
    const left = cur.next;
    const right = cur.next.next;
    const next = cur.next.next.next;

    cur.next = right;
    right.next = left;
    left.next = next;

    // 交换完，left作为下一对匹配的首个指针
    cur = left;
  }

  return dummyHead.next;
}
