$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// FILTER (FOR BLOG POSTS)
// —————————————————————————————————————————————————————————————————

// init Isotope
var $grid = $('.grid').isotope({
    // options
});
// filter items on button click
$('.js-blog-filter').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.js-blog-filter .tab__button').on('click', function(){
    $('.js-blog-filter .tab__button').addClass('button--primary-lighten');
    $(this).removeClass('button--primary-lighten');
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


// —————————————————————————————————————————————————————————————————

});