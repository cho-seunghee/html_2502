var d = document;
var msg = '';

const button = document.querySelector('button');
button.addEventListener('click', function(event) {
    event.preventDefault(); // submit 기본 동작 방지
    // 원하는 작업 수행
});

fnS1 = () => {
    const x = d.getElementById("fname1");
    x.value = x.value.toUpperCase();
}

fnS2 = () => {
    const x = d.getElementById("fname2");
    x.value = x.value.toUpperCase();
}

fnS3 = () => {
    prefer = d.forms[0].browsers3.value;
    alert(`인터넷 탐색을 선호합니다. ${prefer}`);
}

fnS4 = (x) => {
    x.style.background = "yellow";
}

fnS4_2 = (x) => {
    x.style.background = "white";
}

fnS5 = () => {
    d.getElementById("demo5").innerHTML = "텍스트를 선택했습니다.";
}

fnS6 = () => {
    var fname = d.forms[1].fname6.value;
    alert(`안녕 ${fname} 이제 site 로 리다이렉트한다.`);
}

fnS7 = () => {
    alert("이 상자는 onreset 이벤트 핸들러에 의해 트리거되었습니다.");
}

fnS8 = () => {
    alert("입력 필드 안에서 키를 눌렀습니다.");
}

fnS9 = () => {
    alert("입력 필드 안에서 키를 눌렀습니다.");
}

fnS10 = () => {
    const x = d.getElementById("fname10");
    x.value = x.value.toUpperCase();
}

fnS11 = () => {
    d.forms[3].mySecondInput11.value = d.forms[3].myInput11.value;
}

fnS12 = (color) => {
    d.forms[4].myInput12.style.background = color;
}

fnS13 = (obj, color) => {
    obj.style.color = color;
}

fnS14 = (obj, color) => {
    obj.style.color = color;
}

fnS15 = (e) => {
    let targ, tname;
    if (!e)
    {
        e = window.event;
    }

    if(e.target)
    {
        targ = e.target;
    }
    else if(e.srcElement)
    {
        targ =e.srcElement;
    }

    tname = targ.tagName;

    alert(`${tname} 요소를 클릭했습니다.`);
}

fnS16 = (event) => {
    alert(`버튼을 누르셨습니다. ${event.button}`);
}

fnS17 = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const coor = `좌표: (${x} , ${y})`;
    d.getElementById("demo17").innerHTML = coor;
}

fnS17_2 = () => {
    d.getElementById("demo17").innerHTML = "";
}

fnS18 = (x) => {
    x.style.height = "64px";
    x.style.width = "64px";
}

fnS18_2 = (x) => {
    x.style.height = "32px";
    x.style.width = "32px";
}

fnS19 = (txt) => {
    d.getElementById("desc19").innerHTML = txt;
}

fnS20 = () => {
    d.getElementById("demo20").innerHTML = Date();
}

fnS21 = () => {
    d.getElementById("demo21").innerHTML = "안녕!!";
}

fnS22 = () => {
    d.getElementById("demo22").innerHTML = "안녕!!";
}

fnS23 = () => {
    alert('이 페이지가 로드되었습니다.');
}

fnS24 = () => {
    alert('이미지가 로드되었습니다.');
}

fnS25 = () => {
    alert('이미지를 로드할 수 없습니다.');
}

fnS26 = () => {
    alert('방문해 주셔서 감사합니다.');
}

fnS26_2 = () => {
    location.reload();
}

fnS27 = () => {
    let w = window.outerHeight;
    let h = window.outerWidth;
    let txt = `Window size: width=${w}, height=${h}`;
    d.getElementById("demo27").innerHTML = txt;
}

fnS28 = (event) => {
    d.getElementById("demo28").innerHTML = event.keyCode;
}

fnS29 = (event) => {
    d.getElementById("demo29").innerHTML = `X= ${event.clientX}<br>Y= ${event.clientY}`;
}

fnS30 = (event) => {
    d.getElementById("demo30").innerHTML = `X= ${event.screenX}<br>Y= ${event.screenY}`;
}

fnS31 = (event) => {
    var text = "Shitf 키를 누르지 않았습니다!";

    if (event.shiftKey == 1)
    {
        text = "Shitf 키를 눌렀습니다!";
    }

    d.getElementById("demo31").innerHTML = text;
    d.getElementById("demo32").innerHTML = event.type;
}

window.addEventListener("load", function(){
    fnS23();
});

window.addEventListener("unload", function(){
    fnS26();
});

window.addEventListener("resize", function(){
    fnS27();
});

window.addEventListener("keyup", function(event){
    fnS28(event);
})

window.addEventListener("mousedown", function(event)
{
    fnS31(event);
})