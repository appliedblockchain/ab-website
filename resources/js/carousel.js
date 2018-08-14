$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// CAROUSEL
// —————————————————————————————————————————————————————————————————

$('.owl-carousel-clients').owlCarousel({
    items: 5,
    dots: false,
    loop: true,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    responsive: {
        0: {
			items: 2,
			margin: 20
        },
        450: {
			items: 2,
			margin: 50
        },
		620: {
			items: 3,
			margin: 50
        },
        767: {
			items: 4,
			margin: 50
        },
        1080: {
			items: 5,
			margin: 80
        }
    }
});



$('.owl-carousel-technology').owlCarousel({
    items: 6,
    dots: false,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    responsive: {
        0: {
			items: 2,
			margin: 20
        },
        450: {
			items: 2,
			margin: 50
        },
		620: {
			items: 3,
			margin: 50
        },
        767: {
			items: 4,
			margin: 50
        },
        1080: {
			items: 6,
			margin: 40
        }
    }
});



$('.owl-carousel-news').owlCarousel({
    items: 1,
    dots: false,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
});



// —————————————————————————————————————————————————————————————————

});