$(".hamburger").click(function () {
  $(".main-nav-mob").toggleClass("move");
  $(this).toggleClass("close-menu");
  $("body").toggleClass("scroll");
});
