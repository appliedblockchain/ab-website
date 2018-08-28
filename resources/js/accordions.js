$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// ACCORDIONS
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

});