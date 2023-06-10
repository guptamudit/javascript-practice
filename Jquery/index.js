// $("h1").css("color", "green");
// $("h1").addClass("big-title bg-color length");
// $("h1").text("Good  Bye");
$("h1").on("mouseover", function () {
  setTimeout(() => {
    $("h1").css("color", "green");
  }, 350);
});
$("h1").on("mouseleave", function () {
  $("h1").css("color", "yellowgreen");
});

$("button").click(function () {
  //   $("h1").toggleClass("font-purple");
  $("h1").animate({ opacity: 0.5 }, 1000, function () {
    $(this).css({ opacity: 1 });
  });
});
// console.log($("img").attr("src"));
console.log($("a").attr("href", "https://yahoo.com"));
$("input").keypress(function (event) {
  $("h1").text(event.key);
});
