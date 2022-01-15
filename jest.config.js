module.exports = {
  ...require('./etc/jest/jest.common'),
  collectCoverageFrom: [
    '!src/*.svg',
    '!src/*.scss',
    '!src/*.less',
    '!**/__mocks__/*.{js,ts,jsx,tsx}',
    '!**/__data_mocks__/*.{js,ts,jsx,tsx}',
    '!**/__gql_mocks__/*.{js,ts,jsx,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.mock.{js,jsx,ts,tsx}',
    '!src/**/interface/*.ts',
    '!src/**/*.constant.{js,jsx,ts,tsx}'
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  projects: ['./etc/jest/jest.lint.js', './etc/jest/jest.client.js']
};
