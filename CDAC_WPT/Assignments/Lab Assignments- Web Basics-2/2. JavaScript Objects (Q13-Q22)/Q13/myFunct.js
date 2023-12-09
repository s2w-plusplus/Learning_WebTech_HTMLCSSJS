
var days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var dayInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];		

function greet(hrs){
					if(hrs<12) return "Good Morning" ;
					else if(hrs<18) return "Good Afternoon" ;
					else if(hrs<21) return "Good Evening" ;
					else return "Have a Good Night" ;
					}					
function isLeapYr(yr){
					var flag=false;
					if(  (((yr%4)==0)&&((yr%100)!=0)) || (((yr%100)==0)&&((yr%400)==0)) ) flag=true;
					else response=false;
					return (flag);
					}										
function daysLeft(mnth,date,yr){
								var dpass=0;
								var i;
								for(i=0;i<mnth;i++) dpass=dpass+dayInMonth[i];	
								dpass=dpass+date;	
								if(isLeapYr(yr)) return(366-dpass);	
								else return	(365-dpass);
								}
								
//This program is done by saurabh without any help from internet!