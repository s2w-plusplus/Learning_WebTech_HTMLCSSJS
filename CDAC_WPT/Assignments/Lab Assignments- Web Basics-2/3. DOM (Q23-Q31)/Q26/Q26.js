function digAdd()
{
	
	var x=document.getElementById("26Num").value;
	var ans=0;
	
	for(let i=0;i<4;i++)
	{
		if(x==0) break; 
		ans+=(x%10);
		x=parseInt(x/10);
	}
	document.getElementById("ResponseDisplay").innerHTML=ans;
	return false;
}
