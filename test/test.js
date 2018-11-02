const glob = require('glob')
const path = require('path')
const fs = require('fs')
const isExist = fs.existsSync

const srcPath = path.resolve(__dirname, '../problems')
const problemSrc = glob.sync(`${srcPath}/**/index.js`)
const problemList = problemSrc.map(path => {
  const arr = path.split('/')
  arr.pop()

  const problemName = arr[arr.length - 1]
  const testCasePath = arr.concat('testcases.js').join('/')

  return {
    problemName,
    path,
    testCasePath
  }
})

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


