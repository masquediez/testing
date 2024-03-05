const minMax = require("./minMax");

describe("MinMax Tests", () => {
  describe("min function", () => {
    test("should return the smaller value between two numbers", () => {
      // Arrange & Act
      const minVal = minMax.min(2, 5);

      // Assert
      expect(minVal).toBe(2);
    });

    test("should handle negative numbers correctly", () => {
      // Arrange & Act
      const minVal = minMax.min(-2, 2);

      // Assert
      expect(minVal).toBe(-2);
    });
  });

  describe("max function", () => {
    test("should return the larger value between two numbers", () => {
      // Arrange & Act
      const maxVal = minMax.max(2, 5);

      // Assert
      expect(maxVal).toBe(5);
    });

    test("should handle negative numbers correctly", () => {
      // Arrange & Act
      const maxVal = minMax.max(-2, 2);

      // Assert
      expect(maxVal).toBe(2);
    });
  });
});
