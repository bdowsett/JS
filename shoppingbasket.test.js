const ShoppingBasket = require ('./shoppingbasket');
const Candy = require ('./candy');

describe('ShoppingBasket', () => {
    it('is a class', () => {
     expect(new ShoppingBasket()).toBeInstanceOf(ShoppingBasket)
     
    })
 });


 describe('addItem', () => {
    newbasket = new ShoppingBasket
    newbasket.addItem(new Candy("Skittles", 1.99))
    it('adds candy to basket', () => {
     expect(newbasket.basket).toEqual([{name: 'Skittles', price: 1.99}])
     
    })
 });

 describe('getTotalPrice', () => {
    basket = new ShoppingBasket
    basket.addItem(new Candy("Mars", 1.99))
    basket.addItem(new Candy("Mars", 1.99))
   it('returns total basket price', () => {
    expect(basket.getTotalPrice()).toEqual(3.98)
    
   })
});