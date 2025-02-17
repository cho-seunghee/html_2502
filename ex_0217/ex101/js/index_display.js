var d = document;

function fnShow()
{
    d.getElementById("panel1").style.display = "block";
}

function fnHidden()
{
    d.getElementById("panel1").style.display = 'none';
}

function removeElement() {
    document.getElementById("div1").style.display = "none";
}

function changeVisibility() {
    document.getElementById("div2").style.visibility = "hidden";
}

function resetElement() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.visibility = "visible";
}