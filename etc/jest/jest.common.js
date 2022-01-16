/* eslint-disable sort-keys-fix/sort-keys-fix */

const path = require('path');

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/etc', '/__test__/'],
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../../src'),
    path.join(__dirname)
  ],
  moduleNameMapper: {
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@contract(.*)$': '<rootDir>/src/contract$1',
    '^@features(.*)$': '<rootDir>/src/features$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@interface(.*)$': '<rootDir>/src/interface$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@routing(.*)$': '<rootDir>/src/routing$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  rootDir: path.join(__dirname, '../..'),
  setupFilesAfterEnv: [
    '<rootDir>/etc/jest/setup/react-testing-library-setup.js'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-runner-eslint/watch-fix',
    'jest-watch-select-projects'
  ]
};
