process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', outsideEngine);
function outsideEngine (chunk) {
	var lines = chunk.toString().split('\n');
	const numbers = lines[0].toString().split(' ').map(el=>+el);
	console.log(startTest(...numbers));
	process.exit();
}

function divide(bigger, smaller){
	if(smaller === 0){
		return bigger;
	}
	const rest = bigger % smaller;
	return divide(smaller, rest);
}

function greatestDivisor (n1, n2) {
	return divide(Math.max(n1, n2), Math.min(n1, n2))
}

// let time1 = 0;
function startTest (n1, n2) {
	// const timeBefore1 = Date.now();
	const result = greatestDivisor(n1, n2);
	// const timeAfter1 = Date.now();
	// time1+=(timeAfter1-timeBefore1);
	// console.log({'time': time1});
	return result;
}