process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', outsideEngine);
function outsideEngine (chunk) {
	var lines = chunk.toString().split('\n');
	const n = +(lines[0].toString());
	console.log(startTest(n));
	process.exit();
}

function fibonacci (n) {
	let numbers = [0, 1];
	for(let i = 2; i<=n; i++){
		numbers[i] = (numbers[i-1] + numbers[i-2]) % 10;
	}
	return numbers[n];
}

// let time1 = 0;
function startTest (n) {
	// const timeBefore1 = Date.now();
	const result = fibonacci(n);
	// const timeAfter1 = Date.now();
	// time1+=(timeAfter1-timeBefore1);
	// console.log({'time': time1});
	return result;
}