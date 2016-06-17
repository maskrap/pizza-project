
// Backend logic
function Pizza(size, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
};

// this checks the size of the pizza and will help determine what size will be shown on the final order
Pizza.prototype.calc = function () {
  var toppings = this.toppings.length;
  console.log(toppings);
  var total = this.size + toppings;
  return total;
  console.log("If you see this, you're good!");
};


// Front-end logic
$(document).ready(function() {

  $("form#pizza-custom").submit(function(event) {
    debugger;
    event.preventDefault();
    var sizeChoice = parseInt($("input[type='radio'][name='optionsRadios']:checked").val());
    var newPizza = new Pizza(sizeChoice);
    var finalOrder = newPizza.calc();

    $.each($("input[type='checkbox'][name='toppings']:checked"), function() {
      newPizza.toppings.push($(this).val());
    });

    $("#finalorder").text(finalOrder);
    $("#finaltoppings").append("<li>" + finalOrder + "</li>")
  });
});
