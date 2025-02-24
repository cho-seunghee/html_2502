
var d = document;
var msg = '';

function fnBr() {
    return d.createElement("br");
}

const page110 = () => {
    var arr = [30, "따르릉", true];

    msg = '';
    
    msg += "<pre>";
    msg += "var arr = [30, '따르릉', true];<br>";
    msg += "<br>";
    msg += "for(var i=0 ; i < arr.length ; i++)<br>";
    msg += "{<br>";
    msg += "	msg += arr[i] + '<br>';<br>";
    msg += "}<br>";
    msg += "<br>";
    msg += "for(i in arr)<br>";
    msg += "{<br>";
    msg += "	msg += arr[i] + '<br>';<br>";
    msg += "}<br>";
    msg += "</pre>";


    msg += '<h3>배열값 가져오기-1</h3>';
    msg += arr[0] + '<br>';
    msg += arr[1] + '<br>';
    msg += arr[2] + '<br>';

    msg += '<h3>배열값 가져오기-2</h3>';
    for(var i=0;i<arr.length;i++)
    {
        msg += arr[i] + '<br>';
    }

    msg += '<h3>배열값 가져오기-3</h3>';
    for(i in arr)
    {
        msg += arr[i] + '<br>';
    }
  
    d.getElementById("divS6").innerHTML = msg;

};

page112 = () => {
    const arr_1 = ["사당", "교대", "방배", "강남"];
    const arr_2 = ["신사", "압구정", "옥수"];

    msg = '';
    let result = arr_1.join('-');
    console.log(result);

    msg += '<pre>const arr_1 = ["사당", "교대", "방배", "강남"];<br>';
    msg += 'const arr_2 = ["신사", "압구정", "옥수"];</pre>';

    msg += '<pre>let result = arr_1.join("-"); : join(연결문자) 객체 data를 연결 문자 기준으로 1개 문자형 반환</pre>';
    msg += `${result}<br><br>`;

    result = arr_1.concat(arr_2);
    console.log(result);

    msg += '<pre>result = arr_1.concat(arr_2); : concat(객체) 배열 객체 2개를 하나로 결합</pre>';
    msg += `${result}<br><br>`;

    result = arr_2.slice(1, 3);
    console.log(result);

    msg += '<pre>result = arr_2.slice(1, 3); : slice(시작인덱스, 슬라이스_index번호) 배열 객체의 지정 data를 삭제 후 구간에 새 data 삽입</pre>';
    msg += `${result}<br><br>`;

    arr_1.sort();
    console.log(arr_1);

    msg += '<pre>arr_1.sort(); : sort() 오름차순 정렬</pre>';
    msg += `${arr_1}<br><br>`;

    arr_1.reverse();
    console.log(arr_1);

    msg += '<pre>arr_1.reverse(); : reverse() 내림차순 정렬</pre>';
    msg += `${arr_1}<br><br>`;

    d.getElementById("divS7").innerHTML = msg;

};

page113 = () => {
    msg = '';

    const greenArr = ['교대', '방배', '강남'];
    const yellowArr = ['미금', '정자', '수서'];

    msg += "<pre>const greenArr = ['교대', '방배', '강남'];<br>";
    msg += "const yellowArr = ['미금', '정자', '수서'];</pre>";

    greenArr.splice(2, 1, '서초', '역삼');

    msg += "<pre>greenArr.splice(2, 1, '서초', '역삼'); : splice(변경시작위치, 제거개수, 변경배열) 배열 객체의 지정 data를 삭제 후 구간에 새 data 삽입</pre>";
    msg += `${greenArr}<br><br>`;

    console.log(greenArr);

    const data1 = yellowArr.pop();
    const data2 = yellowArr.shift();

    msg += "<pre>const data1 = yellowArr.pop(); : pop() 배열 data 중 마지막 index data 삭제</pre>";
    msg += `${data1}<br><br>`;
    msg += "<pre>const data2 = yellowArr.shift(); : shift() 배열 data 중 첫 번째 index data 삭제</pre>";
    msg += `${data2}<br><br>`;

    console.log(data1);
    console.log(data2);

    yellowArr.push(data2);
    console.log(yellowArr);

    msg += "<pre>yellowArr.push(data2); : push(new data) 배열 data의 마지막 index에 새 data 삽입</pre>";
    msg += `${yellowArr}<br><br>`;

    yellowArr.unshift(data1);
    console.log(yellowArr);

    msg += "<pre>yellowArr.unshift(data1); : unshift(new data) 배열 data의 가장 앞 인덱스에 새 data 삽입 </pre>";
    msg += `${yellowArr}<br><br>`;

    msg += "<pre>뒤에서 넣고 빼기: push pop <br>앞에서 넣고 빼고: unshift shift</pre>";
    msg += `${yellowArr}<br><br>`;

    d.getElementById("divS8").innerHTML = msg;

};

page116 = () => {
    var t = "Hello Thank you good luck to you";
    msg = '';

    msg += '<pre>const t = "Hello Thank you good luck to you"</pre>';

    msg += `<pre>t.charAt(16)</pre>`;
    msg += `${t.charAt(16)}<br><br>`;

    msg += `<pre>t.indexOf("you") : indexOf(찾을문자) 왼쪽부터 일치문자의 index 반환, 없으면 -1 반환</pre>`;
    msg += `${t.indexOf("you")}<br><br>`;

    msg += `<pre>t.indexOf("you", 16) : indexOf(찾을문자, 시작위치) 왼쪽부터 일치문자의 index 반환, 없으면 -1 반환</pre>`;
    msg += `${t.indexOf("you", 16)}<br><br>`;

    msg += `<pre>t.lastIndexOf("you") : lastIndexOf(찾을문자) 오른쪽부터 일치문자의 index 반환, 없으면 -1 반환</pre>`;
    msg += `${t.lastIndexOf("you")}<br><br>`;

    msg += `<pre>t.lastIndexOf("you", 25) : lastIndexOf(찾을문자, 시작위치) 오른쪽부터 일치문자의 index 반환, 없으면 -1 반환</pre>`;
    msg += `${t.lastIndexOf("you", 25)}<br><br>`;

    msg += `<pre>t.match("luck") : math(찾을문자) 왼쪽부터 찾은 문자 반환, 없으면 null 반환</pre>`;
    msg += `${t.match("luck")}<br><br>`;

    msg += `<pre>t.search("you") : search(찾을문자) 왼쪽부터 찾은 문자의 index 반환</pre>`;
    msg += `${t.search("you")}<br><br>`;

    msg += `<pre>t.substr(21,4): substr(index, 문자 개수) index부터 문자 개수만큼 문자열 반환</pre>`;
    msg += `${t.substr(21,4)}<br><br>`;

    msg += `<pre>t.substring(21,4) : substring(시작index, 끝index) 시작 <= 문자반환 <끝 문자 반환</pre>`;
    msg += `${t.substring(6,12)}<br><br>`;

    msg += `<pre>t.replace("you","me") : replace(바꿀문자, 새문자) 새문자로 변경</pre>`;
    msg += `${t.replace("you","me")}<br><br>`;

    msg += `<pre>t.toLocaleLowerCase() : 소문자로</pre>`;
    msg += `${t.toLocaleLowerCase()}<br><br>`;

    msg += `<pre>t.toUpperCase() : 대문자로</pre>`;
    msg += `${t.toUpperCase()}<br><br>`;

    msg += `<pre>t.length : 문자열 개수 반환</pre>`;
    msg += `${t.length}<br><br>`;

    var s = t.split(" ");

    msg += `<pre>var s = t.split(" "); : split(분할할 문자) 배열문자열 반환</pre>`;

    msg += `<pre>s[0]</pre>`;
    msg += `${s[0]}<br><br>`;

    msg += `<pre>s[4]</pre>`;
    msg += `${s[4]}<br><br>`;

    var str = 'A';
    var t = str.charAt(0);

    msg += `<pre>var str = "A";</pre>`;
    msg += `<pre>var t = str.charAt(0); : charAt(index 값) index 번호의 해당 문자 반환</pre>`;

    msg += `<pre>t</pre>`;
    msg += `${t}<br><br>`;

    msg += `<pre>String.fromCharCode(65) : fromCharCode(아스키 코드값) 문자 반환</pre>`;
    msg += `${String.fromCharCode(65)}<br><br>`;


    d.getElementById("divS9").innerHTML = msg;

};

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
            myMap.get(contry[i]).push(prompt(`${contry[i]}에 ${subjects[k]} 점수는?`));
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
    msg += '		myMap.get(contry[i]).push(prompt(`${contry[i]}에 ${subjects[k]} 점수는?`));<br>';
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
        return prompt(`영어 ${item}의 점수는?`, "0");
    })

    let result = arr1.some((item) => (item < 60)); //(OR와 비슷)배열값 하나라도 조건의 만족시 true, 나머진 false 반환

    result = result ? "불합격" : "합격";

    msg += "<pre>";
    msg += 'const subjects = ["쓰기", "듣기", "말하기"];<br>';
    msg += 'const arr1 = subjects.map(item => {<br>';
    msg += '    return prompt(`영어 ${item}의 점수는?`, "0");<br>';
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
        return prompt(`${item}의 점수는?`, "0");
    });

    let result = arr1.every((item) => (item >= 60)); //(OR와 비슷)배열값 전체가 조건만족시 true 나머지 false 반환

    result = result ? "합격" : "불합격";

    msg += "<pre>";
    msg += 'const subjects = ["쓰기", "듣기", "말하기"];<br>';
    msg += 'const arr1 = subjects.map(item => {<br>';
    msg += '	return prompt(`${item}의 점수는?`, "0");<br>';
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
        arr1.push(prompt(`${item}의 점수는?`, "0"));
    }

    let result = arr1.every((item) => (item >= 60));

    result = result ? "합격" : "불합격";

    msg += "<pre>";
    msg += 'for(let item of subjects) //반복 가능한(iterable) 객체의 값을 순회<br>';
    msg += '{<br>';
    msg += '	arr1.push(prompt(`${item}의 점수는?`, "0"));<br>';
    msg += '}<br>';
    msg += '<br>';
    msg += 'let result = arr1.every((item) => (item >= 60));<br>';
    msg += '<br>';
    msg += 'result = result ? "합격" : "불합격";<br>';
    msg += "</pre>";

    msg += result;

    d.getElementById("divS17").innerHTML = msg;
};