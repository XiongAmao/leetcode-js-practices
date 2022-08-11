export const reverse = (x: number): number => {
  let rev = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);
    rev = rev * 10 + digit;
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
      return 0;
    }
  }
  return rev;
};

export const reverseRemainder = (x: number): number => {
  if (x === 0) return 0;

  let res = 0;
  let absX = Math.abs(x);

  while (absX) {
    res = res * 10 + (absX % 10);
    absX = parseInt(String(absX / 10));
  }
  if (res > 2147483647) {
    return 0;
  }
  return x > 0 ? res : -res;
};
