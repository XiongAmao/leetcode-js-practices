const _ = require('lodash');
const { isArray, isFunction } = _;
const problemList = JSON.parse(process.env.problems);

const runTest = (fnc, cases, name) => {
  const casesCopy = _.cloneDeepWith(cases)


  describe(`function: ${name}`, () => {
    casesCopy.forEach((oneOfCase, index) => {
      if (isFunction(oneOfCase)) {
        // define test function of problem
        test(`testcase ${index + 1}`, () => {
          oneOfCase(fnc)
        })
      } else {
        // simple test
        const inputString = JSON.stringify(oneOfCase.input)
        const outputString = JSON.stringify(oneOfCase.output)

        test(`testcase:
          input: ${inputString}
          output: ${outputString}
        `, () => {
          expect(fnc.apply(null, oneOfCase.input))
            .toEqual(oneOfCase.output);
        })
      }
    })
  })
  // test(`function: ${name}`, () => {
  //   casesCopy.forEach((oneOfCase) => {
  //     if (isFunction(oneOfCase)) {
  //       // define test function of problem
  //       oneOfCase(fnc)
  //     } else {
  //       // simple test
  //       expect(fnc.apply(null, oneOfCase.input))
  //         .toEqual(oneOfCase.output);
  //     }
  //   })
  // })
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


