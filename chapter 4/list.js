
const listMain = {
	value: 'First element',
	ref: {
		value: 'Second element',
		ref: {
			value: 'Third element',
			ref: undefined
		}
	}
};

function append(list, element) {
	var current = list;
	while(current != undefined) {
		if (current.ref == undefined) {
			current.ref = {
				value: element,
				ref: undefined
			}
			return list;
		}
		current = current.ref;
	}
}

function iteration(list) {
	var current = list;
	while(current != undefined) {
		console.log('\n***' + current.value);
		current = current.ref;
	}
}


append(listMain, 'Forth element');
append(listMain, 'Fifth element');
append(listMain, 'Sixth element');
append(listMain, 'Seventh element');

iteration(listMain);


var array = [10, 20, 30, 40, 50, 60, 70, 80];

function arrayToList(arr) {
	let result = {};
	for (let i = 0; i < arr.length; i++) {
		result = append(result, arr[i]);
	}
	return result;
}

console.log(JSON.stringify(arrayToList(array)));

function listToArray(list) {
	let array = [];
	while(list != undefined) {
		if (list.value != undefined) {
			array.push(list.value);
		}
		list = list.ref;
	}
	return array;
}


var convertedToList = arrayToList(array);
var convertedToArrayAgain = listToArray(convertedToList);
console.log(convertedToArrayAgain);


function prepend(list, initElement) {
	initElement.ref = list;
	return initElement;
}

 var prependResult = prepend(convertedToList, {value: 'Zero element', ref: null});
 iteration(prependResult);
 console.log(JSON.stringify(prependResult));

 function nth(list, index) {
 	if (index == 0) {
 		return list.value;
 	}
 	return nth(list.ref, index - 1);
 }

 console.log(nth(convertedToList, 3));