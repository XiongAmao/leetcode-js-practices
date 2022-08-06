export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const headNode = new ListNode();
  let needCarry = false;
  let curNode = headNode;

  while (l1 || l2 || needCarry) {
    let val = needCarry ? 1 : 0;

    if (l1) {
      val = val + l1.val;
      l1 = l1.next || null;
    }

    if (l2) {
      val = val + l2.val;
      l2 = l2.next || null;
    }

    if (val > 9) {
      needCarry = true;
      val = val - 10;
    } else {
      needCarry = false;
    }

    curNode.next = new ListNode(val);
    curNode = curNode.next;
  }

  return headNode.next;
};

export const addTwoNumbers2 = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const headNode = new ListNode(0);
  let carry = 0;
  let curNode = headNode;

  while (l1 || l2 || carry) {
    let val = carry;

    if (l1) {
      val = val + l1.val;
      l1 = l1.next || null;
    }

    if (l2) {
      val = val + l2.val;
      l2 = l2.next || null;
    }

    carry = val > 9 ? 1 : 0;

    curNode.next = new ListNode(val % 10);
    curNode = curNode.next;
  }

  return headNode.next;
};
