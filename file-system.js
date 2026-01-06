const fs = require("fs");

// Create file
fs.writeFileSync("welcome.txt", "Hello Node");

// Read file
const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);
