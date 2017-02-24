/*global $*/
$(document).ready(function() {
    $("#getMessage").on("click", function() {
     $.getJSON("/json/cats.json", function(json) {
      var html = "";
      json = json.filter(function(val) {
        return (val.id !== 1);
      });
      json.forEach(function(val) {
        html += "<div class = 'cat'>";
        html += "<img src= '" + val.imageLink + "' " +
        "alt='" + val.altText + "'>";
        html += "</div>";
      });
      $(".message").html(html);
    });
  });
});