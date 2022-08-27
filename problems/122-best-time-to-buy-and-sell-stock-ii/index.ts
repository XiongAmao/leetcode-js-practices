// TODO: didn't understand
export const maxProfit = (prices: number[]): number => {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] >= prices[i - 1]) {
      profit = profit + prices[i] - prices[i - 1];
    }
  }
  return profit;
};

// export const maxProfit2 = (prices: number[]): number => {
//   return 0;
// };
