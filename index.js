$("button").addClass("big-title");


if ($("button").hasClass("big-title")) {
  $("button").mouseover(function() {
    $("button").removeClass("big-title");
    $("h1").css("color", "purple");
  });
}
else {
  ($("button").mouseover(function() {
    $("button").addClass("big-title");
    $("h1").css("color", "black");
  }));
};

$(document).keydown(function(event) {
  $("h1").text(event.key);
});
