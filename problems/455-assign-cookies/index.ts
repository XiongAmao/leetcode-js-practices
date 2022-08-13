export const findContentChildren = (g: number[], s: number[]) => {
  if (s.length === 0 || g.length === 0) return 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < Math.min(g.length, s.length); i++) {
    for (let j = 0; j < s.length; j++) {
      if (g[i] <= s[j]) {
        s.splice(j, 1);
        count += 1;
        break;
      }
    }
  }
  return count;
};

export const findContentChildren2 = (g: number[], s: number[]) => {
  if (s.length === 0 || g.length === 0) return 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[count] && count < g.length) {
      count++;
    }
  }

  return count;
};
