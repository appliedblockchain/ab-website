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

// solutions

$(".solutions.tab--vertical .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".solutions.tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// approach

$(".approach.tab--vertical .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".approach.tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// approach

$(".jobs.tab--vertical .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".jobs.tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// vertical

$(".tab--horizontal .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
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