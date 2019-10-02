const createCase = (input, answer) => {
  return (fn) => {
    fn(input);
    expect(input).toEqual(answer);
  };
};

module.exports = [
  createCase(['h', 'e', 'l', 'l', 'o'], ['o', 'l', 'l', 'e', 'h']),
  createCase(['H', 'a', 'n', 'n', 'a', 'h'], ['h', 'a', 'n', 'n', 'a', 'H']),
  createCase(['a', '.'], ['.', 'a']),
  createCase(['a'], ['a']),
  createCase([], [])
];
