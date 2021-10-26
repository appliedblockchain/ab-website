$(document).ready(function() {

// subnav

$(".js-menu-trigger").click(function () {
  $(".js-menu-inner").slideUp();
  if ($(this).next().is(":hidden")) {
    $(this).next().slideDown();
  }
});

// mobile menu button

$(".button--menu").click(function(event) {
	$('.button--menu').toggleClass("button--menu--open");
	$('.navbar').toggleClass('js-opened');
	$('body').toggleClass('js-freeze');
});

// —————————————————————————————————————————————————————————————————

});