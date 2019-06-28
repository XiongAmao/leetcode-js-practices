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
    });

    this.endNode = cur;
  }

  getStart () {
    return this.headNode;
  }

  getEnd () {
    return this.endNode;
  }
}

const case1InputHead = new SinglyLinkedList([1, 2, 3, 4]).getStart().next;
const case1OutputHead = new SinglyLinkedList([4, 3, 2, 1]).getStart().next;

const case3Node = new ListNode(1);

module.exports = [
  {
    inputText: 'NodeList [1, 2, 3, 4]',
    outputText: 'NodeList [4, 3, 2, 1]',
    input: [case1InputHead],
    output: case1OutputHead
  },
  {
    inputText: 'NodeList []',
    outputText: 'NodeList []',
    input: [null],
    output: null
  },
  {
    inputText: 'NodeList [1]',
    outputText: 'NodeList [1]',
    input: [case3Node],
    output: case3Node
  }
];
