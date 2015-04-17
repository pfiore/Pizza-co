
var pizzaOrder = {
  balance: 0,
  pepperoni_pizza: false,
  topping: function(input_topping) {
    if (this.pepperoni_pizza === false) {
      return this.topping = "Cheese", this.balance =+ 12.95;
    } else if (this.pepperoni_pizza == true) {
      return this.topping = "Pepperoni", this.balance =+ 14.95;
    }
  }
};


$(document).ready(function() {

  $('form#input').submit(function(event) {
    var Order = Object.create(pizzaOrder);



  });

});
