export function maxArea(height: number[]): number {
  const getArea = (i: number, j: number) => {
    return Math.min(height[i], height[j]) * (j - i);
  };

  let i = 0;
  let j = height.length - 1;
  let max = 0;

  while (i < j) {
    max = Math.max(max, getArea(i, j));
    if (height[i] < height[j]) {
      i++;
    } else if (height[i] >= height[j]) {
      j--;
    }
  }

  return max;
}
