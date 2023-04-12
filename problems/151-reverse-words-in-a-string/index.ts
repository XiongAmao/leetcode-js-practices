export function reverseWords(s: string): string {
  const arr = Array.from(s);
  let len = arr.length;

  const swap = (i: number, j: number) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  // 从尾部开始遍历，中段保留一个空格，尾部不保留空格
  // 非空格或首个空格移动到预放置位置
  const removeExtraSpace = () => {
    let prevSpace = false;
    // 放置指针
    let storeIdx = arr.length - 1;
    // 索引指针
    let i = storeIdx;
    // 先处理尾段空格
    while (arr[i] === ' ' && i >= 0) {
      prevSpace = true;
      i--;
    }
    while (i >= 0) {
      // 非空格
      if (arr[i] !== ' ') {
        prevSpace = false;
        swap(i, storeIdx);
        storeIdx--;
        // 空格，且i + 1不是空格, 保留一个空格
      } else if (!prevSpace) {
        prevSpace = true;
        swap(i, storeIdx);
        storeIdx--;
      }
      i--;
    }
    // 遍历完, 0 至 storeIdx 或 0 至 storeIdx + 1(最后遍历保留多一个空格的情况) 为空格
    len = arr.length - (storeIdx + (prevSpace ? 2 : 1));
  };
  const reverse = (l: number, r: number) => {
    while (l < r) {
      swap(l, r);
      l++;
      r--;
    }
  };

  removeExtraSpace();
  reverse(0, arr.length - 1);
  // 移除尾端
  arr.length = len;

  // 反转每个单词
  let left = 0;
  while (left < len - 1) {
    let right = left + 1;
    // 非空格
    while (right < len && arr[right] !== ' ') {
      right++;
    }
    // right 为空格时, 且不为一个字符
    if (left !== right - 1) {
      reverse(left, right - 1);
    }
    left = right + 1;
  }

  return arr.join('');
}
