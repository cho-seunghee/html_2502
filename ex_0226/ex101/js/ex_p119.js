var d = document;
var msg = '';

function fnBr() {
    return d.createElement("br");
}

page119 = () => {
    msg = '';

    var userName = prompt("당신의 영문 이름은?", "홍길동");
    var upperName = userName.toUpperCase();
    var userNum = prompt("당신의 연락처는?", "010-1234-5678");
    var result = userNum.substring(0, userNum.length - 4) + "****";

    msg += "<pre>";
    msg += 'var userName = prompt("당신의 영문 이름은?", "홍길동");<br>';
    msg += 'var upperName = userName.toUpperCase();<br>';
    msg += 'var userNum = prompt("당신의 연락처는?", "010-1234-5678");<br>';
    msg += 'var result = userNum.substring(0, userNum.length - 4) + "****";<br>';
    msg += "</pre>";


    msg += `${upperName}<br>`;
    msg += `${result}<br>`;

    d.getElementById("divS10").innerHTML = msg;

};

page120 = () => {
    msg = '';

    var userEmail = prompt("당신의 이메일 주소는?", "aa@naver.com");
    var arrUrl = [".co.kr",".com",".net",".or.kr",".go.kr"];

    var check1 = false;
    var check2 = false;

    if(userEmail.indexOf("@") > 0)
    {
        check1 = true;
    }

    for(var i=0;i<arrUrl.length;i++)
    {
        if(userEmail.indexOf(arrUrl[i]) > 0)
        {
            check2 = true;
        }
    }

    if(check1 && check2)
    {
        msg += userEmail;
    }
    else{
        alert("이메일 형식이 잘못되었습니다.");
    }

    msg += "<pre>";
    msg += 'var userEmail = prompt("당신의 이메일 주소는?", "aa@naver.com");<br>';
    msg += 'var arrUrl = [".co.kr",".com",".net",".or.kr",".go.kr"];<br>';
    msg += '<br>';
    msg += 'var check1 = false;<br>';
    msg += 'var check2 = false;<br>';
    msg += '<br>';
    msg += 'if(userEmail.indexOf("@") > 0)<br>';
    msg += '{<br>';
    msg += '	check1 = true;<br>';
    msg += '}<br>';
    msg += '<br>';
    msg += 'for(var i=0 ; i < arrUrl.length ; i++)<br>';
    msg += '{<br>';
    msg += '	if(userEmail.indexOf(arrUrl[i]) > 0)<br>';
    msg += '	{<br>';
    msg += '		check2 = true;<br>';
    msg += '	}<br>';
    msg += '}<br>';
    msg += '<br>';
    msg += 'if(check1 && check2)<br>';
    msg += '{<br>';
    msg += '	msg += userEmail;<br>';
    msg += '}<br>';
    msg += 'else{<br>';
    msg += '	alert("이메일 형식이 잘못되었습니다.");<br>';
    msg += '}<br>';
    msg += "</pre>";

    d.getElementById("divS11").innerHTML = msg;
    
}

page123 = () => {
    msg = '';

    const contry = ["영어", "중국어"];
    const subjects = ["쓰기", "말하기"];
    const myMap = new Map();

    for(let i=0;i<contry.length;i++)
    {
        myMap.set(contry[i], []);

        for(let k=0;k<subjects.length;k++)
        {
            myMap.get(contry[i]).push(prompt(`${contry[i]}에 ${subjects[k]} 점수는?`, 10));
        }
    }

    console.log(myMap.get("영어"));
    console.log(myMap.get("중국어"));

    msg += "<pre>";
    msg += 'const contry = ["영어", "중국어"];<br>';
    msg += 'const subjects = ["쓰기", "말하기"];<br>';
    msg += 'const myMap = new Map();<br>';
    msg += '<br>';
    msg += 'for(let i=0 ; i < contry.length ; i++ );<br>';
    msg += '{;<br>';
    msg += '	myMap.set(contry[i], []);<br>';
    msg += ';<br>';
    msg += '	for(let k=0;k < subjects.length ; k++ );<br>';
    msg += '	{;<br>';
    msg += '		myMap.get(contry[i]).push(prompt(`${contry[i]}에 ${subjects[k]} 점수는?`, 10));<br>';
    msg += '	};<br>';
    msg += '};<br>';
    msg += "</pre>";

    msg += myMap.get("영어");
    msg += myMap.get("중국어");

    d.getElementById("divS12").innerHTML = msg;

}

page126 = () => {
    msg = '';

    msg += "<pre>";
    msg += 'const users = {<br>';
    msg += '    "userA": [50, 60, 100],<br>';
    msg += '    "userB": [80, 90, 70],<br>';
    msg += '    "userC": [70, 80, 95]<br>';
    msg += '};<br>';
    msg += '<br>';
    msg += 'const {userA, userB, userC} = users; //a, b, c에 분해 할당<br>';
    msg += 'const arr = [...userA, ...userB];  //a와 b를 나열해서 arr에 담는다. [50, 60, 100, 80, 90, 70]<br>';
    msg += "</pre>";
    const users = {
        "userA": [50, 60, 100],
        "userB": [80, 90, 70],
        "userC": [70, 80, 95]
    };

    const {userA, userB, userC} = users;
    const arr = [...userA, ...userB];  //[50, 60, 100, 80, 90, 70]

    let sum = 0;

    for(let i=0;i<arr.length;i++)
    {
        sum += arr[i];
    }

    msg += `userA와 userB의 점수 합계는 ${sum}점`;

    d.getElementById("divS13").innerHTML = msg;

};

page127 = () => {
    msg = '';

    const arr1 = [10, 20, 30];
    const arr2 = arr1.map((item) => (item / 10)) //array.map(매개변수, ..) => (가공된 반환 데이터));

    console.log(arr2);

    const arr3 = ["홍길동", "김갑중", "박상무"];
    const arr4 = arr3.map((item, idx) => { //arrap.map((매개변수1, ..) => { return 가공된 반환 데이터})
        let obj = {};
        obj["no"] = idx + 1;
        obj["userName"] = item;
        return obj;
    });

    console.log(arr4);

    msg += "<pre>";
    msg += 'const arr1 = [10, 20, 30];<br>';
    msg += 'const arr2 = arr1.map((item) => (item / 10)); //array.map(매개변수, ..) => (가공된 반환 데이터));<br>';
    msg += '<br>';
    msg += 'const arr3 = ["홍길동", "김갑중", "박상무"];<br>';
    msg += 'const arr4 = arr3.map((item, idx) => { //arrap.map((매개변수1, ..) => { return 가공된 반환 데이터})<br>';
    msg += '	let obj = {};<br>';
    msg += '	obj["no"] = idx + 1<br>';;
    msg += '	obj["userName"] = item;<br>';
    msg += '	return obj;<br>';
    msg += '});<br>';
    msg += "</pre>";

    var arr5 = [...arr4];

    msg += `arr2: ${arr2}<br>`;
    msg += `arr4: ${arr4}<br>`;
    msg += `arr5: ${arr5}<br>`;
    
    console.log(arr5);

    d.getElementById("divS14").innerHTML = msg;
};

page129 = () => {
    msg = '';

    const subjects = ["쓰기", "듣기", "말하기"];
    const arr1 = subjects.map(item => {
        return prompt(`영어 ${item}의 점수는?`, "10");
    })

    let result = arr1.some((item) => (item < 60)); //(OR와 비슷)배열값 하나라도 조건의 만족시 true, 나머진 false 반환

    result = result ? "불합격" : "합격";

    msg += "<pre>";
    msg += 'const subjects = ["쓰기", "듣기", "말하기"];<br>';
    msg += 'const arr1 = subjects.map(item => {<br>';
    msg += '    return prompt(`영어 ${item}의 점수는?`, "10");<br>';
    msg += '})<br>';
    msg += '<br>';
    msg += 'let result = arr1.some((item) => (item < 60)); //조건의 true, flase 반환<br>';
    msg += '<br>';
    msg += 'result = result ? "불합격" : "합격";<br>';
    msg += "</pre>";

    msg += result;

    d.getElementById("divS15").innerHTML = msg;

};

page130 = () => {
    msg = '';

    const subjects = ["쓰기", "듣기", "말하기"];
    const arr1 = subjects.map(item => {
        return prompt(`${item}의 점수는?`, "10");
    });

    let result = arr1.every((item) => (item >= 60)); //(OR와 비슷)배열값 전체가 조건만족시 true 나머지 false 반환

    result = result ? "합격" : "불합격";

    msg += "<pre>";
    msg += 'const subjects = ["쓰기", "듣기", "말하기"];<br>';
    msg += 'const arr1 = subjects.map(item => {<br>';
    msg += '	return prompt(`${item}의 점수는?`, "10");<br>';
    msg += '});<br>';
    msg += '<br>';
    msg += 'let result = arr1.every((item) => (item >= 60)); //배열값 전체가 조건만족시 true 나머지 false 반환<br>';
    msg += '<br>';
    msg += 'result = result ? "합격" : "불합격";<br>';
    msg += "</pre>";

    msg += result;

    d.getElementById("divS16").innerHTML = msg;

};

page132 = () => {
    msg = '';

    const fruit_1 = ["딸기", "바나나", "파인애플"];
    const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
    let fruit_3 = [];

    fruit_3 = [...fruit_1];

    fruit_2.map((item) => {
        if(!fruit_3.includes(item)) //포함하지 않으면
        {
            fruit_3.push(item);
        }
    });

    msg += "<pre>";
    msg += 'const fruit_1 = ["딸기", "바나나", "파인애플"];<br>';
    msg += 'const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];<br>';
    msg += 'let fruit_3 = [];<br>';
    msg += '<br>';
    msg += 'fruit_3 = [...fruit_1];<br>';
    msg += '<br>';
    msg += 'fruit_2.map((item) => {<br>';
    msg += '	if(!fruit_3.includes(item)) //포함하지 않으면<br>';
    msg += '	{<br>';
    msg += '		fruit_3.push(item);<br>';
    msg += '	}<br>';
    msg += '});<br>';
    msg += "</pre>";

    msg += fruit_3;

    d.getElementById("divS17").innerHTML = msg;

};

page133 = () => {
    msg = "";

    const subjects = ["쓰기", "듣기", "말하기"];
    const arr1 = [];

    for(let item of subjects) //반복 가능한(iterable) 객체의 값을 순회
    {
        arr1.push(prompt(`${item}의 점수는?`, "10"));
    }

    let result = arr1.every((item) => (item >= 60));

    result = result ? "합격" : "불합격";

    msg += "<pre>";
    msg += 'for(let item of subjects) //반복 가능한(iterable) 객체의 값을 순회<br>';
    msg += '{<br>';
    msg += '	arr1.push(prompt(`${item}의 점수는?`, "10"));<br>';
    msg += '}<br>';
    msg += '<br>';
    msg += 'let result = arr1.every((item) => (item >= 60));<br>';
    msg += '<br>';
    msg += 'result = result ? "합격" : "불합격";<br>';
    msg += "</pre>";

    msg += result;

    d.getElementById("divS18").innerHTML = msg;
};