$("button").addClass("big-title");


if ($("button").hasClass("big-title")) {
  $("button").mouseover(function() {
    $("button").removeClass("big-title");
    $("h1").css("color", "purple");
    setTimeout(function () {
      $("button").addClass("big-title");
    }, 1000);
    setTimeout(function(){
      $("h1").css("color", "black");
    }, 1000);
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
