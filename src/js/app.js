var winWidth = $(window).width();

if (winWidth <= 767) {
  if ($('.landing').length) {
    $("nav .dropdown").click(function() {
      $('html, body').animate({
          scrollTop: $("#products").offset().top
      }, 1000);
    });
  } else {
    $("nav .dropdown").click(function() {
      window.location.href = "/products/";
    });
  }
}
