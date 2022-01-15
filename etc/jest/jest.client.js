module.exports = {
  ...require('./jest.common.js'),
  displayName: 'dom',
  setupFiles: ['jest-localstorage-mock'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
  transformIgnorePatterns: ['<rootDir>/bower_components/', '<rootDir>/node_modules/']
};
