$(function () {
    let $expBtn = $('.interest__btn');
    $expBtn.on('click', e => {
        $('html,body').animate({scrollTop:$(e.currentTarget).offset().top-10},{duration:1000});

        $(e.currentTarget).toggleClass('expanded');
        let $expDesc = $(e.currentTarget).next('.interest__desc');
        let $arrow = $(e.currentTarget).find('.interest__arrow');
        $expDesc.slideToggle(500);
        $arrow.toggleClass('interest__arrow_up');

        $expBtn.each(function() {
            if ($(this).hasClass('expanded') && this !== e.currentTarget) {
                $(this).removeClass('expanded');
                $(this).find('.interest__arrow').removeClass('interest__arrow_up');
                $(this).next('.interest__desc').slideUp(500);
            }
        });

        let $body = $('body');
        $expBtn.hasClass('expanded')
            ? $body.css('background', '#f3f2da')
            : $body.css({
                'background': 'url("img/bg-mobile.jpg") no-repeat',
                'background-size': '100%'
            });
    });

    $(document).mouseup(e => {
        let $desc = $expBtn.next('.interest__desc');

        if (!$expBtn.is(e.target)
            && $expBtn.has(e.target).length === 0
            && !$desc.is(e.target)
            && $desc.has(e.target).length === 0
            && document.body.clientWidth < 540
        ) {
            $expBtn.find('.interest__arrow').removeClass('interest__arrow_up');
            $desc.slideUp(500);
            $('body').css({
                'background': 'url("img/bg-mobile.jpg") no-repeat',
                'background-size': '100%'
            });
        }

    });
});

