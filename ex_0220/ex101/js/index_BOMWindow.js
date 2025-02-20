var d = document;
var msg = '';


fn_s1 = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    msg = '<br>';
    msg += 'window.innerWidth<br>';
    msg += 'window.innerHeight<br>';

    d.getElementById("demo1").innerHTML = `Browser inner window width: ${width}px<br> Browser inner window height: ${height}px`;
    d.getElementById("divS1").innerHTML = msg;

};

fn_s2 = () => {
    msg = '<br>';
    msg += 'screen.width<br>';

    d.getElementById("demo2").innerHTML = "Screen width is " + screen.width;
    d.getElementById("divS2").innerHTML = msg;

};

fn_s3 = () => {
    msg = '<br>';
    msg += 'screen.height<br>';

    d.getElementById("demo3").innerHTML = "Screen height is " + screen.height;
    d.getElementById("divS3").innerHTML = msg;

};

fn_s4 = () => {
    msg = '<br>';
    msg += 'screen.availWidth<br>';

    d.getElementById("demo4").innerHTML = "Available screen width is " + screen.availWidth;
    d.getElementById("divS4").innerHTML = msg;

};

fn_s5 = () => {
    msg = '<br>';
    msg += 'screen.availHeight<br>';

    d.getElementById("demo5").innerHTML = "Available screen height is " + screen.availHeight;
    d.getElementById("divS5").innerHTML = msg;

};

fn_s6 = () => {
    msg = '<br>';
    msg += 'screen.colorDepth<br>';

    d.getElementById("demo6").innerHTML = "Screen color depth is " + screen.colorDepth;
    d.getElementById("divS6").innerHTML = msg;
};

fn_s7 = () => {
    msg = '<br>';
    msg += 'screen.pixelDepth<br>';

    d.getElementById("demo7").innerHTML = "Screen pixcel depth is " + screen.pixelDepth;
    d.getElementById("divS7").innerHTML = msg;

};