export function generateMatrix(n: number): number[][] {
  /**
    [
      [1,  2,  3,  4]
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9,  8,  7]
    ]
  */

  // 二维数组初始化
  const result: number[][] = Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = Array(n);
  }

  const mid = Math.floor(n / 2);
  // 根据画图，推断得到圈数，奇偶下区别在于，奇数时最后一个节点是中间[mid][mid]

  let loop = Math.floor(n / 2);
  let offset = 1; // 采用左闭右开，遍历每条边的时候，最后一个节点是下一条边的起始节点，每一圈会偏移+1
  let count = 1; // 从1开始，每次自增1

  let rowStart = 0;
  let colStart = 0;
  let i = 0; // 外层数组
  let j = 0; // 内层数组

  // 先返回当前值，再自减
  while (loop--) {
    i = colStart;
    j = rowStart;

    // 从左到右
    for (j = colStart; j < n - offset; j++) {
      result[i][j] = count++;
    }

    // 从上到下
    for (i = rowStart; i < n - offset; i++) {
      result[i][j] = count++;
    }

    // 从右到左
    for (; j > colStart; j--) {
      result[i][j] = count++;
    }

    for (; i > rowStart; i--) {
      result[i][j] = count++;
    }

    // 每一圈偏移+1
    offset++;
    rowStart++;
    colStart++;
  }

  // 奇数时，最后一个节点是中间[mid][mid]
  if (n % 2 !== 0) {
    result[mid][mid] = count;
  }

  return result;
}
