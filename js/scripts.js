
// Backend logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}


// this checks the size of the pizza and will help determine what size will be shown on the final order
Pizza.prototype.calc = function (size) {
  function sizeCheck () {
    var smallPizza =  document.getElementbyId("input#small").checked;
    var mediumPizza =  document.getElementbyId("input#medium").checked;
    var largePizza =  document.getElementbyId("input#large").checked;
    var sizeCost = 0;

    if (smallPizza === true)  {
      document.getElementbyId("input#medium").checked = false;
      document.getElementbyId("input#large").checked = false;
      sizeCost += 8;
    } else if (mediumPizza === true)  {
      document.getElementbyId("input#small").checked = false;
      document.getElementbyId("input#large").checked = false;
      sizeCost += 10;
    } else {
      document.getElementbyId("input#small").checked = false;
      document.getElementbyId("input#medium").checked = false;
      sizeCost += 12;

      console.log("You either picked a large pizza or you fucked up");
    }
  }
};


// Front-end logic
$(document).ready(function() {
  var pizzaClient;

  $("form#pizza-custom").submit(function(event) {
    event.preventDefault();
    var pizzaClient = new Pizza();

    // sizeCheck();
    // var inputtedSize = $(input#pizza-custom).val();

  });
});
