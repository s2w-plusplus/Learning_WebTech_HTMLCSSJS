var fs=require("fs");

const text=fs.readFile('emp.txt',(err,data)=>{
    if(err)
        return err
    
    var StrArr=data.toString().split('\n');
    var total=StrArr.reduce(function(acc,str){
        return acc + parseInt(str.trim().split(':')[3]);
    },0);    
    console.log(`Total salaries sanctioned: ${total}`);
});
