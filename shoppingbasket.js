class ShoppingBasket {
    constructor() {
        this.basket = []


    }

    addItem(candy){
       this.basket.push(candy)
    }

    getTotalPrice(){
        return this.basket.map(x => x.getPrice()).reduce((a,b)=> a+b)
    }
}


module.exports = ShoppingBasket;