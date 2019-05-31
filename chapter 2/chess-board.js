const rowLen = 8;
const colLen = 8;

var c = 0;

for(var i = 0; i < rowLen; i++) {
	var result;
	if (i % 2 === 0) {
		result = printRow({a: 1, b: 0}, colLen);
	}
	else {
		result = printRow({a: 0, b: 1}, colLen);
	}
	console.log(result);
} 


function printRow({a, b}, len) {
	var chars = [' ', '#'];
	var row = '';

	for(var i = 0; i < len; i++) {
		if (i % 2 === 0) {
			row = row.concat(chars[a]);
		} else {
			row = row.concat(chars[b]);
		}
	}
	return row;
}