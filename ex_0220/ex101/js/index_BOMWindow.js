var d = document;
var msg = '';

const wElement = document.getElementById('windowSize');

function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenWidth = screen.width;
    const screenHeight = screen.height;

    const screenaWidth = screen.availWidth;
    const screenaHeight = screen.availHeight;

    const docWidth = d.documentElement.clientWidth;
    const docHeight = d.documentElement.clientHeight;

    wElement.innerHTML = `<p>윈도우 (window.innerWidth * window.innerHeight):</p>`;
    wElement.innerHTML += `${width}x${height}<br><br>`;
    wElement.innerHTML += `<p>스크린 (screen.width * screen.height):</p>`;
    wElement.innerHTML += `${screenWidth}x${screenHeight}<br><br>`;
    
    wElement.innerHTML += `<p>스크린 사용 가능 (screen.availWidth * screen.availHeight):</p>`;
    wElement.innerHTML += `${screenaWidth}x${screenaHeight}<br><br>`;

    wElement.innerHTML += `<p>문서 (document.documentElement.clientWidth * document.documentElement.clientHeight):</p>`;
    wElement.innerHTML += `${docWidth}x${docHeight}<br><br>`;

    d.getElementById("demo5").innerHTML = "Available screen height is " + screen.availHeight;
    
}

window.addEventListener('resize', updateWindowSize);
updateWindowSize(); // 초기 실행


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