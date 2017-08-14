export function getHighest (numbers) {
	const max = Math.max(...numbers);
	console.log(max);
	return max;
	// return numbers.splice(numbers.indexOf(max), 1)[0];
}

export function readLine (line) {
	let numbers = line.toString().split(' ');
	const highest = [
		getHighest(numbers),
		getHighest(numbers)
	];
	return highest[0] * highest[1];
}