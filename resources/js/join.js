$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// JOIN
// —————————————————————————————————————————————————————————————————
// CHANGE BACKGROUND IMAGE
// —————————————————————————————————————————————————————————————————


$('.js-button-london').on('click', function() {
    var $container = $('.js-jobs-container');
    $container.fadeOut(function() {
        $container.addClass('js-background-london').fadeIn();
        $container.removeClass('js-background-porto').fadeIn();
    });
});

$('.js-button-porto').on('click', function() {
    var $container = $('.js-jobs-container');
    $container.fadeOut(function() {
        $container.addClass('js-background-porto').fadeIn();
        $container.removeClass('js-background-london').fadeIn();
    });
});




// —————————————————————————————————————————————————————————————————

});