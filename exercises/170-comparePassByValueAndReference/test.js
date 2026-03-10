const rewire = require('rewire');
const comparePassByValueAndReference = rewire('./app.js').__get__('comparePassByValueAndReference');

test('Function comparePassByValueAndReference must exist', () => {
  expect(comparePassByValueAndReference).not.toBe(undefined);
});

test('Case 1', () => { const item = { count: 1 }; const out = comparePassByValueAndReference(item); expect(out.externalCount).toBeGreaterThanOrEqual(1); expect(item.count).toBeGreaterThanOrEqual(1); });
