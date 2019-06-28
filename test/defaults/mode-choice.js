module.exports = {
  choice: [
    {
      name: 'single',
      value: {
        type: 'PICK_ONE'
      }
    },
    {
      name: 'partial',
      value: {
        type: 'PICK_SOME'
      }
    },
    {
      name: 'all',
      value: {
        type: 'ALL'
      }
    }
  ]
};
