/* global $ */
$(document).ready(function() {
  $("button").addClass("animated");
  $(".btn").addClass("shake");
  $("#target3").addClass("btn-primary");
  $("button").removeClass("btn-default");
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
});