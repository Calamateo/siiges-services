/* eslint-disable global-require */
// Internal dependencies
const testNodeEnvs = require('../../../testNodeEnvs');

const orginalEnvVars = process.env;

afterAll(() => {
  process.env = orginalEnvVars;
});

describe('Given a call to isProdEnvironment function', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('when node is set in development', () => {
    test('then it should return false', () => {
      process.env.NODE_ENV = testNodeEnvs.DEV;
      const { isProdEnvironment } = require('../../../../src/utils/env-checkers');
      expect(isProdEnvironment()).toBe(false);
    });
  });

  describe('when node is set in production', () => {
    test('then it should return true', () => {
      process.env.NODE_ENV = testNodeEnvs.PROD;
      const { isProdEnvironment } = require('../../../../src/utils/env-checkers');
      expect(isProdEnvironment()).toBe(true);
    });
  });

  describe('when node is neither production or development', () => {
    test('then it should return false', () => {
      process.env.NODE_ENV = testNodeEnvs.FAKE;
      const { isProdEnvironment } = require('../../../../src/utils/env-checkers');
      expect(isProdEnvironment()).toBe(false);
    });
  });

  describe('when node is not set', () => {
    test('then it should return false', () => {
      process.env.NODE_ENV = testNodeEnvs.UNDEFINED;
      const { isProdEnvironment } = require('../../../../src/utils/env-checkers');
      expect(isProdEnvironment()).toBe(false);
    });
  });
});
