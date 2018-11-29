/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * For example, the following two linked lists:
 * A:         a1 → a2
 *                    ↘
 *                     c1 → c2 → c3
 *                    ↗
 * B:     b1 → b2 → b3
 *
 * begin to intersect at node c1.
 *
 * Notes:
 *
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function returns.
 * You may assume there are no cycles anywhere in the entire linked structure.
 *
 * Your code should preferably run in O(n) time and use only O(1) memory.
 *
 * Credits:
 *
 * Special thanks to @stellari for adding this problem and creating all test cases.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNodeHashMap = (headA, headB) => {
  if (!headA || !headB) return null;

  const hashMap = new Map()

  while(headA) {
    hashMap.set(headA, 'node');
    headA = headA.next;
  };

  while(headB) {
    if (hashMap.has(headB)) {
      return headB;
    };
    headB = headB.next;
  }
  return null;
};

const getIntersectionNodeTwoPointer = (headA, headB) => {
  if (headA === headB) return headA;
  if (!headA || !headB) return null;

  let curA = headA;
  let curB = headB;
  let aLoopDone = false;
  let bLoopDone = false;

  while(true) {
    if (curA !== curB) {
      if (curA.next) {
        curA = curA.next;
      } else if (!aLoopDone) {
        curA = headB;
        aLoopDone = true;
      } else {
        return null;
      };

      if (curB.next) {
        curB = curB.next;
      } else if (!bLoopDone) {
        curB = headA;
        bLoopDone = true;
      } else {
        return null;
      };

    } else {
      return curA;
    }
  }
};

module.exports = [
  getIntersectionNodeHashMap,
  getIntersectionNodeTwoPointer
]

