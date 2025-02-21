var d = document;
var msg = "";


fnS1 = () => {
    d.getElementById("demo1").innerHTML = "The full URL of this page is:" + window.location.href;
    
    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo1").innerHTML = "The full URL of this page is:" + window.location.href;<br>';
    msg += '</pre>';

    d.getElementById("divS1").innerHTML = msg;
};

fnS2 = () => {
    d.getElementById("demo2").innerHTML = "Page hostname is: " + window.location.hostname;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo2").innerHTML = "Page hostname is: " + window.location.hostname;<br>';
    msg += '</pre>';

    d.getElementById("divS2").innerHTML = msg;
};

fnS3 = () => {
    d.getElementById("demo3").innerHTML = "Page path is: " + window.location.pathname;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo3").innerHTML = "Page path is: " + window.location.pathname;<br>';
    msg += '</pre>';

    d.getElementById("divS3").innerHTML = msg;
};

fnS4 = () => {
    d.getElementById("demo4").innerHTML = "The page protocol is: " + window.location.protocol;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo4").innerHTML = "The page protocol is: " + window.location.protocol;<br>';
    msg += '</pre>';

    d.getElementById("divS4").innerHTML = msg;
};

fnS5 = () => {
    d.getElementById("demo5").innerHTML = "The URL port number of the current page is: " + window.location.port;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo5").innerHTML = "The URL port number of the current page is: " + window.location.port;<br>';
    msg += '</pre>';

    d.getElementById("divS5").innerHTML = msg;
};

fnS6 = () => {
    const url = "https://www.google.com";
    const newWindow = window.open(url, "_blank", "width=800,height=600");
    newWindow.location.assign("https://www.w3schools.com");

    msg = '';
    msg += '<pre>';
    msg += 'const url = "https://www.google.com";<br>';
    msg += 'const newWindow = window.open(url, "_blank", "width=800,height=600");<br>';
    msg += 'newWindow.location.assign("https://www.w3schools.com");<br>';
    msg += '</pre>';

    d.getElementById("divS6").innerHTML = msg;
};

fnS7 = () => {
    window.history.back();

    msg = '';
    msg += '<pre>';
    msg += 'window.history.back();<br>';
    msg += '</pre>';

    d.getElementById("divS7").innerHTML = msg;
};

fnS8 = () => {
    window.history.forward();

    msg = '';
    msg += '<pre>';
    msg += 'window.history.forward();<br>';
    msg += '</pre>';

    d.getElementById("divS8").innerHTML = msg;
};

fnS9 = () => {
    d.getElementById("demo9").innerHTML = "navigator.cookieEnabled is " + navigator.cookieEnabled;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo9").innerHTML = "navigator.cookieEnabled is " + navigator.cookieEnabled;<br>';
    msg += '</pre>';

    d.getElementById("divS9").innerHTML = msg;
};

fnS10 = () => {
    d.getElementById("demo10").innerHTML = "navigator.appName is " + navigator.appName;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo10").innerHTML = "navigator.appName is " + navigator.appName;<br>';
    msg += '</pre>';

    d.getElementById("divS10").innerHTML = msg;
};

fnS11 = () => {
    d.getElementById("demo11").innerHTML = "navigator.appCodeName is " + navigator.appCodeName;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo11").innerHTML = "navigator.appCodeName is " + navigator.appCodeName;<br>';
    msg += '</pre>';

    d.getElementById("divS11").innerHTML = msg;
};

fnS12 = () => {
    d.getElementById("demo12").innerHTML = "navigator.product is " + navigator.product;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo12").innerHTML = "navigator.product is " + navigator.product;<br>';
    msg += '</pre>';

    d.getElementById("divS12").innerHTML = msg;
};

fnS13 = () => {
    d.getElementById("demo13").innerHTML = navigator.appVersion;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo13").innerHTML = navigator.appVersion;<br>';
    msg += '</pre>';

    d.getElementById("divS13").innerHTML = msg;
};

fnS14 = () => {
    d.getElementById("demo14").innerHTML = navigator.userAgent;

    msg = '';
    msg += '<pre>';
    msg += 'd.getElementById("demo14").innerHTML = navigator.userAgent;<br>';
    msg += '</pre>';

    d.getElementById("divS14").innerHTML = msg;
};

fnS15 = () => {
    setTimeout(fnTimeOutAlert, 3000);

    msg = '';
    msg += '<pre>';
    msg += 'setTimeout(fnTimeOutAlert, 3000);<br>';
    msg += '</pre>';

    d.getElementById("divS15").innerHTML = msg;
};

fnTimeOutAlert = () => {
    alert("안녕하세요");
};

let myVar;

fnS16 = () => {
    myVar = setTimeout(fnTimeOutAlert, 3000);

    msg = '';
    msg += '<pre>';
    msg += 'myVar = setTimeout(fnTimeOutAlert, 3000);<br>';
    msg += '</pre>';

    d.getElementById("divS16").innerHTML = msg;
};

fnS16_2 = () => {
    clearTimeout(myVar);

    msg = '';
    msg += '<pre>';
    msg += 'clearTimeout(myVar);<br>';
    msg += '</pre>';

    d.getElementById("divS16").innerHTML = msg;
};

fnS17 = () => {
    setInterval(fnMyTimer1, 1000);

    msg = '';
    msg += '<pre>';
    msg += 'setInterval(fnMyTimer1, 1000);<br>';
    msg += '</pre>';

    d.getElementById("divS17").innerHTML = msg;
};

fnMyTimer1 = () => {
    const date = new Date();
    d.getElementById("demo17").innerHTML = date.toLocaleTimeString();
};

fnMyTimer2 = () => {
    const date = new Date();
    d.getElementById("demo18").innerHTML = date.toLocaleTimeString();
};
fnS18 = () => {
    myVar = setInterval(fnMyTimer2, 1000);

    msg = '';
    msg += '<pre>';
    msg += 'setInterval(fnMyTimer2, 1000);<br>';
    msg += '</pre>';

    d.getElementById("divS18").innerHTML = msg;
};

fnS18_2 = () => {
    clearInterval(myVar);

    msg = '';
    msg += '<pre>';
    msg += 'clearInterval(myVar);<br>';
    msg += '</pre>';

    d.getElementById("divS18").innerHTML = msg;
};

fnS19 = () => {
    checkCookie();

    msg = '';
    msg += '<pre>';
    msg += 'checkCookie();<br>';
    msg += '</pre>';

    d.getElementById("divS19").innerHTML = msg;
};

fnS19_2 = () => {
    setCookie("사용자이름","",-1);
    alert("초기화 되었습니다.");
    
    msg = '';
    msg += '<pre>';
    msg += 'setCookie("사용자이름","",-1);<br>';
    msg += '</pre>';

    d.getElementById("divS19").innerHTML = msg;
};

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("사용자이름");
    if (user != "") {
        alert("다시 오신 것을 환영합니다. " + user);
    } else {
        user = prompt("이름을 입력하세요.:","");
        if (user != "" && user != null) {
            setCookie("사용자이름", user, 30);
        }
    }
}