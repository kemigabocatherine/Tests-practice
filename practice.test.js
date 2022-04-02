const {
  stringLength, reverseString, Calculator, capitalize,
} = require('./practice.js');

test('Output should be length of a string', () => {
  const argument = stringLength('cold');
  expect(argument).toBe(4);
});

test('String length should be between 0 and 11', () => {
  const length = stringLength('');
  expect(length).toEqual('length error');
});

// Reverse string
test('Takes "cathy" ans returns "yhtac"', () => {
  expect(reverseString('cathy')).toBe('yhtac');
});

// Calculator
describe('adding ', () => {
  let kk;
  beforeEach(() => {
    kk = new Calculator();
  });
  test('0 and positive number', () => {
    expect(kk.add(0, 2)).toBe(2);
  });
  test('negative and negative numbers', () => {
    expect(kk.add(-3, -3)).toBe(-6);
  });
  test('negative and positive numbers', () => {
    expect(kk.add(-3, 8)).toBe(5);
  });
});

describe('subtracting', () => {
  let kk;
  beforeEach(() => {
    kk = new Calculator();
  });
  test('0 and positive number', () => {
    expect(kk.subtract(0, 5)).toBe(-5);
  });
  test('negative and negative numbers', () => {
    expect(kk.subtract(-3, -8)).toBe(5);
  });
  test('negative and positive numbers', () => {
    expect(kk.subtract(-3, 5)).toBe(-8);
  });
});

describe('dividing', () => {
  let kk;
  beforeEach(() => {
    kk = new Calculator();
  });
  test('0 by positive number', () => {
    expect(kk.divide(0, 2)).toBe(0);
  });
  test('negative by negative numbers', () => {
    expect(kk.divide(-3, -3)).toBe(1);
  });
  test('negative by positive numbers', () => {
    expect(kk.divide(-8, 4)).toBe(-2);
  });
  test('a number by 0, returns Infinity', () => {
    expect(kk.divide(8, 0)).toBe(Infinity);
  });
});

describe('multiplying', () => {
  let kk;
  beforeEach(() => {
    kk = new Calculator();
  });
  test('0 and positive number', () => {
    expect(kk.multiply(0, 2)).toBe(0);
  });
  test('negative and negative numbers', () => {
    expect(kk.multiply(-3, -3)).toBe(9);
  });
  test('negative and positive numbers', () => {
    expect(kk.multiply(-3, 8)).toBe(-24);
  });
});

// Capitalize
test('capitalizes the first character of a string', () => {
  expect(capitalize('heal')).toBe('Heal');
});