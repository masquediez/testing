const minMax = require("./minMax");

test("min devuelve el valor más pequeño entre dos números", () => {
  expect(minMax.min(2, 5)).toBe(2);
  expect(minMax.min(5, 2)).toBe(2);
  expect(minMax.min(-2, 2)).toBe(-2);
});

test("max devuelve el valor más grande entre dos números", () => {
  expect(minMax.max(2, 5)).toBe(5);
  expect(minMax.max(5, 2)).toBe(5);
  expect(minMax.max(-2, 2)).toBe(2);
});

/*
Ich habe versucht, es mit einem Array zu machen, aber es funktioniert nicht 
const { min, max } = require('./minMax');

test('min devuelve el objeto con la edad más baja entre dos personas', () => {
  const personas = [
    { name: 'Juan', age: 25 },
    { name: 'María', age: 30 },
    { name: 'Pedro', age: 20 },
  ];

  expect(min(personas)).toEqual({ name: 'Pedro', age: 20 });
});

test('max devuelve el objeto con la edad más alta entre dos personas', () => {
  const personas = [
    { name: 'Juan', age: 25 },
    { name: 'María', age: 30 },
    { name: 'Pedro', age: 20 },
  ];

  expect(max(personas)).toEqual({ name: 'María', age: 30 });
});


*/
