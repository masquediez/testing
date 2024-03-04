function resta(a, b) {
  const result = a - b;
  return result;
}

function divide(a, b) {
  return a / b;
}

function multiplica(a, b) {
  return a * b;
}

// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.resta = resta;
module.exports.divide = divide;
module.exports.multiplica = multiplica;
