const rewire = require('rewire');
const getDisplayName = rewire('./app.js').__get__('getDisplayName');

test('Function getDisplayName must exist', () => {
  expect(getDisplayName).not.toBe(undefined);
});

test('Case 1', () => { expect(getDisplayName({ firstName: 'Ana', nickname: 'Annie' })).toBe('Annie'); });

test('Case 2', () => { expect(getDisplayName({ firstName: 'Ana' })).toBe('Ana'); });
