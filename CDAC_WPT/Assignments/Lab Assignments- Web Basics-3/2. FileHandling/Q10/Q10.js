const fs=require("fs");
const Resigned=[1007,1003,1010];
const fname='emp.txt';
const d = new Date();

fs.open(fname,'r',function(err1,fd1){
    if(err1) console.error(err1);

    fs.stat(fname,function(err2,stats){
        if(err2) console.error(err2);   
        var buffer=Buffer.alloc(stats.size);

            fs.read(fd1,buffer,0,buffer.length,null,function(err3,bytesRead,buffer){
                if(err3) console.error(err3);
                let data=buffer.toString("utf8",0,buffer.length);

                fs.open('quitEmp.txt','a',function(err4,fd2){
                    if(err4) console.error(err4);
                    data.split('\n').forEach((current)=>{
                        let id=current.trim().split(':')[0];
                        let name=current.trim().split(':')[1];
                        if(id=='1004' || id=='1007' || id=='1010'){
                            let text=`Employee ${id}->${name} resigned on ${d}\n`;
                            fs.appendFile('quitEmp.txt',text,(err5)=>{
                                if(err5) console.error(err5);    
                                console.log("Entry Added Successfully..");           
                            });
                        }                
                    });
                       
                });
                                    
            });

            
    });
});