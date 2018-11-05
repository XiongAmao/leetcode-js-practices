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
      lastChoice.name = `Last operation: Test ${cache.data[0].problemName}`;
    }

    if (cache.type === 'ALL') {
      lastChoice.name = 'Last operation: <Test all problems>';
    }

    if (cache.type === 'PICK_SOME') {
      const problems = cache.data.map(i => {
        return i.problemName
      }).join(',');

      lastChoice.name = `Last operation: <pick some problems>  "${problems}"`;
    }

    lastChoice.value.data = cache.data;


    return [lastChoice, ...choice];
  }

  return [...choice]
}
