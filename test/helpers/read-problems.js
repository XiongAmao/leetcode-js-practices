const glob = require('glob');
const path = require('path');

const srcPath = path.resolve(__dirname, '../../problems');

module.exports = {
  getAll() {
    const problemSrc = glob.sync(`${srcPath}/**/index.js`);
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

    return problemList
  }
}
