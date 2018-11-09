/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * Example 1:
 * Input: "()"
 * Output: true
 *
 * Example 2:
 * Input: "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: "(]"
 * Output: false
 *
 * Example 4:
 * Input: "([)]"
 * Output: false
 *
 * Example 5:
 * Input: "{[]}"
 * Output: true
 *
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s === '') {
    return true;
  }
  if (s.length === 1) {
    return false;
  }

  const stack = [s[0]];
  const pair = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 1; i < s.length;i++) {
    if ((s[i] in pair)) {
      stack.push(s[i]);
      continue;
    }
    const prev = pair[stack.pop()];

    if (prev !== s[i]) {
      return false;
    }
  }

  if (stack.length > 0) return false;

  return true;
}

module.exports = [
  isValid
]
