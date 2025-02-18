d.write("===============page 54==================<br>");

var num1 = 10;
var num2 = 3;
var output;

d.write("var num1 = 10;<br>var num2 = 3; <br>");

num1 += num2;

output = '<p>' + num1 + "</p>";
d.write("num1 += num2 : " + output, "<br>");

num1 -= num2;

output = '<p>' + num1 + "</p>";
d.write("num1 -= num2 : " + output, "<br>");

num1 *= num2;

output = '<p>' + num1 + "</p>";
d.write("num1 *= num2 : " + output, "<br>");

num1 %= num2;

output = '<p>' + num1 + "</p>";
d.write("num1 %= num2 : " + output, "<br>");
