d.write("===============page 60==================<br>");

var a = 10;
var b = 20;
var m = 30;
var n = 40;

var result;
var output;

d.write('var a = 10;<br>var b = 20;<br>var m = 30;<br>var n = 40;<br><br>');


result = a > b || b >= m || m > n;
d.write('result = a > b || b >= m || m > n;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = a > b || b >= m || m <= n;
d.write('result = a > b || b >= m || m <= n;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = a <= b && b >= m || m <= n;
d.write('result = a <= b && b >= m || m <= n;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = a <= b && b <= m || m <= n;
d.write('result = a <= b && b <= m || m <= n;<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");

result = !(a > b);
d.write('result = !(a > b);<br>');

output = '<p>' + result + "</p>";
d.write(output, "<br>");