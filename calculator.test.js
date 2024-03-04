const calculator = require("./calculator");

test("Die Summe von 12 - 5 ist 7", () => {
  const result = calculator.resta(12, 5);

  expect(result).toEqual(7);
});

test("Die Summe von -12 - (-12) ist 0", () => {
  const result = calculator.resta(-12, -12);

  expect(result).toEqual(0);
});

test("Die Summe von 0 - (-10) ist 10", () => {
  const result = calculator.resta(0, -10);

  expect(result).toEqual(10);
});

test("Multiplicar 2 * 5 es igual a 10", () => {
  const result = calculator.multiplica(2, 5);

  expect(result).toEqual(10);
});

test("Multiplicar -2 * 5 es igual a -10", () => {
  const result = calculator.multiplica(-2, 5);

  expect(result).toEqual(-10);
});

test("Multiplicar 3 * 0 es igual a 10", () => {
  const result = calculator.multiplica(3, 0);

  expect(result).toEqual(0);
});
