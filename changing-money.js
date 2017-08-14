process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', outsideEngine);
function outsideEngine(chunk){
	var lines = chunk.toString().split('\n');
	const n = +(lines[0].toString());
	console.log(startTest(n));
	process.exit();
}

function startTest (sum) {
	const coins = [10, 5, 1];
	let result = 0;
	let moneyLeft = sum;
	for(let i = 0; i<coins.length; i++){
		const coinsThisKind = parseInt(moneyLeft / coins[i]);
		result += coinsThisKind;
		moneyLeft -= (coinsThisKind * coins[i]);
	}
	return result;
}