const fs = require('fs')

// // create a folder
// fs.mkdir("node_code",(err) =>{
//     console.log("folder created");
// });

// // create a file and insert data
// fs.writeFile('./node_code/fs.txt', "This file created by is node js fs module",(err) =>{
//     console.log(err);
// });

// // In existing file insert data
// fs.appendFile('./node_code/fs.txt' , " This the second line of this file" , (err) =>{
//     console.log(err);
// });

// read data form existing file in buffer formate
// let data = fs.readFile("fs.txt")
// data = data.toString();
// console.log(data);

// // read data form existing file with string formate (without buffer format)
// fs.readFile("./node_code/fs.txt", "utf8" , (err , data) =>{
//     console.log(data);
// });

// // change file name
// fs.rename("./node_code/fs.txt","./node_code/fsModule.txt",(err) =>{
//     console.log(err);
// });

// // delete a file
// fs.unlink("./node_code/fsModule.txt",(err) =>{
//     console.log(err);
// })

// // delete a folder
// fs.rmdir("node_code", (err) => {
//     console.log(err);
// })


// // This file exist or not
// fs.access('fs.js', (err) => {
//     console.log('\nChecking Permission for reading the file');
//     if (err)
//         console.error('No Read access');
//     else
//         console.log('File can be read');
// });
