/* eslint-disable no-undef */
/* eslint-disable no-throw-literal */
stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    return 'length error';
  }
  return string.length;
};

// Reverse string
const reverseString = (string) => {
  string = string.split('');
  string = string.reverse();
  string = string.join('');
  return string;
};

// Calculator
class Calculator {
  add = (a, b) => a + b

  subtract = (a, b) => a - b

  divide = (a, b) => a / b

  multiply = (a, b) => a * b
}

// Capitalize
capitalize = (string) => string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);

module.exports = {
  stringLength, reverseString, Calculator, capitalize,
};