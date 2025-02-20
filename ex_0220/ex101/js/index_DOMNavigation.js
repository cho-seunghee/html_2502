var d = document;
var msg = '';




fn_S1 = () => {
    d.getElementById("id02").innerHTML = d.getElementById("id01").innerHTML;
};


fn_S2 = () => {
    d.getElementById("id022").innerHTML = d.getElementById("id021").firstChild.nodeValue;
};

fn_S3 = () => {
    d.getElementById("id032").innerHTML = d.getElementById("id031").childNodes[0].nodeValue;
};

fn_S4 = () => {
    d.getElementById("demo4").innerHTML = d.getElementById("s1").innerHTML;
    //d.getElementById("demo4").innerHTML = document.body.innerHTML;
};

fn_S5 = () => {
    d.getElementById("demo5").innerHTML = d.getElementById("s2").innerHTML;
    //d.getElementById("demo5").innerHTML = d.documentElement.innerHTML;
};

fn_S6 = () => {
    d.getElementById("id062").innerHTML = d.getElementById("id061").nodeName;
};


fn_S7 = () => {
    d.getElementById("id072").innerHTML = d.getElementById("id071").nodeType;
};


fn_S8 = () => {
    const para = d.createElement("p");
    para.classList.add("red");

    const node = d.createTextNode("새입력");

    para.appendChild(node);

    const element = d.getElementById("div81");

    element.appendChild(para);
};

fn_S9 = () => {
    const para = d.createElement("p");
    para.classList.add("red");

    const node = d.createTextNode("새입력");

    para.appendChild(node);

    const element = d.getElementById("div91");
    const child = d.getElementById("p91");
    element.insertBefore(para,child);
};

fn_S10 = () => {
    d.getElementById("p101").remove();
};

fn_S11 = () => {
    const parent = d.getElementById("div111");
    const child = d.getElementById("p111");

    parent.removeChild(child);
};

fn_S12 = () => {
    const parent = d.getElementById("div121");
    const child = d.getElementById("p121");
    const para = d.createElement("p");
    const node = d.createTextNode("새입력");

    para.classList.add("red");

    para.appendChild(node);
    parent.replaceChild(para, child);

};

fn_S13 = () => {
    const myCollection = d.getElementById("s13").getElementsByTagName("p");

    d.getElementById("demo13").innerHTML = "두 번째 단락의 innerHTML은: " + myCollection[1].innerHTML;
};

fn_S14 = () => {
    const myCollection = d.getElementById("s14").getElementsByTagName("p");

    d.getElementById("demo14").innerHTML = "이 문서에는 다음이 포함되어 있습니다. " + myCollection.length + " 단락.";
};

fn_S15 = () => {
    const myCollection = d.getElementById("s15").getElementsByTagName("p");

    for(let i=0; i<myCollection.length;i++)
    {
        myCollection[i].style.color = "red";
    }

};

fn_S16 = () => {
    myNodeList = d.getElementById("s16").querySelectorAll("p");

    d.getElementById("demo16").innerHTML = "두 번째 단락의 innerHTML은: " + myNodeList[1].innerHTML;

};

fn_S17 = () => {
    myNodeList = d.getElementById("s17").querySelectorAll("p");

    d.getElementById("demo17").innerHTML = "이 문서에는 다음이 포함되어 있음, 길이 :  " + myNodeList.length + " 단락.";

};

fn_S18 = () => {
    myNodeList = d.getElementById("s18").querySelectorAll("p");

    for (let i=0;i<myNodeList.length;i++)
    {
        myNodeList[i].style.color = "red";
    }

};