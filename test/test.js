const program = require('../problems/001-two-sum')
const testcase = require('../problems/001-two-sum/testcases.js')

test('leetcode 001-two-sum', () => {
  testcase.forEach((t) => {
    expect(program.apply(null, t.input)).toEqual(t.output)
  })
});
