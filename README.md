# treehash.js

treehash.js is a node.js implementation of the SHA256 Tree Hash algorithm, notably used by Amazon Glacier.

For more information, AWS has a good read through: http://docs.amazonwebservices.com/amazonglacier/latest/dev/checksum-calculations.html
## Use

```bash
npm install treehash
````
```node
var fs = require('fs');
var treehash = require('treehash');

fs.readFile('./treehash.js', function(err, buffer) {
  var sha = treehash(buffer)
  console.log("SHA256 Tree Hash -", sha)
})
```
