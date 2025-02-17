const printMessage = require('./main');

test('it should return "Hola Mundo"', () => {
  expect(printMessage("Hola Mundo")).toBe("Hola Mundo");
});

test('it should return "Yafreilis"', () => {
    expect(printMessage("Yafreilis")).toBe("Yafreilis");
});