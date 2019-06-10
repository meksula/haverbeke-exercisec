
function reverseNew(array) {
	var arrayNew = [];

	for(var i = array.length - 1; i >= 0; i--) {
		arrayNew.push(array[i]);
	}

	return arrayNew;
}

function reverseInPlace(array) {
	var lastIndex = array.length - 1;

	for(var i = 0; i < array.length / 2; i++) {
		const buffered = array[lastIndex];
		array[lastIndex] = array[i];
		array[i] = buffered;
		lastIndex--; 
	}

	return array;
}


var arg = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

console.log(reverseNew(arg));

console.log(reverseInPlace(arg));