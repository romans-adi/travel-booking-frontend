/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],

  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.scss$',
  ],

  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/style-mock.js',
  },

  testEnvironment: 'jsdom',
};
