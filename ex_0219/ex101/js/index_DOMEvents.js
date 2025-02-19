function changeText(id) {
    id.innerHTML = "Ooops!";
}

function displayDate1() {
    document.getElementById("demo3").innerHTML = Date();
}

document.getElementById("myBtn").onclick = displayDate2;

function displayDate2() {
    document.getElementById("demo4").innerHTML = Date();
}

function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
      text = "Cookies are not enabled.";
    }
    document.getElementById("demo5").innerHTML = text;
  }
  
  function upperCase1() {
    const x = document.getElementById("fname1");
    x.value = x.value.toUpperCase();
  }

  function upperCase2() {
    const x = document.getElementById("fname2");
    x.value = x.value.toUpperCase();
  }

  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

  function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }