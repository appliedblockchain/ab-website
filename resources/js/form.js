$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// form
// —————————————————————————————————————————————————————————————————

// change style on focus

$(".form__input").focus(function() {
	$(this).closest(".form__group").addClass('focused');
});
$(".form__input").focusout(function() {
	$(this).closest(".form__group").removeClass('focused');
});



// —————————————————————————————————————————————————————————————————

});