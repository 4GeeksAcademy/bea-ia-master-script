const rewire = require('rewire');
const printUserBadge = rewire('./app.js').__get__('printUserBadge');

test('Function printUserBadge must exist', () => {
  expect(printUserBadge).not.toBe(undefined);
});

test('Case 1', () => { expect(() => printUserBadge('Ana', 2)).not.toThrow(); });
