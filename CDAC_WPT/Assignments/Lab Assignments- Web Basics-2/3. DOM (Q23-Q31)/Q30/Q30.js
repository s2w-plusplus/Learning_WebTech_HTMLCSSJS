function formValidate()
	{
	 if( cnameCheck() && dateCheck()) 
		{
		 let a=document.getElementById("30num1").value;
		 let b=document.getElementById("30txt1").value;
		 let c=document.getElementById("30dt1").value;
		 let d=document.getElementById("30dt2").value;
		 let e=document.getElementById("30num2").value;
		 var newOrder={OId:a,Cname:b,Bdate:c,Sdate:d,Total:e};
		 formTable(newOrder);
		}
	 else 
		{
		 document.getElementById("span3").innerHTML="Please Ensure Valid Entries In the Form!";
		}
	return false;
	}

var serial=0;	
var template='<html>' +
'<head>' +
'<style>'+
        'table, th, td {' +
						'border: 1px solid black;'+
						'padding:5px;'+
						'border-collapse:collapse;'+
						'margin:5px;'+
                      '}' +
'</style>'+
'<title>New Window</title>' +
'</head>' +
'<body>' +
'<h1>Shipment Information</h1>' +
'<table id="mytable" >' +
	'<tr>' +
		'<th>Sr.No</th>' +
		'<th>Order ID</th>' +		
		'<th>Customer Name</th>' +
		'<th>Billing Date</th>' +
		'<th>Shipping Date</th>' +
		'<th>Order Total</th>' +
	'</tr>' +
'<table>' +
'</body>' +
'</html>';	



function formTable(obj)
	{
	var win2=window.open("", "myWindow", "width=700, height=400");
	
	if(win2.document.body.hasChildNodes())
		{
		var mytable=win2.document.getElementById("mytable");
		var myRow=win2.document.createElement('tr');
			
		var sr_td=win2.document.createElement('td');
		var sr_no = win2.document.createTextNode(++serial);
		sr_td.appendChild(sr_no);
		myRow.appendChild(sr_td);
		for (let i = 0; i < 5; i++)
			{
			var tdata = win2.document.createElement('td');
			var celldata = win2.document.createTextNode(Object.values(obj)[i]);
			tdata.appendChild(celldata);
			myRow.appendChild(tdata);
			}
		mytable.appendChild(myRow);	
		}	
	else
		{
		var w2Base=document.createRange().createContextualFragment(template);
		win2.document.body.appendChild(w2Base);	
		}
}	
		
function cnameCheck()
	{
	 if((document.getElementById("30txt1").value.length) < 6)
		{
		document.getElementById("span1").innerHTML="Cust. name cannot be < 6 characters ";
		return false; 	
		}	  
	 else	
		{
		document.getElementById("span1").innerHTML="";
		return true;
		}
	} 
function dateCheck()
	{
	 var dtStr1=document.getElementById("30dt1").value;
	 var dtobj1=new Date(dtStr1.replace(/-/g, ','));	

	 var dtStr2=document.getElementById("30dt2").value;
	 var dtobj2=new Date(dtStr2.replace(/-/g, ','));

	 if(dtobj1>dtobj2)
		{
		 document.getElementById("span2").innerHTML="Billing Date cannot be greater than Shipping Date"; 	
		 return false;
		}
	 else	
		{
		 document.getElementById("span2").innerHTML="";
		 return true;
		}
	}
	
	