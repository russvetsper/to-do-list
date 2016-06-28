$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    // debugger;
    var item = $("#new-item").val();


    $("ul#items").append("<li><span class='item'>" + item + "</span></li>");
       $("input#new-item").val("");



  $(".item").last().click(function() {
    $(".item").remove();











    });
  });
});
