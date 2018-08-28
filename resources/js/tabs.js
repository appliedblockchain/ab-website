$(document).ready(function() {



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

// jobs

$(".jobs.tab--vertical .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".jobs.tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// events

$(".event.tab--vertical .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".event.tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// leadership

$(".leadership.tab--vertical .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".leadership.tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// contact

$(".contact.tab--vertical .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".contact.tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});



// horizontal

$(".tab--horizontal .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".tab--horizontal .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});



// —————————————————————————————————————————————————————————————————

});