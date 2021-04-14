var val;
document.write("Value of variable declaration is: " + val);
val = 5;
document.write("<br>");
document.write("Initial value: " + val);
val++;
document.write("<br>");
document.write("Increment value: " + val);

var val = parseInt(val) + 7;
document.write("<br>");
document.write("After Addition value: " + val);

val--;
document.write("<br>");
document.write("After subtraction value: " + val);

val = val % 3;
document.write("<br>");
document.write("The remainder value: " + val);