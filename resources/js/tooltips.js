$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// TOOLTIPS
// —————————————————————————————————————————————————————————————————

$('.tooltip__trigger--tracking').hover(function(){
	var title = $(this).attr('title');
	$(this).data('tipText', title).removeAttr('title');
	$('<p class="tooltip__inner tooltip__inner--tracking"></p>')
	.text(title)
	.appendTo('body')
	.fadeIn('slow');
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