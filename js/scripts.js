function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.calc = function () {
  var toppingsAdded = this.toppings.length * 2;
  var total = this.size + toppingsAdded;
  return total;
};

$(document).ready(function() {
  $("form#pizza-custom").submit(function(event) {
    event.preventDefault();
    var sizeChoice = parseInt($("input[type='radio'][name='optionsRadios']:checked").val());
    var newPizza = new Pizza(sizeChoice);
    $.each($("input[name='toppings']:checked"), function() {
      newPizza.toppings.push($(this).val());
    });
    var finalOrder = newPizza.calc();
    $("#finalorder").text(finalOrder);
  });
});
