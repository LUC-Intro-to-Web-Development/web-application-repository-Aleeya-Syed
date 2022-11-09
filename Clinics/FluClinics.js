var fs = require('fs');

fs.readFile('index.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('Locations to get Flu Vaccine:');