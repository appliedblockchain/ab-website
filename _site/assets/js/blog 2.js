$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// BLOG
// —————————————————————————————————————————————————————————————————

// share bar

var elementPosition = $('.share').offset();

$(window).scroll(function(){
    if($(window).scrollTop() > elementPosition.top - 120){
        $('.share').css('position','fixed').css('top','120px');
    } else {
        $('.share').css('position','absolute').css('top','0');
    }    
});

// —————————————————————————————————————————————————————————————————

});

