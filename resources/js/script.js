$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// SCRIPT
// —————————————————————————————————————————————————————————————————
// PARALLAX SCROLLING
// NEWS WIDGET ANIMATION
// MENU SCROLL ANIMATION
// MENU OPEN ANIMATION
// BACK TO TOP
// COOKIE BAR ACCEPT
// —————————————————————————————————————————————————————————————————



// —————————————————————————————————————————————————————————————————
// NEWS WIDGET ANIMATION
// —————————————————————————————————————————————————————————————————

window.addEventListener('scroll', doParallax);
function doParallax(){
   var positionY = window.pageYOffset/4;
   document.body.style.backgroundPosition = "0 -" + positionY + "px";
}



// —————————————————————————————————————————————————————————————————
// NEWS WIDGET ANIMATION
// —————————————————————————————————————————————————————————————————

if ($(window).width() > 575) {   
	setTimeout(function() {
		$('.widget--news').animate({
			right: '0'
		}, 800, 'swing');
	}, 1200);
}
else {  
}; 



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
	if ($(window).scrollTop() > 600) {
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
// COOKIE BAR ACCEPT
// —————————————————————————————————————————————————————————————————

var cookieKey = "__applied_blockchain_cookie_banner"
var cookieClose = function() {
	if (typeof localStorage !== 'undefined') {
		localStorage[cookieKey] = "true"
	}
}

var displayCookieBar = function() {
	if (typeof localStorage !== 'undefined') {
		if (!localStorage[cookieKey]) {
			$(".cookie").css("display", "flex")
		}
	}
}

$(".cookie__button").on("click", cookieClose)
displayCookieBar()

$(".cookie__button").click(function(){
	$(".cookie").addClass("js-cookie-accepted");
})



// —————————————————————————————————————————————————————————————————

});