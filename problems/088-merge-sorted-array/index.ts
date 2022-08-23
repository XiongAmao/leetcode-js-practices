export interface MergeFunc {
  (nums1: number[], m: number, nums2: number[], n: number): void;
}
export const merge: MergeFunc = (nums1, m, nums2, n) => {
  while (n > 0) {
    //  index = m/n - 1
    if (nums1[m - 1] > nums2[n - 1]) {
      m -= 1;
      nums1[m + n] = nums1[m];
      // nums1[m + n - 1] = nums1[m - 1];
      // m -= 1;
    } else {
      n -= 1;
      nums1[m + n] = nums2[n];
      // nums1[m + n - 1] = nums2[n - 1];
      // n -= 1;
    }
  }
};
