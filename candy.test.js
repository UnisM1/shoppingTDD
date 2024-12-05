const searchCandies = require('./candy.js')

describe('searchCandies', () => {
    it('returns Mars, Maltesers when filter by price 10 and prefix "Ma"', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
});
describe('searchCandies', () => {
    it('returns Mars, Maltesers when filter by price 10 and prefix "ma"', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
});

describe('searchCandies', () => {
    it('returns Mars when filter by price 2 and prefix "Ma"', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    });
});

describe('searchCandies', () => {
    it('returns 3 candies when filter by price 10 and prefix "S"', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
});

describe('searchCandies', () => {
    it('returns Skitties and Skittles when filter by price 4 and prefix "S"', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
});

