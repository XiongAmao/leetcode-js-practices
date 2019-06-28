// TODO: not good enough
const createCases = (testList, final) => {
  return (fn) => {
    const MinStack = new fn();

    testList.forEach(actions => {
      actions.forEach(item => {
        const { action, p, a } = item; // action  p params   a answer
        const toDo = MinStack[action].bind(MinStack);

        if (action === 'getMin' || action === 'top') {
          expect(toDo()).toEqual(a);
        } else {
          toDo(p);
        }
      });

    });
    // expect(MinStack.stack).toEqual(final);
  };
};

module.exports = [
  createCases([
    [
      { action: 'push', p: -2 },
      { action: 'push', p: 0 },
      { action: 'push', p: 3 },
      { action: 'getMin', a: -2 },
      { action: 'pop' },
      { action: 'top', a: 0 },
      { action: 'pop' },
      { action: 'getMin', a: -2 }
    ],
    [
      { action: 'push', p: -2 },
      { action: 'push', p: 0 },
      { action: 'push', p: -3 },
      { action: 'getMin', a: -3 },
      { action: 'pop' },
      { action: 'top', a: 0 },
      { action: 'getMin', a: -2 }
    ]
  ])
];

