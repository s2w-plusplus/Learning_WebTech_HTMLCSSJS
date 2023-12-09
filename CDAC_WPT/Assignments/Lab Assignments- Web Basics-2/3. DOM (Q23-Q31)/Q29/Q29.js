function myCalc()
{
  var p=Number(document.getElementById("29num1").value);
  var r=Number(document.getElementById("29num2").value);
  var n=Number(document.getElementById("29num3").value);
  
  var SI=p*r*n*0.01;
  document.getElementById("29text4").value=(SI+p)/(12*n);
  document.getElementById("29text5").value=SI+p;
  document.getElementById("29text6").value=SI; 
 return false 
}