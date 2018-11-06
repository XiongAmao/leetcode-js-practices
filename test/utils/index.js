const isFunction = (arg) => {
  return typeof arg === 'function'
}

const isArray = (arg) => {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

module.exports = {
  isFunction,
  isArray
}
