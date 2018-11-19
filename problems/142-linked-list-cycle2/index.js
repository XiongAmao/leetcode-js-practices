/**
 * Given a linked list, return the node where the cycle begins.
 * If there is no cycle, return null.
 * Note: Do not modify the linked list.
 *
 * Follow up:
 * Can you solve it without using extra space?
 *
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
const detectCycle = (head) => {
  if (!head) return null;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) break;
  }
  if (fast === null || fast.next === null) return null;

  fast = head;

  while(fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

module.exports = [
  detectCycle
]
