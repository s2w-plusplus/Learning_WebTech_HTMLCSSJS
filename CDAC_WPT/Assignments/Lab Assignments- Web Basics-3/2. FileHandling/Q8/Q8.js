var fs = require('fs');
var emp = 
[   {
    "empid":1001,
    "empname":"Steve",
    "salary": 670000
    },
    {"empid":1002,
    "empname":"Bruce",
    "salary": 350000 
    },
    {
    "empid":1003,
    "empname":"Tony",
    "salary": 754500
    }
];

emp.forEach(function(obj){
    var entry = [obj.empid,obj.empname,obj.salary].join(":") + "\n";
    fs.appendFile('empInfo.txt', entry, err=>{
        if (err) throw err;
        console.log("File Appended");
    })
})