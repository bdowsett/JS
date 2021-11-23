const fizzbuzz = require('./fizzbuzz');

describe('fizbuzz', () => {
    it('returns fizz', () => {
        expect(fizzbuzz(3)).toBe('fizz')
    });

    it('returns buzz', () => {
        expect(fizzbuzz(5)).toBe('buzz')
    });

    it('returns fizzbuzz', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    });

    it('returns number', () => {
        expect(fizzbuzz(8)).toBe(8)
    });
});