const fs = require("fs");

fs.watch("./", (eventType, fileName) => {
    console.log(eventType);
    console.log(`${fileName}`);
});     