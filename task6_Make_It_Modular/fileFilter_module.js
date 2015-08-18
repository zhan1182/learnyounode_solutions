

var fs = require('fs');
var path = require('path');


module.exports = function(dirPath, fileType, callback){

	fs.readdir(dirPath, function(err, list){

		if(err){
			return callback(err);
		}


		list = list.filter(function(fileName){

			return path.extname(fileName) === '.' + fileType;

		});

		return callback(null, list);

	});
}