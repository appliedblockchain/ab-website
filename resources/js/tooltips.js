$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// TOOLTIPS
// —————————————————————————————————————————————————————————————————

$('.tooltip--click').on('click', function() {
	// variables
	var next = $(this);
	// icon animation
	$('.tooltip--click.js-show').not(next).removeClass('js-show');
	$(next).toggleClass('js-show');
});



// —————————————————————————————————————————————————————————————————

});