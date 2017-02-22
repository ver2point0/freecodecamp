/*global $*/
$(document).ready(function() {
  $("#getMessage").on("click", function() {
    $.getJSON("/json/cats.json", function(json){
      $(".messsage").html(JSON.stringify(json));
    });
  });
});