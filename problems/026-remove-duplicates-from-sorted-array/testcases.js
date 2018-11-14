const createCases = (arr, targetArr, targetLen) => {
  const cur = arr;

  return (fn) => {
    const result = fn(arr);
    expect(result).toEqual(targetLen);

    // test if the array has changed
    expect(cur).toEqual(targetArr);
  }
}

module.exports = [
  createCases([1, 1, 2], [1, 2], 2),
  createCases(
    [0, 0, 1, 1, 2, 2, 3, 3, 4],
    [0, 1, 2, 3, 4],
    5
  )
]
