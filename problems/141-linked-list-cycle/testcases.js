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
  })

  return headNode.next;
}

const createCycleLinkedList = (arr) => {
  const headNode = new ListNode('head');
  let cur = headNode;

  arr.forEach(num => {
    cur.next = new ListNode(num);
    cur = cur.next;
  })
  cur.next = headNode;

  return headNode;
}

module.exports = [
  {
    inputText: 'null',
    outputText: 'false',
    input: [null],
    output: false
  },
  {
    inputText: 'Singlely linked List',
    outputText: 'false',
    input: [createSinglyLinkedList([1, 2, 3, 4])],
    output: false
  },
  {
    inputText: 'Cycle linked List',
    outputText: 'true',
    input: [createCycleLinkedList([1, 2, 3, 4])],
    output: true
  }
]
