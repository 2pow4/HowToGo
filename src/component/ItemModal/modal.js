function wrapWindowByMask() {
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //문서영역의 크기
    console.log( "document 사이즈:"+ $(document).width() + "*" + $(document).height());
    //브라우저에서 문서가 보여지는 영역의 크기
    console.log( "window 사이즈:"+ $(window).width() + "*" + $(window).height());

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#cover').css({
        'width' : maskWidth,
        'height' : maskHeight
    });

    //애니메이션 효과
    //$('#mask').fadeIn(1000);
    $('#cover').fadeTo("slow", 0.5);
}

// 예매권팝업 오픈
function popupOpen() {
    $('.popup').css("position", "absolute");
    //영역 가운에데 레이어를 뛰우기 위해 위치 계산
    $('.popup').css("top",(($(window).height() - $('.popup').outerHeight()) / 64) + $(window).scrollTop());
    $('.popup').css("left",(($(window).width() - $('.popup').outerWidth()) / 2) + $(window).scrollLeft());
    $('#popupBox').show();
}


function popupClose() {
    $('#popupBox').hide();
    $('#cover').hide();
}
// 팝업구현함수
function goDetail() {

/*팝업 오픈전 별도의 작업이 있을경우 구현*/

popupOpen(); //레이어 팝업창 오픈
wrapWindowByMask(); //화면 마스크 효과
}

// popup
// x표 누를시 팝업 종료
$(document).ready(function() {
$(".popup").on('click', function() {
  if($(event.target).is("#close")){
    $(".cover").fadeOut('slow');
    $(".popup").fadeOut('slow');
  }
});
})

function clickButton(){
$(".btn").fadeOut('slow'); // 고친부분
    goDetail();
}