const { default: expect } = require('expect');
const DNAString = require('../dna');

test('DNAPalabra', () => {
    let actual = DNAString('acgtCTAGGGcTAratataA');
    expect(actual).toBe('CTAGGGTAA');
})