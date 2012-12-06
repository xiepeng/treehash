# treehash.js

treehash.js is a node.js implementation of the SHA256 Tree Hash algorithm, notably used by Amazon Glacier.

For more information, AWS has a good read through: http://docs.amazonwebservices.com/amazonglacier/latest/dev/checksum-calculations.html
## Use

```bash
npm install treehash
```

Calculate the Tree Hash by loading the entire file into a buffer:
```node
var fs = require('fs');
var treehash = require('treehash');

fs.readFile('./lib/treehash.js', function(err, buffer) {
  var sha = treehash.getTreeHashFromBuffer(buffer)
  console.log("SHA256 Tree Hash -", sha)
})
```


Incrementally calculate a treehash from a file stream:

```node
var fs = require('fs');
var treehash = require('treehash');

var thStream = treehash.createTreeHashStream ();

var fileStream = fs.createReadStream('./lib/treehash.js');
fileStream.on('data', function(chunk) {
    thStream.update(chunk);
});

fileStream.on('end', function (){
    var sha = thStream.digest();
  console.log("SHA256 Tree Hash -", sha)
});
```
