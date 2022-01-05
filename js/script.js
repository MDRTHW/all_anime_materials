$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3,
            loop:true,
        },
        1000:{
            items:5
        }
    }
});

$(".owl-carousel").on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        $(".owl-carousel").trigger('next.owl');
    } else {
        $(".owl-carousel").trigger('prev.owl');
    }
    e.preventDefault();
});