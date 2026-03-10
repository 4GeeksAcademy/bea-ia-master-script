const rewire = require('rewire');
const renameBookImmutable = rewire('./app.js').__get__('renameBookImmutable');

test('Function renameBookImmutable must exist', () => {
  expect(renameBookImmutable).not.toBe(undefined);
});

test('Case 1', () => { const original = { title: 'Old', author: 'A' }; const renamed = renameBookImmutable(original, 'New'); expect(original.title).toBe('Old'); expect(renamed.title).toBe('New'); });
