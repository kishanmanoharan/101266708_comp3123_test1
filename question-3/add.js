const fs = require("fs"); // Import filesystem module
const path = require("path"); // Import path module

const pathName = path.join(__dirname, "Logs/"); // Path to files
console.log(pathName);

// Adding directory (path)
fs.mkdir(pathName, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("create directory..." + pathName);
});

// Adding files to path
let count = 10;
for (let x = 0; x < count; x++) {
  let fileName = "log" + x + ".log";
  fs.writeFile(pathName + fileName, "log" + x, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("create file..." + fileName);
    }
  });
}
