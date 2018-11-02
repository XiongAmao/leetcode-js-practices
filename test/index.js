const glob = require('glob')
const path = require('path')
const fs = require('fs')

const srcPath = path.resolve(__dirname, '../problems')
const problemSrc = glob.sync(`${srcPath}/**/index.js`)
const problemList = problemSrc.map(path => {
  const arr = path.split('/')
  arr.pop()

  const key = arr[arr.length - 1]
  const testCasePath = arr.concat('testcases.js').join('/')

  return {
    key,
    path,
    testCasePath
  }
})

