module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    semi: ['error'],
    'no-unused-vars': 'off'
  },
  globals: {
    expect: true
  }
}