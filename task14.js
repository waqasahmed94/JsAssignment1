var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//Explain the output at each stage:
 // 1 - 0 + 1 + 1 === 3   after  a= 1, and b=0
--a; // a=0 

--a - --b;    // a= -1  and b= -1 so (-1) - (-1), -1+1 =0

--a - --b + ++b;   //a=-2; b=-2;so    b=-1

--a - --b + ++b + b--;    // a= -3 - (-2) + (-1) + (-1)....-1-1-1

document.write("A is: " + a + "<br>");
document.write("B is: " + b + "<br>");
document.write("Result is: " + result);



