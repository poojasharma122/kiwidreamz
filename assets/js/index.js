// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".header__menu-toggle").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".header__menu-close").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End


// Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed_header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End
