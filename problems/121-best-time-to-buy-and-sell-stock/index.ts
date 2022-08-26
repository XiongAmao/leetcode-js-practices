// overtime
export const maxProfit = (prices: number[]): number => {
  if (prices.length < 2) return 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = prices.length - 1; j > i; j--) {
      // sell - pay
      const cur = prices[j] - prices[i];

      if (cur >= 0 && max < cur) {
        max = cur;
      }
    }
  }
  return max < 0 ? 0 : max;
};

export const maxProfitOnePass = (prices: number[]): number => {
  let maxP = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxP) {
      maxP = prices[i] - minPrice;
    }
  }

  return maxP;
};

export const maxProfitOnePass2 = (prices: number[]): number => {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    buy = buy > prices[i] ? prices[i] : buy;
    profit = profit > prices[i] - buy ? profit : prices[i] - buy;
  }

  return profit;
};
