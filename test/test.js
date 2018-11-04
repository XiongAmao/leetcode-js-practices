const fs = require('fs')
const isExist = fs.existsSync

const problemList = JSON.parse(process.env.problems)

problemList.forEach(p => {
  if (!isExist(p.path) || !isExist(p.testCasePath)) {
    return
  }

  const problem = require(p.path)

  const testCase = require(p.testCasePath)

  test(p.problemName, () => {
    testCase.forEach((t) => {
      expect(problem.apply(null, t.input)).toEqual(t.output)
    })
  });
})


