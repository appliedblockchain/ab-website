$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// CAROUSEL
// —————————————————————————————————————————————————————————————————

$('.owl-carousel-clients').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  smartSpeed: 2000,
  responsive: {
    0: { items: 3, margin: 0 },
    450: { items: 4, margin: 0 },
    575: { items: 5, margin: 20 },
    767: { items: 5, margin: 20 },
    1023: { items: 4, margin: 20 },
    1299: { items: 5, margin: 20 },
    1499: { items: 6, margin: 20 }
  }
});

$('.owl-carousel-beyond').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  smartSpeed: 2000,
  responsive: {
    0: { items: 3, margin: 40 },
    450: { items: 3, margin: 40 },
    575: { items: 4, margin: 40 },
    1023: { items: 5, margin: 40 },
    1299: { items: 6, margin: 40 },
  }
});

$('.owl-carousel-clients_color').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  smartSpeed: 2000,
  responsive: {
    0: { items: 2, margin: 20 },
    450: { items: 2, margin: 50 },
    575: { items: 3, margin: 50 },
    767: { items: 3, margin: 50 },
    1023: { items: 5, margin: 80 }
  }
});

$('.owl-carousel-technologies').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  smartSpeed: 2000,
  responsive: {
    0: { items: 2, margin: 20 },
    450: { items: 2, margin: 25 },
    575: { items: 3, margin: 30 },
    767: { items: 4, margin: 35 },
    1299: { items: 6, margin: 40 }
  }
});

$('.owl-carousel-partners').owlCarousel({
  dots: false,
  loop: true,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  smartSpeed: 2000,
  responsive: {
    0: { items: 2, margin: 20 },
    450: { items: 2, margin: 25 },
    575: { items: 3, margin: 40 },
    767: { items: 4, margin: 40 },
    1299: { items: 4, margin: 80 }
  }
});

$('.owl-carousel-testimonials').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
  smartSpeed: 2000,
  mouseDrag: false,
  touchDrag: true, 
  items: 1, 
  margin: 100 
});

$('.owl-carousel-webinar').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 2000,
  mouseDrag: false,
  touchDrag: true, 
  items: 1, 
  margin: 0 
});

$('.owl-carousel-news').owlCarousel({
  dots: true,
  nav: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 2000,
  mouseDrag: false,
  touchDrag: true, 
  items: 1, 
  margin: 0 
});

// —————————————————————————————————————————————————————————————————

});