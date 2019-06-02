function isEven(arg) {
	if (arg == 0) {
		return true;
	}
	if (arg == 1) {
		return false;
	}
	return isEven(arg - 2);
}

console.log(isEven(50));
console.log(isEven(75));