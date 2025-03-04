var d = document;
var msg = '';

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