const glob = require('glob');
const path = require('path');
const fs = require('fs');
const isExist = fs.existsSync;

const srcPath = path.resolve(__dirname, '../../problems');

module.exports = {
  getAllProblems() {
    const problemSrcPathList = glob.sync(`${srcPath}/**/index.js`);
    const problemList = problemSrcPathList
      .map((filepath) => {
        const dirname = path.dirname(filepath);
        const problemName = path.basename(dirname);
        const testCasePath = glob.sync(`${dirname}/**/{test,testcase}*.js`, {
          absolute: true
        })[0];

        if (isExist(filepath) && isExist(testCasePath)) {
          return {
            problemName,
            path: filepath,
            testCasePath
          };
        }
        return null;
      })
      .filter((e) => e);

    return problemList;
  }
};
