$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// ANCHOR
// —————————————————————————————————————————————————————————————————

// scroll to

$.scrollTo = $.fn.scrollTo = function(x, y, options){
  if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
  options = $.extend({}, {
    gap: {
      x: 0,
      y: -120
    },
    animation: {
      easing: 'swing',
      duration: 600,
      complete: $.noop,
      step: $.noop
    }
  }, options);
  return this.each(function(){
    var elem = $(this);
    elem.stop().animate({
      scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
      scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
    }, options.animation);
  });
};

$(".anchor a").click(function(evn){
   evn.preventDefault();
   $('html,body').scrollTo(this.hash, this.hash);
});

// —————————————————————————————————————————————————————————————————

});