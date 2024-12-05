const searchCandiesCandies = require('./candy')

describe('searchCandies', () => {
    it('returns Mars, Maltesers when filter by pricr 10 and prefix "Ma"', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    });
});

