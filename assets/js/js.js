function openNav() {
  $("#leftSidebar").css("width", "250px");
  $("#main").css("marginLeft", "250px");
  $(".header").css("marginLeft", "250px");

  $(".menuLinks").append("<a href='#' id='home'>Home</a>")
  $(".menuLinks").append("<a href='#' id='about' >About Me</a>")
  $(".menuLinks").append("<a href='#' id='projects' >Projects</a>")
  $(".menuLinks").append("<a href='#' id='contact' >Contact</a>")
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  $("#leftSidebar").css("width", "80px");
  $("#main").css("marginLeft", "48px");
  $(".header").css("marginLeft", "48px");
  $(".menuLinks").empty("")
}

// open menu bar
$(".menubtn").on("click", function () {
  if ($(this).attr("data-active") === "true") {
    closeNav()
    $(".menubtn").attr("data-active", "false")
  }
  else if ($(this).attr("data-active") === "false") {
    openNav()
    $(".menubtn").attr("data-active", "true")
  }
})

