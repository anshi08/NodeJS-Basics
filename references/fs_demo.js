const fs = require('fs');
const path = require('path');

//Create Folder
// fs.mkdir(path.join(__dirname,'/test1'),function(err){
//     if(err) throw err;
//     console.log('File Created!!!');
// })

//Create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!!!',function(err){
//     if(err) throw err;
//     console.log('File Created!')
// })

//Read the File
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// })

//Rename the File
// fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','Nodejs.txt'),function(err){
//     if(err) throw err;
//     console.log("File Renamed!!!")
// })

fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Nodejs is Awesome',function(err){
    if(err) throw err;
    console.log('File created')
})