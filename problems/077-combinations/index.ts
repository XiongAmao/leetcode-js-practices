export function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  const used: number[] = [];

  // 使用startIdx 即每层深度只遍历后续数字
  // 因为此题求的是组合，不论顺序，
  // 因此如果每轮递归塞入前面的数字，则会重复
  // 只需遍历后续数即可完成剪枝
  const dfs = (startIdx: number) => {
    if (used.length === k) {
      result.push([...used]);
      return;
    }
    for (let i = startIdx; i <= n; i++) {
      used.push(i);
      dfs(i + 1);
      used.pop();
    }
  };

  dfs(1);

  return result;
}
