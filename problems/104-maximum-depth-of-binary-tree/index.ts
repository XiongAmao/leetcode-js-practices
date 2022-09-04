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
  let queue = [root];
  let n = 0;

  while (queue.length) {
    const arr = [];
    // 一层节点，内层循环会把当前层所有节点遍历，把所有子节点丢到arr，然后n++
    while (queue.length) {
      const cur = queue.shift();
      if (!cur) continue;
      if (cur.left) arr.push(cur.left);
      if (cur.right) arr.push(cur.right);
    }
    n++;
    queue = arr;
  }
  return n;
};

export const maxDepth2 = function (root: TreeNode | null): number {
  return !root ? 0 : Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1;
};
