import { describe, expect, test } from '@jest/globals';
import { maxDepth2, maxDepth, TreeNode } from '.';

const addNode = (val: number, curNode: TreeNode, key = 'left') => {
  const newNode = new TreeNode(val);

  if (key === 'right') {
    curNode.right = newNode;
  } else {
    curNode.left = newNode;
  }

  return newNode;
};

// case data 是同层级按从左(叶)至右(叶)，不同层从上至下，
// 为每一个节点的子节点添加节点，null为节点
// 因此通过一个队列，取先进的节点，为其添加左右叶，
// 并按顺序将新添加的节点放入队列即可实现
const createBinaryTree = (sourceArr: (number | null)[]) => {
  const root = new TreeNode(sourceArr[0] || undefined);
  const queue = [root];
  let idx = 1;

  while (queue.length && idx < sourceArr.length) {
    const curNode = queue.shift();

    if (!curNode) continue; // for type check

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

const testFn = (fn: (root: TreeNode | null) => number) => {
  test.each([
    [[3, 9, 20, null, null, 15, 7], 3],
    [[1, 3, 6, null, 9, 7, 10, null, 12, null, 99, null, null, 6, null], 5],
    [
      [
        1,
        2,
        3,
        null,
        null,
        null,
        4,
        5,
        null,
        6,
        null,
        null,
        7,
        null,
        8,
        9,
        null
      ],
      8
    ]
  ])('Case: %#', (data, expected) => {
    const head = createBinaryTree(data);
    expect(fn(head)).toBe(expected);
  });
};

describe('104 maximum depth of binary tree', () => {
  describe('dual queue', () => testFn(maxDepth2));

  describe('recursion', () => testFn(maxDepth));
});
