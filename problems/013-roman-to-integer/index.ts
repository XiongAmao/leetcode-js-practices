export const romanToInt = (s: string): number => {
  const map: {
    [index: string]: number;
  } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]];
    const prev = map[s[i - 1]] || 0;
    num = num + cur - (cur > prev ? prev * 2 : 0);
  }

  return num;
};
