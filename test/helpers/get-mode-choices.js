const { getCache } = require('./cache.js')

module.exports = () => {
  return [
    {
      name: 'Test all',
      value: 'ALL'
    },
    {
      name: 'Pick some problems',
      value: 'CHECK_BOX'
    }
  ]
}
