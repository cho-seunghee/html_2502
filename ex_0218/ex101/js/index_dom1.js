const element = d.getElementById("intro");

output = '<div class="output">';
output += "소개 단락의 텍스트는 다음과 같습니다: " + element.innerHTML;
output += '</div>';

d.getElementById("demo1").innerHTML = output;