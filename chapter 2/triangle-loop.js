const MAX = 7;

var c = 0;

while(c < MAX) {
	let txt = '';
	for(var i = 0; i <= c; i++) {
		txt = txt.concat('#');
	}
	console.log(txt);
	c++;
}