process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', outsideEngine);
function outsideEngine (chunk) {
	var lines = chunk.toString().split('\n');
	const n = +(lines[0].toString());
	const profits = lines[1]
		.toString()
		.split(' ')
		.map(el => +el)
		.sort((a, b) => a-b);
	const clicks = lines[2].toString()
		.split(' ')
		.map(el => +el)
		.sort((a, b) => a-b);
	console.log(startTest(profits, clicks));
}

function startTest (profits, clicks) {
	let result = 0;
	for(let i=0; i<profits.length; i++){
		result += profits[i] * clicks[i];
	}
	return result;
}