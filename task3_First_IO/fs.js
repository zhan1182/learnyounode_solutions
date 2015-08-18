

var fs = require('fs');

var filePath = process.argv[2];

// console.log(filePath);

var buffer = fs.readFileSync(filePath);

var content = buffer.toString();

var line_list = content.split('\n');

// console.log(line_list);

console.log(line_list.length - 1);