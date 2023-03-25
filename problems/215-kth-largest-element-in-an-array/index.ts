// 时间复杂度 O(n)
export function findKthLargest(nums: number[], k: number): number {
  if (nums.length === 1) {
    return nums[0];
  }

  type Partition<T> = (left: number, right: number) => T;
  const swap = (i: number, k: number) => {
    [nums[i], nums[k]] = [nums[k], nums[i]];
  };

  // 使用快排的原地分区重排，找到倒数第k个数为支点，支点左右均为排好
  // length - 1 为倒数第一个下标 因此目标支点为 length - k
  // 此时返回length - k值即可
  const target = nums.length - k;

  const partition: Partition<number> = (left, right) => {
    const pivot = nums[left];
    let storeIdx = left + 1;
    for (let i = storeIdx; i <= right; i++) {
      if (nums[i] < pivot) {
        swap(i, storeIdx);
        storeIdx++;
      }
    }
    swap(storeIdx - 1, left);
    return storeIdx - 1;
  };
  const partitionNums: Partition<void> = (left, right) => {
    const pIdx = partition(left, right);
    if (pIdx < target) {
      partitionNums(pIdx + 1, right);
    }
    if (pIdx > target) {
      partitionNums(left, pIdx - 1);
    }
  };

  partitionNums(0, nums.length);
  return nums[target];
}
