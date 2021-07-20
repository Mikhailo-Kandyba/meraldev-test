$('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1115,
            settings: {
                centerPadding: '70px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1023,
            settings: {
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-navigation").toggleClass('show-menu');
});

$(".user").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-navigation").toggleClass('show-menu');
});
