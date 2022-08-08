export const isPalindrome = function (x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;

  const str = x.toString();
  let idx = 0;
  let last = str.length - 1;
  for (; idx < str.length / 2; idx++) {
    if (str[idx] !== str[last]) {
      return false;
    }

    last--;
  }

  return true;
};

export const isPalindrome2 = (x: number): boolean => {
  if (x < 0) return false;
  if (x === 0) return true;

  const str = String(x);
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

export const isPalindromeRevertHalfNumber = (x: number): boolean => {
  if (x === 0) return true;

  // negative or last number === 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let temp = x;
  let revertedNumber = 0;

  while (temp !== 0) {
    // get single digit
    // x10 ... x10
    revertedNumber = revertedNumber * 10 + (temp % 10);
    // remove single digit
    temp = Math.floor(temp / 10);
  }

  return x === revertedNumber;
};
