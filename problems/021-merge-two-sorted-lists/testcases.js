class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createSinglyLinkedList = (arr) => {
  const headNode = new ListNode('head');
  let cur = headNode;

  arr.forEach(num => {
    cur.next = new ListNode(num);
    cur = cur.next;
  });

  return headNode.next;
};

module.exports = [
  // [1,2,4] [1,3,4]  => [1,1,2,3,4,4]
  {
    input: [createSinglyLinkedList([1, 2, 4]), createSinglyLinkedList([1, 3, 4])],
    output: createSinglyLinkedList([1, 1, 2, 3, 4, 4])
  },
  {
    input: [createSinglyLinkedList([1,2,3,4,5,6,7]), null],
    output: createSinglyLinkedList([1,2,3,4,5,6,7])
  },
  // testcase 208: [] [] => []
  {
    input: [null, null],
    output: null
  }
];
