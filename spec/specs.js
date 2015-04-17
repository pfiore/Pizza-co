describe('pizzaOrder', function() {

  describe("topping", function() {
    it("will return 'Cheese Pizza' if 'Cheese' is selected", function() {
      var testOrder = Object.create(pizzaOrder);
      testOrder.pepperoni_pizza = false;
      testOrder.topping("Cheese");
      expect(testOrder.topping()).to.equal("Cheese");
    });

    it("will return 'Pepperoni Pizza' if 'Pepperoni' is selected", function() {
      var testOrder = Object.create(pizzaOrder);
      testOrder.pepperoni_pizza = true;
      testOrder.topping("Pepperoni");
      expect(testOrder.topping()).to.equal("Pepperoni");
    });
  });
  describe("price", function() {
    it("will return '12.95' if 'Cheese' is selected", function() {
      var testOrder = Object.create(pizzaOrder);
      testOrder.pepperoni_pizza = false;
      testOrder.topping("Cheese");
      expect(testOrder.balance).to.equal(12.95)
    });

    it("will return '14.95' if 'Pepperoni' is selected", function() {
      var testOrder = Object.create(pizzaOrder);
      testOrder.pepperoni_pizza = true;
      testOrder.topping("Pepperoni");
      expect(testOrder.balance).to.equal(14.95)
    });
  });
});
