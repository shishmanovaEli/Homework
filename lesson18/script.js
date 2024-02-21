function lesson18() {
    var a = 0.1;
    var b = 0.7;
    var c = 0.2;
    var d = 0.8;
    var mathOperation = (a + b);
    var mathOperationTwo = (a + a + d);
    var mathOperationThree = (c + d);

   console.log (mathOperation.toFixed(2));
   console.log (a + " + " +  b +  " = " + mathOperation.toFixed(2));

   console.log (mathOperationTwo.toFixed(2));
   console.log (a + " + " + a + " + " + d + " = " + mathOperationTwo.toFixed(2));

   console.log (mathOperationThree.toFixed(2));
   console.log (c + " + " +  d +  " = " + mathOperationThree.toFixed(2));

   document.write(mathOperation.toFixed(2));
   document.write("<br>");
   document.write(a + " + " +  b +  " = " + mathOperation.toFixed(2));
   document.write("<br>");
   document.write(mathOperationTwo.toFixed(2));
   document.write("<br>");
   document.write(a + " + " + a + " + " + d + " = " + mathOperationTwo.toFixed(2));
   document.write("<br>");
   document.write(mathOperationThree.toFixed(2));
   document.write("<br>");
   document.write(c + " + " +  d +  " = " + mathOperationThree.toFixed(2));
   }
lesson18()