export function reverseString(s: string[]): void {
  if (s.length < 2) return;
  let idx = 0;
  while (idx < Math.floor(s.length / 2)) {
    [s[idx], s[s.length - 1 - idx]] = [s[s.length - 1 - idx], s[idx]];
    idx++;
  }
}

export function reverseString2(s: string[]): void {
  let i = Math.floor(s.length / 2);
  while (i) {
    [s[i - 1], s[s.length - i]] = [s[s.length - i], s[i - 1]];
    i--;
  }
}

export function reverseStringDualPointer(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}
