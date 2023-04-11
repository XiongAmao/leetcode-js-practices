export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  // 暴力下需要4层循环嵌套 n^4
  // 拆成2组，每组2层循环嵌套，通过哈希表储存得到的相加结果计数， 2 * n^2
  // a b 组结果 相减为0时说明有匹配，即得到 a组计数+当前b组循环内结果
  let count = 0;
  let map = new Map<number, number>();

  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const n = n1 + n2;
      // 相加数为key
      map.set(n, (map.get(n) || 0) + 1);
    }
  }

  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const n = n3 + n4;
      count += map.get(0 - n) || 0;
    }
  }

  return count;
}
