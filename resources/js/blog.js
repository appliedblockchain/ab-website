$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// SCRIPT
// —————————————————————————————————————————————————————————————————
// SHARE BAR
// —————————————————————————————————————————————————————————————————



// —————————————————————————————————————————————————————————————————
// SHARE BAR
// —————————————————————————————————————————————————————————————————

$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
        var delay = 0;
        $('.share__button').each(function() {
            var $li = $(this);
            setTimeout(function() {
            $li.addClass('js-show');
            }, delay+=50); // delay 50 ms
        });
    } else {
        var delay = 0;
        $('.share__button').each(function() {
            var $li = $(this);
            setTimeout(function() {
            $li.removeClass('js-show');
            }, delay+=50); // delay 50 ms
        });
    }
});






// —————————————————————————————————————————————————————————————————

});    