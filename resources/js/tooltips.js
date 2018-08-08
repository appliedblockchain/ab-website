$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// TOOLTIPS
// —————————————————————————————————————————————————————————————————

$('.tooltip--click').on('click', function() {
	// variables
	var next = $(this).children('.tooltip__inner');
	// icon animation
	$('.tooltip__inner.js-show').not(next).removeClass('js-show');
	$(next).toggleClass('js-show');
});



// —————————————————————————————————————————————————————————————————

});