// declaration of method in classic way
var square = function(num) {
	return num * num;
}
console.log(square(1002));

// declaration of method as anonymous function
var nameprint = () => console.log('Karol Meksuła');
nameprint();

// declaration of method as anonymous function with parameter
var nameprintAndAge = (age) => {
	nameprint();
	console.log('His age: ' + age);
} 
nameprintAndAge(26);

// access scope - nested function in function
var printCustomer = function() {
	var name = 'Karol Meksuła';
	var names = function(age) {
		console.log(name + " in age of " + age + " years old.")
	};
	var title = function(title) {
		name = title.concat(name);
		console.log(name);
	};

	names(26);
	title('prof. ');
}
printCustomer();

// scope test var vs let
let testLet = function() {
	let txt = "It is realy nice weather today.";
	{
		let txt = "Terrible weather today :/";
	}
	console.log(txt);
}
var testVar = function() {
	var txt = "It is realy nice weather today.";
	{
		var txt = "Terrible weather today :/";
	}
	console.log(txt);
}

testLet();
testVar();

// pass function as argument and invoke it in other function
var getWeather = function(provider) {
	console.log(provider());
}
var weatherProvider = function() {
	return '\n-temperature: 26 C\n-pressure: 1020HPA\n-sky: sunny';
}

getWeather(weatherProvider);

// function declaration can be invoke even if it is declared bellow invocation
// but if you assign function to variable it won't work!
customerNames();

function customerNames() {
	console.log('Henryk Sienkiewicz');
}

// optional arguments in function
function printAllNames(firstname, lastname, secondname) {
	if (secondname === undefined) {
		return firstname + ' ' + lastname;
	}
	return firstname + ' ' + secondname + ' ' + lastname;
}

console.log(printAllNames('Karol', 'Meksuła'));
console.log(printAllNames('Karol', 'Meksuła', 'Andrzej'));

// functions wrapping
function multiple(factor) {
	return function(amount) {
		return factor * amount;
	}
}

var multipler = multiple(5);
var resultAmount = multipler(5);
console.log(resultAmount);

// recursion
function power(factor, max) {
	if (factor >= max) {
		return factor;
	}
	return power(factor * 2, max);
}

console.log(power(2, 1024));