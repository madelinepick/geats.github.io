$(function(){
  $.get("https://galvanize-eats-api.herokuapp.com/menu", function( data ) {
  var foodArray = data.menu
  console.log(foodArray);
  foodArray.forEach(function(foodArray){
    if(foodArray.type == "burger"){
      $("#burger").append("<div class='itemslist'><p class='left' id='"+foodArray.id+"'>"+foodArray.name+"</p><p class='right'>"+foodArray.price+"</p></div>");
    }
    if(foodArray.type == "pizza"){
      $("#pizza").append("<div class='itemslist'><p class='left' id='"+foodArray.id+"'>"+foodArray.name+"</p><p class='right'>"+foodArray.price+"</p></div>");
    }
  })
  });
  $('.items').on("click", function(e){
    $(".itemslist").css("background-color", "white");
    $(".items").css("background-color", "white");
    $("#burger").css("background-color", "white");
    $("#pizza").css("background-color", "white");
    if($(e.target).hasClass(".itemslist") || $(e.target).is("p")){
    $(e.target).parent().css("background-color", "rgb(193, 193, 193)");
    }
  })
  $(".add").on('click', function(){
    var quant = $("#quantity").val();

    if($("#1").parent().css('background-color') === "rgb(193, 193, 193)"){
      var price = 10.99
      $(".colR").append("<p class='left orderlist'>"+quant+"x Cheeseburger</p><p class='right orderlist'>$"+quant*price"</p>");
    }
    if($("#3").parent().css('background-color') === "rgb(193, 193, 193)"){
      var price = 8.99
      $(".colR").append("<p class='left orderlist'>"+quant+"x Hamburger</p><p class='right orderlist'>8.99</p>");
    }
    if($("#2").parent().css('background-color') === "rgb(193, 193, 193)"){
      var price = 9.99
      $(".colR").append("<p class='left orderlist'>"+quant+"x Cheese Pizza</p><p class='right orderlist'>9.99</p>");
    }
    if($("#4").parent().css('background-color') === "rgb(193, 193, 193)"){
      var price = 11.99
      $(".colR").append("<p class='left orderlist'>"+Pepperoni Pizza</p><p class='right orderlist'>11.99</p>");
    }
    if($("#5").parent().css('background-color') === "rgb(193, 193, 193)"){
      var price = 12.99
      $(".colR").append("<p class='left orderlist'>Sausage Pizza</p><p class='right orderlist'>12.99</p>");
    }
  })
})
