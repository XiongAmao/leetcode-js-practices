const shell = require('shelljs');

module.exports = function runJest(problems) {
  shell.env['problems'] = JSON.stringify(problems)
  shell.exec('npm run jest --silent')
}
