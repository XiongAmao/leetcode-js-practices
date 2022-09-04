export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const maxDepth = function (root: TreeNode | null): number {
  if (!root) return 0;
  let outQueue = [root];
  let n = 0;

  while (outQueue.length) {
    const innerQueue = [];

    while (outQueue.length) {
      const cur = outQueue.shift(); // shift return T | undefined
      if (!cur) continue; // for type check
      if (cur.left) innerQueue.push(cur.left);
      if (cur.right) innerQueue.push(cur.right);
    }
    // 内层循环，取每一个外层queue节点，将子节点全加入到innerQueue
    // 此时外层处理完, 层级+1 将inner重新赋值给outQueue
    n++;
    outQueue = innerQueue;
  }
  return n;
};

// TODO: 子问题
export const maxDepth2 = function (root: TreeNode | null): number {
  return !root ? 0 : Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1;
};
