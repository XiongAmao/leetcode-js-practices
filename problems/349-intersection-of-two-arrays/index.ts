export function intersection(nums1: number[], nums2: number[]): number[] {
  return [...new Set<number>(nums1.filter((n) => nums2.includes(n)))];
}

export function intersection2(nums1: number[], nums2: number[]): number[] {
  const result = new Set<number>();
  const n1Set = new Set<number>(nums1);
  for (const n of nums2) {
    if (n1Set.has(n)) {
      result.add(n);
    }
  }
  return [...result];
}
