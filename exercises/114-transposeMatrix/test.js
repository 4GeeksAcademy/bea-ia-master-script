const rewire = require('rewire');
const transposeMatrix = rewire('./app.js').__get__('transposeMatrix');

test('Function transposeMatrix must exist', () => {
  expect(transposeMatrix).not.toBe(undefined);
});

test('Case 1', () => { expect(transposeMatrix([[1,2,3],[4,5,6]])).toEqual([[1,4],[2,5],[3,6]]); });
