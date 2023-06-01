const http = require("http");
const url = require("url")
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("hello from the other side");
    } else if (req.url == "/about") {
        res.end("hello from the aboutus side");
    } else if (req.url == "/contact") {
        res.end("hello from the contactUs side");
    } else if (req.url == "/userApi") {
        fs.readFile(`${__dirname}/api.json` , "utf-8" ,(err , data) => {
            console.log(data);
            res.end(data);  
        })
    } else {
        res.writeHead(404, { "content-type": "txt/html" });
        res.end("404 erroe page doesn't exist");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening to the port no 8000");
});