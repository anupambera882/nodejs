const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // 1st way
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // });
    // rstream.on("error", () => {
    //     console.log(err);
    //     res.end("file not found");
    // });
    // // finish

    // 2nd way
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});


server.listen(8000, "127.0.0.1");