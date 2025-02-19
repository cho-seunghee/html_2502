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
        
      let myCookie = "name=skc";
      document.cookie = myCookie;
      console.log(document.cookie);
    } 
    else {
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
    obj.innerHTML = "Mouse Over";
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Out";
  }

  function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Mouse Down";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML = "Mouse Up";
  }