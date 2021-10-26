$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// accordion
// button
// cookie bar
// form
// modal
// search
// —————————————————————————————————————————————————————————————————

// —————————————————————————————————————————————————————————————————
// accordion
// —————————————————————————————————————————————————————————————————

$('.accordion .accordion__header').on('click', function() {

	// variables
	var next = $(this).next('.accordion__content');

	// trigger accordion toggle
	if( ! $(event.target).is('.accordion__icon') ){
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
// button
// —————————————————————————————————————————————————————————————————

// menu button

$(".button--menu").click(function(event) {
	$('.button--menu').toggleClass("button--menu--open");
	$('.navbar').toggleClass('js-opened');
	$('body').toggleClass('js-freeze');
});

// —————————————————————————————————————————————————————————————————
// cookie bar
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
			$(".widget--cookie").css("display", "flex")
		}
	}
}

$(".widget--cookie .button").on("click", cookieClose)
displayCookieBar()

$(".widget--cookie .button").click(function(){
	$(".widget--cookie").addClass("js-cookie-accepted");
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
// modal
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
// search
// —————————————————————————————————————————————————————————————————

// hide full list of elements when the user starts typing
document.getElementById("search-input").addEventListener("input", function() {
	if(this.value.length == 0) {
		document.getElementById('search-results').style.display = 'none';
	} else {
		document.getElementById('search-results').style.display = 'block';
	}
});

// —————————————————————————————————————————————————————————————————

});