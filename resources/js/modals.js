$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// MODALS
// —————————————————————————————————————————————————————————————————

// PREVENT PAGE SCROLL WHEN MODAL OPENED

// open
$(".button--modal").click(function(event) {
	$('html, body').addClass("freeze");
});

// close
$(".modal__close, .modal__button").click(function(event) {
	$('html, body').removeClass("freeze");
});



// —————————————————————————————————————————————————————————————————

});