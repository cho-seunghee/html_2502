var d = document;
var msg = '';

fnPage137 = () => {
    window.open("./ex_p137_child.html", "pop1", "width=300, height=400, \
        left = 300, top = 50");
}

var addNum = 0;
var addNum2 = 0;
var subNum = 0;

var auto_1 = setInterval(() => {
    addNum++;
    console.log(`page141 addNum: ${addNum}`);
}, 3000);

var auto_2 = setInterval(function() {
    subNum--;
    console.log(`page141 subNum: ${subNum}`);
}, 3000);

// 특정 조건 (예시: 초초 후에 타이머 취소)
setTimeout(function() {
    let condition = true; // 조건 설정
    if (condition) {
        clearInterval(auto_1);
        clearInterval(auto_2);
        console.log("조건을 충족하여 타이머가 취소되었습니다.");
    }
}, 10000);

fnPage141 = (fn) => {
    clearInterval(fn);
}

var auto_3 = setTimeout(() => {
    addNum2++;
    console.log(`page143 addNum2: ${addNum2}`);
}, 10000);

fnPage143 = () => {
    clearTimeout(auto_3);
}

fnPage149 = () => {
    var info = navigator.userAgent.toLowerCase();
	var osImg = null;

	if(info.indexOf('windows') >= 0) {
		osImg = "windows.png";
	} else if(info.indexOf('macintosh') >= 0) {
		osImg = "macintosh.png";
	} else if (info.indexOf('iphone') >= 0) {
		osImg = "iphone.png";
	} else if (info.indexOf('android') >= 0) {
		osImg = "android.png";
	}

    msg = "<img src=\"./images/" + osImg + "\">", "<br>";

	var scr = screen;
	var sc_w = scr.width;
	var sc_h = scr.height;

    msg += "모니터 해상도 너비:" + sc_w + "px", "<br>";
    msg += "모니터 해상도 높이:" + sc_h + "px", "<br>";

    d.getElementById("divS4").innerHTML = msg;
}

fnPage151 = () => {
    var phoneNum = "010-2345-1234";
    var result_1 = phoneNum.substring(0, 9);
    msg = `${result_1} **** <br>`;

    var imgSrc = "./images/bnt_out.jpg";
    var result_2 = imgSrc.replace("bnt_out", "bnt_over");

    msg += `${result_2} <br>`;

    d.getElementById("divS5").innerHTML = msg;
}

fnPage151_2 = () => {
    var menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥"];
    var menuNum = Math.floor(menu.length * Math.random());
    var result = menu[menuNum];

    d.getElementById("divS6").innerHTML = result;
}