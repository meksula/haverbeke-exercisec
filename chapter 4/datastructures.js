// delete property from object

var weather = {
	sun: true,
	name: undefined, // not useful property
	temperature: '26 C',
	dayOfWeek: 'monday'
};

console.log(weather);

delete weather.name;   // removing not wanted property
console.log(weather);

// check is property placed in object
var isExist = "name" in weather;
console.log(isExist);

var isExist2 = "sun" in weather;
console.log(isExist2);

// checking type of property
console.log(typeof isExist);

// indexOf
var temperatures = [
	{dayOfWeek: 'Monday', temp: '26 C'},
	{dayOfWeek: 'Thuesday', temp: '19 C'},
	{dayOfWeek: 'Wensday', temp: '24 C'}
];
console.log(temperatures.indexOf({dayOfWeek: 'Wensday', temp: '24 C'})); // returns -1 if there is no element in array

var friday = {dayOfWeek: 'Friday', temp: '31 C'};
temperatures.push(friday);

console.log(temperatures.indexOf(friday));

// maps
var map = {};

map[temperatures[0].dayOfWeek] = temperatures[0].temp; //map[key] = value; 
console.log(map);

function mapToMap(temperatures) {
	var innerMap = {};
	for(var i = 0; i < temperatures.length; i++) {
		innerMap[temperatures[i].dayOfWeek] = temperatures[i].temp;
	}
	return innerMap;
}

var newMap = mapToMap(temperatures);
console.log(newMap);

// for in loop
for(var item in newMap) {
	console.log(item);
}

//unshift, shift, push, pop
var days = ['thusday', 'wensday'];

days.push('friday');
console.log(days);

days.pop();
console.log(days);

days.unshift('monday');
console.log(days);

days.shift();
console.log(days);

// lastIndexOf
var amount = [3, 5, 5, 3, 5, 4, 3];
console.log(amount.lastIndexOf(5));

// slice
var sliced = amount.slice(); // zwraca kopię identyczną
console.log(sliced);

var sliced2 = amount.slice(1, amount.length - 1); // to samo co .slice(1)
console.log(sliced2);

var sliced3 = amount.slice(3); // wycina elementy poza trzema elementami na początku i na końcu
console.log(sliced3);

// concat
var merged = sliced3.concat(sliced2);
console.log(merged);

// indexOf on string
var name = 'Karol';
console.log(name.indexOf('o'));

// trim 
var unformattedName = ' Karol ';
console.log('*' + unformattedName.trim() + '*');

// charAt
console.log(unformattedName.trim().charAt(0));

// check amount of arguments in method

function argsDemo() {
	console.log('Arguments amount: ' + arguments.length);
}

argsDemo(1, 2, 3, 4, {}, [2,3]);

// random
console.log('Random floored amount: ' + Math.floor(Math.random() * 100));
console.log('Random ceiled amount: ' + Math.ceil(Math.random() * 100));
console.log('Random rounded amount: ' + Math.round(Math.random() * 100));

// global object
// console.log(window.unformattedName); works only for web browser - window object gathers all global variables
