var dirPath = process.argv[2];
var fileType = process.argv[3];

var readDir_module = require('./fileFilter_module.js');

readDir_module(dirPath, fileType, function(err, list){

	if(err){
		console.error('There is an error: ', err);
		
	}
	else{
		list.forEach(function(fileName){
			console.log(fileName);
		});

	}


});
