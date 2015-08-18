
var http = require('http');
var url = require('url');

var portNumber = process.argv[2];

var server = http.createServer(function(request, response){

	var json_info = url.parse(request.url, true);

	var time = json_info.query.iso;
	var date = new Date(time);

	response.writeHead(200, {'Content-Type': 'application/json'});

	if(json_info.pathname === '/api/parsetime'){
		response.write(JSON.stringify({
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		}));
	}
	else if(json_info.pathname === '/api/unixtime'){
		response.write(JSON.stringify({
			'unixtime': date.getTime()
		}));
	}

	response.end();

});

server.listen(portNumber);
