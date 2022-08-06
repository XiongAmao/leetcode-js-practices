import { addTwoNumbers, addTwoNumbers2, ListNode } from '.';

const createNumberNodeList = (arr: number[]) => {
  const headNode = new ListNode();
  let cur = headNode;

  arr.forEach((num) => {
    cur.next = new ListNode(num);
    cur = cur.next;
  });

  return headNode.next;
};

const initTable = [
  [
    [2, 4, 3],
    [5, 6, 4],
    [7, 0, 8]
  ],
  [
    [2, 4, 3],
    [5, 6, 9],
    [7, 0, 3, 1]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [5, 6, 9],
    [5, 6, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  ]
];

const testCases = (fn: typeof addTwoNumbers) => {
  test.each(initTable)('Case: %#', (arr1, arr2, countArr) => {
    const l1 = createNumberNodeList(arr1);
    const l2 = createNumberNodeList(arr2);
    const expectNode = createNumberNodeList(countArr);
    expect(fn(l1, l2)).toEqual(expectNode);
  });
};

describe('002: add two number', () => {
  describe('addTwoNumber1', () => {
    testCases(addTwoNumbers);
  });

  describe('addTwoNumber2', () => {
    testCases(addTwoNumbers2);
  });
});
