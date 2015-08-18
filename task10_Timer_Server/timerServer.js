
var net = require('net');

var portNumber = Number(process.argv[2]);

function zeroFill(num){
	return (num < 10 ? "0": "") + num;
}


var myServer = net.createServer(function(socket){

	var date = new Date();
	var month = date.getMonth() + 1;

	var timeString = date.getFullYear() + "-" + zeroFill(month) + "-" + zeroFill(date.getDate()) + " " 
	+ zeroFill(date.getHours()) + ":" + zeroFill(date.getMinutes()) + "\n";
	socket.write(timeString);
	socket.end();

});

myServer.listen(portNumber);