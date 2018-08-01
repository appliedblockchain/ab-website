$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// ANCHOR
// —————————————————————————————————————————————————————————————————

// SCROLL TO ANCHOR
$('a.anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});



// —————————————————————————————————————————————————————————————————

});