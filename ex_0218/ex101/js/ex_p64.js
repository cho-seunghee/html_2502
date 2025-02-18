d.write("===============page 64==================<br>");

var output;
// var name = prompt("당신의 이름은?", '홍길동');
// var height = prompt("당신의 신장은?", '0');
// var weight = prompt("당신의 체중은?", '0');

var name = '';
var height = '';
var weight = '';
var normal_w = (height - 100) * 0.9;
var result = weight > normal_w - 5 && weight <= normal_w + 5;

result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";

d.write('var name = prompt("당신의 이름은?", \'\');<br>var height = prompt("당신의 신장은?", \'0\');<br>var weight = prompt("당신의 체중은?", \'0\');<br><br>var normal_w = (height - 100) * 0.9;<br>var result = weight > normal_w - 5 && weight <= normal_w + 5;<br>result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";<br>');

name = name + "님은 " + result;
d.write('name = name + "님은 " + result;');

output = '<p id="ptest2">' + name + "</p>";
d.write(output, "<br>");


function fn_Ok1(){
    name = document.getElementById('txtName').value;
    height = document.getElementById('txtName').value;
    weight = document.getElementById('txtName').value;

    normal_w = (height - 100) * 0.9;
    result = weight > normal_w - 5 && weight <= normal_w + 5;
    
    result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";
    result = name + "님은 " + result;

    document.getElementById('ptest2').innerText = result;

}
