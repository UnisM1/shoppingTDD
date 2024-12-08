const ShoppingBasket = require('./shoppingBasket.js')

describe('ShoppingBasket', () => {
    it('total price is 0 when shoppingBasket is initialised', () => {
        let basket = new ShoppingBasket()
        expect(basket.getTotalPrice()).toBe(0);
    });
    
    
    it('total price updates to reflect cost of new items added', () => {
        let basket = new ShoppingBasket()

        const candyMock1 = { getPrice: jest.fn(() => 4.99) }
        const candyMock2 = { getPrice: jest.fn(() => 3.99) }
        
        basket.addItem(candyMock1);
        expect(basket.getTotalPrice()).toBe(4.99)
        basket.addItem(candyMock2);
        basket.addItem(candyMock2);
        expect(basket.getTotalPrice()).toBe(12.97)
    })
});



        






