export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) return list1;

  const headNode = new ListNode();
  let curNode = headNode;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      curNode.next = list2;
      list2 = list2.next;
    } else {
      curNode.next = list1;
      list1 = list1.next;
    }
    curNode = curNode.next;
  }

  curNode.next = list1 !== null ? list1 : list2;

  return headNode.next;
};
