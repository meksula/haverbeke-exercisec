var range = function(start, end, increment) {
	var increase = 1;
	if (increment != undefined) {
		increase = increment;
	}

	var arr = [];
	if (increase > 0) {
		while(start <= end) {
			arr.push(start);
			start += increase;
		}
	}
	else if(increase < 0) {
		while(start <= end) {
			arr.push(end);
			end += increase;
		}
	}
	return arr;
}

var sum = function(range) {
	console.log(range);
	var acc = 0;
	for(var item in range) {
		acc += range[item];
	}
	return acc;
}

var rangeArr = range(1, 10, -2);
console.log(rangeArr);

var sumarized = sum(rangeArr);
console.log('SUM: ' + sumarized);