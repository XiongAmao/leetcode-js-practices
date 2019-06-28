/**
 * Reverse a singly linked list.
 *
 * Example:
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 *
 * Follow up:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseListIteratively = (head) => {
  if (!head || !head.next) return head;

  let cur;
  let prev = null;

  while(head) {
    cur = head;
    head = head.next;
    cur.next = prev;
    prev = cur;
  }
  return cur;
};

const reverseListRecurse = (head) => {
  if (!head || !head.next) return head;
  let originalHead = head;
  let reverseHead;

  function reverse(head) {
    if (!head.next) {
      reverseHead = head;
      return head;
    } else {
      let curNode = reverse(head.next);
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
};

module.exports = [
  reverseListIteratively
];
