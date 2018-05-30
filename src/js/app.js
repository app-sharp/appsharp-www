var winWidth = $(window).width();

if ((winWidth <= 767) && ($('.landing').length)) {
  $("nav .dropdown").click(function() {
    $('html, body').animate({
        scrollTop: $("#products").offset().top
    }, 1000);
  });
}

