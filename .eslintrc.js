module.exports = {
  env: {
    commonjs: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['@xiongamao/eslint-config-ts'],
  globals: {
    expect: true,
  },
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
