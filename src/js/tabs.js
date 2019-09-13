$(function() {
    $('.interest__tabs-list').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.interest__tabs').find('.interest__tabs-content')
            .removeClass('active').eq($(this).index()).addClass('active');
    });
});

