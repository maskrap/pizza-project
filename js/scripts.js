
// Backend logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// this checks the size of the pizza and will help determine what size will be shown on the final order
function sizeCheck () {
  var smallPizza =  document.getElementbyId("input#small").checked;
  var mediumPizza =  document.getElementbyId("input#medium").checked;
  var largePizza =  document.getElementbyId("input#large").checked;

  if (smallPizza === true)  {
    document.getElementbyId("input#medium").checked = false;
    document.getElementbyId("input#large").checked = false;
  } else if (mediumPizza === true)  {
    document.getElementbyId("input#small").checked = false;
    document.getElementbyId("input#large").checked = false;
  } else {
    document.getElementbyId("input#small").checked = false;
    document.getElementbyId("input#medium").checked = false;

    console.log("You either picked a large pizza or you fucked up");
  }
}



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
