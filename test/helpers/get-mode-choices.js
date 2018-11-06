const inquirer = require('inquirer')

const { choice } = require('../defaults/mode-choice.js')
const { getCache } = require('./cache.js')

module.exports = () => {
  const cache = getCache();
  const lastChoice = {
    name: '',
    value: {
      type: 'LAST_ONE'
    }
  };

  if (cache) {
    if (cache.type === 'PICK_ONE') {
      lastChoice.name = `single(previous choice): ${cache.data[0].problemName}`;
    }

    if (cache.type === 'ALL') {
      lastChoice.name = 'all(previous choice)';
    }

    if (cache.type === 'PICK_SOME') {
      const problems = cache.data.map(i => {
        return i.problemName
      }).join(',');

      lastChoice.name = `partial(previous choice): "${problems}"`;
    }

    lastChoice.value.data = cache.data;


    return [lastChoice, new inquirer.Separator(), ...choice];
  }

  return [...choice]
}
