const fs=require("fs");

var names=["Saurabh", "Shubham", "Tanmay", "Naveen" ,"Harshit"];
const nameStr=names.join(' | ');


fs.writeFile('names.txt',nameStr,(err)=>{
    if(err)
        console.error(err);
    else
        console.log("File Written Succesfully..");    
});