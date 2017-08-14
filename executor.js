var exec = require('child_process').exec;
const path = require('path');
function puts(error, stdout, stderr) { console.log(stderr) }
console.log({'process.argv[2]': process.argv[2]});
exec(path.join(__dirname, 'adding', 'test.sh'), puts);