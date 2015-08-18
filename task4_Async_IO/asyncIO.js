

var filePath = process.argv[2];

var fs = require('fs');

var asyncFileRead = fs.readFile(filePath, function callback(err, data){

	if(err){
		throw err;
	}

	var line_list = data.toString().split('\n');

	console.log(line_list.length - 1);

});

