const valToTypeString = (val) => {
  return Object.prototype.toString.call(val);
};

const isFunction = (arg) => {
  return valToTypeString(arg) === '[object Function]';
};

const isArray = (arg) => {
  return valToTypeString(arg) === '[object Array]';
};

const isObject = (arg) => {
  return valToTypeString(arg) === '[object Object]';
};

module.exports = {
  isFunction,
  isArray,
  isObject
};
