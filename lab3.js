const assertEquals = require("./assert-helper");
// 1. use arrow functions to create 4 methods:
// add, subtract, multiply, divide

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const findRemainder = (a, b) => a % b;


assertEquals(add(1, 2), 3);
assertEquals(subtract(1, 2), -1);
assertEquals(multiply(1, 2), 2);
assertEquals(divide(1, 2), 0.5);
assertEquals(findRemainder(5, 2), 1);
