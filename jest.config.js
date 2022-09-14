/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm', // or other ESM presets
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/scripts/'
  ]
};
