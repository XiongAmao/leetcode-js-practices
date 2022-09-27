export function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  // 相同时，判断是否存在重复的字符，无重复则不可交换
  if (s === goal) return s.length - new Set(s.split('')).size >= 1;

  let first = -1;
  let second = -1;

  const len = s.length;

  // 指针移动
  for (let i = 0; i < len; i++) {
    if (s[i] !== goal[i]) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        // 发现第3处不同，返回false
        return false;
      }
    }
  }

  // 最后为true的条件：有2处不同，且不同的位置交换后对应的元素相等
  return (
    second !== -1 && s[first] === goal[second] && s[second] === goal[first]
  );
}
