/* global $ */
$(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");
});