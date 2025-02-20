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

//page83
function page83() {
    msg = '';

    var site = prompt("네이버, 다음, 네이트, 구글 중 \
        즐겨 사용하는 포털 검색 사이트는?", "네이버");

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
            break
    }

    if (url)
    {
        url = "http://" + url;
        msg = 'location.href = ' + "'"+ url + "'";

        d.getElementById("divS9").innerHTML = msg;

        // 새 창으로 열기 위한 옵션 설정
        const windowFeatures = 
        'width=800,' +                  // 창의 너비
        'height=600,' +                 // 창의 높이
        'menubar=no,' +                 // 메뉴바 비활성화
        'toolbar=no,' +                 // 툴바 비활성화
        'location=no,' +                // 주소창 비활성화
        'status=no,' +                  // 상태바 비활성화
        'scrollbars=yes,' +             // 스크롤바 활성화
        'resizable=yes';                // 크기조절 가능

        window.open(url,"_blank", windowFeatures);
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

pageFor99 = () => {
    msg = '';
    
    for(let i=3;i<6;i++)
    {
        msg += `<span class='blue'>${i}단</span><br>`;

        for(let j=1;j<10;j++)
        {
            msg += `${i} * ${j} = ${i * j}<br>`;
        }
    }

    d.getElementById("divS21").innerHTML = msg;

};

pageFor99_2 = () => {
    msg = '';
    
    for(let i=3;i<6;i++)
    {
        if(i < 5)
        {
            msg += `<span class='blue'>${i}단</span><br>`;
        }

        for(let j=1;j<10;j++)
        {
            if ((i == 4 && j == 4) || i > 4)
            {
                break;
            }
            
            msg += `${i} * ${j} = ${i * j}<br>`;
        }
    }

    d.getElementById("divS22").innerHTML = msg;

};

pageFor99_3 = () => {
    msg = '';
    
    for(let i=3;i<6;i++)
    {
        msg += `<span class='blue'>${i}단</span><br>`;

        for(let j=1;j<10;j++)
        {
            if(i == 5 && j == 3)
            {
                continue;
            }

            msg += `${i} * ${j} = ${i * j}<br>`;
        }
    }

    d.getElementById("divS23").innerHTML = msg;

};