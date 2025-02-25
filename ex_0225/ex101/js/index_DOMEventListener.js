//---- addEventListener() 메서드
document.getElementById("myBtn1").addEventListener("click", mydispayDate);

function mydispayDate()
{
    document.getElementById("demo1").innerHTML = Date();
}

//---- 요소에 이벤트 핸들러 추가1
document.getElementById("myBtn2").addEventListener("click", function() {
    alert("Hello World!");
});

//---- 요소에 이벤트 핸들러 추가2
document.getElementById("myBtn3").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

//---- 동일한 요소에 여러 이벤트 핸들러 추가1
var x = document.getElementById("myBtn4");
x.addEventListener("click", myFunction);
x.addEventListener("click", function() {
    someOtherFuntion4();
});


function myFunction4()
{
    alert("Hello World!");
}

function someOtherFuntion4() {
    alert("이 기능도 실행되었습니다.");
}

//---- 동일한 요소에 여러 이벤트 핸들러 추가2
var x = document.getElementById("myBtn5");
x.addEventListener("mouseover", myFuction5);
x.addEventListener("click", someOtherFuntion5);
x.addEventListener("mouseout", function() {
    myThirdFunction5();
});


function myFuction5()
{
    document.getElementById("demo5").innerHTML += "Moused over!<br>";
}

function someOtherFuntion5()
{
    document.getElementById("demo5").innerHTML += "Clicked!<br>";
}

function myThirdFunction5() {
    document.getElementById("demo5").innerHTML += "Moused out!<br>";
}

//---- 창 객체에 이벤트 핸들러 추가
window.addEventListener("resize", function () {
    this.document.getElementById("demo6").innerHTML = Math.random();
});

//---- 매개변수 전달
let p1 = 5;
let p2 = 7;

document.getElementById("myBtn7").addEventListener("click", function() {
    myFunction7(p1, p2);
});

function myFunction7(a, b) {
    document.getElementById("demo7").innerHTML = a * b;
}

//---- 이벤트 버블링 또는 이벤트 캡처링?
document.getElementById("myP1").addEventListener("click", function (e) {
    //e.stopImmediatePropagation();
    alert("white1 요소를 클릭했습니다!");
},false);

document.getElementById("myDiv1").addEventListener("click", function (e) {
    alert("orange1 요소를 클릭했습니다!");
}, false);

document.getElementById("myP2").addEventListener("click", function (e) {
    //e.stopImmediatePropagation();
    alert("white2 요소를 클릭했습니다!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function (e) {
    alert("orange2 요소를 클릭했습니다!");
}), true;


//---- removeEventListener() 메서드
document.getElementById("myDIV9").addEventListener("mousemove", myFuction9);

function myFuction9()
{
    document.getElementById("demo9").innerHTML = Math.random();
}

function removeHandler9() {
    document.getElementById("myDIV9").removeEventListener("mousemove", myFuction9);
}