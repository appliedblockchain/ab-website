$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// JOIN
// —————————————————————————————————————————————————————————————————

// change background image

$('.js-button-london').on('click', function() {
    $('.jobs__background--porto').removeClass('js-show').fadeIn();
});

$('.js-button-porto').on('click', function() {
    $('.jobs__background--porto').addClass('js-show').fadeIn();
});



// —————————————————————————————————————————————————————————————————

});