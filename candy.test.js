const Candy = require('./candy');

describe('candy', () => {
    it('returns fizz', () => {
        expect(new Candy).toBeInstanceOf(Candy)
    });
});

describe('getName', () => {
    candy = new Candy("Mars", 1.99)
    it('returns name of candy', () => {
        expect(candy.getName()).toBe("Mars")
    });
});

describe('getPrice', () => {
    candy = new Candy("Mars", 1.99)
    it('returns price of candy', () => {
        expect(candy.getPrice()).toBe(1.99)
    });
});