d.write("===============page 52==================<br>");

var output;
const year = 2002;
const country = "대한민국";
const eventName = "월드컵";
const str_1 = `${year}년 ${country} ${eventName} 개최<br><br>`;
d.write('const year = 2002;<br>const country = "대한민국";<br>const eventName = "월드컵";<br>const str_1 = `${year}년 ${country} ${eventName} 개최`;<br>');


output = '<p>' + str_1 + "</p>";
d.write(output);

const age = 10;
const afterYear = 10;
const str_2 = `현재 나이는 ${age}살이지만<br> ${afterYear}년 후에는 ${age + afterYear}살이 됩니다.`;

d.write('const age = 10;<br>const afterYear = 10;<br>const str_2 = `현재 나이는 ${age}살이지만 ${afterYear}년 후에는 ${age + afterYear}살이 됩니다.`;<br>');

output = '<p>' + str_2 + "</p>";
d.write(output);