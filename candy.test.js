const Candy = require('./candy.js')

// Testing class initliases objects with correct attributes
describe('Candy', () => {
    it('Class initialises with correct name and price', () => {
        const candy = new Candy('mars', 4.99);
        expect(candy.getName()).toBe('mars')
        expect(candy.getPrice()).toBe(4.99)
    });
});     


//Testing getName method
describe('Candy', () => {
    it('retrieve name of candy when method getName is called', () => {
        const candy = new Candy('Bounty', 2.99);
        expect(candy.getName()).toBe('Bounty')
    });
});

//Testing getPrice method
describe('Candy', () => {
    it('retrieve price of candy when method getPrice is called', () => {
        const candy = new Candy('kitkat', 1.99);
        expect(candy.getPrice()).toBe(1.99)
    });
});


