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


/**
 * NOTICE:
 * the start node of cycle linked list may not be in the loop
 *
 * e.g.
 * a(head) ->  b  ->  c(the starting point)  ->  d  ->  e  ->  c(the starting point ) -> d  ...
 *
 */
class CycleLinkedList {
  constructor(arr, singlyLinkedList) {
    if (singlyLinkedList) {
      this.headNode = singlyLinkedList.getEnd();
      this.startNode = singlyLinkedList.getStart();
    } else {
      this.headNode = new ListNode('head');
      this.startNode = this.headNode;
    }

    let cur = this.headNode;

    arr.forEach(num => {
      cur.next = new ListNode(num);
      cur = cur.next;
    });
    cur.next = this.headNode;
  }

  getLoopStart () {
    return this.headNode;
  }
  getStart () {
    return this.startNode;
  }
}
const linkedList1 = new CycleLinkedList([1, 2, 3, 4]);
const input1 = linkedList1.getStart();
const output1 = linkedList1.getLoopStart();


const linkedList2 = new CycleLinkedList(
  [1, 2, 3, 4, 5],
  new SinglyLinkedList([6, 7, 8, 9])
);
const input2 = linkedList2.getStart();
const output2 = linkedList2.getLoopStart();

module.exports = [
  {
    inputText: 'null',
    outputText: 'false',
    input: [null],
    output: null
  },
  {
    inputText: 'Singlely linked list',
    outputText: 'false',
    input: [new SinglyLinkedList([1, 2, 3, 4]).getStart()],
    output: null
  },
  {
    inputText: 'Pure Cycle linked list',
    outputText: 'start node of loop',
    input: [input1],
    output: output1
  },
  {
    inputText: 'Cycle linked list',
    outputText: 'start node of loop',
    input: [input2],
    output: output2
  }
];
