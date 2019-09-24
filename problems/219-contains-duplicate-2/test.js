module.exports = [
  {
    input: [[1,2,3,1], 3],
    output: true
  },
  {
    input: [[1,2,3], 99],
    output: false
  },
  {
    input: [[], 123],
    output: false
  },
  {
    input: [[1,2,3,1,2,3], 2],
    output: false
  },
  {
    input: [[99,99], 2],
    output: true
  }
];
