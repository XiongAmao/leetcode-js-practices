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

const createBinaryTree = (sourceArr: (number | null)[]) => {
  const root = new TreeNode(sourceArr[0] || undefined);
  const queue = [root];
  let idx = 1;

  while (queue.length && idx < sourceArr.length) {
    const curNode = queue.shift();
    if (!curNode) continue;

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
  describe('fn 1', () => testFn(maxDepth2));

  describe('fn 2', () => testFn(maxDepth));
});
