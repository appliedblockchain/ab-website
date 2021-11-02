$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// accordion
// button
// cookie bar
// form
// modal
// newsletter
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
	}

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
$(".js-button-modal").click(function() {
	$('html, body').addClass("js-freeze");
});

// close
$(".modal__close, .modal__button").click(function() {
	$('html, body').removeClass("js-freeze");
});

// —————————————————————————————————————————————————————————————————
// newsletter
// —————————————————————————————————————————————————————————————————

var footer = $('.footer')

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 400) {
    $('.widget--newsletter').addClass("show");
  } else {
    $('.widget--newsletter').removeClass("show");
  }
  if($(this).scrollTop() + $(window).height() > ($(document).height() - $(footer).height()) - 200 ) {
    $('.widget--newsletter').removeClass("show");
  }
});

// —————————————————————————————————————————————————————————————————

});