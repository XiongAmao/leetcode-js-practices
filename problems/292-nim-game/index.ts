export function canWinNim(n: number): boolean {
  if (n < 4) return true;
  return n % 4 !== 0;
}
