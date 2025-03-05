$(document).ready(function() {
    $('.content2 img').height($('.content1').height());
    
    // 윈도우 리사이즈 시 대응
    // $(window).resize(function() {
    //     $('.content2 img').height($('.content1').height());
    // });
});


$(".menu").hover(function () {
    // over
    $(this).find(".subMenu").stop().fadeIn()

}, function () {
    // out
    $(".subMenu").stop().fadeOut()
}
);

function openPop() {
    $(".winPopup").show(500);
}
function closePop() {
    $(".winPopup").hide();
}