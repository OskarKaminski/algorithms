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

function multipleBig() {

}

function commonMultiple (n1, n2) {
	if(!Number.isSafeInteger(n1) || !Number.isSafeInteger(n2)){
		console.log('Input too big!');
	}
	const GCD = divide(Math.max(n1, n2), Math.min(n1, n2));
	// console.log({'n1 / GCD': n1 / GCD});
	// console.log({'n2 / GCD': n2 / GCD});

	const result = multipleBig(n1 / GCD, n2)
	if(!Number.isSafeInteger(result)){
		console.log('warning, too big');
	}
	return result;
}

// let time1 = 0;
function startTest (n1, n2) {
	// console.log({'Number.MAX_SAFE_INTEGER': Number.MAX_SAFE_INTEGER});
	// const timeBefore1 = Date.now();
	const result = commonMultiple(n1, n2);
	// const timeAfter1 = Date.now();
	// time1+=(timeAfter1-timeBefore1);
	// console.log({'time': time1});
	return result;
}