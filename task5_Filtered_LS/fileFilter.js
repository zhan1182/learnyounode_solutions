

var dirPath = process.argv[2];

var fileType = '.' + process.argv[3];

var fs = require('fs');
var path = require('path');

fs.readdir(dirPath, function(err, list){

	if(err){
		throw err;
	}

	// console.log(list);

	list.forEach(function(fileName){

		if(path.extname(fileName) === fileType){

			console.log(fileName);
		}

	});



});