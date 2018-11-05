const inquirer = require('inquirer');
const searchCheckbox = require('inquirer-search-checkbox');
const chalk = require('chalk');

const { getAllProblems } = require('./helpers/read-problems.js');
const { saveCache } = require('./helpers/cache.js');
const runJest = require('./helpers/run-jest.js');
const getModeChoices = require('./helpers/get-mode-choices.js');

inquirer.registerPrompt('search-checkbox', searchCheckbox);

const allProblems = getAllProblems();
const allProblmeChoices = allProblems.map((problem) => {
  return {
    name: problem.problemName,
    value: problem
  }
})

inquirer.prompt([
  {
    type: 'list',
    name: 'mode',
    message: 'Choose one : ',
    choices: getModeChoices()
  }
]).then(answers => {
  const cache = {
    type: answers.mode.type,
    data: {}
  };

  if (answers.mode.type === 'PICK_ONE') {
    inquirer.prompt([
      {
        type: 'list',
        name: 'pick',
        message: 'Pick some problems: ',
        pageSize: 10,
        choices: allProblmeChoices
      }
    ]).then(answers => {
      cache.data = [answers.pick];
      saveCache(cache);
      runJest([answers.pick]);
    })
  }

  if (answers.mode.type === 'ALL') {
    cache.data = allProblems;
    saveCache(cache);
    runJest(allProblems);
  }

  if (answers.mode.type === 'PICK_SOME') {
    inquirer.prompt([
      {
        type: 'search-checkbox',
        name: 'pick',
        message: 'Pick some problems: ',
        pageSize: 10,
        choices: allProblmeChoices
      }
    ]).then(answers => {
      if (answers.pick.length < 1) {
        console.log(chalk.bold.red('You must choose at least one problem.'));
        return
      }

      cache.data = answers.pick;
      saveCache(cache);
      runJest(answers.pick);
    })
  }

  if (answers.mode.type === 'LAST_ONE') {
    runJest(answers.mode.data);
  }
})
