$(function () {
    $('.interest__nav-link').on('click', (e) => {
        $('.interest__slide-up').animate({top: '-52%'}, 800, function(){
            $('.interest__slide-up').fadeOut(800);
            $('.interest__tabs').fadeIn(800);
        });
    });
});

