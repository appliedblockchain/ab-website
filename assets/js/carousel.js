$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// CAROUSEL
// —————————————————————————————————————————————————————————————————

$('.owl-carousel-testimonials').owlCarousel({
  dots: false,
  nav: true,
  loop: true,
  autoplay: false,
  smartSpeed: 2000,
  autoplayHoverPause: true,
  mouseDrag: false,
  responsive: {
    0: { items: 1 },
    568: { items: 1 },
    768: { items: 2 },
    1280: { items: 3  }
  },
  margin: 16
});

$('.owl-carousel-testimonials-alt').owlCarousel({
  dots: false,
  nav: true,
  loop: false,
  autoplay: false,
  smartSpeed: 2000,
  autoplayHoverPause: true,
  mouseDrag: false,
  responsive: {
    0: { items: 1 },
    568: { items: 1 },
    768: { items: 2 },
    1280: { items: 3  }
  },
  margin: 16
});

$('.owl-carousel-news').owlCarousel({
  dots: true,
  nav: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 10000,
  smartSpeed: 2000,
  mouseDrag: false,
  items: 1, 
  margin: 40,
  dotsContainer: ".owl-carousel-dots-container-news"
});

$('.owl-carousel-rating').owlCarousel({
  dots: true,
  nav: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 10000,
  smartSpeed: 2000,
  mouseDrag: false,
  items: 1, 
  margin: 40,
  dotsContainer: ".owl-carousel-dots-container-rating"
});

$('.owl-carousel-technologies').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 2000,
  mouseDrag: false,
  responsive: {
    0: { items: 2, margin: 20 },
    350: { items: 2, margin: 25 },
    568: { items: 3, margin: 30 },
    768: { items: 4, margin: 35 },
    1280: { items: 6, margin: 40 }
  }
});

$('.owl-carousel-partners').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 2000,
  mouseDrag: false,
  responsive: {
    0: { items: 2, margin: 20 },
    350: { items: 2, margin: 25 },
    568: { items: 3, margin: 40 },
    768: { items: 4, margin: 40 },
    1280: { items: 4, margin: 80 }
  }
});

$('.owl-carousel-webinar').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  smartSpeed: 1200,
  mouseDrag: false,
  items: 1, 
  margin: 0 
});

$('.owl-carousel-beyond').owlCarousel({
  dots: false,
  loop: true,
  autoplay: true,
  smartSpeed: 2000,
  responsive: {
    0: { items: 3, margin: 40 },
    350: { items: 3, margin: 40 },
    568: { items: 4, margin: 40 },
    1023: { items: 5, margin: 40 },
    1280: { items: 6, margin: 40 },
  }
});

// —————————————————————————————————————————————————————————————————

});