
function masterfn()
			{
			if(document.getElementById('25radio1').checked ) 
				{
				 let strng= document.getElementById("25txt1").value;
				 let substrng=document.getElementById("25txt2").value;
				 let ans=strng.search(substrng);
				 if(ans==-1) document.getElementById("ResponseDisplay").innerHTML= "The given string does not contain this substring";
				 else document.getElementById("ResponseDisplay").innerHTML= "The Substring starts at index: "+ans;
				 return false;
				}	
			else if(document.getElementById('25radio2').checked ) 
				{
				 let strng=document.getElementById("25txt1").value ;
				 let ans=strng.toUpperCase();
				 document.getElementById("ResponseDisplay").innerHTML= ans;
				 return false;
				}
			else if(document.getElementById('25radio3').checked ) 
				{
				 let strng=document.getElementById("25txt1").value ;	
				 let ans=strng.toLowerCase();
				 document.getElementById("ResponseDisplay").innerHTML= ans;
				 return false;
				}
			else if(document.getElementById('25radio4').checked) 
				{
				 let strng=document.getElementById("25txt1").value ;
				 let ans=strng.replace(/\s/g, "");
				 document.getElementById("ResponseDisplay").innerHTML= ans;
				 return false;
				}
			else if(document.getElementById('25radio5').checked) 
				{
				 let strng= document.getElementById("25txt1").value;
				 let substrng=document.getElementById("25txt2").value;	
				 let ans=strng.concat(" ",substrng);	
				 document.getElementById("ResponseDisplay").innerHTML= ans;
				 return false;
				}
			else if(document.getElementById('25radio6').checked ) 
				{
				 let strng=document.getElementById("25txt1").value ;
				 let substrng=document.getElementById("25txt2").value ;
				 let newsubstrng=document.getElementById("25txt3").value ;
				 let ans=strng.replace(substrng,newsubstrng);
				 document.getElementById("ResponseDisplay").innerHTML = ans;
				 return false;
				}
			}
			
			
			

function Event1()
				{
				 		
				 document.getElementById("25txt2").disabled = false;
				 document.getElementById("25txt3").disabled = true;
				}	
function Event2() 
				{
				
				 document.getElementById("25txt2").disabled = true;
				 document.getElementById("25txt3").disabled = true;
				}
function Event3() 
				{
				
				 document.getElementById("25txt2").disabled = true;
				 document.getElementById("25txt3").disabled = true;
				}
function Event4()
				{
				 
				 document.getElementById("25txt2").disabled = true;
				 document.getElementById("25txt3").disabled = true;
				}
function Event5()
				{
				 	
				 document.getElementById("25txt2").disabled = false;
				 document.getElementById("25txt3").disabled = true;
				}
function Event6()
				{
				 
				 document.getElementById("25txt2").disabled = false;
				 document.getElementById("25txt3").disabled = false;
				}
			