const rewire = require('rewire');
const buildUserProfile = rewire('./app.js').__get__('buildUserProfile');

test('Function buildUserProfile must exist', () => {
  expect(buildUserProfile).not.toBe(undefined);
});

test('Case 1', () => { expect(buildUserProfile('Leo', 20)).toEqual({ name: 'Leo', age: 20, isAdult: true }); });
