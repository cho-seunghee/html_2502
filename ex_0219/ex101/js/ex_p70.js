var d = document;
var msg = '';

function fnOutPut(id, valId, fnNm) {
    var val = '';
    val = d
        .getElementById(valId)
        .value;

    if (fnNm == 'page70') 
        val = page70(val);
    
    d
        .getElementById(id)
        .innerHTML = val;
}

// page70
function page70(walkAmount) {
    msg = '';
    if (walkAmount >= 10000) {
        msg = "매우 좋은 습관을 지니고 계시군요!!<br>";
    } else {
        msg = "매우 좋은 습관이 아니군요!!<br>";
    }

    msg += "===================== The End ===============";
    return msg;
}

//page71
function page71() {
    msg = '';
    var min = prompt("당신의 하루 통화량은 몇분인가요?", "0");

    if (min >= 60) {
        msg = "많이 사용하는 편이네요!!<br>";
    } else {
        msg = "많이 사용하는 편이 아니네요!!<br>";
    }

    msg += "===================== The End ===============";

    d.getElementById("divS2").innerHTML = msg;
}

//page72
function page72() {
    msg = '';

    var userName = prompt("방문자의 이름은?", "");

    if (userName) {
        msg = userName + "님 반갑습니다! 방문을 환영합니다.<br>";
    } else {
        msg = '이름이 없습니다.';
    }

    d.getElementById("divS3").innerHTML = msg;
        
}

//page73
function page73() {
    msg = '';

    var num = prompt("당신이 좋아하는 숫자는?", "0");

    if (num % 2 == 0) {
        msg = '당신이 좋아하는 숫자는 짝수입니다.';
    } else {
        msg = '당신이 좋아하는 숫자는 홀수입니다.';
    }

    d.getElementById("divS4").innerHTML = msg;
        
}

//page75
function page75() {
    msg = '';

    var result = confirm("정말로 회원을 탈퇴하시겠습니까?");

    if (result)
    {
        msg = '탈퇴 처리되었습니다!';
    }
    else{
        msg = '탈퇴 취소되었습니다!';

    }

    d.getElementById("divS5").innerHTML = msg;
}

//page77
function page77() {
    msg = '';

    var mon = prompt("현재는 몇 월입니까?", "0");

    if (mon >= 9 && mon <= 11)
    {
        msg = '독서의 계절 가을이네요!!';
    }
    else if (mon >= 6 && mon <= 8)
    {
        msg = '여행하기 좋은 여름이네요!!';
    }
    else if (mon >= 3 && mon <= 5)
    {
        msg = '햇살 가득한 봄이네요!!';
    }
    else{
        msg = '스키의 계절 겨울이네요!!';
    }

    d.getElementById("divS6").innerHTML = msg;
        
}


//page78
function page78() {
    msg = '';

    var id = "easy1004";
    var pw = "112233";

    var user_id = prompt("아이디?", "");
    var user_pw = prompt("비밀번호는?", "");

    if(id == user_id)
    {
        if(pw == user_pw)
        {
            msg = user_id + "님 반갑습니다!";    
        }
        else
        {
            alert("비밀번호가 일치하지 않습니다.");
            location.reload();
        }
    }
    else{
        alert("아이디가 일치하지 않습니다.");
    }

    d.getElementById("divS7").innerHTML = msg;
        
}

//page80
function page80() {
    msg = '';

    let num = 10;
    let user = prompt("당신의 이름은?", "홍길동");

    if (num > 5)
    {
        let num = 50;
        num = num + 10;
    }

    msg = `${num} <br>`;


    if (user != "")
    {
        user = user;
    }

    msg += `${user} <br>`;

    d.getElementById("divS8").innerHTML = msg;
}

//page83
function page83() {
    msg = '';

    var site = prompt("네이버, 다음, 네이트, 구글 중 \
        즐겨 사용하는 포털 검색 사이트는?", "");

    var url;

    switch(site){
        case "구글" : url = "www.google.com";
        break;
        case "다음" : url = "www.daum.net";
        break;
        case "네이버" : url = "www.naver.com";
        break;
        case "네이트" : url = "www.nate.com";
        break;
        default:
            alert("보기 중에 없는 사이트입니다.");
    }

    if (url)
    {
        url = "http://" + url;
        msg = 'location.href = ' + "'"+ url + "'";

        d.getElementById("divS9").innerHTML = msg;
    }
}

//page84
function page84() {
    msg = '';

    var i = 1;
    while(i <= 10)
    {
        msg += "안녕하세요" + i + "<br />";
        i++;
    }

    msg += "===================== The End ===============";

    d.getElementById("divS10").innerHTML = msg;
        
}

//page85
function page85() {
    msg = '';

    var i = 1;

    while(i <= 30)
    {
        if(i % 2 == 0 && i % 6 == 0)
        {
            msg += i + "<br>";
        }

        i++;
    }

    d.getElementById("divS11").innerHTML = msg;
        
}

//page86
function page86() {
    msg = '';

    var i = 20;
    while(i >= 10)
    {
        if(i % 2 == 0)
        {
            msg += "<p class='blue'>" + i + "</p>";
        }
        else
        {
            msg += "<p class='red'>" + i + "</p>";
        }

        i--;
    }

    d.getElementById("divS12").innerHTML = msg;
        
}

//page87
function page87() {
    msg = '';

    var i = 0;
    do {
        msg += "hello!!" + "i:" + i + "<br>";
        i++;
    }
    while(i < 8)

    d.getElementById("divS13").innerHTML = msg;
        
}

//page88
function page88() {
    msg = '';

    for (var i=1;i<=10;i++)
    {
        msg += "반복" + i + "<br>";
    }

    d.getElementById("divS14").innerHTML = msg;
        
}

//page89
function page89() {
    msg = '';

    for (var i=1;i<=100;i++)
    {
        if(i % 5 == 0 && i % 7 != 0)
        {
            msg += "<p class='red'>" + i + "</p>";

        }
        else if(i % 7 == 0 && i % 5 != 0)
        {
            msg += "<p class='green'>" + i + "</p>";
        }
        else if(i % 7 == 0 && i % 5 == 0)
        {
            msg += "<p class='aqua'>" + i + "</p>";
        }
        
    }

    d.getElementById("divS15").innerHTML = msg;
        
}

//page90
function page90() {
    msg = '';

    for(var i=1;i<=10;i++)
    {
        if(i == 6) break;

        msg += i + "<br>";
    }

    msg += "===================== The End ===============";

    d.getElementById("divS16").innerHTML = msg;
        
}

//page91
function page91() {
    msg = '';

    for(var i=1;i<=10;i++)
    {
        if(i % 2 == 0) continue;

        msg += i + "<br>";
    }

    msg += "===================== The End ===============";

    d.getElementById("divS17").innerHTML = msg;
        
}

//page92
function page92() {
    msg = '';

    for(var i=1;i<=3;i++)
    {
        for(var k=1;k<=2;k++)
        {
            msg += i + "행" + k + "열" + "<br>";
        }
    }

    msg += "===================== The End ===============";

    d.getElementById("divS18").innerHTML = msg;
        
}

//page94
function page94() {
    msg = '';

    var i = 1;
    while(i < 10){
        msg += "5X" + i + "=" + i*5 + "<br>";

        i++;
    }

    d.getElementById("divS19").innerHTML = msg;
}

//page95
function page95() {
    msg = '';

    var num = 1;
    var t = "<table border = '1'>";
    for(var i=1; i<=5;i++)
    {
        t += "<tr>";

        for(var k=1; k<=5;k++)
        {
            t += "<td>"+ i*k + "</td>";
            num++;
        }

        t += "</tr>";
    }

    t += "</table>";

    console.log(t);

    d.getElementById("divS20").innerHTML = t;
}