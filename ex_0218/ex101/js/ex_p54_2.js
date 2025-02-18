d.write("===============page 54==================<br>");

var output;
var str = "<span><table border='1'>";
str += "<tr>";
str += "<td>1</td> <td>2</td> <td>3</td>";
str += "</tr>";
str += "</table></span>";

d.write('var str = "&lt;table border=\'1\'&gt;";<br>str += "&lt;tr&gt;";<br>str += "&lt;td&gt;1&lt;/td&gt; &lt;td&gt;2&lt;/td&gt; &lt;td&gt;3&lt;/td&gt;";<br>str += "&lt;/tr&gt;";<br>str += "&lt;/table&gt;";<br><br><br>');

d.write(str);