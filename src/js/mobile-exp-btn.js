$(function () {
    let $expBtn = $('.interest__btn');
    $expBtn.on('click', e => {
        $('html,body').animate({scrollTop:$(e.currentTarget).offset().top-10},{duration:1E3});

        let $arrow = $(e.currentTarget).find('.interest__arrow');
        $arrow.toggleClass('interest__arrow_up');

        let $expDesc = $(e.currentTarget).next('.interest__desc');
        $expDesc.slideToggle(500);

        $(e.currentTarget).toggleClass('expanded');
        let $body = $('body');
        $expBtn.hasClass('expanded')
            ? $body.css('background', '#f3f2da')
            : $body.css('background', 'url("img/bg-mobile.jpg") no-repeat');
    });
});

