//1. Read JSON file from the file, name can be hardcoded
//2. Print it to console

//version 1

var config = require('./info.json');
console.log(config.firstName + ' ' + config.lastName);

//version 2

var fs = require('fs'),
    obj

// Read the file and send to the callback
fs.readFile('./info.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
	console.log(obj)
    // You can now play with your datas
}