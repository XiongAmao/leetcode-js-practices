export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const hasCycleByHashTables = (head: ListNode | null): boolean => {
  if (!head) return false;

  const map = new WeakMap();
  while (head.next !== null) {
    if (!map.has(head)) {
      map.set(head, 1);
      head = head.next;
    } else {
      return true;
    }
  }
  return false;
};

export const hasCycleByTwoPointers = (head: ListNode | null): boolean => {
  if (!head) return false;
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast && fast.next && slow && slow.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) return true;
  }
  if (fast === null || fast.next === null) return false;

  return false;
};
