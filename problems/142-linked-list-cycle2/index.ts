export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const detectCycle = (head: ListNode | null): ListNode | null => {
  if (head === null) return null;

  const map = new Map();
  while (head.next !== null) {
    if (map.get(head)) {
      return head;
    } else {
      map.set(head, 1);
      head = head.next;
    }
  }
  return null;
};
