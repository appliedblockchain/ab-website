$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// CAROUSEL
// —————————————————————————————————————————————————————————————————

$('.owl-carousel-clients').owlCarousel({
    dots: false,
    loop: true,
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

$('.owl-carousel-partners').owlCarousel({
    dots: false,
    loop: true,
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
			margin: 25
        },
		620: {
			items: 3,
			margin: 30
        },
        767: {
			items: 4,
			margin: 35
        },
        1080: {
			items: 5,
			margin: 40
        }
    }
});

$('.owl-carousel-technology').owlCarousel({
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    responsive: {
        0: {
			items: 2,
			margin: 5
        },
        450: {
			items: 2,
			margin: 10
        },
		620: {
			items: 3,
			margin: 10
        },
        767: {
			items: 4,
			margin: 20
        },
        960: {
			items: 5,
			margin: 20
        },
    }
});

$('.owl-carousel-testimonial').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    mouseDrag: false,
    touchDrag: false,
    items: 1,
    margin: 100,
});



// —————————————————————————————————————————————————————————————————

});