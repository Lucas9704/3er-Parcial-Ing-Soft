const situacion = require('./situacion');

test('si se tiene 7 se aprueba el parcial', () => {
  expect(situacion.difCondicion(5)).toBe(true);
});