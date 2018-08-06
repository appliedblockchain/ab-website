$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// SCRIPT
// —————————————————————————————————————————————————————————————————
// MENU SCROLL ANIMATION
// —————————————————————————————————————————————————————————————————



// —————————————————————————————————————————————————————————————————
// MENU SCROLL ANIMATION
// —————————————————————————————————————————————————————————————————

$(window).scroll(function() { //the scrolled element
	var scroll = $(this).scrollTop();
	if (scroll >= 5) { //the point past whom you add the class (in pixel)
		$('.header').addClass("scrolled"); //the element to which add the class
	} else {
		$('.header').removeClass("scrolled");
	}
});


// —————————————————————————————————————————————————————————————————

});