var html;

x = 5;
y = 6;
z = x + y;

html = '<pre>';
html += 'x = 5;<br>';
html += 'y = 6;<br>';
html += "z = x + y;<br>";
html += '"The value of z is: " + z';
html += '</pre>'
html += "The value of z is: " + z;

innerObjHTML('demo1', html);

var x2 = 5;
var y2 = 6;
var z2 = x2 + y2;

html = '<pre>';
html += 'var x2 = 5;<br>';
html += 'var y2 = 6;<br>';
html += "var z2 = x2 + y2;<br>";
html += '"The value of z is: " + z2';
html += '</pre>'
html += "The value of z is: " + z2;

innerObjHTML('demo2', html);

let x3 = 5;
let y3 = 6;
let z3 = x3 + y3;

html = '<pre>';
html += 'let x3 = 5;<br>';
html += 'let y3 = 6;<br>';
html += "let z3 = x3 + y3;<br>";
html += '"The value of z is: " + z3';
html += '</pre>'
html += "The value of z is: " + z3;

innerObjHTML('demo3', html);

const x4 = 5;
const y4 = 6;
const z4 = x4 + y4;

html = '<pre>';
html += 'const x4 = 5;<br>';
html += 'const y4 = 6;<br>';
html += "const z4 = x4 + y4;<br>";
html += '"The value of z is: " + z4';
html += '</pre>'
html += "The value of z is: " + z4;

innerObjHTML('demo4', html);

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

html = '<pre>';
html += 'const price1 = 5;<br>';
html += 'const price2 = 6;<br>';
html += "let total = price1 + price2;<br>";
html += 'The total is: " + total';
html += '</pre>'
html += "The total is: " + total;

innerObjHTML('demo5', html);
    
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

html = '<pre>';
html += 'const pi = 3.14;<br>';
html += 'let person = "John Doe";<br>';
html += "let answer = 'Yes I am!';<br>";
html += 'pi + "&nbsp;" + person + "&nbsp;" + answer = ';
html += '</pre>'
html += pi + "&nbsp;" + person + "&nbsp;" + answer;

innerObjHTML('demo6', html);

let carName = "Volvo";

html = '<pre>';
html += 'let carName = "Volvo";<br>';
html += 'carName = ';
html += '</pre>'
html += carName;

innerObjHTML('demo7', html);

let person8 = "John Doe", carName8 = "Volvo", price8 = 200;

html = '<pre>';
html += 'let person8 = "John Doe", carName8 = "Volvo", price8 = 200;<br>';
html += 'carName8 = ';
html += '</pre>'
html += carName8;

innerObjHTML('demo8', html);

let person9 = "John Doe",
carName9 = "Volvo",
price9 = 200;

html = '<pre>';
html += 'let person9 = "John Doe",<br>';
html += 'carName9 = "Volvo",<br>';
html += 'price9 = 200;<br>';
html += 'carName9 = ';
html += '</pre>'
html += carName9;

innerObjHTML('demo9', html);

let carName10;

html = '<pre>';
html += 'let carName10;<br>';
html += 'carName10 = ';
html += '</pre>'
html += carName10;

innerObjHTML('demo10', html);

var carName11 = "Volvo";
var carName11;

html = '<pre>';
html += 'var carName11 = "Volvo";<br>';
html += 'var carName11;<br>';
html += 'carName11 = ';
html += '</pre>'
html += carName11;

innerObjHTML('demo11', html);

let x12 = 5 + 2 + 3;

html = '<pre>';
html += 'let x12 = 5 + 2 + 3;<br>';
html += 'x12 = ';
html += '</pre>'
html += x12;

innerObjHTML('demo12', html);

let x13 = "John" + " " + "Doe";

html = '<pre>';
html += 'let x13 = "John" + " " + "Doe";<br>';
html += 'x13 = ';
html += '</pre>'
html += x13;

innerObjHTML('demo13', html);

let x14 = "5" + 2 + 3;

html = '<pre>';
html += 'let x14 = "5" + 2 + 3;<br>';
html += 'x14 = ';
html += '</pre>'
html += x14;

innerObjHTML('demo14', html);

let x15 = 2 + 3 + "5";

html = '<pre>';
html += 'let x15 = 2 + 3 + "5";<br>';
html += 'x15 = ';
html += '</pre>'
html += x15;

innerObjHTML('demo15', html);

let $$$ = 2;
let $myMoney = 5;

html = '<pre>';
html += 'let $$$ = 2;<br>';
html += 'let $myMoney = 5;<br>';
html += '$$$ + $myMoney = ';
html += '</pre>';
html += $$$ + $myMoney;

innerObjHTML('demo16', html);

let _x = 2;
let _100 = 5;

html = '<pre>';
html += 'let _x = 2;<br>';
html += 'let _100 = 5;<br>';
html += '_x + _100 = ';
html += '</pre>'
html += _x + _100;

innerObjHTML('demo17', html);

function innerObjHTML(obj, val)
{
    return document.getElementById(obj).innerHTML = val;
}