d.write("===============page 66==================<br>");

var output;
const price1 = 3000;
const price2 = 6000;
const price3 = 3000;

let rrresult;

rrresult = price1 + price2 + price3;

// rrresult = rrresult > 10000 ? rrresult + "원 1만원 초과" : "돈 관리 잘 했어요!";
rrresult = rrresult > 10000
    ? `${rrresult}원 1만원 초과<br>`
    : "돈 관리 잘 했어요!<br>";

d.write("----Q1---------------------------------<br>");

output = '<p>' + rrresult + "</p>";
d.write(output, "<br>");

var sales = [1200, 1300, 1000];
var sales4 = prompt("4분기 입력 : ", 3500);
var avg;
var sum = 0;
var rrresult2;

for (var i = 0; i < sales.length; i++) {
    sum = sum + Number(sales[i]);
}

sum += Number(sales4);

d.write("----Q2---------------------------------<br>");

avg = sum / sales.length + 1;

output = '<p>';
output += '4분기 : ' + sales4 + '<br>';
output += '총합 : ' + sum + '<br>';
output += '평균 : ' + avg + '<br>';
output += "</p>";

d.write(output + '<br>');

d.write('rrresult2 = sales4 >= avg ? "4분기 판매량 : " + sales4 +" 판매량이 평균 이상입니다." : "판매량이 평균 미달입니다."<br>');

rrresult2 = sales4 >= avg ? "4분기 판매량 : " + sales4 +" 판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";

output = '<p>' + rrresult2 + "</p>";
d.write(output + '<br>');