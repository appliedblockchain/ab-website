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

$('.events-tabs-container .tab').click(e => {
	$('.events-tabs-container .tab').removeClass('tab--active');
	$(e.target).addClass('tab--active');
	const targetType = $(e.target).attr('data-event-type');
	['events', 'webinars', 'podcasts', 'insights', 'videos'].forEach(type => {
		if (targetType === type) return;
		$('.event-cards-section').removeClass('event-cards-section--' + type);
	})
	$('.event-cards-section').addClass('event-cards-section--' + targetType);
});

// projects

$('.project-category-buttons-container .tab').click(e => {
	const targetType = $(e.target).attr('data-project-category');

	const isActive = e.target.classList.contains('tab--active');
	if (isActive) {
		e.preventDefault();
		$(e.target).removeClass('tab--active');
		$('.projects-container').removeClass('projects-container--' + targetType);
		window.history.replaceState({}, '', Object.assign(new URL(window.location.href), {
			hash: '',
		}).toString());
		return;
	}

	$('.project-category-buttons-container .tab').removeClass('tab--active');
	$(e.target).addClass('tab--active');
	[
		'supply-chain-management',
		'core-technologies',
		'financial-solutions',
		'nfts',
		'payment-settlement',
	].forEach(type => {
		if (targetType === type) return;
		$('.projects-container').removeClass('projects-container--' + type);
	});
	$('.projects-container').addClass('projects-container--' + targetType);
});

// —————————————————————————————————————————————————————————————————

});