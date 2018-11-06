const glob = require('glob');
const path = require('path');
const fs = require('fs')
const isExist = fs.existsSync

const srcPath = path.resolve(__dirname, '../../problems');

module.exports = {
  getAllProblems() {
    const problemSrc = glob.sync(`${srcPath}/**/index.js`);
    const problemList = problemSrc.map(path => {
      const arr = path.split('/')
      arr.pop()

      const problemName = arr[arr.length - 1]
      const testCasePath = arr.concat('testcases.js').join('/')

      if (isExist(path) && isExist(testCasePath)) {
        return {
          problemName,
          path,
          testCasePath
        }
      }
      return null
    }).filter(e => e)

    return problemList
  }
}
