$(".menu").hover(function () {
    // over
    $(this)
        .find(".subMenu")
        .stop()
        .slideDown()

}, function () {
    // out
    $(".subMenu")
        .stop()
        .slideUp()
});

// $('.tabMenu li').click(function() {
//     var idx = $(this).index();

//     $('.tabItem >*').hide().removeClass('on');
//     $('.tabItem >*').eq(idx).show().addClass('on');

//     $('.tabMenu li').removeClass('on');
//     $(this).addClass('on');
// });