const { default: expect } = require('expect');
const DNAString = require('../dna');

test('DNAPalabra', () => {
    let actual = DNAString('GABYvvhhjJAC');
    expect(actual).toBe('GABYJAC');
})