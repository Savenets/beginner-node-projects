
var fs=require('fs');
var data=fs.readFileSync('./big-file.txt');
var res=data.toString().split(/\b\S+\b/g).length;
console.log(res-1);