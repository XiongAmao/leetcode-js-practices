export const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let i = 0;

  for (; i <= strs.length; i++) {
    const char = strs[0][i];
    // compare with first str[idx] char

    const isSame = strs.every((str) => str[i] === char);
    // match same idx char

    if (!isSame || i > strs[0].length) {
      break;
    }
  }

  if (i === 0) {
    return '';
  }

  return strs[0].slice(0, i);
};

export const longestCommonPrefix2 = (strs: string[]): string => {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let ans = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < ans.length; j++) {
      if (strs[i][j] !== ans[j]) {
        break;
      }
    }
    ans = ans.slice(0, j);
    if (ans === '') {
      return ans;
    }
  }
  return ans;
};
