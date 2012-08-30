var crypto = require('crypto');
module.exports = function(buffer) {
  var megabyte = 1024 * 1024;
  var shas = [];
  
  // calculate each megabyte's sha
  for(run=0;(run*megabyte) < buffer.length;run++) {
    var end = (run*megabyte)+megabyte > buffer.length ? buffer.length : (run*megabyte)+megabyte;
    var sha = crypto.createHash('sha256').update(buffer.slice((run*megabyte),end)).digest();
    shas.push(sha);
  }
  
  // reduce to one single sha to rule them all
  while (shas.length > 1) {
    var newShas = [];
    for (i=0; i<shas.length; i=i+2) {
      if (shas[i+1]) {
        var sha = crypto.createHash('sha256').update(shas[i]).update(shas[i+1]).digest();
        newShas.push(sha);
      } else {
        newShas.push(shas[i]);
      }
    }
    shas = newShas;
  }
  
  // convert final sha digest to hex
  var hexSha = '';
  for(var i=0;i<shas[0].length;i++) {
    var hexChar = ''+shas[0].charCodeAt(i).toString(16);
    if (hexChar.length == 1) hexChar = "0"+hexChar
    hexSha += hexChar
  }
  return hexSha;
}
