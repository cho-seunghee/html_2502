$(".menu").hover(function () {
    // over
    $(this).find(".subMenu").stop().slideDown(800);;
}, function () {
    // out
    $(".subMenu").stop().slideUp(300);
}
);

$('.tabMenu li').click(function() {
    var idx = $(this).index();

    $('.tabItem >*').hide().removeClass('on');
    $('.tabItem >*').eq(idx).show().addClass('on');

    $('.tabMenu li').removeClass('on');
    $(this).addClass('on');
});

$(document).ready(function() {
    let slide = $('.slide');
    let sno = 0;
    let eno = slide.length - 1;
    let timer;

    // 초기 슬라이드 설정
    function initSlide() {
        slide.css({
            position: 'absolute',
            left: '-100%',
            opacity: 0
        });
        
        // 첫 번째 슬라이드는 중앙에 위치
        $(slide[sno]).css({
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 1
        });
    }

    // 슬라이드 애니메이션
    function slideAnimation() {
        // 현재 슬라이드를 오른쪽으로 이동
        $(slide[sno]).stop().animate({
            left: '100%',
            opacity: 0
        }, 1000, function() {
            // 애니메이션 완료 후 왼쪽으로 이동
            $(this).css({
                left: '-100%',
                transform: 'translateX(0)'
            });
        });

        // 다음 슬라이드 인덱스
        sno = (sno + 1) > eno ? 0 : sno + 1;

        // 다음 슬라이드를 중앙으로 이동
        $(slide[sno]).css({
            left: '-100%',
            opacity: 0
        }).stop().animate({
            left: '0',
            transform: 'translateX(50%)',
            opacity: 1
        }, 1000);
    }

    // 자동 슬라이드 시작
    function startSlide() {
        timer = setInterval(slideAnimation, 3000);
    }

    // 자동 슬라이드 정지
    function stopSlide() {
        clearInterval(timer);
    }

    // 이전 버튼 클릭
    $('.prevBtn').click(function() {
        stopSlide();

        // 현재 슬라이드를 오른쪽으로 이동
        $(slide[sno]).stop().animate({
            left: '-100%',
            opacity: 0
        }, 1000, function() {
            // 애니메이션 완료 후 왼쪽으로 이동
            $(this).css({
                left: '100%',
                transform: 'translateX(0)'
            });
        });
        
        sno = (sno - 1) < 0 ? eno : sno - 1;

        $(slide[sno]).css({
            left: '100%',
            opacity: 0
        }).stop().animate({
            left: '0',
            transform: 'translateX(-50%)',
            opacity: 1
        }, 1000);

        startSlide();
    });

    // 다음 버튼 클릭
    $('.nextBtn').click(function() {
        stopSlide();
        slideAnimation();
        startSlide();
    });

    // 초기화 및 시작
    initSlide();
    startSlide();

    // hover 이벤트
    $('.slideContainer').hover(
        function() { stopSlide(); },
        function() { startSlide(); }
    );
});