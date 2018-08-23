$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// SCRIPT
// —————————————————————————————————————————————————————————————————
// COOKIE ACCEPT
// MENU SCROLL ANIMATION
// MENU OPEN ANIMATION
// BACK TO TOP
// —————————————————————————————————————————————————————————————————



// —————————————————————————————————————————————————————————————————
// COOKIE ACCEPT
// —————————————————————————————————————————————————————————————————

$(".cookie__button").click(function(){
    $(".cookies").addClass("js-cookie-accepted");
})



// —————————————————————————————————————————————————————————————————
// MENU SCROLL ANIMATION
// —————————————————————————————————————————————————————————————————

$(window).scroll(function() { //the scrolled element
	var scroll = $(this).scrollTop();
	if (scroll >= 5) { //the point past whom you add the class (in pixel)
		$('.header').addClass("js-scrolled"); //the element to which add the class
	} else {
		$('.header').removeClass("js-scrolled");
	}
});



// —————————————————————————————————————————————————————————————————
// MENU OPEN ANIMATION
// —————————————————————————————————————————————————————————————————

$('.button--menu').click(function(){
	$('.header').toggleClass('js-opened');
	$('body').toggleClass('js-freeze');
});



// —————————————————————————————————————————————————————————————————
// BACK TO TOP
// —————————————————————————————————————————————————————————————————

var btn = $('.button--scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 1000) {
		btn.addClass('js-show');
	} else {
		btn.removeClass('js-show');
	}
});

btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '400');
});



// —————————————————————————————————————————————————————————————————

});