var d = document;
var msg = '';

fnPage155 = () => {
    var cnt = 0;

    myFnc();

    function myFnc(){
        cnt++;
        msg += `hello ${cnt}<br>`;
    }

    myFnc();

    var theFnc = function() {
        cnt++;
        msg += `bye ${cnt}<br>`;
    }

    theFnc();

    d.getElementById('divS1').innerHTML = msg;

}

fnPage156 = () => {
    var color = ["white", "yellow", "aqua", "purple"];

    var i=0;

    function changeColor() {
        i++;
        if(i >= color.length)
        {
            i = 0;
        }

        var bodyTag = d.getElementById("theBody2");
        bodyTag.style.backgroundColor = color[i];
    }

    changeColor();
}

fnPage158 = () => {
    msg = "";
    function myFnc(name, area) {
        msg += `안녕하세요. ${name}입니다.<br>`;
        msg += `사는곳은 ${area}입니다.<br><br>`;
    }
    
    myFnc("홍당무", "서울");
    myFnc("깍두기", "부산");

    d.getElementById('divS3').innerHTML = msg;
}

fnPage159 = () => {
    msg = "";
	var rightId = "korea";
	var rightPw = "1234";
	function login(id, pw){
		if(id == rightId){
			if(pw == rightPw){
                msg += `${id}님 방문을 환영합니다<br>`;
			}else{
					alert("잘못된 비밀번호입니다.");
			}

		} else {
			alert("존재하지 않는 아이디입니다.");
		}
	}

	var userId = prompt("아이디를 입력하세요.", "korea");
	var userPw = prompt("패스워드를 입력하세요.", "1234");

	login(userId, userPw);

    d.getElementById('divS4').innerHTML = msg;
}

fnPage162 = () => {
    msg = "";
	function testAvg(arrData){
		var sum = 0;    
		for(var i = 0; i < arrData.length; i++) {
			sum += Number(prompt(arrData[i] + " 점수는?", "80"));
		}

		var avg = sum / arrData.length;
		return avg;
	}

	var arrSubject = ["국어", "수학"];
	var result = testAvg(arrSubject);

    msg += `평균 점수는 ${result}점 입니다<br>`;

    d.getElementById('divS5').innerHTML = msg;
}

var num = 1;
fnPage163 = (direct) => {
    msg = "";
	function gallery(direct) {
		if(direct) {
			if(num == 3) return;
			num++;
		} else {
			if(num == 1) return;
			num--;
		}

		var imgTag = document.getElementById("photo");
		imgTag.setAttribute("src","./images/math_img_" + num + ".jpg");
        console.log(imgTag);
	}

    gallery(direct);

    d.getElementById('divS6').innerHTML = msg;
}

fnPage165 = () => {
    msg = "";

    var num = 0;
	function testFnc(){
		num++;
        msg += `${num}<br>`;

		if(num == 10) return;
		
		testFnc();
	}
	
	testFnc();

    d.getElementById('divS7').innerHTML = msg;
}

fnPage169 = () => {
    msg = "";

    var num = 100;
	function menu() {
		num += 100;
        msg += `${num}<br>`;
	}
	menu();

	function menu() {
		msg += `${num}<br>`;
	}

    d.getElementById('divS8').innerHTML = msg;
}

fnPage170 = () => {
    msg = "";

    (function() {
		var num = 100;
		function menu() {
			num += 100;
			msg += `1: ${num}<br>`;
		}
		menu();
	}());

	(function(){
		var num = 100;
		function menu() {
			msg += `2: ${num}<br>`;
		}
	}());

    d.getElementById('divS9').innerHTML = msg;
}

fnPage171 = () => {
    msg = "";

    function CheckWeight(name, height, weight) {
        this.userName = name;
        this.userHeight = height;
        this.userWeight = weight;
        this.minWeight;
        this.maxWeight;
    
        this.getInfo = function() {
            var str = ""
                str += "이름: " + this.userName + ", ";
                str += "키: " + this.userHeight + ", ";
                str += "몸무게: " + this.userWeight + "<br>";
                return  str;
        }
        this.getResult = function( ) {
            this.minWeight = (this.userHeight - 100) * 0.9 - 5;
            this.maxWeight = (this.userHeight - 100) * 0.9 + 5;
    
            if(this.userWeight >= this.minWeight && 
            this.userWeight <= this.maxWeight) {
                return "정상 몸무게입니다";
            } else if(this.userWeight < this.minWeight) {
                return "정상 몸무게보다 미달입니다";
            } else {
                return "정상 몸무게보다 초과입니다";
            }
        }
    }
    
    var jang = new CheckWeight("장보리", 168, 62);
    var park = new CheckWeight("박달재", 180, 88);

    console.log(jang);
    console.log(park);
    
    msg += `jang.getInfo(): ${jang.getInfo()}<br>`;
    msg += `jang.getResult(): ${jang.getResult()}<br><br><br>`;

    msg += `park.getInfo(): ${park.getInfo()}<br>`;
    msg += `park.getResult(): ${park.getResult()}<br>`;

    d.getElementById('divS10').innerHTML = msg;
}

fnPage174 = () => {
    msg = "";

    function CheckWeight(name, height, weight) {
		this.userName = name;
		this.userHeight = height;
		this.userWeight = weight;
		this.minWeight;
		this.maxWeight;
	}
	CheckWeight.prototype.getInfo = function() {
		var str = ""
        str += "이름: " + this.userName + ", ";
        str += "키: " + this.userHeight + ", ";
        str += "몸무게: " + this.userWeight + "<br>";
		return  str;
	}
	CheckWeight.prototype.getResult = function( ) {
		this.minWeight = (this.userHeight - 100) * 0.9 - 5;
		this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

		if(this.userWeight >= this.minWeight && 
		this.userWeight <= this.maxWeight) {
			return "정상 몸무게입니다";
		} else if(this.userWeight < this.minWeight) {
			return "정상 몸무게보다 미달입니다";
		} else {
			return "정상 몸무게보다 초과입니다";
		}
	}    
	var jang = new CheckWeight("장보리", 168, 62);
	var park = new CheckWeight("박달재", 180, 88);
	console.log(jang);
	console.log(park);

    msg += `jang.getInfo(): ${jang.getInfo()}`;
    msg += `jang.getResult(): ${jang.getResult()}<br><br>`;
    msg += `park.getInfo(): ${park.getInfo()}`;
    msg += `park.getResult(): ${park.getResult()}<br><br>`;
    msg += `jang.getResult() === park.getResult(): ${jang.getResult() === park.getResult()}<br>`;

    d.getElementById('divS11').innerHTML = msg;
}

fnPage178 = () => {
    msg = "";

    function sumFnc_1(num1, num2) {
        return num1 + num2;
    }
    console.log(sumFnc_1(1, 2)); // 3

    const sumFnc_2 = (num1, num2) => num1 + num2;
    console.log(sumFnc_2(10, 20)); // 30

    const sumFnc_3 = (num1, num2) => {
        const result = `num1 + num2 = ${num1 + num2}`
        return result;
    }
    console.log(sumFnc_3(100, 200)); // num1 + num2 = 300

    const infoFnc_1 = function (info1, info2) {
        return {"name": info1, "age": info2} // { name : '홍길동', age : 22 }
    }
    console.log(infoFnc_1('홍길동', 22));

    const infoFnc_2 = (info1, info2) => ({"name": info1, "age": info2}); //{ name : '최군', age : 32 }
    console.log(infoFnc_2('최군', 32));

    d.getElementById('divS12').innerHTML = msg;
}

fnPage180 = () => {
    msg = "";

    const obj_1 = {
        name: "홍길동",
        infoFnc: function() {
            console.log("홍길동 this:", this);  //Object(obj_1)
            const innerFnc = () => {
              console.log("일반 함수 메서드에 함수: ", this);
            }
            innerFnc();
        }
      }
      obj_1.infoFnc();
  
      const obj_2 = {
        name: "홍대리",
        infoFnc: () => {
            console.log("홍대리 this:", this);   //window
            const innerFnc = () => {
              console.log("화살표 함수 메서드에 함수: ", this);
            }
            innerFnc(); 
        }
      }
      obj_2.infoFnc();
  
      const btn1 = document.querySelector(".s13 .btn-1");
      const btn2 = document.querySelector(".s13 .btn-2");
  
      btn1.addEventListener("click",  function () {
          console.log(this); // 클릭한 버튼 (<button class="btn-1">)
      });
  
      btn2.addEventListener("click",  () => {
          console.log(this); // window
      });
 
    d.getElementById('divS13').innerHTML = msg;
}

fnPage185 = () => {
    msg = "";

    import('./module_pattern_1_c.js').then((module) => {
        msg += `fncA(): ${module.fncA()}<br>`;
        msg += `fncB(): ${module.fncB()}<br>`;
        msg += `msg: ${module.msg}<br>`;

        d.getElementById('divS14').innerHTML = msg;
      });
}

fnPage185_2 = () => {
    msg = "";
    msg += `fncC(): ${module1.fncC()}<br>`;
    msg += `fncD(): ${module1.fncD()}<br>`;
        
    d.getElementById('divS15').innerHTML = msg;
    
}

fnPage185_3 = () => {
    msg = "";

    import('./module_pattern_3_c.js').then((module) => {
        msg += `default(): ${module.default()}<br>`;

        d.getElementById('divS16').innerHTML = msg;
      });
}

fnPage185_4 = () => {
    msg = "";

    import('./module_pattern_4_c.js').then((module) => {
        msg += `fncA(): ${module.fncA()}<br>`;
        msg += `fncB(): ${module.fncB()}<br>`;
        msg += `fncC(): ${module.fncC()}<br>`;
        msg += `fncD(): ${module.fncD()}<br>`;
        msg += `fncE(): ${module.fncE()}<br>`;

        d.getElementById('divS17').innerHTML = msg;
      });
}

fnPage187 = () => {
    msg = "";

	var arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
    var arrNum = Math.floor(Math.random() * arrColor.length);
    var bodyTag = document.getElementById("theBody18");
    bodyTag.style.backgroundColor = arrColor[arrNum];

    d.getElementById('divS18').innerHTML = msg;
}

fnPage188 = () => {
    msg = "";

	function TestScore(name, kor, eng){
		this.userName = name;
		this.korNum = kor;
		this.engNum = eng;
	}
	TestScore.prototype.getTestInfo = function() {
        msg += `이름: ${this.userName} <br>`;
        msg += `국어: ${this.korNum} <br>`;
        msg += `영어: ${this.engNum} <br>`;
	}
	TestScore.prototype.getAvg = function() {
		return  (this.korNum + this.engNum) / 2;
	}
	var kimgun = new TestScore("김군",80,90);
	var ohgun = new TestScore("오군",100,80);

	kimgun.getTestInfo();
    msg += `평균 점수: ${kimgun.getAvg()} <br><br>`;

	ohgun.getTestInfo();
    msg += `평균 점수: ${ohgun.getAvg()} <br>`;

    d.getElementById('divS19').innerHTML = msg;
}