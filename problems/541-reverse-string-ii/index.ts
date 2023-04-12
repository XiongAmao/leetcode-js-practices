export function reverseStr(s: string, k: number): string {
  const arr = s.split('');
  const swap = (l: number, r: number) => {
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  };

  let start = 0;
  let end = 2 * k - 1;

  // 遍历 所有 2 * k 段
  while (end < arr.length) {
    // 从start开始，交换前k个
    swap(start, start + k - 1);
    start = end + 1;
    end += 2 * k; // 右移 2k 位 初始时已经 -1，所以不需要再减
  }

  // 如果还有剩余
  if (start < arr.length) {
    const tempEnd = start + k - 1;
    // 交换前k个 , 或者只交换剩余部分
    swap(start, tempEnd < arr.length ? tempEnd : arr.length - 1);
  }

  return arr.join('');
}
