/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Note: Given n will be a positive integer.
 *
 * Example 1:
 *
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 *
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

/**
 * @param {number} n
 * @return {number}
 */

// Recursion with memorization
export const climbStairsMemo = (n: number): number => {
  const memo: number[] = [];
  function climb(i: number) {
    if (i > n) return 0;
    if (i === n) return 1;
    if (memo[i] > 0) {
      return memo[i];
    }
    memo[i] = climb(i + 1) + climb(i + 2);
    return memo[i];
  }
  return climb(0);
};

// TODO: review it again
// dynamic programming
export const climbStairsDP = (n: number): number => {
  if (n <= 2) return n;

  const dp = [];
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};

// too slow
const climbStairs = (n: number): number => {
  function climb(i: number): number {
    if (i > n) {
      return 0;
    }
    if (i === n) {
      return 1;
    }
    return climb(i + 1) + climb(i + 2);
  }
  return climb(0);
};

// too slow
const climbStairs2 = (n: number): number => {
  let count = 0;

  function down(remain: number) {
    if (remain > 1) {
      down(remain - 1);
      down(remain - 2);
    } else if (remain === 1) {
      down(remain - 1);
    } else {
      count++;
    }
  }

  down(n);
  return count;
};
