var fs = require('fs'),
    treehash = require('./lib/treehash.js');

console.info('\n\nLoading the entire README.md into memory...');
var buf = require('fs').readFileSync('README.md');
console.info("The treehash for file README.md:\n" + treehash.getTreeHashFromBuffer(buf));

var thStream = treehash.createTreeHashStream ();

console.info('\n\nLoading README.md as a stream...');
var readStream = fs.createReadStream('README.md');
readStream.on('data', function(chunk) {
    console.info('Updating treehash...');
    thStream.update(chunk);
});

readStream.on('end', function (){
    console.info("The treehash for file README.md:\n" + thStream.digest());
    // console.info("The treehash for file README.md:\n" + thStream.digest()); // Exception from a second digestion.
});


