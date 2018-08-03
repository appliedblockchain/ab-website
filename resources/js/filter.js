$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// FILTER (FOR BLOG POSTS)
// —————————————————————————————————————————————————————————————————

// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.button-group a.button').on('click', function(){
      $('.button-group a.button').removeClass('active');
      $(this).addClass('active');
  });



// —————————————————————————————————————————————————————————————————

});