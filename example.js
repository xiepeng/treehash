var treehash = require('./lib/treehash.js');

var buf = require('fs').readFileSync('README.md');
console.info("The treehash for file README.md:\n" + treehash.getTreeHashFromBuffer(buf));

var thStream = treehash.createTreeHashStream ();
thStream.update(buf);
console.info("The treehash for file README.md:\n" + thStream.digest());
console.info("The treehash for file README.md:\n" + thStream.digest()); // Exception from a second digestion.

