const linkImg = ["./images/g1.jpeg", "./images/g2.jpeg", "./images/g1.jpeg", "./images/g2.jpeg"];
let linkImgCnt = 0;

$(document).ready(function() {
    $('.slideContent img').height($('.slideContent').height());

    $('.tab').width($('.content').width());
    

    if($(".noticeImg").attr('src') != '')
    {
        $(".noticeImg").attr('src', linkImg[linkImgCnt]).stop().animate({
            left : "-100"
        });

        $(".slideContent img").attr('src', linkImg[linkImgCnt]).fadeIn(3000);

        $(".noticeImg").attr('src', linkImg[linkImgCnt]).stop().animate({
            left : "0"
        });
    }
    // 윈도우 리사이즈 시 대응
    // $(window).resize(function() {
    //     $('.content2 img').height($('.content1').height());
    // });
});

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

$(".noticeNavConR").click(function() {
    if(linkImgCnt >= linkImg.length) linkImgCnt = 0;

    $(".noticeImg").attr('src', function(){
        linkImgCnt++;
        return linkImg[linkImgCnt];
    });

    $(".slideContent img").attr('src', linkImg[linkImgCnt]);
    
});

$('.tabMenu li').click(function() {
    var idx = $(this).index();

    $('.tabItem >*').hide().removeClass('on');
    $('.tabItem >*').eq(idx).show().addClass('on');

    $('.tabMenu li').removeClass('on');
    $(this).addClass('on');
});