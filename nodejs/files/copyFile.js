var fs = require('fs');
var file = fs.createReadStream('big-file.txt');

var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, {end: false});// param to not to end stream;

file.on('end', function(){
    console.log('fin');
    destFile.end('Finished!');
});