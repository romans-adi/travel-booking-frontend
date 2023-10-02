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
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.scss$',
    'node_modules/(?!axios)/',
  ],

  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/style-mock.js',
    '^axios$': require.resolve('axios'),
  },

  setupFilesAfterEnv: ['esm'],

  testEnvironment: 'jsdom',
};
