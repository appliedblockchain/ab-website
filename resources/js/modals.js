$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// MODALS
// —————————————————————————————————————————————————————————————————

// PREVENT PAGE SCROLL WHEN MODAL OPENED

// open
$(".js-button-modal").click(function(event) {
	$('html, body').addClass("js-freeze");
});

// close
$(".modal__close, .modal__button").click(function(event) {
	$('html, body').removeClass("js-freeze");
});



// —————————————————————————————————————————————————————————————————

});