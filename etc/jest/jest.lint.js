const { rootDir } = require('./jest.common');

module.exports = {
  displayName: 'lint',
  rootDir,
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/**/src/**/*.(js|ts|tsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/build/',
    '/other/',
    '/etc/'
  ]
};
