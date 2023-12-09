const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // if(req.url === '/'){//localhost:3000/
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.end(content);
    //     })
    // }
    // else if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.end(content);
    //     })
    // }
    // else if(req.url === '/contact'){
    //     fs.readFile(path.join(__dirname,'public','contact.html'),(err,content)=>{
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.end(content);
    //     })
    // }
    // else if(req.url === '/api/users'){
    //     const users = [
    //         {name:'Ayush',age:23},
    //         {name:'Vishwas',age:20}
    //     ]
    //     res.writeHead(200,{'Content-Type':'application/json'}) 
    //     res.end(JSON.stringify(users));
    // }

    //Build File Path
    let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html':req.url);

    //Extension of File
    let extname = path.extname(filePath);

    //Initial Content type
    let contentType = 'text/html';

    //Check ext and set content Type
    switch(extname){
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.png':
        contentType = 'text/png';
        break;
    case '.jpg':
        contentType = 'text/jpeg';
        break;
    case '.json':
        contentType = 'application/json';
        break;        
    }

    //Read File
    fs.readFile(filePath,(err,content) =>{  
        if(err){
            if(err.code == 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) =>{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content);
                })
            }else{
                res.writeHead(500);
                res.end(`Server Error :${err.code}`)
            }
        }else{
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content)
        }
    })
})

const PORT = 3000;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`))