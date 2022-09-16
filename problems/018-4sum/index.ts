export function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const res: number[][] = [];

  for (let i = 0; i < n - 3; i++) {
    // 去重操作
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      // 去重操作
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      // 在[j+1, n -1]区间内定义左右指针
      let left = j + 1;
      let right = n - 1;

      // 滑动指针
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        // 如果四数之和大于目标值，右指针左移一位
        if (sum > target) {
          right--;
          continue;
        }

        // 如果四数之和小于目标值，左指针右移一位
        if (sum < target) {
          left++;
          continue;
        }

        // 添加符合条件的数值
        res.push([nums[i], nums[j], nums[left], nums[right]]);
        // 继续滑动指针寻找其他满足条件的值
        left++;
        right--;

        // 如果左右指针滑动后的值和之前的值相等则继续滑动，直到值不重复为止
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return res;
}
