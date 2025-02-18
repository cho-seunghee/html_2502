const x2 = d.querySelectorAll("p.intro");

output = '<div class="output">';
output += 'class="intro"가 포함된 첫 번째 단락(색인 0)은 다음과 같습니다.: ' + x2[0].innerHTML;
output += '</div>';

d.getElementById("demo5").innerHTML = output;
