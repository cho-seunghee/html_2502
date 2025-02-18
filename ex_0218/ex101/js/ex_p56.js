d.write("===============page 56==================<br>");

let nnum1 = 10;
let nnum2 = 20;
let rresult;
let rresult2;
var output;

d.write("`${nnum1} + ${nnum2}`<br>");

rresult2 = `${nnum1} + ${nnum2}`;

output = '<p>' + rresult2 + "</p>";
d.write(output + "<br>");

d.write("var nnum1 = 10;<br>var nnum2 = 20;<br>");

nnum1--;
output = '<p>' + nnum1 + "</p>";
d.write("nnum1-- : " + output, "<br>");

nnum1++;
output = '<p>' + nnum1 + "</p>";
d.write("nnum1++ : " + output, "<br>");

rresult = nnum2++;
output = '<p>' + rresult + "</p>";
d.write("rresult = nnum2++ : " + output, "<br>");

rresult = ++nnum2;
output = '<p>' + rresult + "</p>";
d.write("rresult = ++nnum2 : " + output, "<br>");