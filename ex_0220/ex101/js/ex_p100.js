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

    msg += '<pre>var num = 2.1234;</pre>';
    msg += '<pre>var maxNum =Math.max(10, 5, 8, 30), : Math.max(숫자1, ...) 숫자 중 가장 큰값 반환</pre>';
    msg += '<pre>minNum = Math.min(10, 5, 8, 30), : Math.min(숫자1, ...) 숫자 중 가장 작은값 반환</pre>';
    msg += '<pre>roundNum = Math.round(num), : Math.round(숫자) 소수점 첫째 자리 반올림 정수로 반환</pre>';
    msg += '<pre>floorNum = Math.floor(num), : Math.floor(숫자) 소수점 첫째 자리 무조건 내림하여 정수로 반환</pre>';
    msg += '<pre>ceilNum = Math.ceil(num), : Math.ceil(숫자) 소수점 첫째 자리 무조건 올림하여 정수로 반환</pre>';
    msg += '<pre>rndNum = Math.random(), : Math.random() 0과 1사이 난수 반환</pre>';
    msg += '<pre>piNum = Math.PI; : Math.PI() 원주율 상수 반환</pre><br>';

    msg += '<pre>maxNum</pre>';
    msg += maxNum + "<br><br>";

    msg += '<pre>minNum</pre>';
    msg += minNum + "<br><br>";

    msg += '<pre>roundNum</pre>';
    msg += roundNum + "<br><br>";

    msg += '<pre>floorNum</pre>';
    msg += floorNum + "<br><br>";

    msg += '<pre>ceilNum</pre>';
    msg += ceilNum + "<br><br>";

    msg += '<pre>rndNum</pre>';
    msg += rndNum + "<br><br>";

    msg += '<pre>piNum</pre>';
    msg += piNum + "<br><br>";


    d.getElementById("divS4").innerHTML = msg;
}

const page107 = () => {
    msg = '';

    msg = "<h1>컴퓨터 가위, 바위 , 보 맞추기</h1>";
    var game = prompt("가위, 바위 , 보 중 선택하세요?", "가위");
    var gameNum;

    switch (game) {
        case '가위':
            gameNum = 1;
            break;

        case '바위':
            gameNum = 2;
            break;

        case '보':
            gameNum = 3;
            break;
    
        default:
            alert('잘못 작성했습니다.');
            location.reload();
            break;
    }

    var com = Math.ceil(Math.random() * 3);

    msg += `<img src=\"images/math_img_${com}.jpg\">`;

    if (gameNum == com)
    {
        msg += "<img src=\"images/game_1.jpg\">";
    }
    else
    {
        msg += "<img src=\"images/game_2.jpg\">";
    }

    d.getElementById("divS5").innerHTML = msg;

};

const page110 = () => {
    var arr = [30, "따르릉", true];

    msg = '';

    msg += '<h3>배열값 가져오기-1</h3>';
    msg += arr[0] + '<br>';
    msg += arr[1] + '<br>';
    msg += arr[2] + '<br>';

    msg += '<h3>배열값 가져오기-2</h3>';
    for(var i=0;i<arr.length;i++)
    {
        msg += arr[i] + '<br>';
    }

    msg += '<h3>배열값 가져오기-3</h3>';
    for(i in arr)
    {
        msg += arr[i] + '<br>';
    }
  
    d.getElementById("divS6").innerHTML = msg;

};

page112 = () => {
    const arr_1 = ["사당", "교대", "방배", "강남"];
    const arr_2 = ["신사", "압구정", "옥수"];

    msg = '';
    let result = arr_1.join('-');
    console.log(result);

    msg += '<pre>const arr_1 = ["사당", "교대", "방배", "강남"];<br>';
    msg += 'const arr_2 = ["신사", "압구정", "옥수"];</pre>';

    msg += '<pre>let result = arr_1.join("-"); : join(연결문자) 객체 data를 연결 문자 기준으로 1개 문자형 반환</pre>';
    msg += `${result}<br><br>`;

    result = arr_1.concat(arr_2);
    console.log(result);

    msg += '<pre>result = arr_1.concat(arr_2); : concat(객체) 배열 객체 2개를 하나로 결합</pre>';
    msg += `${result}<br><br>`;

    result = arr_2.splice(1, 3);
    console.log(result);

    msg += '<pre>result = arr_2.splice(1, 3); : splice(구간1, 구간2) 배열 객체의 지정 data를 삭제 후 구간에 새 data 삽입</pre>';
    msg += `${result}<br><br>`;

    arr_1.sort();
    console.log(arr_1);

    msg += '<pre>arr_1.sort(); : sort() 오름차순 정렬</pre>';
    msg += `${arr_1}<br><br>`;

    arr_1.reverse();
    console.log(arr_1);

    msg += '<pre>arr_1.reverse(); : reverse() 내림차순 정렬</pre>';
    msg += `${arr_1}<br><br>`;

    d.getElementById("divS7").innerHTML = msg;

};

page113 = () => {
    msg = '';

    const greenArr = ['교대', '방배', '강남'];
    const yellowArr = ['미금', '정자', '수서'];

    msg += "<pre>const greenArr = ['교대', '방배', '강남'];<br>";
    msg += "const yellowArr = ['미금', '정자', '수서'];</pre>";

    greenArr.splice(2, 1, '서초', '역삼');

    msg += "<pre>greenArr.splice(2, 1, '서초', '역삼'); : splice(구간1, 구간2) 배열 객체의 지정 data를 삭제 후 구간에 새 data 삽입</pre>";
    msg += `${greenArr}<br><br>`;

    console.log(greenArr);

    const data1 = yellowArr.pop();
    const data2 = yellowArr.shift();

    msg += "<pre>const data1 = yellowArr.pop(); : pop() 배열 data 중 마지막 index data 삭제</pre>";
    msg += `${data1}<br><br>`;
    msg += "<pre>const data2 = yellowArr.shift(); : shift() 배열 data 중 첫 번째 index data 삭제</pre>";
    msg += `${data2}<br><br>`;

    console.log(data1);
    console.log(data2);

    yellowArr.push(data2);
    console.log(yellowArr);

    msg += "<pre>yellowArr.push(data2); : push(new data) 배열 data의 마지막 index에 새 data 삽입</pre>";
    msg += `${yellowArr}<br><br>`;

    yellowArr.unshift(data1);
    console.log(yellowArr);

    msg += "<pre>yellowArr.unshift(data1); : unshift(new data) 배열 data의 가장 앞 인덱스에 새 data 삽입 </pre>";
    msg += `${yellowArr}<br><br>`;


    d.getElementById("divS8").innerHTML = msg;

};

page116 = () => {
    var t = "Hello Thank you good luck to you";
    msg = '';

    msg += '<pre>const t = "Hello Thank you good luck to you"</pre>';

    msg += `<pre>t.charAt(16)</pre>`;
    msg += `${t.charAt(16)}<br><br>`;

    msg += `<pre>t.indexOf("you") : indexOf(찾을문자) 왼쪽부터 일치문자의 index 반환, 없으면 -1 반환</pre>`;
    msg += `${t.indexOf("you")}<br><br>`;

    msg += `<pre>t.indexOf("you", 16) : indexOf(찾을문자, 시작위치) 왼쪽부터 일치문자의 index 반환, 없으면 -1 반환</pre>`;
    msg += `${t.indexOf("you", 16)}<br><br>`;

    msg += `<pre>t.lastIndexOf("you") : lastIndexOf(찾을문자) 오른쪽부터 일치문자의 index 반환, 없으면 -1 반환</pre>`;
    msg += `${t.lastIndexOf("you")}<br><br>`;

    msg += `<pre>t.lastIndexOf("you", 25) : lastIndexOf(찾을문자, 시작위치) 오른쪽부터 일치문자의 index 반환, 없으면 -1 반환</pre>`;
    msg += `${t.lastIndexOf("you", 25)}<br><br>`;

    msg += `<pre>t.match("luck") : math(찾을문자) 왼쪽부터 찾은 문자 반환, 없으면 null 반환</pre>`;
    msg += `${t.match("luck")}<br><br>`;

    msg += `<pre>t.search("you") : search(찾을문자) 왼쪽부터 찾은 문자의 index 반환</pre>`;
    msg += `${t.search("you")}<br><br>`;

    msg += `<pre>t.substr(21,4): substr(index, 문자 개수) index부터 문자 개수만큼 문자열 반환</pre>`;
    msg += `${t.substr(21,4)}<br><br>`;

    msg += `<pre>t.substring(21,4) : substring(시작index, 끝index) 시작 <= 문자반환 <끝 문자 반환</pre>`;
    msg += `${t.substring(6,12)}<br><br>`;

    msg += `<pre>t.replace("you","me") : replace(바꿀문자, 새문자) 새문자로 변경</pre>`;
    msg += `${t.replace("you","me")}<br><br>`;

    msg += `<pre>t.toLocaleLowerCase() : 소문자로</pre>`;
    msg += `${t.toLocaleLowerCase()}<br><br>`;

    msg += `<pre>t.toUpperCase() : 대문자로</pre>`;
    msg += `${t.toUpperCase()}<br><br>`;

    msg += `<pre>t.length : 문자열 개수 반환</pre>`;
    msg += `${t.length}<br><br>`;

    var s = t.split(" ");

    msg += `<pre>var s = t.split(" "); : split(분할할 문자) 배열문자열 반환</pre>`;

    msg += `<pre>s[0]</pre>`;
    msg += `${s[0]}<br><br>`;

    msg += `<pre>s[4]</pre>`;
    msg += `${s[4]}<br><br>`;

    var str = 'A';
    var t = str.charAt(0);

    msg += `<pre>var str = "A";</pre>`;
    msg += `<pre>var t = str.charAt(0); : charAt(index 값) index 번호의 해당 문자 반환</pre>`;

    msg += `<pre>t</pre>`;
    msg += `${t}<br><br>`;

    msg += `<pre>String.fromCharCode(65) : fromCharCode(아스키 코드값) 문자 반환</pre>`;
    msg += `${String.fromCharCode(65)}<br><br>`;


    d.getElementById("divS9").innerHTML = msg;


};