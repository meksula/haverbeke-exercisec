
var date = '1964-04-12';
var datetime = '2019-04-30 20:21';

function formatDate(value) {
	if (value === undefined || value.length < 8) {
		throw 'Cannot parse undefined or too short date!';
	}

	if (value.length <= 10) {
		const year = value.slice(0, 4);
		const month = value.slice(5, 7);
		const days = value.slice(8, 10);
		return days + '-' + month + '-' + year;
	}

	const year = value.slice(0, 4);
	const month = value.slice(5, 7);
	const days = value.slice(8, 10);
	const time = value.slice(11, 16);

	return days + '-' + month + '-' + year + ' ' + time;
}



var result = formatDate(datetime);
console.log(result);