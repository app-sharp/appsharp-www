var winWidth = $(window).width();

if (winWidth <= 767) {
  if ($('.landing').length) {
    $("nav .dropdown").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#products").offset().top
      }, 1000);
    });
  }
} else {
  $("nav .dropdown").mouseenter(function() {
    $("nav .dropdown-content").addClass("active");
  });
  $("nav > .nav-btn:not(.dropdown)").mouseenter(function() {
    $("nav .dropdown-content").removeClass("active");
  });
  $("nav .dropdown-content").mouseleave(function() {
    $("nav .dropdown-content").removeClass("active");
  });
}
