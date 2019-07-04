function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const headNode = new ListNode('head');
  let needCarry = false;
  let curNode = headNode;

  while(l1 || l2 || needCarry) {
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

module.exports = [
  addTwoNumbers
];
