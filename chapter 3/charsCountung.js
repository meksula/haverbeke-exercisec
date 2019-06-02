// old version counting only char 'B'
function countBs(str) {
	var c = 0;
	var occurence = 0;
	while(str.length > c) {
		if (str.charAt(c) == 'B') {
			occurence++;
		}
		c++;
	}
	return occurence;
}
console.log('\'B\' letter occurance: ' + countBs('AliBaBa'));


// new version
function countChars(str, char) {
	var c = 0;
	var occurance = 0;
	while(str.length > c) {
		if (str.charAt(c) == char) {
			occurance++;
		}
		c++;
	}
	return occurance;
}
var string = 'Ain\'t no sunshine in the city today.';
console.log('\'C\' letter occurance: ' + countChars(string, 'c'))

