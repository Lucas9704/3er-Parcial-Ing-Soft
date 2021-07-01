const situacion = require('./situacion');

test('si se tiene 7 se aprueba el parcial', () => {
  expect(situacion.difCondicion(7)).toBe(false);
});