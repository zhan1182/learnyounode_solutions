var http = require('http');
var bl = require('bl');

var dataList = [];
var ct = undefined;
var index = 0;

// the value ct is determined by the for loop..
// Once the ct is passed into the function, the value won't change
// So, the ct can record the data in order.
function getData(ct){
	http.get(process.argv[ct + 2], function(response){

		response.pipe(bl(function(err, data){

			if(err){
				return console.error(err);
			}

			data = data.toString();

			dataList[ct] = data;
			index++;

			if (index == 3) {
				dataList.forEach(function(data){
					console.log(data);
				});
			}

		}));

	});

}

for(ct = 0; ct < 3; ct++){
	getData(ct);
}


