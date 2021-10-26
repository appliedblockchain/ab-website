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

// —————————————————————————————————————————————————————————————————

});