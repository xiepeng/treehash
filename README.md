# treehash.js

treehash.js is a node.js implementation of the SHA256 Tree Hash algorithm, notably used by Amazon Glacier.

## Use

```var fs = require('fs');
var treehash = require('./treehash');

fs.readFile('./treehash.js', function(err, buffer) {
  var sha = treehash(buffer)
  console.log("SHA256 Tree Hash -", sha)
})
```