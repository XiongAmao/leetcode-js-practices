const fuzzy = require('fuzzy');

const searchAll = (allProblems = []) => {
  const problemNameList = allProblems.map((obj) => obj.name);
  const len = allProblems.length;

  return (answers, input = '') => {
    return new Promise((resolve) => {
      const fuzzyResult = fuzzy.filter(input, problemNameList);

      const result = fuzzyResult.map((el) => {
        const val = el.original;
        let obj = {};

        for (let i = 0; i < len; i++) {
          if (allProblems[i].name === val) {
            obj = allProblems[i];
            break;
          }
        }

        return obj;
      });
      resolve(result);
    });
  };
};

module.exports = searchAll;
