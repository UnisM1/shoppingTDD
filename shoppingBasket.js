const Candy = require('./candy.js')

class ShoppingBasket {
    constructor() {
        this.items = []
    };

    addItem(candy) {
        this.items = this.items.concat(candy)
    };

    getTotalPrice() {
        return this.items.map(candy => candy.getPrice()).reduce((total, currentValue) => total + currentValue, 0)
    };


};

module.exports = ShoppingBasket;