const element2 = d.getElementById('div2').getElementsByTagName("p");

output = '<div class="output">';
output += '첫 번째 단락(색인 0)의 텍스트는 다음과 같습니다.: ' + element2[0].innerHTML;
output += '</div>';

d.getElementById("demo2").innerHTML = output;