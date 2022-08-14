export const lemonadeChange = (bills: number[]): boolean => {
  const change: {
    [index: number]: number;
  } = {
    5: 0,
    10: 0,
    20: 0
  };

  for (let i = 0; i < bills.length; i++) {
    let pay = bills[i];
    while (pay > 5) {
      if (pay === 20 && change[10]) {
        pay -= 10;
        change[10] -= 1;
      } else if (change[5]) {
        pay -= 5;
        change[5] -= 1;
      } else {
        return false;
      }
    }
    change[bills[i]] += 1;
  }

  return true;
};
