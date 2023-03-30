export function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let left = 0;
  let right = 0;

  function pair(l: number, r: number) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    if (r - l > right - left) {
      right = r;
      left = l;
    }
  }

  for (let i = 0; i < s.length; i++) {
    pair(i, i);
    // if (i !== s.length - 1) {
    pair(i, i + 1);
    // }
  }

  return s.slice(left + 1, right);
}
