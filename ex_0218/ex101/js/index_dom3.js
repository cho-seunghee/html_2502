const x = d.getElementById("main");
const y = x.getElementsByTagName("p");

output = '<div class="output">';
output += '"main" 내부의 첫 번째 단락(색인 0)은 다음과 같습니다.: ' + y[0].innerHTML;
output += '</div>';

d.getElementById("demo3").innerHTML = output;

