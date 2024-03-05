const calculator = require("./calculator");

describe("Calculator Tests", () => {
  describe("Resta function", () => {
    test("should subtract two positive numbers correctly", () => {
      // Arrange
      const a = 12;
      const b = 5;

      // Act
      const result = calculator.resta(a, b);

      // Assert
      expect(result).toEqual(7);
    });

    test("should subtract two negative numbers correctly", () => {
      // Arrange
      const a = -12;
      const b = -12;

      // Act
      const result = calculator.resta(a, b);

      // Assert
      expect(result).toEqual(0);
    });

    test("should subtract a negative number from zero correctly", () => {
      // Arrange
      const a = 0;
      const b = -10;

      // Act
      const result = calculator.resta(a, b);

      // Assert
      expect(result).toEqual(10);
    });
  });

  describe("Multiplica function", () => {
    test("should multiply two positive numbers correctly", () => {
      // Arrange
      const a = 2;
      const b = 5;

      // Act
      const result = calculator.multiplica(a, b);

      // Assert
      expect(result).toEqual(10);
    });

    test("should multiply a negative number with a positive number correctly", () => {
      // Arrange
      const a = -2;
      const b = 5;

      // Act
      const result = calculator.multiplica(a, b);

      // Assert
      expect(result).toEqual(-10);
    });

    test("should multiply any number with zero correctly", () => {
      // Arrange
      const a = 3;
      const b = 0;

      // Act
      const result = calculator.multiplica(a, b);

      // Assert
      expect(result).toEqual(0);
    });
  });
});
