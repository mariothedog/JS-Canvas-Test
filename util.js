function round(number, dec = 0) {
	const roundPlaceValue = 10 ** dec;
	return Math.round(number * roundPlaceValue) / roundPlaceValue;
}

function randRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}