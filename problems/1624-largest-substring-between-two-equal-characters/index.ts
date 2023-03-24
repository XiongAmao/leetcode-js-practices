export function maxLengthBetweenEqualCharacters(s: string): number {
  const firstIdx = Array(26).fill(-1);
  let maxLength = -1;

  const getCharIdx = (char: string) => char.charCodeAt(0) - 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    const idx = getCharIdx(s[i]);

    if (firstIdx[idx] < 0) {
      firstIdx[idx] = i;
    } else {
      maxLength = Math.max(maxLength, i - firstIdx[idx] - 1);
    }
  }

  return maxLength;
}
