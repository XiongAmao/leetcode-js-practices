const { isArray, isFunction } = require('./utils');
const problemList = JSON.parse(process.env.problems);

problemList.forEach(p => {
  const testCase = require(p.testCasePath);
  const problemFncs = require(p.path);

  describe(p.problemName, () => {
    if (isFunction(problemFncs)) {
      test(`function: ${problemFncs.name}`, () => {
        testCase.forEach((oneOfCase) => {
          expect(problemFncs.apply(null, oneOfCase.input))
            .toEqual(oneOfCase.output);
        })
      })
    }

    if (isArray(problemFncs)) {
      problemFncs.forEach(fnc => {
        test(`function: ${fnc.name}`, () => {
          testCase.forEach(oneOfCase => {
            expect(fnc.apply(null, oneOfCase.input))
              .toEqual(oneOfCase.output);
          })
        })
      })
    }
  })
})


