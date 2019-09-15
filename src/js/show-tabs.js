$(function () {
    $('.interest__nav-link').on('click', (e) => {
        $('.interest__slide-up').animate({top: '-52%'}, 800, function(){
            $('.interest__slide-up').fadeOut(800);
            $('.interest__tabs').fadeIn(800);
        });
        let ind = $(e.target).closest('li').index();
        $('.interest__tabs-li').eq(ind).addClass('active');
        $('.interest__tabs-content').eq(ind).addClass('active');
    });
});

