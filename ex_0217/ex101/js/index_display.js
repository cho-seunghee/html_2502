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
    d.getElementById("div1").style.display = "none";
}

function changeVisibility() {
    d.getElementById("div2").style.visibility = "hidden";
}

function resetElement() {
    d.getElementById("div1").style.display = "block";
    d.getElementById("div2").style.visibility = "visible";
}