const _ = require('lodash')
const { isArray, isFunction } = require('./utils');
const problemList = JSON.parse(process.env.problems);

const runTest = (fnc, cases, name) => {
  const casesCopy = _.cloneDeepWith(cases)

  test(`function: ${name}`, () => {
    casesCopy.forEach((oneOfCase) => {
      expect(fnc.apply(null, oneOfCase.input))
        .toEqual(oneOfCase.output);
    })
  })
}

problemList.forEach(p => {
  const testCase = require(p.testCasePath);
  const problemFncs = require(p.path);

  describe(p.problemName, () => {
    if (isFunction(problemFncs)) {
      runTest(problemFncs, testCase, problemFncs.name);
    }

    if (isArray(problemFncs)) {
      problemFncs.forEach(fnc => {
        runTest(fnc, testCase, fnc.name);
      })
    }
  })
})


