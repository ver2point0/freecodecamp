/*global $*/
$(document).ready(function() {
  $("#getMessage").on("click", function() {
    $.getJSON("/json/cats.json", function(json){
      var html = "";
      json.forEach(function(val) {
        var keys = Object.keys(val);
        html += "<div class = 'cat'>";
        keys.forEach(function(key) {
          html += "<strong>" + key + "</strong>: " +
          val[key] + "<br>";
        });
        html += "</div><br>";
      });
      $(".message").html(html);
    });
  });
});