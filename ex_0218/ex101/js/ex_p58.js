d.write("===============page 58==================<br>");

var a = 10;
var b = 20;
var c = 10;
var f = "20";
var result;
var output;

d.write('var a = 10;<br>var b = 20;<br>var c = 10;<br>var f = "20";<br>var result;<br>var output;<br>');



result = a > b;
d.write('result = a > b;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = a < b;
d.write('result = a < b;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = a <= b;
d.write('result = a <= b;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = b == f;
d.write('result = b == f;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = a != b;
d.write('result = a != b;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = b === f;
d.write('result = b === f;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");