const MAX = 100;
var c = 0;

while(c < MAX) {
	if (c % 3 === 0 && c % 5 === 0) { 
		console.log(c + ': fizz buzz'); 
	} else {
		if (c % 3 === 0) { 
		console.log(c + ': fizz')
		}
    	if (c % 5 === 0) { 
    		console.log(c + ': buzz')
    	}
	}
	
    c++;
}