class ListNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const createTree = (sourceArr) => {
  const root = new ListNode(sourceArr[0]);
  const queue = [root];
  let idx = 1;

  while (queue.length && idx < sourceArr.length) {
    const curNode = queue.shift();

    if (idx < sourceArr.length) {
      const val = sourceArr[idx];
      if (val) {
        queue.push(addNode(val, curNode));
      }
      idx++;
    }

    if (idx < sourceArr.length) {
      const val = sourceArr[idx];
      if (val) {
        queue.push(addNode(val, curNode, 'right'));
      }
      idx++;
    }
  }

  return root;
};

const addNode = (val, curNode, key = 'left') => {
  const newNode = new ListNode(val);
  curNode[key] = newNode;
  return newNode;
};

const createCase = (input, output) => {
  const root = createTree(input);

  return (fn) => {
    expect(fn(root)).toEqual(output);
  };
};

module.exports = [
  createCase([3, 9, 20, null, null, 15, 7], 3),
  createCase([1, 3, 6, null, 9, 7, 10, null, 12, null, 99, null, null, 6, null], 5),
  createCase([1, 2, 3, null, null, null, 4, 5, null, 6, null, null, 7, null, 8, 9, null], 8)
];
