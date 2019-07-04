class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createList = (arr) => {
  const headNode = new ListNode('head');
  let cur = headNode;

  arr.forEach(num => {
    cur.next = new ListNode(num);
    cur = cur.next;
  });

  return headNode.next;
};

module.exports = [
  {
    input: [createList([2,4,3]), createList([5,6,4])],
    output: createList([7,0,8])
  },
  {
    input: [createList([2,4,3]), createList([5,6,9])],
    output: createList([7,0,3,1])
  },
  {
    input: [createList([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), createList([5,6,9])],
    output: createList([5,6,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
  }
];
