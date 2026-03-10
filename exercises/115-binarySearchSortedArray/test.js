const rewire = require('rewire');
const binarySearchSortedArray = rewire('./app.js').__get__('binarySearchSortedArray');

test('Function binarySearchSortedArray must exist', () => {
  expect(binarySearchSortedArray).not.toBe(undefined);
});

test('Case 1', () => { expect(binarySearchSortedArray([1,3,5,7,9], 7)).toBe(3); });

test('Case 2', () => { expect(binarySearchSortedArray([1,3,5,7,9], 2)).toBe(-1); });
