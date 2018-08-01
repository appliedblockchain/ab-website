$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// MODALS
// —————————————————————————————————————————————————————————————————

// PREVENT PAGE SCROLL WHEN MODAL OPENED

// open
$(".btn--modal").click(function(event) {
	$('html, body').addClass("freeze");
});

// close
$(".modal__close, .modal__btn").click(function(event) {
	$('html, body').removeClass("freeze");
});



// —————————————————————————————————————————————————————————————————

});