process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', outsideEngine);
function outsideEngine(chunk){
	var lines = chunk.toString().split('\n');
	const n = +(lines[0].toString());
	if(n > 1) {
		const numbers = lines[1].toString().split(' ').map(el => +el);
		console.log(startTest(numbers));
	}
}

function getHighest (numbers) {
	const max = Math.max(...numbers);
	return numbers.splice(numbers.indexOf(max), 1)[0];
}

function fastImplementation(numbers){
	let tempNumbers = [...numbers];
	return getHighest(tempNumbers) * getHighest(tempNumbers);
}


function startTest (numbers) {
		return fastImplementation(numbers);
}

function stressTest() {
	while(true){
		const n = Math.floor(Math.random() * 100 + 2);
		let numbers = [];
		for(let j = 0; j<n; j++){
			numbers.push(Math.floor(Math.random() * 700));
		}
		console.log(`n: ${n}, numbers: ${numbers}`);
		const results = startTest(numbers, n)

		if(results.result1 !== results.result2){
			console.log({'result1': results.result1});
			console.log({'result2': results.result2});
			break;
		} else {
			console.log('OK');
		}
	}
}

// stressTest();
function naiveImplementation(numbers, n) {
	let theBiggest = 0;
	for(let i=0; i<n; i++){
		let tempNumbers = [...numbers];
		const number1 = tempNumbers.splice(i, 1);
		for(let j=0; j<n-1; j++){
			if(number1*tempNumbers[j] > theBiggest){
				theBiggest = number1*tempNumbers[j];
			}
		}
	}
	return theBiggest;
}
