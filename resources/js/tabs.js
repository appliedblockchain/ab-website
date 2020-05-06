$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// TABS
// —————————————————————————————————————————————————————————————————

// approach

$(".tab--approach .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("tab__button--active");
	$(this).siblings().removeClass("tab__button--active");
	var tab = $(this).attr("href");
	$(".tab--approach .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// jobs

$(".tab--jobs .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).removeClass("button--primary-lighten");
	$(this).siblings().addClass("button--primary-lighten");
	var tab = $(this).attr("href");
	$(".tab--jobs .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// events

$(".tab--events .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).removeClass("button--primary-lighten");
	$(this).siblings().addClass("button--primary-lighten");
	var tab = $(this).attr("href");
	$(".tab--events .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// leadership

$(".tab--leadership .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("tab__button--active");
	$(this).siblings().removeClass("tab__button--active");
	var tab = $(this).attr("href");
	$(".tab--leadership .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// contact

$(".tab--contact .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).removeClass("button--primary-lighten");
	$(this).siblings().addClass("button--primary-lighten");
	var tab = $(this).attr("href");
	$(".tab--contact .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});



// —————————————————————————————————————————————————————————————————

});