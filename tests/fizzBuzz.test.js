const { default: expect } = require('expect');

const fizzBuzz = require('../fizzBuzz');

test('fizzBuzz', () => {
    let actual = fizzBuzz(30);
    expect(actual).toBe('FizzBuzz');
})

test('fizz', () => {
    let actual = fizzBuzz(9);
    expect(actual).toBe('Fizz');
})

test('buzz', () => {
    let actual = fizzBuzz(20);
    expect(actual).toBe('Buzz');
}) 