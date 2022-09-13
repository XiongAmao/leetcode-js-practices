export function generate(numRows: number): number[][] {
  const result: number[][] = [[1]]; // init row 1
  let rowIdx = 1; // row idx  row 1 = idx 0

  while (rowIdx < numRows) {
    const row = [1];
    for (let i = 1; i <= rowIdx; i++) {
      // last one
      if (i === rowIdx) {
        row.push(1);
      } else {
        const last = result[rowIdx - 1];
        row.push(last[i - 1] + last[i]);
      }
    }
    result.push(row);
    rowIdx++;
  }

  return result;
}
