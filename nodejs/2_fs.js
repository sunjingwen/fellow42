let fs = require('fs');

/* fs.readFile('./a.txt', 'utf8', function(err, data){
    console.log(data);
});
console.log(111); */

var data = fs.readFileSync('./a.txt', 'utf8');

console.log(data);