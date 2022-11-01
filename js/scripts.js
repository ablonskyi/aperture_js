$( function() {
    $( "#accordion" ).accordion();
} );

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:1,
            autoplay: false,
        },
        992:{
            items:2,
            autoplay: true,
        },
        1000:{
            items:5,
            loop: true,
            autoplay: true,
        }
    }
});