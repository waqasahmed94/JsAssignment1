var celciusInput = 25;
var farhenhiet = (celciusInput * 9 / 5) + 32;

var farhenhietInput = 70;
var celcius = (farhenhietInput - 32) * 5 / 9;

document.write(celciusInput + "^C is " + farhenhiet + "^F");
document.write("<br>");
document.write(farhenhietInput + "^F is " + celcius + "^C");