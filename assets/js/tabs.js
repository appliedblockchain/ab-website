$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// TABS
// —————————————————————————————————————————————————————————————————

// approach

$(".tab--approach .tabs a").click(function(event) {
	event.preventDefault();
	$(this).addClass("tab__button--active");
	$(this).siblings().removeClass("tab__button--active");
	var tab = $(this).attr("href");
	$(".tab--approach .tab__target").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// jobs

$(".tab--jobs .tabs a").click(function(event) {
	event.preventDefault();
	$(this).removeClass("button--primary-lighten");
	$(this).siblings().addClass("button--primary-lighten");
	var tab = $(this).attr("href");
	$(".tab--jobs .tab__target").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// events

$(".tab--events .tabs a").click(function(event) {
	event.preventDefault();
	$(this).removeClass("button--primary-lighten");
	$(this).siblings().addClass("button--primary-lighten");
	var tab = $(this).attr("href");
	$(".tab--events .tab__target").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});

// —————————————————————————————————————————————————————————————————

});