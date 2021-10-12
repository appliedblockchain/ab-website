$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// FILTER (FOR BLOG POSTS)
// —————————————————————————————————————————————————————————————————

// init Isotope
var $grid = $('.js-filter-content').isotope({
  layoutMode: 'fitRows'
});

// filter items on button click
$('.js-filter').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.js-filter .tab').on('click', function(){
  $('.js-filter .tab').removeClass('js-active');
  $(this).addClass('js-active');
});

// —————————————————————————————————————————————————————————————————

});