export function isHappy1(n: number): boolean {
  const getSum = (n: number) => {
    let sum = 0;
    while (n) {
      // 取除以10的余数，即获得个位数，求平方
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10); // 除10取整
    }
    return sum;
  };
  const set = new Set<number>();

  // 终止条件 n === 1 且n重复
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getSum(n);
  }

  return n === 1;
}

export function isHappy2(n: number): boolean {
  const getSum = (n: number) => {
    let sum = 0;
    while (n) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    return sum;
  };

  const map = new Map();
  while (true) {
    if (map.has(n)) {
      return false;
    }
    if (n === 1) return true;
    map.set(n, 1);
    n = getSum(n);
  }
}
