const  fs=require("fs");

fs.readFile('customer.json',function(err,data){
    if (err) throw err;
   
  
    var object = JSON.parse(data.toString());
    object.forEach((curr)=>{
           console.log(`${curr.name} | ${curr.ph_no} `); 
    });
    

});