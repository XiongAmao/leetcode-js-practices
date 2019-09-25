module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  plugins: ['jest'],
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
