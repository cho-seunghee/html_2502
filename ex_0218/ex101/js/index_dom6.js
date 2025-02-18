const x3 = d.forms["frm1"];
let text = "";
for (let i = 0; i < x3.length ;i++) {
  text += x3.elements[i].value + "<br>";
}

output = '<div class="output">';
output += text;
output += '</div>';

d.getElementById("demo6").innerHTML = output;

function fn_submit()
{
  text = "";

  for (let i = 0; i < x3.length ;i++) {
    text += x3.elements[i].value + "<br>";
  }
  
  output = '<div class="output">';
  output += text;
  output += '</div>';
  
  d.getElementById("demo6").innerHTML = output;
}