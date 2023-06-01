const fs = require("fs");
const bioData = {
    firstName: "Anuapm",
    lastName: "Bera",
    age: 23
}

// js object to json
const jsonData = JSON.stringify(bioData);

// This json push into a  new file
fs.writeFile("data.json", jsonData, (err) => {
});

// read the json from that file and convert to js object
fs.readFile("data.json", "utf8", (err, data) => {
    // console.log(data);
    const objData = JSON.parse(data);
    console.log(objData);    
});
