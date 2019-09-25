/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth2 = function(root) {
  if (!root) return 0;
  let queue = [root];
  let n = 0;

  while (queue.length) {
    const arr = [];
    // 一层节点，内层循环会把当前层所有节点遍历，把所有子节点丢到arr，然后n++
    while (queue.length) {
      let curr = queue.shift();
      if (curr.left) arr.push(curr.left);
      if (curr.right) arr.push(curr.right);
    }
    n++;
    queue = arr;
  }
  return n;
};

const maxDepth = function(root) {
  return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

module.exports = [
  maxDepth,
  maxDepth2
];
