const fs=require("fs");

fs.readFile('SimpleText.txt',(err,data)=>{
    if(err) console.error(err); 

    var count=0;
    let strArr=data.toString().split("\n");
    
    strArr.forEach((current,index)=>{
        
        console.log(++index + "." + current + "\n");
    });
});
