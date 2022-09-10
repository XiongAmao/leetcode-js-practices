export function plusOne(digits: number[]): number[] {
  let last = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + 1;
    if (digits[i] >= 10) {
      digits[i] = digits[i] % 10;
      if (i === 0) {
        last = true;
      }
    } else {
      break;
    }
  }
  if (last) {
    digits.unshift(1);
  }
  return digits;
}

export function plusOne2(digits: number[]): number[] {
  let i = digits.length - 1;
  while (i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    } else {
      digits[i]++;
      return digits;
    }
    i--;
  }
  return digits;
}
