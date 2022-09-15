export function getRow(rowIndex: number): number[] {
  let curRow = [1];
  let curIdx = 1;
  while (curIdx <= rowIndex) {
    const row = [1];
    for (let i = 1; i < curIdx; i++) {
      row.push(curRow[i] + curRow[i - 1]);
    }
    row.push(1);
    curRow = row;
    curIdx++;
  }

  return curRow;
}

// space O(1)
export function getRow2(rowIndex: number): number[] {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] = row[j - 1] + row[j];
    }
  }
  return row;
}
