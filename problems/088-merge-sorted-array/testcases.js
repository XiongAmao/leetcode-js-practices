const createCases = (input, output) => {
  const { nums1, m, nums2, n } = input;
  return (fn) => {
    fn(nums1, m, nums2, n);
    expect(nums1).toEqual(output);
  };
};

module.exports = [
  createCases(
    {
      nums1: [0],
      m: 0,
      nums2: [1],
      n: 1
    },
    [1]
  ),
  createCases(
    {
      nums1: [1, 2, 3, 0, 0, 0],
      m: 3,
      nums2: [2, 5, 6],
      n: 3
    },
    [1, 2, 2, 3, 5, 6]
  )
];
