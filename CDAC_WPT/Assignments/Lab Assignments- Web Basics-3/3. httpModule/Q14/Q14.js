const http = require('http');
const imported = require('./greet');
var text = imported.greet();
 
http.createServer(function(req,resp){
   
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write("<h1>"+text+"</h1>");
    resp.end();
}).listen(3000, '127.0.0.1');

console.log("Server running at http://localhost:3000/");