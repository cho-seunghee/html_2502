var d = document;
var msg = '';

// page100
function page100() {
    msg = '';

    var tv = new Object();
    tv.color = "white";
    tv.price = 300000;
    tv.info = function(){
        msg += "tv 색상:" + this.color + "<br>";
        msg += "tv 가격:" + this.price + "<br>";
    }

    var car = {
        color : "black",
        price : 5000000,
        info: function(){
            msg += "car 색상:" + this.color + "<br>";
            msg += "car 가격:" + this.price + "<br>";
        }
    }

    msg += "<h1>tv 객체 메서드 호출</h1>";
    tv.info();

    msg += "<h1>car 객체 메서드 호출</h1>";
    car.info();

    d.getElementById("divS1").innerHTML = msg;
}

// page103
function page103() {
    msg = '';

    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];;
    var today = new Date();

    var nowMonth = today.getMonth() + 1;

    nowDate = today.getDate();
    nowDay = today.getDay();

    msg += "<h1>오늘 날짜 정보</h1>";
    msg += "현재 월:" + nowMonth + "<br>";
    msg += "현재 일:" + nowDate + "<br>";
    msg += "현재 요일:" + week[nowDay] + "<br>";

    var worldcup = new Date(2002, 4, 31);
    var theMonth = worldcup.getMonth();

    theDate = worldcup.getDate();
    theDay = worldcup.getDay();

    msg += "<h1>월드컵 날짜 정보</h1>";
    msg += "2002월드컵 몇 월:" + theMonth + "<br>";
    msg += "2002월드컵 몇 일:" + theDate + "<br>";
    msg += "2002월드컵 무슨 요일:" + week[theDay] + "<br>";

    d.getElementById("divS2").innerHTML = msg;
}

// page104
function page104() {
    msg = '';

    var today = new Date();
    var nowYear = today.getFullYear();

    var theDate = new Date(nowYear, 11, 31);
    var diffDate = theDate.getTime() - today.getTime();

    var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));

    msg += "연말 D-day: " + result + "일 남았습니다.";

    d.getElementById("divS3").innerHTML = msg;
}


// page105
function page105() {
    msg = '';

    var num = 2.1234;

    var maxNum =Math.max(10, 5, 8, 30),
    minNum = Math.min(10, 5, 8, 30),
    roundNum = Math.round(num),
    floorNum = Math.floor(num),
    ceilNum = Math.ceil(num),
    rndNum = Math.random(),
    piNum = Math.PI;

    msg += maxNum + "<br>";
    msg += minNum + "<br>";
    msg += roundNum + "<br>";
    msg += floorNum + "<br>";
    msg += ceilNum + "<br>";
    msg += rndNum + "<br>";
    msg += piNum + "<br>";


    d.getElementById("divS4").innerHTML = msg;
}