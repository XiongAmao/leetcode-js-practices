/**
 * 2^x      n       n - 1      n & (n - 1)
 * 2^0     0001     0000      (0001) & (0000) == 0
 * 2^1     0010     0001      (0010) & (0001) == 0
 * 2^2     0100     0010      (0100) & (0010) == 0
 * ...
 */

// bitwise AND
export function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}

// iterative
export const isPowerOfTwo2 = (n: number): boolean => {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      return false;
    }
  }

  return true;
};
