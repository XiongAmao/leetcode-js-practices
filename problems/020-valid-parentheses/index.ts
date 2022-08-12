export const isValid = (s: string): boolean => {
  if (s === '') return true;
  if (s.length === 1) return false;

  const stack: string[] = [s[0]];

  const pair: {
    [index: string]: string;
  } = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 1; i < s.length; i++) {
    if (s[i] in pair) {
      stack.push(s[i]);
      continue;
    }
    const prev = pair[stack.pop() || ''];

    // if not match
    if (prev !== s[i]) {
      return false;
    }
  }

  // if not finish
  if (stack.length > 0) return false;

  return true;
};
