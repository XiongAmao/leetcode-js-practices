const inquirer = require('inquirer');
const searchCheckbox = require('inquirer-search-checkbox');
const shell = require('shelljs');
const { getAll } = require('./helpers/read-problems.js')

inquirer.registerPrompt('search-checkbox', searchCheckbox);

const allProblems = getAll()
const allOptions = allProblems.map((problem) => {
  return {
    name: problem.problemName,
    value: problem
  }
})

inquirer.prompt([
  {
    type: 'list',
    name: 'mode',
    message: 'Which mode do you need ?',
    choices: [
      {
        name: 'Test all',
        value: 'ALL'
      },
      {
        name: 'Choose some problems',
        value: 'CHOOSE'
      }
      // {
      //   name: `last one []`,
      //   value: 'LAST'
      // }
    ]
  }
]).then(answers => {

  if (answers.mode === 'ALL') {
    shell.env['problems'] = JSON.stringify(allProblems)
    shell.exec('npm run jest')
    return
  }

  inquirer.prompt([
    {
      type: 'search-checkbox',
      name: 'pick',
      message: 'choose problem: ',
      pageSize: 10,
      choices: allOptions
    }
  ]).then(answers => {
    shell.env['problems'] = JSON.stringify(answers.pick)
    shell.exec('npm run jest')
  })
})
