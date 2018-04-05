// your GroceryItem code, here
/** 
* Create a `GroceryItem` class within the `src/GroceryItem.js` file.
* A new `GroceryItem` should take three arguments, the name of the item, the price of the item, and the quantity.
*/
class GroceryItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = " Price: $ " + price.toFixed(2);
        this.quantity = " Quantity: # " + quantity;
    }
}



