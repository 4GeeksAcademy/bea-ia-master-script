const rewire = require('rewire');
const getMatrixValue = rewire('./app.js').__get__('getMatrixValue');

test('Function getMatrixValue must exist', () => {
  expect(getMatrixValue).not.toBe(undefined);
});

test('Case 1', () => { expect(getMatrixValue([[1,2],[3,4]], 1, 0)).toBe(3); });

test('Case 2', () => { expect(getMatrixValue([[1,2],[3,4]], 4, 0)).toBe(undefined); });
