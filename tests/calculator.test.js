const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(4, 6)).toBe(10);
    //
})

test('substracts a - b', () => {
    expect(calculator.substract(4, 6)).toBe(-2);
   //
})

test('multiplies a * b', () => {
    expect(calculator.multiply(4, 6)).toBe(24);
    //
})

test('divides a / b', () => {
    expect(calculator.divide(4, 6)).toBe(0.67);
    // Consider decimals
})

test('Raises to power a ^ b', () => {
    //
})

