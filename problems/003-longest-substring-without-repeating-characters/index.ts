export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1;
  const map = new Map();

  let start = 0;
  let ans = 0;

  // 遍历右边指针
  // 如果遇到重复的字符就重置左边指针至上一个重复点的下一位
  // 每轮都更新字符最新的位置
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (map.has(char)) {
      // start 只向右移动
      // 且移动到上一个重复的字符的下一位
      start = Math.max(map.get(char) + 1, start);
    }
    map.set(s[end], end);
    ans = Math.max(ans, end - start + 1);
  }

  return ans;
}
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/solution/hua-jie-suan-fa-3-wu-zhong-fu-zi-fu-de-zui-chang-z/
