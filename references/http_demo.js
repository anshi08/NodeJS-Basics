const http = require('http');

//create server object

http.createServer((req,res)=>{
    //Write Response
    res.write("hello World!!!");
    res.end();
}).listen(5000,()=>console.log(`Server is running ....`))