$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// TABS
// —————————————————————————————————————————————————————————————————
// TABS
// ACCORDIONS
// CAROUSEL
// —————————————————————————————————————————————————————————————————



// —————————————————————————————————————————————————————————————————
// TABS
// —————————————————————————————————————————————————————————————————

// horizontal

$(".tab--vertical .tab__nav .btn").click(function(event) {
	event.preventDefault();
	$(this).parent().addClass(".tab--vertical nav__btn--active");
	$(this).parent().siblings().removeClass(".tab--vertical nav__btn--active");
	var tab = $(this).attr("href");
	$(".tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// vertical

$(".tab--horizontal .tab__nav .btn").click(function(event) {
	event.preventDefault();
	$(this).parent().addClass(".tab--horizontal nav__btn--active");
	$(this).parent().siblings().removeClass(".tab--horizontal nav__btn--active");
	var tab = $(this).attr("href");
	$(".tab--horizontal .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});



// —————————————————————————————————————————————————————————————————
// ACCORDIONS
// —————————————————————————————————————————————————————————————————

$('.accordion .accordion__header').on('click', function() {
	var next = $(this).next('p');
	$('.accordion__content').not(next).each(function() {
		$(this).slideUp();
	});
	next.slideToggle();
});



// —————————————————————————————————————————————————————————————————
// CAROUSEL
// —————————————————————————————————————————————————————————————————

$('.carousel').flexslider({
	animation: 'slide',
	direction: 'vertical',
	controlsContainer: '.carousel',
	slideshowSpeed: 3000,
	animationSpeed: 1000,
	prevText: "",
	nextText: "",
	namespace: 'carousel__'
});




// —————————————————————————————————————————————————————————————————

});