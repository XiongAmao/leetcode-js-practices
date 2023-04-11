export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;

  const record = Array(26).fill(0);
  const pivot = 'a'.charCodeAt(0);

  for (const char of magazine) {
    record[char.charCodeAt(0) - pivot]++;
  }
  for (const char of ransomNote) {
    const idx = char.charCodeAt(0) - pivot;
    if (record[idx] <= 0) return false;
    record[idx]--;
  }
  return true;
}
