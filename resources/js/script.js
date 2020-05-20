$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// SCRIPT
// —————————————————————————————————————————————————————————————————
// accordions
// buttons
// cookie bar accept
// form
// header scroll animation
// join
// modals
// news widget animation
// parallax scrolling
// —————————————————————————————————————————————————————————————————



// —————————————————————————————————————————————————————————————————
// accordions
// —————————————————————————————————————————————————————————————————

$('.accordion .accordion__header').on('click', function() {

	// variables
	var next = $(this).next('.accordion__content');

	// trigger accordion toggle
	if( ! $(event.target).is('.button--primary') ){
		// slide
		$('.accordion__content').not(next).each(function() {
			$(this).slideUp();
		});
		next.slideToggle();
		// icon animation
		$('.accordion__header.js-accordion-active').not(this).removeClass('js-accordion-active');
		$(this).toggleClass('js-accordion-active');

	// prevent trigger when click on apply button
	} else {
	}

});



// —————————————————————————————————————————————————————————————————
// buttons
// —————————————————————————————————————————————————————————————————

// menu button

$(".button--menu").click(function(event) {
	$('.button--menu').toggleClass("button--menu--open");
	$('.header').toggleClass('js-opened');
	$('body').toggleClass('js-freeze');
});



// —————————————————————————————————————————————————————————————————
// cookie bar accept
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
// form
// —————————————————————————————————————————————————————————————————

// change style on focus

$(".form__input").focus(function() {
	$(this).closest(".form__group").addClass('focused');
});
$(".form__input").focusout(function() {
	$(this).closest(".form__group").removeClass('focused');
});



// —————————————————————————————————————————————————————————————————
// header scroll animation
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
// join
// —————————————————————————————————————————————————————————————————

// change background image

$('.js-button-london').on('click', function() {
    $('.join__background--porto').removeClass('js-show').fadeIn();
});

$('.js-button-porto').on('click', function() {
    $('.join__background--porto').addClass('js-show').fadeIn();
});



// —————————————————————————————————————————————————————————————————
// modals
// —————————————————————————————————————————————————————————————————

// prevent page scroll when modal opened

// open
$(".js-button-modal").click(function(event) {
	$('html, body').addClass("js-freeze");
});

// close
$(".modal__close, .modal__button").click(function(event) {
	$('html, body').removeClass("js-freeze");
});



// —————————————————————————————————————————————————————————————————
// news widget animation
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
// parallax background
// —————————————————————————————————————————————————————————————————

window.addEventListener('scroll', doParallax);
function doParallax(){
   var positionY = window.pageYOffset/8;
   document.body.style.backgroundPosition = "0 -" + positionY + "px";
}



// —————————————————————————————————————————————————————————————————

});