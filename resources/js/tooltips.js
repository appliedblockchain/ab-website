$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// TOOLTIPS
// —————————————————————————————————————————————————————————————————
// ON CLICK
// WITH TRACKING
// —————————————————————————————————————————————————————————————————



// —————————————————————————————————————————————————————————————————
// ON CLICK
// —————————————————————————————————————————————————————————————————

$('.tooltip--click').on('click', function() {
	// variables
	var next = $(this).children('.tooltip__inner');

	$('.tooltip__inner.js-show').not(next).removeClass('js-show');
	$(next).toggleClass('js-show');
});



// —————————————————————————————————————————————————————————————————
// WITH TRACKING
// —————————————————————————————————————————————————————————————————

$('.js-tooltip-tracking').hover(function(){
	var title = $(this).attr('title');
	$(this).data('tipText', title).removeAttr('title');
	$('<p class="tooltip__inner tooltip__inner--tracking block body--bold"></p>')
	.text(title)
	.appendTo('body')
	.fadeIn(400);
}, function() {
	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip__inner--tracking').remove();
}).mousemove(function(e) {
	var mousex = e.pageX + 20;
	var mousey = e.pageY + 20;
	$('.tooltip__inner--tracking')
	.css({ top: mousey, left: mousex })
});



// —————————————————————————————————————————————————————————————————

});