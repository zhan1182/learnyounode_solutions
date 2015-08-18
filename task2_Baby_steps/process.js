

//console.log(process.argv);

var sum = 0;
var ct = undefined;

for(ct = 2; ct < process.argv.length; ct++){

	sum += Number(process.argv[ct]);

}

console.log(sum);