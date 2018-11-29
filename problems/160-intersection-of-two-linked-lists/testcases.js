class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(arr) {
    this.headNode = new ListNode('head');
    let cur = this.headNode;

    arr.forEach((num, index) => {
      cur.next = new ListNode(num);
      if (index !== arr.length - 1 ) {
        cur = cur.next;
      }
    })

    this.endNode = cur;
  }

  getStart () {
    return this.headNode;
  };

  getEnd () {
    return this.endNode;
  };
}
const case1List1 = new SinglyLinkedList([1, 2]);
const case1List2 = new SinglyLinkedList([3, 8]);
const case1IntersectNode = new SinglyLinkedList([4, 7]).getStart();
case1List1.getEnd().next = case1IntersectNode;
case1List2.getEnd().next = case1IntersectNode;

const case2List1 = new SinglyLinkedList([1, 2]);
const case2List2 = new SinglyLinkedList([4, 7]);

const case3Input = new SinglyLinkedList([1]).getStart();

module.exports = [
  {
    inputText: `a: [1, 2, 4, 7], b :[3, 8, 4, 7]`,
    outputText: '4',
    input: [case1List1.getStart(), case1List2.getStart()],
    output: case1IntersectNode
  },
  {
    inputText: `a: [1, 2], b :[4, 7]`,
    outputText: 'null',
    input: [case2List1.getStart(), case2List2.getStart()],
    output: null
  },
  {
    inputText: `a: [1], b :[1]`,
    outputText: '1',
    input: [case3Input, case3Input],
    output: case3Input
  }
]
